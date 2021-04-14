# CosmotechApi.ScenarioFailedAnalysis

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**analysisId** | **String** | the Simulator Analysis Id associated with this Scenario | [optional] 
**datasetList** | **[String]** | the list of Dataset Id associated to this Scenario Analysis | [optional] 
**parametersValues** | [**[ScenarioAnalysisParameterValue]**](ScenarioAnalysisParameterValue.md) | the list of Simulator Analysis parameters values | [optional] 
**sendInputToDataWarehouse** | **Boolean** | whether or not the Dataset values and the input parameters values are send to the DataWarehouse prior to Simulation Run | [optional] 
**simulationId** | **String** | the Simulation Run Id | [optional] [readonly] 
**error** | **String** | the Simulation Run error message | [optional] [readonly] 


