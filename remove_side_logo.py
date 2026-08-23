import re

with open('index.html', 'r', encoding='utf-8') as f:
    html = f.read()

# Remove the side-logo img tag (it's a very long base64 img)
html = re.sub(r'<img class="side-logo"[^/]*/>', '', html, flags=re.DOTALL)

with open('index.html', 'w', encoding='utf-8') as f:
    f.write(html)

print('Done')
