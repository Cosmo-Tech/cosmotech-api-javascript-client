# CosmotechApi.SimulatorApi

All URIs are relative to *https://api.azure.cosmo-platform.com*

Method | HTTP request | Description
------------- | ------------- | -------------
[**createSimulator**](SimulatorApi.md#createSimulator) | **POST** /organizations/{organization_id}/simulators | Register a new simulator
[**deleteSimulator**](SimulatorApi.md#deleteSimulator) | **DELETE** /organizations/{organization_id}/simulators/{simulator_id} | Delete a simulator
[**findAllSimulators**](SimulatorApi.md#findAllSimulators) | **GET** /organizations/{organization_id}/simulators | List all Simulators
[**findSimulatorById**](SimulatorApi.md#findSimulatorById) | **GET** /organizations/{organization_id}/simulators/{simulator_id} | Get the details of a simulator
[**updateSimulator**](SimulatorApi.md#updateSimulator) | **PATCH** /organizations/{organization_id}/simulators/{simulator_id} | Update a simulator
[**upload**](SimulatorApi.md#upload) | **POST** /organizations/{organization_id}/simulators/upload | Upload and register a new simulator



## createSimulator

> Simulator createSimulator(organizationId, simulator)

Register a new simulator

### Example

```javascript
import CosmotechApi from '@cosmotech/api';
let defaultClient = CosmotechApi.ApiClient.instance;
// Configure OAuth2 access token for authorization: oAuth2AuthCode
let oAuth2AuthCode = defaultClient.authentications['oAuth2AuthCode'];
oAuth2AuthCode.accessToken = 'YOUR ACCESS TOKEN';

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

[oAuth2AuthCode](../README.md#oAuth2AuthCode)

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
// Configure OAuth2 access token for authorization: oAuth2AuthCode
let oAuth2AuthCode = defaultClient.authentications['oAuth2AuthCode'];
oAuth2AuthCode.accessToken = 'YOUR ACCESS TOKEN';

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

[oAuth2AuthCode](../README.md#oAuth2AuthCode)

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
// Configure OAuth2 access token for authorization: oAuth2AuthCode
let oAuth2AuthCode = defaultClient.authentications['oAuth2AuthCode'];
oAuth2AuthCode.accessToken = 'YOUR ACCESS TOKEN';

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

[oAuth2AuthCode](../README.md#oAuth2AuthCode)

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
// Configure OAuth2 access token for authorization: oAuth2AuthCode
let oAuth2AuthCode = defaultClient.authentications['oAuth2AuthCode'];
oAuth2AuthCode.accessToken = 'YOUR ACCESS TOKEN';

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

[oAuth2AuthCode](../README.md#oAuth2AuthCode)

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
// Configure OAuth2 access token for authorization: oAuth2AuthCode
let oAuth2AuthCode = defaultClient.authentications['oAuth2AuthCode'];
oAuth2AuthCode.accessToken = 'YOUR ACCESS TOKEN';

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

[oAuth2AuthCode](../README.md#oAuth2AuthCode)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json


## upload

> Simulator upload(organizationId, body)

Upload and register a new simulator

### Example

```javascript
import CosmotechApi from '@cosmotech/api';
let defaultClient = CosmotechApi.ApiClient.instance;
// Configure OAuth2 access token for authorization: oAuth2AuthCode
let oAuth2AuthCode = defaultClient.authentications['oAuth2AuthCode'];
oAuth2AuthCode.accessToken = 'YOUR ACCESS TOKEN';

let apiInstance = new CosmotechApi.SimulatorApi();
let organizationId = "organizationId_example"; // String | the Organization identifier
let body = "/path/to/file"; // File | the Simulator to upload and register
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
 **body** | **File**| the Simulator to upload and register | 

### Return type

[**Simulator**](Simulator.md)

### Authorization

[oAuth2AuthCode](../README.md#oAuth2AuthCode)

### HTTP request headers

- **Content-Type**: application/yaml
- **Accept**: application/json

