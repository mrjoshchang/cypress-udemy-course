Feature: Buttons

    Background: Navigate to buttons page
        Given I am on the "playground" page
        And I click the "buttons" link
        And I am directed to the "playground/buttons" page

    Scenario: Button that navigates home
        When I click the "Go home" button
        And I am directed to the "home" page

    Scenario: Disabled button
        And the "Disabled" button should not be enabled

    Scenario: Double click button
        And I double-click the "Double Click!" button
        And the "Double Click response" should contain the text "Did you double click?"

    Scenario: button indexes
        And I click the "1st" "button" button
        And I am directed to the "home" page
