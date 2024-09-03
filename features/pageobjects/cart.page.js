import Page from "./page";
import { $, expect } from '@wdio/globals'

class CartPage extends Page {
    get checkoutButton () { return $('#checkout') }
    // get continueShoppingButton () { return $('#continue') }

    async validateOnCartPage() {
        await expect(this.checkoutButton).toBeExisting();
        // await except(this.continueShoppingButton).toBeExisting();
    }

    async Checkout() {
        await this.checkoutButton.click()
        await browser.pause(1000)
       }

    open(){
        return super.open("cart.html")
    }
}

export default new CartPage()