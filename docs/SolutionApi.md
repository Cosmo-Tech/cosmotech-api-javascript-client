# CosmotechApi.SolutionApi

All URIs are relative to *https://dev.api.cosmotech.com*

Method | HTTP request | Description
------------- | ------------- | -------------
[**addOrReplaceParameterGroups**](SolutionApi.md#addOrReplaceParameterGroups) | **POST** /organizations/{organization_id}/solutions/{solution_id}/parameterGroups | Add Parameter Groups. Any item with the same ID will be overwritten
[**addOrReplaceParameters**](SolutionApi.md#addOrReplaceParameters) | **POST** /organizations/{organization_id}/solutions/{solution_id}/parameters | Add Parameters. Any item with the same ID will be overwritten
[**addOrReplaceRunTemplates**](SolutionApi.md#addOrReplaceRunTemplates) | **POST** /organizations/{organization_id}/solutions/{solution_id}/runTemplates | Add Run Templates. Any item with the same ID will be overwritten
[**addSolutionAccessControl**](SolutionApi.md#addSolutionAccessControl) | **POST** /organizations/{organization_id}/solutions/{solution_id}/security/access | Add a control access to the Solution
[**createSolution**](SolutionApi.md#createSolution) | **POST** /organizations/{organization_id}/solutions | Register a new solution
[**deleteSolution**](SolutionApi.md#deleteSolution) | **DELETE** /organizations/{organization_id}/solutions/{solution_id} | Delete a solution
[**deleteSolutionRunTemplate**](SolutionApi.md#deleteSolutionRunTemplate) | **DELETE** /organizations/{organization_id}/solutions/{solution_id}/runTemplates/{run_template_id} | Remove the specified Solution Run Template
[**downloadRunTemplateHandler**](SolutionApi.md#downloadRunTemplateHandler) | **GET** /organizations/{organization_id}/solutions/{solution_id}/runtemplates/{run_template_id}/handlers/{handler_id}/download | Download a Run Template step handler zip file
[**findAllSolutions**](SolutionApi.md#findAllSolutions) | **GET** /organizations/{organization_id}/solutions | List all Solutions
[**findSolutionById**](SolutionApi.md#findSolutionById) | **GET** /organizations/{organization_id}/solutions/{solution_id} | Get the details of a solution
[**getSolutionAccessControl**](SolutionApi.md#getSolutionAccessControl) | **GET** /organizations/{organization_id}/solutions/{solution_id}/security/access/{identity_id} | Get a control access for the Solution
[**getSolutionSecurity**](SolutionApi.md#getSolutionSecurity) | **GET** /organizations/{organization_id}/solutions/{solution_id}/security | Get the Solution security information
[**getSolutionSecurityUsers**](SolutionApi.md#getSolutionSecurityUsers) | **GET** /organizations/{organization_id}/solutions/{solution_id}/security/users | Get the Solution security users list
[**removeAllRunTemplates**](SolutionApi.md#removeAllRunTemplates) | **DELETE** /organizations/{organization_id}/solutions/{solution_id}/runTemplates | Remove all Run Templates from the Solution specified
[**removeAllSolutionParameterGroups**](SolutionApi.md#removeAllSolutionParameterGroups) | **DELETE** /organizations/{organization_id}/solutions/{solution_id}/parameterGroups | Remove all Parameter Groups from the Solution specified
[**removeAllSolutionParameters**](SolutionApi.md#removeAllSolutionParameters) | **DELETE** /organizations/{organization_id}/solutions/{solution_id}/parameters | Remove all Parameters from the Solution specified
[**removeSolutionAccessControl**](SolutionApi.md#removeSolutionAccessControl) | **DELETE** /organizations/{organization_id}/solutions/{solution_id}/security/access/{identity_id} | Remove the specified access from the given Organization Solution
[**setSolutionDefaultSecurity**](SolutionApi.md#setSolutionDefaultSecurity) | **POST** /organizations/{organization_id}/solutions/{solution_id}/security/default | Set the Solution default security
[**updateSolution**](SolutionApi.md#updateSolution) | **PATCH** /organizations/{organization_id}/solutions/{solution_id} | Update a solution
[**updateSolutionAccessControl**](SolutionApi.md#updateSolutionAccessControl) | **PATCH** /organizations/{organization_id}/solutions/{solution_id}/security/access/{identity_id} | Update the specified access to User for a Solution
[**updateSolutionRunTemplate**](SolutionApi.md#updateSolutionRunTemplate) | **PATCH** /organizations/{organization_id}/solutions/{solution_id}/runTemplates/{run_template_id} | Update the specified Solution Run Template
[**uploadRunTemplateHandler**](SolutionApi.md#uploadRunTemplateHandler) | **POST** /organizations/{organization_id}/solutions/{solution_id}/runtemplates/{run_template_id}/handlers/{handler_id}/upload | Upload a Run Template step handler zip file



## addOrReplaceParameterGroups

> [RunTemplateParameterGroup] addOrReplaceParameterGroups(organizationId, solutionId, runTemplateParameterGroup)

Add Parameter Groups. Any item with the same ID will be overwritten

### Example

```javascript
import CosmotechApi from '@cosmotech/api';
let defaultClient = CosmotechApi.ApiClient.instance;
// Configure OAuth2 access token for authorization: oAuth2AuthCode
let oAuth2AuthCode = defaultClient.authentications['oAuth2AuthCode'];
oAuth2AuthCode.accessToken = 'YOUR ACCESS TOKEN';

let apiInstance = new CosmotechApi.SolutionApi();
let organizationId = "organizationId_example"; // String | the Organization identifier
let solutionId = "solutionId_example"; // String | the Solution identifier
let runTemplateParameterGroup = [new CosmotechApi.RunTemplateParameterGroup()]; // [RunTemplateParameterGroup] | the Parameter Groups
apiInstance.addOrReplaceParameterGroups(organizationId, solutionId, runTemplateParameterGroup).then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, (error) => {
  console.error(error);
});

```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **organizationId** | **String**| the Organization identifier | 
 **solutionId** | **String**| the Solution identifier | 
 **runTemplateParameterGroup** | [**[RunTemplateParameterGroup]**](RunTemplateParameterGroup.md)| the Parameter Groups | 

### Return type

[**[RunTemplateParameterGroup]**](RunTemplateParameterGroup.md)

### Authorization

[oAuth2AuthCode](../README.md#oAuth2AuthCode)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json


## addOrReplaceParameters

> [RunTemplateParameter] addOrReplaceParameters(organizationId, solutionId, runTemplateParameter)

Add Parameters. Any item with the same ID will be overwritten

### Example

```javascript
import CosmotechApi from '@cosmotech/api';
let defaultClient = CosmotechApi.ApiClient.instance;
// Configure OAuth2 access token for authorization: oAuth2AuthCode
let oAuth2AuthCode = defaultClient.authentications['oAuth2AuthCode'];
oAuth2AuthCode.accessToken = 'YOUR ACCESS TOKEN';

let apiInstance = new CosmotechApi.SolutionApi();
let organizationId = "organizationId_example"; // String | the Organization identifier
let solutionId = "solutionId_example"; // String | the Solution identifier
let runTemplateParameter = [new CosmotechApi.RunTemplateParameter()]; // [RunTemplateParameter] | the Parameters
apiInstance.addOrReplaceParameters(organizationId, solutionId, runTemplateParameter).then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, (error) => {
  console.error(error);
});

```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **organizationId** | **String**| the Organization identifier | 
 **solutionId** | **String**| the Solution identifier | 
 **runTemplateParameter** | [**[RunTemplateParameter]**](RunTemplateParameter.md)| the Parameters | 

### Return type

[**[RunTemplateParameter]**](RunTemplateParameter.md)

### Authorization

[oAuth2AuthCode](../README.md#oAuth2AuthCode)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json


## addOrReplaceRunTemplates

> [RunTemplate] addOrReplaceRunTemplates(organizationId, solutionId, runTemplate)

Add Run Templates. Any item with the same ID will be overwritten

### Example

```javascript
import CosmotechApi from '@cosmotech/api';
let defaultClient = CosmotechApi.ApiClient.instance;
// Configure OAuth2 access token for authorization: oAuth2AuthCode
let oAuth2AuthCode = defaultClient.authentications['oAuth2AuthCode'];
oAuth2AuthCode.accessToken = 'YOUR ACCESS TOKEN';

let apiInstance = new CosmotechApi.SolutionApi();
let organizationId = "organizationId_example"; // String | the Organization identifier
let solutionId = "solutionId_example"; // String | the Solution identifier
let runTemplate = [new CosmotechApi.RunTemplate()]; // [RunTemplate] | the Run Templates
apiInstance.addOrReplaceRunTemplates(organizationId, solutionId, runTemplate).then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, (error) => {
  console.error(error);
});

```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **organizationId** | **String**| the Organization identifier | 
 **solutionId** | **String**| the Solution identifier | 
 **runTemplate** | [**[RunTemplate]**](RunTemplate.md)| the Run Templates | 

### Return type

[**[RunTemplate]**](RunTemplate.md)

### Authorization

[oAuth2AuthCode](../README.md#oAuth2AuthCode)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json


## addSolutionAccessControl

> SolutionAccessControl addSolutionAccessControl(organizationId, solutionId, solutionAccessControl)

Add a control access to the Solution

### Example

```javascript
import CosmotechApi from '@cosmotech/api';
let defaultClient = CosmotechApi.ApiClient.instance;
// Configure OAuth2 access token for authorization: oAuth2AuthCode
let oAuth2AuthCode = defaultClient.authentications['oAuth2AuthCode'];
oAuth2AuthCode.accessToken = 'YOUR ACCESS TOKEN';

let apiInstance = new CosmotechApi.SolutionApi();
let organizationId = "organizationId_example"; // String | the Organization identifier
let solutionId = "solutionId_example"; // String | the Solution identifier
let solutionAccessControl = new CosmotechApi.SolutionAccessControl(); // SolutionAccessControl | the new Solution security access to add.
apiInstance.addSolutionAccessControl(organizationId, solutionId, solutionAccessControl).then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, (error) => {
  console.error(error);
});

```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **organizationId** | **String**| the Organization identifier | 
 **solutionId** | **String**| the Solution identifier | 
 **solutionAccessControl** | [**SolutionAccessControl**](SolutionAccessControl.md)| the new Solution security access to add. | 

### Return type

[**SolutionAccessControl**](SolutionAccessControl.md)

### Authorization

[oAuth2AuthCode](../README.md#oAuth2AuthCode)

### HTTP request headers

- **Content-Type**: application/json, application/yaml
- **Accept**: application/json


## createSolution

> Solution createSolution(organizationId, solution)

Register a new solution

### Example

```javascript
import CosmotechApi from '@cosmotech/api';
let defaultClient = CosmotechApi.ApiClient.instance;
// Configure OAuth2 access token for authorization: oAuth2AuthCode
let oAuth2AuthCode = defaultClient.authentications['oAuth2AuthCode'];
oAuth2AuthCode.accessToken = 'YOUR ACCESS TOKEN';

let apiInstance = new CosmotechApi.SolutionApi();
let organizationId = "organizationId_example"; // String | the Organization identifier
let solution = new CosmotechApi.Solution(); // Solution | the Solution to create
apiInstance.createSolution(organizationId, solution).then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, (error) => {
  console.error(error);
});

```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **organizationId** | **String**| the Organization identifier | 
 **solution** | [**Solution**](Solution.md)| the Solution to create | 

### Return type

[**Solution**](Solution.md)

### Authorization

[oAuth2AuthCode](../README.md#oAuth2AuthCode)

### HTTP request headers

- **Content-Type**: application/json, application/yaml
- **Accept**: application/json


## deleteSolution

> deleteSolution(organizationId, solutionId)

Delete a solution

### Example

```javascript
import CosmotechApi from '@cosmotech/api';
let defaultClient = CosmotechApi.ApiClient.instance;
// Configure OAuth2 access token for authorization: oAuth2AuthCode
let oAuth2AuthCode = defaultClient.authentications['oAuth2AuthCode'];
oAuth2AuthCode.accessToken = 'YOUR ACCESS TOKEN';

let apiInstance = new CosmotechApi.SolutionApi();
let organizationId = "organizationId_example"; // String | the Organization identifier
let solutionId = "solutionId_example"; // String | the Solution identifier
apiInstance.deleteSolution(organizationId, solutionId).then(() => {
  console.log('API called successfully.');
}, (error) => {
  console.error(error);
});

```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **organizationId** | **String**| the Organization identifier | 
 **solutionId** | **String**| the Solution identifier | 

### Return type

null (empty response body)

### Authorization

[oAuth2AuthCode](../README.md#oAuth2AuthCode)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: Not defined


## deleteSolutionRunTemplate

> deleteSolutionRunTemplate(organizationId, solutionId, runTemplateId)

Remove the specified Solution Run Template

### Example

```javascript
import CosmotechApi from '@cosmotech/api';
let defaultClient = CosmotechApi.ApiClient.instance;
// Configure OAuth2 access token for authorization: oAuth2AuthCode
let oAuth2AuthCode = defaultClient.authentications['oAuth2AuthCode'];
oAuth2AuthCode.accessToken = 'YOUR ACCESS TOKEN';

let apiInstance = new CosmotechApi.SolutionApi();
let organizationId = "organizationId_example"; // String | the Organization identifier
let solutionId = "solutionId_example"; // String | the Solution identifier
let runTemplateId = "runTemplateId_example"; // String | the Run Template identifier
apiInstance.deleteSolutionRunTemplate(organizationId, solutionId, runTemplateId).then(() => {
  console.log('API called successfully.');
}, (error) => {
  console.error(error);
});

```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **organizationId** | **String**| the Organization identifier | 
 **solutionId** | **String**| the Solution identifier | 
 **runTemplateId** | **String**| the Run Template identifier | 

### Return type

null (empty response body)

### Authorization

[oAuth2AuthCode](../README.md#oAuth2AuthCode)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: Not defined


## downloadRunTemplateHandler

> Blob downloadRunTemplateHandler(organizationId, solutionId, runTemplateId, handlerId)

Download a Run Template step handler zip file

### Example

```javascript
import CosmotechApi from '@cosmotech/api';
let defaultClient = CosmotechApi.ApiClient.instance;
// Configure OAuth2 access token for authorization: oAuth2AuthCode
let oAuth2AuthCode = defaultClient.authentications['oAuth2AuthCode'];
oAuth2AuthCode.accessToken = 'YOUR ACCESS TOKEN';

let apiInstance = new CosmotechApi.SolutionApi();
let organizationId = "organizationId_example"; // String | the Organization identifier
let solutionId = "solutionId_example"; // String | the Solution identifier
let runTemplateId = "runTemplateId_example"; // String | the Run Template identifier
let handlerId = new CosmotechApi.RunTemplateHandlerId(); // RunTemplateHandlerId | the Handler identifier
apiInstance.downloadRunTemplateHandler(organizationId, solutionId, runTemplateId, handlerId).then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, (error) => {
  console.error(error);
});

```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **organizationId** | **String**| the Organization identifier | 
 **solutionId** | **String**| the Solution identifier | 
 **runTemplateId** | **String**| the Run Template identifier | 
 **handlerId** | [**RunTemplateHandlerId**](.md)| the Handler identifier | 

### Return type

**Blob**

### Authorization

[oAuth2AuthCode](../README.md#oAuth2AuthCode)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/octet-stream


## findAllSolutions

> [Solution] findAllSolutions(organizationId, opts)

List all Solutions

### Example

```javascript
import CosmotechApi from '@cosmotech/api';
let defaultClient = CosmotechApi.ApiClient.instance;
// Configure OAuth2 access token for authorization: oAuth2AuthCode
let oAuth2AuthCode = defaultClient.authentications['oAuth2AuthCode'];
oAuth2AuthCode.accessToken = 'YOUR ACCESS TOKEN';

let apiInstance = new CosmotechApi.SolutionApi();
let organizationId = "organizationId_example"; // String | the Organization identifier
let opts = {
  'page': 56, // Number | page number to query
  'size': 56 // Number | amount of result by page
};
apiInstance.findAllSolutions(organizationId, opts).then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, (error) => {
  console.error(error);
});

```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **organizationId** | **String**| the Organization identifier | 
 **page** | **Number**| page number to query | [optional] 
 **size** | **Number**| amount of result by page | [optional] 

### Return type

[**[Solution]**](Solution.md)

### Authorization

[oAuth2AuthCode](../README.md#oAuth2AuthCode)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## findSolutionById

> Solution findSolutionById(organizationId, solutionId)

Get the details of a solution

### Example

```javascript
import CosmotechApi from '@cosmotech/api';
let defaultClient = CosmotechApi.ApiClient.instance;
// Configure OAuth2 access token for authorization: oAuth2AuthCode
let oAuth2AuthCode = defaultClient.authentications['oAuth2AuthCode'];
oAuth2AuthCode.accessToken = 'YOUR ACCESS TOKEN';

let apiInstance = new CosmotechApi.SolutionApi();
let organizationId = "organizationId_example"; // String | the Organization identifier
let solutionId = "solutionId_example"; // String | the Solution identifier
apiInstance.findSolutionById(organizationId, solutionId).then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, (error) => {
  console.error(error);
});

```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **organizationId** | **String**| the Organization identifier | 
 **solutionId** | **String**| the Solution identifier | 

### Return type

[**Solution**](Solution.md)

### Authorization

[oAuth2AuthCode](../README.md#oAuth2AuthCode)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## getSolutionAccessControl

> SolutionAccessControl getSolutionAccessControl(organizationId, solutionId, identityId)

Get a control access for the Solution

### Example

```javascript
import CosmotechApi from '@cosmotech/api';
let defaultClient = CosmotechApi.ApiClient.instance;
// Configure OAuth2 access token for authorization: oAuth2AuthCode
let oAuth2AuthCode = defaultClient.authentications['oAuth2AuthCode'];
oAuth2AuthCode.accessToken = 'YOUR ACCESS TOKEN';

let apiInstance = new CosmotechApi.SolutionApi();
let organizationId = "organizationId_example"; // String | the Organization identifier
let solutionId = "solutionId_example"; // String | the Solution identifier
let identityId = "identityId_example"; // String | the User identifier
apiInstance.getSolutionAccessControl(organizationId, solutionId, identityId).then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, (error) => {
  console.error(error);
});

```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **organizationId** | **String**| the Organization identifier | 
 **solutionId** | **String**| the Solution identifier | 
 **identityId** | **String**| the User identifier | 

### Return type

[**SolutionAccessControl**](SolutionAccessControl.md)

### Authorization

[oAuth2AuthCode](../README.md#oAuth2AuthCode)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## getSolutionSecurity

> SolutionSecurity getSolutionSecurity(organizationId, solutionId)

Get the Solution security information

### Example

```javascript
import CosmotechApi from '@cosmotech/api';
let defaultClient = CosmotechApi.ApiClient.instance;
// Configure OAuth2 access token for authorization: oAuth2AuthCode
let oAuth2AuthCode = defaultClient.authentications['oAuth2AuthCode'];
oAuth2AuthCode.accessToken = 'YOUR ACCESS TOKEN';

let apiInstance = new CosmotechApi.SolutionApi();
let organizationId = "organizationId_example"; // String | the Organization identifier
let solutionId = "solutionId_example"; // String | the Solution identifier
apiInstance.getSolutionSecurity(organizationId, solutionId).then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, (error) => {
  console.error(error);
});

```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **organizationId** | **String**| the Organization identifier | 
 **solutionId** | **String**| the Solution identifier | 

### Return type

[**SolutionSecurity**](SolutionSecurity.md)

### Authorization

[oAuth2AuthCode](../README.md#oAuth2AuthCode)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## getSolutionSecurityUsers

> [String] getSolutionSecurityUsers(organizationId, solutionId)

Get the Solution security users list

### Example

```javascript
import CosmotechApi from '@cosmotech/api';
let defaultClient = CosmotechApi.ApiClient.instance;
// Configure OAuth2 access token for authorization: oAuth2AuthCode
let oAuth2AuthCode = defaultClient.authentications['oAuth2AuthCode'];
oAuth2AuthCode.accessToken = 'YOUR ACCESS TOKEN';

let apiInstance = new CosmotechApi.SolutionApi();
let organizationId = "organizationId_example"; // String | the Organization identifier
let solutionId = "solutionId_example"; // String | the Solution identifier
apiInstance.getSolutionSecurityUsers(organizationId, solutionId).then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, (error) => {
  console.error(error);
});

```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **organizationId** | **String**| the Organization identifier | 
 **solutionId** | **String**| the Solution identifier | 

### Return type

**[String]**

### Authorization

[oAuth2AuthCode](../README.md#oAuth2AuthCode)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## removeAllRunTemplates

> removeAllRunTemplates(organizationId, solutionId)

Remove all Run Templates from the Solution specified

### Example

```javascript
import CosmotechApi from '@cosmotech/api';
let defaultClient = CosmotechApi.ApiClient.instance;
// Configure OAuth2 access token for authorization: oAuth2AuthCode
let oAuth2AuthCode = defaultClient.authentications['oAuth2AuthCode'];
oAuth2AuthCode.accessToken = 'YOUR ACCESS TOKEN';

let apiInstance = new CosmotechApi.SolutionApi();
let organizationId = "organizationId_example"; // String | the Organization identifier
let solutionId = "solutionId_example"; // String | the Solution identifier
apiInstance.removeAllRunTemplates(organizationId, solutionId).then(() => {
  console.log('API called successfully.');
}, (error) => {
  console.error(error);
});

```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **organizationId** | **String**| the Organization identifier | 
 **solutionId** | **String**| the Solution identifier | 

### Return type

null (empty response body)

### Authorization

[oAuth2AuthCode](../README.md#oAuth2AuthCode)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: Not defined


## removeAllSolutionParameterGroups

> removeAllSolutionParameterGroups(organizationId, solutionId)

Remove all Parameter Groups from the Solution specified

### Example

```javascript
import CosmotechApi from '@cosmotech/api';
let defaultClient = CosmotechApi.ApiClient.instance;
// Configure OAuth2 access token for authorization: oAuth2AuthCode
let oAuth2AuthCode = defaultClient.authentications['oAuth2AuthCode'];
oAuth2AuthCode.accessToken = 'YOUR ACCESS TOKEN';

let apiInstance = new CosmotechApi.SolutionApi();
let organizationId = "organizationId_example"; // String | the Organization identifier
let solutionId = "solutionId_example"; // String | the Solution identifier
apiInstance.removeAllSolutionParameterGroups(organizationId, solutionId).then(() => {
  console.log('API called successfully.');
}, (error) => {
  console.error(error);
});

```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **organizationId** | **String**| the Organization identifier | 
 **solutionId** | **String**| the Solution identifier | 

### Return type

null (empty response body)

### Authorization

[oAuth2AuthCode](../README.md#oAuth2AuthCode)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: Not defined


## removeAllSolutionParameters

> removeAllSolutionParameters(organizationId, solutionId)

Remove all Parameters from the Solution specified

### Example

```javascript
import CosmotechApi from '@cosmotech/api';
let defaultClient = CosmotechApi.ApiClient.instance;
// Configure OAuth2 access token for authorization: oAuth2AuthCode
let oAuth2AuthCode = defaultClient.authentications['oAuth2AuthCode'];
oAuth2AuthCode.accessToken = 'YOUR ACCESS TOKEN';

let apiInstance = new CosmotechApi.SolutionApi();
let organizationId = "organizationId_example"; // String | the Organization identifier
let solutionId = "solutionId_example"; // String | the Solution identifier
apiInstance.removeAllSolutionParameters(organizationId, solutionId).then(() => {
  console.log('API called successfully.');
}, (error) => {
  console.error(error);
});

```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **organizationId** | **String**| the Organization identifier | 
 **solutionId** | **String**| the Solution identifier | 

### Return type

null (empty response body)

### Authorization

[oAuth2AuthCode](../README.md#oAuth2AuthCode)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: Not defined


## removeSolutionAccessControl

> removeSolutionAccessControl(organizationId, solutionId, identityId)

Remove the specified access from the given Organization Solution

### Example

```javascript
import CosmotechApi from '@cosmotech/api';
let defaultClient = CosmotechApi.ApiClient.instance;
// Configure OAuth2 access token for authorization: oAuth2AuthCode
let oAuth2AuthCode = defaultClient.authentications['oAuth2AuthCode'];
oAuth2AuthCode.accessToken = 'YOUR ACCESS TOKEN';

let apiInstance = new CosmotechApi.SolutionApi();
let organizationId = "organizationId_example"; // String | the Organization identifier
let solutionId = "solutionId_example"; // String | the Solution identifier
let identityId = "identityId_example"; // String | the User identifier
apiInstance.removeSolutionAccessControl(organizationId, solutionId, identityId).then(() => {
  console.log('API called successfully.');
}, (error) => {
  console.error(error);
});

```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **organizationId** | **String**| the Organization identifier | 
 **solutionId** | **String**| the Solution identifier | 
 **identityId** | **String**| the User identifier | 

### Return type

null (empty response body)

### Authorization

[oAuth2AuthCode](../README.md#oAuth2AuthCode)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: Not defined


## setSolutionDefaultSecurity

> SolutionSecurity setSolutionDefaultSecurity(organizationId, solutionId, solutionRole)

Set the Solution default security

### Example

```javascript
import CosmotechApi from '@cosmotech/api';
let defaultClient = CosmotechApi.ApiClient.instance;
// Configure OAuth2 access token for authorization: oAuth2AuthCode
let oAuth2AuthCode = defaultClient.authentications['oAuth2AuthCode'];
oAuth2AuthCode.accessToken = 'YOUR ACCESS TOKEN';

let apiInstance = new CosmotechApi.SolutionApi();
let organizationId = "organizationId_example"; // String | the Organization identifier
let solutionId = "solutionId_example"; // String | the Solution identifier
let solutionRole = new CosmotechApi.SolutionRole(); // SolutionRole | This change the solution default security. The default security is the role assigned to any person not on the Access Control List. If the default security is None, then nobody outside of the ACL can access the solution.
apiInstance.setSolutionDefaultSecurity(organizationId, solutionId, solutionRole).then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, (error) => {
  console.error(error);
});

```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **organizationId** | **String**| the Organization identifier | 
 **solutionId** | **String**| the Solution identifier | 
 **solutionRole** | [**SolutionRole**](SolutionRole.md)| This change the solution default security. The default security is the role assigned to any person not on the Access Control List. If the default security is None, then nobody outside of the ACL can access the solution. | 

### Return type

[**SolutionSecurity**](SolutionSecurity.md)

### Authorization

[oAuth2AuthCode](../README.md#oAuth2AuthCode)

### HTTP request headers

- **Content-Type**: application/json, application/yaml
- **Accept**: application/json


## updateSolution

> Solution updateSolution(organizationId, solutionId, solution)

Update a solution

### Example

```javascript
import CosmotechApi from '@cosmotech/api';
let defaultClient = CosmotechApi.ApiClient.instance;
// Configure OAuth2 access token for authorization: oAuth2AuthCode
let oAuth2AuthCode = defaultClient.authentications['oAuth2AuthCode'];
oAuth2AuthCode.accessToken = 'YOUR ACCESS TOKEN';

let apiInstance = new CosmotechApi.SolutionApi();
let organizationId = "organizationId_example"; // String | the Organization identifier
let solutionId = "solutionId_example"; // String | the Solution identifier
let solution = new CosmotechApi.Solution(); // Solution | the new Solution details. This endpoint can't be used to update security
apiInstance.updateSolution(organizationId, solutionId, solution).then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, (error) => {
  console.error(error);
});

```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **organizationId** | **String**| the Organization identifier | 
 **solutionId** | **String**| the Solution identifier | 
 **solution** | [**Solution**](Solution.md)| the new Solution details. This endpoint can&#39;t be used to update security | 

### Return type

[**Solution**](Solution.md)

### Authorization

[oAuth2AuthCode](../README.md#oAuth2AuthCode)

### HTTP request headers

- **Content-Type**: application/json, application/yaml
- **Accept**: application/json


## updateSolutionAccessControl

> SolutionAccessControl updateSolutionAccessControl(organizationId, solutionId, identityId, solutionRole)

Update the specified access to User for a Solution

### Example

```javascript
import CosmotechApi from '@cosmotech/api';
let defaultClient = CosmotechApi.ApiClient.instance;
// Configure OAuth2 access token for authorization: oAuth2AuthCode
let oAuth2AuthCode = defaultClient.authentications['oAuth2AuthCode'];
oAuth2AuthCode.accessToken = 'YOUR ACCESS TOKEN';

let apiInstance = new CosmotechApi.SolutionApi();
let organizationId = "organizationId_example"; // String | the Organization identifier
let solutionId = "solutionId_example"; // String | the Solution identifier
let identityId = "identityId_example"; // String | the User identifier
let solutionRole = new CosmotechApi.SolutionRole(); // SolutionRole | The new Solution Access Control
apiInstance.updateSolutionAccessControl(organizationId, solutionId, identityId, solutionRole).then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, (error) => {
  console.error(error);
});

```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **organizationId** | **String**| the Organization identifier | 
 **solutionId** | **String**| the Solution identifier | 
 **identityId** | **String**| the User identifier | 
 **solutionRole** | [**SolutionRole**](SolutionRole.md)| The new Solution Access Control | 

### Return type

[**SolutionAccessControl**](SolutionAccessControl.md)

### Authorization

[oAuth2AuthCode](../README.md#oAuth2AuthCode)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json


## updateSolutionRunTemplate

> [RunTemplate] updateSolutionRunTemplate(organizationId, solutionId, runTemplateId, runTemplate)

Update the specified Solution Run Template

### Example

```javascript
import CosmotechApi from '@cosmotech/api';
let defaultClient = CosmotechApi.ApiClient.instance;
// Configure OAuth2 access token for authorization: oAuth2AuthCode
let oAuth2AuthCode = defaultClient.authentications['oAuth2AuthCode'];
oAuth2AuthCode.accessToken = 'YOUR ACCESS TOKEN';

let apiInstance = new CosmotechApi.SolutionApi();
let organizationId = "organizationId_example"; // String | the Organization identifier
let solutionId = "solutionId_example"; // String | the Solution identifier
let runTemplateId = "runTemplateId_example"; // String | the Run Template identifier
let runTemplate = new CosmotechApi.RunTemplate(); // RunTemplate | the Run Templates
apiInstance.updateSolutionRunTemplate(organizationId, solutionId, runTemplateId, runTemplate).then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, (error) => {
  console.error(error);
});

```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **organizationId** | **String**| the Organization identifier | 
 **solutionId** | **String**| the Solution identifier | 
 **runTemplateId** | **String**| the Run Template identifier | 
 **runTemplate** | [**RunTemplate**](RunTemplate.md)| the Run Templates | 

### Return type

[**[RunTemplate]**](RunTemplate.md)

### Authorization

[oAuth2AuthCode](../README.md#oAuth2AuthCode)

### HTTP request headers

- **Content-Type**: application/json, application/yaml
- **Accept**: application/json


## uploadRunTemplateHandler

> uploadRunTemplateHandler(organizationId, solutionId, runTemplateId, handlerId, body, opts)

Upload a Run Template step handler zip file

### Example

```javascript
import CosmotechApi from '@cosmotech/api';
let defaultClient = CosmotechApi.ApiClient.instance;
// Configure OAuth2 access token for authorization: oAuth2AuthCode
let oAuth2AuthCode = defaultClient.authentications['oAuth2AuthCode'];
oAuth2AuthCode.accessToken = 'YOUR ACCESS TOKEN';

let apiInstance = new CosmotechApi.SolutionApi();
let organizationId = "organizationId_example"; // String | the Organization identifier
let solutionId = "solutionId_example"; // String | the Solution identifier
let runTemplateId = "runTemplateId_example"; // String | the Run Template identifier
let handlerId = new CosmotechApi.RunTemplateHandlerId(); // RunTemplateHandlerId | the Handler identifier
let body = "/path/to/file"; // File | 
let opts = {
  'overwrite': false // Boolean | whether to overwrite any existing handler resource
};
apiInstance.uploadRunTemplateHandler(organizationId, solutionId, runTemplateId, handlerId, body, opts).then(() => {
  console.log('API called successfully.');
}, (error) => {
  console.error(error);
});

```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **organizationId** | **String**| the Organization identifier | 
 **solutionId** | **String**| the Solution identifier | 
 **runTemplateId** | **String**| the Run Template identifier | 
 **handlerId** | [**RunTemplateHandlerId**](.md)| the Handler identifier | 
 **body** | **File**|  | 
 **overwrite** | **Boolean**| whether to overwrite any existing handler resource | [optional] [default to false]

### Return type

null (empty response body)

### Authorization

[oAuth2AuthCode](../README.md#oAuth2AuthCode)

### HTTP request headers

- **Content-Type**: application/octet-stream
- **Accept**: Not defined

