import { test, expect } from '@playwright/test';
import { BasePage } from '../pages/base';
import { MainPage } from '../pages/main-page';
import { CreateAccountPage } from '../pages/create-account-page';
import { SignInPage } from '../pages/signin-page';


test.describe('Functional testing', () => {
  let page: any;
  let main: MainPage;
  let createAccount: CreateAccountPage;
  let signIn: SignInPage;

  test.beforeEach(async ({ browser }) => {
    page = await browser.newPage();
    main = new MainPage(page);
    createAccount = new CreateAccountPage(page);
    signIn = new SignInPage(page);
    await page.goto('https://magento.softwaretestingboard.com/');
  });

  test('Main Page load checking', async () => {
    const visibilityMap = await main.are_elements_visible();
    //Header checking
    expect(visibilityMap.signInLink).toBe(true);
    expect(visibilityMap.createAccountLink).toBe(true);
    expect(visibilityMap.logo).toBe(true);
    expect(visibilityMap.search).toBe(true);
    expect(visibilityMap.cartLink).toBe(true);
    expect(visibilityMap.whatsNew).toBe(true);
    expect(visibilityMap.women).toBe(true);
    expect(visibilityMap.men).toBe(true);
    expect(visibilityMap.gear).toBe(true);
    expect(visibilityMap.training).toBe(true);
    expect(visibilityMap.sale).toBe(true);

    //Footer checking
    expect(visibilityMap.notes).toBe(true);
    expect(visibilityMap.search_terms).toBe(true);
    expect(visibilityMap.practice_api_testing).toBe(true);
    expect(visibilityMap.privacy_and_cookie_policy).toBe(true);
    expect(visibilityMap.write_for_us).toBe(true);
    expect(visibilityMap.advanced_search).toBe(true);
    expect(visibilityMap.subscribe).toBe(true);
    expect(visibilityMap.orders_and_returns).toBe(true);
    //Content checking
    expect(visibilityMap.pageContent).toBe(true);
  });
  test('Create account', async () => {
    await main.click_create_account_link(); //Click on create account link
    //Check if all elements are visible
    const visibilityMap = await createAccount.are_elements_visible();
    expect(visibilityMap.title).toBe(true);
    expect(visibilityMap.personal_information_label).toBe(true);
    expect(visibilityMap.first_name_label).toBe(true);
    expect(visibilityMap.first_name_input).toBe(true);
    expect(visibilityMap.last_name_label).toBe(true);
    expect(visibilityMap.last_name_input).toBe(true);
    expect(visibilityMap.sigin_infomation_label).toBe(true);
    expect(visibilityMap.email_label).toBe(true);
    expect(visibilityMap.email_input).toBe(true);
    expect(visibilityMap.password_label).toBe(true);
    expect(visibilityMap.password_input).toBe(true);
    expect(visibilityMap.password_confirmation_label).toBe(true);
    expect(visibilityMap.password_confirmation_input).toBe(true);
    expect(visibilityMap.create_account_button).toBe(true);
    //Create account and check if the banner text is correct
    await createAccount.creater_account('Jane', 'Doe', 'jane6@gmail.com', 'Password123', 'Password123');
    expect(await main.get_banner_text()).toBe('Welcome, Jane Doe!');
  });

  test('Sign in', async () => {
    await main.click_sign_in_link(); //Click on sign in link
    //Check if all elements are visible
    const visibilityMap = await signIn.are_elements_visible();
    expect(visibilityMap.login_title).toBe(true);
    expect(visibilityMap.registered_customer_label).toBe(true);
    expect(visibilityMap.login_message).toBe(true);
    expect(visibilityMap.email_label).toBe(true);
    expect(visibilityMap.email_input).toBe(true);
    expect(visibilityMap.password_label).toBe(true);
    expect(visibilityMap.password_input).toBe(true);
    expect(visibilityMap.sign_in_button).toBe(true);
    expect(visibilityMap.forgot_password_link).toBe(true);
    expect(visibilityMap.new_customer_label).toBe(true);
    expect(visibilityMap.new_customer_message).toBe(true);
    expect(visibilityMap.create_account_button).toBe(true);
    //Sign in and check if the banner text is correct
    await signIn.sign_in('john@gmail.com', 'TestPassword123');
    expect(await main.get_banner_text()).toBe('Welcome, John Doe!');
  });
});