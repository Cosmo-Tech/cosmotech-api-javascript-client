# CosmotechApi.ValidatorRun

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**id** | **String** | the Validator Run id | [optional] [readonly] 
**validatorId** | **String** | the Validator id | [optional] [readonly] 
**validatorName** | **String** | the validator name | [optional] [readonly] 
**datasetId** | **String** | the Dataset id to run the validator on | 
**datasetName** | **String** | the Dataset name | [optional] [readonly] 
**state** | **String** | the Validator Run state | [optional] [readonly] 
**containerId** | **String** | the Validator Run container id | [optional] [readonly] 
**logs** | **String** | the Validator Run logs | [optional] [readonly] 



## Enum: StateEnum


* `Running` (value: `"Running"`)

* `Finished` (value: `"Finished"`)

* `OnError` (value: `"OnError"`)




