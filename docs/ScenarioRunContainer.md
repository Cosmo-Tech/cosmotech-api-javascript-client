# CosmotechApi.ScenarioRunContainer

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**id** | **String** | the container Id | [optional] [readonly] 
**name** | **String** | the container name | 
**labels** | **{String: String}** | the metadata labels | [optional] 
**envVars** | **{String: String}** | environment variable map | [optional] 
**image** | **String** | the container image URI | 
**entrypoint** | **String** | the container entry point | [optional] 
**runArgs** | **[String]** | the list of run arguments for the container | [optional] 
**dependencies** | **[String]** | the list of dependencies container name to run this container | [optional] 


