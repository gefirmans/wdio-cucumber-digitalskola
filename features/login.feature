@login
Feature: Login Test

Background: Login Page
    Given user is on the login page

@positive @tc-1
Scenario Outline: Login Successful
    And user input username as "<username>" And user input password as "<password>"
    And user click on login button
    Then user should be logged in

Examples:
    | username      | password     |
    | standard_user | secret_sauce |
    # | visual_user   | secret_sauce |

# @negative @tc-2
# Scenario: Login Failed
#     And user input username as "standard_user" And user input password as "wrong_password" and user click on login button
#     Then user should be error Message "Epic sadface: Username and password do not match any user in this service"

@negative @tc-2
Scenario Outline: Login Failed
    And user input username as "<username>" And user input password as "<password>" and user click on login button
    Then user should be error Message "<message>"

Examples:
    | username      | password       | message                                                                   |
    | standard_user | wrong_password | Epic sadface: Username and password do not match any user in this service |