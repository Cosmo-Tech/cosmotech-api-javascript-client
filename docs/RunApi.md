# CosmotechApi.RunApi

All URIs are relative to *https://dev.api.cosmotech.com*

Method | HTTP request | Description
------------- | ------------- | -------------
[**deleteRun**](RunApi.md#deleteRun) | **DELETE** /organizations/{organization_id}/workspaces/{workspace_id}/runners/{runner_id}/runs/{run_id} | Delete a run
[**getRun**](RunApi.md#getRun) | **GET** /organizations/{organization_id}/workspaces/{workspace_id}/runners/{runner_id}/runs/{run_id} | Get the details of a run
[**getRunLogs**](RunApi.md#getRunLogs) | **GET** /organizations/{organization_id}/workspaces/{workspace_id}/runners/{runner_id}/runs/{run_id}/logs | get the logs for the Run
[**getRunStatus**](RunApi.md#getRunStatus) | **GET** /organizations/{organization_id}/workspaces/{workspace_id}/runners/{runner_id}/runs/{run_id}/status | get the status for the Run
[**listRuns**](RunApi.md#listRuns) | **GET** /organizations/{organization_id}/workspaces/{workspace_id}/runners/{runner_id}/runs | get the list of Runs for the Runner
[**queryRunData**](RunApi.md#queryRunData) | **POST** /organizations/{organization_id}/workspaces/{workspace_id}/runners/{runner_id}/runs/{run_id}/data/query | query the run data
[**sendRunData**](RunApi.md#sendRunData) | **POST** /organizations/{organization_id}/workspaces/{workspace_id}/runners/{runner_id}/runs/{run_id}/data/send | Send data associated to a run



## deleteRun

> deleteRun(organizationId, workspaceId, runnerId, runId)

Delete a run

### Example

```javascript
import CosmotechApi from '@cosmotech/api';
let defaultClient = CosmotechApi.ApiClient.instance;
// Configure OAuth2 access token for authorization: oAuth2AuthCode
let oAuth2AuthCode = defaultClient.authentications['oAuth2AuthCode'];
oAuth2AuthCode.accessToken = 'YOUR ACCESS TOKEN';

let apiInstance = new CosmotechApi.RunApi();
let organizationId = "organizationId_example"; // String | the Organization identifier
let workspaceId = "workspaceId_example"; // String | the Workspace identifier
let runnerId = "runnerId_example"; // String | the Runner identifier
let runId = "runId_example"; // String | the Run identifier
apiInstance.deleteRun(organizationId, workspaceId, runnerId, runId).then(() => {
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
 **runnerId** | **String**| the Runner identifier | 
 **runId** | **String**| the Run identifier | 

### Return type

null (empty response body)

### Authorization

[oAuth2AuthCode](../README.md#oAuth2AuthCode)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: Not defined


## getRun

> Run getRun(organizationId, workspaceId, runnerId, runId)

Get the details of a run

### Example

```javascript
import CosmotechApi from '@cosmotech/api';
let defaultClient = CosmotechApi.ApiClient.instance;
// Configure OAuth2 access token for authorization: oAuth2AuthCode
let oAuth2AuthCode = defaultClient.authentications['oAuth2AuthCode'];
oAuth2AuthCode.accessToken = 'YOUR ACCESS TOKEN';

let apiInstance = new CosmotechApi.RunApi();
let organizationId = "organizationId_example"; // String | the Organization identifier
let workspaceId = "workspaceId_example"; // String | the Workspace identifier
let runnerId = "runnerId_example"; // String | the Runner identifier
let runId = "runId_example"; // String | the Run identifier
apiInstance.getRun(organizationId, workspaceId, runnerId, runId).then((data) => {
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
 **runnerId** | **String**| the Runner identifier | 
 **runId** | **String**| the Run identifier | 

### Return type

[**Run**](Run.md)

### Authorization

[oAuth2AuthCode](../README.md#oAuth2AuthCode)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## getRunLogs

> RunLogs getRunLogs(organizationId, workspaceId, runnerId, runId)

get the logs for the Run

### Example

```javascript
import CosmotechApi from '@cosmotech/api';
let defaultClient = CosmotechApi.ApiClient.instance;
// Configure OAuth2 access token for authorization: oAuth2AuthCode
let oAuth2AuthCode = defaultClient.authentications['oAuth2AuthCode'];
oAuth2AuthCode.accessToken = 'YOUR ACCESS TOKEN';

let apiInstance = new CosmotechApi.RunApi();
let organizationId = "organizationId_example"; // String | the Organization identifier
let workspaceId = "workspaceId_example"; // String | the Workspace identifier
let runnerId = "runnerId_example"; // String | the Runner identifier
let runId = "runId_example"; // String | the Run identifier
apiInstance.getRunLogs(organizationId, workspaceId, runnerId, runId).then((data) => {
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
 **runnerId** | **String**| the Runner identifier | 
 **runId** | **String**| the Run identifier | 

### Return type

[**RunLogs**](RunLogs.md)

### Authorization

[oAuth2AuthCode](../README.md#oAuth2AuthCode)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## getRunStatus

> RunStatus getRunStatus(organizationId, workspaceId, runnerId, runId)

get the status for the Run

### Example

```javascript
import CosmotechApi from '@cosmotech/api';
let defaultClient = CosmotechApi.ApiClient.instance;
// Configure OAuth2 access token for authorization: oAuth2AuthCode
let oAuth2AuthCode = defaultClient.authentications['oAuth2AuthCode'];
oAuth2AuthCode.accessToken = 'YOUR ACCESS TOKEN';

let apiInstance = new CosmotechApi.RunApi();
let organizationId = "organizationId_example"; // String | the Organization identifier
let workspaceId = "workspaceId_example"; // String | the Workspace identifier
let runnerId = "runnerId_example"; // String | the Runner identifier
let runId = "runId_example"; // String | the Run identifier
apiInstance.getRunStatus(organizationId, workspaceId, runnerId, runId).then((data) => {
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
 **runnerId** | **String**| the Runner identifier | 
 **runId** | **String**| the Run identifier | 

### Return type

[**RunStatus**](RunStatus.md)

### Authorization

[oAuth2AuthCode](../README.md#oAuth2AuthCode)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## listRuns

> [Run] listRuns(organizationId, workspaceId, runnerId, opts)

get the list of Runs for the Runner

### Example

```javascript
import CosmotechApi from '@cosmotech/api';
let defaultClient = CosmotechApi.ApiClient.instance;
// Configure OAuth2 access token for authorization: oAuth2AuthCode
let oAuth2AuthCode = defaultClient.authentications['oAuth2AuthCode'];
oAuth2AuthCode.accessToken = 'YOUR ACCESS TOKEN';

let apiInstance = new CosmotechApi.RunApi();
let organizationId = "organizationId_example"; // String | the Organization identifier
let workspaceId = "workspaceId_example"; // String | the Workspace identifier
let runnerId = "runnerId_example"; // String | the Runner identifier
let opts = {
  'page': 56, // Number | page number to query
  'size': 56 // Number | amount of result by page
};
apiInstance.listRuns(organizationId, workspaceId, runnerId, opts).then((data) => {
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
 **runnerId** | **String**| the Runner identifier | 
 **page** | **Number**| page number to query | [optional] 
 **size** | **Number**| amount of result by page | [optional] 

### Return type

[**[Run]**](Run.md)

### Authorization

[oAuth2AuthCode](../README.md#oAuth2AuthCode)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## queryRunData

> QueryResult queryRunData(organizationId, workspaceId, runnerId, runId, runDataQuery)

query the run data

### Example

```javascript
import CosmotechApi from '@cosmotech/api';
let defaultClient = CosmotechApi.ApiClient.instance;
// Configure OAuth2 access token for authorization: oAuth2AuthCode
let oAuth2AuthCode = defaultClient.authentications['oAuth2AuthCode'];
oAuth2AuthCode.accessToken = 'YOUR ACCESS TOKEN';

let apiInstance = new CosmotechApi.RunApi();
let organizationId = "organizationId_example"; // String | the Organization identifier
let workspaceId = "workspaceId_example"; // String | the Workspace identifier
let runnerId = "runnerId_example"; // String | the Runner identifier
let runId = "runId_example"; // String | the Run identifier
let runDataQuery = new CosmotechApi.RunDataQuery(); // RunDataQuery | the query to run
apiInstance.queryRunData(organizationId, workspaceId, runnerId, runId, runDataQuery).then((data) => {
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
 **runnerId** | **String**| the Runner identifier | 
 **runId** | **String**| the Run identifier | 
 **runDataQuery** | [**RunDataQuery**](RunDataQuery.md)| the query to run | 

### Return type

[**QueryResult**](QueryResult.md)

### Authorization

[oAuth2AuthCode](../README.md#oAuth2AuthCode)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json


## sendRunData

> RunData sendRunData(organizationId, workspaceId, runnerId, runId, sendRunDataRequest)

Send data associated to a run

### Example

```javascript
import CosmotechApi from '@cosmotech/api';
let defaultClient = CosmotechApi.ApiClient.instance;
// Configure OAuth2 access token for authorization: oAuth2AuthCode
let oAuth2AuthCode = defaultClient.authentications['oAuth2AuthCode'];
oAuth2AuthCode.accessToken = 'YOUR ACCESS TOKEN';

let apiInstance = new CosmotechApi.RunApi();
let organizationId = "organizationId_example"; // String | the Organization identifier
let workspaceId = "workspaceId_example"; // String | the Workspace identifier
let runnerId = "runnerId_example"; // String | the Runner identifier
let runId = "runId_example"; // String | the Run identifier
let sendRunDataRequest = new CosmotechApi.SendRunDataRequest(); // SendRunDataRequest | Custom data to register
apiInstance.sendRunData(organizationId, workspaceId, runnerId, runId, sendRunDataRequest).then((data) => {
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
 **runnerId** | **String**| the Runner identifier | 
 **runId** | **String**| the Run identifier | 
 **sendRunDataRequest** | [**SendRunDataRequest**](SendRunDataRequest.md)| Custom data to register | 

### Return type

[**RunData**](RunData.md)

### Authorization

[oAuth2AuthCode](../README.md#oAuth2AuthCode)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json

