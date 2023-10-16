import { test, expect } from '@playwright/test';

test('test', async ({ page }) => {
  await page.goto('/');
  await page.getByRole('link', { name: 'Login' }).click();
  await page.getByLabel('Usuario:').click();
  await page.getByLabel('Usuario:').fill('mimail@gmail.com');
  await page.getByLabel('Contraseña:').fill('laboratorio1');
  await page.getByRole('button', { name: 'Iniciar sesión' }).click();
  try {
    await page.waitForSelector('text="Prestadores"', { state: 'attached', timeout: 5000 });
    console.log('El enlace es visible');
    await page.getByRole('link', { name: 'Prestadores' }).click();
} catch (error) {
  console.log('El enlace NO es visible');
    throw new Error('El enlace no es visible');
}

const element = await page.getByRole('heading', { name: 'Listado de Prestadores' }).isEnabled()
expect(element).toBe(true);
console.log("el h1 esta encendido")
const element1 = await page.getByRole('heading', { name: 'Listado de Prestadores' }).isVisible()
expect(element1).toBe(true);

  //////////////////
  const rows = await page.$$('table tr');
  for (let i = 0; i < rows.length; i++) {
      let rowText = await rows[i].innerText();
      if (rowText.includes('Obra Social')) {
          console.log(`El nombre "Obra Social" se encuentra en la fila ${i}`);
          break;
      }
  }
  await page.waitForTimeout(1000)
  
 
});