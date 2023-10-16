import { test, expect } from '@playwright/test';

test('test', async ({ page }) => {
  await page.goto('/');
  await page.getByRole('link', { name: 'Login' }).click();
  await page.getByLabel('Usuario:').click();
  await page.getByLabel('Usuario:').fill('mimail@gmail.com');
  await page.getByLabel('Contraseña:').fill('laboratorio1');
  await page.getByRole('button', { name: 'Iniciar sesión' }).click();
  try {
    await page.waitForSelector('text="Inicio"', { state: 'attached', timeout: 5000 });
    console.log('El enlace es visible');
    await page.getByRole('link', { name: 'Inicio' }).click();
} catch (error) {
  console.log('El enlace NO es visible');
    throw new Error('El enlace no es visible');
}

});