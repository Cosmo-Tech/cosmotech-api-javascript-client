# CosmotechApi.ScenarioApi

All URIs are relative to *https://dev.api.cosmotech.com*

Method | HTTP request | Description
------------- | ------------- | -------------
[**addOrReplaceScenarioParameterValues**](ScenarioApi.md#addOrReplaceScenarioParameterValues) | **POST** /organizations/{organization_id}/workspaces/{workspace_id}/scenarios/{scenario_id}/parameterValues | Add (or replace) Parameter Values for the Scenario specified
[**addOrReplaceUsersInScenario**](ScenarioApi.md#addOrReplaceUsersInScenario) | **POST** /organizations/{organization_id}/workspaces/{workspace_id}/scenarios/{scenario_id}/users | Add (or replace) users in the Scenario specified
[**compareScenarios**](ScenarioApi.md#compareScenarios) | **GET** /organizations/{organization_id}/workspaces/{workspace_id}/scenarios/{scenario_id}/compare/{compared_scenario_id} | Compare the Scenario with another one and returns the difference for parameters values
[**createScenario**](ScenarioApi.md#createScenario) | **POST** /organizations/{organization_id}/workspaces/{workspace_id}/scenarios | Create a new Scenario
[**deleteAllScenarios**](ScenarioApi.md#deleteAllScenarios) | **DELETE** /organizations/{organization_id}/workspaces/{workspace_id}/scenarios | Delete all Scenarios of the Workspace
[**deleteScenario**](ScenarioApi.md#deleteScenario) | **DELETE** /organizations/{organization_id}/workspaces/{workspace_id}/scenarios/{scenario_id} | Delete a scenario
[**downloadScenarioData**](ScenarioApi.md#downloadScenarioData) | **POST** /organizations/{organization_id}/workspaces/{workspace_id}/scenarios/{scenario_id}/downloads | Download Scenario data
[**findAllScenarios**](ScenarioApi.md#findAllScenarios) | **GET** /organizations/{organization_id}/workspaces/{workspace_id}/scenarios | List all Scenarios
[**findAllScenariosByValidationStatus**](ScenarioApi.md#findAllScenariosByValidationStatus) | **GET** /organizations/{organization_id}/workspaces/{workspace_id}/{validationStatus} | List all Scenarios by validation status
[**findScenarioById**](ScenarioApi.md#findScenarioById) | **GET** /organizations/{organization_id}/workspaces/{workspace_id}/scenarios/{scenario_id} | Get the details of an scenario
[**getScenarioDataDownloadJobInfo**](ScenarioApi.md#getScenarioDataDownloadJobInfo) | **GET** /organizations/{organization_id}/workspaces/{workspace_id}/scenarios/{scenario_id}/downloads/{download_id} | Get Scenario data download URL
[**getScenarioValidationStatusById**](ScenarioApi.md#getScenarioValidationStatusById) | **GET** /organizations/{organization_id}/workspaces/{workspace_id}/scenarios/{scenario_id}/ValidationStatus | Get the validation status of an scenario
[**getScenariosTree**](ScenarioApi.md#getScenariosTree) | **GET** /organizations/{organization_id}/workspaces/{workspace_id}/scenarios/tree | Get the Scenarios Tree
[**removeAllScenarioParameterValues**](ScenarioApi.md#removeAllScenarioParameterValues) | **DELETE** /organizations/{organization_id}/workspaces/{workspace_id}/scenarios/{scenario_id}/parameterValues | Remove all Parameter Values from the Scenario specified
[**removeAllUsersOfScenario**](ScenarioApi.md#removeAllUsersOfScenario) | **DELETE** /organizations/{organization_id}/workspaces/{workspace_id}/scenarios/{scenario_id}/users | Remove all users from the Scenario specified
[**removeUserFromScenario**](ScenarioApi.md#removeUserFromScenario) | **DELETE** /organizations/{organization_id}/workspaces/{workspace_id}/scenarios/{scenario_id}/users/{user_id} | Remove the specified user from the given Scenario
[**updateScenario**](ScenarioApi.md#updateScenario) | **PATCH** /organizations/{organization_id}/workspaces/{workspace_id}/scenarios/{scenario_id} | Update a scenario



## addOrReplaceScenarioParameterValues

> [ScenarioRunTemplateParameterValue] addOrReplaceScenarioParameterValues(organizationId, workspaceId, scenarioId, scenarioRunTemplateParameterValue)

Add (or replace) Parameter Values for the Scenario specified

### Example

```javascript
import CosmotechApi from '@cosmotech/api';
let defaultClient = CosmotechApi.ApiClient.instance;
// Configure OAuth2 access token for authorization: oAuth2AuthCode
let oAuth2AuthCode = defaultClient.authentications['oAuth2AuthCode'];
oAuth2AuthCode.accessToken = 'YOUR ACCESS TOKEN';

let apiInstance = new CosmotechApi.ScenarioApi();
let organizationId = "organizationId_example"; // String | the Organization identifier
let workspaceId = "workspaceId_example"; // String | the Workspace identifier
let scenarioId = "scenarioId_example"; // String | the Scenario identifier
let scenarioRunTemplateParameterValue = [new CosmotechApi.ScenarioRunTemplateParameterValue()]; // [ScenarioRunTemplateParameterValue] | the Parameter Value to add. Any Parameter Value with the same ID is overwritten
apiInstance.addOrReplaceScenarioParameterValues(organizationId, workspaceId, scenarioId, scenarioRunTemplateParameterValue).then((data) => {
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
 **scenarioRunTemplateParameterValue** | [**[ScenarioRunTemplateParameterValue]**](ScenarioRunTemplateParameterValue.md)| the Parameter Value to add. Any Parameter Value with the same ID is overwritten | 

### Return type

[**[ScenarioRunTemplateParameterValue]**](ScenarioRunTemplateParameterValue.md)

### Authorization

[oAuth2AuthCode](../README.md#oAuth2AuthCode)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json


## addOrReplaceUsersInScenario

> [ScenarioUser] addOrReplaceUsersInScenario(organizationId, workspaceId, scenarioId, scenarioUser)

Add (or replace) users in the Scenario specified

### Example

```javascript
import CosmotechApi from '@cosmotech/api';
let defaultClient = CosmotechApi.ApiClient.instance;
// Configure OAuth2 access token for authorization: oAuth2AuthCode
let oAuth2AuthCode = defaultClient.authentications['oAuth2AuthCode'];
oAuth2AuthCode.accessToken = 'YOUR ACCESS TOKEN';

let apiInstance = new CosmotechApi.ScenarioApi();
let organizationId = "organizationId_example"; // String | the Organization identifier
let workspaceId = "workspaceId_example"; // String | the Workspace identifier
let scenarioId = "scenarioId_example"; // String | the Scenario identifier
let scenarioUser = [new CosmotechApi.ScenarioUser()]; // [ScenarioUser] | the Users to add. Any User with the same ID is overwritten
apiInstance.addOrReplaceUsersInScenario(organizationId, workspaceId, scenarioId, scenarioUser).then((data) => {
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
 **scenarioUser** | [**[ScenarioUser]**](ScenarioUser.md)| the Users to add. Any User with the same ID is overwritten | 

### Return type

[**[ScenarioUser]**](ScenarioUser.md)

### Authorization

[oAuth2AuthCode](../README.md#oAuth2AuthCode)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json


## compareScenarios

> ScenarioComparisonResult compareScenarios(organizationId, workspaceId, scenarioId, comparedScenarioId)

Compare the Scenario with another one and returns the difference for parameters values

### Example

```javascript
import CosmotechApi from '@cosmotech/api';
let defaultClient = CosmotechApi.ApiClient.instance;
// Configure OAuth2 access token for authorization: oAuth2AuthCode
let oAuth2AuthCode = defaultClient.authentications['oAuth2AuthCode'];
oAuth2AuthCode.accessToken = 'YOUR ACCESS TOKEN';

let apiInstance = new CosmotechApi.ScenarioApi();
let organizationId = "organizationId_example"; // String | the Organization identifier
let workspaceId = "workspaceId_example"; // String | the Workspace identifier
let scenarioId = "scenarioId_example"; // String | the Scenario identifier
let comparedScenarioId = "comparedScenarioId_example"; // String | the Scenario identifier to compare to
apiInstance.compareScenarios(organizationId, workspaceId, scenarioId, comparedScenarioId).then((data) => {
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
 **comparedScenarioId** | **String**| the Scenario identifier to compare to | 

### Return type

[**ScenarioComparisonResult**](ScenarioComparisonResult.md)

### Authorization

[oAuth2AuthCode](../README.md#oAuth2AuthCode)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## createScenario

> Scenario createScenario(organizationId, workspaceId, scenario)

Create a new Scenario

### Example

```javascript
import CosmotechApi from '@cosmotech/api';
let defaultClient = CosmotechApi.ApiClient.instance;
// Configure OAuth2 access token for authorization: oAuth2AuthCode
let oAuth2AuthCode = defaultClient.authentications['oAuth2AuthCode'];
oAuth2AuthCode.accessToken = 'YOUR ACCESS TOKEN';

let apiInstance = new CosmotechApi.ScenarioApi();
let organizationId = "organizationId_example"; // String | the Organization identifier
let workspaceId = "workspaceId_example"; // String | the Workspace identifier
let scenario = new CosmotechApi.Scenario(); // Scenario | the Scenario to create
apiInstance.createScenario(organizationId, workspaceId, scenario).then((data) => {
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
 **scenario** | [**Scenario**](Scenario.md)| the Scenario to create | 

### Return type

[**Scenario**](Scenario.md)

### Authorization

[oAuth2AuthCode](../README.md#oAuth2AuthCode)

### HTTP request headers

- **Content-Type**: application/json, application/yaml
- **Accept**: application/json


## deleteAllScenarios

> deleteAllScenarios(organizationId, workspaceId)

Delete all Scenarios of the Workspace

### Example

```javascript
import CosmotechApi from '@cosmotech/api';
let defaultClient = CosmotechApi.ApiClient.instance;
// Configure OAuth2 access token for authorization: oAuth2AuthCode
let oAuth2AuthCode = defaultClient.authentications['oAuth2AuthCode'];
oAuth2AuthCode.accessToken = 'YOUR ACCESS TOKEN';

let apiInstance = new CosmotechApi.ScenarioApi();
let organizationId = "organizationId_example"; // String | the Organization identifier
let workspaceId = "workspaceId_example"; // String | the Workspace identifier
apiInstance.deleteAllScenarios(organizationId, workspaceId).then(() => {
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

### Return type

null (empty response body)

### Authorization

[oAuth2AuthCode](../README.md#oAuth2AuthCode)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: Not defined


## deleteScenario

> deleteScenario(organizationId, workspaceId, scenarioId, opts)

Delete a scenario

### Example

```javascript
import CosmotechApi from '@cosmotech/api';
let defaultClient = CosmotechApi.ApiClient.instance;
// Configure OAuth2 access token for authorization: oAuth2AuthCode
let oAuth2AuthCode = defaultClient.authentications['oAuth2AuthCode'];
oAuth2AuthCode.accessToken = 'YOUR ACCESS TOKEN';

let apiInstance = new CosmotechApi.ScenarioApi();
let organizationId = "organizationId_example"; // String | the Organization identifier
let workspaceId = "workspaceId_example"; // String | the Workspace identifier
let scenarioId = "scenarioId_example"; // String | the Scenario identifier
let opts = {
  'waitRelationshipPropagation': false // Boolean | whether to wait until child scenarios are effectively updated
};
apiInstance.deleteScenario(organizationId, workspaceId, scenarioId, opts).then(() => {
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
 **waitRelationshipPropagation** | **Boolean**| whether to wait until child scenarios are effectively updated | [optional] [default to false]

### Return type

null (empty response body)

### Authorization

[oAuth2AuthCode](../README.md#oAuth2AuthCode)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: Not defined


## downloadScenarioData

> ScenarioDataDownloadJob downloadScenarioData(organizationId, workspaceId, scenarioId)

Download Scenario data

### Example

```javascript
import CosmotechApi from '@cosmotech/api';
let defaultClient = CosmotechApi.ApiClient.instance;
// Configure OAuth2 access token for authorization: oAuth2AuthCode
let oAuth2AuthCode = defaultClient.authentications['oAuth2AuthCode'];
oAuth2AuthCode.accessToken = 'YOUR ACCESS TOKEN';

let apiInstance = new CosmotechApi.ScenarioApi();
let organizationId = "organizationId_example"; // String | the Organization identifier
let workspaceId = "workspaceId_example"; // String | the Workspace identifier
let scenarioId = "scenarioId_example"; // String | the Scenario identifier
apiInstance.downloadScenarioData(organizationId, workspaceId, scenarioId).then((data) => {
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

[**ScenarioDataDownloadJob**](ScenarioDataDownloadJob.md)

### Authorization

[oAuth2AuthCode](../README.md#oAuth2AuthCode)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## findAllScenarios

> [Scenario] findAllScenarios(organizationId, workspaceId)

List all Scenarios

### Example

```javascript
import CosmotechApi from '@cosmotech/api';
let defaultClient = CosmotechApi.ApiClient.instance;
// Configure OAuth2 access token for authorization: oAuth2AuthCode
let oAuth2AuthCode = defaultClient.authentications['oAuth2AuthCode'];
oAuth2AuthCode.accessToken = 'YOUR ACCESS TOKEN';

let apiInstance = new CosmotechApi.ScenarioApi();
let organizationId = "organizationId_example"; // String | the Organization identifier
let workspaceId = "workspaceId_example"; // String | the Workspace identifier
apiInstance.findAllScenarios(organizationId, workspaceId).then((data) => {
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

### Return type

[**[Scenario]**](Scenario.md)

### Authorization

[oAuth2AuthCode](../README.md#oAuth2AuthCode)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## findAllScenariosByValidationStatus

> [Scenario] findAllScenariosByValidationStatus(organizationId, workspaceId, validationStatus)

List all Scenarios by validation status

### Example

```javascript
import CosmotechApi from '@cosmotech/api';
let defaultClient = CosmotechApi.ApiClient.instance;
// Configure OAuth2 access token for authorization: oAuth2AuthCode
let oAuth2AuthCode = defaultClient.authentications['oAuth2AuthCode'];
oAuth2AuthCode.accessToken = 'YOUR ACCESS TOKEN';

let apiInstance = new CosmotechApi.ScenarioApi();
let organizationId = "organizationId_example"; // String | the Organization identifier
let workspaceId = "workspaceId_example"; // String | the Workspace identifier
let validationStatus = new CosmotechApi.ScenarioValidationStatus(); // ScenarioValidationStatus | the Scenario Validation Status
apiInstance.findAllScenariosByValidationStatus(organizationId, workspaceId, validationStatus).then((data) => {
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
 **validationStatus** | [**ScenarioValidationStatus**](.md)| the Scenario Validation Status | 

### Return type

[**[Scenario]**](Scenario.md)

### Authorization

[oAuth2AuthCode](../README.md#oAuth2AuthCode)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## findScenarioById

> Scenario findScenarioById(organizationId, workspaceId, scenarioId)

Get the details of an scenario

### Example

```javascript
import CosmotechApi from '@cosmotech/api';
let defaultClient = CosmotechApi.ApiClient.instance;
// Configure OAuth2 access token for authorization: oAuth2AuthCode
let oAuth2AuthCode = defaultClient.authentications['oAuth2AuthCode'];
oAuth2AuthCode.accessToken = 'YOUR ACCESS TOKEN';

let apiInstance = new CosmotechApi.ScenarioApi();
let organizationId = "organizationId_example"; // String | the Organization identifier
let workspaceId = "workspaceId_example"; // String | the Workspace identifier
let scenarioId = "scenarioId_example"; // String | the Scenario identifier
apiInstance.findScenarioById(organizationId, workspaceId, scenarioId).then((data) => {
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

[**Scenario**](Scenario.md)

### Authorization

[oAuth2AuthCode](../README.md#oAuth2AuthCode)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## getScenarioDataDownloadJobInfo

> ScenarioDataDownloadInfo getScenarioDataDownloadJobInfo(organizationId, workspaceId, scenarioId, downloadId)

Get Scenario data download URL

### Example

```javascript
import CosmotechApi from '@cosmotech/api';
let defaultClient = CosmotechApi.ApiClient.instance;
// Configure OAuth2 access token for authorization: oAuth2AuthCode
let oAuth2AuthCode = defaultClient.authentications['oAuth2AuthCode'];
oAuth2AuthCode.accessToken = 'YOUR ACCESS TOKEN';

let apiInstance = new CosmotechApi.ScenarioApi();
let organizationId = "organizationId_example"; // String | the Organization identifier
let workspaceId = "workspaceId_example"; // String | the Workspace identifier
let scenarioId = "scenarioId_example"; // String | the Scenario identifier
let downloadId = "downloadId_example"; // String | the Scenario Download identifier
apiInstance.getScenarioDataDownloadJobInfo(organizationId, workspaceId, scenarioId, downloadId).then((data) => {
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
 **downloadId** | **String**| the Scenario Download identifier | 

### Return type

[**ScenarioDataDownloadInfo**](ScenarioDataDownloadInfo.md)

### Authorization

[oAuth2AuthCode](../README.md#oAuth2AuthCode)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## getScenarioValidationStatusById

> ScenarioValidationStatus getScenarioValidationStatusById(organizationId, workspaceId, scenarioId)

Get the validation status of an scenario

### Example

```javascript
import CosmotechApi from '@cosmotech/api';
let defaultClient = CosmotechApi.ApiClient.instance;
// Configure OAuth2 access token for authorization: oAuth2AuthCode
let oAuth2AuthCode = defaultClient.authentications['oAuth2AuthCode'];
oAuth2AuthCode.accessToken = 'YOUR ACCESS TOKEN';

let apiInstance = new CosmotechApi.ScenarioApi();
let organizationId = "organizationId_example"; // String | the Organization identifier
let workspaceId = "workspaceId_example"; // String | the Workspace identifier
let scenarioId = "scenarioId_example"; // String | the Scenario identifier
apiInstance.getScenarioValidationStatusById(organizationId, workspaceId, scenarioId).then((data) => {
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

[**ScenarioValidationStatus**](ScenarioValidationStatus.md)

### Authorization

[oAuth2AuthCode](../README.md#oAuth2AuthCode)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## getScenariosTree

> [Scenario] getScenariosTree(organizationId, workspaceId)

Get the Scenarios Tree

### Example

```javascript
import CosmotechApi from '@cosmotech/api';
let defaultClient = CosmotechApi.ApiClient.instance;
// Configure OAuth2 access token for authorization: oAuth2AuthCode
let oAuth2AuthCode = defaultClient.authentications['oAuth2AuthCode'];
oAuth2AuthCode.accessToken = 'YOUR ACCESS TOKEN';

let apiInstance = new CosmotechApi.ScenarioApi();
let organizationId = "organizationId_example"; // String | the Organization identifier
let workspaceId = "workspaceId_example"; // String | the Workspace identifier
apiInstance.getScenariosTree(organizationId, workspaceId).then((data) => {
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

### Return type

[**[Scenario]**](Scenario.md)

### Authorization

[oAuth2AuthCode](../README.md#oAuth2AuthCode)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## removeAllScenarioParameterValues

> removeAllScenarioParameterValues(organizationId, workspaceId, scenarioId)

Remove all Parameter Values from the Scenario specified

### Example

```javascript
import CosmotechApi from '@cosmotech/api';
let defaultClient = CosmotechApi.ApiClient.instance;
// Configure OAuth2 access token for authorization: oAuth2AuthCode
let oAuth2AuthCode = defaultClient.authentications['oAuth2AuthCode'];
oAuth2AuthCode.accessToken = 'YOUR ACCESS TOKEN';

let apiInstance = new CosmotechApi.ScenarioApi();
let organizationId = "organizationId_example"; // String | the Organization identifier
let workspaceId = "workspaceId_example"; // String | the Workspace identifier
let scenarioId = "scenarioId_example"; // String | the Scenario identifier
apiInstance.removeAllScenarioParameterValues(organizationId, workspaceId, scenarioId).then(() => {
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

### Return type

null (empty response body)

### Authorization

[oAuth2AuthCode](../README.md#oAuth2AuthCode)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: Not defined


## removeAllUsersOfScenario

> removeAllUsersOfScenario(organizationId, workspaceId, scenarioId)

Remove all users from the Scenario specified

### Example

```javascript
import CosmotechApi from '@cosmotech/api';
let defaultClient = CosmotechApi.ApiClient.instance;
// Configure OAuth2 access token for authorization: oAuth2AuthCode
let oAuth2AuthCode = defaultClient.authentications['oAuth2AuthCode'];
oAuth2AuthCode.accessToken = 'YOUR ACCESS TOKEN';

let apiInstance = new CosmotechApi.ScenarioApi();
let organizationId = "organizationId_example"; // String | the Organization identifier
let workspaceId = "workspaceId_example"; // String | the Workspace identifier
let scenarioId = "scenarioId_example"; // String | the Scenario identifier
apiInstance.removeAllUsersOfScenario(organizationId, workspaceId, scenarioId).then(() => {
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

### Return type

null (empty response body)

### Authorization

[oAuth2AuthCode](../README.md#oAuth2AuthCode)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: Not defined


## removeUserFromScenario

> removeUserFromScenario(organizationId, workspaceId, scenarioId, userId)

Remove the specified user from the given Scenario

### Example

```javascript
import CosmotechApi from '@cosmotech/api';
let defaultClient = CosmotechApi.ApiClient.instance;
// Configure OAuth2 access token for authorization: oAuth2AuthCode
let oAuth2AuthCode = defaultClient.authentications['oAuth2AuthCode'];
oAuth2AuthCode.accessToken = 'YOUR ACCESS TOKEN';

let apiInstance = new CosmotechApi.ScenarioApi();
let organizationId = "organizationId_example"; // String | the Organization identifier
let workspaceId = "workspaceId_example"; // String | the Workspace identifier
let scenarioId = "scenarioId_example"; // String | the Scenario identifier
let userId = "userId_example"; // String | the User identifier
apiInstance.removeUserFromScenario(organizationId, workspaceId, scenarioId, userId).then(() => {
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
 **userId** | **String**| the User identifier | 

### Return type

null (empty response body)

### Authorization

[oAuth2AuthCode](../README.md#oAuth2AuthCode)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: Not defined


## updateScenario

> Scenario updateScenario(organizationId, workspaceId, scenarioId, scenario)

Update a scenario

### Example

```javascript
import CosmotechApi from '@cosmotech/api';
let defaultClient = CosmotechApi.ApiClient.instance;
// Configure OAuth2 access token for authorization: oAuth2AuthCode
let oAuth2AuthCode = defaultClient.authentications['oAuth2AuthCode'];
oAuth2AuthCode.accessToken = 'YOUR ACCESS TOKEN';

let apiInstance = new CosmotechApi.ScenarioApi();
let organizationId = "organizationId_example"; // String | the Organization identifier
let workspaceId = "workspaceId_example"; // String | the Workspace identifier
let scenarioId = "scenarioId_example"; // String | the Scenario identifier
let scenario = new CosmotechApi.Scenario(); // Scenario | the new Scenario details.
apiInstance.updateScenario(organizationId, workspaceId, scenarioId, scenario).then((data) => {
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
 **scenario** | [**Scenario**](Scenario.md)| the new Scenario details. | 

### Return type

[**Scenario**](Scenario.md)

### Authorization

[oAuth2AuthCode](../README.md#oAuth2AuthCode)

### HTTP request headers

- **Content-Type**: application/json, application/yaml
- **Accept**: application/json

