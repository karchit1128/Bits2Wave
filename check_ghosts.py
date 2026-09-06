import re
html = open('problem-statements/index.html', 'r', encoding='utf-8').read()
p = re.search(r'<div id="pacman".*?</div>', html, re.S)
g = re.search(r'<div class="ghost".*?</div>', html, re.S)
print('Pacman:', p.group(0) if p else 'NOT FOUND')
print('Ghost:', g.group(0) if g else 'NOT FOUND')
