# CosmotechApi.WorkspaceApi

All URIs are relative to *https://dev.api.cosmotech.com*

Method | HTTP request | Description
------------- | ------------- | -------------
[**addWorkspaceAccessControl**](WorkspaceApi.md#addWorkspaceAccessControl) | **POST** /organizations/{organization_id}/workspaces/{workspace_id}/security/access | Add a control access to the Workspace
[**createSecret**](WorkspaceApi.md#createSecret) | **POST** /organizations/{organization_id}/workspaces/{workspace_id}/secret | Create a secret for the Workspace
[**createWorkspace**](WorkspaceApi.md#createWorkspace) | **POST** /organizations/{organization_id}/workspaces | Create a new workspace
[**deleteAllWorkspaceFiles**](WorkspaceApi.md#deleteAllWorkspaceFiles) | **DELETE** /organizations/{organization_id}/workspaces/{workspace_id}/files | Delete all Workspace files
[**deleteWorkspace**](WorkspaceApi.md#deleteWorkspace) | **DELETE** /organizations/{organization_id}/workspaces/{workspace_id} | Delete a workspace
[**deleteWorkspaceFile**](WorkspaceApi.md#deleteWorkspaceFile) | **DELETE** /organizations/{organization_id}/workspaces/{workspace_id}/files/delete | Delete a workspace file
[**downloadWorkspaceFile**](WorkspaceApi.md#downloadWorkspaceFile) | **GET** /organizations/{organization_id}/workspaces/{workspace_id}/files/download | Download the Workspace File specified
[**findAllWorkspaceFiles**](WorkspaceApi.md#findAllWorkspaceFiles) | **GET** /organizations/{organization_id}/workspaces/{workspace_id}/files | List all Workspace files
[**findAllWorkspaces**](WorkspaceApi.md#findAllWorkspaces) | **GET** /organizations/{organization_id}/workspaces | List all Workspaces
[**findWorkspaceById**](WorkspaceApi.md#findWorkspaceById) | **GET** /organizations/{organization_id}/workspaces/{workspace_id} | Get the details of an workspace
[**getWorkspaceAccessControl**](WorkspaceApi.md#getWorkspaceAccessControl) | **GET** /organizations/{organization_id}/workspaces/{workspace_id}/security/access/{identity_id} | Get a control access for the Workspace
[**getWorkspacePermissions**](WorkspaceApi.md#getWorkspacePermissions) | **GET** /organizations/{organization_id}/workspaces/{workspace_id}/permissions/{role} | Get the Workspace permission by given role
[**getWorkspaceSecurity**](WorkspaceApi.md#getWorkspaceSecurity) | **GET** /organizations/{organization_id}/workspaces/{workspace_id}/security | Get the Workspace security information
[**getWorkspaceSecurityUsers**](WorkspaceApi.md#getWorkspaceSecurityUsers) | **GET** /organizations/{organization_id}/workspaces/{workspace_id}/security/users | Get the Workspace security users list
[**importWorkspace**](WorkspaceApi.md#importWorkspace) | **POST** /organizations/{organization_id}/workspaces/import | Import a workspace
[**removeWorkspaceAccessControl**](WorkspaceApi.md#removeWorkspaceAccessControl) | **DELETE** /organizations/{organization_id}/workspaces/{workspace_id}/security/access/{identity_id} | Remove the specified access from the given Organization Workspace
[**setWorkspaceDefaultSecurity**](WorkspaceApi.md#setWorkspaceDefaultSecurity) | **POST** /organizations/{organization_id}/workspaces/{workspace_id}/security/default | Set the Workspace default security
[**updateWorkspace**](WorkspaceApi.md#updateWorkspace) | **PATCH** /organizations/{organization_id}/workspaces/{workspace_id} | Update a workspace
[**updateWorkspaceAccessControl**](WorkspaceApi.md#updateWorkspaceAccessControl) | **PATCH** /organizations/{organization_id}/workspaces/{workspace_id}/security/access/{identity_id} | Update the specified access to User for a Workspace
[**uploadWorkspaceFile**](WorkspaceApi.md#uploadWorkspaceFile) | **POST** /organizations/{organization_id}/workspaces/{workspace_id}/files | Upload a file for the Workspace



## addWorkspaceAccessControl

> WorkspaceAccessControl addWorkspaceAccessControl(organizationId, workspaceId, workspaceAccessControl)

Add a control access to the Workspace

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
let workspaceAccessControl = new CosmotechApi.WorkspaceAccessControl(); // WorkspaceAccessControl | the new Workspace security access to add.
apiInstance.addWorkspaceAccessControl(organizationId, workspaceId, workspaceAccessControl).then((data) => {
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
 **workspaceAccessControl** | [**WorkspaceAccessControl**](WorkspaceAccessControl.md)| the new Workspace security access to add. | 

### Return type

[**WorkspaceAccessControl**](WorkspaceAccessControl.md)

### Authorization

[oAuth2AuthCode](../README.md#oAuth2AuthCode)

### HTTP request headers

- **Content-Type**: application/json, application/yaml
- **Accept**: application/json


## createSecret

> createSecret(organizationId, workspaceId, workspaceSecret)

Create a secret for the Workspace

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
let workspaceSecret = new CosmotechApi.WorkspaceSecret(); // WorkspaceSecret | the definition of the secret
apiInstance.createSecret(organizationId, workspaceId, workspaceSecret).then(() => {
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
 **workspaceSecret** | [**WorkspaceSecret**](WorkspaceSecret.md)| the definition of the secret | 

### Return type

null (empty response body)

### Authorization

[oAuth2AuthCode](../README.md#oAuth2AuthCode)

### HTTP request headers

- **Content-Type**: application/json, application/yaml
- **Accept**: Not defined


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
apiInstance.createWorkspace(organizationId, workspace).then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, (error) => {
  console.error(error);
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
apiInstance.deleteAllWorkspaceFiles(organizationId, workspaceId).then(() => {
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
apiInstance.deleteWorkspace(organizationId, workspaceId).then((data) => {
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
apiInstance.deleteWorkspaceFile(organizationId, workspaceId, fileName).then(() => {
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
apiInstance.downloadWorkspaceFile(organizationId, workspaceId, fileName).then((data) => {
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
apiInstance.findAllWorkspaceFiles(organizationId, workspaceId).then((data) => {
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
apiInstance.findAllWorkspaces(organizationId).then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, (error) => {
  console.error(error);
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
apiInstance.findWorkspaceById(organizationId, workspaceId).then((data) => {
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

[**Workspace**](Workspace.md)

### Authorization

[oAuth2AuthCode](../README.md#oAuth2AuthCode)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## getWorkspaceAccessControl

> WorkspaceAccessControl getWorkspaceAccessControl(organizationId, workspaceId, identityId)

Get a control access for the Workspace

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
let identityId = "identityId_example"; // String | the User identifier
apiInstance.getWorkspaceAccessControl(organizationId, workspaceId, identityId).then((data) => {
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
 **identityId** | **String**| the User identifier | 

### Return type

[**WorkspaceAccessControl**](WorkspaceAccessControl.md)

### Authorization

[oAuth2AuthCode](../README.md#oAuth2AuthCode)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## getWorkspacePermissions

> [String] getWorkspacePermissions(organizationId, workspaceId, role)

Get the Workspace permission by given role

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
let role = "role_example"; // String | the Role
apiInstance.getWorkspacePermissions(organizationId, workspaceId, role).then((data) => {
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


## getWorkspaceSecurity

> WorkspaceSecurity getWorkspaceSecurity(organizationId, workspaceId)

Get the Workspace security information

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
apiInstance.getWorkspaceSecurity(organizationId, workspaceId).then((data) => {
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

[**WorkspaceSecurity**](WorkspaceSecurity.md)

### Authorization

[oAuth2AuthCode](../README.md#oAuth2AuthCode)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## getWorkspaceSecurityUsers

> [String] getWorkspaceSecurityUsers(organizationId, workspaceId)

Get the Workspace security users list

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
apiInstance.getWorkspaceSecurityUsers(organizationId, workspaceId).then((data) => {
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

**[String]**

### Authorization

[oAuth2AuthCode](../README.md#oAuth2AuthCode)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## importWorkspace

> Workspace importWorkspace(organizationId, workspace)

Import a workspace

### Example

```javascript
import CosmotechApi from '@cosmotech/api';
let defaultClient = CosmotechApi.ApiClient.instance;
// Configure OAuth2 access token for authorization: oAuth2AuthCode
let oAuth2AuthCode = defaultClient.authentications['oAuth2AuthCode'];
oAuth2AuthCode.accessToken = 'YOUR ACCESS TOKEN';

let apiInstance = new CosmotechApi.WorkspaceApi();
let organizationId = "organizationId_example"; // String | the Organization identifier
let workspace = new CosmotechApi.Workspace(); // Workspace | the Workspace to import
apiInstance.importWorkspace(organizationId, workspace).then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, (error) => {
  console.error(error);
});

```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **organizationId** | **String**| the Organization identifier | 
 **workspace** | [**Workspace**](Workspace.md)| the Workspace to import | 

### Return type

[**Workspace**](Workspace.md)

### Authorization

[oAuth2AuthCode](../README.md#oAuth2AuthCode)

### HTTP request headers

- **Content-Type**: application/json, application/yaml
- **Accept**: application/json


## removeWorkspaceAccessControl

> removeWorkspaceAccessControl(organizationId, workspaceId, identityId)

Remove the specified access from the given Organization Workspace

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
let identityId = "identityId_example"; // String | the User identifier
apiInstance.removeWorkspaceAccessControl(organizationId, workspaceId, identityId).then(() => {
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
 **identityId** | **String**| the User identifier | 

### Return type

null (empty response body)

### Authorization

[oAuth2AuthCode](../README.md#oAuth2AuthCode)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: Not defined


## setWorkspaceDefaultSecurity

> WorkspaceSecurity setWorkspaceDefaultSecurity(organizationId, workspaceId, workspaceRole)

Set the Workspace default security

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
let workspaceRole = new CosmotechApi.WorkspaceRole(); // WorkspaceRole | the new Workspace default security.
apiInstance.setWorkspaceDefaultSecurity(organizationId, workspaceId, workspaceRole).then((data) => {
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
 **workspaceRole** | [**WorkspaceRole**](WorkspaceRole.md)| the new Workspace default security. | 

### Return type

[**WorkspaceSecurity**](WorkspaceSecurity.md)

### Authorization

[oAuth2AuthCode](../README.md#oAuth2AuthCode)

### HTTP request headers

- **Content-Type**: application/json, application/yaml
- **Accept**: application/json


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
let workspace = new CosmotechApi.Workspace(); // Workspace | The new Workspace details.
apiInstance.updateWorkspace(organizationId, workspaceId, workspace).then((data) => {
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
 **workspace** | [**Workspace**](Workspace.md)| The new Workspace details. | 

### Return type

[**Workspace**](Workspace.md)

### Authorization

[oAuth2AuthCode](../README.md#oAuth2AuthCode)

### HTTP request headers

- **Content-Type**: application/json, application/yaml
- **Accept**: application/json


## updateWorkspaceAccessControl

> WorkspaceAccessControl updateWorkspaceAccessControl(organizationId, workspaceId, identityId, workspaceRole)

Update the specified access to User for a Workspace

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
let identityId = "identityId_example"; // String | the User identifier
let workspaceRole = new CosmotechApi.WorkspaceRole(); // WorkspaceRole | The new Workspace Access Control
apiInstance.updateWorkspaceAccessControl(organizationId, workspaceId, identityId, workspaceRole).then((data) => {
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
 **identityId** | **String**| the User identifier | 
 **workspaceRole** | [**WorkspaceRole**](WorkspaceRole.md)| The new Workspace Access Control | 

### Return type

[**WorkspaceAccessControl**](WorkspaceAccessControl.md)

### Authorization

[oAuth2AuthCode](../README.md#oAuth2AuthCode)

### HTTP request headers

- **Content-Type**: application/json
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
apiInstance.uploadWorkspaceFile(organizationId, workspaceId, file, opts).then((data) => {
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

