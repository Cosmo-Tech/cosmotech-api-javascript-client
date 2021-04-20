# CosmotechApi.ScenariorunApi

All URIs are relative to *https://api.azure.cosmo-platform.com*

Method | HTTP request | Description
------------- | ------------- | -------------
[**deleteScenarioRun**](ScenariorunApi.md#deleteScenarioRun) | **DELETE** /organizations/{organization_id}/scenarioruns/{scenariorun_id} | Delete a scenariorun
[**findScenarioRunById**](ScenariorunApi.md#findScenarioRunById) | **GET** /organizations/{organization_id}/scenarioruns/{scenariorun_id} | Get the details of a scenariorun
[**getScenarioScenarioRun**](ScenariorunApi.md#getScenarioScenarioRun) | **GET** /organizations/{organization_id}/workspaces/{workspace_id}/scenarios/{scenario_id}/scenarioruns/{scenariorun_id} | get the ScenarioRun for the Scenario
[**getScenarioScenarioRunLogs**](ScenariorunApi.md#getScenarioScenarioRunLogs) | **GET** /organizations/{organization_id}/workspaces/{workspace_id}/scenarios/{scenario_id}/scenarioruns/{scenariorun_id}/logs | get the logs for the ScenarioRun
[**getScenarioScenarioRuns**](ScenariorunApi.md#getScenarioScenarioRuns) | **GET** /organizations/{organization_id}/workspaces/{workspace_id}/scenarios/{scenario_id}/scenarioruns | get the list of ScenarioRuns for the Scenario
[**getWorkspaceScenarioRuns**](ScenariorunApi.md#getWorkspaceScenarioRuns) | **GET** /organizations/{organization_id}/workspaces/{workspace_id}/scenarioruns | get the list of ScenarioRuns for the Workspace
[**runScenario**](ScenariorunApi.md#runScenario) | **POST** /organizations/{organization_id}/workspaces/{workspace_id}/scenarios/{scenario_id}/run | run a ScenarioRun for the Scenario
[**searchScenarioRunLogs**](ScenariorunApi.md#searchScenarioRunLogs) | **POST** /organizations/{organization_id}/scenarioruns/{scenariorun_id}/logs/search | Search the logs of a scenariorun
[**searchScenarioRuns**](ScenariorunApi.md#searchScenarioRuns) | **POST** /organizations/{organization_id}/scenarioruns/search | Search ScenarioRuns
[**startScenarioRunContainers**](ScenariorunApi.md#startScenarioRunContainers) | **POST** /organizations/{organization_id}/scenarioruns/startcontainers | Start a new scenariorun with raw containers definition
[**startScenarioRunScenario**](ScenariorunApi.md#startScenarioRunScenario) | **POST** /organizations/{organization_id}/scenarioruns/start | Start a new scenariorun for a Scenario
[**startScenarioRunSolution**](ScenariorunApi.md#startScenarioRunSolution) | **POST** /organizations/{organization_id}/scenarioruns/startsolution | Start a new scenariorun for a Solution Run Template



## deleteScenarioRun

> ScenarioRun deleteScenarioRun(organizationId, scenariorunId)

Delete a scenariorun

### Example

```javascript
import CosmotechApi from '@cosmotech/api';
let defaultClient = CosmotechApi.ApiClient.instance;
// Configure OAuth2 access token for authorization: oAuth2AuthCode
let oAuth2AuthCode = defaultClient.authentications['oAuth2AuthCode'];
oAuth2AuthCode.accessToken = 'YOUR ACCESS TOKEN';

let apiInstance = new CosmotechApi.ScenariorunApi();
let organizationId = "organizationId_example"; // String | the Organization identifier
let scenariorunId = "scenariorunId_example"; // String | the ScenarioRun identifier
apiInstance.deleteScenarioRun(organizationId, scenariorunId, (error, data, response) => {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
});
```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **organizationId** | **String**| the Organization identifier | 
 **scenariorunId** | **String**| the ScenarioRun identifier | 

### Return type

[**ScenarioRun**](ScenarioRun.md)

### Authorization

[oAuth2AuthCode](../README.md#oAuth2AuthCode)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## findScenarioRunById

> ScenarioRun findScenarioRunById(organizationId, scenariorunId)

Get the details of a scenariorun

### Example

```javascript
import CosmotechApi from '@cosmotech/api';
let defaultClient = CosmotechApi.ApiClient.instance;
// Configure OAuth2 access token for authorization: oAuth2AuthCode
let oAuth2AuthCode = defaultClient.authentications['oAuth2AuthCode'];
oAuth2AuthCode.accessToken = 'YOUR ACCESS TOKEN';

let apiInstance = new CosmotechApi.ScenariorunApi();
let organizationId = "organizationId_example"; // String | the Organization identifier
let scenariorunId = "scenariorunId_example"; // String | the ScenarioRun identifier
apiInstance.findScenarioRunById(organizationId, scenariorunId, (error, data, response) => {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
});
```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **organizationId** | **String**| the Organization identifier | 
 **scenariorunId** | **String**| the ScenarioRun identifier | 

### Return type

[**ScenarioRun**](ScenarioRun.md)

### Authorization

[oAuth2AuthCode](../README.md#oAuth2AuthCode)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## getScenarioScenarioRun

> ScenarioRun getScenarioScenarioRun(organizationId, workspaceId, scenarioId, scenariorunId)

get the ScenarioRun for the Scenario

### Example

```javascript
import CosmotechApi from '@cosmotech/api';
let defaultClient = CosmotechApi.ApiClient.instance;
// Configure OAuth2 access token for authorization: oAuth2AuthCode
let oAuth2AuthCode = defaultClient.authentications['oAuth2AuthCode'];
oAuth2AuthCode.accessToken = 'YOUR ACCESS TOKEN';

let apiInstance = new CosmotechApi.ScenariorunApi();
let organizationId = "organizationId_example"; // String | the Organization identifier
let workspaceId = "workspaceId_example"; // String | the Workspace identifier
let scenarioId = "scenarioId_example"; // String | the Scenario identifier
let scenariorunId = "scenariorunId_example"; // String | the ScenarioRun identifier
apiInstance.getScenarioScenarioRun(organizationId, workspaceId, scenarioId, scenariorunId, (error, data, response) => {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
});
```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **organizationId** | **String**| the Organization identifier | 
 **workspaceId** | **String**| the Workspace identifier | 
 **scenarioId** | **String**| the Scenario identifier | 
 **scenariorunId** | **String**| the ScenarioRun identifier | 

### Return type

[**ScenarioRun**](ScenarioRun.md)

### Authorization

[oAuth2AuthCode](../README.md#oAuth2AuthCode)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## getScenarioScenarioRunLogs

> ScenarioRunLogs getScenarioScenarioRunLogs(organizationId, workspaceId, scenarioId, scenariorunId)

get the logs for the ScenarioRun

### Example

```javascript
import CosmotechApi from '@cosmotech/api';
let defaultClient = CosmotechApi.ApiClient.instance;
// Configure OAuth2 access token for authorization: oAuth2AuthCode
let oAuth2AuthCode = defaultClient.authentications['oAuth2AuthCode'];
oAuth2AuthCode.accessToken = 'YOUR ACCESS TOKEN';

let apiInstance = new CosmotechApi.ScenariorunApi();
let organizationId = "organizationId_example"; // String | the Organization identifier
let workspaceId = "workspaceId_example"; // String | the Workspace identifier
let scenarioId = "scenarioId_example"; // String | the Scenario identifier
let scenariorunId = "scenariorunId_example"; // String | the ScenarioRun identifier
apiInstance.getScenarioScenarioRunLogs(organizationId, workspaceId, scenarioId, scenariorunId, (error, data, response) => {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
});
```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **organizationId** | **String**| the Organization identifier | 
 **workspaceId** | **String**| the Workspace identifier | 
 **scenarioId** | **String**| the Scenario identifier | 
 **scenariorunId** | **String**| the ScenarioRun identifier | 

### Return type

[**ScenarioRunLogs**](ScenarioRunLogs.md)

### Authorization

[oAuth2AuthCode](../README.md#oAuth2AuthCode)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## getScenarioScenarioRuns

> [ScenarioRunBase] getScenarioScenarioRuns(organizationId, workspaceId, scenarioId)

get the list of ScenarioRuns for the Scenario

### Example

```javascript
import CosmotechApi from '@cosmotech/api';
let defaultClient = CosmotechApi.ApiClient.instance;
// Configure OAuth2 access token for authorization: oAuth2AuthCode
let oAuth2AuthCode = defaultClient.authentications['oAuth2AuthCode'];
oAuth2AuthCode.accessToken = 'YOUR ACCESS TOKEN';

let apiInstance = new CosmotechApi.ScenariorunApi();
let organizationId = "organizationId_example"; // String | the Organization identifier
let workspaceId = "workspaceId_example"; // String | the Workspace identifier
let scenarioId = "scenarioId_example"; // String | the Scenario identifier
apiInstance.getScenarioScenarioRuns(organizationId, workspaceId, scenarioId, (error, data, response) => {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
});
```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **organizationId** | **String**| the Organization identifier | 
 **workspaceId** | **String**| the Workspace identifier | 
 **scenarioId** | **String**| the Scenario identifier | 

### Return type

[**[ScenarioRunBase]**](ScenarioRunBase.md)

### Authorization

[oAuth2AuthCode](../README.md#oAuth2AuthCode)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## getWorkspaceScenarioRuns

> [ScenarioRunBase] getWorkspaceScenarioRuns(organizationId, workspaceId)

get the list of ScenarioRuns for the Workspace

### Example

```javascript
import CosmotechApi from '@cosmotech/api';
let defaultClient = CosmotechApi.ApiClient.instance;
// Configure OAuth2 access token for authorization: oAuth2AuthCode
let oAuth2AuthCode = defaultClient.authentications['oAuth2AuthCode'];
oAuth2AuthCode.accessToken = 'YOUR ACCESS TOKEN';

let apiInstance = new CosmotechApi.ScenariorunApi();
let organizationId = "organizationId_example"; // String | the Organization identifier
let workspaceId = "workspaceId_example"; // String | the Workspace identifier
apiInstance.getWorkspaceScenarioRuns(organizationId, workspaceId, (error, data, response) => {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
});
```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **organizationId** | **String**| the Organization identifier | 
 **workspaceId** | **String**| the Workspace identifier | 

### Return type

[**[ScenarioRunBase]**](ScenarioRunBase.md)

### Authorization

[oAuth2AuthCode](../README.md#oAuth2AuthCode)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## runScenario

> ScenarioRunBase runScenario(organizationId, workspaceId, scenarioId)

run a ScenarioRun for the Scenario

### Example

```javascript
import CosmotechApi from '@cosmotech/api';
let defaultClient = CosmotechApi.ApiClient.instance;
// Configure OAuth2 access token for authorization: oAuth2AuthCode
let oAuth2AuthCode = defaultClient.authentications['oAuth2AuthCode'];
oAuth2AuthCode.accessToken = 'YOUR ACCESS TOKEN';

let apiInstance = new CosmotechApi.ScenariorunApi();
let organizationId = "organizationId_example"; // String | the Organization identifier
let workspaceId = "workspaceId_example"; // String | the Workspace identifier
let scenarioId = "scenarioId_example"; // String | the Scenario identifier
apiInstance.runScenario(organizationId, workspaceId, scenarioId, (error, data, response) => {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
});
```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **organizationId** | **String**| the Organization identifier | 
 **workspaceId** | **String**| the Workspace identifier | 
 **scenarioId** | **String**| the Scenario identifier | 

### Return type

[**ScenarioRunBase**](ScenarioRunBase.md)

### Authorization

[oAuth2AuthCode](../README.md#oAuth2AuthCode)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## searchScenarioRunLogs

> ScenarioRunLogs searchScenarioRunLogs(organizationId, scenariorunId, scenarioRunLogsOptions)

Search the logs of a scenariorun

### Example

```javascript
import CosmotechApi from '@cosmotech/api';
let defaultClient = CosmotechApi.ApiClient.instance;
// Configure OAuth2 access token for authorization: oAuth2AuthCode
let oAuth2AuthCode = defaultClient.authentications['oAuth2AuthCode'];
oAuth2AuthCode.accessToken = 'YOUR ACCESS TOKEN';

let apiInstance = new CosmotechApi.ScenariorunApi();
let organizationId = "organizationId_example"; // String | the Organization identifier
let scenariorunId = "scenariorunId_example"; // String | the ScenarioRun identifier
let scenarioRunLogsOptions = new CosmotechApi.ScenarioRunLogsOptions(); // ScenarioRunLogsOptions | the options to search logs
apiInstance.searchScenarioRunLogs(organizationId, scenariorunId, scenarioRunLogsOptions, (error, data, response) => {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
});
```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **organizationId** | **String**| the Organization identifier | 
 **scenariorunId** | **String**| the ScenarioRun identifier | 
 **scenarioRunLogsOptions** | [**ScenarioRunLogsOptions**](ScenarioRunLogsOptions.md)| the options to search logs | 

### Return type

[**ScenarioRunLogs**](ScenarioRunLogs.md)

### Authorization

[oAuth2AuthCode](../README.md#oAuth2AuthCode)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json


## searchScenarioRuns

> [ScenarioRunBase] searchScenarioRuns(organizationId, scenarioRunSearch)

Search ScenarioRuns

### Example

```javascript
import CosmotechApi from '@cosmotech/api';
let defaultClient = CosmotechApi.ApiClient.instance;
// Configure OAuth2 access token for authorization: oAuth2AuthCode
let oAuth2AuthCode = defaultClient.authentications['oAuth2AuthCode'];
oAuth2AuthCode.accessToken = 'YOUR ACCESS TOKEN';

let apiInstance = new CosmotechApi.ScenariorunApi();
let organizationId = "organizationId_example"; // String | the Organization identifier
let scenarioRunSearch = new CosmotechApi.ScenarioRunSearch(); // ScenarioRunSearch | the ScenarioRun search parameters
apiInstance.searchScenarioRuns(organizationId, scenarioRunSearch, (error, data, response) => {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
});
```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **organizationId** | **String**| the Organization identifier | 
 **scenarioRunSearch** | [**ScenarioRunSearch**](ScenarioRunSearch.md)| the ScenarioRun search parameters | 

### Return type

[**[ScenarioRunBase]**](ScenarioRunBase.md)

### Authorization

[oAuth2AuthCode](../README.md#oAuth2AuthCode)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json


## startScenarioRunContainers

> ScenarioRun startScenarioRunContainers(organizationId, scenarioRunStartContainers)

Start a new scenariorun with raw containers definition

### Example

```javascript
import CosmotechApi from '@cosmotech/api';
let defaultClient = CosmotechApi.ApiClient.instance;
// Configure OAuth2 access token for authorization: oAuth2AuthCode
let oAuth2AuthCode = defaultClient.authentications['oAuth2AuthCode'];
oAuth2AuthCode.accessToken = 'YOUR ACCESS TOKEN';

let apiInstance = new CosmotechApi.ScenariorunApi();
let organizationId = "organizationId_example"; // String | the Organization identifier
let scenarioRunStartContainers = new CosmotechApi.ScenarioRunStartContainers(); // ScenarioRunStartContainers | the raw containers definition
apiInstance.startScenarioRunContainers(organizationId, scenarioRunStartContainers, (error, data, response) => {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
});
```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **organizationId** | **String**| the Organization identifier | 
 **scenarioRunStartContainers** | [**ScenarioRunStartContainers**](ScenarioRunStartContainers.md)| the raw containers definition | 

### Return type

[**ScenarioRun**](ScenarioRun.md)

### Authorization

[oAuth2AuthCode](../README.md#oAuth2AuthCode)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json


## startScenarioRunScenario

> ScenarioRun startScenarioRunScenario(organizationId, scenarioRunStart)

Start a new scenariorun for a Scenario

### Example

```javascript
import CosmotechApi from '@cosmotech/api';
let defaultClient = CosmotechApi.ApiClient.instance;
// Configure OAuth2 access token for authorization: oAuth2AuthCode
let oAuth2AuthCode = defaultClient.authentications['oAuth2AuthCode'];
oAuth2AuthCode.accessToken = 'YOUR ACCESS TOKEN';

let apiInstance = new CosmotechApi.ScenariorunApi();
let organizationId = "organizationId_example"; // String | the Organization identifier
let scenarioRunStart = new CosmotechApi.ScenarioRunStart(); // ScenarioRunStart | the Scenario information to start
apiInstance.startScenarioRunScenario(organizationId, scenarioRunStart, (error, data, response) => {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
});
```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **organizationId** | **String**| the Organization identifier | 
 **scenarioRunStart** | [**ScenarioRunStart**](ScenarioRunStart.md)| the Scenario information to start | 

### Return type

[**ScenarioRun**](ScenarioRun.md)

### Authorization

[oAuth2AuthCode](../README.md#oAuth2AuthCode)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json


## startScenarioRunSolution

> ScenarioRun startScenarioRunSolution(organizationId, scenarioRunStartSolution)

Start a new scenariorun for a Solution Run Template

### Example

```javascript
import CosmotechApi from '@cosmotech/api';
let defaultClient = CosmotechApi.ApiClient.instance;
// Configure OAuth2 access token for authorization: oAuth2AuthCode
let oAuth2AuthCode = defaultClient.authentications['oAuth2AuthCode'];
oAuth2AuthCode.accessToken = 'YOUR ACCESS TOKEN';

let apiInstance = new CosmotechApi.ScenariorunApi();
let organizationId = "organizationId_example"; // String | the Organization identifier
let scenarioRunStartSolution = new CosmotechApi.ScenarioRunStartSolution(); // ScenarioRunStartSolution | the Solution Run Template information to start
apiInstance.startScenarioRunSolution(organizationId, scenarioRunStartSolution, (error, data, response) => {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
});
```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **organizationId** | **String**| the Organization identifier | 
 **scenarioRunStartSolution** | [**ScenarioRunStartSolution**](ScenarioRunStartSolution.md)| the Solution Run Template information to start | 

### Return type

[**ScenarioRun**](ScenarioRun.md)

### Authorization

[oAuth2AuthCode](../README.md#oAuth2AuthCode)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json

