import json
import sys
from PIL import Image, ImageDraw, ImageFont

FONTS = {
    'impact': ['/System/Library/Fonts/Supplemental/Impact.ttf', '/usr/share/fonts/truetype/msttcorefonts/Impact.ttf', 'C:/Windows/Fonts/impact.ttf'],
    'arial': ['/System/Library/Fonts/Supplemental/Arial.ttf', '/usr/share/fonts/truetype/msttcorefonts/Arial.ttf', 'C:/Windows/Fonts/arial.ttf'],
}


def font_path(name):
    import os
    for p in FONTS.get(name, [name]):
        if os.path.exists(p):
            return p
    raise SystemExit('font not found: ' + name)


def wrap(d, text, font, maxw):
    lines, cur = [], ''
    for w in text.split():
        t = (cur + ' ' + w).strip()
        if d.textlength(t, font=font) <= maxw:
            cur = t
        else:
            if cur:
                lines.append(cur)
            cur = w
    if cur:
        lines.append(cur)
    return lines


def fit(d, text, path, box, maxsize, minsize=12):
    x0, y0, x1, y1 = box
    for size in range(maxsize, minsize - 1, -1):
        f = ImageFont.truetype(path, size)
        lines = wrap(d, text, f, x1 - x0)
        lh = int(size * 1.12)
        if lh * len(lines) <= y1 - y0 and all(d.textlength(l, font=f) <= x1 - x0 for l in lines):
            return f, lines, lh, True
    f = ImageFont.truetype(path, minsize)
    return f, wrap(d, text, f, x1 - x0), int(minsize * 1.12), False


def draw(im, text, b):
    d = ImageDraw.Draw(im)
    style = b.get('style', 'label')
    path = font_path(b.get('font', 'impact' if style == 'label' else 'arial'))
    size = b.get('size', 48)
    if style == 'label':
        text = text.upper()
    f, lines, lh, ok = fit(d, text, path, b['box'], size)
    if not ok:
        print('warning: text overflows box', b['box'], repr(text), file=sys.stderr)
    x0, y0, x1, y1 = b['box']
    y = y0 + (y1 - y0 - lh * len(lines)) / 2
    fill = tuple(b.get('fill', [255, 255, 255] if style == 'label' else [0, 0, 0]))
    stroke = max(2, size // 14) if style == 'label' else 0
    for l in lines:
        w = d.textlength(l, font=f)
        d.text((x0 + (x1 - x0 - w) / 2, y), l, font=f, fill=fill, stroke_width=stroke, stroke_fill=(0, 0, 0))
        y += lh


def main():
    tpl_file, key, blank, out, *texts = sys.argv[1:]
    t = json.load(open(tpl_file))[key]
    im = Image.open(blank).convert('RGB')
    if [im.width, im.height] != t['size']:
        sx, sy = im.width / t['size'][0], im.height / t['size'][1]
        for b in t['boxes']:
            x0, y0, x1, y1 = b['box']
            b['box'] = [x0 * sx, y0 * sy, x1 * sx, y1 * sy]
            b['size'] = int(b.get('size', 48) * min(sx, sy))
    if len(texts) != len(t['boxes']):
        raise SystemExit(f"{key} takes {len(t['boxes'])} texts, got {len(texts)}")
    for text, b in zip(texts, t['boxes']):
        if text:
            draw(im, text, b)
    im.save(out, quality=92)
    print('wrote', out)


if __name__ == '__main__':
    main()
