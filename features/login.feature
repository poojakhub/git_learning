Feature: Login feature for dataGardener

Scenario: login to data gardener as existing user
Given I am on dataGardener website
And A login form should appear
When I enter 'poojakhub@gmail.com' and '8ul8ul8uL'
Then I should see home screen