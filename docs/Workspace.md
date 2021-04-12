# CosmotechApi.Workspace

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**id** | **String** | the Workspace version unique identifier | [optional] [readonly] 
**name** | **String** | the Workspace name | 
**description** | **String** | the Workspace description | [optional] 
**version** | **String** | the Workspace version MAJOR.MINOR.PATCH. | [optional] 
**tags** | **[String]** | the list of tags | [optional] 
**ownerId** | **String** | the user id which own this workspace | [optional] [readonly] 
**simulator** | [**WorkspaceSimulator**](WorkspaceSimulator.md) |  | 
**userList** | [**[WorkspaceUser]**](WorkspaceUser.md) | the list of users Id with their role | [optional] 
**webApp** | [**WorkspaceWebApp**](WorkspaceWebApp.md) |  | [optional] 
**resources** | **{String: Object}** | a list of resources for the Workspace with resourceName/resourceUrl | [optional] [readonly] 


