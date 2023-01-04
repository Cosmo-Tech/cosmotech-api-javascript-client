/**
 * Cosmo Tech Plaform API
 * Cosmo Tech Platform API
 *
 * The version of the OpenAPI document: 2.1.10-dev
 * Contact: platform@cosmotech.com
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 *
 */


import ApiClient from "../ApiClient";
import TwinGraphImport from '../model/TwinGraphImport';
import TwinGraphImportInfo from '../model/TwinGraphImportInfo';
import TwinGraphQuery from '../model/TwinGraphQuery';

/**
* Twingraph service.
* @module api/TwingraphApi
* @version 2.1.10-dev
*/
export default class TwingraphApi {

    /**
    * Constructs a new TwingraphApi. 
    * @alias module:api/TwingraphApi
    * @class
    * @param {module:ApiClient} [apiClient] Optional API client implementation to use,
    * default to {@link module:ApiClient#instance} if unspecified.
    */
    constructor(apiClient) {
        this.apiClient = apiClient || ApiClient.instance;
    }



    /**
     * Launch a mass delete job
     * @param {String} organizationId the Organization identifier
     * @param {String} graphId the Graph Identifier
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing HTTP response
     */
    callDeleteWithHttpInfo(organizationId, graphId) {
      let postBody = null;
      // verify the required parameter 'organizationId' is set
      if (organizationId === undefined || organizationId === null) {
        throw new Error("Missing the required parameter 'organizationId' when calling callDelete");
      }
      // verify the required parameter 'graphId' is set
      if (graphId === undefined || graphId === null) {
        throw new Error("Missing the required parameter 'graphId' when calling callDelete");
      }

      let pathParams = {
        'organization_id': organizationId,
        'graph_id': graphId
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
        '/organizations/{organization_id}/twingraph/{graph_id}', 'DELETE',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null
      );
    }

    /**
     * Launch a mass delete job
     * @param {String} organizationId the Organization identifier
     * @param {String} graphId the Graph Identifier
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}
     */
    callDelete(organizationId, graphId) {
      return this.callDeleteWithHttpInfo(organizationId, graphId)
        .then(function(response_and_data) {
          return response_and_data.data;
        });
    }


    /**
     * Import a new version of a twin graph
     * @param {String} organizationId the Organization identifier
     * @param {module:model/TwinGraphImport} twinGraphImport the graph to import
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link module:model/TwinGraphImportInfo} and HTTP response
     */
    importGraphWithHttpInfo(organizationId, twinGraphImport) {
      let postBody = twinGraphImport;
      // verify the required parameter 'organizationId' is set
      if (organizationId === undefined || organizationId === null) {
        throw new Error("Missing the required parameter 'organizationId' when calling importGraph");
      }
      // verify the required parameter 'twinGraphImport' is set
      if (twinGraphImport === undefined || twinGraphImport === null) {
        throw new Error("Missing the required parameter 'twinGraphImport' when calling importGraph");
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
      let returnType = TwinGraphImportInfo;
      return this.apiClient.callApi(
        '/organizations/{organization_id}/twingraph/import', 'POST',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null
      );
    }

    /**
     * Import a new version of a twin graph
     * @param {String} organizationId the Organization identifier
     * @param {module:model/TwinGraphImport} twinGraphImport the graph to import
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:model/TwinGraphImportInfo}
     */
    importGraph(organizationId, twinGraphImport) {
      return this.importGraphWithHttpInfo(organizationId, twinGraphImport)
        .then(function(response_and_data) {
          return response_and_data.data;
        });
    }


    /**
     * Get the status of a job
     * @param {String} organizationId the Organization identifier
     * @param {String} jobId the job identifier
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link String} and HTTP response
     */
    jobStatusWithHttpInfo(organizationId, jobId) {
      let postBody = null;
      // verify the required parameter 'organizationId' is set
      if (organizationId === undefined || organizationId === null) {
        throw new Error("Missing the required parameter 'organizationId' when calling jobStatus");
      }
      // verify the required parameter 'jobId' is set
      if (jobId === undefined || jobId === null) {
        throw new Error("Missing the required parameter 'jobId' when calling jobStatus");
      }

      let pathParams = {
        'organization_id': organizationId,
        'job_id': jobId
      };
      let queryParams = {
      };
      let headerParams = {
      };
      let formParams = {
      };

      let authNames = ['oAuth2AuthCode'];
      let contentTypes = [];
      let accepts = ['application/yaml', 'application/json'];
      let returnType = 'String';
      return this.apiClient.callApi(
        '/organizations/{organization_id}/job/{job_id}/status', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null
      );
    }

    /**
     * Get the status of a job
     * @param {String} organizationId the Organization identifier
     * @param {String} jobId the job identifier
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link String}
     */
    jobStatus(organizationId, jobId) {
      return this.jobStatusWithHttpInfo(organizationId, jobId)
        .then(function(response_and_data) {
          return response_and_data.data;
        });
    }


    /**
     * Run a query on a graph instance
     * @param {String} organizationId the Organization identifier
     * @param {String} graphId the Graph Identifier
     * @param {module:model/TwinGraphQuery} twinGraphQuery the query to run
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link String} and HTTP response
     */
    queryWithHttpInfo(organizationId, graphId, twinGraphQuery) {
      let postBody = twinGraphQuery;
      // verify the required parameter 'organizationId' is set
      if (organizationId === undefined || organizationId === null) {
        throw new Error("Missing the required parameter 'organizationId' when calling query");
      }
      // verify the required parameter 'graphId' is set
      if (graphId === undefined || graphId === null) {
        throw new Error("Missing the required parameter 'graphId' when calling query");
      }
      // verify the required parameter 'twinGraphQuery' is set
      if (twinGraphQuery === undefined || twinGraphQuery === null) {
        throw new Error("Missing the required parameter 'twinGraphQuery' when calling query");
      }

      let pathParams = {
        'organization_id': organizationId,
        'graph_id': graphId
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
      let returnType = 'String';
      return this.apiClient.callApi(
        '/organizations/{organization_id}/twingraph/{graph_id}/query', 'POST',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null
      );
    }

    /**
     * Run a query on a graph instance
     * @param {String} organizationId the Organization identifier
     * @param {String} graphId the Graph Identifier
     * @param {module:model/TwinGraphQuery} twinGraphQuery the query to run
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link String}
     */
    query(organizationId, graphId, twinGraphQuery) {
      return this.queryWithHttpInfo(organizationId, graphId, twinGraphQuery)
        .then(function(response_and_data) {
          return response_and_data.data;
        });
    }


}
