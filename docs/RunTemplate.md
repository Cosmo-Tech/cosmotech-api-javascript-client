# CosmotechApi.RunTemplate

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**id** | **String** | the Solution Run Template id | 
**name** | **String** | the Run Template name | 
**description** | **String** | the Run Template description | [optional] 
**csmSimulation** | **String** | the Cosmo Tech simulation name. This information is send to the Engine. Mandatory information if no Engine is defined | [optional] 
**tags** | **[String]** | the list of Run Template tags | [optional] 
**computeSize** | **String** | the compute size needed for this Run Template. Standard sizes are basic and highcpu. Default is basic | [optional] 
**fetchDatasets** | **Boolean** | whether or not the fetch dataset step is done | [optional] 
**fetchScenarioParameters** | **Boolean** | whether or not the fetch parameters step is done | [optional] 
**applyParameters** | **Boolean** | whether or not the apply parameter step is done | [optional] 
**validateData** | **Boolean** | whether or not the validate step is done | [optional] 
**sendDatasetsToDataWarehouse** | **Boolean** | whether or not the Datasets values are send to the DataWarehouse prior to Simulation Run. If not set follow the Workspace setting | [optional] 
**sendInputParametersToDataWarehouse** | **Boolean** | whether or not the input parameters values are send to the DataWarehouse prior to Simulation Run. If not set follow the Workspace setting | [optional] 
**preRun** | **Boolean** | whether or not the pre-run step is done | [optional] 
**run** | **Boolean** | whether or not the run step is done | [optional] 
**postRun** | **Boolean** | whether or not the post-run step is done | [optional] 
**parametersJson** | **Boolean** | whether or not to store the scenario parameters in json instead of csv | [optional] 
**parametersHandlerSource** | [**RunTemplateStepSource**](RunTemplateStepSource.md) |  | [optional] 
**datasetValidatorSource** | [**RunTemplateStepSource**](RunTemplateStepSource.md) |  | [optional] 
**preRunSource** | [**RunTemplateStepSource**](RunTemplateStepSource.md) |  | [optional] 
**runSource** | [**RunTemplateStepSource**](RunTemplateStepSource.md) |  | [optional] 
**postRunSource** | [**RunTemplateStepSource**](RunTemplateStepSource.md) |  | [optional] 
**parameterGroups** | **[String]** | the ordered list of parameters groups for the Run Template | [optional] 


