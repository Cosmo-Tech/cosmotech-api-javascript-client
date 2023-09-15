# CosmotechApi.ScenariorunresultApi

All URIs are relative to *https://dev.api.cosmotech.com*

Method | HTTP request | Description
------------- | ------------- | -------------
[**getScenarioRunResult**](ScenariorunresultApi.md#getScenarioRunResult) | **GET** /organizations/{organization_id}/workspaces/{workspace_id}/scenarios/{scenario_id}/scenarioruns/{scenariorun_id}/probes/{probe_id} | Get a ScenarioRunResult in the Organization
[**sendScenarioRunResult**](ScenariorunresultApi.md#sendScenarioRunResult) | **POST** /organizations/{organization_id}/workspaces/{workspace_id}/scenarios/{scenario_id}/scenarioruns/{scenariorun_id}/probes/{probe_id} | Create a new ScenarioRunResult in the Organization



## getScenarioRunResult

> ScenarioRunResult getScenarioRunResult(organizationId, workspaceId, scenarioId, scenariorunId, probeId)

Get a ScenarioRunResult in the Organization

### Example

```javascript
import CosmotechApi from '@cosmotech/api';
let defaultClient = CosmotechApi.ApiClient.instance;
// Configure OAuth2 access token for authorization: oAuth2AuthCode
let oAuth2AuthCode = defaultClient.authentications['oAuth2AuthCode'];
oAuth2AuthCode.accessToken = 'YOUR ACCESS TOKEN';

let apiInstance = new CosmotechApi.ScenariorunresultApi();
let organizationId = "organizationId_example"; // String | the Organization identifier
let workspaceId = "workspaceId_example"; // String | the Workspace identifier
let scenarioId = "scenarioId_example"; // String | the Scenario identifier
let scenariorunId = "scenariorunId_example"; // String | the ScenarioRun identifier
let probeId = "probeId_example"; // String | the Probe identifier
apiInstance.getScenarioRunResult(organizationId, workspaceId, scenarioId, scenariorunId, probeId).then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, (error) => {
  console.error(error);
});

```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **organizationId** | **String**| the Organization identifier | 
 **workspaceId** | **String**| the Workspace identifier | 
 **scenarioId** | **String**| the Scenario identifier | 
 **scenariorunId** | **String**| the ScenarioRun identifier | 
 **probeId** | **String**| the Probe identifier | 

### Return type

[**ScenarioRunResult**](ScenarioRunResult.md)

### Authorization

[oAuth2AuthCode](../README.md#oAuth2AuthCode)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## sendScenarioRunResult

> ScenarioRunResult sendScenarioRunResult(organizationId, workspaceId, scenarioId, scenariorunId, probeId, requestBody)

Create a new ScenarioRunResult in the Organization

### Example

```javascript
import CosmotechApi from '@cosmotech/api';
let defaultClient = CosmotechApi.ApiClient.instance;
// Configure OAuth2 access token for authorization: oAuth2AuthCode
let oAuth2AuthCode = defaultClient.authentications['oAuth2AuthCode'];
oAuth2AuthCode.accessToken = 'YOUR ACCESS TOKEN';

let apiInstance = new CosmotechApi.ScenariorunresultApi();
let organizationId = "organizationId_example"; // String | the Organization identifier
let workspaceId = "workspaceId_example"; // String | the Workspace identifier
let scenarioId = "scenarioId_example"; // String | the Scenario identifier
let scenariorunId = "scenariorunId_example"; // String | the ScenarioRun identifier
let probeId = "probeId_example"; // String | the Probe identifier
let requestBody = {key: "null"}; // {String: String} | the ScenarioRunResult to register
apiInstance.sendScenarioRunResult(organizationId, workspaceId, scenarioId, scenariorunId, probeId, requestBody).then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, (error) => {
  console.error(error);
});

```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **organizationId** | **String**| the Organization identifier | 
 **workspaceId** | **String**| the Workspace identifier | 
 **scenarioId** | **String**| the Scenario identifier | 
 **scenariorunId** | **String**| the ScenarioRun identifier | 
 **probeId** | **String**| the Probe identifier | 
 **requestBody** | [**{String: String}**](String.md)| the ScenarioRunResult to register | 

### Return type

[**ScenarioRunResult**](ScenarioRunResult.md)

### Authorization

[oAuth2AuthCode](../README.md#oAuth2AuthCode)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json

