/**
 * Cosmo Tech Plaform API
 * Cosmo Tech Platform API
 *
 * The version of the OpenAPI document: 1.0.0-rc
 * Contact: platform@cosmotech.com
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 *
 */


import ApiClient from "../ApiClient";
import ScenarioRun from '../model/ScenarioRun';
import ScenarioRunLogs from '../model/ScenarioRunLogs';
import ScenarioRunSearch from '../model/ScenarioRunSearch';
import ScenarioRunStartContainers from '../model/ScenarioRunStartContainers';
import ScenarioRunStatus from '../model/ScenarioRunStatus';

/**
* Scenariorun service.
* @module api/ScenariorunApi
* @version 1.0.0-rc
*/
export default class ScenariorunApi {

    /**
    * Constructs a new ScenariorunApi. 
    * @alias module:api/ScenariorunApi
    * @class
    * @param {module:ApiClient} [apiClient] Optional API client implementation to use,
    * default to {@link module:ApiClient#instance} if unspecified.
    */
    constructor(apiClient) {
        this.apiClient = apiClient || ApiClient.instance;
    }



    /**
     * Delete a scenariorun
     * @param {String} organizationId the Organization identifier
     * @param {String} scenariorunId the ScenarioRun identifier
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing HTTP response
     */
    deleteScenarioRunWithHttpInfo(organizationId, scenariorunId) {
      let postBody = null;
      // verify the required parameter 'organizationId' is set
      if (organizationId === undefined || organizationId === null) {
        throw new Error("Missing the required parameter 'organizationId' when calling deleteScenarioRun");
      }
      // verify the required parameter 'scenariorunId' is set
      if (scenariorunId === undefined || scenariorunId === null) {
        throw new Error("Missing the required parameter 'scenariorunId' when calling deleteScenarioRun");
      }

      let pathParams = {
        'organization_id': organizationId,
        'scenariorun_id': scenariorunId
      };
      let queryParams = {
      };
      let headerParams = {
      };
      let formParams = {
      };

      let authNames = ['oAuth2AuthCode'];
      let contentTypes = [];
      let accepts = [];
      let returnType = null;
      return this.apiClient.callApi(
        '/organizations/{organization_id}/scenarioruns/{scenariorun_id}', 'DELETE',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null
      );
    }

    /**
     * Delete a scenariorun
     * @param {String} organizationId the Organization identifier
     * @param {String} scenariorunId the ScenarioRun identifier
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}
     */
    deleteScenarioRun(organizationId, scenariorunId) {
      return this.deleteScenarioRunWithHttpInfo(organizationId, scenariorunId)
        .then(function(response_and_data) {
          return response_and_data.data;
        });
    }


    /**
     * Get the details of a scenariorun
     * @param {String} organizationId the Organization identifier
     * @param {String} scenariorunId the ScenarioRun identifier
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link module:model/ScenarioRun} and HTTP response
     */
    findScenarioRunByIdWithHttpInfo(organizationId, scenariorunId) {
      let postBody = null;
      // verify the required parameter 'organizationId' is set
      if (organizationId === undefined || organizationId === null) {
        throw new Error("Missing the required parameter 'organizationId' when calling findScenarioRunById");
      }
      // verify the required parameter 'scenariorunId' is set
      if (scenariorunId === undefined || scenariorunId === null) {
        throw new Error("Missing the required parameter 'scenariorunId' when calling findScenarioRunById");
      }

      let pathParams = {
        'organization_id': organizationId,
        'scenariorun_id': scenariorunId
      };
      let queryParams = {
      };
      let headerParams = {
      };
      let formParams = {
      };

      let authNames = ['oAuth2AuthCode'];
      let contentTypes = [];
      let accepts = ['application/json'];
      let returnType = ScenarioRun;
      return this.apiClient.callApi(
        '/organizations/{organization_id}/scenarioruns/{scenariorun_id}', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null
      );
    }

    /**
     * Get the details of a scenariorun
     * @param {String} organizationId the Organization identifier
     * @param {String} scenariorunId the ScenarioRun identifier
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:model/ScenarioRun}
     */
    findScenarioRunById(organizationId, scenariorunId) {
      return this.findScenarioRunByIdWithHttpInfo(organizationId, scenariorunId)
        .then(function(response_and_data) {
          return response_and_data.data;
        });
    }


