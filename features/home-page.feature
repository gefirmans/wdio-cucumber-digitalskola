@home-page
Feature: Home Page - Add to Cart

Background: Home Page
    Given user is on the login page
    And user input username as "standard_user" And user input password as "secret_sauce"

@tc-1
Scenario Outline: User successfully add to cart
    When user add product to cart "<productName>" and user click on the cart icon
    Then user should be on the shopping cart page
    Examples:
        | productName |
        | Sauce Labs Backpack |