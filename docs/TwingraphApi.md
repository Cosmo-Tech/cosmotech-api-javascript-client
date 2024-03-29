# CosmotechApi.TwingraphApi

All URIs are relative to *https://dev.api.cosmotech.com*

Method | HTTP request | Description
------------- | ------------- | -------------
[**batchQuery**](TwingraphApi.md#batchQuery) | **POST** /organizations/{organization_id}/twingraph/{graph_id}/batch-query | Run a query on a graph instance and return the result as a zip file in async mode
[**batchUploadUpdate**](TwingraphApi.md#batchUploadUpdate) | **POST** /organizations/{organization_id}/twingraph/{graph_id}/batch | Async batch update by loading a CSV file on a graph instance 
[**callDelete**](TwingraphApi.md#callDelete) | **DELETE** /organizations/{organization_id}/twingraph/{graph_id} | Delete all versions of a graph and his metadatas
[**createEntities**](TwingraphApi.md#createEntities) | **POST** /organizations/{organization_id}/twingraph/{graph_id}/entity/{type} | Create new entities in a graph instance
[**createGraph**](TwingraphApi.md#createGraph) | **POST** /organizations/{organization_id}/twingraph/{graph_id} | Create a new graph
[**deleteEntities**](TwingraphApi.md#deleteEntities) | **DELETE** /organizations/{organization_id}/twingraph/{graph_id}/entity/{type} | Delete entities in a graph instance
[**downloadGraph**](TwingraphApi.md#downloadGraph) | **GET** /organizations/{organization_id}/twingraph/download/{hash} | Download a graph compressed in a zip file
[**findAllTwingraphs**](TwingraphApi.md#findAllTwingraphs) | **GET** /organizations/{organization_id}/twingraphs | Return the list of all graphs stored in the organization
[**getEntities**](TwingraphApi.md#getEntities) | **GET** /organizations/{organization_id}/twingraph/{graph_id}/entity/{type} | Get entities in a graph instance
[**getGraphMetaData**](TwingraphApi.md#getGraphMetaData) | **GET** /organizations/{organization_id}/twingraph/{graph_id}/metadata | Return the metaData of the specified graph
[**jobStatus**](TwingraphApi.md#jobStatus) | **GET** /organizations/{organization_id}/job/{job_id}/status | Get the status of a job
[**query**](TwingraphApi.md#query) | **POST** /organizations/{organization_id}/twingraph/{graph_id}/query | Run a query on a graph instance
[**updateEntities**](TwingraphApi.md#updateEntities) | **PATCH** /organizations/{organization_id}/twingraph/{graph_id}/entity/{type} | Update entities in a graph instance
[**updateGraphMetaData**](TwingraphApi.md#updateGraphMetaData) | **PATCH** /organizations/{organization_id}/twingraph/{graph_id}/metadata | Update the metaData of the specified graph



## batchQuery

> TwinGraphHash batchQuery(organizationId, graphId, twinGraphQuery)

Run a query on a graph instance and return the result as a zip file in async mode

Run a query on a graph instance and return the result as a zip file in async mode

### Example

```javascript
import CosmotechApi from '@cosmotech/api';
let defaultClient = CosmotechApi.ApiClient.instance;
// Configure OAuth2 access token for authorization: oAuth2AuthCode
let oAuth2AuthCode = defaultClient.authentications['oAuth2AuthCode'];
oAuth2AuthCode.accessToken = 'YOUR ACCESS TOKEN';

let apiInstance = new CosmotechApi.TwingraphApi();
let organizationId = "organizationId_example"; // String | the Organization identifier
let graphId = "graphId_example"; // String | the Graph Identifier
let twinGraphQuery = new CosmotechApi.TwinGraphQuery(); // TwinGraphQuery | the query to run
apiInstance.batchQuery(organizationId, graphId, twinGraphQuery).then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, (error) => {
  console.error(error);
});

```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **organizationId** | **String**| the Organization identifier | 
 **graphId** | **String**| the Graph Identifier | 
 **twinGraphQuery** | [**TwinGraphQuery**](TwinGraphQuery.md)| the query to run | 

### Return type

[**TwinGraphHash**](TwinGraphHash.md)

### Authorization

[oAuth2AuthCode](../README.md#oAuth2AuthCode)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json


## batchUploadUpdate

> TwinGraphBatchResult batchUploadUpdate(organizationId, graphId, twinGraphQuery, body)

Async batch update by loading a CSV file on a graph instance 

Async batch update by loading a CSV file on a graph instance 

### Example

```javascript
import CosmotechApi from '@cosmotech/api';
let defaultClient = CosmotechApi.ApiClient.instance;
// Configure OAuth2 access token for authorization: oAuth2AuthCode
let oAuth2AuthCode = defaultClient.authentications['oAuth2AuthCode'];
oAuth2AuthCode.accessToken = 'YOUR ACCESS TOKEN';

let apiInstance = new CosmotechApi.TwingraphApi();
let organizationId = "organizationId_example"; // String | the Organization identifier
let graphId = "graphId_example"; // String | the Graph Identifier
let twinGraphQuery = {"query":"CREATE (:Person {id: toInteger($id), name: $name, rank: toInteger($rank)})"}; // TwinGraphQuery | 
let body = id,name,rank
1,"John Doe",37
2,"Joe Bloggs",14
; // File | 
apiInstance.batchUploadUpdate(organizationId, graphId, twinGraphQuery, body).then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, (error) => {
  console.error(error);
});

```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **organizationId** | **String**| the Organization identifier | 
 **graphId** | **String**| the Graph Identifier | 
 **twinGraphQuery** | [**TwinGraphQuery**](.md)|  | 
 **body** | **File**|  | 

### Return type

[**TwinGraphBatchResult**](TwinGraphBatchResult.md)

### Authorization

[oAuth2AuthCode](../README.md#oAuth2AuthCode)

### HTTP request headers

- **Content-Type**: text/csv, application/octet-stream
- **Accept**: application/json


## callDelete

> callDelete(organizationId, graphId)

Delete all versions of a graph and his metadatas

Delete all versions of a graph and his metadatas

### Example

```javascript
import CosmotechApi from '@cosmotech/api';
let defaultClient = CosmotechApi.ApiClient.instance;
// Configure OAuth2 access token for authorization: oAuth2AuthCode
let oAuth2AuthCode = defaultClient.authentications['oAuth2AuthCode'];
oAuth2AuthCode.accessToken = 'YOUR ACCESS TOKEN';

let apiInstance = new CosmotechApi.TwingraphApi();
let organizationId = "organizationId_example"; // String | the Organization identifier
let graphId = "graphId_example"; // String | the Graph Identifier
apiInstance.callDelete(organizationId, graphId).then(() => {
  console.log('API called successfully.');
}, (error) => {
  console.error(error);
});

```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **organizationId** | **String**| the Organization identifier | 
 **graphId** | **String**| the Graph Identifier | 

### Return type

null (empty response body)

### Authorization

[oAuth2AuthCode](../README.md#oAuth2AuthCode)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: Not defined


## createEntities

> String createEntities(organizationId, graphId, type, graphProperties)

Create new entities in a graph instance

create new entities in a graph instance

### Example

```javascript
import CosmotechApi from '@cosmotech/api';
let defaultClient = CosmotechApi.ApiClient.instance;
// Configure OAuth2 access token for authorization: oAuth2AuthCode
let oAuth2AuthCode = defaultClient.authentications['oAuth2AuthCode'];
oAuth2AuthCode.accessToken = 'YOUR ACCESS TOKEN';

let apiInstance = new CosmotechApi.TwingraphApi();
let organizationId = "organizationId_example"; // String | the Organization identifier
let graphId = "graphId_example"; // String | the Graph Identifier
let type = "type_example"; // String | the entity model type
let graphProperties = [new CosmotechApi.GraphProperties()]; // [GraphProperties] | the entities to create
apiInstance.createEntities(organizationId, graphId, type, graphProperties).then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, (error) => {
  console.error(error);
});

```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **organizationId** | **String**| the Organization identifier | 
 **graphId** | **String**| the Graph Identifier | 
 **type** | **String**| the entity model type | 
 **graphProperties** | [**[GraphProperties]**](GraphProperties.md)| the entities to create | 

### Return type

**String**

### Authorization

[oAuth2AuthCode](../README.md#oAuth2AuthCode)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json


## createGraph

> createGraph(organizationId, graphId, opts)

Create a new graph

To create a new graph from flat files,  you need to create a Zip file. This Zip file must countain two folders named Edges and Nodes.  .zip hierarchy: *main_folder/Nodes *main_folder/Edges  In each folder you can place one or multiple csv files containing your Nodes or Edges data.  Your csv files must follow the following header (column name) requirements:  The Nodes CSVs requires at least one column (the 1st).Column name &#x3D; &#39;id&#39;. It will represent the nodes ID Ids must be populated with string  The Edges CSVs require three columns named, in order, * source * target * id  those colomns represent * The source of the edge * The target of the edge * The id of the edge  All following columns content are up to you. 

### Example

```javascript
import CosmotechApi from '@cosmotech/api';
let defaultClient = CosmotechApi.ApiClient.instance;
// Configure OAuth2 access token for authorization: oAuth2AuthCode
let oAuth2AuthCode = defaultClient.authentications['oAuth2AuthCode'];
oAuth2AuthCode.accessToken = 'YOUR ACCESS TOKEN';

let apiInstance = new CosmotechApi.TwingraphApi();
let organizationId = "organizationId_example"; // String | the Organization identifier
let graphId = "graphId_example"; // String | the Graph Identifier
let opts = {
  'body': "/path/to/file" // File | 
};
apiInstance.createGraph(organizationId, graphId, opts).then(() => {
  console.log('API called successfully.');
}, (error) => {
  console.error(error);
});

```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **organizationId** | **String**| the Organization identifier | 
 **graphId** | **String**| the Graph Identifier | 
 **body** | **File**|  | [optional] 

### Return type

null (empty response body)

### Authorization

[oAuth2AuthCode](../README.md#oAuth2AuthCode)

### HTTP request headers

- **Content-Type**: application/octet-stream
- **Accept**: Not defined


## deleteEntities

> deleteEntities(organizationId, graphId, type, ids)

Delete entities in a graph instance

delete entities in a graph instance

### Example

```javascript
import CosmotechApi from '@cosmotech/api';
let defaultClient = CosmotechApi.ApiClient.instance;
// Configure OAuth2 access token for authorization: oAuth2AuthCode
let oAuth2AuthCode = defaultClient.authentications['oAuth2AuthCode'];
oAuth2AuthCode.accessToken = 'YOUR ACCESS TOKEN';

let apiInstance = new CosmotechApi.TwingraphApi();
let organizationId = "organizationId_example"; // String | the Organization identifier
let graphId = "graphId_example"; // String | the Graph Identifier
let type = "type_example"; // String | the entity model type
let ids = ["null"]; // [String] | the entities to delete
apiInstance.deleteEntities(organizationId, graphId, type, ids).then(() => {
  console.log('API called successfully.');
}, (error) => {
  console.error(error);
});

```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **organizationId** | **String**| the Organization identifier | 
 **graphId** | **String**| the Graph Identifier | 
 **type** | **String**| the entity model type | 
 **ids** | [**[String]**](String.md)| the entities to delete | 

### Return type

null (empty response body)

### Authorization

[oAuth2AuthCode](../README.md#oAuth2AuthCode)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: Not defined


## downloadGraph

> File downloadGraph(organizationId, hash)

Download a graph compressed in a zip file

Download a graph compressed in a zip file

### Example

```javascript
import CosmotechApi from '@cosmotech/api';
let defaultClient = CosmotechApi.ApiClient.instance;
// Configure OAuth2 access token for authorization: oAuth2AuthCode
let oAuth2AuthCode = defaultClient.authentications['oAuth2AuthCode'];
oAuth2AuthCode.accessToken = 'YOUR ACCESS TOKEN';

let apiInstance = new CosmotechApi.TwingraphApi();
let organizationId = "organizationId_example"; // String | the Organization identifier
let hash = "hash_example"; // String | the Graph download identifier
apiInstance.downloadGraph(organizationId, hash).then((data) => {
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


## findAllTwingraphs

> [String] findAllTwingraphs(organizationId)

Return the list of all graphs stored in the organization

Return the list of all graphs stored in the organization

### Example

```javascript
import CosmotechApi from '@cosmotech/api';
let defaultClient = CosmotechApi.ApiClient.instance;
// Configure OAuth2 access token for authorization: oAuth2AuthCode
let oAuth2AuthCode = defaultClient.authentications['oAuth2AuthCode'];
oAuth2AuthCode.accessToken = 'YOUR ACCESS TOKEN';

let apiInstance = new CosmotechApi.TwingraphApi();
let organizationId = "organizationId_example"; // String | the Organization identifier
apiInstance.findAllTwingraphs(organizationId).then((data) => {
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

**[String]**

### Authorization

[oAuth2AuthCode](../README.md#oAuth2AuthCode)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## getEntities

> String getEntities(organizationId, graphId, type, ids)

Get entities in a graph instance

get entities in a graph instance

### Example

```javascript
import CosmotechApi from '@cosmotech/api';
let defaultClient = CosmotechApi.ApiClient.instance;
// Configure OAuth2 access token for authorization: oAuth2AuthCode
let oAuth2AuthCode = defaultClient.authentications['oAuth2AuthCode'];
oAuth2AuthCode.accessToken = 'YOUR ACCESS TOKEN';

let apiInstance = new CosmotechApi.TwingraphApi();
let organizationId = "organizationId_example"; // String | the Organization identifier
let graphId = "graphId_example"; // String | the Graph Identifier
let type = "type_example"; // String | the entity model type
let ids = ["null"]; // [String] | the entities to get
apiInstance.getEntities(organizationId, graphId, type, ids).then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, (error) => {
  console.error(error);
});

```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **organizationId** | **String**| the Organization identifier | 
 **graphId** | **String**| the Graph Identifier | 
 **type** | **String**| the entity model type | 
 **ids** | [**[String]**](String.md)| the entities to get | 

### Return type

**String**

### Authorization

[oAuth2AuthCode](../README.md#oAuth2AuthCode)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## getGraphMetaData

> Object getGraphMetaData(organizationId, graphId)

Return the metaData of the specified graph

Return the metaData of the specified graph

### Example

```javascript
import CosmotechApi from '@cosmotech/api';
let defaultClient = CosmotechApi.ApiClient.instance;
// Configure OAuth2 access token for authorization: oAuth2AuthCode
let oAuth2AuthCode = defaultClient.authentications['oAuth2AuthCode'];
oAuth2AuthCode.accessToken = 'YOUR ACCESS TOKEN';

let apiInstance = new CosmotechApi.TwingraphApi();
let organizationId = "organizationId_example"; // String | the Organization identifier
let graphId = "graphId_example"; // String | the Graph Identifier
apiInstance.getGraphMetaData(organizationId, graphId).then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, (error) => {
  console.error(error);
});

```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **organizationId** | **String**| the Organization identifier | 
 **graphId** | **String**| the Graph Identifier | 

### Return type

**Object**

### Authorization

[oAuth2AuthCode](../README.md#oAuth2AuthCode)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## jobStatus

> String jobStatus(organizationId, jobId)

Get the status of a job

Get the status of a job

### Example

```javascript
import CosmotechApi from '@cosmotech/api';
let defaultClient = CosmotechApi.ApiClient.instance;
// Configure OAuth2 access token for authorization: oAuth2AuthCode
let oAuth2AuthCode = defaultClient.authentications['oAuth2AuthCode'];
oAuth2AuthCode.accessToken = 'YOUR ACCESS TOKEN';

let apiInstance = new CosmotechApi.TwingraphApi();
let organizationId = "organizationId_example"; // String | the Organization identifier
let jobId = "jobId_example"; // String | the job identifier
apiInstance.jobStatus(organizationId, jobId).then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, (error) => {
  console.error(error);
});

```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **organizationId** | **String**| the Organization identifier | 
 **jobId** | **String**| the job identifier | 

### Return type

**String**

### Authorization

[oAuth2AuthCode](../README.md#oAuth2AuthCode)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/yaml, application/json


## query

> String query(organizationId, graphId, twinGraphQuery)

Run a query on a graph instance

Run a query on a graph instance

### Example

```javascript
import CosmotechApi from '@cosmotech/api';
let defaultClient = CosmotechApi.ApiClient.instance;
// Configure OAuth2 access token for authorization: oAuth2AuthCode
let oAuth2AuthCode = defaultClient.authentications['oAuth2AuthCode'];
oAuth2AuthCode.accessToken = 'YOUR ACCESS TOKEN';

let apiInstance = new CosmotechApi.TwingraphApi();
let organizationId = "organizationId_example"; // String | the Organization identifier
let graphId = "graphId_example"; // String | the Graph Identifier
let twinGraphQuery = new CosmotechApi.TwinGraphQuery(); // TwinGraphQuery | the query to run
apiInstance.query(organizationId, graphId, twinGraphQuery).then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, (error) => {
  console.error(error);
});

```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **organizationId** | **String**| the Organization identifier | 
 **graphId** | **String**| the Graph Identifier | 
 **twinGraphQuery** | [**TwinGraphQuery**](TwinGraphQuery.md)| the query to run | 

### Return type

**String**

### Authorization

[oAuth2AuthCode](../README.md#oAuth2AuthCode)

### HTTP request headers

- **Content-Type**: application/json, application/yaml
- **Accept**: application/json


## updateEntities

> String updateEntities(organizationId, graphId, type, graphProperties)

Update entities in a graph instance

update entities in a graph instance

### Example

```javascript
import CosmotechApi from '@cosmotech/api';
let defaultClient = CosmotechApi.ApiClient.instance;
// Configure OAuth2 access token for authorization: oAuth2AuthCode
let oAuth2AuthCode = defaultClient.authentications['oAuth2AuthCode'];
oAuth2AuthCode.accessToken = 'YOUR ACCESS TOKEN';

let apiInstance = new CosmotechApi.TwingraphApi();
let organizationId = "organizationId_example"; // String | the Organization identifier
let graphId = "graphId_example"; // String | the Graph Identifier
let type = "type_example"; // String | the entity model type
let graphProperties = [new CosmotechApi.GraphProperties()]; // [GraphProperties] | the entities to update
apiInstance.updateEntities(organizationId, graphId, type, graphProperties).then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, (error) => {
  console.error(error);
});

```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **organizationId** | **String**| the Organization identifier | 
 **graphId** | **String**| the Graph Identifier | 
 **type** | **String**| the entity model type | 
 **graphProperties** | [**[GraphProperties]**](GraphProperties.md)| the entities to update | 

### Return type

**String**

### Authorization

[oAuth2AuthCode](../README.md#oAuth2AuthCode)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json


## updateGraphMetaData

> Object updateGraphMetaData(organizationId, graphId, requestBody)

Update the metaData of the specified graph

Update the metaData of the specified graph

### Example

```javascript
import CosmotechApi from '@cosmotech/api';
let defaultClient = CosmotechApi.ApiClient.instance;
// Configure OAuth2 access token for authorization: oAuth2AuthCode
let oAuth2AuthCode = defaultClient.authentications['oAuth2AuthCode'];
oAuth2AuthCode.accessToken = 'YOUR ACCESS TOKEN';

let apiInstance = new CosmotechApi.TwingraphApi();
let organizationId = "organizationId_example"; // String | the Organization identifier
let graphId = "graphId_example"; // String | the Graph Identifier
let requestBody = {"graphName":"My Awesome Graph","graphRotation":"2"}; // {String: String} | the metaData to update
apiInstance.updateGraphMetaData(organizationId, graphId, requestBody).then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, (error) => {
  console.error(error);
});

```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **organizationId** | **String**| the Organization identifier | 
 **graphId** | **String**| the Graph Identifier | 
 **requestBody** | [**{String: String}**](String.md)| the metaData to update | 

### Return type

**Object**

### Authorization

[oAuth2AuthCode](../README.md#oAuth2AuthCode)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json

