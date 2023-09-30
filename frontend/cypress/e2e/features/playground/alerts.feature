Feature: Alerts

    Background: Navigate to the Alerts page
        Given I am on the "playground" page
        When I click the "alerts" link
        And I am directed to the "playground/alerts" page

    Scenario: Acknowledge basic alert
        And I click "Show Alert" and the alert should contain the text "This is a simple alert message!"

    Scenario: Acknowledge confirmation alert
        And I click "Show Confirmation Prompt" and the confirm alert should contain the text "Are you sure you want to proceed?"

    Scenario: Acknowledge prompt alert
        And I click "Show Prompt Alert" and fill in the the prompt alert with "Testing"