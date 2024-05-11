import { expect, type Locator, type Page} from '@playwright/test';
import { BasePage } from '../pages/base';

export class MainPage extends BasePage{
    readonly locators_extend: any;

    constructor(page: Page){
        super(page);
        this.url = 'https://magento.softwaretestingboard.com/';
        this.locators_extend = {
            pageContent: page.locator('main[id="maincontent"]')
        }
    }
}