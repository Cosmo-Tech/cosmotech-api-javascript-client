"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _ApiClient = _interopRequireDefault(require("../ApiClient"));

var _User = _interopRequireDefault(require("../model/User"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

/**
* User service.
* @module api/UserApi
* @version 0.0.1-SNAPSHOT
*/
var UserApi = /*#__PURE__*/function () {
  /**
  * Constructs a new UserApi. 
  * @alias module:api/UserApi
  * @class
  * @param {module:ApiClient} [apiClient] Optional API client implementation to use,
  * default to {@link module:ApiClient#instance} if unspecified.
  */
  function UserApi(apiClient) {
    _classCallCheck(this, UserApi);

    this.apiClient = apiClient || _ApiClient["default"].instance;
  }
  /**
   * Callback function to receive the result of the findAllUsers operation.
   * @callback module:api/UserApi~findAllUsersCallback
   * @param {String} error Error message, if any.
   * @param {Array.<module:model/User>} data The data returned by the service call.
   * @param {String} response The complete HTTP response.
   */

  /**
   * List all Users
   * @param {module:api/UserApi~findAllUsersCallback} callback The callback function, accepting three arguments: error, data, response
   * data is of type: {@link Array.<module:model/User>}
   */


  _createClass(UserApi, [{
    key: "findAllUsers",
    value: function findAllUsers(callback) {
      var postBody = null;
      var pathParams = {};
      var queryParams = {};
      var headerParams = {};
      var formParams = {};
      var authNames = ['AADOAuth2AuthCode', 'ApiKeyAuth'];
      var contentTypes = [];
      var accepts = ['application/json'];
      var returnType = [_User["default"]];
      return this.apiClient.callApi('/users', 'GET', pathParams, queryParams, headerParams, formParams, postBody, authNames, contentTypes, accepts, returnType, null, callback);
    }
    /**
     * Callback function to receive the result of the findUserById operation.
     * @callback module:api/UserApi~findUserByIdCallback
     * @param {String} error Error message, if any.
     * @param {module:model/User} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Get the details of an user
     * @param {String} userId the User identifier
     * @param {module:api/UserApi~findUserByIdCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/User}
     */

  }, {
    key: "findUserById",
    value: function findUserById(userId, callback) {
      var postBody = null; // verify the required parameter 'userId' is set

      if (userId === undefined || userId === null) {
        throw new Error("Missing the required parameter 'userId' when calling findUserById");
      }

      var pathParams = {
        'user_id': userId
      };
      var queryParams = {};
      var headerParams = {};
      var formParams = {};
      var authNames = ['AADOAuth2AuthCode', 'ApiKeyAuth'];
      var contentTypes = [];
      var accepts = ['application/json'];
      var returnType = _User["default"];
      return this.apiClient.callApi('/users/{user_id}', 'GET', pathParams, queryParams, headerParams, formParams, postBody, authNames, contentTypes, accepts, returnType, null, callback);
    }
    /**
     * Callback function to receive the result of the registerUser operation.
     * @callback module:api/UserApi~registerUserCallback
     * @param {String} error Error message, if any.
     * @param {module:model/User} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Register a new user
     * @param {module:model/User} user the User to register
     * @param {module:api/UserApi~registerUserCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/User}
     */

  }, {
    key: "registerUser",
    value: function registerUser(user, callback) {
      var postBody = user; // verify the required parameter 'user' is set

      if (user === undefined || user === null) {
        throw new Error("Missing the required parameter 'user' when calling registerUser");
      }

      var pathParams = {};
      var queryParams = {};
      var headerParams = {};
      var formParams = {};
      var authNames = ['AADOAuth2AuthCode', 'ApiKeyAuth'];
      var contentTypes = ['application/json'];
      var accepts = ['application/json'];
      var returnType = _User["default"];
      return this.apiClient.callApi('/users', 'POST', pathParams, queryParams, headerParams, formParams, postBody, authNames, contentTypes, accepts, returnType, null, callback);
    }
    /**
     * Callback function to receive the result of the unregisterUser operation.
     * @callback module:api/UserApi~unregisterUserCallback
     * @param {String} error Error message, if any.
     * @param {module:model/User} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Unregister an user
     * @param {String} userId the User identifier
     * @param {module:api/UserApi~unregisterUserCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/User}
     */

  }, {
    key: "unregisterUser",
    value: function unregisterUser(userId, callback) {
      var postBody = null; // verify the required parameter 'userId' is set

      if (userId === undefined || userId === null) {
        throw new Error("Missing the required parameter 'userId' when calling unregisterUser");
      }

      var pathParams = {
        'user_id': userId
      };
      var queryParams = {};
      var headerParams = {};
      var formParams = {};
      var authNames = ['AADOAuth2AuthCode', 'ApiKeyAuth'];
      var contentTypes = [];
      var accepts = ['application/json'];
      var returnType = _User["default"];
      return this.apiClient.callApi('/users/{user_id}', 'DELETE', pathParams, queryParams, headerParams, formParams, postBody, authNames, contentTypes, accepts, returnType, null, callback);
    }
    /**
     * Callback function to receive the result of the updateUser operation.
     * @callback module:api/UserApi~updateUserCallback
     * @param {String} error Error message, if any.
     * @param {module:model/User} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Update an user
     * @param {String} userId the User identifier
     * @param {module:model/User} user the new User details
     * @param {module:api/UserApi~updateUserCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/User}
     */

  }, {
    key: "updateUser",
    value: function updateUser(userId, user, callback) {
      var postBody = user; // verify the required parameter 'userId' is set

      if (userId === undefined || userId === null) {
        throw new Error("Missing the required parameter 'userId' when calling updateUser");
      } // verify the required parameter 'user' is set


      if (user === undefined || user === null) {
        throw new Error("Missing the required parameter 'user' when calling updateUser");
      }

      var pathParams = {
        'user_id': userId
      };
      var queryParams = {};
      var headerParams = {};
      var formParams = {};
      var authNames = ['AADOAuth2AuthCode', 'ApiKeyAuth'];
      var contentTypes = ['application/json'];
      var accepts = ['application/json'];
      var returnType = _User["default"];
      return this.apiClient.callApi('/users/{user_id}', 'PATCH', pathParams, queryParams, headerParams, formParams, postBody, authNames, contentTypes, accepts, returnType, null, callback);
    }
  }]);

  return UserApi;
}();

exports["default"] = UserApi;