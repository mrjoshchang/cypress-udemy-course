Feature: Checkboxes

    Scenario: Verify the select dropdown elements
        Given I am on the "playground" page
        And I click the "checkbox" link
        And I am directed to the "playground/checkbox" page
        And the "Option 1" checkbox should not be checked
        And the "Option 2" checkbox should not be checked
        And the "Option 3" checkbox should not be checked
        When I check the "Option 2" checkbox
        Then the "Option 1" checkbox should not be checked
        And the "Option 2" checkbox should be checked
        And the "Option 3" checkbox should not be checked
        And the "checked box" should contain the text "option2"
