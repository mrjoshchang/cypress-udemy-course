Feature: Scroll

    @regression
    Scenario: Scrolling around
        Given I am on the "playground" page
        When I click the "scroll" link
        And I am directed to the "playground/scroll" page
        And I scroll into view: "Outro"
        And the "Outro" should contain the text:
            """
            [Outro]Just between us, did the love affair maim you all too well? Just between us, do you remember it all too well? Just between us, I remember it (Just between us) all too well Wind in my hair, I was there, I was there (I was there) Down the stairs, I was there, I was there Sacred prayer, I was there, I was there It was rare, you remember it all too well Wind in my hair, I was there, I was there (Oh) Down the stairs, I was there, I was there (I was there) Sacred prayer, I was there, I was there It was rare, you remember it (All too well) Wind in my hair, I was there, I was there Down the stairs, I was there, I was there Sacred prayer, I was there, I was there It was rare, you remember it Wind in my hair, I was there, I was there Down the stairs, I was there, I was there Sacred prayer, I was there, I was there It was rare, you remember it
            """
