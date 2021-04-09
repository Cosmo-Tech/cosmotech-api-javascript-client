# CosmotechApi.SimulatorApi

All URIs are relative to *https://api.azure.cosmo-platform.com*

Method | HTTP request | Description
------------- | ------------- | -------------
[**createSimulator**](SimulatorApi.md#createSimulator) | **POST** /organizations/{organization_id}/simulators | Register a new simulator
[**deleteSimulator**](SimulatorApi.md#deleteSimulator) | **DELETE** /organizations/{organization_id}/simulators/{simulator_id} | Delete a simulator
[**findAllSimulators**](SimulatorApi.md#findAllSimulators) | **GET** /organizations/{organization_id}/simulators | List all Simulators
[**findSimulatorById**](SimulatorApi.md#findSimulatorById) | **GET** /organizations/{organization_id}/simulators/{simulator_id} | Get the details of a simulator
[**updateSimulator**](SimulatorApi.md#updateSimulator) | **PATCH** /organizations/{organization_id}/simulators/{simulator_id} | Update a simulator



## createSimulator

> Simulator createSimulator(organizationId, simulator)

Register a new simulator

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

let apiInstance = new CosmotechApi.SimulatorApi();
let organizationId = "organizationId_example"; // String | the Organization identifier
let simulator = new CosmotechApi.Simulator(); // Simulator | the Simulator to create
apiInstance.createSimulator(organizationId, simulator, (error, data, response) => {
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
 **simulator** | [**Simulator**](Simulator.md)| the Simulator to create | 

### Return type

[**Simulator**](Simulator.md)

### Authorization

[AADOAuth2AuthCode](../README.md#AADOAuth2AuthCode), [ApiKeyAuth](../README.md#ApiKeyAuth)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json


## deleteSimulator

> Simulator deleteSimulator(organizationId, simulatorId)

Delete a simulator

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

let apiInstance = new CosmotechApi.SimulatorApi();
let organizationId = "organizationId_example"; // String | the Organization identifier
let simulatorId = "simulatorId_example"; // String | the Simulator identifier
apiInstance.deleteSimulator(organizationId, simulatorId, (error, data, response) => {
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
 **simulatorId** | **String**| the Simulator identifier | 

### Return type

[**Simulator**](Simulator.md)

### Authorization

[AADOAuth2AuthCode](../README.md#AADOAuth2AuthCode), [ApiKeyAuth](../README.md#ApiKeyAuth)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## findAllSimulators

> [Simulator] findAllSimulators(organizationId)

List all Simulators

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

let apiInstance = new CosmotechApi.SimulatorApi();
let organizationId = "organizationId_example"; // String | the Organization identifier
apiInstance.findAllSimulators(organizationId, (error, data, response) => {
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

[**[Simulator]**](Simulator.md)

### Authorization

[AADOAuth2AuthCode](../README.md#AADOAuth2AuthCode), [ApiKeyAuth](../README.md#ApiKeyAuth)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## findSimulatorById

> Simulator findSimulatorById(organizationId, simulatorId)

Get the details of a simulator

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

let apiInstance = new CosmotechApi.SimulatorApi();
let organizationId = "organizationId_example"; // String | the Organization identifier
let simulatorId = "simulatorId_example"; // String | the Simulator identifier
apiInstance.findSimulatorById(organizationId, simulatorId, (error, data, response) => {
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
 **simulatorId** | **String**| the Simulator identifier | 

### Return type

[**Simulator**](Simulator.md)

### Authorization

[AADOAuth2AuthCode](../README.md#AADOAuth2AuthCode), [ApiKeyAuth](../README.md#ApiKeyAuth)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## updateSimulator

> Simulator updateSimulator(organizationId, simulatorId, simulator)

Update a simulator

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

let apiInstance = new CosmotechApi.SimulatorApi();
let organizationId = "organizationId_example"; // String | the Organization identifier
let simulatorId = "simulatorId_example"; // String | the Simulator identifier
let simulator = new CosmotechApi.Simulator(); // Simulator | the new Simulator details.
apiInstance.updateSimulator(organizationId, simulatorId, simulator, (error, data, response) => {
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
 **simulatorId** | **String**| the Simulator identifier | 
 **simulator** | [**Simulator**](Simulator.md)| the new Simulator details. | 

### Return type

[**Simulator**](Simulator.md)

### Authorization

[AADOAuth2AuthCode](../README.md#AADOAuth2AuthCode), [ApiKeyAuth](../README.md#ApiKeyAuth)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json

