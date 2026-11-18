import { expect, test } from '@playwright/test';
import type { Locator, Page } from '@playwright/test';
import AxeBuilder from '@axe-core/playwright';

test.beforeEach(async ({ page }) => {
  // Exercise the site, not the third-party font service.
  await page.route('https://fonts.googleapis.com/**', route => route.abort());
  await page.goto('/');
  await expect(page.getByRole('heading', { level: 1 })).toBeVisible();
});

async function tabTo(page: Page, target: Locator, key = 'Tab') {
  await page.keyboard.press(key);
  await expect(target).toBeFocused();
  // A sticky header or a higher-z-index link must not cover the focused control.
  expect(await target.evaluate(el => {
    const { x, width, top, bottom } = el.getBoundingClientRect();
    const visibleY = (Math.max(0, top) + Math.min(window.innerHeight, bottom)) / 2;
    return getComputedStyle(el).outlineStyle !== 'none'
      && el.contains(document.elementFromPoint(x + width / 2, visibleY));
  })).toBe(true);
}

for (const width of [1280, 375]) {
  test(`Tab and Shift+Tab follow skip → header → content → footer at ${width}px`, async ({ page }) => {
    await page.setViewportSize({ width, height: 800 });
    const skip = page.getByRole('link', { name: 'Skip to main content' });
    const header = page.getByRole('banner');
    const main = page.getByRole('main');
    const stops = [skip, ...await header.getByRole('link').all(), ...await header.getByRole('button').all(),
      ...await main.getByRole('link').all(), ...await page.getByRole('contentinfo').getByRole('link').all()];
    for (const stop of stops) await tabTo(page, stop);
    for (const stop of stops.slice(0, -1).reverse()) await tabTo(page, stop, 'Shift+Tab');

    await page.keyboard.press('Enter'); // Skip the header.
    await expect(main).toBeFocused();
    await tabTo(page, main.getByRole('link', { name: 'Inquire about your date' }));
  });
}

test('mobile menu contains focus, dismisses to its opener, and hands off to the next page', async ({ page }) => {
  await page.setViewportSize({ width: 375, height: 667 });
  const opener = page.getByRole('button', { name: 'Open navigation menu' });
  const dialog = page.getByRole('dialog', { name: 'Site menu' });
  const close = dialog.getByRole('button', { name: 'Close navigation menu' });
  const first = dialog.getByRole('link', { name: 'Weddings', exact: true });
  const last = dialog.getByRole('link', { name: 'mountainpiper1@gmail.com' });

  await opener.focus();
  await page.keyboard.press('Enter');
  await expect(first).toBeFocused();
  await expect(page.locator('.menu-toggle')).toHaveAttribute('aria-expanded', 'true');
  // Even an explicit focus attempt can't reach a background link in a modal.
  await page.locator('main a').first().evaluate(el => el.focus());
  await expect(first).toBeFocused();
  await tabTo(page, close, 'Shift+Tab');
  await tabTo(page, last, 'Shift+Tab');
  await tabTo(page, close);
  for (const link of await dialog.getByRole('link').all()) await tabTo(page, link);
  await tabTo(page, close);
  await page.keyboard.press('Escape');
  await expect(dialog).toBeHidden();
  await expect(opener).toBeFocused();
  await expect(opener).toHaveAttribute('aria-expanded', 'false');

  await page.keyboard.press('Space');
  await tabTo(page, close, 'Shift+Tab');
  await page.keyboard.press('Enter');
  await expect(opener).toBeFocused();
  await page.keyboard.press('Enter');
  await expect(first).toBeFocused();
  await page.keyboard.press('Enter');
  await expect(page).toHaveURL('/weddings');
  await expect(dialog).toBeHidden();
  await expect(page.getByRole('main')).toBeFocused();
  await tabTo(page, page.getByRole('link', { name: 'Check wedding date' }));

  await opener.click();
  await page.setViewportSize({ width: 901, height: 800 });
  await expect(dialog).toBeHidden();
  await expect(page.getByRole('navigation', { name: 'Primary' }).getByRole('link', { name: 'Weddings' })).toBeFocused();
});

test('contact links and form fields follow reading order after client-side navigation', async ({ page }) => {
  await page.getByRole('link', { name: 'Inquire about your date' }).click();
  const main = page.getByRole('main');
  await expect(main).toBeFocused();
  for (const link of await main.getByRole('link').all()) await tabTo(page, link);
  for (const id of ['name', 'email', 'phone', 'eventType', 'date']) await tabTo(page, page.locator(`#${id}`));
  // Chromium exposes the date's month/day/year segments as separate tab stops.
  for (let n = 0; n < 5 && await page.locator('#date').evaluate(el => el === document.activeElement); n++) {
    await expect(page.locator('#date')).toHaveCSS('outline-style', 'solid');
    await page.keyboard.press('Tab');
  }
  await expect(page.locator('#location')).toBeFocused();
  await tabTo(page, page.locator('#details'));
  await tabTo(page, page.getByRole('button', { name: 'Send booking inquiry' }));
  await page.keyboard.press('Enter');
  await expect(page.locator('#name')).toBeFocused(); // First invalid field, no email sent.
});

test('informative images and link names are exposed; decorative text has a readable equivalent', async ({ page }) => {
  await expect(page.getByRole('img', { name: /Kit Rashid.*holding his bagpipes.*stream/ })).toBeVisible();
  for (const link of await page.locator('.card-cta').all()) {
    await expect(link).not.toHaveAttribute('aria-label');
    await expect(link).toHaveAccessibleName((await link.innerText()).trim());
  }
  const venues = await page.locator('.venue-marquee').ariaSnapshot();
  expect(venues.match(/Regattas/g)).toHaveLength(1); // Not both copies in the animated track.
  await expect(page.getByRole('list', { name: 'Heard at' }).getByRole('listitem')).toHaveCount(8);
  expect(await page.locator('.about-copy').ariaSnapshot()).toContain('43 years of experience as a performer, teacher, and competitor');
});

test('all seven routes pass targeted hidden-content, naming, and tab-stop checks', async ({ page }) => {
  for (const path of ['/', '/weddings', '/funerals-memorials', '/events', '/lessons', '/about', '/contact']) {
    if (path !== '/') {
      await page.goto(path);
      await expect(page.getByRole('heading', { level: 1 })).toBeVisible();
      await tabTo(page, page.getByRole('link', { name: 'Skip to main content' }));
    }
    const { violations } = await new AxeBuilder({ page })
      .withRules(['aria-hidden-focus', 'aria-hidden-body', 'image-alt', 'button-name', 'link-name', 'tabindex'])
      .analyze();
    expect(violations, path).toEqual([]);
  }
});
