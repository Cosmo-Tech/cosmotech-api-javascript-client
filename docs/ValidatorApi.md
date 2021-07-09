# CosmotechApi.ValidatorApi

All URIs are relative to *https://api.cosmotech.com*

Method | HTTP request | Description
------------- | ------------- | -------------
[**createValidator**](ValidatorApi.md#createValidator) | **POST** /organizations/{organization_id}/datasets/validators | Register a new validator
[**createValidatorRun**](ValidatorApi.md#createValidatorRun) | **POST** /organizations/{organization_id}/datasets/validators/{validator_id}/history | Register a new validator run
[**deleteValidator**](ValidatorApi.md#deleteValidator) | **DELETE** /organizations/{organization_id}/datasets/validators/{validator_id} | Delete a validator
[**deleteValidatorRun**](ValidatorApi.md#deleteValidatorRun) | **DELETE** /organizations/{organization_id}/datasets/validators/{validator_id}/history/{validatorrun_id} | Delete a validator run
[**findAllValidatorRuns**](ValidatorApi.md#findAllValidatorRuns) | **GET** /organizations/{organization_id}/datasets/validators/{validator_id}/history | List all Validator Runs
[**findAllValidators**](ValidatorApi.md#findAllValidators) | **GET** /organizations/{organization_id}/datasets/validators | List all Validators
[**findValidatorById**](ValidatorApi.md#findValidatorById) | **GET** /organizations/{organization_id}/datasets/validators/{validator_id} | Get the details of a validator
[**findValidatorRunById**](ValidatorApi.md#findValidatorRunById) | **GET** /organizations/{organization_id}/datasets/validators/{validator_id}/history/{validatorrun_id} | Get the details of a validator run
[**runValidator**](ValidatorApi.md#runValidator) | **POST** /organizations/{organization_id}/datasets/validators/{validator_id}/run | Run a Validator



## createValidator

> Validator createValidator(organizationId, validator)

Register a new validator

### Example

```javascript
import CosmotechApi from '@cosmotech/api';
let defaultClient = CosmotechApi.ApiClient.instance;
// Configure OAuth2 access token for authorization: oAuth2AuthCode
let oAuth2AuthCode = defaultClient.authentications['oAuth2AuthCode'];
oAuth2AuthCode.accessToken = 'YOUR ACCESS TOKEN';

let apiInstance = new CosmotechApi.ValidatorApi();
let organizationId = "organizationId_example"; // String | the Organization identifier
let validator = new CosmotechApi.Validator(); // Validator | the Validator to create
apiInstance.createValidator(organizationId, validator, (error, data, response) => {
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
 **validator** | [**Validator**](Validator.md)| the Validator to create | 

### Return type

[**Validator**](Validator.md)

### Authorization

[oAuth2AuthCode](../README.md#oAuth2AuthCode)

### HTTP request headers

- **Content-Type**: application/json, application/yaml
- **Accept**: application/json


## createValidatorRun

> ValidatorRun createValidatorRun(organizationId, validatorId, validatorRun)

Register a new validator run

### Example

```javascript
import CosmotechApi from '@cosmotech/api';
let defaultClient = CosmotechApi.ApiClient.instance;
// Configure OAuth2 access token for authorization: oAuth2AuthCode
let oAuth2AuthCode = defaultClient.authentications['oAuth2AuthCode'];
oAuth2AuthCode.accessToken = 'YOUR ACCESS TOKEN';

let apiInstance = new CosmotechApi.ValidatorApi();
let organizationId = "organizationId_example"; // String | the Organization identifier
let validatorId = "validatorId_example"; // String | the ValidatorRun identifier
let validatorRun = new CosmotechApi.ValidatorRun(); // ValidatorRun | the Validator Run to create
apiInstance.createValidatorRun(organizationId, validatorId, validatorRun, (error, data, response) => {
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
 **validatorId** | **String**| the ValidatorRun identifier | 
 **validatorRun** | [**ValidatorRun**](ValidatorRun.md)| the Validator Run to create | 

### Return type

[**ValidatorRun**](ValidatorRun.md)

### Authorization

[oAuth2AuthCode](../README.md#oAuth2AuthCode)

### HTTP request headers

- **Content-Type**: application/json, application/yaml
- **Accept**: application/json


## deleteValidator

> deleteValidator(organizationId, validatorId)

Delete a validator

### Example

```javascript
import CosmotechApi from '@cosmotech/api';
let defaultClient = CosmotechApi.ApiClient.instance;
// Configure OAuth2 access token for authorization: oAuth2AuthCode
let oAuth2AuthCode = defaultClient.authentications['oAuth2AuthCode'];
oAuth2AuthCode.accessToken = 'YOUR ACCESS TOKEN';

let apiInstance = new CosmotechApi.ValidatorApi();
let organizationId = "organizationId_example"; // String | the Organization identifier
let validatorId = "validatorId_example"; // String | the Validator identifier
apiInstance.deleteValidator(organizationId, validatorId, (error, data, response) => {
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
 **validatorId** | **String**| the Validator identifier | 

### Return type

null (empty response body)

### Authorization

[oAuth2AuthCode](../README.md#oAuth2AuthCode)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: Not defined


## deleteValidatorRun

> deleteValidatorRun(organizationId, validatorId, validatorrunId)

Delete a validator run

### Example

```javascript
import CosmotechApi from '@cosmotech/api';
let defaultClient = CosmotechApi.ApiClient.instance;
// Configure OAuth2 access token for authorization: oAuth2AuthCode
let oAuth2AuthCode = defaultClient.authentications['oAuth2AuthCode'];
oAuth2AuthCode.accessToken = 'YOUR ACCESS TOKEN';

let apiInstance = new CosmotechApi.ValidatorApi();
let organizationId = "organizationId_example"; // String | the Organization identifier
let validatorId = "validatorId_example"; // String | the Validator identifier
let validatorrunId = "validatorrunId_example"; // String | the Validator Run identifier
apiInstance.deleteValidatorRun(organizationId, validatorId, validatorrunId, (error, data, response) => {
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
 **validatorId** | **String**| the Validator identifier | 
 **validatorrunId** | **String**| the Validator Run identifier | 

### Return type

null (empty response body)

### Authorization

[oAuth2AuthCode](../README.md#oAuth2AuthCode)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: Not defined


## findAllValidatorRuns

> [ValidatorRun] findAllValidatorRuns(organizationId, validatorId)

List all Validator Runs

### Example

```javascript
import CosmotechApi from '@cosmotech/api';
let defaultClient = CosmotechApi.ApiClient.instance;
// Configure OAuth2 access token for authorization: oAuth2AuthCode
let oAuth2AuthCode = defaultClient.authentications['oAuth2AuthCode'];
oAuth2AuthCode.accessToken = 'YOUR ACCESS TOKEN';

let apiInstance = new CosmotechApi.ValidatorApi();
let organizationId = "organizationId_example"; // String | the Organization identifier
let validatorId = "validatorId_example"; // String | the ValidatorRun identifier
apiInstance.findAllValidatorRuns(organizationId, validatorId, (error, data, response) => {
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
 **validatorId** | **String**| the ValidatorRun identifier | 

### Return type

[**[ValidatorRun]**](ValidatorRun.md)

### Authorization

[oAuth2AuthCode](../README.md#oAuth2AuthCode)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## findAllValidators

> [Validator] findAllValidators(organizationId)

List all Validators

### Example

```javascript
import CosmotechApi from '@cosmotech/api';
let defaultClient = CosmotechApi.ApiClient.instance;
// Configure OAuth2 access token for authorization: oAuth2AuthCode
let oAuth2AuthCode = defaultClient.authentications['oAuth2AuthCode'];
oAuth2AuthCode.accessToken = 'YOUR ACCESS TOKEN';

let apiInstance = new CosmotechApi.ValidatorApi();
let organizationId = "organizationId_example"; // String | the Organization identifier
apiInstance.findAllValidators(organizationId, (error, data, response) => {
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

[**[Validator]**](Validator.md)

### Authorization

[oAuth2AuthCode](../README.md#oAuth2AuthCode)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## findValidatorById

> Validator findValidatorById(organizationId, validatorId)

Get the details of a validator

### Example

```javascript
import CosmotechApi from '@cosmotech/api';
let defaultClient = CosmotechApi.ApiClient.instance;
// Configure OAuth2 access token for authorization: oAuth2AuthCode
let oAuth2AuthCode = defaultClient.authentications['oAuth2AuthCode'];
oAuth2AuthCode.accessToken = 'YOUR ACCESS TOKEN';

let apiInstance = new CosmotechApi.ValidatorApi();
let organizationId = "organizationId_example"; // String | the Organization identifier
let validatorId = "validatorId_example"; // String | the Validator identifier
apiInstance.findValidatorById(organizationId, validatorId, (error, data, response) => {
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
 **validatorId** | **String**| the Validator identifier | 

### Return type

[**Validator**](Validator.md)

### Authorization

[oAuth2AuthCode](../README.md#oAuth2AuthCode)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## findValidatorRunById

> ValidatorRun findValidatorRunById(organizationId, validatorId, validatorrunId)

Get the details of a validator run

### Example

```javascript
import CosmotechApi from '@cosmotech/api';
let defaultClient = CosmotechApi.ApiClient.instance;
// Configure OAuth2 access token for authorization: oAuth2AuthCode
let oAuth2AuthCode = defaultClient.authentications['oAuth2AuthCode'];
oAuth2AuthCode.accessToken = 'YOUR ACCESS TOKEN';

let apiInstance = new CosmotechApi.ValidatorApi();
let organizationId = "organizationId_example"; // String | the Organization identifier
let validatorId = "validatorId_example"; // String | the Validator identifier
let validatorrunId = "validatorrunId_example"; // String | the Validator Run identifier
apiInstance.findValidatorRunById(organizationId, validatorId, validatorrunId, (error, data, response) => {
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
 **validatorId** | **String**| the Validator identifier | 
 **validatorrunId** | **String**| the Validator Run identifier | 

### Return type

[**ValidatorRun**](ValidatorRun.md)

### Authorization

[oAuth2AuthCode](../README.md#oAuth2AuthCode)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## runValidator

> ValidatorRun runValidator(organizationId, validatorId, validatorRun)

Run a Validator

### Example

```javascript
import CosmotechApi from '@cosmotech/api';
let defaultClient = CosmotechApi.ApiClient.instance;
// Configure OAuth2 access token for authorization: oAuth2AuthCode
let oAuth2AuthCode = defaultClient.authentications['oAuth2AuthCode'];
oAuth2AuthCode.accessToken = 'YOUR ACCESS TOKEN';

let apiInstance = new CosmotechApi.ValidatorApi();
let organizationId = "organizationId_example"; // String | the Organization identifier
let validatorId = "validatorId_example"; // String | the ValidatorRun identifier
let validatorRun = new CosmotechApi.ValidatorRun(); // ValidatorRun | the Validator to run
apiInstance.runValidator(organizationId, validatorId, validatorRun, (error, data, response) => {
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
 **validatorId** | **String**| the ValidatorRun identifier | 
 **validatorRun** | [**ValidatorRun**](ValidatorRun.md)| the Validator to run | 

### Return type

[**ValidatorRun**](ValidatorRun.md)

### Authorization

[oAuth2AuthCode](../README.md#oAuth2AuthCode)

### HTTP request headers

- **Content-Type**: application/json, application/yaml
- **Accept**: application/json

