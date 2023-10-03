Feature: Upload

    Scenario: Upload a file
        Given I am on the "playground" page
        When I click the "upload" link
        And I am directed to the "playground/upload" page
        And I upload "bulbasaur.jpg" at "Choose File"
        Then the "1st" "paragraph" should contain the text "bulbasaur.jpg"
        And the "2nd" "paragraph" should contain the text "image/jpeg"
        And the "3rd" "paragraph" should contain the text "8340 bytes"
