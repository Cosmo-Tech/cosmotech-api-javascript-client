# CosmotechApi.Scenario

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**id** | **String** | the Scenario unique identifier | [optional] [readonly] 
**name** | **String** | the Scenario name | 
**description** | **String** | the Scenario description | [optional] 
**tags** | **[String]** | the list of tags | [optional] 
**parentId** | **String** | the Scenario parent id | [optional] 
**ownerId** | **String** | the user id which own this Scenario | [optional] [readonly] 
**userList** | [**[ScenarioUser]**](ScenarioUser.md) | the list of users Id with their role | [optional] 
**simulatorId** | **String** | the Simulator Id associated with this Scenario | [optional] [readonly] 
**analysis** | [**[ScenarioAnalysis]**](ScenarioAnalysis.md) | the configuration for Analysis | [optional] 


