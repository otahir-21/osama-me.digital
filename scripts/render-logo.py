#!/usr/bin/env python3
"""Rasterize the OT mark at the sizes used by favicons and app icons."""

from pathlib import Path

from PIL import Image, ImageDraw, ImageFont

ROOT = Path(__file__).resolve().parents[1]
PUBLIC = ROOT / "public"
APP = ROOT / "src" / "app"

INDIGO = (79, 70, 229, 255)
WHITE = (255, 255, 255, 255)


def draw_mark(size: int, rounded: bool) -> Image.Image:
    scale = size / 80
    img = Image.new("RGBA", (size, size), (0, 0, 0, 0))
    draw = ImageDraw.Draw(img)

    if rounded:
        radius = max(1, round(16 * scale))
        draw.rounded_rectangle([0, 0, size - 1, size - 1], radius=radius, fill=INDIGO)
    else:
        draw.rectangle([0, 0, size - 1, size - 1], fill=INDIGO)

    cx, cy = 27 * scale, 40 * scale
    outer, inner = 17 * scale, 9.5 * scale
    draw.ellipse([cx - outer, cy - outer, cx + outer, cy + outer], fill=WHITE)
    draw.ellipse([cx - inner, cy - inner, cx + inner, cy + inner], fill=INDIGO)

    x0, y0, x1, y1 = 48 * scale, 23 * scale, 70 * scale, 30.5 * scale
    sx0, sy0, sx1, sy1 = 55.25 * scale, 23 * scale, 62.75 * scale, 57 * scale
    draw.rectangle([x0, y0, x1, y1], fill=WHITE)
    draw.rectangle([sx0, sy0, sx1, sy1], fill=WHITE)
    return img


def render_mark(size: int, rounded: bool) -> Image.Image:
    factor = 8 if size <= 32 else 4
    return draw_mark(size * factor, rounded).resize((size, size), Image.Resampling.LANCZOS)


def save_png(img: Image.Image, path: Path) -> None:
    path.parent.mkdir(parents=True, exist_ok=True)
    img.save(path, "PNG")
    print(f"wrote {path.relative_to(ROOT)}")


def main() -> None:
    rounded_32 = render_mark(32, rounded=True)
    rounded_16 = render_mark(16, rounded=True)
    save_png(rounded_16, PUBLIC / "favicon-16x16.png")
    save_png(rounded_32, PUBLIC / "favicon-32x32.png")
    save_png(render_mark(180, rounded=False), PUBLIC / "apple-touch-icon.png")
    save_png(render_mark(192, rounded=False), PUBLIC / "icon-192.png")
    save_png(render_mark(512, rounded=False), PUBLIC / "icon-512.png")

    save_png(rounded_32, APP / "icon.png")
    save_png(render_mark(180, rounded=False), APP / "apple-icon.png")

    ico_path = PUBLIC / "favicon.ico"
    rounded_32.save(ico_path, format="ICO", sizes=[(16, 16), (32, 32)])
    print(f"wrote {ico_path.relative_to(ROOT)}")
    ico_app = APP / "favicon.ico"
    rounded_32.save(ico_app, format="ICO", sizes=[(16, 16), (32, 32)])
    print(f"wrote {ico_app.relative_to(ROOT)}")

    font = ImageFont.truetype("/Library/Fonts/SF-Pro-Display-Semibold.otf", 92)
    mark = draw_mark(160, rounded=True)

    def lockup(bg: tuple[int, int, int, int], text: tuple[int, int, int, int]) -> Image.Image:
        canvas = Image.new("RGBA", (980, 360), bg)
        draw = ImageDraw.Draw(canvas)
        canvas.paste(mark, (80, 100), mark)
        draw.text((272, 132), "Osama", font=font, fill=text)
        bbox = draw.textbbox((272, 132), "Osama", font=font)
        draw.ellipse([bbox[2] + 4, bbox[3] - 28, bbox[2] + 28, bbox[3] - 4], fill=INDIGO)
        return canvas

    preview_dir = ROOT / "screenshots"
    preview_dir.mkdir(exist_ok=True)
    save_png(lockup((252, 252, 253, 255), (17, 24, 39, 255)), preview_dir / "logo-lockup-light.png")
    save_png(lockup((17, 24, 39, 255), (252, 252, 253, 255)), preview_dir / "logo-lockup-dark.png")
    save_png(draw_mark(512, rounded=True), preview_dir / "logo-mark.png")


if __name__ == "__main__":
    main()
