/**
 * Cosmo Tech Plaform API
 * Cosmo Tech Platform API
 *
 * The version of the OpenAPI document: 0.0.13-rc
 * Contact: platform@cosmotech.com
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 *
 */


import ApiClient from "../ApiClient";
import Organization from '../model/Organization';
import OrganizationService from '../model/OrganizationService';
import OrganizationUser from '../model/OrganizationUser';

/**
* Organization service.
* @module api/OrganizationApi
* @version 0.0.13-rc
*/
export default class OrganizationApi {

    /**
    * Constructs a new OrganizationApi. 
    * @alias module:api/OrganizationApi
    * @class
    * @param {module:ApiClient} [apiClient] Optional API client implementation to use,
    * default to {@link module:ApiClient#instance} if unspecified.
    */
    constructor(apiClient) {
        this.apiClient = apiClient || ApiClient.instance;
    }



    /**
     * Add (or replace) users in the Organization specified
     * @param {String} organizationId the Organization identifier
     * @param {Array.<module:model/OrganizationUser>} organizationUser the Users to add. Any User with the same ID is overwritten
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link Array.<module:model/OrganizationUser>} and HTTP response
     */
    addOrReplaceUsersInOrganizationWithHttpInfo(organizationId, organizationUser) {
      let postBody = organizationUser;
      // verify the required parameter 'organizationId' is set
      if (organizationId === undefined || organizationId === null) {
        throw new Error("Missing the required parameter 'organizationId' when calling addOrReplaceUsersInOrganization");
      }
      // verify the required parameter 'organizationUser' is set
      if (organizationUser === undefined || organizationUser === null) {
        throw new Error("Missing the required parameter 'organizationUser' when calling addOrReplaceUsersInOrganization");
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
      let contentTypes = ['application/json'];
      let accepts = ['application/json'];
      let returnType = [OrganizationUser];
      return this.apiClient.callApi(
        '/organizations/{organization_id}/users', 'POST',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null
      );
    }

    /**
     * Add (or replace) users in the Organization specified
     * @param {String} organizationId the Organization identifier
     * @param {Array.<module:model/OrganizationUser>} organizationUser the Users to add. Any User with the same ID is overwritten
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link Array.<module:model/OrganizationUser>}
     */
    addOrReplaceUsersInOrganization(organizationId, organizationUser) {
      return this.addOrReplaceUsersInOrganizationWithHttpInfo(organizationId, organizationUser)
        .then(function(response_and_data) {
          return response_and_data.data;
        });
    }


    /**
     * List all Organizations
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link Array.<module:model/Organization>} and HTTP response
     */
    findAllOrganizationsWithHttpInfo() {
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
      let returnType = [Organization];
      return this.apiClient.callApi(
        '/organizations', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null
      );
    }

    /**
     * List all Organizations
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link Array.<module:model/Organization>}
     */
    findAllOrganizations() {
      return this.findAllOrganizationsWithHttpInfo()
        .then(function(response_and_data) {
          return response_and_data.data;
        });
    }


    /**
     * Get the details of an Organization
     * @param {String} organizationId the Organization identifier
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link module:model/Organization} and HTTP response
     */
    findOrganizationByIdWithHttpInfo(organizationId) {
      let postBody = null;
      // verify the required parameter 'organizationId' is set
      if (organizationId === undefined || organizationId === null) {
        throw new Error("Missing the required parameter 'organizationId' when calling findOrganizationById");
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
      let contentTypes = [];
      let accepts = ['application/json'];
      let returnType = Organization;
      return this.apiClient.callApi(
        '/organizations/{organization_id}', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null
      );
    }

    /**
     * Get the details of an Organization
     * @param {String} organizationId the Organization identifier
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:model/Organization}
     */
    findOrganizationById(organizationId) {
      return this.findOrganizationByIdWithHttpInfo(organizationId)
        .then(function(response_and_data) {
          return response_and_data.data;
        });
    }


    /**
     * Register a new organization
     * @param {module:model/Organization} organization the Organization to register
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link module:model/Organization} and HTTP response
     */
    registerOrganizationWithHttpInfo(organization) {
      let postBody = organization;
      // verify the required parameter 'organization' is set
      if (organization === undefined || organization === null) {
        throw new Error("Missing the required parameter 'organization' when calling registerOrganization");
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
      let returnType = Organization;
      return this.apiClient.callApi(
        '/organizations', 'POST',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null
      );
    }

    /**
     * Register a new organization
     * @param {module:model/Organization} organization the Organization to register
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:model/Organization}
     */
    registerOrganization(organization) {
      return this.registerOrganizationWithHttpInfo(organization)
        .then(function(response_and_data) {
          return response_and_data.data;
        });
    }


    /**
     * Remove all users from the Organization specified
     * @param {String} organizationId the Organization identifier
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing HTTP response
     */
    removeAllUsersInOrganizationWithHttpInfo(organizationId) {
      let postBody = null;
      // verify the required parameter 'organizationId' is set
      if (organizationId === undefined || organizationId === null) {
        throw new Error("Missing the required parameter 'organizationId' when calling removeAllUsersInOrganization");
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
      let contentTypes = [];
      let accepts = [];
      let returnType = null;
      return this.apiClient.callApi(
        '/organizations/{organization_id}/users', 'DELETE',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null
      );
    }

    /**
     * Remove all users from the Organization specified
     * @param {String} organizationId the Organization identifier
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}
     */
    removeAllUsersInOrganization(organizationId) {
      return this.removeAllUsersInOrganizationWithHttpInfo(organizationId)
        .then(function(response_and_data) {
          return response_and_data.data;
        });
    }


    /**
     * Remove the specified user from the given Organization
     * @param {String} organizationId the Organization identifier
     * @param {String} userId the User identifier
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing HTTP response
     */
    removeUserFromOrganizationWithHttpInfo(organizationId, userId) {
      let postBody = null;
      // verify the required parameter 'organizationId' is set
      if (organizationId === undefined || organizationId === null) {
        throw new Error("Missing the required parameter 'organizationId' when calling removeUserFromOrganization");
      }
      // verify the required parameter 'userId' is set
      if (userId === undefined || userId === null) {
        throw new Error("Missing the required parameter 'userId' when calling removeUserFromOrganization");
      }

      let pathParams = {
        'organization_id': organizationId,
        'user_id': userId
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
        '/organizations/{organization_id}/users/{user_id}', 'DELETE',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null
      );
    }

    /**
     * Remove the specified user from the given Organization
     * @param {String} organizationId the Organization identifier
     * @param {String} userId the User identifier
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}
     */
    removeUserFromOrganization(organizationId, userId) {
      return this.removeUserFromOrganizationWithHttpInfo(organizationId, userId)
        .then(function(response_and_data) {
          return response_and_data.data;
        });
    }


    /**
     * Unregister an organization
     * @param {String} organizationId the Organization identifier
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing HTTP response
     */
    unregisterOrganizationWithHttpInfo(organizationId) {
      let postBody = null;
      // verify the required parameter 'organizationId' is set
      if (organizationId === undefined || organizationId === null) {
        throw new Error("Missing the required parameter 'organizationId' when calling unregisterOrganization");
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
      let contentTypes = [];
      let accepts = [];
      let returnType = null;
      return this.apiClient.callApi(
        '/organizations/{organization_id}', 'DELETE',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null
      );
    }

    /**
     * Unregister an organization
     * @param {String} organizationId the Organization identifier
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}
     */
    unregisterOrganization(organizationId) {
      return this.unregisterOrganizationWithHttpInfo(organizationId)
        .then(function(response_and_data) {
          return response_and_data.data;
        });
    }


    /**
     * Update an Organization
     * @param {String} organizationId the Organization identifier
     * @param {module:model/Organization} organization the new Organization details
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link module:model/Organization} and HTTP response
     */
    updateOrganizationWithHttpInfo(organizationId, organization) {
      let postBody = organization;
      // verify the required parameter 'organizationId' is set
      if (organizationId === undefined || organizationId === null) {
        throw new Error("Missing the required parameter 'organizationId' when calling updateOrganization");
      }
      // verify the required parameter 'organization' is set
      if (organization === undefined || organization === null) {
        throw new Error("Missing the required parameter 'organization' when calling updateOrganization");
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
      let returnType = Organization;
      return this.apiClient.callApi(
        '/organizations/{organization_id}', 'PATCH',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null
      );
    }

    /**
     * Update an Organization
     * @param {String} organizationId the Organization identifier
     * @param {module:model/Organization} organization the new Organization details
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:model/Organization}
     */
    updateOrganization(organizationId, organization) {
      return this.updateOrganizationWithHttpInfo(organizationId, organization)
        .then(function(response_and_data) {
          return response_and_data.data;
        });
    }


    /**
     * Update the solutions container registry configuration for the Organization specified
     * @param {String} organizationId the Organization identifier
     * @param {module:model/OrganizationService} organizationService the new solutions container registry configuration to use
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link module:model/OrganizationService} and HTTP response
     */
    updateSolutionsContainerRegistryByOrganizationIdWithHttpInfo(organizationId, organizationService) {
      let postBody = organizationService;
      // verify the required parameter 'organizationId' is set
      if (organizationId === undefined || organizationId === null) {
        throw new Error("Missing the required parameter 'organizationId' when calling updateSolutionsContainerRegistryByOrganizationId");
      }
      // verify the required parameter 'organizationService' is set
      if (organizationService === undefined || organizationService === null) {
        throw new Error("Missing the required parameter 'organizationService' when calling updateSolutionsContainerRegistryByOrganizationId");
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
      let returnType = OrganizationService;
      return this.apiClient.callApi(
        '/organizations/{organization_id}/services/solutionsContainerRegistry', 'PATCH',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null
      );
    }

    /**
     * Update the solutions container registry configuration for the Organization specified
     * @param {String} organizationId the Organization identifier
     * @param {module:model/OrganizationService} organizationService the new solutions container registry configuration to use
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:model/OrganizationService}
     */
    updateSolutionsContainerRegistryByOrganizationId(organizationId, organizationService) {
      return this.updateSolutionsContainerRegistryByOrganizationIdWithHttpInfo(organizationId, organizationService)
        .then(function(response_and_data) {
          return response_and_data.data;
        });
    }


    /**
     * Update storage configuration for the Organization specified
     * @param {String} organizationId the Organization identifier
     * @param {module:model/OrganizationService} organizationService the new Storage configuration to use
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link module:model/OrganizationService} and HTTP response
     */
    updateStorageByOrganizationIdWithHttpInfo(organizationId, organizationService) {
      let postBody = organizationService;
      // verify the required parameter 'organizationId' is set
      if (organizationId === undefined || organizationId === null) {
        throw new Error("Missing the required parameter 'organizationId' when calling updateStorageByOrganizationId");
      }
      // verify the required parameter 'organizationService' is set
      if (organizationService === undefined || organizationService === null) {
        throw new Error("Missing the required parameter 'organizationService' when calling updateStorageByOrganizationId");
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
      let returnType = OrganizationService;
      return this.apiClient.callApi(
        '/organizations/{organization_id}/services/storage', 'PATCH',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null
      );
    }

    /**
     * Update storage configuration for the Organization specified
     * @param {String} organizationId the Organization identifier
     * @param {module:model/OrganizationService} organizationService the new Storage configuration to use
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:model/OrganizationService}
     */
    updateStorageByOrganizationId(organizationId, organizationService) {
      return this.updateStorageByOrganizationIdWithHttpInfo(organizationId, organizationService)
        .then(function(response_and_data) {
          return response_and_data.data;
        });
    }


    /**
     * Update tenant credentials for the Organization specified
     * @param {String} organizationId the Organization identifier
     * @param {Object.<String, {String: Object}>} requestBody the new Tenant Credentials to use
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link Object.<String, {String: Object}>} and HTTP response
     */
    updateTenantCredentialsByOrganizationIdWithHttpInfo(organizationId, requestBody) {
      let postBody = requestBody;
      // verify the required parameter 'organizationId' is set
      if (organizationId === undefined || organizationId === null) {
        throw new Error("Missing the required parameter 'organizationId' when calling updateTenantCredentialsByOrganizationId");
      }
      // verify the required parameter 'requestBody' is set
      if (requestBody === undefined || requestBody === null) {
        throw new Error("Missing the required parameter 'requestBody' when calling updateTenantCredentialsByOrganizationId");
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
      let contentTypes = ['application/json'];
      let accepts = ['application/json'];
      let returnType = {'String': Object};
      return this.apiClient.callApi(
        '/organizations/{organization_id}/services/tenantCredentials', 'PATCH',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null
      );
    }

    /**
     * Update tenant credentials for the Organization specified
     * @param {String} organizationId the Organization identifier
     * @param {Object.<String, {String: Object}>} requestBody the new Tenant Credentials to use
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link Object.<String, {String: Object}>}
     */
    updateTenantCredentialsByOrganizationId(organizationId, requestBody) {
      return this.updateTenantCredentialsByOrganizationIdWithHttpInfo(organizationId, requestBody)
        .then(function(response_and_data) {
          return response_and_data.data;
        });
    }


}
