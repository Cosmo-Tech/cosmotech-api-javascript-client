# CosmotechApi.Solution

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**id** | **String** | the Solution version unique identifier | [optional] [readonly] 
**organizationId** | **String** | the Organization unique identifier | [optional] [readonly] 
**key** | **String** | the Solution key which group Solution versions | [optional] 
**name** | **String** | the Solution name | [optional] 
**description** | **String** | the Solution description | [optional] 
**repository** | **String** | the registry repository containing the image | [optional] 
**alwaysPull** | **Boolean** | set to true if the runtemplate wants to always pull the image | [optional] [default to false]
**csmSimulator** | **String** | the main Cosmo Tech simulator name used in standard Run Template | [optional] 
**version** | **String** | the Solution version MAJOR.MINOR.PATCH. Must be aligned with an existing repository tag | [optional] 
**ownerId** | **String** | the User id which own this Solution | [optional] [readonly] 
**sdkVersion** | **String** | the MAJOR.MINOR version used to build this solution | [optional] 
**url** | **String** | an optional URL link to solution page | [optional] 
**tags** | **[String]** | the list of tags | [optional] 
**parameters** | [**[RunTemplateParameter]**](RunTemplateParameter.md) | the list of Run Template Parameters | [optional] 
**parameterGroups** | [**[RunTemplateParameterGroup]**](RunTemplateParameterGroup.md) | the list of parameters groups for the Run Templates | [optional] 
**runTemplates** | [**[RunTemplate]**](RunTemplate.md) | list of Run Template | [optional] 
**security** | [**SolutionSecurity**](SolutionSecurity.md) |  | [optional] 


