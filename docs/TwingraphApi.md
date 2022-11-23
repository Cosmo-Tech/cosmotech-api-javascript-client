# CosmotechApi.TwingraphApi

All URIs are relative to *https://dev.api.cosmotech.com*

Method | HTTP request | Description
------------- | ------------- | -------------
[**callDelete**](TwingraphApi.md#callDelete) | **DELETE** /organizations/{organization_id}/twingraph/{graph_id} | 
[**importGraph**](TwingraphApi.md#importGraph) | **POST** /organizations/{organization_id}/twingraph/import | 
[**query**](TwingraphApi.md#query) | **POST** /organizations/{organization_id}/twingraph/{graph_id}/query | 



## callDelete

> callDelete(organizationId, graphId)



Launch a mass delete job

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


## importGraph

> TwinGraphImportInfo importGraph(organizationId, twinGraphImport)



Import a new version of a twin graph

### Example

```javascript
import CosmotechApi from '@cosmotech/api';
let defaultClient = CosmotechApi.ApiClient.instance;
// Configure OAuth2 access token for authorization: oAuth2AuthCode
let oAuth2AuthCode = defaultClient.authentications['oAuth2AuthCode'];
oAuth2AuthCode.accessToken = 'YOUR ACCESS TOKEN';

let apiInstance = new CosmotechApi.TwingraphApi();
let organizationId = "organizationId_example"; // String | the Organization identifier
let twinGraphImport = new CosmotechApi.TwinGraphImport(); // TwinGraphImport | the graph to import
apiInstance.importGraph(organizationId, twinGraphImport).then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, (error) => {
  console.error(error);
});

```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **organizationId** | **String**| the Organization identifier | 
 **twinGraphImport** | [**TwinGraphImport**](TwinGraphImport.md)| the graph to import | 

### Return type

[**TwinGraphImportInfo**](TwinGraphImportInfo.md)

### Authorization

[oAuth2AuthCode](../README.md#oAuth2AuthCode)

### HTTP request headers

- **Content-Type**: application/json, application/yaml
- **Accept**: application/json


## query

> String query(organizationId, graphId, twinGraphQuery)



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

