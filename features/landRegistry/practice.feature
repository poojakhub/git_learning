Feature:Checking the date filter works
    @PracticeA
    Scenario: On the Landregistry, try to check date filter
        Given I am on dataGardener website
        And A login form should appear
        When I enter 'poojakhub@gmail.com' and '8ul8ul8uL'
        Then I select the LandRegistry option
        When I select the date so From and To option must be available
        Then I click on From, date table must be displayed
        When I click on small arrow next to month option ,list of month must be displayed
        Then I select the month-'May' , which must be displayed into the box
        When I click on small arrow next to the year, list of year must be displayed
        Then I select the year-'2005' , which must be displayed into the box
        When I select the date-1 from the table ,table must be disapper and full date must be displayed into the From option




    