    /**
     * Get the cumulated logs of a scenariorun
     * @param {String} organizationId the Organization identifier
     * @param {String} scenariorunId the ScenarioRun identifier
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link String} and HTTP response
     */
    getScenarioRunCumulatedLogsWithHttpInfo(organizationId, scenariorunId) {
      let postBody = null;
      // verify the required parameter 'organizationId' is set
      if (organizationId === undefined || organizationId === null) {
        throw new Error("Missing the required parameter 'organizationId' when calling getScenarioRunCumulatedLogs");
      }
      // verify the required parameter 'scenariorunId' is set
      if (scenariorunId === undefined || scenariorunId === null) {
        throw new Error("Missing the required parameter 'scenariorunId' when calling getScenarioRunCumulatedLogs");
      }

      let pathParams = {
        'organization_id': organizationId,
        'scenariorun_id': scenariorunId
      };
      let queryParams = {
      };
      let headerParams = {
      };
      let formParams = {
      };

      let authNames = ['oAuth2AuthCode'];
      let contentTypes = [];
      let accepts = ['text/plain'];
      let returnType = 'String';
      return this.apiClient.callApi(
        '/organizations/{organization_id}/scenarioruns/{scenariorun_id}/cumulatedlogs', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null
      );
    }

    /**
     * Get the cumulated logs of a scenariorun
     * @param {String} organizationId the Organization identifier
     * @param {String} scenariorunId the ScenarioRun identifier
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link String}
     */
    getScenarioRunCumulatedLogs(organizationId, scenariorunId) {
      return this.getScenarioRunCumulatedLogsWithHttpInfo(organizationId, scenariorunId)
        .then(function(response_and_data) {
          return response_and_data.data;
        });
    }


    /**
     * get the logs for the ScenarioRun
     * @param {String} organizationId the Organization identifier
     * @param {String} scenariorunId the ScenarioRun identifier
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link module:model/ScenarioRunLogs} and HTTP response
     */
    getScenarioRunLogsWithHttpInfo(organizationId, scenariorunId) {
      let postBody = null;
      // verify the required parameter 'organizationId' is set
      if (organizationId === undefined || organizationId === null) {
        throw new Error("Missing the required parameter 'organizationId' when calling getScenarioRunLogs");
      }
      // verify the required parameter 'scenariorunId' is set
      if (scenariorunId === undefined || scenariorunId === null) {
        throw new Error("Missing the required parameter 'scenariorunId' when calling getScenarioRunLogs");
      }

      let pathParams = {
        'organization_id': organizationId,
        'scenariorun_id': scenariorunId
      };
      let queryParams = {
      };
      let headerParams = {
      };
      let formParams = {
      };

      let authNames = ['oAuth2AuthCode'];
      let contentTypes = [];
      let accepts = ['application/json'];
      let returnType = ScenarioRunLogs;
      return this.apiClient.callApi(
        '/organizations/{organization_id}/scenarioruns/{scenariorun_id}/logs', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null
      );
    }

    /**
     * get the logs for the ScenarioRun
     * @param {String} organizationId the Organization identifier
     * @param {String} scenariorunId the ScenarioRun identifier
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:model/ScenarioRunLogs}
     */
    getScenarioRunLogs(organizationId, scenariorunId) {
      return this.getScenarioRunLogsWithHttpInfo(organizationId, scenariorunId)
        .then(function(response_and_data) {
          return response_and_data.data;
        });
    }


