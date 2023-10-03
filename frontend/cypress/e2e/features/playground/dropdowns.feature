Feature: Dropdowns


    Scenario: Verify the select dropdown elements
        Given I am on the "playground" page
        And I click the "dropdowns" link
        And I am directed to the "playground/dropdowns" page
        And the "single dropdown" should have the value ""
        When I select "Option 1" from the "single dropdown" dropdown
        Then the "single dropdown" should have the value "option1"
        And the "1st" "paragraph" should contain the text "option1"
        And I select "Option 2" from the "single dropdown" dropdown
        And the "single dropdown" should have the value "option2"
        And the "1st" "paragraph" should contain the text "option2"
        And I select "Option 3" from the "single dropdown" dropdown
        And the "single dropdown" should have the value "option3"
        And the "1st" "paragraph" should contain the text "option3"


    Scenario: Multiple select
        Given I am on the "playground/dropdowns" page
        When from the "multi dropdown" dropdown I select:
            | Option 1 |
            | Option 2 |
            | Option 3 |
        Then the "multi dropdown" dropdown should have the values:
            | option1 |
            | option2 |
            | option3 |
        And the "2nd" "paragraph" should contain the text "option1, option2, option3"
