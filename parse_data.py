import re
import json

with open('../result-backup.html', 'r', encoding='utf-8') as f:
    html = f.read()

match = re.search(r'const TEAMS = (\[.*?\]);', html, re.DOTALL)
if match:
    teams_js = match.group(1)
    # the JS object might not be valid JSON (single quotes, no quotes on keys), 
    # but we can write it directly to a JS file that exports it!
    out_content = f"export const TEAMS = {teams_js};\n"
    with open('src/data/teams.js', 'w', encoding='utf-8') as out:
        out.write(out_content)
    print("Successfully extracted TEAMS to src/data/teams.js")
else:
    print("Could not find TEAMS array")
