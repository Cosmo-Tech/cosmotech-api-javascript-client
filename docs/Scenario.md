# CosmotechApi.Scenario

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**id** | **String** | the Scenario unique identifier | [optional] [readonly] 
**name** | **String** | the Scenario name | [optional] 
**description** | **String** | the Scenario description | [optional] 
**tags** | **[String]** | the list of tags | [optional] 
**parentId** | **String** | the Scenario parent id | [optional] 
**ownerId** | **String** | the user id which own this Scenario | [optional] [readonly] 
**rootId** | **String** | the scenario root id | [optional] [readonly] 
**solutionId** | **String** | the Solution Id associated with this Scenario | [optional] [readonly] 
**runTemplateId** | **String** | the Solution Run Template Id associated with this Scenario | [optional] 
**workspaceId** | **String** | the associated Workspace Id | [optional] [readonly] 
**users** | [**[ScenarioUser]**](ScenarioUser.md) | the list of users Id with their role | [optional] 
**state** | **String** | the Scenario state | [optional] [readonly] 
**creationDate** | **Date** | the Scenario creation date | [optional] [readonly] 
**lastUpdate** | **Date** | the last time a Scenario was updated | [optional] [readonly] 
**ownerName** | **String** | the name of the owner | [optional] [readonly] 
**solutionName** | **String** | the Solution name | [optional] [readonly] 
**runTemplateName** | **String** | the Solution Run Template name associated with this Scenario | [optional] [readonly] 
**datasetList** | **[String]** | the list of Dataset Id associated to this Scenario Run Template | [optional] 
**parametersValues** | [**[ScenarioRunTemplateParameterValue]**](ScenarioRunTemplateParameterValue.md) | the list of Solution Run Template parameters values | [optional] 
**lastRun** | [**ScenarioLastRun**](ScenarioLastRun.md) |  | [optional] 



## Enum: StateEnum


* `Created` (value: `"Created"`)

* `Running` (value: `"Running"`)

* `Successful` (value: `"Successful"`)

* `Failed` (value: `"Failed"`)

* `Unknown` (value: `"Unknown"`)




