# CosmotechApi.ScenarioApi

All URIs are relative to *https://dev.api.cosmotech.com*

Method | HTTP request | Description
------------- | ------------- | -------------
[**addOrReplaceScenarioParameterValues**](ScenarioApi.md#addOrReplaceScenarioParameterValues) | **POST** /organizations/{organization_id}/workspaces/{workspace_id}/scenarios/{scenario_id}/parameterValues | Add (or replace) Parameter Values for the Scenario specified
[**addScenarioAccessControl**](ScenarioApi.md#addScenarioAccessControl) | **POST** /organizations/{organization_id}/workspaces/{workspace_id}/scenarios/{scenario_id}/security/access | Add a control access to the Scenario
[**compareScenarios**](ScenarioApi.md#compareScenarios) | **GET** /organizations/{organization_id}/workspaces/{workspace_id}/scenarios/{scenario_id}/compare/{compared_scenario_id} | Compare the Scenario with another one and returns the difference for parameters values
[**createScenario**](ScenarioApi.md#createScenario) | **POST** /organizations/{organization_id}/workspaces/{workspace_id}/scenarios | Create a new Scenario
[**deleteAllScenarios**](ScenarioApi.md#deleteAllScenarios) | **DELETE** /organizations/{organization_id}/workspaces/{workspace_id}/scenarios | Delete all Scenarios of the Workspace
[**deleteScenario**](ScenarioApi.md#deleteScenario) | **DELETE** /organizations/{organization_id}/workspaces/{workspace_id}/scenarios/{scenario_id} | Delete a scenario
[**downloadScenarioData**](ScenarioApi.md#downloadScenarioData) | **POST** /organizations/{organization_id}/workspaces/{workspace_id}/scenarios/{scenario_id}/downloads | Download Scenario data
[**findAllScenarios**](ScenarioApi.md#findAllScenarios) | **GET** /organizations/{organization_id}/workspaces/{workspace_id}/scenarios | List all Scenarios
[**findAllScenariosByValidationStatus**](ScenarioApi.md#findAllScenariosByValidationStatus) | **GET** /organizations/{organization_id}/workspaces/{workspace_id}/{validationStatus} | List all Scenarios by validation status
[**findScenarioById**](ScenarioApi.md#findScenarioById) | **GET** /organizations/{organization_id}/workspaces/{workspace_id}/scenarios/{scenario_id} | Get the details of an scenario
[**getScenarioAccessControl**](ScenarioApi.md#getScenarioAccessControl) | **GET** /organizations/{organization_id}/workspaces/{workspace_id}/scenarios/{scenario_id}/security/access/{identity_id} | Get a control access for the Scenario
[**getScenarioDataDownloadJobInfo**](ScenarioApi.md#getScenarioDataDownloadJobInfo) | **GET** /organizations/{organization_id}/workspaces/{workspace_id}/scenarios/{scenario_id}/downloads/{download_id} | Get Scenario data download URL
[**getScenarioPermissions**](ScenarioApi.md#getScenarioPermissions) | **GET** /organizations/{organization_id}/workspaces/{workspace_id}/scenarios/permissions/{role} | Get the Scenario permission by given role
[**getScenarioSecurity**](ScenarioApi.md#getScenarioSecurity) | **GET** /organizations/{organization_id}/workspaces/{workspace_id}/scenarios/{scenario_id}/security | Get the Scenario security information
[**getScenarioSecurityUsers**](ScenarioApi.md#getScenarioSecurityUsers) | **GET** /organizations/{organization_id}/workspaces/{workspace_id}/scenarios/{scenario_id}/security/users | Get the Scenario security users list
[**getScenarioValidationStatusById**](ScenarioApi.md#getScenarioValidationStatusById) | **GET** /organizations/{organization_id}/workspaces/{workspace_id}/scenarios/{scenario_id}/ValidationStatus | Get the validation status of an scenario
[**getScenariosTree**](ScenarioApi.md#getScenariosTree) | **GET** /organizations/{organization_id}/workspaces/{workspace_id}/scenarios/tree | Get the Scenarios Tree
[**importScenario**](ScenarioApi.md#importScenario) | **POST** /organizations/{organization_id}/workspaces/{workspace_id}/scenarios/import | Import Scenario
[**removeAllScenarioParameterValues**](ScenarioApi.md#removeAllScenarioParameterValues) | **DELETE** /organizations/{organization_id}/workspaces/{workspace_id}/scenarios/{scenario_id}/parameterValues | Remove all Parameter Values from the Scenario specified
[**removeScenarioAccessControl**](ScenarioApi.md#removeScenarioAccessControl) | **DELETE** /organizations/{organization_id}/workspaces/{workspace_id}/scenarios/{scenario_id}/security/access/{identity_id} | Remove the specified access from the given Organization Scenario
[**setScenarioDefaultSecurity**](ScenarioApi.md#setScenarioDefaultSecurity) | **POST** /organizations/{organization_id}/workspaces/{workspace_id}/scenarios/{scenario_id}/security/default | Set the Scenario default security
[**updateScenario**](ScenarioApi.md#updateScenario) | **PATCH** /organizations/{organization_id}/workspaces/{workspace_id}/scenarios/{scenario_id} | Update a scenario
[**updateScenarioAccessControl**](ScenarioApi.md#updateScenarioAccessControl) | **PATCH** /organizations/{organization_id}/workspaces/{workspace_id}/scenarios/{scenario_id}/security/access/{identity_id} | Update the specified access to User for a Scenario



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


## addScenarioAccessControl

> ScenarioAccessControl addScenarioAccessControl(organizationId, workspaceId, scenarioId, scenarioAccessControl)

Add a control access to the Scenario

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
let scenarioAccessControl = new CosmotechApi.ScenarioAccessControl(); // ScenarioAccessControl | the new Scenario security access to add.
apiInstance.addScenarioAccessControl(organizationId, workspaceId, scenarioId, scenarioAccessControl).then((data) => {
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
 **scenarioAccessControl** | [**ScenarioAccessControl**](ScenarioAccessControl.md)| the new Scenario security access to add. | 

### Return type

[**ScenarioAccessControl**](ScenarioAccessControl.md)

### Authorization

[oAuth2AuthCode](../README.md#oAuth2AuthCode)

### HTTP request headers

- **Content-Type**: application/json, application/yaml
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

> deleteScenario(organizationId, workspaceId, scenarioId)

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
apiInstance.deleteScenario(organizationId, workspaceId, scenarioId).then(() => {
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

> [Scenario] findAllScenarios(organizationId, workspaceId, opts)

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
let opts = {
  'page': 56, // Number | page number to query
  'size': 56 // Number | amount of result by page
};
apiInstance.findAllScenarios(organizationId, workspaceId, opts).then((data) => {
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

[**[Scenario]**](Scenario.md)

### Authorization

[oAuth2AuthCode](../README.md#oAuth2AuthCode)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## findAllScenariosByValidationStatus

> [Scenario] findAllScenariosByValidationStatus(organizationId, workspaceId, validationStatus, opts)

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
let opts = {
  'page': 56, // Number | page number to query
  'size': 56 // Number | amount of result by page
};
apiInstance.findAllScenariosByValidationStatus(organizationId, workspaceId, validationStatus, opts).then((data) => {
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
 **page** | **Number**| page number to query | [optional] 
 **size** | **Number**| amount of result by page | [optional] 

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


## getScenarioAccessControl

> ScenarioAccessControl getScenarioAccessControl(organizationId, workspaceId, scenarioId, identityId)

Get a control access for the Scenario

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
let identityId = "identityId_example"; // String | the User identifier
apiInstance.getScenarioAccessControl(organizationId, workspaceId, scenarioId, identityId).then((data) => {
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
 **identityId** | **String**| the User identifier | 

### Return type

[**ScenarioAccessControl**](ScenarioAccessControl.md)

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


## getScenarioPermissions

> [String] getScenarioPermissions(organizationId, workspaceId, role)

Get the Scenario permission by given role

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
let role = "role_example"; // String | the Role
apiInstance.getScenarioPermissions(organizationId, workspaceId, role).then((data) => {
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
 **role** | **String**| the Role | 

### Return type

**[String]**

### Authorization

[oAuth2AuthCode](../README.md#oAuth2AuthCode)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## getScenarioSecurity

> ScenarioSecurity getScenarioSecurity(organizationId, workspaceId, scenarioId)

Get the Scenario security information

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
apiInstance.getScenarioSecurity(organizationId, workspaceId, scenarioId).then((data) => {
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

[**ScenarioSecurity**](ScenarioSecurity.md)

### Authorization

[oAuth2AuthCode](../README.md#oAuth2AuthCode)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## getScenarioSecurityUsers

> [String] getScenarioSecurityUsers(organizationId, workspaceId, scenarioId)

Get the Scenario security users list

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
apiInstance.getScenarioSecurityUsers(organizationId, workspaceId, scenarioId).then((data) => {
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

**[String]**

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


## importScenario

> Scenario importScenario(organizationId, workspaceId, scenario)

Import Scenario

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
let scenario = new CosmotechApi.Scenario(); // Scenario | the Scenario to import
apiInstance.importScenario(organizationId, workspaceId, scenario).then((data) => {
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
 **scenario** | [**Scenario**](Scenario.md)| the Scenario to import | 

### Return type

[**Scenario**](Scenario.md)

### Authorization

[oAuth2AuthCode](../README.md#oAuth2AuthCode)

### HTTP request headers

- **Content-Type**: application/json
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


## removeScenarioAccessControl

> removeScenarioAccessControl(organizationId, workspaceId, scenarioId, identityId)

Remove the specified access from the given Organization Scenario

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
let identityId = "identityId_example"; // String | the User identifier
apiInstance.removeScenarioAccessControl(organizationId, workspaceId, scenarioId, identityId).then(() => {
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
 **identityId** | **String**| the User identifier | 

### Return type

null (empty response body)

### Authorization

[oAuth2AuthCode](../README.md#oAuth2AuthCode)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: Not defined


## setScenarioDefaultSecurity

> ScenarioSecurity setScenarioDefaultSecurity(organizationId, workspaceId, scenarioId, scenarioRole)

Set the Scenario default security

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
let scenarioRole = new CosmotechApi.ScenarioRole(); // ScenarioRole | the new Scenario default security.
apiInstance.setScenarioDefaultSecurity(organizationId, workspaceId, scenarioId, scenarioRole).then((data) => {
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
 **scenarioRole** | [**ScenarioRole**](ScenarioRole.md)| the new Scenario default security. | 

### Return type

[**ScenarioSecurity**](ScenarioSecurity.md)

### Authorization

[oAuth2AuthCode](../README.md#oAuth2AuthCode)

### HTTP request headers

- **Content-Type**: application/json, application/yaml
- **Accept**: application/json


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


## updateScenarioAccessControl

> ScenarioAccessControl updateScenarioAccessControl(organizationId, workspaceId, scenarioId, identityId, scenarioRole)

Update the specified access to User for a Scenario

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
let identityId = "identityId_example"; // String | the User identifier
let scenarioRole = new CosmotechApi.ScenarioRole(); // ScenarioRole | The new Scenario Access Control
apiInstance.updateScenarioAccessControl(organizationId, workspaceId, scenarioId, identityId, scenarioRole).then((data) => {
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
 **identityId** | **String**| the User identifier | 
 **scenarioRole** | [**ScenarioRole**](ScenarioRole.md)| The new Scenario Access Control | 

### Return type

[**ScenarioAccessControl**](ScenarioAccessControl.md)

### Authorization

[oAuth2AuthCode](../README.md#oAuth2AuthCode)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json

