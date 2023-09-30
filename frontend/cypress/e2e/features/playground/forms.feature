Feature: Forms


    Scenario: Verify form submission
        Given I am on the "playground" page
        And I click the "form" link
        And I am directed to the "playground/form" page
        When I fill in the form:
            | First Name | Joshua         |
            | Last Name  | Testing        |
            | Email      | jt@cypress.com |
        And I submit the "contact form" form
        Then the "submitted first name" should contain the text "Joshua"
        And the "submitted last name" should contain the text "Testing"
        And the "submitted email" should contain the text "jt@cypress.com"


    Scenario: Clear form submission
        Given I am on the "playground" page
        And I click the "form" link
        And I am directed to the "playground/form" page
        When I fill in the form:
            | First Name | Joshua         |
            | Last Name  | Testing        |
            | Email      | jt@cypress.com |
        And I submit the "contact form" form
        And the "submitted first name" should contain the text "Joshua"
        And the "submitted last name" should contain the text "Testing"
        And the "submitted email" should contain the text "jt@cypress.com"
        And I click the "Clear" button
        Then the "First Name" should have the value ""
        And the "Last Name" should have the value ""
        And the "Email" should have the value ""
        And the "submitted first name" should not exist
        And the "submitted last name" should not exist
        And the "submitted email" should not exist