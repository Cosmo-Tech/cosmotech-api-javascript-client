# CosmotechApi.ScenariorunApi

All URIs are relative to *https://dev.api.cosmotech.com*

Method | HTTP request | Description
------------- | ------------- | -------------
[**deleteHistoricalDataOrganization**](ScenariorunApi.md#deleteHistoricalDataOrganization) | **DELETE** /organizations/{organization_id}/scenarioruns/historicaldata | Delete all historical ScenarioRuns in the Organization
[**deleteHistoricalDataScenario**](ScenariorunApi.md#deleteHistoricalDataScenario) | **DELETE** /organizations/{organization_id}/workspaces/{workspace_id}/scenarios/{scenario_id}/scenarioruns/historicaldata | Delete all historical ScenarioRuns in the Scenario
[**deleteHistoricalDataWorkspace**](ScenariorunApi.md#deleteHistoricalDataWorkspace) | **DELETE** /organizations/{organization_id}/workspaces/{workspace_id}/scenarioruns/historicaldata | Delete all historical ScenarioRuns in the Workspace
[**deleteScenarioRun**](ScenariorunApi.md#deleteScenarioRun) | **DELETE** /organizations/{organization_id}/scenarioruns/{scenariorun_id} | Delete a scenariorun
[**findScenarioRunById**](ScenariorunApi.md#findScenarioRunById) | **GET** /organizations/{organization_id}/scenarioruns/{scenariorun_id} | Get the details of a scenariorun
[**getScenarioRunCumulatedLogs**](ScenariorunApi.md#getScenarioRunCumulatedLogs) | **GET** /organizations/{organization_id}/scenarioruns/{scenariorun_id}/cumulatedlogs | Get the cumulated logs of a scenariorun
[**getScenarioRunLogs**](ScenariorunApi.md#getScenarioRunLogs) | **GET** /organizations/{organization_id}/scenarioruns/{scenariorun_id}/logs | get the logs for the ScenarioRun
[**getScenarioRunStatus**](ScenariorunApi.md#getScenarioRunStatus) | **GET** /organizations/{organization_id}/scenarioruns/{scenariorun_id}/status | get the status for the ScenarioRun
[**getScenarioRuns**](ScenariorunApi.md#getScenarioRuns) | **GET** /organizations/{organization_id}/workspaces/{workspace_id}/scenarios/{scenario_id}/scenarioruns | get the list of ScenarioRuns for the Scenario
[**getWorkspaceScenarioRuns**](ScenariorunApi.md#getWorkspaceScenarioRuns) | **GET** /organizations/{organization_id}/workspaces/{workspace_id}/scenarioruns | get the list of ScenarioRuns for the Workspace
[**importScenarioRun**](ScenariorunApi.md#importScenarioRun) | **POST** /organizations/{organization_id}/workspaces/{workspace_id}/scenarios/{scenario_id}/run/import | import a ScenarioRun for the Scenario
[**runScenario**](ScenariorunApi.md#runScenario) | **POST** /organizations/{organization_id}/workspaces/{workspace_id}/scenarios/{scenario_id}/run | run a ScenarioRun for the Scenario
[**searchScenarioRuns**](ScenariorunApi.md#searchScenarioRuns) | **POST** /organizations/{organization_id}/scenarioruns/search | Search ScenarioRuns
[**startScenarioRunContainers**](ScenariorunApi.md#startScenarioRunContainers) | **POST** /organizations/{organization_id}/scenarioruns/startcontainers | Start a new scenariorun with raw containers definition
[**stopScenarioRun**](ScenariorunApi.md#stopScenarioRun) | **POST** /organizations/{organization_id}/scenarioruns/{scenariorun_id}/stop | stop a ScenarioRun for the Scenario



## deleteHistoricalDataOrganization

> deleteHistoricalDataOrganization(organizationId, opts)

Delete all historical ScenarioRuns in the Organization

### Example

```javascript
import CosmotechApi from '@cosmotech/api';
let defaultClient = CosmotechApi.ApiClient.instance;
// Configure OAuth2 access token for authorization: oAuth2AuthCode
let oAuth2AuthCode = defaultClient.authentications['oAuth2AuthCode'];
oAuth2AuthCode.accessToken = 'YOUR ACCESS TOKEN';

let apiInstance = new CosmotechApi.ScenariorunApi();
let organizationId = "organizationId_example"; // String | the Organization identifier
let opts = {
  'deleteUnknown': false // Boolean | condition to delete runs with an Unknown status
};
apiInstance.deleteHistoricalDataOrganization(organizationId, opts).then(() => {
  console.log('API called successfully.');
}, (error) => {
  console.error(error);
});

```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **organizationId** | **String**| the Organization identifier | 
 **deleteUnknown** | **Boolean**| condition to delete runs with an Unknown status | [optional] [default to false]

### Return type

null (empty response body)

### Authorization

[oAuth2AuthCode](../README.md#oAuth2AuthCode)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: Not defined


## deleteHistoricalDataScenario

> deleteHistoricalDataScenario(organizationId, workspaceId, scenarioId, opts)

Delete all historical ScenarioRuns in the Scenario

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
let opts = {
  'deleteUnknown': false // Boolean | condition to delete runs with an Unknown status
};
apiInstance.deleteHistoricalDataScenario(organizationId, workspaceId, scenarioId, opts).then(() => {
  console.log('API called successfully.');
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
 **deleteUnknown** | **Boolean**| condition to delete runs with an Unknown status | [optional] [default to false]

### Return type

null (empty response body)

### Authorization

[oAuth2AuthCode](../README.md#oAuth2AuthCode)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: Not defined


## deleteHistoricalDataWorkspace

> deleteHistoricalDataWorkspace(organizationId, workspaceId, opts)

Delete all historical ScenarioRuns in the Workspace

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
let opts = {
  'deleteUnknown': false // Boolean | condition to delete runs with an Unknown status
};
apiInstance.deleteHistoricalDataWorkspace(organizationId, workspaceId, opts).then(() => {
  console.log('API called successfully.');
}, (error) => {
  console.error(error);
});

```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **organizationId** | **String**| the Organization identifier | 
 **workspaceId** | **String**| the Workspace identifier | 
 **deleteUnknown** | **Boolean**| condition to delete runs with an Unknown status | [optional] [default to false]

### Return type

null (empty response body)

### Authorization

[oAuth2AuthCode](../README.md#oAuth2AuthCode)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: Not defined


## deleteScenarioRun

> deleteScenarioRun(organizationId, scenariorunId)

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
apiInstance.deleteScenarioRun(organizationId, scenariorunId).then(() => {
  console.log('API called successfully.');
}, (error) => {
  console.error(error);
});

```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **organizationId** | **String**| the Organization identifier | 
 **scenariorunId** | **String**| the ScenarioRun identifier | 

### Return type

null (empty response body)

### Authorization

[oAuth2AuthCode](../README.md#oAuth2AuthCode)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: Not defined


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
apiInstance.findScenarioRunById(organizationId, scenariorunId).then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, (error) => {
  console.error(error);
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


## getScenarioRunCumulatedLogs

> String getScenarioRunCumulatedLogs(organizationId, scenariorunId)

Get the cumulated logs of a scenariorun

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
apiInstance.getScenarioRunCumulatedLogs(organizationId, scenariorunId).then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, (error) => {
  console.error(error);
});

```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **organizationId** | **String**| the Organization identifier | 
 **scenariorunId** | **String**| the ScenarioRun identifier | 

### Return type

**String**

### Authorization

[oAuth2AuthCode](../README.md#oAuth2AuthCode)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: text/plain


## getScenarioRunLogs

> ScenarioRunLogs getScenarioRunLogs(organizationId, scenariorunId)

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
let scenariorunId = "scenariorunId_example"; // String | the ScenarioRun identifier
apiInstance.getScenarioRunLogs(organizationId, scenariorunId).then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, (error) => {
  console.error(error);
});

```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **organizationId** | **String**| the Organization identifier | 
 **scenariorunId** | **String**| the ScenarioRun identifier | 

### Return type

[**ScenarioRunLogs**](ScenarioRunLogs.md)

### Authorization

[oAuth2AuthCode](../README.md#oAuth2AuthCode)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## getScenarioRunStatus

> ScenarioRunStatus getScenarioRunStatus(organizationId, scenariorunId)

get the status for the ScenarioRun

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
apiInstance.getScenarioRunStatus(organizationId, scenariorunId).then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, (error) => {
  console.error(error);
});

```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **organizationId** | **String**| the Organization identifier | 
 **scenariorunId** | **String**| the ScenarioRun identifier | 

### Return type

[**ScenarioRunStatus**](ScenarioRunStatus.md)

### Authorization

[oAuth2AuthCode](../README.md#oAuth2AuthCode)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## getScenarioRuns

> [ScenarioRun] getScenarioRuns(organizationId, workspaceId, scenarioId, opts)

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
let opts = {
  'page': 56, // Number | page number to query
  'size': 56 // Number | amount of result by page
};
apiInstance.getScenarioRuns(organizationId, workspaceId, scenarioId, opts).then((data) => {
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
 **page** | **Number**| page number to query | [optional] 
 **size** | **Number**| amount of result by page | [optional] 

### Return type

[**[ScenarioRun]**](ScenarioRun.md)

### Authorization

[oAuth2AuthCode](../README.md#oAuth2AuthCode)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## getWorkspaceScenarioRuns

> [ScenarioRun] getWorkspaceScenarioRuns(organizationId, workspaceId, opts)

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
let opts = {
  'page': 56, // Number | page number to query
  'size': 56 // Number | amount of result by page
};
apiInstance.getWorkspaceScenarioRuns(organizationId, workspaceId, opts).then((data) => {
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
 **page** | **Number**| page number to query | [optional] 
 **size** | **Number**| amount of result by page | [optional] 

### Return type

[**[ScenarioRun]**](ScenarioRun.md)

### Authorization

[oAuth2AuthCode](../README.md#oAuth2AuthCode)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## importScenarioRun

> ScenarioRun importScenarioRun(organizationId, workspaceId, scenarioId, scenarioRun)

import a ScenarioRun for the Scenario

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
let scenarioRun = new CosmotechApi.ScenarioRun(); // ScenarioRun | the ScenarioRun to import
apiInstance.importScenarioRun(organizationId, workspaceId, scenarioId, scenarioRun).then((data) => {
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
 **scenarioRun** | [**ScenarioRun**](ScenarioRun.md)| the ScenarioRun to import | 

### Return type

[**ScenarioRun**](ScenarioRun.md)

### Authorization

[oAuth2AuthCode](../README.md#oAuth2AuthCode)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json


## runScenario

> ScenarioRun runScenario(organizationId, workspaceId, scenarioId)

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
apiInstance.runScenario(organizationId, workspaceId, scenarioId).then((data) => {
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

### Return type

[**ScenarioRun**](ScenarioRun.md)

### Authorization

[oAuth2AuthCode](../README.md#oAuth2AuthCode)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## searchScenarioRuns

> [ScenarioRun] searchScenarioRuns(organizationId, scenarioRunSearch, opts)

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
let opts = {
  'page': 56, // Number | page number to query
  'size': 56 // Number | amount of result by page
};
apiInstance.searchScenarioRuns(organizationId, scenarioRunSearch, opts).then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, (error) => {
  console.error(error);
});

```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **organizationId** | **String**| the Organization identifier | 
 **scenarioRunSearch** | [**ScenarioRunSearch**](ScenarioRunSearch.md)| the ScenarioRun search parameters | 
 **page** | **Number**| page number to query | [optional] 
 **size** | **Number**| amount of result by page | [optional] 

### Return type

[**[ScenarioRun]**](ScenarioRun.md)

### Authorization

[oAuth2AuthCode](../README.md#oAuth2AuthCode)

### HTTP request headers

- **Content-Type**: application/json, application/yaml
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
apiInstance.startScenarioRunContainers(organizationId, scenarioRunStartContainers).then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, (error) => {
  console.error(error);
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

- **Content-Type**: application/json, application/yaml
- **Accept**: application/json


## stopScenarioRun

> ScenarioRunStatus stopScenarioRun(organizationId, scenariorunId)

stop a ScenarioRun for the Scenario

### Example

```javascript
import CosmotechApi from '@cosmotech/api';
let defaultClient = CosmotechApi.ApiClient.instance;
// Configure OAuth2 access token for authorization: oAuth2AuthCode
let oAuth2AuthCode = defaultClient.authentications['oAuth2AuthCode'];
oAuth2AuthCode.accessToken = 'YOUR ACCESS TOKEN';

let apiInstance = new CosmotechApi.ScenariorunApi();
let organizationId = "organizationId_example"; // String | the Organization identifier
let scenariorunId = "scenariorunId_example"; // String | the scenariorun identifier
apiInstance.stopScenarioRun(organizationId, scenariorunId).then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, (error) => {
  console.error(error);
});

```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **organizationId** | **String**| the Organization identifier | 
 **scenariorunId** | **String**| the scenariorun identifier | 

### Return type

[**ScenarioRunStatus**](ScenarioRunStatus.md)

### Authorization

[oAuth2AuthCode](../README.md#oAuth2AuthCode)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json

