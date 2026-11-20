import json
import sys
from PIL import Image


def load(p, mono=False):
    im = Image.open(p).convert('RGBA')
    if mono:
        px = im.load()
        for y in range(im.height):
            for x in range(im.width):
                r, g, b, a = px[x, y]
                if a > 0:
                    px[x, y] = (255, 255, 255, 255) if r > 127 else (0, 0, 0, 255)
    return im


def paste(base, lg, x, y, s, nearest=False):
    w = int(s * 1.35)
    h = int(lg.height * w / lg.width)
    if h > w * 1.1:
        h = int(s * 1.35)
        w = int(lg.width * h / lg.height)
    t = lg.resize((w, h), Image.NEAREST if nearest else Image.LANCZOS)
    base.alpha_composite(t, (int(x - w / 2), int(y - h / 2)))


def main():
    cfg_file, out = sys.argv[1:3]
    c = json.load(open(cfg_file))
    base = Image.open(c['blank']).convert('RGBA')
    crowd = load(c['crowd_logo'])
    for x, y, s in sorted(c['faces'], key=lambda f: f[1]):
        paste(base, crowd, x, y, s)
    h = c['hero']
    paste(base, load(c['hero_logo'], c.get('hero_mono', False)), h[0], h[1], h[2], c.get('hero_nearest', False))
    base.convert('RGB').save(out, quality=92)
    print('wrote', out)


if __name__ == '__main__':
    main()
