# CosmotechApi.OrganizationApi

All URIs are relative to *https://dev.api.cosmotech.com*

Method | HTTP request | Description
------------- | ------------- | -------------
[**addOrReplaceUsersInOrganization**](OrganizationApi.md#addOrReplaceUsersInOrganization) | **POST** /organizations/{organization_id}/users | Add (or replace) users in the Organization specified
[**findAllOrganizations**](OrganizationApi.md#findAllOrganizations) | **GET** /organizations | List all Organizations
[**findOrganizationById**](OrganizationApi.md#findOrganizationById) | **GET** /organizations/{organization_id} | Get the details of an Organization
[**registerOrganization**](OrganizationApi.md#registerOrganization) | **POST** /organizations | Register a new organization
[**removeAllUsersInOrganization**](OrganizationApi.md#removeAllUsersInOrganization) | **DELETE** /organizations/{organization_id}/users | Remove all users from the Organization specified
[**removeUserFromOrganization**](OrganizationApi.md#removeUserFromOrganization) | **DELETE** /organizations/{organization_id}/users/{user_id} | Remove the specified user from the given Organization
[**unregisterOrganization**](OrganizationApi.md#unregisterOrganization) | **DELETE** /organizations/{organization_id} | Unregister an organization
[**updateOrganization**](OrganizationApi.md#updateOrganization) | **PATCH** /organizations/{organization_id} | Update an Organization
[**updateSolutionsContainerRegistryByOrganizationId**](OrganizationApi.md#updateSolutionsContainerRegistryByOrganizationId) | **PATCH** /organizations/{organization_id}/services/solutionsContainerRegistry | Update the solutions container registry configuration for the Organization specified
[**updateStorageByOrganizationId**](OrganizationApi.md#updateStorageByOrganizationId) | **PATCH** /organizations/{organization_id}/services/storage | Update storage configuration for the Organization specified
[**updateTenantCredentialsByOrganizationId**](OrganizationApi.md#updateTenantCredentialsByOrganizationId) | **PATCH** /organizations/{organization_id}/services/tenantCredentials | Update tenant credentials for the Organization specified



## addOrReplaceUsersInOrganization

> [OrganizationUser] addOrReplaceUsersInOrganization(organizationId, organizationUser)

Add (or replace) users in the Organization specified

### Example

```javascript
import CosmotechApi from '@cosmotech/api';
let defaultClient = CosmotechApi.ApiClient.instance;
// Configure OAuth2 access token for authorization: oAuth2AuthCode
let oAuth2AuthCode = defaultClient.authentications['oAuth2AuthCode'];
oAuth2AuthCode.accessToken = 'YOUR ACCESS TOKEN';

let apiInstance = new CosmotechApi.OrganizationApi();
let organizationId = "organizationId_example"; // String | the Organization identifier
let organizationUser = [{"id":"2","roles":["User"]},{"id":"3","roles":["Developer"]}]; // [OrganizationUser] | the Users to add. Any User with the same ID is overwritten
apiInstance.addOrReplaceUsersInOrganization(organizationId, organizationUser).then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, (error) => {
  console.error(error);
});

```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **organizationId** | **String**| the Organization identifier | 
 **organizationUser** | [**[OrganizationUser]**](OrganizationUser.md)| the Users to add. Any User with the same ID is overwritten | 

### Return type

[**[OrganizationUser]**](OrganizationUser.md)

### Authorization

[oAuth2AuthCode](../README.md#oAuth2AuthCode)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json


## findAllOrganizations

> [Organization] findAllOrganizations()

List all Organizations

### Example

```javascript
import CosmotechApi from '@cosmotech/api';
let defaultClient = CosmotechApi.ApiClient.instance;
// Configure OAuth2 access token for authorization: oAuth2AuthCode
let oAuth2AuthCode = defaultClient.authentications['oAuth2AuthCode'];
oAuth2AuthCode.accessToken = 'YOUR ACCESS TOKEN';

let apiInstance = new CosmotechApi.OrganizationApi();
apiInstance.findAllOrganizations().then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, (error) => {
  console.error(error);
});

```

### Parameters

This endpoint does not need any parameter.

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


## removeAllUsersInOrganization

> removeAllUsersInOrganization(organizationId)

Remove all users from the Organization specified

### Example

```javascript
import CosmotechApi from '@cosmotech/api';
let defaultClient = CosmotechApi.ApiClient.instance;
// Configure OAuth2 access token for authorization: oAuth2AuthCode
let oAuth2AuthCode = defaultClient.authentications['oAuth2AuthCode'];
oAuth2AuthCode.accessToken = 'YOUR ACCESS TOKEN';

let apiInstance = new CosmotechApi.OrganizationApi();
let organizationId = "organizationId_example"; // String | the Organization identifier
apiInstance.removeAllUsersInOrganization(organizationId).then(() => {
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


## removeUserFromOrganization

> removeUserFromOrganization(organizationId, userId)

Remove the specified user from the given Organization

### Example

```javascript
import CosmotechApi from '@cosmotech/api';
let defaultClient = CosmotechApi.ApiClient.instance;
// Configure OAuth2 access token for authorization: oAuth2AuthCode
let oAuth2AuthCode = defaultClient.authentications['oAuth2AuthCode'];
oAuth2AuthCode.accessToken = 'YOUR ACCESS TOKEN';

let apiInstance = new CosmotechApi.OrganizationApi();
let organizationId = "organizationId_example"; // String | the Organization identifier
let userId = "userId_example"; // String | the User identifier
apiInstance.removeUserFromOrganization(organizationId, userId).then(() => {
  console.log('API called successfully.');
}, (error) => {
  console.error(error);
});

```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **organizationId** | **String**| the Organization identifier | 
 **userId** | **String**| the User identifier | 

### Return type

null (empty response body)

### Authorization

[oAuth2AuthCode](../README.md#oAuth2AuthCode)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: Not defined


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
let organization = {"name":"CosmoTech Digital Twins Engine"}; // Organization | the new Organization details
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
 **organization** | [**Organization**](Organization.md)| the new Organization details | 

### Return type

[**Organization**](Organization.md)

### Authorization

[oAuth2AuthCode](../README.md#oAuth2AuthCode)

### HTTP request headers

- **Content-Type**: application/json, application/yaml
- **Accept**: application/json


## updateSolutionsContainerRegistryByOrganizationId

> OrganizationService updateSolutionsContainerRegistryByOrganizationId(organizationId, organizationService)

Update the solutions container registry configuration for the Organization specified

### Example

```javascript
import CosmotechApi from '@cosmotech/api';
let defaultClient = CosmotechApi.ApiClient.instance;
// Configure OAuth2 access token for authorization: oAuth2AuthCode
let oAuth2AuthCode = defaultClient.authentications['oAuth2AuthCode'];
oAuth2AuthCode.accessToken = 'YOUR ACCESS TOKEN';

let apiInstance = new CosmotechApi.OrganizationApi();
let organizationId = "organizationId_example"; // String | the Organization identifier
let organizationService = {"baseUri":"mysolutiontwinengines.azurecr.io"}; // OrganizationService | the new solutions container registry configuration to use
apiInstance.updateSolutionsContainerRegistryByOrganizationId(organizationId, organizationService).then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, (error) => {
  console.error(error);
});

```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **organizationId** | **String**| the Organization identifier | 
 **organizationService** | [**OrganizationService**](OrganizationService.md)| the new solutions container registry configuration to use | 

### Return type

[**OrganizationService**](OrganizationService.md)

### Authorization

[oAuth2AuthCode](../README.md#oAuth2AuthCode)

### HTTP request headers

- **Content-Type**: application/json, application/yaml
- **Accept**: application/json


## updateStorageByOrganizationId

> OrganizationService updateStorageByOrganizationId(organizationId, organizationService)

Update storage configuration for the Organization specified

### Example

```javascript
import CosmotechApi from '@cosmotech/api';
let defaultClient = CosmotechApi.ApiClient.instance;
// Configure OAuth2 access token for authorization: oAuth2AuthCode
let oAuth2AuthCode = defaultClient.authentications['oAuth2AuthCode'];
oAuth2AuthCode.accessToken = 'YOUR ACCESS TOKEN';

let apiInstance = new CosmotechApi.OrganizationApi();
let organizationId = "organizationId_example"; // String | the Organization identifier
let organizationService = {"baseUri":"https://csmphoenixcontainer.blob.core.windows.net"}; // OrganizationService | the new Storage configuration to use
apiInstance.updateStorageByOrganizationId(organizationId, organizationService).then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, (error) => {
  console.error(error);
});

```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **organizationId** | **String**| the Organization identifier | 
 **organizationService** | [**OrganizationService**](OrganizationService.md)| the new Storage configuration to use | 

### Return type

[**OrganizationService**](OrganizationService.md)

### Authorization

[oAuth2AuthCode](../README.md#oAuth2AuthCode)

### HTTP request headers

- **Content-Type**: application/json, application/yaml
- **Accept**: application/json


## updateTenantCredentialsByOrganizationId

> {String: Object} updateTenantCredentialsByOrganizationId(organizationId, requestBody)

Update tenant credentials for the Organization specified

### Example

```javascript
import CosmotechApi from '@cosmotech/api';
let defaultClient = CosmotechApi.ApiClient.instance;
// Configure OAuth2 access token for authorization: oAuth2AuthCode
let oAuth2AuthCode = defaultClient.authentications['oAuth2AuthCode'];
oAuth2AuthCode.accessToken = 'YOUR ACCESS TOKEN';

let apiInstance = new CosmotechApi.OrganizationApi();
let organizationId = "organizationId_example"; // String | the Organization identifier
let requestBody = {"azureTenantId":"<my_azure_tenant_id>","azureClientId":"<my_azure_client_id>","azureClientSecret":"<my_azure_client_secret>"}; // {String: Object} | the new Tenant Credentials to use
apiInstance.updateTenantCredentialsByOrganizationId(organizationId, requestBody).then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, (error) => {
  console.error(error);
});

```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **organizationId** | **String**| the Organization identifier | 
 **requestBody** | [**{String: Object}**](Object.md)| the new Tenant Credentials to use | 

### Return type

**{String: Object}**

### Authorization

[oAuth2AuthCode](../README.md#oAuth2AuthCode)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json

