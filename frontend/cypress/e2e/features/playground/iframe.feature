Feature: iFrames

    Scenario: Dealing with iFrames
        Given I am on the "playground" page
        And I click the "iFrame" link
        And I am directed to the "playground/iframe" page
        And in the "iframe" iframe, the "secondary header" should contain the text "Content Inside Iframe"
        And in the "iframe" iframe, the "paragraph" should contain the text "This a paragraph inside the iframe."
        And in the "iframe" iframe, the "Name" should have the text ""
        And in the "iframe" iframe, I fill in the "Name" input with "QA Tester"
        And in the "iframe" iframe, the "Name" should contain the value "QA Tester"
        And in the "iframe" iframe, the "Name" should have the value "QA Tester"