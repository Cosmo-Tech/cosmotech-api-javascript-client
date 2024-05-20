# CosmotechApi.OrganizationApi

All URIs are relative to *https://dev.api.cosmotech.com*

Method | HTTP request | Description
------------- | ------------- | -------------
[**addOrganizationAccessControl**](OrganizationApi.md#addOrganizationAccessControl) | **POST** /organizations/{organization_id}/security/access | Add a control access to the Organization
[**findAllOrganizations**](OrganizationApi.md#findAllOrganizations) | **GET** /organizations | List all Organizations
[**findOrganizationById**](OrganizationApi.md#findOrganizationById) | **GET** /organizations/{organization_id} | Get the details of an Organization
[**getAllPermissions**](OrganizationApi.md#getAllPermissions) | **GET** /organizations/permissions | Get all permissions per components
[**getOrganizationAccessControl**](OrganizationApi.md#getOrganizationAccessControl) | **GET** /organizations/{organization_id}/security/access/{identity_id} | Get a control access for the Organization
[**getOrganizationPermissions**](OrganizationApi.md#getOrganizationPermissions) | **GET** /organizations/{organization_id}/permissions/{role} | Get the Organization permissions by given role
[**getOrganizationSecurity**](OrganizationApi.md#getOrganizationSecurity) | **GET** /organizations/{organization_id}/security | Get the Organization security information
[**getOrganizationSecurityUsers**](OrganizationApi.md#getOrganizationSecurityUsers) | **GET** /organizations/{organization_id}/security/users | Get the Organization security users list
[**registerOrganization**](OrganizationApi.md#registerOrganization) | **POST** /organizations | Register a new organization
[**removeOrganizationAccessControl**](OrganizationApi.md#removeOrganizationAccessControl) | **DELETE** /organizations/{organization_id}/security/access/{identity_id} | Remove the specified access from the given Organization
[**setOrganizationDefaultSecurity**](OrganizationApi.md#setOrganizationDefaultSecurity) | **POST** /organizations/{organization_id}/security/default | Set the Organization default security
[**unregisterOrganization**](OrganizationApi.md#unregisterOrganization) | **DELETE** /organizations/{organization_id} | Unregister an organization
[**updateOrganization**](OrganizationApi.md#updateOrganization) | **PATCH** /organizations/{organization_id} | Update an Organization
[**updateOrganizationAccessControl**](OrganizationApi.md#updateOrganizationAccessControl) | **PATCH** /organizations/{organization_id}/security/access/{identity_id} | Update the specified access to User for an Organization



## addOrganizationAccessControl

> OrganizationAccessControl addOrganizationAccessControl(organizationId, organizationAccessControl)

Add a control access to the Organization

### Example

```javascript
import CosmotechApi from '@cosmotech/api';
let defaultClient = CosmotechApi.ApiClient.instance;
// Configure OAuth2 access token for authorization: oAuth2AuthCode
let oAuth2AuthCode = defaultClient.authentications['oAuth2AuthCode'];
oAuth2AuthCode.accessToken = 'YOUR ACCESS TOKEN';

let apiInstance = new CosmotechApi.OrganizationApi();
let organizationId = "organizationId_example"; // String | the Organization identifier
let organizationAccessControl = new CosmotechApi.OrganizationAccessControl(); // OrganizationAccessControl | the new Organization security access to add.
apiInstance.addOrganizationAccessControl(organizationId, organizationAccessControl).then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, (error) => {
  console.error(error);
});

```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **organizationId** | **String**| the Organization identifier | 
 **organizationAccessControl** | [**OrganizationAccessControl**](OrganizationAccessControl.md)| the new Organization security access to add. | 

### Return type

[**OrganizationAccessControl**](OrganizationAccessControl.md)

### Authorization

[oAuth2AuthCode](../README.md#oAuth2AuthCode)

### HTTP request headers

- **Content-Type**: application/json, application/yaml
- **Accept**: application/json


## findAllOrganizations

> [Organization] findAllOrganizations(opts)

List all Organizations

### Example

```javascript
import CosmotechApi from '@cosmotech/api';
let defaultClient = CosmotechApi.ApiClient.instance;
// Configure OAuth2 access token for authorization: oAuth2AuthCode
let oAuth2AuthCode = defaultClient.authentications['oAuth2AuthCode'];
oAuth2AuthCode.accessToken = 'YOUR ACCESS TOKEN';

let apiInstance = new CosmotechApi.OrganizationApi();
let opts = {
  'page': 56, // Number | page number to query
  'size': 56 // Number | amount of result by page
};
apiInstance.findAllOrganizations(opts).then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, (error) => {
  console.error(error);
});

```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **page** | **Number**| page number to query | [optional] 
 **size** | **Number**| amount of result by page | [optional] 

### Return type

[**[Organization]**](Organization.md)

### Authorization

[oAuth2AuthCode](../README.md#oAuth2AuthCode)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## findOrganizationById

> Organization findOrganizationById(organizationId)

Get the details of an Organization

### Example

```javascript
import CosmotechApi from '@cosmotech/api';
let defaultClient = CosmotechApi.ApiClient.instance;
// Configure OAuth2 access token for authorization: oAuth2AuthCode
let oAuth2AuthCode = defaultClient.authentications['oAuth2AuthCode'];
oAuth2AuthCode.accessToken = 'YOUR ACCESS TOKEN';

let apiInstance = new CosmotechApi.OrganizationApi();
let organizationId = "organizationId_example"; // String | the Organization identifier
apiInstance.findOrganizationById(organizationId).then((data) => {
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

[**Organization**](Organization.md)

### Authorization

[oAuth2AuthCode](../README.md#oAuth2AuthCode)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## getAllPermissions

> [ComponentRolePermissions] getAllPermissions()

Get all permissions per components

### Example

```javascript
import CosmotechApi from '@cosmotech/api';
let defaultClient = CosmotechApi.ApiClient.instance;
// Configure OAuth2 access token for authorization: oAuth2AuthCode
let oAuth2AuthCode = defaultClient.authentications['oAuth2AuthCode'];
oAuth2AuthCode.accessToken = 'YOUR ACCESS TOKEN';

let apiInstance = new CosmotechApi.OrganizationApi();
apiInstance.getAllPermissions().then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, (error) => {
  console.error(error);
});

```

### Parameters

This endpoint does not need any parameter.

### Return type

[**[ComponentRolePermissions]**](ComponentRolePermissions.md)

### Authorization

[oAuth2AuthCode](../README.md#oAuth2AuthCode)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## getOrganizationAccessControl

> OrganizationAccessControl getOrganizationAccessControl(organizationId, identityId)

Get a control access for the Organization

### Example

```javascript
import CosmotechApi from '@cosmotech/api';
let defaultClient = CosmotechApi.ApiClient.instance;
// Configure OAuth2 access token for authorization: oAuth2AuthCode
let oAuth2AuthCode = defaultClient.authentications['oAuth2AuthCode'];
oAuth2AuthCode.accessToken = 'YOUR ACCESS TOKEN';

let apiInstance = new CosmotechApi.OrganizationApi();
let organizationId = "organizationId_example"; // String | the Organization identifier
let identityId = "identityId_example"; // String | the User identifier
apiInstance.getOrganizationAccessControl(organizationId, identityId).then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, (error) => {
  console.error(error);
});

```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **organizationId** | **String**| the Organization identifier | 
 **identityId** | **String**| the User identifier | 

### Return type

[**OrganizationAccessControl**](OrganizationAccessControl.md)

### Authorization

[oAuth2AuthCode](../README.md#oAuth2AuthCode)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## getOrganizationPermissions

> [String] getOrganizationPermissions(organizationId, role)

Get the Organization permissions by given role

### Example

```javascript
import CosmotechApi from '@cosmotech/api';
let defaultClient = CosmotechApi.ApiClient.instance;
// Configure OAuth2 access token for authorization: oAuth2AuthCode
let oAuth2AuthCode = defaultClient.authentications['oAuth2AuthCode'];
oAuth2AuthCode.accessToken = 'YOUR ACCESS TOKEN';

let apiInstance = new CosmotechApi.OrganizationApi();
let organizationId = "organizationId_example"; // String | the Organization identifier
let role = "role_example"; // String | the Role
apiInstance.getOrganizationPermissions(organizationId, role).then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, (error) => {
  console.error(error);
});

```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **organizationId** | **String**| the Organization identifier | 
 **role** | **String**| the Role | 

### Return type

**[String]**

### Authorization

[oAuth2AuthCode](../README.md#oAuth2AuthCode)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## getOrganizationSecurity

> OrganizationSecurity getOrganizationSecurity(organizationId)

Get the Organization security information

### Example

```javascript
import CosmotechApi from '@cosmotech/api';
let defaultClient = CosmotechApi.ApiClient.instance;
// Configure OAuth2 access token for authorization: oAuth2AuthCode
let oAuth2AuthCode = defaultClient.authentications['oAuth2AuthCode'];
oAuth2AuthCode.accessToken = 'YOUR ACCESS TOKEN';

let apiInstance = new CosmotechApi.OrganizationApi();
let organizationId = "organizationId_example"; // String | the Organization identifier
apiInstance.getOrganizationSecurity(organizationId).then((data) => {
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

[**OrganizationSecurity**](OrganizationSecurity.md)

### Authorization

[oAuth2AuthCode](../README.md#oAuth2AuthCode)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## getOrganizationSecurityUsers

> [String] getOrganizationSecurityUsers(organizationId)

Get the Organization security users list

### Example

```javascript
import CosmotechApi from '@cosmotech/api';
let defaultClient = CosmotechApi.ApiClient.instance;
// Configure OAuth2 access token for authorization: oAuth2AuthCode
let oAuth2AuthCode = defaultClient.authentications['oAuth2AuthCode'];
oAuth2AuthCode.accessToken = 'YOUR ACCESS TOKEN';

let apiInstance = new CosmotechApi.OrganizationApi();
let organizationId = "organizationId_example"; // String | The Organization identifier
apiInstance.getOrganizationSecurityUsers(organizationId).then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, (error) => {
  console.error(error);
});

```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **organizationId** | **String**| The Organization identifier | 

### Return type

**[String]**

### Authorization

[oAuth2AuthCode](../README.md#oAuth2AuthCode)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## registerOrganization

> Organization registerOrganization(organization)

Register a new organization

### Example

```javascript
import CosmotechApi from '@cosmotech/api';
let defaultClient = CosmotechApi.ApiClient.instance;
// Configure OAuth2 access token for authorization: oAuth2AuthCode
let oAuth2AuthCode = defaultClient.authentications['oAuth2AuthCode'];
oAuth2AuthCode.accessToken = 'YOUR ACCESS TOKEN';

let apiInstance = new CosmotechApi.OrganizationApi();
let organization = new CosmotechApi.Organization(); // Organization | the Organization to register
apiInstance.registerOrganization(organization).then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, (error) => {
  console.error(error);
});

```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **organization** | [**Organization**](Organization.md)| the Organization to register | 

### Return type

[**Organization**](Organization.md)

### Authorization

[oAuth2AuthCode](../README.md#oAuth2AuthCode)

### HTTP request headers

- **Content-Type**: application/json, application/yaml
- **Accept**: application/json


## removeOrganizationAccessControl

> removeOrganizationAccessControl(organizationId, identityId)

Remove the specified access from the given Organization

### Example

```javascript
import CosmotechApi from '@cosmotech/api';
let defaultClient = CosmotechApi.ApiClient.instance;
// Configure OAuth2 access token for authorization: oAuth2AuthCode
let oAuth2AuthCode = defaultClient.authentications['oAuth2AuthCode'];
oAuth2AuthCode.accessToken = 'YOUR ACCESS TOKEN';

let apiInstance = new CosmotechApi.OrganizationApi();
let organizationId = "organizationId_example"; // String | the Organization identifier
let identityId = "identityId_example"; // String | the User identifier
apiInstance.removeOrganizationAccessControl(organizationId, identityId).then(() => {
  console.log('API called successfully.');
}, (error) => {
  console.error(error);
});

```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **organizationId** | **String**| the Organization identifier | 
 **identityId** | **String**| the User identifier | 

### Return type

null (empty response body)

### Authorization

[oAuth2AuthCode](../README.md#oAuth2AuthCode)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: Not defined


## setOrganizationDefaultSecurity

> OrganizationSecurity setOrganizationDefaultSecurity(organizationId, organizationRole)

Set the Organization default security

### Example

```javascript
import CosmotechApi from '@cosmotech/api';
let defaultClient = CosmotechApi.ApiClient.instance;
// Configure OAuth2 access token for authorization: oAuth2AuthCode
let oAuth2AuthCode = defaultClient.authentications['oAuth2AuthCode'];
oAuth2AuthCode.accessToken = 'YOUR ACCESS TOKEN';

let apiInstance = new CosmotechApi.OrganizationApi();
let organizationId = "organizationId_example"; // String | the Organization identifier
let organizationRole = new CosmotechApi.OrganizationRole(); // OrganizationRole | This change the organization default security. The default security is the role assigned to any person not on the Access Control List. If the default security is None, then nobody outside of the ACL can access the organization.
apiInstance.setOrganizationDefaultSecurity(organizationId, organizationRole).then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, (error) => {
  console.error(error);
});

```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **organizationId** | **String**| the Organization identifier | 
 **organizationRole** | [**OrganizationRole**](OrganizationRole.md)| This change the organization default security. The default security is the role assigned to any person not on the Access Control List. If the default security is None, then nobody outside of the ACL can access the organization. | 

### Return type

[**OrganizationSecurity**](OrganizationSecurity.md)

### Authorization

[oAuth2AuthCode](../README.md#oAuth2AuthCode)

### HTTP request headers

- **Content-Type**: application/json, application/yaml
- **Accept**: application/json


## unregisterOrganization

> unregisterOrganization(organizationId)

Unregister an organization

### Example

```javascript
import CosmotechApi from '@cosmotech/api';
let defaultClient = CosmotechApi.ApiClient.instance;
// Configure OAuth2 access token for authorization: oAuth2AuthCode
let oAuth2AuthCode = defaultClient.authentications['oAuth2AuthCode'];
oAuth2AuthCode.accessToken = 'YOUR ACCESS TOKEN';

let apiInstance = new CosmotechApi.OrganizationApi();
let organizationId = "organizationId_example"; // String | the Organization identifier
apiInstance.unregisterOrganization(organizationId).then(() => {
  console.log('API called successfully.');
}, (error) => {
  console.error(error);
});

```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **organizationId** | **String**| the Organization identifier | 

### Return type

null (empty response body)

### Authorization

[oAuth2AuthCode](../README.md#oAuth2AuthCode)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: Not defined


## updateOrganization

> Organization updateOrganization(organizationId, organization)

Update an Organization

### Example

```javascript
import CosmotechApi from '@cosmotech/api';
let defaultClient = CosmotechApi.ApiClient.instance;
// Configure OAuth2 access token for authorization: oAuth2AuthCode
let oAuth2AuthCode = defaultClient.authentications['oAuth2AuthCode'];
oAuth2AuthCode.accessToken = 'YOUR ACCESS TOKEN';

let apiInstance = new CosmotechApi.OrganizationApi();
let organizationId = "organizationId_example"; // String | the Organization identifier
let organization = {"name":"CosmoTech Digital Twins Engine"}; // Organization | the new Organization details. This endpoint can't be used to update security
apiInstance.updateOrganization(organizationId, organization).then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, (error) => {
  console.error(error);
});

```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **organizationId** | **String**| the Organization identifier | 
 **organization** | [**Organization**](Organization.md)| the new Organization details. This endpoint can&#39;t be used to update security | 

### Return type

[**Organization**](Organization.md)

### Authorization

[oAuth2AuthCode](../README.md#oAuth2AuthCode)

### HTTP request headers

- **Content-Type**: application/json, application/yaml
- **Accept**: application/json


## updateOrganizationAccessControl

> OrganizationAccessControl updateOrganizationAccessControl(organizationId, identityId, organizationRole)

Update the specified access to User for an Organization

### Example

```javascript
import CosmotechApi from '@cosmotech/api';
let defaultClient = CosmotechApi.ApiClient.instance;
// Configure OAuth2 access token for authorization: oAuth2AuthCode
let oAuth2AuthCode = defaultClient.authentications['oAuth2AuthCode'];
oAuth2AuthCode.accessToken = 'YOUR ACCESS TOKEN';

let apiInstance = new CosmotechApi.OrganizationApi();
let organizationId = "organizationId_example"; // String | the Organization identifier
let identityId = "identityId_example"; // String | the User identifier
let organizationRole = new CosmotechApi.OrganizationRole(); // OrganizationRole | The new Organization Access Control
apiInstance.updateOrganizationAccessControl(organizationId, identityId, organizationRole).then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, (error) => {
  console.error(error);
});

```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **organizationId** | **String**| the Organization identifier | 
 **identityId** | **String**| the User identifier | 
 **organizationRole** | [**OrganizationRole**](OrganizationRole.md)| The new Organization Access Control | 

### Return type

[**OrganizationAccessControl**](OrganizationAccessControl.md)

### Authorization

[oAuth2AuthCode](../README.md#oAuth2AuthCode)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json

