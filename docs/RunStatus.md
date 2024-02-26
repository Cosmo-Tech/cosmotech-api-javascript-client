# CosmotechApi.RunStatus

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**id** | **String** | the Run id | [optional] 
**organizationId** | **String** | the Organization id | [optional] 
**workspaceId** | **String** | the Workspace id | [optional] 
**runnerId** | **String** | the Runner id | [optional] 
**workflowId** | **String** | the Cosmo Tech compute cluster Argo Workflow Id to search | [optional] 
**workflowName** | **String** | the Cosmo Tech compute cluster Argo Workflow Name | [optional] 
**startTime** | **String** | the Run start Date Time | [optional] 
**endTime** | **String** | the Run end Date Time | [optional] 
**phase** | **String** | high-level summary of where the workflow is in its lifecycle | [optional] 
**progress** | **String** | progress to completion | [optional] 
**message** | **String** | a  human readable message indicating details about why the workflow is in this condition | [optional] 
**estimatedDuration** | **Number** | estimatedDuration in seconds | [optional] 
**nodes** | [**[RunStatusNode]**](RunStatusNode.md) | status of Run nodes | [optional] 
**state** | [**RunState**](RunState.md) |  | [optional] 


