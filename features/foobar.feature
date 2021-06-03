Feature: MyTestSuiteA
    Foobar
    Barfoo

Scenario: Check Community Section
    Given open website
        | https://webdriver.io |
    When Click on "Community"
    Then Assert "Need Help?" is visible on the page

Scenario: Check Contribute Section
    Given open website
        | https://webdriver.io |
    When Click on "Contribute"
    Then Assert "Find A Way To Contribute" is visible on the page
