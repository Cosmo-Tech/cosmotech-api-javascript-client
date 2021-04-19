# CosmotechApi.SolutionApi

All URIs are relative to *https://api.azure.cosmo-platform.com*

Method | HTTP request | Description
------------- | ------------- | -------------
[**createSolution**](SolutionApi.md#createSolution) | **POST** /organizations/{organization_id}/solutions | Register a new solution
[**deleteSolution**](SolutionApi.md#deleteSolution) | **DELETE** /organizations/{organization_id}/solutions/{solution_id} | Delete a solution
[**findAllSolutions**](SolutionApi.md#findAllSolutions) | **GET** /organizations/{organization_id}/solutions | List all Solutions
[**findSolutionById**](SolutionApi.md#findSolutionById) | **GET** /organizations/{organization_id}/solutions/{solution_id} | Get the details of a solution
[**updateSolution**](SolutionApi.md#updateSolution) | **PATCH** /organizations/{organization_id}/solutions/{solution_id} | Update a solution
[**upload**](SolutionApi.md#upload) | **POST** /organizations/{organization_id}/solutions/upload | Upload and register a new solution



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

- **Content-Type**: application/json
- **Accept**: application/json


## deleteSolution

> Solution deleteSolution(organizationId, solutionId)

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

- **Content-Type**: application/json
- **Accept**: application/json


## upload

> Solution upload(organizationId, body)

Upload and register a new solution

### Example

```javascript
import CosmotechApi from '@cosmotech/api';
let defaultClient = CosmotechApi.ApiClient.instance;
// Configure OAuth2 access token for authorization: oAuth2AuthCode
let oAuth2AuthCode = defaultClient.authentications['oAuth2AuthCode'];
oAuth2AuthCode.accessToken = 'YOUR ACCESS TOKEN';

let apiInstance = new CosmotechApi.SolutionApi();
let organizationId = "organizationId_example"; // String | the Organization identifier
let body = "/path/to/file"; // File | the Solution to upload and register
apiInstance.upload(organizationId, body, (error, data, response) => {
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
 **body** | **File**| the Solution to upload and register | 

### Return type

[**Solution**](Solution.md)

### Authorization

[oAuth2AuthCode](../README.md#oAuth2AuthCode)

### HTTP request headers

- **Content-Type**: application/yaml
- **Accept**: application/json

