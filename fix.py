import os
base = r'D:\wjq-obsidian\personal-site'
html = open(os.path.join(base, 'index.html'), encoding='utf-8').read()
old = '<a href=\"#engineering\">Engineering</a>'
new = '<a href=\"#engineering\">Engineering</a>\n      <a href=\"#books\">Books</a>\n      <a href=\"#science\">Science</a>\n      <a href=\"#bookstore\">Bookstore</a>'
html = html.replace(old, new, 1)
f = open(os.path.join(base, 'index.html'), 'w', encoding='utf-8')
f.write(html)
f.close()
print('done', len(html))
