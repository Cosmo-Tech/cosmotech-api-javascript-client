# CosmotechApi.SolutionApi

All URIs are relative to *https://dev.api.cosmotech.com*

Method | HTTP request | Description
------------- | ------------- | -------------
[**addOrReplaceParameterGroups**](SolutionApi.md#addOrReplaceParameterGroups) | **POST** /organizations/{organization_id}/solutions/{solution_id}/parameterGroups | Add Parameter Groups. Any item with the same ID will be overwritten
[**addOrReplaceParameters**](SolutionApi.md#addOrReplaceParameters) | **POST** /organizations/{organization_id}/solutions/{solution_id}/parameters | Add Parameters. Any item with the same ID will be overwritten
[**addOrReplaceRunTemplates**](SolutionApi.md#addOrReplaceRunTemplates) | **POST** /organizations/{organization_id}/solutions/{solution_id}/runTemplates | Add Run Templates. Any item with the same ID will be overwritten
[**createSolution**](SolutionApi.md#createSolution) | **POST** /organizations/{organization_id}/solutions | Register a new solution
[**deleteSolution**](SolutionApi.md#deleteSolution) | **DELETE** /organizations/{organization_id}/solutions/{solution_id} | Delete a solution
[**deleteSolutionRunTemplate**](SolutionApi.md#deleteSolutionRunTemplate) | **DELETE** /organizations/{organization_id}/solutions/{solution_id}/runTemplates/{run_template_id} | Remove the specified Solution Run Template
[**findAllSolutions**](SolutionApi.md#findAllSolutions) | **GET** /organizations/{organization_id}/solutions | List all Solutions
[**findSolutionById**](SolutionApi.md#findSolutionById) | **GET** /organizations/{organization_id}/solutions/{solution_id} | Get the details of a solution
[**removeAllRunTemplates**](SolutionApi.md#removeAllRunTemplates) | **DELETE** /organizations/{organization_id}/solutions/{solution_id}/runTemplates | Remove all Run Templates from the Solution specified
[**removeAllSolutionParameterGroups**](SolutionApi.md#removeAllSolutionParameterGroups) | **DELETE** /organizations/{organization_id}/solutions/{solution_id}/parameterGroups | Remove all Parameter Groups from the Solution specified
[**removeAllSolutionParameters**](SolutionApi.md#removeAllSolutionParameters) | **DELETE** /organizations/{organization_id}/solutions/{solution_id}/parameters | Remove all Parameters from the Solution specified
[**updateSolution**](SolutionApi.md#updateSolution) | **PATCH** /organizations/{organization_id}/solutions/{solution_id} | Update a solution
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
apiInstance.addOrReplaceParameterGroups(organizationId, solutionId, runTemplateParameterGroup, (error, data, response) => {
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
apiInstance.addOrReplaceParameters(organizationId, solutionId, runTemplateParameter, (error, data, response) => {
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
apiInstance.addOrReplaceRunTemplates(organizationId, solutionId, runTemplate, (error, data, response) => {
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
 **solutionId** | **String**| the Solution identifier | 
 **runTemplate** | [**[RunTemplate]**](RunTemplate.md)| the Run Templates | 

### Return type

[**[RunTemplate]**](RunTemplate.md)

### Authorization

[oAuth2AuthCode](../README.md#oAuth2AuthCode)

### HTTP request headers

- **Content-Type**: application/json
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
apiInstance.createSolution(organizationId, solution, (error, data, response) => {
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
apiInstance.deleteSolution(organizationId, solutionId, (error, data, response) => {
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
apiInstance.deleteSolutionRunTemplate(organizationId, solutionId, runTemplateId, (error, data, response) => {
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
 **solutionId** | **String**| the Solution identifier | 
 **runTemplateId** | **String**| the Run Template identifier | 

### Return type

null (empty response body)

### Authorization

[oAuth2AuthCode](../README.md#oAuth2AuthCode)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: Not defined


## findAllSolutions

> [Solution] findAllSolutions(organizationId)

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
apiInstance.findAllSolutions(organizationId, (error, data, response) => {
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
apiInstance.findSolutionById(organizationId, solutionId, (error, data, response) => {
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
 **solutionId** | **String**| the Solution identifier | 

### Return type

[**Solution**](Solution.md)

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
apiInstance.removeAllRunTemplates(organizationId, solutionId, (error, data, response) => {
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
apiInstance.removeAllSolutionParameterGroups(organizationId, solutionId, (error, data, response) => {
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
apiInstance.removeAllSolutionParameters(organizationId, solutionId, (error, data, response) => {
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
 **solutionId** | **String**| the Solution identifier | 

### Return type

null (empty response body)

### Authorization

[oAuth2AuthCode](../README.md#oAuth2AuthCode)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: Not defined


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
let solution = new CosmotechApi.Solution(); // Solution | the new Solution details.
apiInstance.updateSolution(organizationId, solutionId, solution, (error, data, response) => {
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
 **solutionId** | **String**| the Solution identifier | 
 **solution** | [**Solution**](Solution.md)| the new Solution details. | 

### Return type

[**Solution**](Solution.md)

### Authorization

[oAuth2AuthCode](../README.md#oAuth2AuthCode)

### HTTP request headers

- **Content-Type**: application/json, application/yaml
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
apiInstance.updateSolutionRunTemplate(organizationId, solutionId, runTemplateId, runTemplate, (error, data, response) => {
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
apiInstance.uploadRunTemplateHandler(organizationId, solutionId, runTemplateId, handlerId, body, opts, (error, data, response) => {
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

