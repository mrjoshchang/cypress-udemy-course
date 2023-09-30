Feature: Text validation

    Scenario: Verify the page text
        Given I am on the "playground/text" page
        Then the "primary header" should contain the text "A primary header"
        And the "secondary header" should contain the text "A secondary header"
        And the "tertiary header" should contain the text "A tertiary header"
        And the "quaternary header" should contain the text "A quaternary header"
        And the "quinary header" should contain the text "A quinary header"
        And the "senary header" should contain the text "h6"
        And the "paragraph" should have the text "This is a paragraph stating this practice page is for UI test scenarios"