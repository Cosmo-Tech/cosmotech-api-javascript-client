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
**organizationId** | **String** | the associated Organization Id | [optional] [readonly] 
**workspaceId** | **String** | the associated Workspace Id | [optional] [readonly] 
**state** | [**ScenarioJobState**](ScenarioJobState.md) |  | [optional] 
**creationDate** | **Number** | the Scenario creation date | [optional] [readonly] 
**lastUpdate** | **Number** | the last time a Scenario was updated | [optional] [readonly] 
**ownerName** | **String** | the name of the owner | [optional] [readonly] 
**solutionName** | **String** | the Solution name | [optional] [readonly] 
**runTemplateName** | **String** | the Solution Run Template name associated with this Scenario | [optional] [readonly] 
**datasetList** | **[String]** | the list of Dataset Id associated to this Scenario Run Template | [optional] 
**runSizing** | [**ScenarioResourceSizing**](ScenarioResourceSizing.md) |  | [optional] 
**parametersValues** | [**[ScenarioRunTemplateParameterValue]**](ScenarioRunTemplateParameterValue.md) | the list of Solution Run Template parameters values | [optional] 
**lastRun** | [**ScenarioLastRun**](ScenarioLastRun.md) |  | [optional] 
**parentLastRun** | [**ScenarioLastRun**](ScenarioLastRun.md) |  | [optional] 
**rootLastRun** | [**ScenarioLastRun**](ScenarioLastRun.md) |  | [optional] 
**validationStatus** | [**ScenarioValidationStatus**](ScenarioValidationStatus.md) |  | [optional] 
**security** | [**ScenarioSecurity**](ScenarioSecurity.md) |  | [optional] 


