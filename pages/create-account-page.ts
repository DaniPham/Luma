import { expect, type Locator, type Page} from '@playwright/test';
import { BasePage } from '../pages/base';

export class CreateAccountPage extends BasePage{
    readonly locators_extend: any;

    constructor(page: Page){
        super(page);
        this.url = 'https://magento.softwaretestingboard.com/';
        this.locators_extend = {
            title: page.getByText('Create New Customer Account'),
            personal_information_label: page.getByText('Personal Information'),
            first_name_label: page.getByText('First Name'),
            first_name_input: page.locator('input[id="firstname"]'),
            last_name_label: page.getByText('Last Name'),
            last_name_input: page.locator('input[id="lastname"]'),
            sigin_infomation_label: page.getByText('Sign-in Information'),
            email_label: page.getByText('Email',{ exact: true }),
            email_input: page.locator('input[id="email_address"]'),
            password_label: page.locator('#form-validate').getByText('Password', { exact: true }),
            password_input: page.locator('input[id="password"]'),
            password_confirmation_label: page.getByText('Confirm Password', { exact: true }),
            password_confirmation_input: page.locator('input[id="password-confirmation"]'),
            create_account_button: page.getByRole('button', { name: 'Create an Account' })
        }
    }


    async input_first_name(first_name: string){
        await this.locators_extend.first_name_input.fill(first_name);
    }

    async input_last_name(last_name: string){
        await this.locators_extend.last_name_input.fill(last_name);
    }

    async input_email(email: string){
        await this.locators_extend.email_input.fill(email);
    }

    async input_password(password: string){
        await this.locators_extend.password_input.fill(password);
    }

    async input_password_confirmation(password_confirmation: string){
        await this.locators_extend.password_confirmation_input.fill(password_confirmation);
    }

    async click_create_account_button(){
        await this.locators_extend.create_account_button.click();
    }

    async creater_account(first_name: string, last_name: string, email: string, password: string, password_confirmation: string){
        await this.input_first_name(first_name);
        await this.input_last_name(last_name);
        await this.input_email(email);
        await this.input_password(password);
        await this.input_password_confirmation(password_confirmation);
        await this.click_create_account_button();
    }
}