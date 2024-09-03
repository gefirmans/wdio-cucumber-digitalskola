import Page from './page.js';
import { $ } from '@wdio/globals'

class LoginPage extends Page {

    get usernameTextbox () { return $('#user-name') }
    get passwordTextbox () { return $('#password') }
    get loginButton () { return $('#login-button') }
    get errorMessage () {return $('//*[@id="login_button_container"]/div/form/div[3]/h3')}

   async InputUsername(username) {
    await this.usernameTextbox.setValue(username);
   }
   async InputPassword(password) {
    await this.passwordTextbox.setValue(password)
   }
   async ClickLoginButton() {
    await this.loginButton.click()
   }
   async Login(username, password) {
    await this.InputUsername(username)
    await this.InputPassword(password)
    await this.ClickLoginButton()
    await browser.pause(2000)
   }

   async validateWrongPasswordDisplayed() {
    await expect(this.errorMessage).toHaveText(
        expect.stringContaining('Epic sadface: Username and password do not match any user in this service')
    )
}

  open () {
    return super.open('')
  }
}

export default new LoginPage()