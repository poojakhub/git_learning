Feature: Company accounts catagory

  Scenario: Accounts catagory company
    Given     I am on dataGardener website
    And       A login form should appear
    When      I enter 'poojakhub@gmail.com' and '8ul8ul8uL'
    #Then      I should see home screen (This step logs out so can't click on dashboard...)
    When      I click on companies data
     When      I click on category
    And       I click on private limited company
    And       I click on apply filter button
    Then      Results screen should appear
    When      I add column 'Company Category'
    Then      'Company Category' column should appear
    # And       For all reacords the category should be 'Private Limited Company'