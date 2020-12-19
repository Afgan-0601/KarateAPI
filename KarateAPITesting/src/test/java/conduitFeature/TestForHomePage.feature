Feature: Tests for the home page
Background: Define URL
Given url baseUrl
@ignoresss
Scenario: Get all tags
Given path 'tags'
When method Get
Then status 200
And match response.tags contains [‘test’, ‘dragons’] 
And match response.tags !contains ‘truck’
And match response.tags contains any [‘fish’, ‘dog’, ‘SIDA’]
#And match response.tags contains only []
And match response.tags == ‘#array’
And match each response.tags == ‘#string’