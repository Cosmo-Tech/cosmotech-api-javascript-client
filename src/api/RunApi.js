/**
 * Cosmo Tech Platform API
 * Cosmo Tech Platform API
 *
 * The version of the OpenAPI document: 3.1.1-SNAPSHOT
 * Contact: platform@cosmotech.com
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 *
 */


import ApiClient from "../ApiClient";
import Run from '../model/Run';
import RunLogs from '../model/RunLogs';
import RunStatus from '../model/RunStatus';

/**
* Run service.
* @module api/RunApi
* @version 3.1.1-SNAPSHOT
*/
export default class RunApi {

    /**
    * Constructs a new RunApi. 
    * @alias module:api/RunApi
    * @class
    * @param {module:ApiClient} [apiClient] Optional API client implementation to use,
    * default to {@link module:ApiClient#instance} if unspecified.
    */
    constructor(apiClient) {
        this.apiClient = apiClient || ApiClient.instance;
    }



    /**
     * Delete a run
     * @param {String} organizationId the Organization identifier
     * @param {String} workspaceId the Workspace identifier
     * @param {String} runnerId the Runner identifier
     * @param {String} runId the Run identifier
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing HTTP response
     */
    deleteRunWithHttpInfo(organizationId, workspaceId, runnerId, runId) {
      let postBody = null;
      // verify the required parameter 'organizationId' is set
      if (organizationId === undefined || organizationId === null) {
        throw new Error("Missing the required parameter 'organizationId' when calling deleteRun");
      }
      // verify the required parameter 'workspaceId' is set
      if (workspaceId === undefined || workspaceId === null) {
        throw new Error("Missing the required parameter 'workspaceId' when calling deleteRun");
      }
      // verify the required parameter 'runnerId' is set
      if (runnerId === undefined || runnerId === null) {
        throw new Error("Missing the required parameter 'runnerId' when calling deleteRun");
      }
      // verify the required parameter 'runId' is set
      if (runId === undefined || runId === null) {
        throw new Error("Missing the required parameter 'runId' when calling deleteRun");
      }

      let pathParams = {
        'organization_id': organizationId,
        'workspace_id': workspaceId,
        'runner_id': runnerId,
        'run_id': runId
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
        '/organizations/{organization_id}/workspaces/{workspace_id}/runners/{runner_id}/runs/{run_id}', 'DELETE',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null
      );
    }

    /**
     * Delete a run
     * @param {String} organizationId the Organization identifier
     * @param {String} workspaceId the Workspace identifier
     * @param {String} runnerId the Runner identifier
     * @param {String} runId the Run identifier
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}
     */
    deleteRun(organizationId, workspaceId, runnerId, runId) {
      return this.deleteRunWithHttpInfo(organizationId, workspaceId, runnerId, runId)
        .then(function(response_and_data) {
          return response_and_data.data;
        });
    }


