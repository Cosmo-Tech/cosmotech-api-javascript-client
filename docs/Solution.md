# CosmotechApi.Solution

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**id** | **String** | the Solution version unique identifier | [optional] [readonly] 
**solutionKey** | **String** | the Solution key which group Solution versions | 
**name** | **String** | the Solution name | 
**description** | **String** | the Solution description | [optional] 
**repository** | **String** | the registry repository containing the image | 
**simulator** | **String** | the main simulator name used in standard Run Template | [optional] 
**version** | **String** | the Solution version MAJOR.MINOR.PATCH. Must be aligned with an existing repository tag | 
**ownerId** | **String** | the User id which own this Solution | [optional] [readonly] 
**url** | **String** | an optional URL link to solution page | [optional] 
**tags** | **[String]** | the list of tags | [optional] 
**runTemplates** | [**[RunTemplate]**](RunTemplate.md) | list of Run Template | [optional] 


