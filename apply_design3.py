with open('index.html', 'r', encoding='utf-8') as f:
    html = f.read()

# Remove the duplicate hero-top-tags div
tag_to_remove = '<div class="hero-top-tags">IEEE COMSOC &nbsp; APS-MTTS &nbsp; BITS2WAVE &nbsp; 24-HOUR HACKATHON</div>'
html = html.replace(tag_to_remove, '')

# Fix corrupted APS-MTTS span
html = html.replace('<span>APS-MTTS A\ufffd BMSIT&amp;M</span>', '<span>APS-MTTS \u00b7 BMSIT&amp;M</span>')

with open('index.html', 'w', encoding='utf-8') as f:
    f.write(html)

print('Done fixing index.html')

# Fix CSS button font size back to 11px
with open('style.css', 'r', encoding='utf-8') as f:
    css = f.read()

css = css.replace('    font-size:12px;\n    padding:16px 22px;', '    font-size:11px;\n    padding:16px 22px;')

with open('style.css', 'w', encoding='utf-8') as f:
    f.write(css)

print('Done fixing style.css')
