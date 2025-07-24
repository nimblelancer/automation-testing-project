import { browser } from '@wdio/globals'
import { Env } from '../utils/constants'
/**
* main page object containing all methods, selectors and functionality
* that is shared across all page objects
*/
export default class BasePage {
    /**
    * Opens a sub page of the page
    * @param path path of the sub page (e.g. /path/to/page.html)
    */
    public open (path: string) {
        return browser.url(`${Env.BASE_URL}${path}`)
    }
}
