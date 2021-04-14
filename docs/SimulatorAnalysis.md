# CosmotechApi.SimulatorAnalysis

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**id** | **String** | the Simulator Analysis id | 
**name** | **String** | the Simulator Analysis name | 
**description** | **String** | the Simulator Analysis description | [optional] 
**simulation** | **String** | the simulation name | [optional] 
**tags** | **[String]** | the list of Simulator Analysis tags | [optional] 
**computeSize** | **String** | the compute size needed for this Analysis. Standard sizes are basic and highcpu. Default is basic | [optional] 
**parametersHandlerResource** | [**AnalysisResourceStorage**](AnalysisResourceStorage.md) |  | [optional] 
**datasetValidatorResource** | [**AnalysisResourceStorage**](AnalysisResourceStorage.md) |  | [optional] 
**customDriverResource** | [**AnalysisResourceStorage**](AnalysisResourceStorage.md) |  | [optional] 
**datasetSchemaResource** | [**AnalysisResourceStorage**](AnalysisResourceStorage.md) |  | [optional] 
**parameterGroups** | [**[AnalysisParameterGroup]**](AnalysisParameterGroup.md) | the list of parameters groups for the Analysis | [optional] 


