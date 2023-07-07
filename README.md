# @cosmotech/api

CosmotechApi - JavaScript client for @cosmotech/api
Cosmo Tech Platform API
This SDK is automatically generated by the [OpenAPI Generator](https://openapi-generator.tech) project:

- API version: 2.4.7-private
- Package version: 2.4.7-private
- Build package: org.openapitools.codegen.languages.JavascriptClientCodegen
For more information, please visit [https://github.com/Cosmo-Tech/cosmotech-api](https://github.com/Cosmo-Tech/cosmotech-api)

## Installation

### For [Node.js](https://nodejs.org/)

#### npm

To publish the library as a [npm](https://www.npmjs.com/), please follow the procedure in ["Publishing npm packages"](https://docs.npmjs.com/getting-started/publishing-npm-packages).

Then install it via:

```shell
npm install @cosmotech/api --save
```

Finally, you need to build the module:

```shell
npm run build
```

##### Local development

To use the library locally without publishing to a remote npm registry, first install the dependencies by changing into the directory containing `package.json` (and this README). Let's call this `JAVASCRIPT_CLIENT_DIR`. Then run:

```shell
npm install
```

Next, [link](https://docs.npmjs.com/cli/link) it globally in npm with the following, also from `JAVASCRIPT_CLIENT_DIR`:

```shell
npm link
```

To use the link you just defined in your project, switch to the directory you want to use your @cosmotech/api from, and run:

```shell
npm link /path/to/<JAVASCRIPT_CLIENT_DIR>
```

Finally, you need to build the module:

```shell
npm run build
```

#### git

If the library is hosted at a git repository, e.g.https://github.com/GIT_USER_ID/GIT_REPO_ID
then install it via:

```shell
    npm install GIT_USER_ID/GIT_REPO_ID --save
```

### For browser

The library also works in the browser environment via npm and [browserify](http://browserify.org/). After following
the above steps with Node.js and installing browserify with `npm install -g browserify`,
perform the following (assuming *main.js* is your entry file):

```shell
browserify main.js > bundle.js
```

Then include *bundle.js* in the HTML pages.

### Webpack Configuration

Using Webpack you may encounter the following error: "Module not found: Error:
Cannot resolve module", most certainly you should disable AMD loader. Add/merge
the following section to your webpack config:

```javascript
module: {
  rules: [
    {
      parser: {
        amd: false
      }
    }
  ]
}
```

## Getting Started

Please follow the [installation](#installation) instruction and execute the following JS code:

```javascript
var CosmotechApi = require('@cosmotech/api');

var defaultClient = CosmotechApi.ApiClient.instance;
// Configure OAuth2 access token for authorization: oAuth2AuthCode
var oAuth2AuthCode = defaultClient.authentications['oAuth2AuthCode'];
oAuth2AuthCode.accessToken = "YOUR ACCESS TOKEN"

var api = new CosmotechApi.ConnectorApi()
var opts = {
  'page': 56, // {Number} page number to query
  'size': 56 // {Number} amount of result by page
};
api.findAllConnectors(opts).then(function(data) {
  console.log('API called successfully. Returned data: ' + data);
}, function(error) {
  console.error(error);
});


```

## Documentation for API Endpoints

All URIs are relative to *https://dev.api.cosmotech.com*

Class | Method | HTTP request | Description
------------ | ------------- | ------------- | -------------
*CosmotechApi.ConnectorApi* | [**findAllConnectors**](docs/ConnectorApi.md#findAllConnectors) | **GET** /connectors | List all Connectors
*CosmotechApi.ConnectorApi* | [**findConnectorById**](docs/ConnectorApi.md#findConnectorById) | **GET** /connectors/{connector_id} | Get the details of a connector
*CosmotechApi.ConnectorApi* | [**importConnector**](docs/ConnectorApi.md#importConnector) | **POST** /connectors/import | Import existing connector
*CosmotechApi.ConnectorApi* | [**registerConnector**](docs/ConnectorApi.md#registerConnector) | **POST** /connectors | Register a new connector
*CosmotechApi.ConnectorApi* | [**unregisterConnector**](docs/ConnectorApi.md#unregisterConnector) | **DELETE** /connectors/{connector_id} | Unregister a connector
*CosmotechApi.DatasetApi* | [**addOrReplaceDatasetCompatibilityElements**](docs/DatasetApi.md#addOrReplaceDatasetCompatibilityElements) | **POST** /organizations/{organization_id}/datasets/{dataset_id}/compatibility | Add Dataset Compatibility elements.
*CosmotechApi.DatasetApi* | [**copyDataset**](docs/DatasetApi.md#copyDataset) | **POST** /organizations/{organization_id}/datasets/copy | Copy a Dataset to another Dataset. Source must have a read capable connector and Target a write capable connector.
*CosmotechApi.DatasetApi* | [**createDataset**](docs/DatasetApi.md#createDataset) | **POST** /organizations/{organization_id}/datasets | Create a new Dataset
*CosmotechApi.DatasetApi* | [**deleteDataset**](docs/DatasetApi.md#deleteDataset) | **DELETE** /organizations/{organization_id}/datasets/{dataset_id} | Delete a dataset
*CosmotechApi.DatasetApi* | [**findAllDatasets**](docs/DatasetApi.md#findAllDatasets) | **GET** /organizations/{organization_id}/datasets | List all Datasets
*CosmotechApi.DatasetApi* | [**findDatasetById**](docs/DatasetApi.md#findDatasetById) | **GET** /organizations/{organization_id}/datasets/{dataset_id} | Get the details of a Dataset
*CosmotechApi.DatasetApi* | [**importDataset**](docs/DatasetApi.md#importDataset) | **POST** /organizations/{organization_id}/datasets/import | Import a new Dataset
*CosmotechApi.DatasetApi* | [**removeAllDatasetCompatibilityElements**](docs/DatasetApi.md#removeAllDatasetCompatibilityElements) | **DELETE** /organizations/{organization_id}/datasets/{dataset_id}/compatibility | Remove all Dataset Compatibility elements from the Dataset specified
*CosmotechApi.DatasetApi* | [**searchDatasets**](docs/DatasetApi.md#searchDatasets) | **POST** /organizations/{organization_id}/datasets/search | Search Datasets
*CosmotechApi.DatasetApi* | [**updateDataset**](docs/DatasetApi.md#updateDataset) | **PATCH** /organizations/{organization_id}/datasets/{dataset_id} | Update a dataset
*CosmotechApi.OrganizationApi* | [**addOrganizationAccessControl**](docs/OrganizationApi.md#addOrganizationAccessControl) | **POST** /organizations/{organization_id}/security/access | Add a control access to the Organization
*CosmotechApi.OrganizationApi* | [**findAllOrganizations**](docs/OrganizationApi.md#findAllOrganizations) | **GET** /organizations | List all Organizations
*CosmotechApi.OrganizationApi* | [**findOrganizationById**](docs/OrganizationApi.md#findOrganizationById) | **GET** /organizations/{organization_id} | Get the details of an Organization
*CosmotechApi.OrganizationApi* | [**getAllPermissions**](docs/OrganizationApi.md#getAllPermissions) | **GET** /organizations/permissions | Get all permissions per components
*CosmotechApi.OrganizationApi* | [**getOrganizationAccessControl**](docs/OrganizationApi.md#getOrganizationAccessControl) | **GET** /organizations/{organization_id}/security/access/{identity_id} | Get a control access for the Organization
*CosmotechApi.OrganizationApi* | [**getOrganizationPermissions**](docs/OrganizationApi.md#getOrganizationPermissions) | **GET** /organizations/{organization_id}/permissions/{role} | Get the Organization permissions by given role
*CosmotechApi.OrganizationApi* | [**getOrganizationSecurity**](docs/OrganizationApi.md#getOrganizationSecurity) | **GET** /organizations/{organization_id}/security | Get the Organization security information
*CosmotechApi.OrganizationApi* | [**getOrganizationSecurityUsers**](docs/OrganizationApi.md#getOrganizationSecurityUsers) | **GET** /organizations/{organization_id}/security/users | Get the Organization security users list
*CosmotechApi.OrganizationApi* | [**importOrganization**](docs/OrganizationApi.md#importOrganization) | **POST** /organizations/import | Import an organization
*CosmotechApi.OrganizationApi* | [**registerOrganization**](docs/OrganizationApi.md#registerOrganization) | **POST** /organizations | Register a new organization
*CosmotechApi.OrganizationApi* | [**removeOrganizationAccessControl**](docs/OrganizationApi.md#removeOrganizationAccessControl) | **DELETE** /organizations/{organization_id}/security/access/{identity_id} | Remove the specified access from the given Organization
*CosmotechApi.OrganizationApi* | [**setOrganizationDefaultSecurity**](docs/OrganizationApi.md#setOrganizationDefaultSecurity) | **POST** /organizations/{organization_id}/security/default | Set the Organization default security
*CosmotechApi.OrganizationApi* | [**unregisterOrganization**](docs/OrganizationApi.md#unregisterOrganization) | **DELETE** /organizations/{organization_id} | Unregister an organization
*CosmotechApi.OrganizationApi* | [**updateOrganization**](docs/OrganizationApi.md#updateOrganization) | **PATCH** /organizations/{organization_id} | Update an Organization
*CosmotechApi.OrganizationApi* | [**updateOrganizationAccessControl**](docs/OrganizationApi.md#updateOrganizationAccessControl) | **PATCH** /organizations/{organization_id}/security/access/{identity_id} | Update the specified access to User for an Organization
*CosmotechApi.OrganizationApi* | [**updateSolutionsContainerRegistryByOrganizationId**](docs/OrganizationApi.md#updateSolutionsContainerRegistryByOrganizationId) | **PATCH** /organizations/{organization_id}/services/solutionsContainerRegistry | Update the solutions container registry configuration for the Organization specified
*CosmotechApi.OrganizationApi* | [**updateStorageByOrganizationId**](docs/OrganizationApi.md#updateStorageByOrganizationId) | **PATCH** /organizations/{organization_id}/services/storage | Update storage configuration for the Organization specified
*CosmotechApi.OrganizationApi* | [**updateTenantCredentialsByOrganizationId**](docs/OrganizationApi.md#updateTenantCredentialsByOrganizationId) | **PATCH** /organizations/{organization_id}/services/tenantCredentials | Update tenant credentials for the Organization specified
*CosmotechApi.ScenarioApi* | [**addOrReplaceScenarioParameterValues**](docs/ScenarioApi.md#addOrReplaceScenarioParameterValues) | **POST** /organizations/{organization_id}/workspaces/{workspace_id}/scenarios/{scenario_id}/parameterValues | Add (or replace) Parameter Values for the Scenario specified
*CosmotechApi.ScenarioApi* | [**addScenarioAccessControl**](docs/ScenarioApi.md#addScenarioAccessControl) | **POST** /organizations/{organization_id}/workspaces/{workspace_id}/scenarios/{scenario_id}/security/access | Add a control access to the Scenario
*CosmotechApi.ScenarioApi* | [**compareScenarios**](docs/ScenarioApi.md#compareScenarios) | **GET** /organizations/{organization_id}/workspaces/{workspace_id}/scenarios/{scenario_id}/compare/{compared_scenario_id} | Compare the Scenario with another one and returns the difference for parameters values
*CosmotechApi.ScenarioApi* | [**createScenario**](docs/ScenarioApi.md#createScenario) | **POST** /organizations/{organization_id}/workspaces/{workspace_id}/scenarios | Create a new Scenario
*CosmotechApi.ScenarioApi* | [**deleteAllScenarios**](docs/ScenarioApi.md#deleteAllScenarios) | **DELETE** /organizations/{organization_id}/workspaces/{workspace_id}/scenarios | Delete all Scenarios of the Workspace
*CosmotechApi.ScenarioApi* | [**deleteScenario**](docs/ScenarioApi.md#deleteScenario) | **DELETE** /organizations/{organization_id}/workspaces/{workspace_id}/scenarios/{scenario_id} | Delete a scenario
*CosmotechApi.ScenarioApi* | [**downloadScenarioData**](docs/ScenarioApi.md#downloadScenarioData) | **POST** /organizations/{organization_id}/workspaces/{workspace_id}/scenarios/{scenario_id}/downloads | Download Scenario data
*CosmotechApi.ScenarioApi* | [**findAllScenarios**](docs/ScenarioApi.md#findAllScenarios) | **GET** /organizations/{organization_id}/workspaces/{workspace_id}/scenarios | List all Scenarios
*CosmotechApi.ScenarioApi* | [**findAllScenariosByValidationStatus**](docs/ScenarioApi.md#findAllScenariosByValidationStatus) | **GET** /organizations/{organization_id}/workspaces/{workspace_id}/{validationStatus} | List all Scenarios by validation status
*CosmotechApi.ScenarioApi* | [**findScenarioById**](docs/ScenarioApi.md#findScenarioById) | **GET** /organizations/{organization_id}/workspaces/{workspace_id}/scenarios/{scenario_id} | Get the details of an scenario
*CosmotechApi.ScenarioApi* | [**getScenarioAccessControl**](docs/ScenarioApi.md#getScenarioAccessControl) | **GET** /organizations/{organization_id}/workspaces/{workspace_id}/scenarios/{scenario_id}/security/access/{identity_id} | Get a control access for the Scenario
*CosmotechApi.ScenarioApi* | [**getScenarioDataDownloadJobInfo**](docs/ScenarioApi.md#getScenarioDataDownloadJobInfo) | **GET** /organizations/{organization_id}/workspaces/{workspace_id}/scenarios/{scenario_id}/downloads/{download_id} | Get Scenario data download URL
*CosmotechApi.ScenarioApi* | [**getScenarioPermissions**](docs/ScenarioApi.md#getScenarioPermissions) | **GET** /organizations/{organization_id}/workspaces/{workspace_id}/scenarios/permissions/{role} | Get the Scenario permission by given role
*CosmotechApi.ScenarioApi* | [**getScenarioSecurity**](docs/ScenarioApi.md#getScenarioSecurity) | **GET** /organizations/{organization_id}/workspaces/{workspace_id}/scenarios/{scenario_id}/security | Get the Scenario security information
*CosmotechApi.ScenarioApi* | [**getScenarioSecurityUsers**](docs/ScenarioApi.md#getScenarioSecurityUsers) | **GET** /organizations/{organization_id}/workspaces/{workspace_id}/scenarios/{scenario_id}/security/users | Get the Scenario security users list
*CosmotechApi.ScenarioApi* | [**getScenarioValidationStatusById**](docs/ScenarioApi.md#getScenarioValidationStatusById) | **GET** /organizations/{organization_id}/workspaces/{workspace_id}/scenarios/{scenario_id}/ValidationStatus | Get the validation status of an scenario
*CosmotechApi.ScenarioApi* | [**getScenariosTree**](docs/ScenarioApi.md#getScenariosTree) | **GET** /organizations/{organization_id}/workspaces/{workspace_id}/scenarios/tree | Get the Scenarios Tree
*CosmotechApi.ScenarioApi* | [**importScenario**](docs/ScenarioApi.md#importScenario) | **POST** /organizations/{organization_id}/workspaces/{workspace_id}/scenarios/import | Import Scenario
*CosmotechApi.ScenarioApi* | [**removeAllScenarioParameterValues**](docs/ScenarioApi.md#removeAllScenarioParameterValues) | **DELETE** /organizations/{organization_id}/workspaces/{workspace_id}/scenarios/{scenario_id}/parameterValues | Remove all Parameter Values from the Scenario specified
*CosmotechApi.ScenarioApi* | [**removeScenarioAccessControl**](docs/ScenarioApi.md#removeScenarioAccessControl) | **DELETE** /organizations/{organization_id}/workspaces/{workspace_id}/scenarios/{scenario_id}/security/access/{identity_id} | Remove the specified access from the given Organization Scenario
*CosmotechApi.ScenarioApi* | [**setScenarioDefaultSecurity**](docs/ScenarioApi.md#setScenarioDefaultSecurity) | **POST** /organizations/{organization_id}/workspaces/{workspace_id}/scenarios/{scenario_id}/security/default | Set the Scenario default security
*CosmotechApi.ScenarioApi* | [**updateScenario**](docs/ScenarioApi.md#updateScenario) | **PATCH** /organizations/{organization_id}/workspaces/{workspace_id}/scenarios/{scenario_id} | Update a scenario
*CosmotechApi.ScenarioApi* | [**updateScenarioAccessControl**](docs/ScenarioApi.md#updateScenarioAccessControl) | **PATCH** /organizations/{organization_id}/workspaces/{workspace_id}/scenarios/{scenario_id}/security/access/{identity_id} | Update the specified access to User for a Scenario
*CosmotechApi.ScenariorunApi* | [**deleteHistoricalDataOrganization**](docs/ScenariorunApi.md#deleteHistoricalDataOrganization) | **DELETE** /organizations/{organization_id}/scenarioruns/historicaldata | Delete all historical ScenarioRuns in the Organization
*CosmotechApi.ScenariorunApi* | [**deleteHistoricalDataScenario**](docs/ScenariorunApi.md#deleteHistoricalDataScenario) | **DELETE** /organizations/{organization_id}/workspaces/{workspace_id}/scenarios/{scenario_id}/scenarioruns/historicaldata | Delete all historical ScenarioRuns in the Scenario
*CosmotechApi.ScenariorunApi* | [**deleteHistoricalDataWorkspace**](docs/ScenariorunApi.md#deleteHistoricalDataWorkspace) | **DELETE** /organizations/{organization_id}/workspaces/{workspace_id}/scenarioruns/historicaldata | Delete all historical ScenarioRuns in the Workspace
*CosmotechApi.ScenariorunApi* | [**deleteScenarioRun**](docs/ScenariorunApi.md#deleteScenarioRun) | **DELETE** /organizations/{organization_id}/scenarioruns/{scenariorun_id} | Delete a scenariorun
*CosmotechApi.ScenariorunApi* | [**findScenarioRunById**](docs/ScenariorunApi.md#findScenarioRunById) | **GET** /organizations/{organization_id}/scenarioruns/{scenariorun_id} | Get the details of a scenariorun
*CosmotechApi.ScenariorunApi* | [**getScenarioRunCumulatedLogs**](docs/ScenariorunApi.md#getScenarioRunCumulatedLogs) | **GET** /organizations/{organization_id}/scenarioruns/{scenariorun_id}/cumulatedlogs | Get the cumulated logs of a scenariorun
*CosmotechApi.ScenariorunApi* | [**getScenarioRunLogs**](docs/ScenariorunApi.md#getScenarioRunLogs) | **GET** /organizations/{organization_id}/scenarioruns/{scenariorun_id}/logs | get the logs for the ScenarioRun
*CosmotechApi.ScenariorunApi* | [**getScenarioRunStatus**](docs/ScenariorunApi.md#getScenarioRunStatus) | **GET** /organizations/{organization_id}/scenarioruns/{scenariorun_id}/status | get the status for the ScenarioRun
*CosmotechApi.ScenariorunApi* | [**getScenarioRuns**](docs/ScenariorunApi.md#getScenarioRuns) | **GET** /organizations/{organization_id}/workspaces/{workspace_id}/scenarios/{scenario_id}/scenarioruns | get the list of ScenarioRuns for the Scenario
*CosmotechApi.ScenariorunApi* | [**getWorkspaceScenarioRuns**](docs/ScenariorunApi.md#getWorkspaceScenarioRuns) | **GET** /organizations/{organization_id}/workspaces/{workspace_id}/scenarioruns | get the list of ScenarioRuns for the Workspace
*CosmotechApi.ScenariorunApi* | [**importScenarioRun**](docs/ScenariorunApi.md#importScenarioRun) | **POST** /organizations/{organization_id}/workspaces/{workspace_id}/scenarios/{scenario_id}/run/import | import a ScenarioRun for the Scenario
*CosmotechApi.ScenariorunApi* | [**runScenario**](docs/ScenariorunApi.md#runScenario) | **POST** /organizations/{organization_id}/workspaces/{workspace_id}/scenarios/{scenario_id}/run | run a ScenarioRun for the Scenario
*CosmotechApi.ScenariorunApi* | [**searchScenarioRuns**](docs/ScenariorunApi.md#searchScenarioRuns) | **POST** /organizations/{organization_id}/scenarioruns/search | Search ScenarioRuns
*CosmotechApi.ScenariorunApi* | [**startScenarioRunContainers**](docs/ScenariorunApi.md#startScenarioRunContainers) | **POST** /organizations/{organization_id}/scenarioruns/startcontainers | Start a new scenariorun with raw containers definition
*CosmotechApi.ScenariorunApi* | [**stopScenarioRun**](docs/ScenariorunApi.md#stopScenarioRun) | **POST** /organizations/{organization_id}/scenarioruns/{scenariorun_id}/stop | stop a ScenarioRun for the Scenario
*CosmotechApi.SolutionApi* | [**addOrReplaceParameterGroups**](docs/SolutionApi.md#addOrReplaceParameterGroups) | **POST** /organizations/{organization_id}/solutions/{solution_id}/parameterGroups | Add Parameter Groups. Any item with the same ID will be overwritten
*CosmotechApi.SolutionApi* | [**addOrReplaceParameters**](docs/SolutionApi.md#addOrReplaceParameters) | **POST** /organizations/{organization_id}/solutions/{solution_id}/parameters | Add Parameters. Any item with the same ID will be overwritten
*CosmotechApi.SolutionApi* | [**addOrReplaceRunTemplates**](docs/SolutionApi.md#addOrReplaceRunTemplates) | **POST** /organizations/{organization_id}/solutions/{solution_id}/runTemplates | Add Run Templates. Any item with the same ID will be overwritten
*CosmotechApi.SolutionApi* | [**createSolution**](docs/SolutionApi.md#createSolution) | **POST** /organizations/{organization_id}/solutions | Register a new solution
*CosmotechApi.SolutionApi* | [**deleteSolution**](docs/SolutionApi.md#deleteSolution) | **DELETE** /organizations/{organization_id}/solutions/{solution_id} | Delete a solution
*CosmotechApi.SolutionApi* | [**deleteSolutionRunTemplate**](docs/SolutionApi.md#deleteSolutionRunTemplate) | **DELETE** /organizations/{organization_id}/solutions/{solution_id}/runTemplates/{run_template_id} | Remove the specified Solution Run Template
*CosmotechApi.SolutionApi* | [**downloadRunTemplateHandler**](docs/SolutionApi.md#downloadRunTemplateHandler) | **GET** /organizations/{organization_id}/solutions/{solution_id}/runtemplates/{run_template_id}/handlers/{handler_id}/download | Download a Run Template step handler zip file
*CosmotechApi.SolutionApi* | [**findAllSolutions**](docs/SolutionApi.md#findAllSolutions) | **GET** /organizations/{organization_id}/solutions | List all Solutions
*CosmotechApi.SolutionApi* | [**findSolutionById**](docs/SolutionApi.md#findSolutionById) | **GET** /organizations/{organization_id}/solutions/{solution_id} | Get the details of a solution
*CosmotechApi.SolutionApi* | [**importSolution**](docs/SolutionApi.md#importSolution) | **POST** /organizations/{organization_id}/solutions/import | Import a solution
*CosmotechApi.SolutionApi* | [**removeAllRunTemplates**](docs/SolutionApi.md#removeAllRunTemplates) | **DELETE** /organizations/{organization_id}/solutions/{solution_id}/runTemplates | Remove all Run Templates from the Solution specified
*CosmotechApi.SolutionApi* | [**removeAllSolutionParameterGroups**](docs/SolutionApi.md#removeAllSolutionParameterGroups) | **DELETE** /organizations/{organization_id}/solutions/{solution_id}/parameterGroups | Remove all Parameter Groups from the Solution specified
*CosmotechApi.SolutionApi* | [**removeAllSolutionParameters**](docs/SolutionApi.md#removeAllSolutionParameters) | **DELETE** /organizations/{organization_id}/solutions/{solution_id}/parameters | Remove all Parameters from the Solution specified
*CosmotechApi.SolutionApi* | [**updateSolution**](docs/SolutionApi.md#updateSolution) | **PATCH** /organizations/{organization_id}/solutions/{solution_id} | Update a solution
*CosmotechApi.SolutionApi* | [**updateSolutionRunTemplate**](docs/SolutionApi.md#updateSolutionRunTemplate) | **PATCH** /organizations/{organization_id}/solutions/{solution_id}/runTemplates/{run_template_id} | Update the specified Solution Run Template
*CosmotechApi.SolutionApi* | [**uploadRunTemplateHandler**](docs/SolutionApi.md#uploadRunTemplateHandler) | **POST** /organizations/{organization_id}/solutions/{solution_id}/runtemplates/{run_template_id}/handlers/{handler_id}/upload | Upload a Run Template step handler zip file
*CosmotechApi.TwingraphApi* | [**batchQuery**](docs/TwingraphApi.md#batchQuery) | **POST** /organizations/{organization_id}/twingraph/{graph_id}/batch-query | Run a query on a graph instance and return the result as a zip file in async mode
*CosmotechApi.TwingraphApi* | [**batchUploadUpdate**](docs/TwingraphApi.md#batchUploadUpdate) | **POST** /organizations/{organization_id}/twingraph/{graph_id}/batch | Async batch update by loading a CSV file on a graph instance 
*CosmotechApi.TwingraphApi* | [**callDelete**](docs/TwingraphApi.md#callDelete) | **DELETE** /organizations/{organization_id}/twingraph/{graph_id} | Delete all versions of a graph and his metadatas
*CosmotechApi.TwingraphApi* | [**createEntities**](docs/TwingraphApi.md#createEntities) | **POST** /organizations/{organization_id}/twingraph/{graph_id}/entity/{type} | Create new entities in a graph instance
*CosmotechApi.TwingraphApi* | [**createGraph**](docs/TwingraphApi.md#createGraph) | **POST** /organizations/{organization_id}/twingraph/{graph_id} | Create a new graph
*CosmotechApi.TwingraphApi* | [**deleteEntities**](docs/TwingraphApi.md#deleteEntities) | **DELETE** /organizations/{organization_id}/twingraph/{graph_id}/entity/{type} | Delete entities in a graph instance
*CosmotechApi.TwingraphApi* | [**downloadGraph**](docs/TwingraphApi.md#downloadGraph) | **GET** /organizations/{organization_id}/twingraph/download/{hash} | Download a graph compressed in a zip file
*CosmotechApi.TwingraphApi* | [**findAllTwingraphs**](docs/TwingraphApi.md#findAllTwingraphs) | **GET** /organizations/{organization_id}/twingraphs | Return the list of all graphs stored in the organization
*CosmotechApi.TwingraphApi* | [**getEntities**](docs/TwingraphApi.md#getEntities) | **GET** /organizations/{organization_id}/twingraph/{graph_id}/entity/{type} | Get entities in a graph instance
*CosmotechApi.TwingraphApi* | [**getGraphMetaData**](docs/TwingraphApi.md#getGraphMetaData) | **GET** /organizations/{organization_id}/twingraph/{graph_id}/metadata | Return the metaData of the specified graph
*CosmotechApi.TwingraphApi* | [**importGraph**](docs/TwingraphApi.md#importGraph) | **POST** /organizations/{organization_id}/twingraph/import | Import a new version of a twin graph
*CosmotechApi.TwingraphApi* | [**jobStatus**](docs/TwingraphApi.md#jobStatus) | **GET** /organizations/{organization_id}/job/{job_id}/status | Get the status of a job
*CosmotechApi.TwingraphApi* | [**query**](docs/TwingraphApi.md#query) | **POST** /organizations/{organization_id}/twingraph/{graph_id}/query | Run a query on a graph instance
*CosmotechApi.TwingraphApi* | [**updateEntities**](docs/TwingraphApi.md#updateEntities) | **PATCH** /organizations/{organization_id}/twingraph/{graph_id}/entity/{type} | Update entities in a graph instance
*CosmotechApi.TwingraphApi* | [**updateGraphMetaData**](docs/TwingraphApi.md#updateGraphMetaData) | **PATCH** /organizations/{organization_id}/twingraph/{graph_id}/metadata | Update the metaData of the specified graph
*CosmotechApi.ValidatorApi* | [**createValidator**](docs/ValidatorApi.md#createValidator) | **POST** /organizations/{organization_id}/datasets/validators | Register a new validator
*CosmotechApi.ValidatorApi* | [**createValidatorRun**](docs/ValidatorApi.md#createValidatorRun) | **POST** /organizations/{organization_id}/datasets/validators/{validator_id}/history | Register a new validator run
*CosmotechApi.ValidatorApi* | [**deleteValidator**](docs/ValidatorApi.md#deleteValidator) | **DELETE** /organizations/{organization_id}/datasets/validators/{validator_id} | Delete a validator
*CosmotechApi.ValidatorApi* | [**deleteValidatorRun**](docs/ValidatorApi.md#deleteValidatorRun) | **DELETE** /organizations/{organization_id}/datasets/validators/{validator_id}/history/{validatorrun_id} | Delete a validator run
*CosmotechApi.ValidatorApi* | [**findAllValidatorRuns**](docs/ValidatorApi.md#findAllValidatorRuns) | **GET** /organizations/{organization_id}/datasets/validators/{validator_id}/history | List all Validator Runs
*CosmotechApi.ValidatorApi* | [**findAllValidators**](docs/ValidatorApi.md#findAllValidators) | **GET** /organizations/{organization_id}/datasets/validators | List all Validators
*CosmotechApi.ValidatorApi* | [**findValidatorById**](docs/ValidatorApi.md#findValidatorById) | **GET** /organizations/{organization_id}/datasets/validators/{validator_id} | Get the details of a validator
*CosmotechApi.ValidatorApi* | [**findValidatorRunById**](docs/ValidatorApi.md#findValidatorRunById) | **GET** /organizations/{organization_id}/datasets/validators/{validator_id}/history/{validatorrun_id} | Get the details of a validator run
*CosmotechApi.ValidatorApi* | [**runValidator**](docs/ValidatorApi.md#runValidator) | **POST** /organizations/{organization_id}/datasets/validators/{validator_id}/run | Run a Validator
*CosmotechApi.WorkspaceApi* | [**addWorkspaceAccessControl**](docs/WorkspaceApi.md#addWorkspaceAccessControl) | **POST** /organizations/{organization_id}/workspaces/{workspace_id}/security/access | Add a control access to the Workspace
*CosmotechApi.WorkspaceApi* | [**createSecret**](docs/WorkspaceApi.md#createSecret) | **POST** /organizations/{organization_id}/workspaces/{workspace_id}/secret | Create a secret for the Workspace
*CosmotechApi.WorkspaceApi* | [**createWorkspace**](docs/WorkspaceApi.md#createWorkspace) | **POST** /organizations/{organization_id}/workspaces | Create a new workspace
*CosmotechApi.WorkspaceApi* | [**deleteAllWorkspaceFiles**](docs/WorkspaceApi.md#deleteAllWorkspaceFiles) | **DELETE** /organizations/{organization_id}/workspaces/{workspace_id}/files | Delete all Workspace files
*CosmotechApi.WorkspaceApi* | [**deleteWorkspace**](docs/WorkspaceApi.md#deleteWorkspace) | **DELETE** /organizations/{organization_id}/workspaces/{workspace_id} | Delete a workspace
*CosmotechApi.WorkspaceApi* | [**deleteWorkspaceFile**](docs/WorkspaceApi.md#deleteWorkspaceFile) | **DELETE** /organizations/{organization_id}/workspaces/{workspace_id}/files/delete | Delete a workspace file
*CosmotechApi.WorkspaceApi* | [**downloadWorkspaceFile**](docs/WorkspaceApi.md#downloadWorkspaceFile) | **GET** /organizations/{organization_id}/workspaces/{workspace_id}/files/download | Download the Workspace File specified
*CosmotechApi.WorkspaceApi* | [**findAllWorkspaceFiles**](docs/WorkspaceApi.md#findAllWorkspaceFiles) | **GET** /organizations/{organization_id}/workspaces/{workspace_id}/files | List all Workspace files
*CosmotechApi.WorkspaceApi* | [**findAllWorkspaces**](docs/WorkspaceApi.md#findAllWorkspaces) | **GET** /organizations/{organization_id}/workspaces | List all Workspaces
*CosmotechApi.WorkspaceApi* | [**findWorkspaceById**](docs/WorkspaceApi.md#findWorkspaceById) | **GET** /organizations/{organization_id}/workspaces/{workspace_id} | Get the details of an workspace
*CosmotechApi.WorkspaceApi* | [**getWorkspaceAccessControl**](docs/WorkspaceApi.md#getWorkspaceAccessControl) | **GET** /organizations/{organization_id}/workspaces/{workspace_id}/security/access/{identity_id} | Get a control access for the Workspace
*CosmotechApi.WorkspaceApi* | [**getWorkspacePermissions**](docs/WorkspaceApi.md#getWorkspacePermissions) | **GET** /organizations/{organization_id}/workspaces/{workspace_id}/permissions/{role} | Get the Workspace permission by given role
*CosmotechApi.WorkspaceApi* | [**getWorkspaceSecurity**](docs/WorkspaceApi.md#getWorkspaceSecurity) | **GET** /organizations/{organization_id}/workspaces/{workspace_id}/security | Get the Workspace security information
*CosmotechApi.WorkspaceApi* | [**getWorkspaceSecurityUsers**](docs/WorkspaceApi.md#getWorkspaceSecurityUsers) | **GET** /organizations/{organization_id}/workspaces/{workspace_id}/security/users | Get the Workspace security users list
*CosmotechApi.WorkspaceApi* | [**importWorkspace**](docs/WorkspaceApi.md#importWorkspace) | **POST** /organizations/{organization_id}/workspaces/import | Import a workspace
*CosmotechApi.WorkspaceApi* | [**removeWorkspaceAccessControl**](docs/WorkspaceApi.md#removeWorkspaceAccessControl) | **DELETE** /organizations/{organization_id}/workspaces/{workspace_id}/security/access/{identity_id} | Remove the specified access from the given Organization Workspace
*CosmotechApi.WorkspaceApi* | [**setWorkspaceDefaultSecurity**](docs/WorkspaceApi.md#setWorkspaceDefaultSecurity) | **POST** /organizations/{organization_id}/workspaces/{workspace_id}/security/default | Set the Workspace default security
*CosmotechApi.WorkspaceApi* | [**updateWorkspace**](docs/WorkspaceApi.md#updateWorkspace) | **PATCH** /organizations/{organization_id}/workspaces/{workspace_id} | Update a workspace
*CosmotechApi.WorkspaceApi* | [**updateWorkspaceAccessControl**](docs/WorkspaceApi.md#updateWorkspaceAccessControl) | **PATCH** /organizations/{organization_id}/workspaces/{workspace_id}/security/access/{identity_id} | Update the specified access to User for a Workspace
*CosmotechApi.WorkspaceApi* | [**uploadWorkspaceFile**](docs/WorkspaceApi.md#uploadWorkspaceFile) | **POST** /organizations/{organization_id}/workspaces/{workspace_id}/files | Upload a file for the Workspace


## Documentation for Models

 - [CosmotechApi.ComponentRolePermissions](docs/ComponentRolePermissions.md)
 - [CosmotechApi.Connector](docs/Connector.md)
 - [CosmotechApi.ConnectorParameter](docs/ConnectorParameter.md)
 - [CosmotechApi.ConnectorParameterGroup](docs/ConnectorParameterGroup.md)
 - [CosmotechApi.ContainerResourceSizeInfo](docs/ContainerResourceSizeInfo.md)
 - [CosmotechApi.ContainerResourceSizing](docs/ContainerResourceSizing.md)
 - [CosmotechApi.Dataset](docs/Dataset.md)
 - [CosmotechApi.DatasetCompatibility](docs/DatasetCompatibility.md)
 - [CosmotechApi.DatasetConnector](docs/DatasetConnector.md)
 - [CosmotechApi.DatasetCopyParameters](docs/DatasetCopyParameters.md)
 - [CosmotechApi.DatasetSearch](docs/DatasetSearch.md)
 - [CosmotechApi.DeleteHistoricalData](docs/DeleteHistoricalData.md)
 - [CosmotechApi.GraphProperties](docs/GraphProperties.md)
 - [CosmotechApi.Organization](docs/Organization.md)
 - [CosmotechApi.OrganizationAccessControl](docs/OrganizationAccessControl.md)
 - [CosmotechApi.OrganizationRole](docs/OrganizationRole.md)
 - [CosmotechApi.OrganizationSecurity](docs/OrganizationSecurity.md)
 - [CosmotechApi.OrganizationService](docs/OrganizationService.md)
 - [CosmotechApi.OrganizationServices](docs/OrganizationServices.md)
 - [CosmotechApi.ResourceSizeInfo](docs/ResourceSizeInfo.md)
 - [CosmotechApi.RunTemplate](docs/RunTemplate.md)
 - [CosmotechApi.RunTemplateHandlerId](docs/RunTemplateHandlerId.md)
 - [CosmotechApi.RunTemplateParameter](docs/RunTemplateParameter.md)
 - [CosmotechApi.RunTemplateParameterGroup](docs/RunTemplateParameterGroup.md)
 - [CosmotechApi.RunTemplateParameterValue](docs/RunTemplateParameterValue.md)
 - [CosmotechApi.RunTemplateResourceSizing](docs/RunTemplateResourceSizing.md)
 - [CosmotechApi.RunTemplateStepSource](docs/RunTemplateStepSource.md)
 - [CosmotechApi.Scenario](docs/Scenario.md)
 - [CosmotechApi.ScenarioAccessControl](docs/ScenarioAccessControl.md)
 - [CosmotechApi.ScenarioChangedParameterValue](docs/ScenarioChangedParameterValue.md)
 - [CosmotechApi.ScenarioComparisonResult](docs/ScenarioComparisonResult.md)
 - [CosmotechApi.ScenarioDataDownloadInfo](docs/ScenarioDataDownloadInfo.md)
 - [CosmotechApi.ScenarioDataDownloadJob](docs/ScenarioDataDownloadJob.md)
 - [CosmotechApi.ScenarioJobState](docs/ScenarioJobState.md)
 - [CosmotechApi.ScenarioLastRun](docs/ScenarioLastRun.md)
 - [CosmotechApi.ScenarioResourceSizing](docs/ScenarioResourceSizing.md)
 - [CosmotechApi.ScenarioRole](docs/ScenarioRole.md)
 - [CosmotechApi.ScenarioRun](docs/ScenarioRun.md)
 - [CosmotechApi.ScenarioRunContainer](docs/ScenarioRunContainer.md)
 - [CosmotechApi.ScenarioRunContainerArtifact](docs/ScenarioRunContainerArtifact.md)
 - [CosmotechApi.ScenarioRunContainerLogs](docs/ScenarioRunContainerLogs.md)
 - [CosmotechApi.ScenarioRunLogs](docs/ScenarioRunLogs.md)
 - [CosmotechApi.ScenarioRunSearch](docs/ScenarioRunSearch.md)
 - [CosmotechApi.ScenarioRunStartContainers](docs/ScenarioRunStartContainers.md)
 - [CosmotechApi.ScenarioRunState](docs/ScenarioRunState.md)
 - [CosmotechApi.ScenarioRunStatus](docs/ScenarioRunStatus.md)
 - [CosmotechApi.ScenarioRunStatusNode](docs/ScenarioRunStatusNode.md)
 - [CosmotechApi.ScenarioRunTemplateParameterValue](docs/ScenarioRunTemplateParameterValue.md)
 - [CosmotechApi.ScenarioSecurity](docs/ScenarioSecurity.md)
 - [CosmotechApi.ScenarioValidationStatus](docs/ScenarioValidationStatus.md)
 - [CosmotechApi.Solution](docs/Solution.md)
 - [CosmotechApi.SourceInfo](docs/SourceInfo.md)
 - [CosmotechApi.TwinGraphBatchResult](docs/TwinGraphBatchResult.md)
 - [CosmotechApi.TwinGraphHash](docs/TwinGraphHash.md)
 - [CosmotechApi.TwinGraphImport](docs/TwinGraphImport.md)
 - [CosmotechApi.TwinGraphImportInfo](docs/TwinGraphImportInfo.md)
 - [CosmotechApi.TwinGraphQuery](docs/TwinGraphQuery.md)
 - [CosmotechApi.Validator](docs/Validator.md)
 - [CosmotechApi.ValidatorRun](docs/ValidatorRun.md)
 - [CosmotechApi.Workspace](docs/Workspace.md)
 - [CosmotechApi.WorkspaceAccessControl](docs/WorkspaceAccessControl.md)
 - [CosmotechApi.WorkspaceFile](docs/WorkspaceFile.md)
 - [CosmotechApi.WorkspaceRole](docs/WorkspaceRole.md)
 - [CosmotechApi.WorkspaceSecret](docs/WorkspaceSecret.md)
 - [CosmotechApi.WorkspaceSecurity](docs/WorkspaceSecurity.md)
 - [CosmotechApi.WorkspaceSolution](docs/WorkspaceSolution.md)
 - [CosmotechApi.WorkspaceWebApp](docs/WorkspaceWebApp.md)


## Documentation for Authorization



### oAuth2AuthCode


- **Type**: OAuth
- **Flow**: implicit
- **Authorization URL**: https://login.microsoftonline.com/common/oauth2/v2.0/authorize
- **Scopes**: 
  - http://dev.api.cosmotech.com/platform: Platform scope

