# CosmotechApi.Dataset

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**id** | **String** | the Dataset unique identifier | [optional] [readonly] 
**name** | **String** | the Dataset name | 
**description** | **String** | the Dataset description | [optional] 
**ownerId** | **String** | the User id which own this Dataset | [optional] [readonly] 
**tags** | **[String]** | the list of tags | [optional] 
**connector** | [**DatasetConnector**](DatasetConnector.md) |  | 
**fragmentsIds** | **[String]** | the list of other Datasets ids to compose as fragments | [optional] 
**validatorId** | **String** | the validator id | [optional] 
**compatibility** | [**[DatasetCompatibility]**](DatasetCompatibility.md) | the list of compatible Solutions versions | [optional] 


