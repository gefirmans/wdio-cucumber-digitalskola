import Page from './page.js';
import { $, expect } from '@wdio/globals'

class DetailCheckout extends Page {
    get finishButton () { return $('#finish') }

    async validateOnDetailCheckoutPage() {
        await expect(this.finishButton).toBeExisting();
    }

    async FinishCheckout() {
        await this.finishButton.click()
        await browser.pause(1000)
       }

  open () {
    return super.open('checkout-complete.html')
  }
}

export default new DetailCheckout()