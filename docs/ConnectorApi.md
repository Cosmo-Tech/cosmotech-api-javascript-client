# CosmotechApi.ConnectorApi

All URIs are relative to *https://api.azure.cosmo-platform.com*

Method | HTTP request | Description
------------- | ------------- | -------------
[**findAllConnectors**](ConnectorApi.md#findAllConnectors) | **GET** /connectors | List all Connectors
[**findConnectorById**](ConnectorApi.md#findConnectorById) | **GET** /connectors/{connector_id} | Get the details of an connector
[**registerConnector**](ConnectorApi.md#registerConnector) | **POST** /connectors | Register a new connector
[**unregisterConnector**](ConnectorApi.md#unregisterConnector) | **DELETE** /connectors/{connector_id} | Unregister an connector
[**uploadConnector**](ConnectorApi.md#uploadConnector) | **POST** /connectors/upload | Upload and register a new connector



## findAllConnectors

> [Connector] findAllConnectors()

List all Connectors

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

let apiInstance = new CosmotechApi.ConnectorApi();
apiInstance.findAllConnectors((error, data, response) => {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
});
```

### Parameters

This endpoint does not need any parameter.

### Return type

[**[Connector]**](Connector.md)

### Authorization

[AADOAuth2AuthCode](../README.md#AADOAuth2AuthCode), [ApiKeyAuth](../README.md#ApiKeyAuth)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## findConnectorById

> Connector findConnectorById(connectorId)

Get the details of an connector

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

let apiInstance = new CosmotechApi.ConnectorApi();
let connectorId = "connectorId_example"; // String | the Connector identifier
apiInstance.findConnectorById(connectorId, (error, data, response) => {
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
 **connectorId** | **String**| the Connector identifier | 

### Return type

[**Connector**](Connector.md)

### Authorization

[AADOAuth2AuthCode](../README.md#AADOAuth2AuthCode), [ApiKeyAuth](../README.md#ApiKeyAuth)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## registerConnector

> Connector registerConnector(connector)

Register a new connector

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

let apiInstance = new CosmotechApi.ConnectorApi();
let connector = new CosmotechApi.Connector(); // Connector | the Connector to register
apiInstance.registerConnector(connector, (error, data, response) => {
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
 **connector** | [**Connector**](Connector.md)| the Connector to register | 

### Return type

[**Connector**](Connector.md)

### Authorization

[AADOAuth2AuthCode](../README.md#AADOAuth2AuthCode), [ApiKeyAuth](../README.md#ApiKeyAuth)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json


## unregisterConnector

> Connector unregisterConnector(connectorId)

Unregister an connector

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

let apiInstance = new CosmotechApi.ConnectorApi();
let connectorId = "connectorId_example"; // String | the Connector identifier
apiInstance.unregisterConnector(connectorId, (error, data, response) => {
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
 **connectorId** | **String**| the Connector identifier | 

### Return type

[**Connector**](Connector.md)

### Authorization

[AADOAuth2AuthCode](../README.md#AADOAuth2AuthCode), [ApiKeyAuth](../README.md#ApiKeyAuth)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## uploadConnector

> Connector uploadConnector(body)

Upload and register a new connector

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

let apiInstance = new CosmotechApi.ConnectorApi();
let body = "/path/to/file"; // File | the Connector to upload and register
apiInstance.uploadConnector(body, (error, data, response) => {
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
 **body** | **File**| the Connector to upload and register | 

### Return type

[**Connector**](Connector.md)

### Authorization

[AADOAuth2AuthCode](../README.md#AADOAuth2AuthCode), [ApiKeyAuth](../README.md#ApiKeyAuth)

### HTTP request headers

- **Content-Type**: application/yaml
- **Accept**: application/json