    /**
     * get the status for the ScenarioRun
     * @param {String} organizationId the Organization identifier
     * @param {String} scenariorunId the ScenarioRun identifier
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link module:model/ScenarioRunStatus} and HTTP response
     */
    getScenarioRunStatusWithHttpInfo(organizationId, scenariorunId) {
      let postBody = null;
      // verify the required parameter 'organizationId' is set
      if (organizationId === undefined || organizationId === null) {
        throw new Error("Missing the required parameter 'organizationId' when calling getScenarioRunStatus");
      }
      // verify the required parameter 'scenariorunId' is set
      if (scenariorunId === undefined || scenariorunId === null) {
        throw new Error("Missing the required parameter 'scenariorunId' when calling getScenarioRunStatus");
      }

      let pathParams = {
        'organization_id': organizationId,
        'scenariorun_id': scenariorunId
      };
      let queryParams = {
      };
      let headerParams = {
      };
      let formParams = {
      };

      let authNames = ['oAuth2AuthCode'];
      let contentTypes = [];
      let accepts = ['application/json'];
      let returnType = ScenarioRunStatus;
      return this.apiClient.callApi(
        '/organizations/{organization_id}/scenarioruns/{scenariorun_id}/status', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null
      );
    }

    /**
     * get the status for the ScenarioRun
     * @param {String} organizationId the Organization identifier
     * @param {String} scenariorunId the ScenarioRun identifier
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:model/ScenarioRunStatus}
     */
    getScenarioRunStatus(organizationId, scenariorunId) {
      return this.getScenarioRunStatusWithHttpInfo(organizationId, scenariorunId)
        .then(function(response_and_data) {
          return response_and_data.data;
        });
    }


    /**
     * get the list of ScenarioRuns for the Scenario
     * @param {String} organizationId the Organization identifier
     * @param {String} workspaceId the Workspace identifier
     * @param {String} scenarioId the Scenario identifier
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link Array.<module:model/ScenarioRun>} and HTTP response
     */
    getScenarioRunsWithHttpInfo(organizationId, workspaceId, scenarioId) {
      let postBody = null;
      // verify the required parameter 'organizationId' is set
      if (organizationId === undefined || organizationId === null) {
        throw new Error("Missing the required parameter 'organizationId' when calling getScenarioRuns");
      }
      // verify the required parameter 'workspaceId' is set
      if (workspaceId === undefined || workspaceId === null) {
        throw new Error("Missing the required parameter 'workspaceId' when calling getScenarioRuns");
      }
      // verify the required parameter 'scenarioId' is set
      if (scenarioId === undefined || scenarioId === null) {
        throw new Error("Missing the required parameter 'scenarioId' when calling getScenarioRuns");
      }

      let pathParams = {
        'organization_id': organizationId,
        'workspace_id': workspaceId,
        'scenario_id': scenarioId
      };
      let queryParams = {
      };
      let headerParams = {
      };
      let formParams = {
      };

      let authNames = ['oAuth2AuthCode'];
      let contentTypes = [];
      let accepts = ['application/json'];
      let returnType = [ScenarioRun];
      return this.apiClient.callApi(
        '/organizations/{organization_id}/workspaces/{workspace_id}/scenarios/{scenario_id}/scenarioruns', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null
      );
    }

    /**
     * get the list of ScenarioRuns for the Scenario
     * @param {String} organizationId the Organization identifier
     * @param {String} workspaceId the Workspace identifier
     * @param {String} scenarioId the Scenario identifier
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link Array.<module:model/ScenarioRun>}
     */
    getScenarioRuns(organizationId, workspaceId, scenarioId) {
      return this.getScenarioRunsWithHttpInfo(organizationId, workspaceId, scenarioId)
        .then(function(response_and_data) {
          return response_and_data.data;
        });
    }


    /**
     * get the list of ScenarioRuns for the Workspace
     * @param {String} organizationId the Organization identifier
     * @param {String} workspaceId the Workspace identifier
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link Array.<module:model/ScenarioRun>} and HTTP response
     */
    getWorkspaceScenarioRunsWithHttpInfo(organizationId, workspaceId) {
      let postBody = null;
      // verify the required parameter 'organizationId' is set
      if (organizationId === undefined || organizationId === null) {
        throw new Error("Missing the required parameter 'organizationId' when calling getWorkspaceScenarioRuns");
      }
      // verify the required parameter 'workspaceId' is set
      if (workspaceId === undefined || workspaceId === null) {
        throw new Error("Missing the required parameter 'workspaceId' when calling getWorkspaceScenarioRuns");
      }

      let pathParams = {
        'organization_id': organizationId,
        'workspace_id': workspaceId
      };
      let queryParams = {
      };
      let headerParams = {
      };
      let formParams = {
      };

      let authNames = ['oAuth2AuthCode'];
      let contentTypes = [];
      let accepts = ['application/json'];
      let returnType = [ScenarioRun];
      return this.apiClient.callApi(
        '/organizations/{organization_id}/workspaces/{workspace_id}/scenarioruns', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null
      );
    }

