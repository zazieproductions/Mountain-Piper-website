import { expect, test } from '@playwright/test';

for (const width of [1280, 375]) {
  test(`one set of site links and a working footer shortcut at ${width}px`, async ({ page }) => {
    await page.setViewportSize({ width, height: 800 });
    await page.route('https://fonts.googleapis.com/**', route => route.abort());
    await page.goto('/');

    const inquiry = page.locator('.hero-actions').getByRole('link');
    await expect(inquiry).toHaveCount(1);
    await expect(inquiry).toHaveAccessibleName('Inquire about your date');
    await expect(inquiry).toHaveAttribute('href', '/contact');

    // Count DOM links, including hidden ones: a CSS-hidden second menu must not pass.
    const siteLinks = page.locator('header nav a, footer nav a');
    await expect(siteLinks).toHaveCount(6);
    const destinations = await siteLinks.evaluateAll(links => links.map(link => link.getAttribute('href')));
    expect(destinations).toEqual(['/weddings', '/funerals-memorials', '/events', '/lessons', '/about', '/contact']);

    const shortcut = page.getByRole('link', { name: 'Back to navigation' });
    await shortcut.focus();
    await page.keyboard.press('Enter');
    const nav = page.getByRole('navigation', { name: 'Primary' });
    if (width <= 900) {
      await expect(nav).toHaveCount(0); // Collapsed links are not accessible.
      await expect(page.getByRole('button', { name: 'Open navigation menu' })).toBeFocused();
      await page.keyboard.press('Enter');
    } else {
      await expect(nav).toBeFocused();
      await page.keyboard.press('Tab');
    }
    await expect(nav.getByRole('link', { name: 'Weddings', exact: true })).toBeFocused();
  });
}
