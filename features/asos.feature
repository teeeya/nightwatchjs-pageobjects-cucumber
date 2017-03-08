# features/asos.feature

Feature: Load Asos homepage

Scenario: Navigating to asos.com

  Given I open Asos's homepage
  When the page has loaded
  Then the title is "ASOS | Shop the Latest Clothes and Fashion Online"
  And the url contains Asos