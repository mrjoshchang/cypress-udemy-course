Feature: World

    @beforeScenario
    Scenario: easy maths
        Given I set "counter" to 1
        When I increment the "counter" by 6
        Then I verify "counter" should equal 7
        And I decrement the "counter" by 10
        And I verify "counter" should equal -3

    @afterScenario
    Scenario: this text is bananas
        When I set "foo" to "this is bananas"
        Then I verify "foo" should not equal "this is oranges"
        And I verify "foo" should equal "this is bananas"