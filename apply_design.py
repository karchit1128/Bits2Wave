import re

with open('index.html', 'r', encoding='utf-8') as f:
    html = f.read()

# Find the <img> tag containing alt="BITS2WAVE logo"
img_pattern = r'(<img[^>]*alt="BITS2WAVE logo"[^>]*>)'

# Insert hero-top-tags right before it
if 'hero-top-tags' not in html:
    html = re.sub(img_pattern, r'<div class="hero-top-tags">IEEE COMSOC &nbsp; APS-MTTS &nbsp; BITS2WAVE &nbsp; 24-HOUR HACKATHON</div>\n      \1', html)

with open('index.html', 'w', encoding='utf-8') as f:
    f.write(html)
