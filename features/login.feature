Feature: The ebay Website

  Scenario Outline: As a user, I can log into the ebay and search a keyword
    Given I am on the login page
    When I login with <username> and <password>
    Then I should search a <keyword>
    Then I should count the search results

    Examples:
      | username | password |   keyword |
      | belenbonivardo98@gmail.com | Test1234! |  Pilas |