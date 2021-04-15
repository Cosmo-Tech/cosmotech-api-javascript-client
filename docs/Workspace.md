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
**simulatorAnalysisFilter** | **[String]** | a filter list of available Simulator Analysis | [optional] 
**users** | [**[WorkspaceUser]**](WorkspaceUser.md) | the list of users Id with their role | [optional] 
**webApp** | [**WorkspaceWebApp**](WorkspaceWebApp.md) |  | [optional] 
**services** | [**WorkspaceServices**](WorkspaceServices.md) |  | [optional] 
**sendInputToDataWarehouse** | **Boolean** | default setting for all Scenarios and Analysis to set whether or not the Dataset values and the input parameters values are send to the DataWarehouse prior to Simulation Run | [optional] [default to true]


