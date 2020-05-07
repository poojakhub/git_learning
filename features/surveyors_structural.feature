Feature: Sureveyor/Structural engineers/Architects are looking for Old Builds at the surrey county
@Surveyors
Scenario: Getting the list of Old build at the surrey county

Given I am on dataGardener website
And A login form should appear
When I enter 'poojakhub@gmail.com' and '8ul8ul8uL'
When I click on landregistry, filter options open
# When I click on price option ,price range window opens
# When I enters '500000' and '600000' to the mininmum and maximum range box
# Then clicking on apply button now
Then I select the surrey county
Then I select the Old build 
Then I select the Detached property option
Then Apply filter button is clicked 
Then The result found must be matched with our applied filter criteria.   