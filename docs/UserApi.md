# CosmotechApi.UserApi

All URIs are relative to *http://localhost:8080*

Method | HTTP request | Description
------------- | ------------- | -------------
[**findAllUsers**](UserApi.md#findAllUsers) | **GET** /users | List all Users
[**findUserById**](UserApi.md#findUserById) | **GET** /users/{user_id} | Get the details of an user
[**registerUser**](UserApi.md#registerUser) | **POST** /users | Register a new user
[**unregisterUser**](UserApi.md#unregisterUser) | **DELETE** /users/{user_id} | Unregister an user
[**updateUser**](UserApi.md#updateUser) | **PATCH** /users/{user_id} | Update an user



## findAllUsers

> [User] findAllUsers()

List all Users

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

let apiInstance = new CosmotechApi.UserApi();
apiInstance.findAllUsers((error, data, response) => {
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

[**[User]**](User.md)

### Authorization

[AADOAuth2AuthCode](../README.md#AADOAuth2AuthCode), [ApiKeyAuth](../README.md#ApiKeyAuth)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## findUserById

> User findUserById(userId)

Get the details of an user

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

let apiInstance = new CosmotechApi.UserApi();
let userId = "userId_example"; // String | the User identifier
apiInstance.findUserById(userId, (error, data, response) => {
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
 **userId** | **String**| the User identifier | 

### Return type

[**User**](User.md)

### Authorization

[AADOAuth2AuthCode](../README.md#AADOAuth2AuthCode), [ApiKeyAuth](../README.md#ApiKeyAuth)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## registerUser

> User registerUser(user)

Register a new user

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

let apiInstance = new CosmotechApi.UserApi();
let user = new CosmotechApi.User(); // User | the User to register
apiInstance.registerUser(user, (error, data, response) => {
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
 **user** | [**User**](User.md)| the User to register | 

### Return type

[**User**](User.md)

### Authorization

[AADOAuth2AuthCode](../README.md#AADOAuth2AuthCode), [ApiKeyAuth](../README.md#ApiKeyAuth)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json


## unregisterUser

> User unregisterUser(userId)

Unregister an user

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

let apiInstance = new CosmotechApi.UserApi();
let userId = "userId_example"; // String | the User identifier
apiInstance.unregisterUser(userId, (error, data, response) => {
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
 **userId** | **String**| the User identifier | 

### Return type

[**User**](User.md)

### Authorization

[AADOAuth2AuthCode](../README.md#AADOAuth2AuthCode), [ApiKeyAuth](../README.md#ApiKeyAuth)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## updateUser

> User updateUser(userId, user)

Update an user

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

let apiInstance = new CosmotechApi.UserApi();
let userId = "userId_example"; // String | the User identifier
let user = new CosmotechApi.User(); // User | the new User details
apiInstance.updateUser(userId, user, (error, data, response) => {
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
 **userId** | **String**| the User identifier | 
 **user** | [**User**](User.md)| the new User details | 

### Return type

[**User**](User.md)

### Authorization

[AADOAuth2AuthCode](../README.md#AADOAuth2AuthCode), [ApiKeyAuth](../README.md#ApiKeyAuth)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json

