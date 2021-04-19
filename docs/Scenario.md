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
**solutionId** | **String** | the Solution Id associated with this Scenario | [optional] [readonly] 
**runTemplateId** | **String** | the Solution Run Template Id associated with this Scenario | [optional] 
**users** | [**[ScenarioUser]**](ScenarioUser.md) | the list of users Id with their role | [optional] 
**solutionName** | **String** | the Solution name | [optional] [readonly] 
**runTemplateName** | **String** | the Solution Run Template name associated with this Scenario | [optional] [readonly] 
**datasetList** | **[String]** | the list of Dataset Id associated to this Scenario Run Template | [optional] 
**parametersValues** | [**[ScenarioRunTemplateParameterValue]**](ScenarioRunTemplateParameterValue.md) | the list of Solution Run Template parameters values | [optional] 
**sendInputToDataWarehouse** | **Boolean** | whether or not the Dataset values and the input parameters values are send to the DataWarehouse prior to Simulation Run | [optional] 


