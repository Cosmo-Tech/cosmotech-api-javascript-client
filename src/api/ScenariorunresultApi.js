/**
 * Cosmo Tech Platform API
 * Cosmo Tech Platform API
 *
 * The version of the OpenAPI document: 3.0.3
 * Contact: platform@cosmotech.com
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 *
 */


import ApiClient from "../ApiClient";
import ScenarioRunResult from '../model/ScenarioRunResult';

/**
* Scenariorunresult service.
* @module api/ScenariorunresultApi
* @version 3.0.3
*/
export default class ScenariorunresultApi {

    /**
    * Constructs a new ScenariorunresultApi. 
    * @alias module:api/ScenariorunresultApi
    * @class
    * @param {module:ApiClient} [apiClient] Optional API client implementation to use,
    * default to {@link module:ApiClient#instance} if unspecified.
    */
    constructor(apiClient) {
        this.apiClient = apiClient || ApiClient.instance;
    }



    /**
     * Get a ScenarioRunResult in the Organization
     * @param {String} organizationId the Organization identifier
     * @param {String} workspaceId the Workspace identifier
     * @param {String} scenarioId the Scenario identifier
     * @param {String} scenariorunId the ScenarioRun identifier
     * @param {String} probeId the Probe identifier
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link module:model/ScenarioRunResult} and HTTP response
     */
    getScenarioRunResultWithHttpInfo(organizationId, workspaceId, scenarioId, scenariorunId, probeId) {
      let postBody = null;
      // verify the required parameter 'organizationId' is set
      if (organizationId === undefined || organizationId === null) {
        throw new Error("Missing the required parameter 'organizationId' when calling getScenarioRunResult");
      }
      // verify the required parameter 'workspaceId' is set
      if (workspaceId === undefined || workspaceId === null) {
        throw new Error("Missing the required parameter 'workspaceId' when calling getScenarioRunResult");
      }
      // verify the required parameter 'scenarioId' is set
      if (scenarioId === undefined || scenarioId === null) {
        throw new Error("Missing the required parameter 'scenarioId' when calling getScenarioRunResult");
      }
      // verify the required parameter 'scenariorunId' is set
      if (scenariorunId === undefined || scenariorunId === null) {
        throw new Error("Missing the required parameter 'scenariorunId' when calling getScenarioRunResult");
      }
      // verify the required parameter 'probeId' is set
      if (probeId === undefined || probeId === null) {
        throw new Error("Missing the required parameter 'probeId' when calling getScenarioRunResult");
      }

      let pathParams = {
        'organization_id': organizationId,
        'workspace_id': workspaceId,
        'scenario_id': scenarioId,
        'scenariorun_id': scenariorunId,
        'probe_id': probeId
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
      let returnType = ScenarioRunResult;
      return this.apiClient.callApi(
        '/organizations/{organization_id}/workspaces/{workspace_id}/scenarios/{scenario_id}/scenarioruns/{scenariorun_id}/probes/{probe_id}', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null
      );
    }

    /**
     * Get a ScenarioRunResult in the Organization
     * @param {String} organizationId the Organization identifier
     * @param {String} workspaceId the Workspace identifier
     * @param {String} scenarioId the Scenario identifier
     * @param {String} scenariorunId the ScenarioRun identifier
     * @param {String} probeId the Probe identifier
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:model/ScenarioRunResult}
     */
    getScenarioRunResult(organizationId, workspaceId, scenarioId, scenariorunId, probeId) {
      return this.getScenarioRunResultWithHttpInfo(organizationId, workspaceId, scenarioId, scenariorunId, probeId)
        .then(function(response_and_data) {
          return response_and_data.data;
        });
    }


    /**
     * Create a new ScenarioRunResult in the Organization
     * @param {String} organizationId the Organization identifier
     * @param {String} workspaceId the Workspace identifier
     * @param {String} scenarioId the Scenario identifier
     * @param {String} scenariorunId the ScenarioRun identifier
     * @param {String} probeId the Probe identifier
     * @param {Object.<String, {String: String}>} requestBody the ScenarioRunResult to register
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link module:model/ScenarioRunResult} and HTTP response
     */
    sendScenarioRunResultWithHttpInfo(organizationId, workspaceId, scenarioId, scenariorunId, probeId, requestBody) {
      let postBody = requestBody;
      // verify the required parameter 'organizationId' is set
      if (organizationId === undefined || organizationId === null) {
        throw new Error("Missing the required parameter 'organizationId' when calling sendScenarioRunResult");
      }
      // verify the required parameter 'workspaceId' is set
      if (workspaceId === undefined || workspaceId === null) {
        throw new Error("Missing the required parameter 'workspaceId' when calling sendScenarioRunResult");
      }
      // verify the required parameter 'scenarioId' is set
      if (scenarioId === undefined || scenarioId === null) {
        throw new Error("Missing the required parameter 'scenarioId' when calling sendScenarioRunResult");
      }
      // verify the required parameter 'scenariorunId' is set
      if (scenariorunId === undefined || scenariorunId === null) {
        throw new Error("Missing the required parameter 'scenariorunId' when calling sendScenarioRunResult");
      }
      // verify the required parameter 'probeId' is set
      if (probeId === undefined || probeId === null) {
        throw new Error("Missing the required parameter 'probeId' when calling sendScenarioRunResult");
      }
      // verify the required parameter 'requestBody' is set
      if (requestBody === undefined || requestBody === null) {
        throw new Error("Missing the required parameter 'requestBody' when calling sendScenarioRunResult");
      }

      let pathParams = {
        'organization_id': organizationId,
        'workspace_id': workspaceId,
        'scenario_id': scenarioId,
        'scenariorun_id': scenariorunId,
        'probe_id': probeId
      };
      let queryParams = {
      };
      let headerParams = {
      };
      let formParams = {
      };

      let authNames = ['oAuth2AuthCode'];
      let contentTypes = ['application/json'];
      let accepts = ['application/json'];
      let returnType = ScenarioRunResult;
      return this.apiClient.callApi(
        '/organizations/{organization_id}/workspaces/{workspace_id}/scenarios/{scenario_id}/scenarioruns/{scenariorun_id}/probes/{probe_id}', 'POST',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null
      );
    }

    /**
     * Create a new ScenarioRunResult in the Organization
     * @param {String} organizationId the Organization identifier
     * @param {String} workspaceId the Workspace identifier
     * @param {String} scenarioId the Scenario identifier
     * @param {String} scenariorunId the ScenarioRun identifier
     * @param {String} probeId the Probe identifier
     * @param {Object.<String, {String: String}>} requestBody the ScenarioRunResult to register
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:model/ScenarioRunResult}
     */
    sendScenarioRunResult(organizationId, workspaceId, scenarioId, scenariorunId, probeId, requestBody) {
      return this.sendScenarioRunResultWithHttpInfo(organizationId, workspaceId, scenarioId, scenariorunId, probeId, requestBody)
        .then(function(response_and_data) {
          return response_and_data.data;
        });
    }


}
