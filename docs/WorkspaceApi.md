# CosmotechApi.WorkspaceApi

All URIs are relative to *https://dev.api.cosmotech.com*

Method | HTTP request | Description
------------- | ------------- | -------------
[**addOrReplaceUsersInOrganizationWorkspace**](WorkspaceApi.md#addOrReplaceUsersInOrganizationWorkspace) | **POST** /organizations/{organization_id}/workspaces/{workspace_id}/users | Add (or replace) users to the Workspace specified
[**createWorkspace**](WorkspaceApi.md#createWorkspace) | **POST** /organizations/{organization_id}/workspaces | Create a new workspace
[**deleteAllWorkspaceFiles**](WorkspaceApi.md#deleteAllWorkspaceFiles) | **DELETE** /organizations/{organization_id}/workspaces/{workspace_id}/files | Delete all Workspace files
[**deleteWorkspace**](WorkspaceApi.md#deleteWorkspace) | **DELETE** /organizations/{organization_id}/workspaces/{workspace_id} | Delete a workspace
[**deleteWorkspaceFile**](WorkspaceApi.md#deleteWorkspaceFile) | **DELETE** /organizations/{organization_id}/workspaces/{workspace_id}/files/delete | Delete a workspace file
[**downloadWorkspaceFile**](WorkspaceApi.md#downloadWorkspaceFile) | **GET** /organizations/{organization_id}/workspaces/{workspace_id}/files/download | Download the Workspace File specified
[**findAllWorkspaceFiles**](WorkspaceApi.md#findAllWorkspaceFiles) | **GET** /organizations/{organization_id}/workspaces/{workspace_id}/files | List all Workspace files
[**findAllWorkspaces**](WorkspaceApi.md#findAllWorkspaces) | **GET** /organizations/{organization_id}/workspaces | List all Workspaces
[**findWorkspaceById**](WorkspaceApi.md#findWorkspaceById) | **GET** /organizations/{organization_id}/workspaces/{workspace_id} | Get the details of an workspace
[**removeAllUsersOfWorkspace**](WorkspaceApi.md#removeAllUsersOfWorkspace) | **DELETE** /organizations/{organization_id}/workspaces/{workspace_id}/users | Remove all users from the Workspace specified
[**removeUserFromOrganizationWorkspace**](WorkspaceApi.md#removeUserFromOrganizationWorkspace) | **DELETE** /organizations/{organization_id}/workspaces/{workspace_id}/users/{user_id} | Remove the specified user from the given Organization Workspace
[**updateWorkspace**](WorkspaceApi.md#updateWorkspace) | **PATCH** /organizations/{organization_id}/workspaces/{workspace_id} | Update a workspace
[**uploadWorkspaceFile**](WorkspaceApi.md#uploadWorkspaceFile) | **POST** /organizations/{organization_id}/workspaces/{workspace_id}/files | Upload a file for the Workspace



## addOrReplaceUsersInOrganizationWorkspace

> [WorkspaceUser] addOrReplaceUsersInOrganizationWorkspace(organizationId, workspaceId, workspaceUser)

Add (or replace) users to the Workspace specified

### Example

```javascript
import CosmotechApi from '@cosmotech/api';
let defaultClient = CosmotechApi.ApiClient.instance;
// Configure OAuth2 access token for authorization: oAuth2AuthCode
let oAuth2AuthCode = defaultClient.authentications['oAuth2AuthCode'];
oAuth2AuthCode.accessToken = 'YOUR ACCESS TOKEN';

let apiInstance = new CosmotechApi.WorkspaceApi();
let organizationId = "organizationId_example"; // String | the Organization identifier
let workspaceId = "workspaceId_example"; // String | the Workspace identifier
let workspaceUser = [new CosmotechApi.WorkspaceUser()]; // [WorkspaceUser] | the Users to add. Any User with the same ID is overwritten
apiInstance.addOrReplaceUsersInOrganizationWorkspace(organizationId, workspaceId, workspaceUser, (error, data, response) => {
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
 **workspaceUser** | [**[WorkspaceUser]**](WorkspaceUser.md)| the Users to add. Any User with the same ID is overwritten | 

### Return type

[**[WorkspaceUser]**](WorkspaceUser.md)

### Authorization

[oAuth2AuthCode](../README.md#oAuth2AuthCode)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json


## createWorkspace

> Workspace createWorkspace(organizationId, workspace)

Create a new workspace

### Example

```javascript
import CosmotechApi from '@cosmotech/api';
let defaultClient = CosmotechApi.ApiClient.instance;
// Configure OAuth2 access token for authorization: oAuth2AuthCode
let oAuth2AuthCode = defaultClient.authentications['oAuth2AuthCode'];
oAuth2AuthCode.accessToken = 'YOUR ACCESS TOKEN';

let apiInstance = new CosmotechApi.WorkspaceApi();
let organizationId = "organizationId_example"; // String | the Organization identifier
let workspace = new CosmotechApi.Workspace(); // Workspace | the Workspace to create
apiInstance.createWorkspace(organizationId, workspace, (error, data, response) => {
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
 **workspace** | [**Workspace**](Workspace.md)| the Workspace to create | 

### Return type

[**Workspace**](Workspace.md)

### Authorization

[oAuth2AuthCode](../README.md#oAuth2AuthCode)

### HTTP request headers

- **Content-Type**: application/json, application/yaml
- **Accept**: application/json


## deleteAllWorkspaceFiles

> deleteAllWorkspaceFiles(organizationId, workspaceId)

Delete all Workspace files

### Example

```javascript
import CosmotechApi from '@cosmotech/api';
let defaultClient = CosmotechApi.ApiClient.instance;
// Configure OAuth2 access token for authorization: oAuth2AuthCode
let oAuth2AuthCode = defaultClient.authentications['oAuth2AuthCode'];
oAuth2AuthCode.accessToken = 'YOUR ACCESS TOKEN';

let apiInstance = new CosmotechApi.WorkspaceApi();
let organizationId = "organizationId_example"; // String | the Organization identifier
let workspaceId = "workspaceId_example"; // String | the Workspace identifier
apiInstance.deleteAllWorkspaceFiles(organizationId, workspaceId, (error, data, response) => {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully.');
  }
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


## deleteWorkspace

> Workspace deleteWorkspace(organizationId, workspaceId)

Delete a workspace

### Example

```javascript
import CosmotechApi from '@cosmotech/api';
let defaultClient = CosmotechApi.ApiClient.instance;
// Configure OAuth2 access token for authorization: oAuth2AuthCode
let oAuth2AuthCode = defaultClient.authentications['oAuth2AuthCode'];
oAuth2AuthCode.accessToken = 'YOUR ACCESS TOKEN';

let apiInstance = new CosmotechApi.WorkspaceApi();
let organizationId = "organizationId_example"; // String | the Organization identifier
let workspaceId = "workspaceId_example"; // String | the Workspace identifier
apiInstance.deleteWorkspace(organizationId, workspaceId, (error, data, response) => {
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

[**Workspace**](Workspace.md)

### Authorization

[oAuth2AuthCode](../README.md#oAuth2AuthCode)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## deleteWorkspaceFile

> deleteWorkspaceFile(organizationId, workspaceId, fileName)

Delete a workspace file

### Example

```javascript
import CosmotechApi from '@cosmotech/api';
let defaultClient = CosmotechApi.ApiClient.instance;
// Configure OAuth2 access token for authorization: oAuth2AuthCode
let oAuth2AuthCode = defaultClient.authentications['oAuth2AuthCode'];
oAuth2AuthCode.accessToken = 'YOUR ACCESS TOKEN';

let apiInstance = new CosmotechApi.WorkspaceApi();
let organizationId = "organizationId_example"; // String | the Organization identifier
let workspaceId = "workspaceId_example"; // String | the Workspace identifier
let fileName = "fileName_example"; // String | the file name
apiInstance.deleteWorkspaceFile(organizationId, workspaceId, fileName, (error, data, response) => {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully.');
  }
});
```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **organizationId** | **String**| the Organization identifier | 
 **workspaceId** | **String**| the Workspace identifier | 
 **fileName** | **String**| the file name | 

### Return type

null (empty response body)

### Authorization

[oAuth2AuthCode](../README.md#oAuth2AuthCode)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: Not defined


## downloadWorkspaceFile

> File downloadWorkspaceFile(organizationId, workspaceId, fileName)

Download the Workspace File specified

### Example

```javascript
import CosmotechApi from '@cosmotech/api';
let defaultClient = CosmotechApi.ApiClient.instance;
// Configure OAuth2 access token for authorization: oAuth2AuthCode
let oAuth2AuthCode = defaultClient.authentications['oAuth2AuthCode'];
oAuth2AuthCode.accessToken = 'YOUR ACCESS TOKEN';

let apiInstance = new CosmotechApi.WorkspaceApi();
let organizationId = "organizationId_example"; // String | the Organization identifier
let workspaceId = "workspaceId_example"; // String | the Workspace identifier
let fileName = "fileName_example"; // String | the file name
apiInstance.downloadWorkspaceFile(organizationId, workspaceId, fileName, (error, data, response) => {
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
 **fileName** | **String**| the file name | 

### Return type

**File**

### Authorization

[oAuth2AuthCode](../README.md#oAuth2AuthCode)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/octet-stream


## findAllWorkspaceFiles

> [WorkspaceFile] findAllWorkspaceFiles(organizationId, workspaceId)

List all Workspace files

### Example

```javascript
import CosmotechApi from '@cosmotech/api';
let defaultClient = CosmotechApi.ApiClient.instance;
// Configure OAuth2 access token for authorization: oAuth2AuthCode
let oAuth2AuthCode = defaultClient.authentications['oAuth2AuthCode'];
oAuth2AuthCode.accessToken = 'YOUR ACCESS TOKEN';

let apiInstance = new CosmotechApi.WorkspaceApi();
let organizationId = "organizationId_example"; // String | the Organization identifier
let workspaceId = "workspaceId_example"; // String | the Workspace identifier
apiInstance.findAllWorkspaceFiles(organizationId, workspaceId, (error, data, response) => {
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

[**[WorkspaceFile]**](WorkspaceFile.md)

### Authorization

[oAuth2AuthCode](../README.md#oAuth2AuthCode)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## findAllWorkspaces

> [Workspace] findAllWorkspaces(organizationId)

List all Workspaces

### Example

```javascript
import CosmotechApi from '@cosmotech/api';
let defaultClient = CosmotechApi.ApiClient.instance;
// Configure OAuth2 access token for authorization: oAuth2AuthCode
let oAuth2AuthCode = defaultClient.authentications['oAuth2AuthCode'];
oAuth2AuthCode.accessToken = 'YOUR ACCESS TOKEN';

let apiInstance = new CosmotechApi.WorkspaceApi();
let organizationId = "organizationId_example"; // String | the Organization identifier
apiInstance.findAllWorkspaces(organizationId, (error, data, response) => {
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

### Return type

[**[Workspace]**](Workspace.md)

### Authorization

[oAuth2AuthCode](../README.md#oAuth2AuthCode)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## findWorkspaceById

> Workspace findWorkspaceById(organizationId, workspaceId)

Get the details of an workspace

### Example

```javascript
import CosmotechApi from '@cosmotech/api';
let defaultClient = CosmotechApi.ApiClient.instance;
// Configure OAuth2 access token for authorization: oAuth2AuthCode
let oAuth2AuthCode = defaultClient.authentications['oAuth2AuthCode'];
oAuth2AuthCode.accessToken = 'YOUR ACCESS TOKEN';

let apiInstance = new CosmotechApi.WorkspaceApi();
let organizationId = "organizationId_example"; // String | the Organization identifier
let workspaceId = "workspaceId_example"; // String | the Workspace identifier
apiInstance.findWorkspaceById(organizationId, workspaceId, (error, data, response) => {
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

[**Workspace**](Workspace.md)

### Authorization

[oAuth2AuthCode](../README.md#oAuth2AuthCode)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## removeAllUsersOfWorkspace

> removeAllUsersOfWorkspace(organizationId, workspaceId)

Remove all users from the Workspace specified

### Example

```javascript
import CosmotechApi from '@cosmotech/api';
let defaultClient = CosmotechApi.ApiClient.instance;
// Configure OAuth2 access token for authorization: oAuth2AuthCode
let oAuth2AuthCode = defaultClient.authentications['oAuth2AuthCode'];
oAuth2AuthCode.accessToken = 'YOUR ACCESS TOKEN';

let apiInstance = new CosmotechApi.WorkspaceApi();
let organizationId = "organizationId_example"; // String | the Organization identifier
let workspaceId = "workspaceId_example"; // String | the Workspace identifier
apiInstance.removeAllUsersOfWorkspace(organizationId, workspaceId, (error, data, response) => {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully.');
  }
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


## removeUserFromOrganizationWorkspace

> removeUserFromOrganizationWorkspace(organizationId, workspaceId, userId)

Remove the specified user from the given Organization Workspace

### Example

```javascript
import CosmotechApi from '@cosmotech/api';
let defaultClient = CosmotechApi.ApiClient.instance;
// Configure OAuth2 access token for authorization: oAuth2AuthCode
let oAuth2AuthCode = defaultClient.authentications['oAuth2AuthCode'];
oAuth2AuthCode.accessToken = 'YOUR ACCESS TOKEN';

let apiInstance = new CosmotechApi.WorkspaceApi();
let organizationId = "organizationId_example"; // String | the Organization identifier
let workspaceId = "workspaceId_example"; // String | the Workspace identifier
let userId = "userId_example"; // String | the User identifier
apiInstance.removeUserFromOrganizationWorkspace(organizationId, workspaceId, userId, (error, data, response) => {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully.');
  }
});
```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **organizationId** | **String**| the Organization identifier | 
 **workspaceId** | **String**| the Workspace identifier | 
 **userId** | **String**| the User identifier | 

### Return type

null (empty response body)

### Authorization

[oAuth2AuthCode](../README.md#oAuth2AuthCode)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: Not defined


## updateWorkspace

> Workspace updateWorkspace(organizationId, workspaceId, workspace)

Update a workspace

### Example

```javascript
import CosmotechApi from '@cosmotech/api';
let defaultClient = CosmotechApi.ApiClient.instance;
// Configure OAuth2 access token for authorization: oAuth2AuthCode
let oAuth2AuthCode = defaultClient.authentications['oAuth2AuthCode'];
oAuth2AuthCode.accessToken = 'YOUR ACCESS TOKEN';

let apiInstance = new CosmotechApi.WorkspaceApi();
let organizationId = "organizationId_example"; // String | the Organization identifier
let workspaceId = "workspaceId_example"; // String | the Workspace identifier
let workspace = new CosmotechApi.Workspace(); // Workspace | the new Workspace details.
apiInstance.updateWorkspace(organizationId, workspaceId, workspace, (error, data, response) => {
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
 **workspace** | [**Workspace**](Workspace.md)| the new Workspace details. | 

### Return type

[**Workspace**](Workspace.md)

### Authorization

[oAuth2AuthCode](../README.md#oAuth2AuthCode)

### HTTP request headers

- **Content-Type**: application/json, application/yaml
- **Accept**: application/json


## uploadWorkspaceFile

> WorkspaceFile uploadWorkspaceFile(organizationId, workspaceId, file, opts)

Upload a file for the Workspace

### Example

```javascript
import CosmotechApi from '@cosmotech/api';
let defaultClient = CosmotechApi.ApiClient.instance;
// Configure OAuth2 access token for authorization: oAuth2AuthCode
let oAuth2AuthCode = defaultClient.authentications['oAuth2AuthCode'];
oAuth2AuthCode.accessToken = 'YOUR ACCESS TOKEN';

let apiInstance = new CosmotechApi.WorkspaceApi();
let organizationId = "organizationId_example"; // String | the Organization identifier
let workspaceId = "workspaceId_example"; // String | the Workspace identifier
let file = "/path/to/file"; // File | 
let opts = {
  'overwrite': false, // Boolean | 
  'destination': "destination_example" // String | Destination path. Must end with a '/' if specifying a folder. Note that paths may or may not start with a '/', but they are always treated as relative to the Workspace root location. 
};
apiInstance.uploadWorkspaceFile(organizationId, workspaceId, file, opts, (error, data, response) => {
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
 **file** | **File**|  | 
 **overwrite** | **Boolean**|  | [optional] [default to false]
 **destination** | **String**| Destination path. Must end with a &#39;/&#39; if specifying a folder. Note that paths may or may not start with a &#39;/&#39;, but they are always treated as relative to the Workspace root location.  | [optional] 

### Return type

[**WorkspaceFile**](WorkspaceFile.md)

### Authorization

[oAuth2AuthCode](../README.md#oAuth2AuthCode)

### HTTP request headers

- **Content-Type**: multipart/form-data
- **Accept**: application/json

