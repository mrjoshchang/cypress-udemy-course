Feature: Trigger

    Scenario: Verify the click event
        Given I am on the "playground" page
        And I click the "trigger" link
        And I am directed to the "playground/trigger" page
        And the "div" should not contain the text "A user clicks on an element"
        When I click the "1st" "Click Me" button
        Then the "div" should contain the text "A user clicks on an element"
        And I click the "1st" "Click Me" button
        And the "div" should not contain the text "A user clicks on an element"


    Scenario: Verify the right-click event
        Given I am on the "playground" page
        And I click the "trigger" link
        And I am directed to the "playground/trigger" page
        And the "div" should not contain the text "A user right-clicks on an element"
        When I double right click the "Right Click Me" button
        Then the "div" should contain the text "A user right-clicks on an element"
        And I right click the "Right Click Me" button
        And the "div" should not contain the text "A user right-clicks on an element"


    Scenario: Verify the double-click event
        Given I am on the "playground/trigger" page
        And the "div" should not contain the text "The user double-clicks on an element"
        When I double-click the "Double Click Me" button
        And I double-click the "Double Click Me" button
        Then the "div" should contain the text "The user double-clicks on an element"
        And I double-click the "Double Click Me" button
        And the "div" should not contain the text "The user double-clicks on an element"


    Scenario: Verify the mousedown event
        Given I am on the "playground/trigger" page
        And the "div" should not contain the text "A mouse button is pressed over an element"
        When I trigger a "mousedown" event on "Click Down On Me"
        And I trigger a "mousedown" event on "Click Down On Me"
        Then the "div" should contain the text "A mouse button is pressed over an element"
        And I trigger a "mousedown" event on "Click Down On Me"
        And the "div" should not contain the text "A mouse button is pressed over an element"

    # Hover Over Me
    # Move Out Of Me
    # Move Around In Me


    Scenario: Verify the mouseup event
        Given I am on the "playground/trigger" page
        And the "div" should not contain the text "The mouse button is released over an element"
        When I trigger a "mouseup" event on "Release Click On Me"
        And I trigger a "mouseup" event on "Release Click On Me"
        Then the "div" should contain the text "The mouse button is released over an element"
        And I trigger a "mouseup" event on "Release Click On Me"
        And the "div" should not contain the text "The mouse button is released over an element"