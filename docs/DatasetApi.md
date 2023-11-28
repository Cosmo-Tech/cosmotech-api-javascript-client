# CosmotechApi.DatasetApi

All URIs are relative to *https://dev.api.cosmotech.com*

Method | HTTP request | Description
------------- | ------------- | -------------
[**addOrReplaceDatasetCompatibilityElements**](DatasetApi.md#addOrReplaceDatasetCompatibilityElements) | **POST** /organizations/{organization_id}/datasets/{dataset_id}/compatibility | Add Dataset Compatibility elements.
[**copyDataset**](DatasetApi.md#copyDataset) | **POST** /organizations/{organization_id}/datasets/copy | Copy a Dataset to another Dataset. Source must have a read capable connector and Target a write capable connector.
[**createDataset**](DatasetApi.md#createDataset) | **POST** /organizations/{organization_id}/datasets | Create a new Dataset
[**deleteDataset**](DatasetApi.md#deleteDataset) | **DELETE** /organizations/{organization_id}/datasets/{dataset_id} | Delete a dataset
[**findAllDatasets**](DatasetApi.md#findAllDatasets) | **GET** /organizations/{organization_id}/datasets | List all Datasets
[**findDatasetById**](DatasetApi.md#findDatasetById) | **GET** /organizations/{organization_id}/datasets/{dataset_id} | Get the details of a Dataset
[**importDataset**](DatasetApi.md#importDataset) | **POST** /organizations/{organization_id}/datasets/import | Import a new Dataset
[**removeAllDatasetCompatibilityElements**](DatasetApi.md#removeAllDatasetCompatibilityElements) | **DELETE** /organizations/{organization_id}/datasets/{dataset_id}/compatibility | Remove all Dataset Compatibility elements from the Dataset specified
[**searchDatasets**](DatasetApi.md#searchDatasets) | **POST** /organizations/{organization_id}/datasets/search | Search Datasets
[**updateDataset**](DatasetApi.md#updateDataset) | **PATCH** /organizations/{organization_id}/datasets/{dataset_id} | Update a dataset



## addOrReplaceDatasetCompatibilityElements

> [DatasetCompatibility] addOrReplaceDatasetCompatibilityElements(organizationId, datasetId, datasetCompatibility)

Add Dataset Compatibility elements.

### Example

```javascript
import CosmotechApi from '@cosmotech/api';
let defaultClient = CosmotechApi.ApiClient.instance;
// Configure OAuth2 access token for authorization: oAuth2AuthCode
let oAuth2AuthCode = defaultClient.authentications['oAuth2AuthCode'];
oAuth2AuthCode.accessToken = 'YOUR ACCESS TOKEN';

let apiInstance = new CosmotechApi.DatasetApi();
let organizationId = "organizationId_example"; // String | the Organization identifier
let datasetId = "datasetId_example"; // String | the Dataset identifier
let datasetCompatibility = [new CosmotechApi.DatasetCompatibility()]; // [DatasetCompatibility] | the Dataset Compatibility elements
apiInstance.addOrReplaceDatasetCompatibilityElements(organizationId, datasetId, datasetCompatibility).then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, (error) => {
  console.error(error);
});

```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **organizationId** | **String**| the Organization identifier | 
 **datasetId** | **String**| the Dataset identifier | 
 **datasetCompatibility** | [**[DatasetCompatibility]**](DatasetCompatibility.md)| the Dataset Compatibility elements | 

### Return type

[**[DatasetCompatibility]**](DatasetCompatibility.md)

### Authorization

[oAuth2AuthCode](../README.md#oAuth2AuthCode)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json


## copyDataset

> DatasetCopyParameters copyDataset(organizationId, datasetCopyParameters)

Copy a Dataset to another Dataset. Source must have a read capable connector and Target a write capable connector.

### Example

```javascript
import CosmotechApi from '@cosmotech/api';
let defaultClient = CosmotechApi.ApiClient.instance;
// Configure OAuth2 access token for authorization: oAuth2AuthCode
let oAuth2AuthCode = defaultClient.authentications['oAuth2AuthCode'];
oAuth2AuthCode.accessToken = 'YOUR ACCESS TOKEN';

let apiInstance = new CosmotechApi.DatasetApi();
let organizationId = "organizationId_example"; // String | the Organization identifier
let datasetCopyParameters = new CosmotechApi.DatasetCopyParameters(); // DatasetCopyParameters | the Dataset copy parameters
apiInstance.copyDataset(organizationId, datasetCopyParameters).then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, (error) => {
  console.error(error);
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

[oAuth2AuthCode](../README.md#oAuth2AuthCode)

### HTTP request headers

- **Content-Type**: application/json, application/yaml
- **Accept**: application/json


## createDataset

> Dataset createDataset(organizationId, dataset)

Create a new Dataset

### Example

```javascript
import CosmotechApi from '@cosmotech/api';
let defaultClient = CosmotechApi.ApiClient.instance;
// Configure OAuth2 access token for authorization: oAuth2AuthCode
let oAuth2AuthCode = defaultClient.authentications['oAuth2AuthCode'];
oAuth2AuthCode.accessToken = 'YOUR ACCESS TOKEN';

let apiInstance = new CosmotechApi.DatasetApi();
let organizationId = "organizationId_example"; // String | the Organization identifier
let dataset = new CosmotechApi.Dataset(); // Dataset | the Dataset to create
apiInstance.createDataset(organizationId, dataset).then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, (error) => {
  console.error(error);
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

[oAuth2AuthCode](../README.md#oAuth2AuthCode)

### HTTP request headers

- **Content-Type**: application/json, application/yaml
- **Accept**: application/json


## deleteDataset

> deleteDataset(organizationId, datasetId)

Delete a dataset

### Example

```javascript
import CosmotechApi from '@cosmotech/api';
let defaultClient = CosmotechApi.ApiClient.instance;
// Configure OAuth2 access token for authorization: oAuth2AuthCode
let oAuth2AuthCode = defaultClient.authentications['oAuth2AuthCode'];
oAuth2AuthCode.accessToken = 'YOUR ACCESS TOKEN';

let apiInstance = new CosmotechApi.DatasetApi();
let organizationId = "organizationId_example"; // String | the Organization identifier
let datasetId = "datasetId_example"; // String | the Dataset identifier
apiInstance.deleteDataset(organizationId, datasetId).then(() => {
  console.log('API called successfully.');
}, (error) => {
  console.error(error);
});

```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **organizationId** | **String**| the Organization identifier | 
 **datasetId** | **String**| the Dataset identifier | 

### Return type

null (empty response body)

### Authorization

[oAuth2AuthCode](../README.md#oAuth2AuthCode)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: Not defined


## findAllDatasets

> [Dataset] findAllDatasets(organizationId, opts)

List all Datasets

### Example

```javascript
import CosmotechApi from '@cosmotech/api';
let defaultClient = CosmotechApi.ApiClient.instance;
// Configure OAuth2 access token for authorization: oAuth2AuthCode
let oAuth2AuthCode = defaultClient.authentications['oAuth2AuthCode'];
oAuth2AuthCode.accessToken = 'YOUR ACCESS TOKEN';

let apiInstance = new CosmotechApi.DatasetApi();
let organizationId = "organizationId_example"; // String | the Organization identifier
let opts = {
  'page': 56, // Number | page number to query
  'size': 56 // Number | amount of result by page
};
apiInstance.findAllDatasets(organizationId, opts).then((data) => {
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

[**[Dataset]**](Dataset.md)

### Authorization

[oAuth2AuthCode](../README.md#oAuth2AuthCode)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## findDatasetById

> Dataset findDatasetById(organizationId, datasetId)

Get the details of a Dataset

### Example

```javascript
import CosmotechApi from '@cosmotech/api';
let defaultClient = CosmotechApi.ApiClient.instance;
// Configure OAuth2 access token for authorization: oAuth2AuthCode
let oAuth2AuthCode = defaultClient.authentications['oAuth2AuthCode'];
oAuth2AuthCode.accessToken = 'YOUR ACCESS TOKEN';

let apiInstance = new CosmotechApi.DatasetApi();
let organizationId = "organizationId_example"; // String | the Organization identifier
let datasetId = "datasetId_example"; // String | the Dataset identifier
apiInstance.findDatasetById(organizationId, datasetId).then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, (error) => {
  console.error(error);
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

[oAuth2AuthCode](../README.md#oAuth2AuthCode)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## importDataset

> Dataset importDataset(organizationId, dataset)

Import a new Dataset

### Example

```javascript
import CosmotechApi from '@cosmotech/api';
let defaultClient = CosmotechApi.ApiClient.instance;
// Configure OAuth2 access token for authorization: oAuth2AuthCode
let oAuth2AuthCode = defaultClient.authentications['oAuth2AuthCode'];
oAuth2AuthCode.accessToken = 'YOUR ACCESS TOKEN';

let apiInstance = new CosmotechApi.DatasetApi();
let organizationId = "organizationId_example"; // String | the Organization identifier
let dataset = new CosmotechApi.Dataset(); // Dataset | the Dataset to import
apiInstance.importDataset(organizationId, dataset).then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, (error) => {
  console.error(error);
});

```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **organizationId** | **String**| the Organization identifier | 
 **dataset** | [**Dataset**](Dataset.md)| the Dataset to import | 

### Return type

[**Dataset**](Dataset.md)

### Authorization

[oAuth2AuthCode](../README.md#oAuth2AuthCode)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json


## removeAllDatasetCompatibilityElements

> removeAllDatasetCompatibilityElements(organizationId, datasetId)

Remove all Dataset Compatibility elements from the Dataset specified

### Example

```javascript
import CosmotechApi from '@cosmotech/api';
let defaultClient = CosmotechApi.ApiClient.instance;
// Configure OAuth2 access token for authorization: oAuth2AuthCode
let oAuth2AuthCode = defaultClient.authentications['oAuth2AuthCode'];
oAuth2AuthCode.accessToken = 'YOUR ACCESS TOKEN';

let apiInstance = new CosmotechApi.DatasetApi();
let organizationId = "organizationId_example"; // String | the Organization identifier
let datasetId = "datasetId_example"; // String | the Dataset identifier
apiInstance.removeAllDatasetCompatibilityElements(organizationId, datasetId).then(() => {
  console.log('API called successfully.');
}, (error) => {
  console.error(error);
});

```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **organizationId** | **String**| the Organization identifier | 
 **datasetId** | **String**| the Dataset identifier | 

### Return type

null (empty response body)

### Authorization

[oAuth2AuthCode](../README.md#oAuth2AuthCode)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: Not defined


## searchDatasets

> [Dataset] searchDatasets(organizationId, datasetSearch, opts)

Search Datasets

### Example

```javascript
import CosmotechApi from '@cosmotech/api';
let defaultClient = CosmotechApi.ApiClient.instance;
// Configure OAuth2 access token for authorization: oAuth2AuthCode
let oAuth2AuthCode = defaultClient.authentications['oAuth2AuthCode'];
oAuth2AuthCode.accessToken = 'YOUR ACCESS TOKEN';

let apiInstance = new CosmotechApi.DatasetApi();
let organizationId = "organizationId_example"; // String | the Organization identifier
let datasetSearch = new CosmotechApi.DatasetSearch(); // DatasetSearch | the Dataset search parameters
let opts = {
  'page': 56, // Number | page number to query
  'size': 56 // Number | amount of result by page
};
apiInstance.searchDatasets(organizationId, datasetSearch, opts).then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, (error) => {
  console.error(error);
});

```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **organizationId** | **String**| the Organization identifier | 
 **datasetSearch** | [**DatasetSearch**](DatasetSearch.md)| the Dataset search parameters | 
 **page** | **Number**| page number to query | [optional] 
 **size** | **Number**| amount of result by page | [optional] 

### Return type

[**[Dataset]**](Dataset.md)

### Authorization

[oAuth2AuthCode](../README.md#oAuth2AuthCode)

### HTTP request headers

- **Content-Type**: application/json, application/yaml
- **Accept**: application/json


## updateDataset

> Dataset updateDataset(organizationId, datasetId, dataset)

Update a dataset

### Example

```javascript
import CosmotechApi from '@cosmotech/api';
let defaultClient = CosmotechApi.ApiClient.instance;
// Configure OAuth2 access token for authorization: oAuth2AuthCode
let oAuth2AuthCode = defaultClient.authentications['oAuth2AuthCode'];
oAuth2AuthCode.accessToken = 'YOUR ACCESS TOKEN';

let apiInstance = new CosmotechApi.DatasetApi();
let organizationId = "organizationId_example"; // String | the Organization identifier
let datasetId = "datasetId_example"; // String | the Dataset identifier
let dataset = new CosmotechApi.Dataset(); // Dataset | the new Dataset details.
apiInstance.updateDataset(organizationId, datasetId, dataset).then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, (error) => {
  console.error(error);
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

[oAuth2AuthCode](../README.md#oAuth2AuthCode)

### HTTP request headers

- **Content-Type**: application/json, application/yaml
- **Accept**: application/json

