Feature: Tables


    Scenario: Interacting with Tables
        Given I am on the "playground" page
        When I click the "table" link
        And I am directed to the "playground/table" page
        And the "User" table should have the headers:
            | ID | Name | Age |
        And the "User" table should include the row:
            | id | name | age |
            | 1  | John | 25  |
        And I click the "Name" table header
        And the "Name" text column should be sorted in descending order
        And I click the "Name" table header
        And the "Name" text column should be sorted in ascending order
        And I click the "Age" table header
        And the "Age" number column should be sorted in descending order
        And I click the "Age" table header
        And the "Age" number column should be sorted in ascending order