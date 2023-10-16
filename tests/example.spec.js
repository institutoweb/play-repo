import { test, expect } from '@playwright/test';

test('test', async ({ page }) => {
  await page.goto('/');
  await page.getByRole('link', { name: 'Login' }).click();
  await page.getByLabel('Usuario:').click();
  await page.getByLabel('Usuario:').fill('mimail@gmail.com');

  await page.getByLabel('Contraseña:').fill('laboratorio1');
  await page.getByRole('button', { name: 'Iniciar sesión' }).click();
  await page.getByRole('link', { name: 'Personal' }).click();
  await page.getByRole('link', { name: 'Modificar' }).nth(1).click();
  await page.getByPlaceholder('Usuario').click();
  await page.getByPlaceholder('Usuario').fill('juan.mendez@gmail.com');
  page.once('dialog', dialog => {
    console.log(`Dialog message: ${dialog.message()}`);
    dialog.dismiss().catch(() => {});
  });
  await page.getByRole('button', { name: 'Actualizar' }).click();
  await page.getByRole('link', { name: 'Volver' }).click();

});