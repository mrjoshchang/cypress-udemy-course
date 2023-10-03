Feature: Attributes

    Scenario: Verify text color and font
        Given I am on the "playground" page
        When I click the "attributes" link
        And I am directed to the "playground/attributes" page
        Then the "primary header" should contain the text "Colorful Paragraphs"
        And the "1st" "paragraph" should have the "color" css value "rgb(255, 0, 0)"
        And the "2nd" "paragraph" should have the "color" css value "rgb(0, 0, 255)"
        And the "3rd" "paragraph" should have the "color" css value "rgb(0, 128, 0)"
        And the "4th" "paragraph" should have the "color" css value "rgb(255, 165, 0)"
        And the "5th" "paragraph" should have the "color" css value "rgb(128, 0, 128)"


    Scenario: Verify image attributes
        Given I am on the "playground/attributes" page
        And the "secondary header" should have the text "Attributes Page"
        Then the "Pokemon (US)" should have the "href" attribute value "https://www.pokemon.com/us"
        And the "Squirtle image" should have the "alt" attribute value "squirtle"
        And the "Squirtle image" should have the "src" attribute value "https://assets.pokemon.com/assets/cms2/img/pokedex/full/007.png"
        And the "Squirtle image" should have the "width" attribute value "475"
        And the "Squirtle image" should have the "height" attribute value "475"
