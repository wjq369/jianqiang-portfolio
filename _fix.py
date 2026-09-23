import os
base = r'D:\wjq-obsidian\personal-site'
html = open(os.path.join(base, 'index.html'), encoding='utf-8').read()

# Fix gallery slides - use only 3 photos
slides = [
    ('Slide 1 &mdash; Mountain pass at dusk', 'photo-1.jpg'),
    ('Slide 2 &mdash; Yantai harbor at dawn', 'photo-2.jpg'),
    ('Slide 3 &mdash; Antenna array on Xianren Island', 'photo-3.jpg'),
]
for old_text, img in slides:
    old_full = '<span>' + old_text + '</span>'
    new_full = '<img src="images/' + img + '" alt="Photo" style="width:100%;height:100%;object-fit:cover">'
    if old_full in html:
        html = html.replace(old_full, new_full, 1)
        print('replaced slide')
    else:
        print('slide not found:', old_text[:20])

# Remove slides 4 and 5 from gallery
# Find and remove extra slide divs
import re
# Remove slide 4 and 5 blocks
slide4 = re.search(r'<div class="slide">.*?<div class="slide-img">.*?Slide 4.*?</div>.*?</div>', html, re.DOTALL)
if slide4:
    html = html.replace(slide4.group(), '')
    print('removed slide 4')
slide5 = re.search(r'<div class="slide">.*?<div class="slide-img">.*?Slide 5.*?</div>.*?</div>', html, re.DOTALL)
if slide5:
    html = html.replace(slide5.group(), '')
    print('removed slide 5')

# Fix travel section - keep only 3 photos, remove extra
# Remove travel-1, travel-2, travel-3 photo items
travel_items = re.findall(r'<div class="photo-item[^>]*>.*?</div>\s*</div>', html, re.DOTALL)
print('found', len(travel_items), 'photo items')

# Keep only first 3 photo items in travel section
# Find the travel photo-grid and rebuild it
travel_start = html.find('id="travel"')
travel_end = html.find('</section>', travel_start)
travel_section = html[travel_start:travel_end]

# Extract just the first 3 photo items
photo_pattern = r'<div class="photo-item(?:\s+(?:wide|tall))?">.*?</div>\s*</div>'
photo_items = re.findall(photo_pattern, travel_section, re.DOTALL)
print('photo items in travel:', len(photo_items))

# Keep only first 3
new_items = []
for item in photo_items:
    if 'photo-1.jpg' in item or 'photo-2.jpg' in item or 'photo-3.jpg' in item:
        new_items.append(item)
    elif 'photo-placeholder' not in item and len(new_items) < 3:
        new_items.append(item)

print('keeping', len(new_items), 'items')

# Replace the photo-grid content
grid_start = travel_section.find('photo-grid')
grid_end = travel_section.find('</div>', travel_section.find('photo-grid')) + 6
old_grid = travel_section[grid_start:grid_end]
print('old grid length:', len(old_grid))

with open(os.path.join(base, 'index.html'), 'w', encoding='utf-8') as f:
    f.write(html)
print('done, size:', len(html))
