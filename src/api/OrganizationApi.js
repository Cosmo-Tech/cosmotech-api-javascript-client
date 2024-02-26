/**
 * Cosmo Tech Platform API
 * Cosmo Tech Platform API
 *
 * The version of the OpenAPI document: 3.1.0-dev
 * Contact: platform@cosmotech.com
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 *
 */


import ApiClient from "../ApiClient";
import ComponentRolePermissions from '../model/ComponentRolePermissions';
import Organization from '../model/Organization';
import OrganizationAccessControl from '../model/OrganizationAccessControl';
import OrganizationRole from '../model/OrganizationRole';
import OrganizationSecurity from '../model/OrganizationSecurity';
import OrganizationService from '../model/OrganizationService';

/**
* Organization service.
* @module api/OrganizationApi
* @version 3.1.0-dev
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
     * Add a control access to the Organization
     * @param {String} organizationId the Organization identifier
     * @param {module:model/OrganizationAccessControl} organizationAccessControl the new Organization security access to add.
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link module:model/OrganizationAccessControl} and HTTP response
     */
    addOrganizationAccessControlWithHttpInfo(organizationId, organizationAccessControl) {
      let postBody = organizationAccessControl;
      // verify the required parameter 'organizationId' is set
      if (organizationId === undefined || organizationId === null) {
        throw new Error("Missing the required parameter 'organizationId' when calling addOrganizationAccessControl");
      }
      // verify the required parameter 'organizationAccessControl' is set
      if (organizationAccessControl === undefined || organizationAccessControl === null) {
        throw new Error("Missing the required parameter 'organizationAccessControl' when calling addOrganizationAccessControl");
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
      let returnType = OrganizationAccessControl;
      return this.apiClient.callApi(
        '/organizations/{organization_id}/security/access', 'POST',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null
      );
    }

    /**
     * Add a control access to the Organization
     * @param {String} organizationId the Organization identifier
     * @param {module:model/OrganizationAccessControl} organizationAccessControl the new Organization security access to add.
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:model/OrganizationAccessControl}
     */
    addOrganizationAccessControl(organizationId, organizationAccessControl) {
      return this.addOrganizationAccessControlWithHttpInfo(organizationId, organizationAccessControl)
        .then(function(response_and_data) {
          return response_and_data.data;
        });
    }


    /**
     * List all Organizations
     * @param {Object} opts Optional parameters
     * @param {Number} opts.page page number to query
     * @param {Number} opts.size amount of result by page
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link Array.<module:model/Organization>} and HTTP response
     */
    findAllOrganizationsWithHttpInfo(opts) {
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
      let returnType = [Organization];
      return this.apiClient.callApi(
        '/organizations', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null
      );
    }

    /**
     * List all Organizations
     * @param {Object} opts Optional parameters
     * @param {Number} opts.page page number to query
     * @param {Number} opts.size amount of result by page
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link Array.<module:model/Organization>}
     */
    findAllOrganizations(opts) {
      return this.findAllOrganizationsWithHttpInfo(opts)
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
     * Get all permissions per components
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link Array.<module:model/ComponentRolePermissions>} and HTTP response
     */
    getAllPermissionsWithHttpInfo() {
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
      let returnType = [ComponentRolePermissions];
      return this.apiClient.callApi(
        '/organizations/permissions', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null
      );
    }

    /**
     * Get all permissions per components
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link Array.<module:model/ComponentRolePermissions>}
     */
    getAllPermissions() {
      return this.getAllPermissionsWithHttpInfo()
        .then(function(response_and_data) {
          return response_and_data.data;
        });
    }


    /**
     * Get a control access for the Organization
     * @param {String} organizationId the Organization identifier
     * @param {String} identityId the User identifier
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link module:model/OrganizationAccessControl} and HTTP response
     */
    getOrganizationAccessControlWithHttpInfo(organizationId, identityId) {
      let postBody = null;
      // verify the required parameter 'organizationId' is set
      if (organizationId === undefined || organizationId === null) {
        throw new Error("Missing the required parameter 'organizationId' when calling getOrganizationAccessControl");
      }
      // verify the required parameter 'identityId' is set
      if (identityId === undefined || identityId === null) {
        throw new Error("Missing the required parameter 'identityId' when calling getOrganizationAccessControl");
      }

      let pathParams = {
        'organization_id': organizationId,
        'identity_id': identityId
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
      let returnType = OrganizationAccessControl;
      return this.apiClient.callApi(
        '/organizations/{organization_id}/security/access/{identity_id}', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null
      );
    }

    /**
     * Get a control access for the Organization
     * @param {String} organizationId the Organization identifier
     * @param {String} identityId the User identifier
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:model/OrganizationAccessControl}
     */
    getOrganizationAccessControl(organizationId, identityId) {
      return this.getOrganizationAccessControlWithHttpInfo(organizationId, identityId)
        .then(function(response_and_data) {
          return response_and_data.data;
        });
    }


    /**
     * Get the Organization permissions by given role
     * @param {String} organizationId the Organization identifier
     * @param {String} role the Role
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link Array.<String>} and HTTP response
     */
    getOrganizationPermissionsWithHttpInfo(organizationId, role) {
      let postBody = null;
      // verify the required parameter 'organizationId' is set
      if (organizationId === undefined || organizationId === null) {
        throw new Error("Missing the required parameter 'organizationId' when calling getOrganizationPermissions");
      }
      // verify the required parameter 'role' is set
      if (role === undefined || role === null) {
        throw new Error("Missing the required parameter 'role' when calling getOrganizationPermissions");
      }

      let pathParams = {
        'organization_id': organizationId,
        'role': role
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
      let returnType = ['String'];
      return this.apiClient.callApi(
        '/organizations/{organization_id}/permissions/{role}', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null
      );
    }

    /**
     * Get the Organization permissions by given role
     * @param {String} organizationId the Organization identifier
     * @param {String} role the Role
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link Array.<String>}
     */
    getOrganizationPermissions(organizationId, role) {
      return this.getOrganizationPermissionsWithHttpInfo(organizationId, role)
        .then(function(response_and_data) {
          return response_and_data.data;
        });
    }


    /**
     * Get the Organization security information
     * @param {String} organizationId the Organization identifier
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link module:model/OrganizationSecurity} and HTTP response
     */
    getOrganizationSecurityWithHttpInfo(organizationId) {
      let postBody = null;
      // verify the required parameter 'organizationId' is set
      if (organizationId === undefined || organizationId === null) {
        throw new Error("Missing the required parameter 'organizationId' when calling getOrganizationSecurity");
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
      let returnType = OrganizationSecurity;
      return this.apiClient.callApi(
        '/organizations/{organization_id}/security', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null
      );
    }

    /**
     * Get the Organization security information
     * @param {String} organizationId the Organization identifier
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:model/OrganizationSecurity}
     */
    getOrganizationSecurity(organizationId) {
      return this.getOrganizationSecurityWithHttpInfo(organizationId)
        .then(function(response_and_data) {
          return response_and_data.data;
        });
    }


    /**
     * Get the Organization security users list
     * @param {String} organizationId The Organization identifier
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link Array.<String>} and HTTP response
     */
    getOrganizationSecurityUsersWithHttpInfo(organizationId) {
      let postBody = null;
      // verify the required parameter 'organizationId' is set
      if (organizationId === undefined || organizationId === null) {
        throw new Error("Missing the required parameter 'organizationId' when calling getOrganizationSecurityUsers");
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
      let returnType = ['String'];
      return this.apiClient.callApi(
        '/organizations/{organization_id}/security/users', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null
      );
    }

    /**
     * Get the Organization security users list
     * @param {String} organizationId The Organization identifier
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link Array.<String>}
     */
    getOrganizationSecurityUsers(organizationId) {
      return this.getOrganizationSecurityUsersWithHttpInfo(organizationId)
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
     * Remove the specified access from the given Organization
     * @param {String} organizationId the Organization identifier
     * @param {String} identityId the User identifier
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing HTTP response
     */
    removeOrganizationAccessControlWithHttpInfo(organizationId, identityId) {
      let postBody = null;
      // verify the required parameter 'organizationId' is set
      if (organizationId === undefined || organizationId === null) {
        throw new Error("Missing the required parameter 'organizationId' when calling removeOrganizationAccessControl");
      }
      // verify the required parameter 'identityId' is set
      if (identityId === undefined || identityId === null) {
        throw new Error("Missing the required parameter 'identityId' when calling removeOrganizationAccessControl");
      }

      let pathParams = {
        'organization_id': organizationId,
        'identity_id': identityId
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
        '/organizations/{organization_id}/security/access/{identity_id}', 'DELETE',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null
      );
    }

    /**
     * Remove the specified access from the given Organization
     * @param {String} organizationId the Organization identifier
     * @param {String} identityId the User identifier
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}
     */
    removeOrganizationAccessControl(organizationId, identityId) {
      return this.removeOrganizationAccessControlWithHttpInfo(organizationId, identityId)
        .then(function(response_and_data) {
          return response_and_data.data;
        });
    }


    /**
     * Set the Organization default security
     * @param {String} organizationId the Organization identifier
     * @param {module:model/OrganizationRole} organizationRole This change the organization default security. The default security is the role assigned to any person not on the Access Control List. If the default security is None, then nobody outside of the ACL can access the organization.
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link module:model/OrganizationSecurity} and HTTP response
     */
    setOrganizationDefaultSecurityWithHttpInfo(organizationId, organizationRole) {
      let postBody = organizationRole;
      // verify the required parameter 'organizationId' is set
      if (organizationId === undefined || organizationId === null) {
        throw new Error("Missing the required parameter 'organizationId' when calling setOrganizationDefaultSecurity");
      }
      // verify the required parameter 'organizationRole' is set
      if (organizationRole === undefined || organizationRole === null) {
        throw new Error("Missing the required parameter 'organizationRole' when calling setOrganizationDefaultSecurity");
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
      let returnType = OrganizationSecurity;
      return this.apiClient.callApi(
        '/organizations/{organization_id}/security/default', 'POST',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null
      );
    }

    /**
     * Set the Organization default security
     * @param {String} organizationId the Organization identifier
     * @param {module:model/OrganizationRole} organizationRole This change the organization default security. The default security is the role assigned to any person not on the Access Control List. If the default security is None, then nobody outside of the ACL can access the organization.
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:model/OrganizationSecurity}
     */
    setOrganizationDefaultSecurity(organizationId, organizationRole) {
      return this.setOrganizationDefaultSecurityWithHttpInfo(organizationId, organizationRole)
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
     * @param {module:model/Organization} organization the new Organization details. This endpoint can't be used to update security
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
     * @param {module:model/Organization} organization the new Organization details. This endpoint can't be used to update security
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:model/Organization}
     */
    updateOrganization(organizationId, organization) {
      return this.updateOrganizationWithHttpInfo(organizationId, organization)
        .then(function(response_and_data) {
          return response_and_data.data;
        });
    }


    /**
     * Update the specified access to User for an Organization
     * @param {String} organizationId the Organization identifier
     * @param {String} identityId the User identifier
     * @param {module:model/OrganizationRole} organizationRole The new Organization Access Control
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link module:model/OrganizationAccessControl} and HTTP response
     */
    updateOrganizationAccessControlWithHttpInfo(organizationId, identityId, organizationRole) {
      let postBody = organizationRole;
      // verify the required parameter 'organizationId' is set
      if (organizationId === undefined || organizationId === null) {
        throw new Error("Missing the required parameter 'organizationId' when calling updateOrganizationAccessControl");
      }
      // verify the required parameter 'identityId' is set
      if (identityId === undefined || identityId === null) {
        throw new Error("Missing the required parameter 'identityId' when calling updateOrganizationAccessControl");
      }
      // verify the required parameter 'organizationRole' is set
      if (organizationRole === undefined || organizationRole === null) {
        throw new Error("Missing the required parameter 'organizationRole' when calling updateOrganizationAccessControl");
      }

      let pathParams = {
        'organization_id': organizationId,
        'identity_id': identityId
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
      let returnType = OrganizationAccessControl;
      return this.apiClient.callApi(
        '/organizations/{organization_id}/security/access/{identity_id}', 'PATCH',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null
      );
    }

    /**
     * Update the specified access to User for an Organization
     * @param {String} organizationId the Organization identifier
     * @param {String} identityId the User identifier
     * @param {module:model/OrganizationRole} organizationRole The new Organization Access Control
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:model/OrganizationAccessControl}
     */
    updateOrganizationAccessControl(organizationId, identityId, organizationRole) {
      return this.updateOrganizationAccessControlWithHttpInfo(organizationId, identityId, organizationRole)
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
