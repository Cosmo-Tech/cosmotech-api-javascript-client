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
**analyses** | [**[ScenarioAnalysis]**](ScenarioAnalysis.md) | the configuration for next Analysis | [optional] 
**successfulAnalyses** | [**[ScenarioSuccessfulAnalysis]**](ScenarioSuccessfulAnalysis.md) | the configuration and information for last successful Analyses Runs | [optional] [readonly] 
**failedAnalyses** | [**[ScenarioFailedAnalysis]**](ScenarioFailedAnalysis.md) | the configuration and information for last failed Analyses Runs | [optional] [readonly] 
**runningAnalyses** | [**[ScenarioRunningAnalysis]**](ScenarioRunningAnalysis.md) | the configuration and information for currently running Analyses Runs | [optional] [readonly] 


