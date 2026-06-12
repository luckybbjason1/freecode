#!/usr/bin/env python3
"""Batch-enhance blog articles with richer Article schema (keyImage, dateModified, mainEntityOfPage)."""
import re, os, glob

BLOG_DIR = "/tmp/freecode/blog"

for path in sorted(glob.glob(os.path.join(BLOG_DIR, "*.html"))):
    with open(path, "r", encoding="utf-8") as f:
        html = f.read()

    # Extract metadata
    title_m = re.search(r'<title>(.*?)</title>', html)
    desc_m = re.search(r'<meta name="description" content="(.*?)">', html)
    canonical_m = re.search(r'<link rel="canonical" href="(.*?)">', html)
    og_title_m = re.search(r'<meta property="og:title" content="(.*?)">', html)
    og_desc_m = re.search(r'<meta property="og:description" content="(.*?)">', html)

    title = title_m.group(1) if title_m else "Claude Korea Blog"
    desc = desc_m.group(1) if desc_m else ""
    canonical = canonical_m.group(1) if canonical_m else "https://claudekorea.com/"
    og_title = og_title_m.group(1) if og_title_m else title
    og_desc = og_desc_m.group(1) if og_desc_m else desc

    # Slug from filename
    slug = os.path.basename(path).replace(".html", "")
    page_url = canonical if canonical.startswith("http") else "https://claudekorea.com/" + canonical

    # Check if already has enhanced schema
    if '"keyImage"' in html and '"mainEntityOfPage"' in html:
        continue

    # New enhanced Article schema
    new_schema = f'''  <script type="application/ld+json">
  {{"@context":"https://schema.org","@type":"Article","headline":"{og_title}","description":"{og_desc}","inLanguage":"ko","author":{{"@type":"Organization","name":"Claude Korea","url":"https://claudekorea.com/"}},
    "publisher":{{"@type":"Organization","name":"Claude Korea","url":"https://claudekorea.com/","logo":{{"@type":"ImageObject","url":"https://claudekorea.com/assets/img/logo.svg"}}}},
    "datePublished":"2026-04-06","dateModified":"2026-06-13",
    "mainEntityOfPage":{{"@type":"WebPage","@id":"{page_url}"}},
    "image":"https://claudekorea.com/assets/img/og-image.svg",
    "articleSection":"Claude Code 가이드","keywords":"Claude Code, AI 에이전트, 스킬"}}
  </script>'''

    # Replace the existing schema block
    old_schema_pattern = r'(<script type="application/ld\+json">[\s\S]*?</script>)'
    match = re.search(old_schema_pattern, html)
    if match:
        html = html[:match.start()] + new_schema + html[match.end():]
    else:
        # Insert after og:image tag
        og_img_m = re.search(r'(</?meta property="og:image"[^>]*>)', html)
        if og_img_m:
            insert_pos = og_img_m.end()
            html = html[:insert_pos] + '\n  ' + new_schema + html[insert_pos:]

    with open(path, "w", encoding="utf-8") as f:
        f.write(html)

print(f"Processed {len(glob.glob(os.path.join(BLOG_DIR, '*.html')))} blog files")
