# CosmotechApi.DatasetApi

All URIs are relative to *https://api.azure.cosmo-platform.com*

Method | HTTP request | Description
------------- | ------------- | -------------
[**copyDataset**](DatasetApi.md#copyDataset) | **POST** /organizations/{organization_id}/datasets/copy | Copy a Dataset to another Dataset. Source must have a read capable connector and Target a write capable connector.
[**createDataset**](DatasetApi.md#createDataset) | **POST** /organizations/{organization_id}/datasets | Register a new dataset
[**deleteDataset**](DatasetApi.md#deleteDataset) | **DELETE** /organizations/{organization_id}/datasets/{dataset_id} | Delete a dataset
[**findAllDatasets**](DatasetApi.md#findAllDatasets) | **GET** /organizations/{organization_id}/datasets | List all Datasets
[**findDatasetById**](DatasetApi.md#findDatasetById) | **GET** /organizations/{organization_id}/datasets/{dataset_id} | Get the details of a dataset
[**updateDataset**](DatasetApi.md#updateDataset) | **PATCH** /organizations/{organization_id}/datasets/{dataset_id} | Update a dataset



## copyDataset

> DatasetCopyParameters copyDataset(organizationId, datasetCopyParameters)

Copy a Dataset to another Dataset. Source must have a read capable connector and Target a write capable connector.

### Example

```javascript
import CosmotechApi from '@cosmotech/api';
let defaultClient = CosmotechApi.ApiClient.instance;
// Configure OAuth2 access token for authorization: AADOAuth2AuthCode
let AADOAuth2AuthCode = defaultClient.authentications['AADOAuth2AuthCode'];
AADOAuth2AuthCode.accessToken = 'YOUR ACCESS TOKEN';
// Configure API key authorization: ApiKeyAuth
let ApiKeyAuth = defaultClient.authentications['ApiKeyAuth'];
ApiKeyAuth.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//ApiKeyAuth.apiKeyPrefix = 'Token';

let apiInstance = new CosmotechApi.DatasetApi();
let organizationId = "organizationId_example"; // String | the Organization identifier
let datasetCopyParameters = new CosmotechApi.DatasetCopyParameters(); // DatasetCopyParameters | the Dataset copy parameters
apiInstance.copyDataset(organizationId, datasetCopyParameters, (error, data, response) => {
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
 **datasetCopyParameters** | [**DatasetCopyParameters**](DatasetCopyParameters.md)| the Dataset copy parameters | 

### Return type

[**DatasetCopyParameters**](DatasetCopyParameters.md)

### Authorization

[AADOAuth2AuthCode](../README.md#AADOAuth2AuthCode), [ApiKeyAuth](../README.md#ApiKeyAuth)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json


## createDataset

> Dataset createDataset(organizationId, dataset)

Register a new dataset

### Example

```javascript
import CosmotechApi from '@cosmotech/api';
let defaultClient = CosmotechApi.ApiClient.instance;
// Configure OAuth2 access token for authorization: AADOAuth2AuthCode
let AADOAuth2AuthCode = defaultClient.authentications['AADOAuth2AuthCode'];
AADOAuth2AuthCode.accessToken = 'YOUR ACCESS TOKEN';
// Configure API key authorization: ApiKeyAuth
let ApiKeyAuth = defaultClient.authentications['ApiKeyAuth'];
ApiKeyAuth.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//ApiKeyAuth.apiKeyPrefix = 'Token';

let apiInstance = new CosmotechApi.DatasetApi();
let organizationId = "organizationId_example"; // String | the Organization identifier
let dataset = new CosmotechApi.Dataset(); // Dataset | the Dataset to create
apiInstance.createDataset(organizationId, dataset, (error, data, response) => {
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
 **dataset** | [**Dataset**](Dataset.md)| the Dataset to create | 

### Return type

[**Dataset**](Dataset.md)

### Authorization

[AADOAuth2AuthCode](../README.md#AADOAuth2AuthCode), [ApiKeyAuth](../README.md#ApiKeyAuth)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json


## deleteDataset

> Dataset deleteDataset(organizationId, datasetId)

Delete a dataset

### Example

```javascript
import CosmotechApi from '@cosmotech/api';
let defaultClient = CosmotechApi.ApiClient.instance;
// Configure OAuth2 access token for authorization: AADOAuth2AuthCode
let AADOAuth2AuthCode = defaultClient.authentications['AADOAuth2AuthCode'];
AADOAuth2AuthCode.accessToken = 'YOUR ACCESS TOKEN';
// Configure API key authorization: ApiKeyAuth
let ApiKeyAuth = defaultClient.authentications['ApiKeyAuth'];
ApiKeyAuth.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//ApiKeyAuth.apiKeyPrefix = 'Token';

let apiInstance = new CosmotechApi.DatasetApi();
let organizationId = "organizationId_example"; // String | the Organization identifier
let datasetId = "datasetId_example"; // String | the Dataset identifier
apiInstance.deleteDataset(organizationId, datasetId, (error, data, response) => {
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
 **datasetId** | **String**| the Dataset identifier | 

### Return type

[**Dataset**](Dataset.md)

### Authorization

[AADOAuth2AuthCode](../README.md#AADOAuth2AuthCode), [ApiKeyAuth](../README.md#ApiKeyAuth)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## findAllDatasets

> [Dataset] findAllDatasets(organizationId)

List all Datasets

### Example

```javascript
import CosmotechApi from '@cosmotech/api';
let defaultClient = CosmotechApi.ApiClient.instance;
// Configure OAuth2 access token for authorization: AADOAuth2AuthCode
let AADOAuth2AuthCode = defaultClient.authentications['AADOAuth2AuthCode'];
AADOAuth2AuthCode.accessToken = 'YOUR ACCESS TOKEN';
// Configure API key authorization: ApiKeyAuth
let ApiKeyAuth = defaultClient.authentications['ApiKeyAuth'];
ApiKeyAuth.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//ApiKeyAuth.apiKeyPrefix = 'Token';

let apiInstance = new CosmotechApi.DatasetApi();
let organizationId = "organizationId_example"; // String | the Organization identifier
apiInstance.findAllDatasets(organizationId, (error, data, response) => {
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

[**[Dataset]**](Dataset.md)

### Authorization

[AADOAuth2AuthCode](../README.md#AADOAuth2AuthCode), [ApiKeyAuth](../README.md#ApiKeyAuth)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## findDatasetById

> Dataset findDatasetById(organizationId, datasetId)

Get the details of a dataset

### Example

```javascript
import CosmotechApi from '@cosmotech/api';
let defaultClient = CosmotechApi.ApiClient.instance;
// Configure OAuth2 access token for authorization: AADOAuth2AuthCode
let AADOAuth2AuthCode = defaultClient.authentications['AADOAuth2AuthCode'];
AADOAuth2AuthCode.accessToken = 'YOUR ACCESS TOKEN';
// Configure API key authorization: ApiKeyAuth
let ApiKeyAuth = defaultClient.authentications['ApiKeyAuth'];
ApiKeyAuth.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//ApiKeyAuth.apiKeyPrefix = 'Token';

let apiInstance = new CosmotechApi.DatasetApi();
let organizationId = "organizationId_example"; // String | the Organization identifier
let datasetId = "datasetId_example"; // String | the Dataset identifier
apiInstance.findDatasetById(organizationId, datasetId, (error, data, response) => {
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
 **datasetId** | **String**| the Dataset identifier | 

### Return type

[**Dataset**](Dataset.md)

### Authorization

[AADOAuth2AuthCode](../README.md#AADOAuth2AuthCode), [ApiKeyAuth](../README.md#ApiKeyAuth)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## updateDataset

> Dataset updateDataset(organizationId, datasetId, dataset)

Update a dataset

### Example

```javascript
import CosmotechApi from '@cosmotech/api';
let defaultClient = CosmotechApi.ApiClient.instance;
// Configure OAuth2 access token for authorization: AADOAuth2AuthCode
let AADOAuth2AuthCode = defaultClient.authentications['AADOAuth2AuthCode'];
AADOAuth2AuthCode.accessToken = 'YOUR ACCESS TOKEN';
// Configure API key authorization: ApiKeyAuth
let ApiKeyAuth = defaultClient.authentications['ApiKeyAuth'];
ApiKeyAuth.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//ApiKeyAuth.apiKeyPrefix = 'Token';

let apiInstance = new CosmotechApi.DatasetApi();
let organizationId = "organizationId_example"; // String | the Organization identifier
let datasetId = "datasetId_example"; // String | the Dataset identifier
let dataset = new CosmotechApi.Dataset(); // Dataset | the new Dataset details.
apiInstance.updateDataset(organizationId, datasetId, dataset, (error, data, response) => {
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
 **datasetId** | **String**| the Dataset identifier | 
 **dataset** | [**Dataset**](Dataset.md)| the new Dataset details. | 

### Return type

[**Dataset**](Dataset.md)

### Authorization

[AADOAuth2AuthCode](../README.md#AADOAuth2AuthCode), [ApiKeyAuth](../README.md#ApiKeyAuth)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json

