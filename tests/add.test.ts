import { expect, test } from '@playwright/test';

test('add task', async ({ page }) => {
	await page.goto('/');

	const form = page.locator('form.AddTask');
	const input = form.locator('input[name="task-name"]');
	const button = form.locator('button');
	const taskName = new Date().toISOString();

	await input.fill(taskName);
	expect(await input.inputValue()).toBe(taskName);

	await button.click();
	expect(await input.inputValue()).toBe('');
});
