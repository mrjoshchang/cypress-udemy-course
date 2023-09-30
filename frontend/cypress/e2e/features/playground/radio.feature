Feature: Radio


    Scenario: Verify radio functions
        Given I am on the "playground" page
        And I click the "radio" link
        When I am directed to the "playground/radio" page
        Then I check the "Option 1" radio button
        And the "Option 1" radio button should be checked
        And the "Option 2" radio button should not be checked
        And the "Option 3" radio button should not be checked
        And the "selected option" should contain the text "option1"