Feature: Company accounts catagory

Scenario: Accounts catagory company
Given     I am on dataGardener website
Then      Login form should apper
When      I enter 'poojakhub@gmail.com' and '8ul8ul8uL'
Then      Home screen should appear
When      I click on companies data
When      I click on 'Accounts category'
And       I select no accounts field
And       I click on apply filter button
Then      Results screen should appear
When      I add column 'Company Category'
Then      'Company Category' column should appear
And       For all reacords the category should be 'Accounts'