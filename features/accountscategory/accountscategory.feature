Feature: Company accounts catagory
<<<<<<< HEAD

  # Scenario: Accounts catagory company
  #   Given     I am on dataGardener website
  #   And       A login form should appear
  #   When      I enter 'poojakhub@gmail.com' and '8ul8ul8uL'
  #   #Then      I should see home screen (This step logs out so can't click on dashboard...)
  #   When      I click on companies data
  #   When      I click on category
  #   And       I click on private limited company
  #   And       I click on apply filter button
  #   Then      Results screen should appear
  #   When      I add column 'Company Category'
  #   Then      'Company Category' column should appear
  #   And       For all reacords the category should be 'Private Limited Company'

    Scenario: Check company age
     Given     I am on dataGardener website
=======
 @Surveyors
  Scenario: Accounts catagory company
    Given     I am on dataGardener website
>>>>>>> 81a7da0f069ae45b91971ecdaea2492fb7b9a32d
    And       A login form should appear
    When      I enter 'poojakhub@gmail.com' and '8ul8ul8uL'
    #Then      I should see home screen (This step logs out so can't click on dashboard...)
    When      I click on companies data
    When      I click on company age
     When      I enter '10'
     Then      I click on less then '10' years
      And       I click on apply filter button
    # Then      All the result should be less then 10 years
    Then        I click on 'Google'
    
    
