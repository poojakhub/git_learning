Feature: Corporate land
    Scenario: checking price filter
        Given I am on dataGardener website
        And A login form should appear
        When I enter 'poojakhub@gmail.com' and '8ul8ul8uL'
        When I click on corporate land
        And I apply price filters between '50000' and '200000'
        Then I should see results with price between '50000' and '200000'


Scenario: checking region filter
        Given I am on dataGardener website
        And A login form should appear
        When I enter 'poojakhub@gmail.com' and '8ul8ul8uL'
        When I click on corporate land
         And I click Region filter
        And I click South East
        And I click apply filter