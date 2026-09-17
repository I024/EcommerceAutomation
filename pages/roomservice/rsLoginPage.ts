// pages/LoginPage.ts
import { Page, Locator } from '@playwright/test';
import { BasePage } from '../base/BasePage';

export class rsLoginPage extends BasePage {
  page: Page;
  usernameInput: Locator;
  passwordInput: Locator;
  loginButton: Locator;

  constructor(page: Page) {
    super(page);
    this.page = page;
    this.usernameInput = page.getByPlaceholder('Username');
    this.passwordInput = page.getByPlaceholder('Password');
    this.loginButton = page.getByRole('button', { name: 'Login' });
  }

  async login(username: string, password: string) {
    await this.usernameInput.fill(username);
    await this.passwordInput.fill(password);
    await this.loginButton.click();
  }
}