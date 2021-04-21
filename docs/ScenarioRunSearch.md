# CosmotechApi.ScenarioRunSearch

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**solutionId** | **String** | the Solution Id to search | [optional] 
**runTemplateId** | **String** | the Solution Analysis Id to search | [optional] 
**workspaceId** | **String** | the Workspace Id to search | [optional] 
**scenarioId** | **String** | the Scenario Id to search | [optional] 
**state** | **String** | the state to search | [optional] 
**jobId** | **String** | the Cosmo Tech compute cluster Job Id to search | [optional] 
**ownerId** | **String** | the owner Id to search | [optional] 



## Enum: StateEnum


* `FetchingDatasets` (value: `"FetchingDatasets"`)

* `FetchingScenarioParameters` (value: `"FetchingScenarioParameters"`)

* `ApplyingScenarioParameters` (value: `"ApplyingScenarioParameters"`)

* `ValidatingScenarioData` (value: `"ValidatingScenarioData"`)

* `SendingScenarioDataToDataWarehouse` (value: `"SendingScenarioDataToDataWarehouse"`)

* `PreRun` (value: `"PreRun"`)

* `Running` (value: `"Running"`)

* `PostRun` (value: `"PostRun"`)

* `Success` (value: `"Success"`)

* `Failed` (value: `"Failed"`)




