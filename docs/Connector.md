# CosmotechApi.Connector

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**id** | **String** | the Connector version unique identifier | [optional] [readonly] 
**key** | **String** | the Connector key which group Connector versions | 
**name** | **String** | the Connector name | 
**description** | **String** | the Connector description | [optional] 
**repository** | **String** | the registry repository containing the image | 
**version** | **String** | the Connector version MAJOR.MINOR.PATCH. Must be aligned with an existing repository tag | 
**tags** | **[String]** | the list of tags | [optional] 
**ownerId** | **String** | the user id which own this connector version | [optional] [readonly] 
**url** | **String** | an optional URL link to connector page | [optional] 
**ioTypes** | **[String]** |  | 
**parameterGroups** | [**[ConnectorParameterGroup]**](ConnectorParameterGroup.md) | the list of connector parameters groups | [optional] 



## Enum: [IoTypesEnum]


* `read` (value: `"read"`)

* `write` (value: `"write"`)




