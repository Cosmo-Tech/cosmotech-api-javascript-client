# CosmotechApi.RunTemplate

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**id** | **String** | the Solution Run Template id | 
**name** | **String** | the Run Template name | 
**description** | **String** | the Run Template description | [optional] 
**isStandardSimulator** | **Boolean** | whether or not the Run Template use the main standard Simulator directly. False if there is a Custom Simulator set | [optional] [readonly] 
**simulation** | **String** | the simulation name. This information is send to the Simulator | [optional] 
**tags** | **[String]** | the list of Run Template tags | [optional] 
**computeSize** | **String** | the compute size needed for this Run Template. Standard sizes are basic and highcpu. Default is basic | [optional] 
**parametersHandlerResource** | [**RunTemplateResourceStorage**](RunTemplateResourceStorage.md) |  | [optional] 
**datasetValidatorResource** | [**RunTemplateResourceStorage**](RunTemplateResourceStorage.md) |  | [optional] 
**customSimulatorResource** | [**RunTemplateResourceStorage**](RunTemplateResourceStorage.md) |  | [optional] 
**datasetSchemaResource** | [**RunTemplateResourceStorage**](RunTemplateResourceStorage.md) |  | [optional] 
**parameterGroups** | [**[RunTemplateParameterGroup]**](RunTemplateParameterGroup.md) | the list of parameters groups for the Run Template | [optional] 


