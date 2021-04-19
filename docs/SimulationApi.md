# CosmotechApi.SimulationApi

All URIs are relative to *https://api.azure.cosmo-platform.com*

Method | HTTP request | Description
------------- | ------------- | -------------
[**deleteSimulation**](SimulationApi.md#deleteSimulation) | **DELETE** /organizations/{organization_id}/simulations/{simulation_id} | Delete a simulation
[**findSimulationById**](SimulationApi.md#findSimulationById) | **GET** /organizations/{organization_id}/simulations/{simulation_id} | Get the details of a simulation
[**getScenarioSimulation**](SimulationApi.md#getScenarioSimulation) | **GET** /organizations/{organization_id}/workspaces/{workspace_id}/scenarios/{scenario_id}/simulations/{simulation_id} | get the Simulation for the Scenario
[**getScenarioSimulationLogs**](SimulationApi.md#getScenarioSimulationLogs) | **GET** /organizations/{organization_id}/workspaces/{workspace_id}/scenarios/{scenario_id}/simulations/{simulation_id}/logs | get the logs for the Simulation
[**getScenarioSimulations**](SimulationApi.md#getScenarioSimulations) | **GET** /organizations/{organization_id}/workspaces/{workspace_id}/scenarios/{scenario_id}/simulations | get the list of Simulations for the Scenario
[**getWorkspaceSimulations**](SimulationApi.md#getWorkspaceSimulations) | **GET** /organizations/{organization_id}/workspaces/{workspace_id}/simulations | get the list of Simulations for the Workspace
[**runScenario**](SimulationApi.md#runScenario) | **POST** /organizations/{organization_id}/workspaces/{workspace_id}/scenarios/{scenario_id}/run | run a Simulation for the Scenario
[**searchSimulationLogs**](SimulationApi.md#searchSimulationLogs) | **POST** /organizations/{organization_id}/simulations/{simulation_id}/logs/search | Search the logs of a simulation
[**searchSimulations**](SimulationApi.md#searchSimulations) | **POST** /organizations/{organization_id}/simulations/search | Search Simulations
[**startSimulationContainers**](SimulationApi.md#startSimulationContainers) | **POST** /organizations/{organization_id}/simulations/startcontainers | Start a new simulation with raw containers definition
[**startSimulationScenario**](SimulationApi.md#startSimulationScenario) | **POST** /organizations/{organization_id}/simulations/start | Start a new simulation for a Scenario
[**startSimulationSolution**](SimulationApi.md#startSimulationSolution) | **POST** /organizations/{organization_id}/simulations/startsolution | Start a new simulation for a Solution Run Template



## deleteSimulation

> Simulation deleteSimulation(organizationId, simulationId)

Delete a simulation

### Example

```javascript
import CosmotechApi from '@cosmotech/api';
let defaultClient = CosmotechApi.ApiClient.instance;
// Configure OAuth2 access token for authorization: oAuth2AuthCode
let oAuth2AuthCode = defaultClient.authentications['oAuth2AuthCode'];
oAuth2AuthCode.accessToken = 'YOUR ACCESS TOKEN';

let apiInstance = new CosmotechApi.SimulationApi();
let organizationId = "organizationId_example"; // String | the Organization identifier
let simulationId = "simulationId_example"; // String | the Simulation identifier
apiInstance.deleteSimulation(organizationId, simulationId, (error, data, response) => {
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
 **simulationId** | **String**| the Simulation identifier | 

### Return type

[**Simulation**](Simulation.md)

### Authorization

[oAuth2AuthCode](../README.md#oAuth2AuthCode)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## findSimulationById

> Simulation findSimulationById(organizationId, simulationId)

Get the details of a simulation

### Example

```javascript
import CosmotechApi from '@cosmotech/api';
let defaultClient = CosmotechApi.ApiClient.instance;
// Configure OAuth2 access token for authorization: oAuth2AuthCode
let oAuth2AuthCode = defaultClient.authentications['oAuth2AuthCode'];
oAuth2AuthCode.accessToken = 'YOUR ACCESS TOKEN';

let apiInstance = new CosmotechApi.SimulationApi();
let organizationId = "organizationId_example"; // String | the Organization identifier
let simulationId = "simulationId_example"; // String | the Simulation identifier
apiInstance.findSimulationById(organizationId, simulationId, (error, data, response) => {
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
 **simulationId** | **String**| the Simulation identifier | 

### Return type

[**Simulation**](Simulation.md)

### Authorization

[oAuth2AuthCode](../README.md#oAuth2AuthCode)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## getScenarioSimulation

> Simulation getScenarioSimulation(organizationId, workspaceId, scenarioId, simulationId)

get the Simulation for the Scenario

### Example

```javascript
import CosmotechApi from '@cosmotech/api';
let defaultClient = CosmotechApi.ApiClient.instance;
// Configure OAuth2 access token for authorization: oAuth2AuthCode
let oAuth2AuthCode = defaultClient.authentications['oAuth2AuthCode'];
oAuth2AuthCode.accessToken = 'YOUR ACCESS TOKEN';

let apiInstance = new CosmotechApi.SimulationApi();
let organizationId = "organizationId_example"; // String | the Organization identifier
let workspaceId = "workspaceId_example"; // String | the Workspace identifier
let scenarioId = "scenarioId_example"; // String | the Scenario identifier
let simulationId = "simulationId_example"; // String | the Simulation identifier
apiInstance.getScenarioSimulation(organizationId, workspaceId, scenarioId, simulationId, (error, data, response) => {
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
 **workspaceId** | **String**| the Workspace identifier | 
 **scenarioId** | **String**| the Scenario identifier | 
 **simulationId** | **String**| the Simulation identifier | 

### Return type

[**Simulation**](Simulation.md)

### Authorization

[oAuth2AuthCode](../README.md#oAuth2AuthCode)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## getScenarioSimulationLogs

> SimulationLogs getScenarioSimulationLogs(organizationId, workspaceId, scenarioId, simulationId)

get the logs for the Simulation

### Example

```javascript
import CosmotechApi from '@cosmotech/api';
let defaultClient = CosmotechApi.ApiClient.instance;
// Configure OAuth2 access token for authorization: oAuth2AuthCode
let oAuth2AuthCode = defaultClient.authentications['oAuth2AuthCode'];
oAuth2AuthCode.accessToken = 'YOUR ACCESS TOKEN';

let apiInstance = new CosmotechApi.SimulationApi();
let organizationId = "organizationId_example"; // String | the Organization identifier
let workspaceId = "workspaceId_example"; // String | the Workspace identifier
let scenarioId = "scenarioId_example"; // String | the Scenario identifier
let simulationId = "simulationId_example"; // String | the Simulation identifier
apiInstance.getScenarioSimulationLogs(organizationId, workspaceId, scenarioId, simulationId, (error, data, response) => {
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
 **workspaceId** | **String**| the Workspace identifier | 
 **scenarioId** | **String**| the Scenario identifier | 
 **simulationId** | **String**| the Simulation identifier | 

### Return type

[**SimulationLogs**](SimulationLogs.md)

### Authorization

[oAuth2AuthCode](../README.md#oAuth2AuthCode)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## getScenarioSimulations

> [SimulationBase] getScenarioSimulations(organizationId, workspaceId, scenarioId)

get the list of Simulations for the Scenario

### Example

```javascript
import CosmotechApi from '@cosmotech/api';
let defaultClient = CosmotechApi.ApiClient.instance;
// Configure OAuth2 access token for authorization: oAuth2AuthCode
let oAuth2AuthCode = defaultClient.authentications['oAuth2AuthCode'];
oAuth2AuthCode.accessToken = 'YOUR ACCESS TOKEN';

let apiInstance = new CosmotechApi.SimulationApi();
let organizationId = "organizationId_example"; // String | the Organization identifier
let workspaceId = "workspaceId_example"; // String | the Workspace identifier
let scenarioId = "scenarioId_example"; // String | the Scenario identifier
apiInstance.getScenarioSimulations(organizationId, workspaceId, scenarioId, (error, data, response) => {
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
 **workspaceId** | **String**| the Workspace identifier | 
 **scenarioId** | **String**| the Scenario identifier | 

### Return type

[**[SimulationBase]**](SimulationBase.md)

### Authorization

[oAuth2AuthCode](../README.md#oAuth2AuthCode)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## getWorkspaceSimulations

> [SimulationBase] getWorkspaceSimulations(organizationId, workspaceId)

get the list of Simulations for the Workspace

### Example

```javascript
import CosmotechApi from '@cosmotech/api';
let defaultClient = CosmotechApi.ApiClient.instance;
// Configure OAuth2 access token for authorization: oAuth2AuthCode
let oAuth2AuthCode = defaultClient.authentications['oAuth2AuthCode'];
oAuth2AuthCode.accessToken = 'YOUR ACCESS TOKEN';

let apiInstance = new CosmotechApi.SimulationApi();
let organizationId = "organizationId_example"; // String | the Organization identifier
let workspaceId = "workspaceId_example"; // String | the Workspace identifier
apiInstance.getWorkspaceSimulations(organizationId, workspaceId, (error, data, response) => {
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
 **workspaceId** | **String**| the Workspace identifier | 

### Return type

[**[SimulationBase]**](SimulationBase.md)

### Authorization

[oAuth2AuthCode](../README.md#oAuth2AuthCode)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## runScenario

> SimulationBase runScenario(organizationId, workspaceId, scenarioId)

run a Simulation for the Scenario

### Example

```javascript
import CosmotechApi from '@cosmotech/api';
let defaultClient = CosmotechApi.ApiClient.instance;
// Configure OAuth2 access token for authorization: oAuth2AuthCode
let oAuth2AuthCode = defaultClient.authentications['oAuth2AuthCode'];
oAuth2AuthCode.accessToken = 'YOUR ACCESS TOKEN';

let apiInstance = new CosmotechApi.SimulationApi();
let organizationId = "organizationId_example"; // String | the Organization identifier
let workspaceId = "workspaceId_example"; // String | the Workspace identifier
let scenarioId = "scenarioId_example"; // String | the Scenario identifier
apiInstance.runScenario(organizationId, workspaceId, scenarioId, (error, data, response) => {
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
 **workspaceId** | **String**| the Workspace identifier | 
 **scenarioId** | **String**| the Scenario identifier | 

### Return type

[**SimulationBase**](SimulationBase.md)

### Authorization

[oAuth2AuthCode](../README.md#oAuth2AuthCode)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## searchSimulationLogs

> SimulationLogs searchSimulationLogs(organizationId, simulationId, simulationLogsOptions)

Search the logs of a simulation

### Example

```javascript
import CosmotechApi from '@cosmotech/api';
let defaultClient = CosmotechApi.ApiClient.instance;
// Configure OAuth2 access token for authorization: oAuth2AuthCode
let oAuth2AuthCode = defaultClient.authentications['oAuth2AuthCode'];
oAuth2AuthCode.accessToken = 'YOUR ACCESS TOKEN';

let apiInstance = new CosmotechApi.SimulationApi();
let organizationId = "organizationId_example"; // String | the Organization identifier
let simulationId = "simulationId_example"; // String | the Simulation identifier
let simulationLogsOptions = new CosmotechApi.SimulationLogsOptions(); // SimulationLogsOptions | the options to search logs
apiInstance.searchSimulationLogs(organizationId, simulationId, simulationLogsOptions, (error, data, response) => {
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
 **simulationId** | **String**| the Simulation identifier | 
 **simulationLogsOptions** | [**SimulationLogsOptions**](SimulationLogsOptions.md)| the options to search logs | 

### Return type

[**SimulationLogs**](SimulationLogs.md)

### Authorization

[oAuth2AuthCode](../README.md#oAuth2AuthCode)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json


## searchSimulations

> [SimulationBase] searchSimulations(organizationId, simulationSearch)

Search Simulations

### Example

```javascript
import CosmotechApi from '@cosmotech/api';
let defaultClient = CosmotechApi.ApiClient.instance;
// Configure OAuth2 access token for authorization: oAuth2AuthCode
let oAuth2AuthCode = defaultClient.authentications['oAuth2AuthCode'];
oAuth2AuthCode.accessToken = 'YOUR ACCESS TOKEN';

let apiInstance = new CosmotechApi.SimulationApi();
let organizationId = "organizationId_example"; // String | the Organization identifier
let simulationSearch = new CosmotechApi.SimulationSearch(); // SimulationSearch | the Simulation search parameters
apiInstance.searchSimulations(organizationId, simulationSearch, (error, data, response) => {
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
 **simulationSearch** | [**SimulationSearch**](SimulationSearch.md)| the Simulation search parameters | 

### Return type

[**[SimulationBase]**](SimulationBase.md)

### Authorization

[oAuth2AuthCode](../README.md#oAuth2AuthCode)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json


## startSimulationContainers

> Simulation startSimulationContainers(organizationId, simulationStartContainers)

Start a new simulation with raw containers definition

### Example

```javascript
import CosmotechApi from '@cosmotech/api';
let defaultClient = CosmotechApi.ApiClient.instance;
// Configure OAuth2 access token for authorization: oAuth2AuthCode
let oAuth2AuthCode = defaultClient.authentications['oAuth2AuthCode'];
oAuth2AuthCode.accessToken = 'YOUR ACCESS TOKEN';

let apiInstance = new CosmotechApi.SimulationApi();
let organizationId = "organizationId_example"; // String | the Organization identifier
let simulationStartContainers = new CosmotechApi.SimulationStartContainers(); // SimulationStartContainers | the raw containers definition
apiInstance.startSimulationContainers(organizationId, simulationStartContainers, (error, data, response) => {
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
 **simulationStartContainers** | [**SimulationStartContainers**](SimulationStartContainers.md)| the raw containers definition | 

### Return type

[**Simulation**](Simulation.md)

### Authorization

[oAuth2AuthCode](../README.md#oAuth2AuthCode)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json


## startSimulationScenario

> Simulation startSimulationScenario(organizationId, simulationStartScenario)

Start a new simulation for a Scenario

### Example

```javascript
import CosmotechApi from '@cosmotech/api';
let defaultClient = CosmotechApi.ApiClient.instance;
// Configure OAuth2 access token for authorization: oAuth2AuthCode
let oAuth2AuthCode = defaultClient.authentications['oAuth2AuthCode'];
oAuth2AuthCode.accessToken = 'YOUR ACCESS TOKEN';

let apiInstance = new CosmotechApi.SimulationApi();
let organizationId = "organizationId_example"; // String | the Organization identifier
let simulationStartScenario = new CosmotechApi.SimulationStartScenario(); // SimulationStartScenario | the Scenario information to start
apiInstance.startSimulationScenario(organizationId, simulationStartScenario, (error, data, response) => {
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
 **simulationStartScenario** | [**SimulationStartScenario**](SimulationStartScenario.md)| the Scenario information to start | 

### Return type

[**Simulation**](Simulation.md)

### Authorization

[oAuth2AuthCode](../README.md#oAuth2AuthCode)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json


## startSimulationSolution

> Simulation startSimulationSolution(organizationId, simulationStartSolution)

Start a new simulation for a Solution Run Template

### Example

```javascript
import CosmotechApi from '@cosmotech/api';
let defaultClient = CosmotechApi.ApiClient.instance;
// Configure OAuth2 access token for authorization: oAuth2AuthCode
let oAuth2AuthCode = defaultClient.authentications['oAuth2AuthCode'];
oAuth2AuthCode.accessToken = 'YOUR ACCESS TOKEN';

let apiInstance = new CosmotechApi.SimulationApi();
let organizationId = "organizationId_example"; // String | the Organization identifier
let simulationStartSolution = new CosmotechApi.SimulationStartSolution(); // SimulationStartSolution | the Solution Run Template information to start
apiInstance.startSimulationSolution(organizationId, simulationStartSolution, (error, data, response) => {
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
 **simulationStartSolution** | [**SimulationStartSolution**](SimulationStartSolution.md)| the Solution Run Template information to start | 

### Return type

[**Simulation**](Simulation.md)

### Authorization

[oAuth2AuthCode](../README.md#oAuth2AuthCode)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json

