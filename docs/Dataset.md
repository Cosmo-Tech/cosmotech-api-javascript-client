# CosmotechApi.Dataset

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**id** | **String** | the Dataset unique identifier | [optional] [readonly] 
**name** | **String** | the Dataset name | [optional] 
**description** | **String** | the Dataset description | [optional] 
**ownerId** | **String** | the User id which own this Dataset | [optional] [readonly] 
**organizationId** | **String** | the Organization Id related to this Dataset | [optional] [readonly] 
**parentId** | **String** | the Dataset id which is the parent of this Dataset | [optional] 
**twingraphId** | **String** | the twin graph id | [optional] 
**main** | **Boolean** | is this the main dataset | [optional] 
**sourceType** | [**DatasetSourceType**](DatasetSourceType.md) |  | [optional] 
**source** | [**SourceInfo**](SourceInfo.md) |  | [optional] 
**status** | **String** | the Dataset status | [optional] 
**queries** | **[String]** | the list of queries | [optional] 
**tags** | **[String]** | the list of tags | [optional] 
**connector** | [**DatasetConnector**](DatasetConnector.md) |  | [optional] 
**fragmentsIds** | **[String]** | the list of other Datasets ids to compose as fragments | [optional] 
**validatorId** | **String** | the validator id | [optional] 
**compatibility** | [**[DatasetCompatibility]**](DatasetCompatibility.md) | the list of compatible Solutions versions | [optional] 
**security** | [**DatasetSecurity**](DatasetSecurity.md) |  | [optional] 



## Enum: StatusEnum


* `DRAFT` (value: `"DRAFT"`)

* `PENDING` (value: `"PENDING"`)

* `ERROR` (value: `"ERROR"`)

* `READY` (value: `"READY"`)




