/**
 * Cosmo Tech Platform API
 * Cosmo Tech Platform API
 *
 * The version of the OpenAPI document: 3.1.2-dev
 * Contact: platform@cosmotech.com
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 *
 */


import ApiClient from "../ApiClient";
import Connector from '../model/Connector';

/**
* Connector service.
* @module api/ConnectorApi
* @version 3.1.2-dev
*/
export default class ConnectorApi {

    /**
    * Constructs a new ConnectorApi. 
    * @alias module:api/ConnectorApi
    * @class
    * @param {module:ApiClient} [apiClient] Optional API client implementation to use,
    * default to {@link module:ApiClient#instance} if unspecified.
    */
    constructor(apiClient) {
        this.apiClient = apiClient || ApiClient.instance;
    }



    /**
     * List all Connectors
     * @param {Object} opts Optional parameters
     * @param {Number} opts.page page number to query
     * @param {Number} opts.size amount of result by page
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link Array.<module:model/Connector>} and HTTP response
     */
    findAllConnectorsWithHttpInfo(opts) {
      opts = opts || {};
      let postBody = null;

      let pathParams = {
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
      let returnType = [Connector];
      return this.apiClient.callApi(
        '/connectors', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null
      );
    }

    /**
     * List all Connectors
     * @param {Object} opts Optional parameters
     * @param {Number} opts.page page number to query
     * @param {Number} opts.size amount of result by page
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link Array.<module:model/Connector>}
     */
    findAllConnectors(opts) {
      return this.findAllConnectorsWithHttpInfo(opts)
        .then(function(response_and_data) {
          return response_and_data.data;
        });
    }


    /**
     * Get the details of a connector
     * @param {String} connectorId the Connector identifier
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link module:model/Connector} and HTTP response
     */
    findConnectorByIdWithHttpInfo(connectorId) {
      let postBody = null;
      // verify the required parameter 'connectorId' is set
      if (connectorId === undefined || connectorId === null) {
        throw new Error("Missing the required parameter 'connectorId' when calling findConnectorById");
      }

      let pathParams = {
        'connector_id': connectorId
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
      let returnType = Connector;
      return this.apiClient.callApi(
        '/connectors/{connector_id}', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null
      );
    }

    /**
     * Get the details of a connector
     * @param {String} connectorId the Connector identifier
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:model/Connector}
     */
    findConnectorById(connectorId) {
      return this.findConnectorByIdWithHttpInfo(connectorId)
        .then(function(response_and_data) {
          return response_and_data.data;
        });
    }


    /**
     * Get the details of a connector
     * @param {String} connectorName the Connector name
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link module:model/Connector} and HTTP response
     */
    findConnectorByNameWithHttpInfo(connectorName) {
      let postBody = null;
      // verify the required parameter 'connectorName' is set
      if (connectorName === undefined || connectorName === null) {
        throw new Error("Missing the required parameter 'connectorName' when calling findConnectorByName");
      }

      let pathParams = {
        'connector_name': connectorName
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
      let returnType = Connector;
      return this.apiClient.callApi(
        '/connectors/name/{connector_name}', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null
      );
    }

    /**
     * Get the details of a connector
     * @param {String} connectorName the Connector name
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:model/Connector}
     */
    findConnectorByName(connectorName) {
      return this.findConnectorByNameWithHttpInfo(connectorName)
        .then(function(response_and_data) {
          return response_and_data.data;
        });
    }


    /**
     * Register a new connector
     * @param {module:model/Connector} connector the Connector to register
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link module:model/Connector} and HTTP response
     */
    registerConnectorWithHttpInfo(connector) {
      let postBody = connector;
      // verify the required parameter 'connector' is set
      if (connector === undefined || connector === null) {
        throw new Error("Missing the required parameter 'connector' when calling registerConnector");
      }

      let pathParams = {
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
      let returnType = Connector;
      return this.apiClient.callApi(
        '/connectors', 'POST',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null
      );
    }

    /**
     * Register a new connector
     * @param {module:model/Connector} connector the Connector to register
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:model/Connector}
     */
    registerConnector(connector) {
      return this.registerConnectorWithHttpInfo(connector)
        .then(function(response_and_data) {
          return response_and_data.data;
        });
    }


    /**
     * Unregister a connector
     * @param {String} connectorId the Connector identifier
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing HTTP response
     */
    unregisterConnectorWithHttpInfo(connectorId) {
      let postBody = null;
      // verify the required parameter 'connectorId' is set
      if (connectorId === undefined || connectorId === null) {
        throw new Error("Missing the required parameter 'connectorId' when calling unregisterConnector");
      }

      let pathParams = {
        'connector_id': connectorId
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
        '/connectors/{connector_id}', 'DELETE',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null
      );
    }

    /**
     * Unregister a connector
     * @param {String} connectorId the Connector identifier
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}
     */
    unregisterConnector(connectorId) {
      return this.unregisterConnectorWithHttpInfo(connectorId)
        .then(function(response_and_data) {
          return response_and_data.data;
        });
    }


}
