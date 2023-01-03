/**
 * Cosmo Tech Plaform API
 * Cosmo Tech Platform API
 *
 * The version of the OpenAPI document: 2.1.8-dev
 * Contact: platform@cosmotech.com
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 *
 */


import ApiClient from "../ApiClient";
import Workspace from '../model/Workspace';
import WorkspaceFile from '../model/WorkspaceFile';
import WorkspaceSecret from '../model/WorkspaceSecret';
import WorkspaceUser from '../model/WorkspaceUser';

/**
* Workspace service.
* @module api/WorkspaceApi
* @version 2.1.8-dev
*/
export default class WorkspaceApi {

    /**
    * Constructs a new WorkspaceApi. 
    * @alias module:api/WorkspaceApi
    * @class
    * @param {module:ApiClient} [apiClient] Optional API client implementation to use,
    * default to {@link module:ApiClient#instance} if unspecified.
    */
    constructor(apiClient) {
        this.apiClient = apiClient || ApiClient.instance;
    }



    /**
     * Add (or replace) users to the Workspace specified
     * @param {String} organizationId the Organization identifier
     * @param {String} workspaceId the Workspace identifier
     * @param {Array.<module:model/WorkspaceUser>} workspaceUser the Users to add. Any User with the same ID is overwritten
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link Array.<module:model/WorkspaceUser>} and HTTP response
     */
    addOrReplaceUsersInOrganizationWorkspaceWithHttpInfo(organizationId, workspaceId, workspaceUser) {
      let postBody = workspaceUser;
      // verify the required parameter 'organizationId' is set
      if (organizationId === undefined || organizationId === null) {
        throw new Error("Missing the required parameter 'organizationId' when calling addOrReplaceUsersInOrganizationWorkspace");
      }
      // verify the required parameter 'workspaceId' is set
      if (workspaceId === undefined || workspaceId === null) {
        throw new Error("Missing the required parameter 'workspaceId' when calling addOrReplaceUsersInOrganizationWorkspace");
      }
      // verify the required parameter 'workspaceUser' is set
      if (workspaceUser === undefined || workspaceUser === null) {
        throw new Error("Missing the required parameter 'workspaceUser' when calling addOrReplaceUsersInOrganizationWorkspace");
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
      let contentTypes = ['application/json'];
      let accepts = ['application/json'];
      let returnType = [WorkspaceUser];
      return this.apiClient.callApi(
        '/organizations/{organization_id}/workspaces/{workspace_id}/users', 'POST',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null
      );
    }

    /**
     * Add (or replace) users to the Workspace specified
     * @param {String} organizationId the Organization identifier
     * @param {String} workspaceId the Workspace identifier
     * @param {Array.<module:model/WorkspaceUser>} workspaceUser the Users to add. Any User with the same ID is overwritten
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link Array.<module:model/WorkspaceUser>}
     */
    addOrReplaceUsersInOrganizationWorkspace(organizationId, workspaceId, workspaceUser) {
      return this.addOrReplaceUsersInOrganizationWorkspaceWithHttpInfo(organizationId, workspaceId, workspaceUser)
        .then(function(response_and_data) {
          return response_and_data.data;
        });
    }


    /**
     * Create a secret for the Workspace
     * @param {String} organizationId the Organization identifier
     * @param {String} workspaceId the Workspace identifier
     * @param {module:model/WorkspaceSecret} workspaceSecret the definition of the secret
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing HTTP response
     */
    createSecretWithHttpInfo(organizationId, workspaceId, workspaceSecret) {
      let postBody = workspaceSecret;
      // verify the required parameter 'organizationId' is set
      if (organizationId === undefined || organizationId === null) {
        throw new Error("Missing the required parameter 'organizationId' when calling createSecret");
      }
      // verify the required parameter 'workspaceId' is set
      if (workspaceId === undefined || workspaceId === null) {
        throw new Error("Missing the required parameter 'workspaceId' when calling createSecret");
      }
      // verify the required parameter 'workspaceSecret' is set
      if (workspaceSecret === undefined || workspaceSecret === null) {
        throw new Error("Missing the required parameter 'workspaceSecret' when calling createSecret");
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
      let contentTypes = ['application/json', 'application/yaml'];
      let accepts = [];
      let returnType = null;
      return this.apiClient.callApi(
        '/organizations/{organization_id}/workspaces/{workspace_id}/secret', 'POST',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null
      );
    }

    /**
     * Create a secret for the Workspace
     * @param {String} organizationId the Organization identifier
     * @param {String} workspaceId the Workspace identifier
     * @param {module:model/WorkspaceSecret} workspaceSecret the definition of the secret
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}
     */
    createSecret(organizationId, workspaceId, workspaceSecret) {
      return this.createSecretWithHttpInfo(organizationId, workspaceId, workspaceSecret)
        .then(function(response_and_data) {
          return response_and_data.data;
        });
    }


    /**
     * Create a new workspace
     * @param {String} organizationId the Organization identifier
     * @param {module:model/Workspace} workspace the Workspace to create
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link module:model/Workspace} and HTTP response
     */
    createWorkspaceWithHttpInfo(organizationId, workspace) {
      let postBody = workspace;
      // verify the required parameter 'organizationId' is set
      if (organizationId === undefined || organizationId === null) {
        throw new Error("Missing the required parameter 'organizationId' when calling createWorkspace");
      }
      // verify the required parameter 'workspace' is set
      if (workspace === undefined || workspace === null) {
        throw new Error("Missing the required parameter 'workspace' when calling createWorkspace");
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
      let returnType = Workspace;
      return this.apiClient.callApi(
        '/organizations/{organization_id}/workspaces', 'POST',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null
      );
    }

    /**
     * Create a new workspace
     * @param {String} organizationId the Organization identifier
     * @param {module:model/Workspace} workspace the Workspace to create
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:model/Workspace}
     */
    createWorkspace(organizationId, workspace) {
      return this.createWorkspaceWithHttpInfo(organizationId, workspace)
        .then(function(response_and_data) {
          return response_and_data.data;
        });
    }


    /**
     * Delete all Workspace files
     * @param {String} organizationId the Organization identifier
     * @param {String} workspaceId the Workspace identifier
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing HTTP response
     */
    deleteAllWorkspaceFilesWithHttpInfo(organizationId, workspaceId) {
      let postBody = null;
      // verify the required parameter 'organizationId' is set
      if (organizationId === undefined || organizationId === null) {
        throw new Error("Missing the required parameter 'organizationId' when calling deleteAllWorkspaceFiles");
      }
      // verify the required parameter 'workspaceId' is set
      if (workspaceId === undefined || workspaceId === null) {
        throw new Error("Missing the required parameter 'workspaceId' when calling deleteAllWorkspaceFiles");
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
      let accepts = [];
      let returnType = null;
      return this.apiClient.callApi(
        '/organizations/{organization_id}/workspaces/{workspace_id}/files', 'DELETE',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null
      );
    }

    /**
     * Delete all Workspace files
     * @param {String} organizationId the Organization identifier
     * @param {String} workspaceId the Workspace identifier
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}
     */
    deleteAllWorkspaceFiles(organizationId, workspaceId) {
      return this.deleteAllWorkspaceFilesWithHttpInfo(organizationId, workspaceId)
        .then(function(response_and_data) {
          return response_and_data.data;
        });
    }


    /**
     * Delete a workspace
     * @param {String} organizationId the Organization identifier
     * @param {String} workspaceId the Workspace identifier
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link module:model/Workspace} and HTTP response
     */
    deleteWorkspaceWithHttpInfo(organizationId, workspaceId) {
      let postBody = null;
      // verify the required parameter 'organizationId' is set
      if (organizationId === undefined || organizationId === null) {
        throw new Error("Missing the required parameter 'organizationId' when calling deleteWorkspace");
      }
      // verify the required parameter 'workspaceId' is set
      if (workspaceId === undefined || workspaceId === null) {
        throw new Error("Missing the required parameter 'workspaceId' when calling deleteWorkspace");
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
      let returnType = Workspace;
      return this.apiClient.callApi(
        '/organizations/{organization_id}/workspaces/{workspace_id}', 'DELETE',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null
      );
    }

    /**
     * Delete a workspace
     * @param {String} organizationId the Organization identifier
     * @param {String} workspaceId the Workspace identifier
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:model/Workspace}
     */
    deleteWorkspace(organizationId, workspaceId) {
      return this.deleteWorkspaceWithHttpInfo(organizationId, workspaceId)
        .then(function(response_and_data) {
          return response_and_data.data;
        });
    }


    /**
     * Delete a workspace file
     * @param {String} organizationId the Organization identifier
     * @param {String} workspaceId the Workspace identifier
     * @param {String} fileName the file name
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing HTTP response
     */
    deleteWorkspaceFileWithHttpInfo(organizationId, workspaceId, fileName) {
      let postBody = null;
      // verify the required parameter 'organizationId' is set
      if (organizationId === undefined || organizationId === null) {
        throw new Error("Missing the required parameter 'organizationId' when calling deleteWorkspaceFile");
      }
      // verify the required parameter 'workspaceId' is set
      if (workspaceId === undefined || workspaceId === null) {
        throw new Error("Missing the required parameter 'workspaceId' when calling deleteWorkspaceFile");
      }
      // verify the required parameter 'fileName' is set
      if (fileName === undefined || fileName === null) {
        throw new Error("Missing the required parameter 'fileName' when calling deleteWorkspaceFile");
      }

      let pathParams = {
        'organization_id': organizationId,
        'workspace_id': workspaceId
      };
      let queryParams = {
        'file_name': fileName
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
        '/organizations/{organization_id}/workspaces/{workspace_id}/files/delete', 'DELETE',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null
      );
    }

    /**
     * Delete a workspace file
     * @param {String} organizationId the Organization identifier
     * @param {String} workspaceId the Workspace identifier
     * @param {String} fileName the file name
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}
     */
    deleteWorkspaceFile(organizationId, workspaceId, fileName) {
      return this.deleteWorkspaceFileWithHttpInfo(organizationId, workspaceId, fileName)
        .then(function(response_and_data) {
          return response_and_data.data;
        });
    }


    /**
     * Download the Workspace File specified
     * @param {String} organizationId the Organization identifier
     * @param {String} workspaceId the Workspace identifier
     * @param {String} fileName the file name
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link File} and HTTP response
     */
    downloadWorkspaceFileWithHttpInfo(organizationId, workspaceId, fileName) {
      let postBody = null;
      // verify the required parameter 'organizationId' is set
      if (organizationId === undefined || organizationId === null) {
        throw new Error("Missing the required parameter 'organizationId' when calling downloadWorkspaceFile");
      }
      // verify the required parameter 'workspaceId' is set
      if (workspaceId === undefined || workspaceId === null) {
        throw new Error("Missing the required parameter 'workspaceId' when calling downloadWorkspaceFile");
      }
      // verify the required parameter 'fileName' is set
      if (fileName === undefined || fileName === null) {
        throw new Error("Missing the required parameter 'fileName' when calling downloadWorkspaceFile");
      }

      let pathParams = {
        'organization_id': organizationId,
        'workspace_id': workspaceId
      };
      let queryParams = {
        'file_name': fileName
      };
      let headerParams = {
      };
      let formParams = {
      };

      let authNames = ['oAuth2AuthCode'];
      let contentTypes = [];
      let accepts = ['application/octet-stream'];
      let returnType = File;
      return this.apiClient.callApi(
        '/organizations/{organization_id}/workspaces/{workspace_id}/files/download', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null
      );
    }

    /**
     * Download the Workspace File specified
     * @param {String} organizationId the Organization identifier
     * @param {String} workspaceId the Workspace identifier
     * @param {String} fileName the file name
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link File}
     */
    downloadWorkspaceFile(organizationId, workspaceId, fileName) {
      return this.downloadWorkspaceFileWithHttpInfo(organizationId, workspaceId, fileName)
        .then(function(response_and_data) {
          return response_and_data.data;
        });
    }


    /**
     * List all Workspace files
     * @param {String} organizationId the Organization identifier
     * @param {String} workspaceId the Workspace identifier
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link Array.<module:model/WorkspaceFile>} and HTTP response
     */
    findAllWorkspaceFilesWithHttpInfo(organizationId, workspaceId) {
      let postBody = null;
      // verify the required parameter 'organizationId' is set
      if (organizationId === undefined || organizationId === null) {
        throw new Error("Missing the required parameter 'organizationId' when calling findAllWorkspaceFiles");
      }
      // verify the required parameter 'workspaceId' is set
      if (workspaceId === undefined || workspaceId === null) {
        throw new Error("Missing the required parameter 'workspaceId' when calling findAllWorkspaceFiles");
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
      let returnType = [WorkspaceFile];
      return this.apiClient.callApi(
        '/organizations/{organization_id}/workspaces/{workspace_id}/files', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null
      );
    }

    /**
     * List all Workspace files
     * @param {String} organizationId the Organization identifier
     * @param {String} workspaceId the Workspace identifier
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link Array.<module:model/WorkspaceFile>}
     */
    findAllWorkspaceFiles(organizationId, workspaceId) {
      return this.findAllWorkspaceFilesWithHttpInfo(organizationId, workspaceId)
        .then(function(response_and_data) {
          return response_and_data.data;
        });
    }


    /**
     * List all Workspaces
     * @param {String} organizationId the Organization identifier
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link Array.<module:model/Workspace>} and HTTP response
     */
    findAllWorkspacesWithHttpInfo(organizationId) {
      let postBody = null;
      // verify the required parameter 'organizationId' is set
      if (organizationId === undefined || organizationId === null) {
        throw new Error("Missing the required parameter 'organizationId' when calling findAllWorkspaces");
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
      let returnType = [Workspace];
      return this.apiClient.callApi(
        '/organizations/{organization_id}/workspaces', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null
      );
    }

    /**
     * List all Workspaces
     * @param {String} organizationId the Organization identifier
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link Array.<module:model/Workspace>}
     */
    findAllWorkspaces(organizationId) {
      return this.findAllWorkspacesWithHttpInfo(organizationId)
        .then(function(response_and_data) {
          return response_and_data.data;
        });
    }


    /**
     * Get the details of an workspace
     * @param {String} organizationId the Organization identifier
     * @param {String} workspaceId the Workspace identifier
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link module:model/Workspace} and HTTP response
     */
    findWorkspaceByIdWithHttpInfo(organizationId, workspaceId) {
      let postBody = null;
      // verify the required parameter 'organizationId' is set
      if (organizationId === undefined || organizationId === null) {
        throw new Error("Missing the required parameter 'organizationId' when calling findWorkspaceById");
      }
      // verify the required parameter 'workspaceId' is set
      if (workspaceId === undefined || workspaceId === null) {
        throw new Error("Missing the required parameter 'workspaceId' when calling findWorkspaceById");
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
      let returnType = Workspace;
      return this.apiClient.callApi(
        '/organizations/{organization_id}/workspaces/{workspace_id}', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null
      );
    }

    /**
     * Get the details of an workspace
     * @param {String} organizationId the Organization identifier
     * @param {String} workspaceId the Workspace identifier
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:model/Workspace}
     */
    findWorkspaceById(organizationId, workspaceId) {
      return this.findWorkspaceByIdWithHttpInfo(organizationId, workspaceId)
        .then(function(response_and_data) {
          return response_and_data.data;
        });
    }


    /**
     * Remove all users from the Workspace specified
     * @param {String} organizationId the Organization identifier
     * @param {String} workspaceId the Workspace identifier
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing HTTP response
     */
    removeAllUsersOfWorkspaceWithHttpInfo(organizationId, workspaceId) {
      let postBody = null;
      // verify the required parameter 'organizationId' is set
      if (organizationId === undefined || organizationId === null) {
        throw new Error("Missing the required parameter 'organizationId' when calling removeAllUsersOfWorkspace");
      }
      // verify the required parameter 'workspaceId' is set
      if (workspaceId === undefined || workspaceId === null) {
        throw new Error("Missing the required parameter 'workspaceId' when calling removeAllUsersOfWorkspace");
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
      let accepts = [];
      let returnType = null;
      return this.apiClient.callApi(
        '/organizations/{organization_id}/workspaces/{workspace_id}/users', 'DELETE',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null
      );
    }

    /**
     * Remove all users from the Workspace specified
     * @param {String} organizationId the Organization identifier
     * @param {String} workspaceId the Workspace identifier
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}
     */
    removeAllUsersOfWorkspace(organizationId, workspaceId) {
      return this.removeAllUsersOfWorkspaceWithHttpInfo(organizationId, workspaceId)
        .then(function(response_and_data) {
          return response_and_data.data;
        });
    }


    /**
     * Remove the specified user from the given Organization Workspace
     * @param {String} organizationId the Organization identifier
     * @param {String} workspaceId the Workspace identifier
     * @param {String} userId the User identifier
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing HTTP response
     */
    removeUserFromOrganizationWorkspaceWithHttpInfo(organizationId, workspaceId, userId) {
      let postBody = null;
      // verify the required parameter 'organizationId' is set
      if (organizationId === undefined || organizationId === null) {
        throw new Error("Missing the required parameter 'organizationId' when calling removeUserFromOrganizationWorkspace");
      }
      // verify the required parameter 'workspaceId' is set
      if (workspaceId === undefined || workspaceId === null) {
        throw new Error("Missing the required parameter 'workspaceId' when calling removeUserFromOrganizationWorkspace");
      }
      // verify the required parameter 'userId' is set
      if (userId === undefined || userId === null) {
        throw new Error("Missing the required parameter 'userId' when calling removeUserFromOrganizationWorkspace");
      }

      let pathParams = {
        'organization_id': organizationId,
        'workspace_id': workspaceId,
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
        '/organizations/{organization_id}/workspaces/{workspace_id}/users/{user_id}', 'DELETE',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null
      );
    }

    /**
     * Remove the specified user from the given Organization Workspace
     * @param {String} organizationId the Organization identifier
     * @param {String} workspaceId the Workspace identifier
     * @param {String} userId the User identifier
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}
     */
    removeUserFromOrganizationWorkspace(organizationId, workspaceId, userId) {
      return this.removeUserFromOrganizationWorkspaceWithHttpInfo(organizationId, workspaceId, userId)
        .then(function(response_and_data) {
          return response_and_data.data;
        });
    }


    /**
     * Update a workspace
     * @param {String} organizationId the Organization identifier
     * @param {String} workspaceId the Workspace identifier
     * @param {module:model/Workspace} workspace the new Workspace details.
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link module:model/Workspace} and HTTP response
     */
    updateWorkspaceWithHttpInfo(organizationId, workspaceId, workspace) {
      let postBody = workspace;
      // verify the required parameter 'organizationId' is set
      if (organizationId === undefined || organizationId === null) {
        throw new Error("Missing the required parameter 'organizationId' when calling updateWorkspace");
      }
      // verify the required parameter 'workspaceId' is set
      if (workspaceId === undefined || workspaceId === null) {
        throw new Error("Missing the required parameter 'workspaceId' when calling updateWorkspace");
      }
      // verify the required parameter 'workspace' is set
      if (workspace === undefined || workspace === null) {
        throw new Error("Missing the required parameter 'workspace' when calling updateWorkspace");
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
      let contentTypes = ['application/json', 'application/yaml'];
      let accepts = ['application/json'];
      let returnType = Workspace;
      return this.apiClient.callApi(
        '/organizations/{organization_id}/workspaces/{workspace_id}', 'PATCH',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null
      );
    }

    /**
     * Update a workspace
     * @param {String} organizationId the Organization identifier
     * @param {String} workspaceId the Workspace identifier
     * @param {module:model/Workspace} workspace the new Workspace details.
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:model/Workspace}
     */
    updateWorkspace(organizationId, workspaceId, workspace) {
      return this.updateWorkspaceWithHttpInfo(organizationId, workspaceId, workspace)
        .then(function(response_and_data) {
          return response_and_data.data;
        });
    }


    /**
     * Upload a file for the Workspace
     * @param {String} organizationId the Organization identifier
     * @param {String} workspaceId the Workspace identifier
     * @param {File} file 
     * @param {Object} opts Optional parameters
     * @param {Boolean} opts.overwrite  (default to false)
     * @param {String} opts.destination Destination path. Must end with a '/' if specifying a folder. Note that paths may or may not start with a '/', but they are always treated as relative to the Workspace root location. 
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link module:model/WorkspaceFile} and HTTP response
     */
    uploadWorkspaceFileWithHttpInfo(organizationId, workspaceId, file, opts) {
      opts = opts || {};
      let postBody = null;
      // verify the required parameter 'organizationId' is set
      if (organizationId === undefined || organizationId === null) {
        throw new Error("Missing the required parameter 'organizationId' when calling uploadWorkspaceFile");
      }
      // verify the required parameter 'workspaceId' is set
      if (workspaceId === undefined || workspaceId === null) {
        throw new Error("Missing the required parameter 'workspaceId' when calling uploadWorkspaceFile");
      }
      // verify the required parameter 'file' is set
      if (file === undefined || file === null) {
        throw new Error("Missing the required parameter 'file' when calling uploadWorkspaceFile");
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
        'overwrite': opts['overwrite'],
        'destination': opts['destination'],
        'file': file
      };

      let authNames = ['oAuth2AuthCode'];
      let contentTypes = ['multipart/form-data'];
      let accepts = ['application/json'];
      let returnType = WorkspaceFile;
      return this.apiClient.callApi(
        '/organizations/{organization_id}/workspaces/{workspace_id}/files', 'POST',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null
      );
    }

    /**
     * Upload a file for the Workspace
     * @param {String} organizationId the Organization identifier
     * @param {String} workspaceId the Workspace identifier
     * @param {File} file 
     * @param {Object} opts Optional parameters
     * @param {Boolean} opts.overwrite  (default to false)
     * @param {String} opts.destination Destination path. Must end with a '/' if specifying a folder. Note that paths may or may not start with a '/', but they are always treated as relative to the Workspace root location. 
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:model/WorkspaceFile}
     */
    uploadWorkspaceFile(organizationId, workspaceId, file, opts) {
      return this.uploadWorkspaceFileWithHttpInfo(organizationId, workspaceId, file, opts)
        .then(function(response_and_data) {
          return response_and_data.data;
        });
    }


}
