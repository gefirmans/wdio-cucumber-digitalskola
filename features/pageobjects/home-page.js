import Page from "./page";
import { $, expect } from '@wdio/globals'

class HomePage extends Page {

    get addToCartButton () { return $('#add-to-cart-sauce-labs-backpack') }
    get cartIcon () { return $('#shopping_cart_container') }
    
    async validateOnHomePage() {
        await expect(this.addToCartButton).toBeExisting();    
        await expect(this.cartIcon).toBeExisting();
    }
    
    async AddToCart(productName) {
        await this.addToCartButton.click()
        await browser.pause(1000)
        await this.cartIcon.click()
        await browser.pause(1000)
       }

    open () {
        return super.open('inventory.html')
    }
}

export default new HomePage()