import Page from './page.js';
import { $, expect } from '@wdio/globals'

class DataInformation extends Page {
    get firstNameTextbox () { return $('#first-name') }
    get lastNameTextbox () { return $('#last-name') }
    get address1Textbox () { return $('#postal-code') }
    get continueButton () { return $('#continue') }

    async validateOnDataInformationPage() {
        await expect(this.firstNameTextbox).toBeExisting();
        await expect(this.lastNameTextbox).toBeExisting();
        await expect(this.address1Textbox).toBeExisting();
        await expect(this.continueButton).toBeExisting();
    }

   async InputFirstName(firstName) {
    await this.firstNameTextbox.setValue(firstName)
   }
   async InputLastName(lastName) {
    await this.lastNameTextbox.setValue(lastName)
   }
   async InputAddress1(address1) {
    await this.address1Textbox.setValue(address1)
   }
   async ClickContinueButton() {
    await this.continueButton.click()
   }
   async CheckoutStepOne(firstName, lastName, address1) {
    await this.InputFirstName(firstName);
    await this.InputLastName(lastName);
    await this.InputAddress1(address1);
    await this.ClickContinueButton();
    await browser.pause(1000)
   }

  open () {
    return super.open('checkout-step-one.html')
  }
}

export default new DataInformation()