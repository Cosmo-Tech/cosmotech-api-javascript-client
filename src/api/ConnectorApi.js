/**
 * Cosmo Tech Plaform API
 * Cosmo Tech Platform API
 *
 * The version of the OpenAPI document: 0.0.2-SNAPSHOT
 * 
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
* @version 0.0.2-SNAPSHOT
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
     * Callback function to receive the result of the findAllConnectors operation.
     * @callback module:api/ConnectorApi~findAllConnectorsCallback
     * @param {String} error Error message, if any.
     * @param {Array.<module:model/Connector>} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * List all Connectors
     * @param {module:api/ConnectorApi~findAllConnectorsCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link Array.<module:model/Connector>}
     */
    findAllConnectors(callback) {
      let postBody = null;

      let pathParams = {
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
      let returnType = [Connector];
      return this.apiClient.callApi(
        '/connectors', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null, callback
      );
    }

    /**
     * Callback function to receive the result of the findConnectorById operation.
     * @callback module:api/ConnectorApi~findConnectorByIdCallback
     * @param {String} error Error message, if any.
     * @param {module:model/Connector} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Get the details of a connector
     * @param {String} connectorId the Connector identifier
     * @param {module:api/ConnectorApi~findConnectorByIdCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/Connector}
     */
    findConnectorById(connectorId, callback) {
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
        authNames, contentTypes, accepts, returnType, null, callback
      );
    }

    /**
     * Callback function to receive the result of the registerConnector operation.
     * @callback module:api/ConnectorApi~registerConnectorCallback
     * @param {String} error Error message, if any.
     * @param {module:model/Connector} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Register a new connector
     * @param {module:model/Connector} connector the Connector to register
     * @param {module:api/ConnectorApi~registerConnectorCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/Connector}
     */
    registerConnector(connector, callback) {
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
        authNames, contentTypes, accepts, returnType, null, callback
      );
    }

    /**
     * Callback function to receive the result of the unregisterConnector operation.
     * @callback module:api/ConnectorApi~unregisterConnectorCallback
     * @param {String} error Error message, if any.
     * @param data This operation does not return a value.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Unregister a connector
     * @param {String} connectorId the Connector identifier
     * @param {module:api/ConnectorApi~unregisterConnectorCallback} callback The callback function, accepting three arguments: error, data, response
     */
    unregisterConnector(connectorId, callback) {
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
        authNames, contentTypes, accepts, returnType, null, callback
      );
    }


}
