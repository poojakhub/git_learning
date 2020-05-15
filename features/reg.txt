Feature: Registering on data gardener

Scenario: Registration as a new customer
Given      I am on https://test.datagardener.com website
When       I click on creat account link
Then       I click individual account type
When       I enter my full name 'Pooja Khubchandani',unique email address,password '8ul8ul8uL',confirm password '8ul8ul8uL',and postal code 'tw18 4rl'
When       I click on sign up link
Then       Pop up messege 'Thank you for signing up' appears

 Scenario:  Registration as an existing customer
 Given      I am on https://test.datagardener.com website
 When       I click on creat account link
 Then       I click individual account type
 When       I enter my full name 'Pooja Khubchandani',Email address 'poojakhub@gmail.com',password '8ul8ul8uL',confirm password '8ul8ul8uL',and postal code 'tw18 4rl'
 When       I click on sign up link
 Then       A message appears can't sign up, Email already exists