import { Given, When, Then } from '@wdio/cucumber-framework';
import { expect, $ } from '@wdio/globals'

import LoginPage from '../pageobjects/login-page.js';
import HomePage from '../pageobjects/home-page.js';
import cartPage from '../pageobjects/cart.page.js';

Given('user is on the login page', async () => {
  await LoginPage.open()
})

// Then('user input username as {string} And user input password as {string} and user click on login button', async(username, password) => {
//    await LoginPage.InputUsername(username)
//    await LoginPage.InputPassword(password)
//    await LoginPage.ClickLoginButton()
//    await browser.pause(1000)
//   })
  
Then('user input username as {string} And user input password as {string}', async (username, password) => {
    await LoginPage.InputUsername(username)
    await LoginPage.InputPassword(password)
  })

When('user click on login button', async () => {
    await LoginPage.ClickLoginButton()
})

Then('user should be logged in', async () => {
        await HomePage.validateOnHomePage()
})

When('user input username as {string} And user input password as {string} and user click on login button', async (username, password) => {
        await LoginPage.InputUsername(username)
        await LoginPage.InputPassword(password)
        await LoginPage.ClickLoginButton()
        await browser.pause(1000)
})

Then('user should be error Message {string}', async (errorMessage) => {
    await LoginPage.validateWrongPasswordDisplayed(errorMessage)
})

// Given('user is on the home page', async () => {
//   await HomePage.open()
// })

// When('user add product to cart {string} and user click on the cart icon', async (productName) => {
//     await HomePage.addToCartButton.click(productName)
// })

// Then('user should be on the shopping cart page', async () => {
//     await cartPage.validateOnCartPage()
// })

