# CosmotechApi.Run

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**id** | **String** | the Run | [optional] [readonly] 
**state** | [**RunState**](RunState.md) |  | [optional] 
**organizationId** | **String** | the Organization id | [optional] 
**workflowId** | **String** | the Cosmo Tech compute cluster Argo Workflow Id to search | [optional] 
**csmSimulationRun** | **String** | the Cosmo Tech Simulation Run Id | [optional] [readonly] 
**generateName** | **String** | the base name for workflow name generation | [optional] 
**workflowName** | **String** | the Cosmo Tech compute cluster Argo Workflow Name | [optional] 
**ownerId** | **String** | the user id which own this run | [optional] [readonly] 
**workspaceId** | **String** | the Workspace Id | [optional] [readonly] 
**workspaceKey** | **String** | technical key for resource name convention and version grouping. Must be unique | [optional] [readonly] 
**runnerId** | **String** | the Runner Id | [optional] [readonly] 
**solutionId** | **String** | the Solution Id | [optional] [readonly] 
**runTemplateId** | **String** | the Solution Run Template id | [optional] [readonly] 
**computeSize** | **String** | the compute size needed for this Analysis. Standard sizes are basic and highcpu. Default is basic | [optional] [readonly] 
**createdAt** | **String** | the Run creation date | [optional] [readonly] 
**datasetList** | **[String]** | the list of Dataset Id associated to this Run | [optional] [readonly] 
**parametersValues** | [**[RunTemplateParameterValue]**](RunTemplateParameterValue.md) | the list of Run Template parameters values | [optional] [readonly] 
**nodeLabel** | **String** | the node label request | [optional] [readonly] 
**containers** | [**[RunContainer]**](RunContainer.md) | the containers list. This information is not returned by the API. | [optional] 


