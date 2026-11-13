"""Tell Bing (and the other IndexNow engines: Yandex, Seznam, Naver) which docs pages are new or changed.

IndexNow (https://www.indexnow.org) lets a site ping search engines the moment a page is published instead of
waiting for the next crawl. Bing feeds ChatGPT search and Copilot, so a new post can be cited days sooner.

    python scripts/indexnow.py diff build/sitemap.xml     # before deploy: prints the changed URLs as JSON
    python scripts/indexnow.py submit '<json list>'       # after deploy: sends them

`diff` compares the freshly built sitemap with the one live right now: a URL is sent when it's new, or its
<lastmod> (the page's last git commit, sitemap lastmod: 'date') is newer than the live one. `--all` sends every
URL (a one-off, e.g. the first run). Unchanged pages are never resent: IndexNow asks for changed URLs only.

The key is public by design: it's the file static/<KEY>.txt, served at the site root, which proves we own the
host. Standard library only (runs on the GitHub runner without pip).
"""
import json
import sys
import urllib.error
import urllib.request
import xml.etree.ElementTree as ET

HOST = "docs.atomiktrading.io"
KEY = "202e487685010a9cb872a81b566b8713"
LIVE_SITEMAP = f"https://{HOST}/sitemap.xml"
NS = {"s": "http://www.sitemaps.org/schemas/sitemap/0.9"}
SKIP = ("/tags/", "/page/", "/search", "/archive", "/authors")  # listing pages, not content


def parse(xml_text):
    """{url: lastmod or ''} from a sitemap."""
    root = ET.fromstring(xml_text)
    out = {}
    for u in root.findall("s:url", NS):
        loc = (u.findtext("s:loc", "", NS) or "").strip()
        if loc and not any(s in loc for s in SKIP):
            out[loc] = (u.findtext("s:lastmod", "", NS) or "").strip()
    return out


def live_sitemap():
    try:
        # urllib's default "Python-urllib" user agent gets a 403 from the docs host.
        req = urllib.request.Request(LIVE_SITEMAP, headers={"User-Agent": "atomik-docs-indexnow/1.0"})
        with urllib.request.urlopen(req, timeout=20) as r:
            return parse(r.read().decode("utf-8"))
    except Exception as e:  # first deploy, outage: treat as empty -> everything counts as new
        print(f"live sitemap unreadable ({e}); treating every URL as new", file=sys.stderr)
        return {}


def changed(new, old):
    return sorted(u for u, mod in new.items() if u not in old or (mod and mod > old[u]))


def submit(urls):
    if not urls:
        print("IndexNow: nothing new or changed")
        return 0
    body = json.dumps({"host": HOST, "key": KEY, "keyLocation": f"https://{HOST}/{KEY}.txt",
                       "urlList": urls[:10000]}).encode()
    req = urllib.request.Request("https://api.indexnow.org/indexnow", data=body, method="POST",
                                 headers={"Content-Type": "application/json; charset=utf-8"})
    try:
        with urllib.request.urlopen(req, timeout=30) as r:
            status = r.status
    except urllib.error.HTTPError as e:
        status = e.code
    # 200 = accepted, 202 = accepted while the key is being checked. Anything else is reported, never fatal:
    # a failed ping only means the engines find the page on their next crawl, as before.
    print(f"IndexNow: HTTP {status} for {len(urls)} URL(s)")
    for u in urls:
        print("  ", u)
    if status not in (200, 202):
        print(f"::warning::IndexNow returned HTTP {status}")
    return 0


if __name__ == "__main__":
    cmd = sys.argv[1] if len(sys.argv) > 1 else ""
    if cmd == "diff":
        with open(sys.argv[2], encoding="utf-8") as f:
            new = parse(f.read())
        urls = sorted(new) if "--all" in sys.argv else changed(new, live_sitemap())
        print(json.dumps(urls, separators=(",", ":")))
    elif cmd == "submit":
        sys.exit(submit(json.loads(sys.argv[2] or "[]")))
    else:
        sys.exit(__doc__)