    /**
     * get the list of ScenarioRuns for the Workspace
     * @param {String} organizationId the Organization identifier
     * @param {String} workspaceId the Workspace identifier
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link Array.<module:model/ScenarioRun>}
     */
    getWorkspaceScenarioRuns(organizationId, workspaceId) {
      return this.getWorkspaceScenarioRunsWithHttpInfo(organizationId, workspaceId)
        .then(function(response_and_data) {
          return response_and_data.data;
        });
    }


    /**
     * run a ScenarioRun for the Scenario
     * @param {String} organizationId the Organization identifier
     * @param {String} workspaceId the Workspace identifier
     * @param {String} scenarioId the Scenario identifier
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link module:model/ScenarioRun} and HTTP response
     */
    runScenarioWithHttpInfo(organizationId, workspaceId, scenarioId) {
      let postBody = null;
      // verify the required parameter 'organizationId' is set
      if (organizationId === undefined || organizationId === null) {
        throw new Error("Missing the required parameter 'organizationId' when calling runScenario");
      }
      // verify the required parameter 'workspaceId' is set
      if (workspaceId === undefined || workspaceId === null) {
        throw new Error("Missing the required parameter 'workspaceId' when calling runScenario");
      }
      // verify the required parameter 'scenarioId' is set
      if (scenarioId === undefined || scenarioId === null) {
        throw new Error("Missing the required parameter 'scenarioId' when calling runScenario");
      }

      let pathParams = {
        'organization_id': organizationId,
        'workspace_id': workspaceId,
        'scenario_id': scenarioId
      };
      let queryParams = {
      };
      let headerParams = {
      };
      let formParams = {
      };

      let authNames = ['oAuth2AuthCode'];
      let contentTypes = [];
      let accepts = ['application/json'];
      let returnType = ScenarioRun;
      return this.apiClient.callApi(
        '/organizations/{organization_id}/workspaces/{workspace_id}/scenarios/{scenario_id}/run', 'POST',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null
      );
    }

    /**
     * run a ScenarioRun for the Scenario
     * @param {String} organizationId the Organization identifier
     * @param {String} workspaceId the Workspace identifier
     * @param {String} scenarioId the Scenario identifier
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:model/ScenarioRun}
     */
    runScenario(organizationId, workspaceId, scenarioId) {
      return this.runScenarioWithHttpInfo(organizationId, workspaceId, scenarioId)
        .then(function(response_and_data) {
          return response_and_data.data;
        });
    }


    /**
     * Search ScenarioRuns
     * @param {String} organizationId the Organization identifier
     * @param {module:model/ScenarioRunSearch} scenarioRunSearch the ScenarioRun search parameters
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link Array.<module:model/ScenarioRun>} and HTTP response
     */
    searchScenarioRunsWithHttpInfo(organizationId, scenarioRunSearch) {
      let postBody = scenarioRunSearch;
      // verify the required parameter 'organizationId' is set
      if (organizationId === undefined || organizationId === null) {
        throw new Error("Missing the required parameter 'organizationId' when calling searchScenarioRuns");
      }
      // verify the required parameter 'scenarioRunSearch' is set
      if (scenarioRunSearch === undefined || scenarioRunSearch === null) {
        throw new Error("Missing the required parameter 'scenarioRunSearch' when calling searchScenarioRuns");
      }

      let pathParams = {
        'organization_id': organizationId
      };
      let queryParams = {
      };
      let headerParams = {
      };
      let formParams = {
      };

      let authNames = ['oAuth2AuthCode'];
      let contentTypes = ['application/json', 'application/yaml'];
      let accepts = ['application/json'];
      let returnType = [ScenarioRun];
      return this.apiClient.callApi(
        '/organizations/{organization_id}/scenarioruns/search', 'POST',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null
      );
    }

