"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _ApiClient = _interopRequireDefault(require("../ApiClient"));

var _Organization = _interopRequireDefault(require("../model/Organization"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

/**
* Organization service.
* @module api/OrganizationApi
* @version 0.0.1-SNAPSHOT
*/
var OrganizationApi = /*#__PURE__*/function () {
  /**
  * Constructs a new OrganizationApi. 
  * @alias module:api/OrganizationApi
  * @class
  * @param {module:ApiClient} [apiClient] Optional API client implementation to use,
  * default to {@link module:ApiClient#instance} if unspecified.
  */
  function OrganizationApi(apiClient) {
    _classCallCheck(this, OrganizationApi);

    this.apiClient = apiClient || _ApiClient["default"].instance;
  }
  /**
   * Callback function to receive the result of the findAllOrganizations operation.
   * @callback module:api/OrganizationApi~findAllOrganizationsCallback
   * @param {String} error Error message, if any.
   * @param {Array.<module:model/Organization>} data The data returned by the service call.
   * @param {String} response The complete HTTP response.
   */

  /**
   * List all Organizations
   * @param {module:api/OrganizationApi~findAllOrganizationsCallback} callback The callback function, accepting three arguments: error, data, response
   * data is of type: {@link Array.<module:model/Organization>}
   */


  _createClass(OrganizationApi, [{
    key: "findAllOrganizations",
    value: function findAllOrganizations(callback) {
      var postBody = null;
      var pathParams = {};
      var queryParams = {};
      var headerParams = {};
      var formParams = {};
      var authNames = ['AADOAuth2AuthCode', 'ApiKeyAuth'];
      var contentTypes = [];
      var accepts = ['application/json'];
      var returnType = [_Organization["default"]];
      return this.apiClient.callApi('/organizations', 'GET', pathParams, queryParams, headerParams, formParams, postBody, authNames, contentTypes, accepts, returnType, null, callback);
    }
    /**
     * Callback function to receive the result of the findOrganizationById operation.
     * @callback module:api/OrganizationApi~findOrganizationByIdCallback
     * @param {String} error Error message, if any.
     * @param {module:model/Organization} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Get the details of an organization
     * @param {String} organizationId the Organization identifier
     * @param {module:api/OrganizationApi~findOrganizationByIdCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/Organization}
     */

  }, {
    key: "findOrganizationById",
    value: function findOrganizationById(organizationId, callback) {
      var postBody = null; // verify the required parameter 'organizationId' is set

      if (organizationId === undefined || organizationId === null) {
        throw new Error("Missing the required parameter 'organizationId' when calling findOrganizationById");
      }

      var pathParams = {
        'organization_id': organizationId
      };
      var queryParams = {};
      var headerParams = {};
      var formParams = {};
      var authNames = ['AADOAuth2AuthCode', 'ApiKeyAuth'];
      var contentTypes = [];
      var accepts = ['application/json'];
      var returnType = _Organization["default"];
      return this.apiClient.callApi('/organizations/{organization_id}', 'GET', pathParams, queryParams, headerParams, formParams, postBody, authNames, contentTypes, accepts, returnType, null, callback);
    }
    /**
     * Callback function to receive the result of the registerOrganization operation.
     * @callback module:api/OrganizationApi~registerOrganizationCallback
     * @param {String} error Error message, if any.
     * @param {module:model/Organization} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Register a new organization
     * @param {module:model/Organization} organization the Organization to register
     * @param {module:api/OrganizationApi~registerOrganizationCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/Organization}
     */

  }, {
    key: "registerOrganization",
    value: function registerOrganization(organization, callback) {
      var postBody = organization; // verify the required parameter 'organization' is set

      if (organization === undefined || organization === null) {
        throw new Error("Missing the required parameter 'organization' when calling registerOrganization");
      }

      var pathParams = {};
      var queryParams = {};
      var headerParams = {};
      var formParams = {};
      var authNames = ['AADOAuth2AuthCode', 'ApiKeyAuth'];
      var contentTypes = ['application/json'];
      var accepts = ['application/json'];
      var returnType = _Organization["default"];
      return this.apiClient.callApi('/organizations', 'POST', pathParams, queryParams, headerParams, formParams, postBody, authNames, contentTypes, accepts, returnType, null, callback);
    }
    /**
     * Callback function to receive the result of the unregisterOrganization operation.
     * @callback module:api/OrganizationApi~unregisterOrganizationCallback
     * @param {String} error Error message, if any.
     * @param {module:model/Organization} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Unregister an organization
     * @param {String} organizationId the Organization identifier
     * @param {module:api/OrganizationApi~unregisterOrganizationCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/Organization}
     */

  }, {
    key: "unregisterOrganization",
    value: function unregisterOrganization(organizationId, callback) {
      var postBody = null; // verify the required parameter 'organizationId' is set

      if (organizationId === undefined || organizationId === null) {
        throw new Error("Missing the required parameter 'organizationId' when calling unregisterOrganization");
      }

      var pathParams = {
        'organization_id': organizationId
      };
      var queryParams = {};
      var headerParams = {};
      var formParams = {};
      var authNames = ['AADOAuth2AuthCode', 'ApiKeyAuth'];
      var contentTypes = [];
      var accepts = ['application/json'];
      var returnType = _Organization["default"];
      return this.apiClient.callApi('/organizations/{organization_id}', 'DELETE', pathParams, queryParams, headerParams, formParams, postBody, authNames, contentTypes, accepts, returnType, null, callback);
    }
    /**
     * Callback function to receive the result of the updateOrganization operation.
     * @callback module:api/OrganizationApi~updateOrganizationCallback
     * @param {String} error Error message, if any.
     * @param {module:model/Organization} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Update an organization
     * @param {String} organizationId the Organization identifier
     * @param {module:model/Organization} organization the new Organization details
     * @param {module:api/OrganizationApi~updateOrganizationCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/Organization}
     */

  }, {
    key: "updateOrganization",
    value: function updateOrganization(organizationId, organization, callback) {
      var postBody = organization; // verify the required parameter 'organizationId' is set

      if (organizationId === undefined || organizationId === null) {
        throw new Error("Missing the required parameter 'organizationId' when calling updateOrganization");
      } // verify the required parameter 'organization' is set


      if (organization === undefined || organization === null) {
        throw new Error("Missing the required parameter 'organization' when calling updateOrganization");
      }

      var pathParams = {
        'organization_id': organizationId
      };
      var queryParams = {};
      var headerParams = {};
      var formParams = {};
      var authNames = ['AADOAuth2AuthCode', 'ApiKeyAuth'];
      var contentTypes = ['application/json'];
      var accepts = ['application/json'];
      var returnType = _Organization["default"];
      return this.apiClient.callApi('/organizations/{organization_id}', 'PATCH', pathParams, queryParams, headerParams, formParams, postBody, authNames, contentTypes, accepts, returnType, null, callback);
    }
  }]);

  return OrganizationApi;
}();

exports["default"] = OrganizationApi;