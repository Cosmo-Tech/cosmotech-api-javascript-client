# CosmotechApi.ScenarioAllOf

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**simulatorId** | **String** | the Simulator Id associated with this Scenario | [optional] [readonly] 
**analyses** | [**[ScenarioAnalysis]**](ScenarioAnalysis.md) | the configuration for next Analysis | [optional] 
**successfulAnalyses** | [**[ScenarioSuccessfulAnalysis]**](ScenarioSuccessfulAnalysis.md) | the configuration and information for last successful Analyses Runs | [optional] [readonly] 
**failedAnalyses** | [**[ScenarioFailedAnalysis]**](ScenarioFailedAnalysis.md) | the configuration and information for last failed Analyses Runs | [optional] [readonly] 
**runningAnalyses** | [**[ScenarioRunningAnalysis]**](ScenarioRunningAnalysis.md) | the configuration and information for currently running Analyses Runs | [optional] [readonly] 