    /**
     * Search ScenarioRuns
     * @param {String} organizationId the Organization identifier
     * @param {module:model/ScenarioRunSearch} scenarioRunSearch the ScenarioRun search parameters
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link Array.<module:model/ScenarioRun>}
     */
    searchScenarioRuns(organizationId, scenarioRunSearch) {
      return this.searchScenarioRunsWithHttpInfo(organizationId, scenarioRunSearch)
        .then(function(response_and_data) {
          return response_and_data.data;
        });
    }


    /**
     * Start a new scenariorun with raw containers definition
     * @param {String} organizationId the Organization identifier
     * @param {module:model/ScenarioRunStartContainers} scenarioRunStartContainers the raw containers definition
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link module:model/ScenarioRun} and HTTP response
     */
    startScenarioRunContainersWithHttpInfo(organizationId, scenarioRunStartContainers) {
      let postBody = scenarioRunStartContainers;
      // verify the required parameter 'organizationId' is set
      if (organizationId === undefined || organizationId === null) {
        throw new Error("Missing the required parameter 'organizationId' when calling startScenarioRunContainers");
      }
      // verify the required parameter 'scenarioRunStartContainers' is set
      if (scenarioRunStartContainers === undefined || scenarioRunStartContainers === null) {
        throw new Error("Missing the required parameter 'scenarioRunStartContainers' when calling startScenarioRunContainers");
      }

      let pathParams = {
        'organization_id': organizationId
      };
      let queryParams = {
      };
      let headerParams = {
      };
      let formParams = {
      };

      let authNames = ['oAuth2AuthCode'];
      let contentTypes = ['application/json', 'application/yaml'];
      let accepts = ['application/json'];
      let returnType = ScenarioRun;
      return this.apiClient.callApi(
        '/organizations/{organization_id}/scenarioruns/startcontainers', 'POST',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null
      );
    }

    /**
     * Start a new scenariorun with raw containers definition
     * @param {String} organizationId the Organization identifier
     * @param {module:model/ScenarioRunStartContainers} scenarioRunStartContainers the raw containers definition
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:model/ScenarioRun}
     */
    startScenarioRunContainers(organizationId, scenarioRunStartContainers) {
      return this.startScenarioRunContainersWithHttpInfo(organizationId, scenarioRunStartContainers)
        .then(function(response_and_data) {
          return response_and_data.data;
        });
    }


    /**
     * stop a ScenarioRun for the Scenario
     * @param {String} organizationId the Organization identifier
     * @param {String} scenariorunId the scenariorun identifier
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link module:model/ScenarioRunStatus} and HTTP response
     */
    stopScenarioRunWithHttpInfo(organizationId, scenariorunId) {
      let postBody = null;
      // verify the required parameter 'organizationId' is set
      if (organizationId === undefined || organizationId === null) {
        throw new Error("Missing the required parameter 'organizationId' when calling stopScenarioRun");
      }
      // verify the required parameter 'scenariorunId' is set
      if (scenariorunId === undefined || scenariorunId === null) {
        throw new Error("Missing the required parameter 'scenariorunId' when calling stopScenarioRun");
      }

      let pathParams = {
        'organization_id': organizationId,
        'scenariorun_id': scenariorunId
      };
      let queryParams = {
      };
      let headerParams = {
      };
      let formParams = {
      };

      let authNames = ['oAuth2AuthCode'];
      let contentTypes = [];
      let accepts = ['application/json'];
      let returnType = ScenarioRunStatus;
      return this.apiClient.callApi(
        '/organizations/{organization_id}/scenarioruns/{scenariorun_id}/stop', 'POST',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null
      );
    }

    /**
     * stop a ScenarioRun for the Scenario
     * @param {String} organizationId the Organization identifier
     * @param {String} scenariorunId the scenariorun identifier
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:model/ScenarioRunStatus}
     */
    stopScenarioRun(organizationId, scenariorunId) {
      return this.stopScenarioRunWithHttpInfo(organizationId, scenariorunId)
        .then(function(response_and_data) {
          return response_and_data.data;
        });
    }


}
