Feature: Test for home Page
Scenario: Get all tags
	Given url 'https://conduit.productionready.io/api/tags'
	When method Get
	Then status 200