# CosmotechApi.Runner

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**id** | **String** | the Runner unique identifier | [optional] [readonly] 
**name** | **String** | the Runner name | [optional] 
**description** | **String** | the Runner description | [optional] 
**tags** | **[String]** | the list of tags | [optional] 
**parentId** | **String** | the Runner parent id | [optional] 
**ownerId** | **String** | the user id which own this Runner | [optional] [readonly] 
**rootId** | **String** | the runner root id | [optional] [readonly] 
**solutionId** | **String** | the Solution Id associated with this Runner | [optional] [readonly] 
**runTemplateId** | **String** | the Solution Run Template Id associated with this Runner | [optional] 
**organizationId** | **String** | the associated Organization Id | [optional] [readonly] 
**workspaceId** | **String** | the associated Workspace Id | [optional] [readonly] 
**creationDate** | **Number** | the Runner creation date | [optional] [readonly] 
**lastUpdate** | **Number** | the last time a Runner was updated | [optional] [readonly] 
**ownerName** | **String** | the name of the owner | [optional] [readonly] 
**solutionName** | **String** | the Solution name | [optional] [readonly] 
**runTemplateName** | **String** | the Solution Run Template name associated with this Runner | [optional] [readonly] 
**datasetList** | **[String]** | the list of Dataset Id associated to this Runner Run Template | [optional] 
**runSizing** | [**RunnerResourceSizing**](RunnerResourceSizing.md) |  | [optional] 
**parametersValues** | [**[RunnerRunTemplateParameterValue]**](RunnerRunTemplateParameterValue.md) | the list of Solution Run Template parameters values | [optional] 
**lastRunId** | **String** | last run id from current runner | [optional] 
**validationStatus** | [**RunnerValidationStatus**](RunnerValidationStatus.md) |  | [optional] 
**security** | [**RunnerSecurity**](RunnerSecurity.md) |  | [optional] 


