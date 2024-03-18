import { expect, test } from '@playwright/test';

test('add task to list', async ({ page }) => {
	await page.goto('/');

	const addForm = page.locator('form.AddTask');
	const addInput = addForm.locator('input[name="task-name"]');
	const addButton = addForm.locator('button');
	const taskName = new Date().toISOString();

	await addInput.fill(taskName);
	await addButton.click();

	const list = page.locator('.TodoList');

	await expect(list.locator('.Task__name')).toHaveText(taskName);
});
