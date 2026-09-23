import os, re
base = r'D:\wjq-obsidian\personal-site'
html = open(os.path.join(base, 'index.html'), encoding='utf-8').read()
imgs = re.findall(r'src="([^"]+)"', html)
for i in sorted(set(imgs)):
    exists = os.path.exists(os.path.join(base, i))
    print(('OK' if exists else 'MISSING'), i)
print('---')
idx = html.find('id="travel"')
print(html[idx:idx+1200])
