# CosmotechApi.DatasetApi

All URIs are relative to *https://dev.api.cosmotech.com*

Method | HTTP request | Description
------------- | ------------- | -------------
[**addDatasetAccessControl**](DatasetApi.md#addDatasetAccessControl) | **POST** /organizations/{organization_id}/datasets/{dataset_id}/security/access | Add a control access to the Dataset
[**addOrReplaceDatasetCompatibilityElements**](DatasetApi.md#addOrReplaceDatasetCompatibilityElements) | **POST** /organizations/{organization_id}/datasets/{dataset_id}/compatibility | Add Dataset Compatibility elements.
[**copyDataset**](DatasetApi.md#copyDataset) | **POST** /organizations/{organization_id}/datasets/copy | Copy a Dataset to another Dataset.
[**createDataset**](DatasetApi.md#createDataset) | **POST** /organizations/{organization_id}/datasets | Create a new Dataset
[**createSubDataset**](DatasetApi.md#createSubDataset) | **POST** /organizations/{organization_id}/datasets/{dataset_id}/subdataset | Create a sub-dataset from the dataset in parameter
[**createTwingraphEntities**](DatasetApi.md#createTwingraphEntities) | **POST** /organizations/{organization_id}/datasets/{dataset_id}/twingraph/{type} | Create new entities in a graph instance
[**deleteDataset**](DatasetApi.md#deleteDataset) | **DELETE** /organizations/{organization_id}/datasets/{dataset_id} | Delete a dataset
[**deleteTwingraphEntities**](DatasetApi.md#deleteTwingraphEntities) | **DELETE** /organizations/{organization_id}/datasets/{dataset_id}/twingraph/{type} | Delete entities in a graph instance
[**downloadTwingraph**](DatasetApi.md#downloadTwingraph) | **GET** /organizations/{organization_id}/datasets/twingraph/download/{hash} | Download a graph as a zip file
[**findAllDatasets**](DatasetApi.md#findAllDatasets) | **GET** /organizations/{organization_id}/datasets | List all Datasets
[**findDatasetById**](DatasetApi.md#findDatasetById) | **GET** /organizations/{organization_id}/datasets/{dataset_id} | Get the details of a Dataset
[**getDatasetAccessControl**](DatasetApi.md#getDatasetAccessControl) | **GET** /organizations/{organization_id}/datasets/{dataset_id}/security/access/{identity_id} | Get a control access for the Dataset
[**getDatasetSecurity**](DatasetApi.md#getDatasetSecurity) | **GET** /organizations/{organization_id}/datasets/{dataset_id}/security | Get the Dataset security information
[**getDatasetSecurityUsers**](DatasetApi.md#getDatasetSecurityUsers) | **GET** /organizations/{organization_id}/datasets/{dataset_id}/security/users | Get the Dataset security users list
[**getDatasetTwingraphStatus**](DatasetApi.md#getDatasetTwingraphStatus) | **GET** /organizations/{organization_id}/datasets/{dataset_id}/status | Get the dataset&#39;s refresh job status
[**getTwingraphEntities**](DatasetApi.md#getTwingraphEntities) | **GET** /organizations/{organization_id}/datasets/{dataset_id}/twingraph/{type} | Get entities in a graph instance
[**refreshDataset**](DatasetApi.md#refreshDataset) | **POST** /organizations/{organization_id}/datasets/{dataset_id}/refresh | Refresh data on dataset from dataset&#39;s source
[**removeAllDatasetCompatibilityElements**](DatasetApi.md#removeAllDatasetCompatibilityElements) | **DELETE** /organizations/{organization_id}/datasets/{dataset_id}/compatibility | Remove all Dataset Compatibility elements from the Dataset specified
[**removeDatasetAccessControl**](DatasetApi.md#removeDatasetAccessControl) | **DELETE** /organizations/{organization_id}/datasets/{dataset_id}/security/access/{identity_id} | Remove the specified access from the given Dataset
[**rollbackRefresh**](DatasetApi.md#rollbackRefresh) | **POST** /organizations/{organization_id}/datasets/{dataset_id}/refresh/rollback | Rollback the dataset after a failed refresh
[**searchDatasets**](DatasetApi.md#searchDatasets) | **POST** /organizations/{organization_id}/datasets/search | Search Datasets by tags
[**setDatasetDefaultSecurity**](DatasetApi.md#setDatasetDefaultSecurity) | **POST** /organizations/{organization_id}/datasets/{dataset_id}/security/default | Set the Dataset default security
[**twingraphBatchQuery**](DatasetApi.md#twingraphBatchQuery) | **POST** /organizations/{organization_id}/datasets/{dataset_id}/batch-query | Run a query on a graph instance and return the result as a zip file in async mode
[**twingraphBatchUpdate**](DatasetApi.md#twingraphBatchUpdate) | **POST** /organizations/{organization_id}/datasets/{dataset_id}/batch | Async batch update by loading a CSV file on a graph instance 
[**twingraphQuery**](DatasetApi.md#twingraphQuery) | **POST** /organizations/{organization_id}/datasets/{dataset_id}/twingraph | Return the result of a query made on the graph instance as a json
[**updateDataset**](DatasetApi.md#updateDataset) | **PATCH** /organizations/{organization_id}/datasets/{dataset_id} | Update a dataset
[**updateDatasetAccessControl**](DatasetApi.md#updateDatasetAccessControl) | **PATCH** /organizations/{organization_id}/datasets/{dataset_id}/security/access/{identity_id} | Update the specified access to User for a Dataset
[**updateTwingraphEntities**](DatasetApi.md#updateTwingraphEntities) | **PATCH** /organizations/{organization_id}/datasets/{dataset_id}/twingraph/{type} | Update entities in a graph instance
[**uploadTwingraph**](DatasetApi.md#uploadTwingraph) | **POST** /organizations/{organization_id}/datasets/{dataset_id} | Upload data from zip file to dataset&#39;s twingraph



## addDatasetAccessControl

> DatasetAccessControl addDatasetAccessControl(organizationId, datasetId, datasetAccessControl)

Add a control access to the Dataset

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
let datasetAccessControl = new CosmotechApi.DatasetAccessControl(); // DatasetAccessControl | the new Dataset security access to add.
apiInstance.addDatasetAccessControl(organizationId, datasetId, datasetAccessControl).then((data) => {
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
 **datasetAccessControl** | [**DatasetAccessControl**](DatasetAccessControl.md)| the new Dataset security access to add. | 

### Return type

[**DatasetAccessControl**](DatasetAccessControl.md)

### Authorization

[oAuth2AuthCode](../README.md#oAuth2AuthCode)

### HTTP request headers

- **Content-Type**: application/json, application/yaml
- **Accept**: application/json


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

Copy a Dataset to another Dataset.

Not implemented!

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


## createSubDataset

> Dataset createSubDataset(organizationId, datasetId, subDatasetGraphQuery)

Create a sub-dataset from the dataset in parameter

Create a copy of the dataset using the results of the list of queries given in parameter.

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
let subDatasetGraphQuery = new CosmotechApi.SubDatasetGraphQuery(); // SubDatasetGraphQuery | the Cypher query to filter
apiInstance.createSubDataset(organizationId, datasetId, subDatasetGraphQuery).then((data) => {
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
 **subDatasetGraphQuery** | [**SubDatasetGraphQuery**](SubDatasetGraphQuery.md)| the Cypher query to filter | 

### Return type

[**Dataset**](Dataset.md)

### Authorization

[oAuth2AuthCode](../README.md#oAuth2AuthCode)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json


## createTwingraphEntities

> String createTwingraphEntities(organizationId, datasetId, type, graphProperties)

Create new entities in a graph instance

create new entities in a graph instance

### Example

```javascript
import CosmotechApi from '@cosmotech/api';
let defaultClient = CosmotechApi.ApiClient.instance;
// Configure OAuth2 access token for authorization: oAuth2AuthCode
let oAuth2AuthCode = defaultClient.authentications['oAuth2AuthCode'];
oAuth2AuthCode.accessToken = 'YOUR ACCESS TOKEN';

let apiInstance = new CosmotechApi.DatasetApi();
let organizationId = "organizationId_example"; // String | the Organization identifier
let datasetId = "datasetId_example"; // String | the Dataset Identifier
let type = "type_example"; // String | the entity model type
let graphProperties = [new CosmotechApi.GraphProperties()]; // [GraphProperties] | the entities to create
apiInstance.createTwingraphEntities(organizationId, datasetId, type, graphProperties).then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, (error) => {
  console.error(error);
});

```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **organizationId** | **String**| the Organization identifier | 
 **datasetId** | **String**| the Dataset Identifier | 
 **type** | **String**| the entity model type | 
 **graphProperties** | [**[GraphProperties]**](GraphProperties.md)| the entities to create | 

### Return type

**String**

### Authorization

[oAuth2AuthCode](../README.md#oAuth2AuthCode)

### HTTP request headers

- **Content-Type**: application/json
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


## deleteTwingraphEntities

> deleteTwingraphEntities(organizationId, datasetId, type, ids)

Delete entities in a graph instance

delete entities in a graph instance

### Example

```javascript
import CosmotechApi from '@cosmotech/api';
let defaultClient = CosmotechApi.ApiClient.instance;
// Configure OAuth2 access token for authorization: oAuth2AuthCode
let oAuth2AuthCode = defaultClient.authentications['oAuth2AuthCode'];
oAuth2AuthCode.accessToken = 'YOUR ACCESS TOKEN';

let apiInstance = new CosmotechApi.DatasetApi();
let organizationId = "organizationId_example"; // String | the Organization identifier
let datasetId = "datasetId_example"; // String | the Dataset Identifier
let type = "type_example"; // String | the entity model type
let ids = ["null"]; // [String] | the entities to delete
apiInstance.deleteTwingraphEntities(organizationId, datasetId, type, ids).then(() => {
  console.log('API called successfully.');
}, (error) => {
  console.error(error);
});

```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **organizationId** | **String**| the Organization identifier | 
 **datasetId** | **String**| the Dataset Identifier | 
 **type** | **String**| the entity model type | 
 **ids** | [**[String]**](String.md)| the entities to delete | 

### Return type

null (empty response body)

### Authorization

[oAuth2AuthCode](../README.md#oAuth2AuthCode)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: Not defined


## downloadTwingraph

> File downloadTwingraph(organizationId, hash)

Download a graph as a zip file

Download the compressed graph reference by the hash in a zip file

### Example

```javascript
import CosmotechApi from '@cosmotech/api';
let defaultClient = CosmotechApi.ApiClient.instance;
// Configure OAuth2 access token for authorization: oAuth2AuthCode
let oAuth2AuthCode = defaultClient.authentications['oAuth2AuthCode'];
oAuth2AuthCode.accessToken = 'YOUR ACCESS TOKEN';

let apiInstance = new CosmotechApi.DatasetApi();
let organizationId = "organizationId_example"; // String | the Organization identifier
let hash = "hash_example"; // String | the Graph download identifier
apiInstance.downloadTwingraph(organizationId, hash).then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, (error) => {
  console.error(error);
});

```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **organizationId** | **String**| the Organization identifier | 
 **hash** | **String**| the Graph download identifier | 

### Return type

**File**

### Authorization

[oAuth2AuthCode](../README.md#oAuth2AuthCode)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/octet-stream


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


## getDatasetAccessControl

> DatasetAccessControl getDatasetAccessControl(organizationId, datasetId, identityId)

Get a control access for the Dataset

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
let identityId = "identityId_example"; // String | the User identifier
apiInstance.getDatasetAccessControl(organizationId, datasetId, identityId).then((data) => {
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
 **identityId** | **String**| the User identifier | 

### Return type

[**DatasetAccessControl**](DatasetAccessControl.md)

### Authorization

[oAuth2AuthCode](../README.md#oAuth2AuthCode)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## getDatasetSecurity

> DatasetSecurity getDatasetSecurity(organizationId, datasetId)

Get the Dataset security information

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
apiInstance.getDatasetSecurity(organizationId, datasetId).then((data) => {
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

[**DatasetSecurity**](DatasetSecurity.md)

### Authorization

[oAuth2AuthCode](../README.md#oAuth2AuthCode)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## getDatasetSecurityUsers

> [String] getDatasetSecurityUsers(organizationId, datasetId)

Get the Dataset security users list

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
apiInstance.getDatasetSecurityUsers(organizationId, datasetId).then((data) => {
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

**[String]**

### Authorization

[oAuth2AuthCode](../README.md#oAuth2AuthCode)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## getDatasetTwingraphStatus

> String getDatasetTwingraphStatus(organizationId, datasetId)

Get the dataset&#39;s refresh job status

Get the status of the import workflow lauch on the dataset&#39;s refresh. This endpoint needs to be called to update a dataset IngestionStatus or TwincacheStatus

### Example

```javascript
import CosmotechApi from '@cosmotech/api';
let defaultClient = CosmotechApi.ApiClient.instance;
// Configure OAuth2 access token for authorization: oAuth2AuthCode
let oAuth2AuthCode = defaultClient.authentications['oAuth2AuthCode'];
oAuth2AuthCode.accessToken = 'YOUR ACCESS TOKEN';

let apiInstance = new CosmotechApi.DatasetApi();
let organizationId = "organizationId_example"; // String | the Organization identifier
let datasetId = "datasetId_example"; // String | the dataset identifier
apiInstance.getDatasetTwingraphStatus(organizationId, datasetId).then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, (error) => {
  console.error(error);
});

```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **organizationId** | **String**| the Organization identifier | 
 **datasetId** | **String**| the dataset identifier | 

### Return type

**String**

### Authorization

[oAuth2AuthCode](../README.md#oAuth2AuthCode)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/yaml, application/json


## getTwingraphEntities

> String getTwingraphEntities(organizationId, datasetId, type, ids)

Get entities in a graph instance

get entities in a graph instance

### Example

```javascript
import CosmotechApi from '@cosmotech/api';
let defaultClient = CosmotechApi.ApiClient.instance;
// Configure OAuth2 access token for authorization: oAuth2AuthCode
let oAuth2AuthCode = defaultClient.authentications['oAuth2AuthCode'];
oAuth2AuthCode.accessToken = 'YOUR ACCESS TOKEN';

let apiInstance = new CosmotechApi.DatasetApi();
let organizationId = "organizationId_example"; // String | the Organization identifier
let datasetId = "datasetId_example"; // String | the Dataset Identifier
let type = "type_example"; // String | the entity model type
let ids = ["null"]; // [String] | the entities to get
apiInstance.getTwingraphEntities(organizationId, datasetId, type, ids).then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, (error) => {
  console.error(error);
});

```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **organizationId** | **String**| the Organization identifier | 
 **datasetId** | **String**| the Dataset Identifier | 
 **type** | **String**| the entity model type | 
 **ids** | [**[String]**](String.md)| the entities to get | 

### Return type

**String**

### Authorization

[oAuth2AuthCode](../README.md#oAuth2AuthCode)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## refreshDataset

> DatasetTwinGraphInfo refreshDataset(organizationId, datasetId)

Refresh data on dataset from dataset&#39;s source

Refresh dataset from parent source. At date, sources can be:      dataset (refresh from another dataset)      Azure Digital twin       Azure storage      Local File (import a new file)  During refresh, datas are overwritten 

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
apiInstance.refreshDataset(organizationId, datasetId).then((data) => {
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

[**DatasetTwinGraphInfo**](DatasetTwinGraphInfo.md)

### Authorization

[oAuth2AuthCode](../README.md#oAuth2AuthCode)

### HTTP request headers

- **Content-Type**: Not defined
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


## removeDatasetAccessControl

> removeDatasetAccessControl(organizationId, datasetId, identityId)

Remove the specified access from the given Dataset

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
let identityId = "identityId_example"; // String | the User identifier
apiInstance.removeDatasetAccessControl(organizationId, datasetId, identityId).then(() => {
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
 **identityId** | **String**| the User identifier | 

### Return type

null (empty response body)

### Authorization

[oAuth2AuthCode](../README.md#oAuth2AuthCode)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: Not defined


## rollbackRefresh

> String rollbackRefresh(organizationId, datasetId)

Rollback the dataset after a failed refresh

Rollback the twingraph on a dataset after a failed refresh

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
apiInstance.rollbackRefresh(organizationId, datasetId).then((data) => {
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

**String**

### Authorization

[oAuth2AuthCode](../README.md#oAuth2AuthCode)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## searchDatasets

> [Dataset] searchDatasets(organizationId, datasetSearch, opts)

Search Datasets by tags

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


## setDatasetDefaultSecurity

> DatasetSecurity setDatasetDefaultSecurity(organizationId, datasetId, datasetRole)

Set the Dataset default security

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
let datasetRole = new CosmotechApi.DatasetRole(); // DatasetRole | This change the dataset default security. The default security is the role assigned to any person not on the Access Control List. If the default security is None, then nobody outside of the ACL can access the dataset.
apiInstance.setDatasetDefaultSecurity(organizationId, datasetId, datasetRole).then((data) => {
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
 **datasetRole** | [**DatasetRole**](DatasetRole.md)| This change the dataset default security. The default security is the role assigned to any person not on the Access Control List. If the default security is None, then nobody outside of the ACL can access the dataset. | 

### Return type

[**DatasetSecurity**](DatasetSecurity.md)

### Authorization

[oAuth2AuthCode](../README.md#oAuth2AuthCode)

### HTTP request headers

- **Content-Type**: application/json, application/yaml
- **Accept**: application/json


## twingraphBatchQuery

> DatasetTwinGraphHash twingraphBatchQuery(organizationId, datasetId, datasetTwinGraphQuery)

Run a query on a graph instance and return the result as a zip file in async mode

Run a query on a graph instance and return the result as a zip file in async mode

### Example

```javascript
import CosmotechApi from '@cosmotech/api';
let defaultClient = CosmotechApi.ApiClient.instance;
// Configure OAuth2 access token for authorization: oAuth2AuthCode
let oAuth2AuthCode = defaultClient.authentications['oAuth2AuthCode'];
oAuth2AuthCode.accessToken = 'YOUR ACCESS TOKEN';

let apiInstance = new CosmotechApi.DatasetApi();
let organizationId = "organizationId_example"; // String | the Organization identifier
let datasetId = "datasetId_example"; // String | the Graph Identifier
let datasetTwinGraphQuery = new CosmotechApi.DatasetTwinGraphQuery(); // DatasetTwinGraphQuery | the query to run
apiInstance.twingraphBatchQuery(organizationId, datasetId, datasetTwinGraphQuery).then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, (error) => {
  console.error(error);
});

```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **organizationId** | **String**| the Organization identifier | 
 **datasetId** | **String**| the Graph Identifier | 
 **datasetTwinGraphQuery** | [**DatasetTwinGraphQuery**](DatasetTwinGraphQuery.md)| the query to run | 

### Return type

[**DatasetTwinGraphHash**](DatasetTwinGraphHash.md)

### Authorization

[oAuth2AuthCode](../README.md#oAuth2AuthCode)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json


## twingraphBatchUpdate

> TwinGraphBatchResult twingraphBatchUpdate(organizationId, datasetId, twinGraphQuery, body)

Async batch update by loading a CSV file on a graph instance 

Async batch update by loading a CSV file on a graph instance 

### Example

```javascript
import CosmotechApi from '@cosmotech/api';
let defaultClient = CosmotechApi.ApiClient.instance;
// Configure OAuth2 access token for authorization: oAuth2AuthCode
let oAuth2AuthCode = defaultClient.authentications['oAuth2AuthCode'];
oAuth2AuthCode.accessToken = 'YOUR ACCESS TOKEN';

let apiInstance = new CosmotechApi.DatasetApi();
let organizationId = "organizationId_example"; // String | the Organization identifier
let datasetId = "datasetId_example"; // String | the Dataset Identifier
let twinGraphQuery = {"query":"CREATE (:Person {id: toInteger($id), name: $name, rank: toInteger($rank)})"}; // DatasetTwinGraphQuery | 
let body = id,name,rank
1,"John Doe",37
2,"Joe Bloggs",14
; // File | 
apiInstance.twingraphBatchUpdate(organizationId, datasetId, twinGraphQuery, body).then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, (error) => {
  console.error(error);
});

```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **organizationId** | **String**| the Organization identifier | 
 **datasetId** | **String**| the Dataset Identifier | 
 **twinGraphQuery** | [**DatasetTwinGraphQuery**](.md)|  | 
 **body** | **File**|  | 

### Return type

[**TwinGraphBatchResult**](TwinGraphBatchResult.md)

### Authorization

[oAuth2AuthCode](../README.md#oAuth2AuthCode)

### HTTP request headers

- **Content-Type**: text/csv, application/octet-stream
- **Accept**: application/json


## twingraphQuery

> String twingraphQuery(organizationId, datasetId, datasetTwinGraphQuery)

Return the result of a query made on the graph instance as a json

Run a query on a graph instance and return the result as a json

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
let datasetTwinGraphQuery = new CosmotechApi.DatasetTwinGraphQuery(); // DatasetTwinGraphQuery | the query to run
apiInstance.twingraphQuery(organizationId, datasetId, datasetTwinGraphQuery).then((data) => {
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
 **datasetTwinGraphQuery** | [**DatasetTwinGraphQuery**](DatasetTwinGraphQuery.md)| the query to run | 

### Return type

**String**

### Authorization

[oAuth2AuthCode](../README.md#oAuth2AuthCode)

### HTTP request headers

- **Content-Type**: application/json
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
let dataset = new CosmotechApi.Dataset(); // Dataset | the new Dataset details. This endpoint can't be used to update security
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
 **dataset** | [**Dataset**](Dataset.md)| the new Dataset details. This endpoint can&#39;t be used to update security | 

### Return type

[**Dataset**](Dataset.md)

### Authorization

[oAuth2AuthCode](../README.md#oAuth2AuthCode)

### HTTP request headers

- **Content-Type**: application/json, application/yaml
- **Accept**: application/json


## updateDatasetAccessControl

> DatasetAccessControl updateDatasetAccessControl(organizationId, datasetId, identityId, datasetRole)

Update the specified access to User for a Dataset

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
let identityId = "identityId_example"; // String | the User identifier
let datasetRole = new CosmotechApi.DatasetRole(); // DatasetRole | The new Dataset Access Control
apiInstance.updateDatasetAccessControl(organizationId, datasetId, identityId, datasetRole).then((data) => {
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
 **identityId** | **String**| the User identifier | 
 **datasetRole** | [**DatasetRole**](DatasetRole.md)| The new Dataset Access Control | 

### Return type

[**DatasetAccessControl**](DatasetAccessControl.md)

### Authorization

[oAuth2AuthCode](../README.md#oAuth2AuthCode)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json


## updateTwingraphEntities

> String updateTwingraphEntities(organizationId, datasetId, type, graphProperties)

Update entities in a graph instance

update entities in a graph instance

### Example

```javascript
import CosmotechApi from '@cosmotech/api';
let defaultClient = CosmotechApi.ApiClient.instance;
// Configure OAuth2 access token for authorization: oAuth2AuthCode
let oAuth2AuthCode = defaultClient.authentications['oAuth2AuthCode'];
oAuth2AuthCode.accessToken = 'YOUR ACCESS TOKEN';

let apiInstance = new CosmotechApi.DatasetApi();
let organizationId = "organizationId_example"; // String | the Organization identifier
let datasetId = "datasetId_example"; // String | the Dataset Identifier
let type = "type_example"; // String | the entity model type
let graphProperties = [new CosmotechApi.GraphProperties()]; // [GraphProperties] | the entities to update
apiInstance.updateTwingraphEntities(organizationId, datasetId, type, graphProperties).then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, (error) => {
  console.error(error);
});

```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **organizationId** | **String**| the Organization identifier | 
 **datasetId** | **String**| the Dataset Identifier | 
 **type** | **String**| the entity model type | 
 **graphProperties** | [**[GraphProperties]**](GraphProperties.md)| the entities to update | 

### Return type

**String**

### Authorization

[oAuth2AuthCode](../README.md#oAuth2AuthCode)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json


## uploadTwingraph

> FileUploadValidation uploadTwingraph(organizationId, datasetId, body)

Upload data from zip file to dataset&#39;s twingraph

To create a new graph from flat files,  you need to create a Zip file. This Zip file must countain two folders named Edges and Nodes.  .zip hierarchy: *main_folder/Nodes *main_folder/Edges  In each folder you can place one or multiple csv files containing your Nodes or Edges data.  Your csv files must follow the following header (column name) requirements:  The Nodes CSVs requires at least one column (the 1st).Column name &#x3D; &#39;id&#39;. It will represent the nodes ID Ids must be populated with string  The Edges CSVs require three columns named, in order, * source * target * id  those colomns represent * The source of the edge * The target of the edge * The id of the edge  All following columns content are up to you. 

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
let body = "/path/to/file"; // File | 
apiInstance.uploadTwingraph(organizationId, datasetId, body).then((data) => {
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
 **body** | **File**|  | 

### Return type

[**FileUploadValidation**](FileUploadValidation.md)

### Authorization

[oAuth2AuthCode](../README.md#oAuth2AuthCode)

### HTTP request headers

- **Content-Type**: application/octet-stream
- **Accept**: application/json

