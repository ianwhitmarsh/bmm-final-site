"""Take a crisp screenshot of the top of each client home page for the
home page slideshow. 1440x900 viewport at 2x, saved as 1920x1200 WebP
(the slideshow frame is 16:10). Cookie banners and chat widgets are hidden
where they can be recognised."""
import asyncio, io, json, pathlib
from PIL import Image
from playwright.async_api import async_playwright

ROOT = pathlib.Path(__file__).resolve().parents[2]
SITES = json.loads((ROOT / ".github/scripts/screenshots.json").read_text())
OUT = ROOT / "showcase"
HIDE = """
[id*=cookie i],[class*=cookie i],[id*=consent i],[class*=consent i],
[class*=chat-widget i],[id*=chat-widget i],iframe[src*=chat],#hubspot-messages-iframe-container,
[class*=intercom],[id*=intercom],.grecaptcha-badge,[id*=tidio],[class*=leadconnector],
[class*=lc_text-widget],[id*=lc_text-widget],[class*=popup i][class*=overlay i]{display:none!important}
html{scrollbar-width:none}::-webkit-scrollbar{display:none}
"""

async def shoot(browser, name, url):
    ctx = await browser.new_context(viewport={"width": 1440, "height": 900}, device_scale_factor=2,
                                    user_agent="Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/140.0 Safari/537.36")
    page = await ctx.new_page()
    try:
        await page.goto(url, wait_until="networkidle", timeout=60000)
    except Exception:
        await page.goto(url, wait_until="load", timeout=60000)
    await page.add_style_tag(content=HIDE)
    # let hero animations, sliders and web fonts settle
    await page.wait_for_timeout(5000)
    await page.evaluate("window.scrollTo(0,0)")
    await page.wait_for_timeout(800)
    png = await page.screenshot(type="png")
    im = Image.open(io.BytesIO(png)).convert("RGB").resize((1920, 1200), Image.LANCZOS)
    im.save(OUT / (name + ".webp"), "WEBP", quality=82, method=6)
    print(name, (OUT / (name + ".webp")).stat().st_size // 1024, "KB")
    await ctx.close()

async def main():
    async with async_playwright() as p:
        b = await p.chromium.launch()
        for name, url in SITES.items():
            try:
                await shoot(b, name, url)
            except Exception as e:
                print("FAILED", name, e)
        await b.close()

asyncio.run(main())