    /**
     * Get the details of a run
     * @param {String} organizationId the Organization identifier
     * @param {String} workspaceId the Workspace identifier
     * @param {String} runnerId the Runner identifier
     * @param {String} runId the Run identifier
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link module:model/Run} and HTTP response
     */
    getRunWithHttpInfo(organizationId, workspaceId, runnerId, runId) {
      let postBody = null;
      // verify the required parameter 'organizationId' is set
      if (organizationId === undefined || organizationId === null) {
        throw new Error("Missing the required parameter 'organizationId' when calling getRun");
      }
      // verify the required parameter 'workspaceId' is set
      if (workspaceId === undefined || workspaceId === null) {
        throw new Error("Missing the required parameter 'workspaceId' when calling getRun");
      }
      // verify the required parameter 'runnerId' is set
      if (runnerId === undefined || runnerId === null) {
        throw new Error("Missing the required parameter 'runnerId' when calling getRun");
      }
      // verify the required parameter 'runId' is set
      if (runId === undefined || runId === null) {
        throw new Error("Missing the required parameter 'runId' when calling getRun");
      }

      let pathParams = {
        'organization_id': organizationId,
        'workspace_id': workspaceId,
        'runner_id': runnerId,
        'run_id': runId
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
      let returnType = Run;
      return this.apiClient.callApi(
        '/organizations/{organization_id}/workspaces/{workspace_id}/runners/{runner_id}/runs/{run_id}', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null
      );
    }

    /**
     * Get the details of a run
     * @param {String} organizationId the Organization identifier
     * @param {String} workspaceId the Workspace identifier
     * @param {String} runnerId the Runner identifier
     * @param {String} runId the Run identifier
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:model/Run}
     */
    getRun(organizationId, workspaceId, runnerId, runId) {
      return this.getRunWithHttpInfo(organizationId, workspaceId, runnerId, runId)
        .then(function(response_and_data) {
          return response_and_data.data;
        });
    }


    /**
     * get the logs for the Run
     * @param {String} organizationId the Organization identifier
     * @param {String} workspaceId the Workspace identifier
     * @param {String} runnerId the Runner identifier
     * @param {String} runId the Run identifier
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link module:model/RunLogs} and HTTP response
     */
    getRunLogsWithHttpInfo(organizationId, workspaceId, runnerId, runId) {
      let postBody = null;
      // verify the required parameter 'organizationId' is set
      if (organizationId === undefined || organizationId === null) {
        throw new Error("Missing the required parameter 'organizationId' when calling getRunLogs");
      }
      // verify the required parameter 'workspaceId' is set
      if (workspaceId === undefined || workspaceId === null) {
        throw new Error("Missing the required parameter 'workspaceId' when calling getRunLogs");
      }
      // verify the required parameter 'runnerId' is set
      if (runnerId === undefined || runnerId === null) {
        throw new Error("Missing the required parameter 'runnerId' when calling getRunLogs");
      }
      // verify the required parameter 'runId' is set
      if (runId === undefined || runId === null) {
        throw new Error("Missing the required parameter 'runId' when calling getRunLogs");
      }

      let pathParams = {
        'organization_id': organizationId,
        'workspace_id': workspaceId,
        'runner_id': runnerId,
        'run_id': runId
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
      let returnType = RunLogs;
      return this.apiClient.callApi(
        '/organizations/{organization_id}/workspaces/{workspace_id}/runners/{runner_id}/runs/{run_id}/logs', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null
      );
    }

    /**
     * get the logs for the Run
     * @param {String} organizationId the Organization identifier
     * @param {String} workspaceId the Workspace identifier
     * @param {String} runnerId the Runner identifier
     * @param {String} runId the Run identifier
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:model/RunLogs}
     */
    getRunLogs(organizationId, workspaceId, runnerId, runId) {
      return this.getRunLogsWithHttpInfo(organizationId, workspaceId, runnerId, runId)
        .then(function(response_and_data) {
          return response_and_data.data;
        });
    }


    /**
     * get the status for the Run
     * @param {String} organizationId the Organization identifier
     * @param {String} workspaceId the Workspace identifier
     * @param {String} runnerId the Runner identifier
     * @param {String} runId the Run identifier
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link module:model/RunStatus} and HTTP response
     */
    getRunStatusWithHttpInfo(organizationId, workspaceId, runnerId, runId) {
      let postBody = null;
      // verify the required parameter 'organizationId' is set
      if (organizationId === undefined || organizationId === null) {
        throw new Error("Missing the required parameter 'organizationId' when calling getRunStatus");
      }
      // verify the required parameter 'workspaceId' is set
      if (workspaceId === undefined || workspaceId === null) {
        throw new Error("Missing the required parameter 'workspaceId' when calling getRunStatus");
      }
      // verify the required parameter 'runnerId' is set
      if (runnerId === undefined || runnerId === null) {
        throw new Error("Missing the required parameter 'runnerId' when calling getRunStatus");
      }
      // verify the required parameter 'runId' is set
      if (runId === undefined || runId === null) {
        throw new Error("Missing the required parameter 'runId' when calling getRunStatus");
      }

      let pathParams = {
        'organization_id': organizationId,
        'workspace_id': workspaceId,
        'runner_id': runnerId,
        'run_id': runId
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
      let returnType = RunStatus;
      return this.apiClient.callApi(
        '/organizations/{organization_id}/workspaces/{workspace_id}/runners/{runner_id}/runs/{run_id}/status', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null
      );
    }

    /**
     * get the status for the Run
     * @param {String} organizationId the Organization identifier
     * @param {String} workspaceId the Workspace identifier
     * @param {String} runnerId the Runner identifier
     * @param {String} runId the Run identifier
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:model/RunStatus}
     */
    getRunStatus(organizationId, workspaceId, runnerId, runId) {
      return this.getRunStatusWithHttpInfo(organizationId, workspaceId, runnerId, runId)
        .then(function(response_and_data) {
          return response_and_data.data;
        });
    }


    /**
     * get the list of Runs for the Runner
     * @param {String} organizationId the Organization identifier
     * @param {String} workspaceId the Workspace identifier
     * @param {String} runnerId the Runner identifier
     * @param {Object} opts Optional parameters
     * @param {Number} [page] page number to query
     * @param {Number} [size] amount of result by page
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link Array.<module:model/Run>} and HTTP response
     */
    listRunsWithHttpInfo(organizationId, workspaceId, runnerId, opts) {
      opts = opts || {};
      let postBody = null;
      // verify the required parameter 'organizationId' is set
      if (organizationId === undefined || organizationId === null) {
        throw new Error("Missing the required parameter 'organizationId' when calling listRuns");
      }
      // verify the required parameter 'workspaceId' is set
      if (workspaceId === undefined || workspaceId === null) {
        throw new Error("Missing the required parameter 'workspaceId' when calling listRuns");
      }
      // verify the required parameter 'runnerId' is set
      if (runnerId === undefined || runnerId === null) {
        throw new Error("Missing the required parameter 'runnerId' when calling listRuns");
      }

      let pathParams = {
        'organization_id': organizationId,
        'workspace_id': workspaceId,
        'runner_id': runnerId
      };
      let queryParams = {
        'page': opts['page'],
        'size': opts['size']
      };
      let headerParams = {
      };
      let formParams = {
      };

      let authNames = ['oAuth2AuthCode'];
      let contentTypes = [];
      let accepts = ['application/json'];
      let returnType = [Run];
      return this.apiClient.callApi(
        '/organizations/{organization_id}/workspaces/{workspace_id}/runners/{runner_id}/runs', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null
      );
    }

    /**
     * get the list of Runs for the Runner
     * @param {String} organizationId the Organization identifier
     * @param {String} workspaceId the Workspace identifier
     * @param {String} runnerId the Runner identifier
     * @param {Object} opts Optional parameters
     * @param {Number} opts.page page number to query
     * @param {Number} opts.size amount of result by page
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link Array.<module:model/Run>}
     */
    listRuns(organizationId, workspaceId, runnerId, opts) {
      return this.listRunsWithHttpInfo(organizationId, workspaceId, runnerId, opts)
        .then(function(response_and_data) {
          return response_and_data.data;
        });
    }


}
