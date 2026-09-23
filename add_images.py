import os
base = r'D:\wjq-obsidian\personal-site'
html = open(os.path.join(base, 'index.html'), encoding='utf-8').read()

# Replace travel photo placeholders with real images
replacements = [
    ('<span>Mountain pass &ndash; Liaoning</span>', '<img src=\"images/photo-1.jpg\" alt=\"Liaoning\" style=\"width:100%;height:100%;object-fit:cover\">'),
    ('<span>Yantai coast</span>', '<img src=\"images/photo-2.jpg\" alt=\"Yantai\" style=\"width:100%;height:100%;object-fit:cover\">'),
    ('<span>Antenna array</span>', '<img src=\"images/photo-3.jpg\" alt=\"Antenna\" style=\"width:100%;height:100%;object-fit:cover\">'),
    ('<span>Lianyungang port</span>', '<img src=\"images/travel-1.jpg\" alt=\"Lianyungang\" style=\"width:100%;height:100%;object-fit:cover\">'),
    ('<span>Temple &ndash; Shandong</span>', '<img src=\"images/travel-2.jpg\" alt=\"Qingdao\" style=\"width:100%;height:100%;object-fit:cover\">'),
    ('<span>Coastal road</span>', '<img src=\"images/travel-3.jpg\" alt=\"Coast\" style=\"width:100%;height:100%;object-fit:cover\">'),
]
for old, new in replacements:
    if old in html:
        html = html.replace(old, new, 1)
        print('replaced:', old[:30])
    else:
        print('NOT FOUND:', old[:30])

with open(os.path.join(base, 'index.html'), 'w', encoding='utf-8') as f:
    f.write(html)
print('done, size:', len(html))
