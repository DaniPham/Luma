import { expect, type Locator, type Page} from '@playwright/test';
import { BasePage } from './base';
import { sign } from 'crypto';

export class SignInPage extends BasePage{
    readonly locators_extend: any;

    constructor(page: Page){
        super(page);
        this.url = 'https://magento.softwaretestingboard.com/';
        this.locators_extend = {
            login_title: page.getByText('Customer Login'),
            registered_customer_label: page.getByText('Registered Customers'),
            login_message: page.getByText('If you have an account, sign in with your email address.'),
            email_label: page.getByText('Email', { exact: true }),
            email_input: page.locator('input[id="email"]'),
            password_label: page.locator('#maincontent').getByText('Password', { exact: true }),
            password_input: page.locator('input[id="pass"]').nth(0),
            sign_in_button: page.locator('button[id="send2"]').nth(0),
            forgot_password_link: page.getByRole('link', { name: 'Forgot Your Password?' }),
            new_customer_label: page.getByText('New Customers'),
            new_customer_message: page.getByText('Creating an account has many benefits: check out faster, keep more than one address, track orders and more.'),
            create_account_button: page.locator('#maincontent').getByRole('link', { name: 'Create an Account' }),
        }
    }

    async input_email(email: string){
        await this.locators_extend.email_input.fill(email);
    }

    async input_password(password: string){
        await this.locators_extend.password_input.fill(password);
    }

    async click_sign_in_button(){
        await this.locators_extend.sign_in_button.click();
    }

    async click_forgot_password_link(){
        await this.locators_extend.forgot_password_link.click();
    }

    async click_create_account_button(){
        await this.locators_extend.create_account_button.click();
    }

    async sign_in(email: string, password: string){
        await this.input_email(email);
        await this.input_password(password);
        await this.click_sign_in_button();
    }
}