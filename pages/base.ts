import { expect, type Locator, type Page} from '@playwright/test';
import { sign } from 'crypto';

export class BasePage{
    readonly page: Page;
    url: string;
    readonly locators: any;
    readonly locators_extend: any;
    constructor(page: Page){
        this.page = page;
        // Page header
        this.locators = {
            // Page header
            signInLink: page.locator('//header[@class="page-header"]').getByRole('link', { name: 'Sign in' }),
            createAccountLink: page.locator('//header[@class="page-header"]').getByRole('link', { name: 'Create an Account' }),
            logo: page.locator('//header[@class="page-header"]').getByLabel('store logo'),
            search: page.locator('//header[@class="page-header"]').locator('input[id="search"]'),
            cartLink: page.locator('//header[@class="page-header"]').getByRole('link', { name: ' My Cart' }), 
            whatsNew: page.locator('//div[@id="store.menu"]').getByRole('menuitem', { name: 'What\'s New' }),
            women: page.locator('//div[@id="store.menu"]').getByRole('menuitem', { name: ' Women' }),
            men: page.locator('//div[@id="store.menu"]').getByRole('menuitem', { name: ' Men' }),
            gear: page.locator('//div[@id="store.menu"]').getByRole('menuitem', { name: ' Gear' }),
            training: page.locator('//div[@id="store.menu"]').getByRole('menuitem', { name: ' Training' }),
            sale: page.locator('//div[@id="store.menu"]').getByRole('menuitem', { name: 'Sale' }),
            //Page footer
            notes: page.locator('//footer[@class="page-footer"]').getByRole('link', { name: 'Notes' }),
            search_terms: page.locator('//footer[@class="page-footer"]').getByRole('link', { name: 'Search Terms' }),
            practice_api_testing: page.locator('//footer[@class="page-footer"]').getByRole('link', { name: 'Practice API Testing using Magento 2' }),
            privacy_and_cookie_policy: page.locator('//footer[@class="page-footer"]').getByRole('link', { name: 'Privacy and Cookie Policy' }),
            write_for_us: page.locator('//footer[@class="page-footer"]').getByRole('link', { name: 'Write for us' }),
            advanced_search: page.locator('//footer[@class="page-footer"]').getByRole('link', { name: 'Advanced Search' }),
            subscribe: page.locator('//footer[@class="page-footer"]').getByRole('link', { name: 'Subscribe' }),
            orders_and_returns: page.locator('//footer[@class="page-footer"]').getByRole('link', { name: 'Orders and Returns' })
        }
    }

    async are_elements_visible(){
        const visibilityMap: {[key: string]: boolean} = {};
        for (const [key, locator] of Object.entries(this.locators)){
            await (locator as Locator).waitFor({state: 'visible'});
            visibilityMap[key] = await (locator as Locator).isVisible();
        }
        for (const [key, locator] of Object.entries(this.locators_extend)){
            await (locator as Locator).waitFor({state: 'visible'});
            visibilityMap[key] = await (locator as Locator).isVisible();
        }
        return visibilityMap;
    }

    async click_sign_in_link(){
        await this.locators.signInLink.click();
    }

    async click_create_account_link(){
        await this.locators.createAccountLink.click();
    }

    async get_banner_text(){
        let pageMessageLabel = this.page.locator('//span[@class="logged-in"]').nth(0);
        await pageMessageLabel.waitFor({state: 'visible'});
        return await pageMessageLabel.textContent();
    }
}