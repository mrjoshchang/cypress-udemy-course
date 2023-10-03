Feature: downloads

    Scenario Outline: Verify the "<image>" download exists
        Given I am on the "playground" page
        When I click the "downloads" link
        And I am directed to the "playground/downloads" page
        And I click the "Download <image>" button
        Then the download "<filename>" should exist

        Examples:
            | image      | filename       |
            | Bulbasaur  | bulbasaur.jpg  |
            | Charmander | charmander.jpg |
            | Pikachu    | pikachu.jpg    |
            | Squirtle   | squirtle.jpg   |
