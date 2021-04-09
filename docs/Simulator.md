# CosmotechApi.Simulator

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**id** | **String** | the Simulator version unique identifier | [optional] [readonly] 
**simulatorKey** | **String** | the Simulator key which group Connector versions | 
**name** | **String** | the Simulator name | 
**description** | **String** | the Simulator description | [optional] 
**repository** | **String** | the registry repository containing the image | 
**version** | **String** | the Simulator version MAJOR.MINOR.PATCH. Must be aligned with an existing repository tag | 
**ownerId** | **String** | the User id which own this Simulator | [optional] [readonly] 
**url** | **String** | an optional URL link to connector page | [optional] 
**tags** | **[String]** | the list of tags | [optional] 
**analysis** | [**[SimulatorAnalysis]**](SimulatorAnalysis.md) | list of Simulator Analysis | [optional] 


