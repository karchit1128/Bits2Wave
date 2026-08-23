import re
with open('index.html', 'r', encoding='utf-8') as f:
    html = f.read()

# find img tags and their classes without printing the huge src
for match in re.finditer(r'<img[^>]+>', html):
    tag = match.group(0)
    # strip out src attribute to keep it short
    tag_no_src = re.sub(r'src=\"[^\"]+\"', 'src=\"...\"', tag)
    print(tag_no_src)
