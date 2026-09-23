import os
base = r"D:\wjq-obsidian\personal-site"
html = open(os.path.join(base, "index.html"), encoding="utf-8").read()
old = "<a href=\"#engineering\">Engineering</a>"
new = old + "<a href=\"#books\">Books</a><a href=\"#science\">Science</a><a href=\"#bookstore\">Bookstore</a>"
html = html.replace(old, new, 1)
open(os.path.join(base, "index.html"), "w", encoding="utf-8").write(html)
print("done", len(html))
