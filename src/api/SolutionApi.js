/**
 * Cosmo Tech Plaform API
 * Cosmo Tech Platform API
 *
 * The version of the OpenAPI document: 0.0.8-SNAPSHOT
 * Contact: platform@cosmotech.com
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 *
 */


import ApiClient from "../ApiClient";
import RunTemplate from '../model/RunTemplate';
import RunTemplateHandlerId from '../model/RunTemplateHandlerId';
import RunTemplateParameter from '../model/RunTemplateParameter';
import RunTemplateParameterGroup from '../model/RunTemplateParameterGroup';
import Solution from '../model/Solution';

/**
* Solution service.
* @module api/SolutionApi
* @version 0.0.8-SNAPSHOT
*/
export default class SolutionApi {

    /**
    * Constructs a new SolutionApi. 
    * @alias module:api/SolutionApi
    * @class
    * @param {module:ApiClient} [apiClient] Optional API client implementation to use,
    * default to {@link module:ApiClient#instance} if unspecified.
    */
    constructor(apiClient) {
        this.apiClient = apiClient || ApiClient.instance;
    }


    /**
     * Callback function to receive the result of the addOrReplaceParameterGroups operation.
     * @callback module:api/SolutionApi~addOrReplaceParameterGroupsCallback
     * @param {String} error Error message, if any.
     * @param {Array.<module:model/RunTemplateParameterGroup>} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Add Parameter Groups. Any item with the same ID will be overwritten
     * @param {String} organizationId the Organization identifier
     * @param {String} solutionId the Solution identifier
     * @param {Array.<module:model/RunTemplateParameterGroup>} runTemplateParameterGroup the Parameter Groups
     * @param {module:api/SolutionApi~addOrReplaceParameterGroupsCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link Array.<module:model/RunTemplateParameterGroup>}
     */
    addOrReplaceParameterGroups(organizationId, solutionId, runTemplateParameterGroup, callback) {
      let postBody = runTemplateParameterGroup;
      // verify the required parameter 'organizationId' is set
      if (organizationId === undefined || organizationId === null) {
        throw new Error("Missing the required parameter 'organizationId' when calling addOrReplaceParameterGroups");
      }
      // verify the required parameter 'solutionId' is set
      if (solutionId === undefined || solutionId === null) {
        throw new Error("Missing the required parameter 'solutionId' when calling addOrReplaceParameterGroups");
      }
      // verify the required parameter 'runTemplateParameterGroup' is set
      if (runTemplateParameterGroup === undefined || runTemplateParameterGroup === null) {
        throw new Error("Missing the required parameter 'runTemplateParameterGroup' when calling addOrReplaceParameterGroups");
      }

      let pathParams = {
        'organization_id': organizationId,
        'solution_id': solutionId
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
      let returnType = [RunTemplateParameterGroup];
      return this.apiClient.callApi(
        '/organizations/{organization_id}/solutions/{solution_id}/parameterGroups', 'POST',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null, callback
      );
    }

    /**
     * Callback function to receive the result of the addOrReplaceParameters operation.
     * @callback module:api/SolutionApi~addOrReplaceParametersCallback
     * @param {String} error Error message, if any.
     * @param {Array.<module:model/RunTemplateParameter>} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Add Parameters. Any item with the same ID will be overwritten
     * @param {String} organizationId the Organization identifier
     * @param {String} solutionId the Solution identifier
     * @param {Array.<module:model/RunTemplateParameter>} runTemplateParameter the Parameters
     * @param {module:api/SolutionApi~addOrReplaceParametersCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link Array.<module:model/RunTemplateParameter>}
     */
    addOrReplaceParameters(organizationId, solutionId, runTemplateParameter, callback) {
      let postBody = runTemplateParameter;
      // verify the required parameter 'organizationId' is set
      if (organizationId === undefined || organizationId === null) {
        throw new Error("Missing the required parameter 'organizationId' when calling addOrReplaceParameters");
      }
      // verify the required parameter 'solutionId' is set
      if (solutionId === undefined || solutionId === null) {
        throw new Error("Missing the required parameter 'solutionId' when calling addOrReplaceParameters");
      }
      // verify the required parameter 'runTemplateParameter' is set
      if (runTemplateParameter === undefined || runTemplateParameter === null) {
        throw new Error("Missing the required parameter 'runTemplateParameter' when calling addOrReplaceParameters");
      }

      let pathParams = {
        'organization_id': organizationId,
        'solution_id': solutionId
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
      let returnType = [RunTemplateParameter];
      return this.apiClient.callApi(
        '/organizations/{organization_id}/solutions/{solution_id}/parameters', 'POST',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null, callback
      );
    }

    /**
     * Callback function to receive the result of the addOrReplaceRunTemplates operation.
     * @callback module:api/SolutionApi~addOrReplaceRunTemplatesCallback
     * @param {String} error Error message, if any.
     * @param {Array.<module:model/RunTemplate>} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Add Run Templates. Any item with the same ID will be overwritten
     * @param {String} organizationId the Organization identifier
     * @param {String} solutionId the Solution identifier
     * @param {Array.<module:model/RunTemplate>} runTemplate the Run Templates
     * @param {module:api/SolutionApi~addOrReplaceRunTemplatesCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link Array.<module:model/RunTemplate>}
     */
    addOrReplaceRunTemplates(organizationId, solutionId, runTemplate, callback) {
      let postBody = runTemplate;
      // verify the required parameter 'organizationId' is set
      if (organizationId === undefined || organizationId === null) {
        throw new Error("Missing the required parameter 'organizationId' when calling addOrReplaceRunTemplates");
      }
      // verify the required parameter 'solutionId' is set
      if (solutionId === undefined || solutionId === null) {
        throw new Error("Missing the required parameter 'solutionId' when calling addOrReplaceRunTemplates");
      }
      // verify the required parameter 'runTemplate' is set
      if (runTemplate === undefined || runTemplate === null) {
        throw new Error("Missing the required parameter 'runTemplate' when calling addOrReplaceRunTemplates");
      }

      let pathParams = {
        'organization_id': organizationId,
        'solution_id': solutionId
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
      let returnType = [RunTemplate];
      return this.apiClient.callApi(
        '/organizations/{organization_id}/solutions/{solution_id}/runTemplates', 'POST',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null, callback
      );
    }

    /**
     * Callback function to receive the result of the createSolution operation.
     * @callback module:api/SolutionApi~createSolutionCallback
     * @param {String} error Error message, if any.
     * @param {module:model/Solution} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Register a new solution
     * @param {String} organizationId the Organization identifier
     * @param {module:model/Solution} solution the Solution to create
     * @param {module:api/SolutionApi~createSolutionCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/Solution}
     */
    createSolution(organizationId, solution, callback) {
      let postBody = solution;
      // verify the required parameter 'organizationId' is set
      if (organizationId === undefined || organizationId === null) {
        throw new Error("Missing the required parameter 'organizationId' when calling createSolution");
      }
      // verify the required parameter 'solution' is set
      if (solution === undefined || solution === null) {
        throw new Error("Missing the required parameter 'solution' when calling createSolution");
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
      let returnType = Solution;
      return this.apiClient.callApi(
        '/organizations/{organization_id}/solutions', 'POST',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null, callback
      );
    }

    /**
     * Callback function to receive the result of the deleteSolution operation.
     * @callback module:api/SolutionApi~deleteSolutionCallback
     * @param {String} error Error message, if any.
     * @param data This operation does not return a value.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Delete a solution
     * @param {String} organizationId the Organization identifier
     * @param {String} solutionId the Solution identifier
     * @param {module:api/SolutionApi~deleteSolutionCallback} callback The callback function, accepting three arguments: error, data, response
     */
    deleteSolution(organizationId, solutionId, callback) {
      let postBody = null;
      // verify the required parameter 'organizationId' is set
      if (organizationId === undefined || organizationId === null) {
        throw new Error("Missing the required parameter 'organizationId' when calling deleteSolution");
      }
      // verify the required parameter 'solutionId' is set
      if (solutionId === undefined || solutionId === null) {
        throw new Error("Missing the required parameter 'solutionId' when calling deleteSolution");
      }

      let pathParams = {
        'organization_id': organizationId,
        'solution_id': solutionId
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
        '/organizations/{organization_id}/solutions/{solution_id}', 'DELETE',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null, callback
      );
    }

    /**
     * Callback function to receive the result of the deleteSolutionRunTemplate operation.
     * @callback module:api/SolutionApi~deleteSolutionRunTemplateCallback
     * @param {String} error Error message, if any.
     * @param data This operation does not return a value.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Remove the specified Solution Run Template
     * @param {String} organizationId the Organization identifier
     * @param {String} solutionId the Solution identifier
     * @param {String} runTemplateId the Run Template identifier
     * @param {module:api/SolutionApi~deleteSolutionRunTemplateCallback} callback The callback function, accepting three arguments: error, data, response
     */
    deleteSolutionRunTemplate(organizationId, solutionId, runTemplateId, callback) {
      let postBody = null;
      // verify the required parameter 'organizationId' is set
      if (organizationId === undefined || organizationId === null) {
        throw new Error("Missing the required parameter 'organizationId' when calling deleteSolutionRunTemplate");
      }
      // verify the required parameter 'solutionId' is set
      if (solutionId === undefined || solutionId === null) {
        throw new Error("Missing the required parameter 'solutionId' when calling deleteSolutionRunTemplate");
      }
      // verify the required parameter 'runTemplateId' is set
      if (runTemplateId === undefined || runTemplateId === null) {
        throw new Error("Missing the required parameter 'runTemplateId' when calling deleteSolutionRunTemplate");
      }

      let pathParams = {
        'organization_id': organizationId,
        'solution_id': solutionId,
        'run_template_id': runTemplateId
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
        '/organizations/{organization_id}/solutions/{solution_id}/runTemplates/{run_template_id}', 'DELETE',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null, callback
      );
    }

    /**
     * Callback function to receive the result of the findAllSolutions operation.
     * @callback module:api/SolutionApi~findAllSolutionsCallback
     * @param {String} error Error message, if any.
     * @param {Array.<module:model/Solution>} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * List all Solutions
     * @param {String} organizationId the Organization identifier
     * @param {module:api/SolutionApi~findAllSolutionsCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link Array.<module:model/Solution>}
     */
    findAllSolutions(organizationId, callback) {
      let postBody = null;
      // verify the required parameter 'organizationId' is set
      if (organizationId === undefined || organizationId === null) {
        throw new Error("Missing the required parameter 'organizationId' when calling findAllSolutions");
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
      let returnType = [Solution];
      return this.apiClient.callApi(
        '/organizations/{organization_id}/solutions', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null, callback
      );
    }

    /**
     * Callback function to receive the result of the findSolutionById operation.
     * @callback module:api/SolutionApi~findSolutionByIdCallback
     * @param {String} error Error message, if any.
     * @param {module:model/Solution} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Get the details of a solution
     * @param {String} organizationId the Organization identifier
     * @param {String} solutionId the Solution identifier
     * @param {module:api/SolutionApi~findSolutionByIdCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/Solution}
     */
    findSolutionById(organizationId, solutionId, callback) {
      let postBody = null;
      // verify the required parameter 'organizationId' is set
      if (organizationId === undefined || organizationId === null) {
        throw new Error("Missing the required parameter 'organizationId' when calling findSolutionById");
      }
      // verify the required parameter 'solutionId' is set
      if (solutionId === undefined || solutionId === null) {
        throw new Error("Missing the required parameter 'solutionId' when calling findSolutionById");
      }

      let pathParams = {
        'organization_id': organizationId,
        'solution_id': solutionId
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
      let returnType = Solution;
      return this.apiClient.callApi(
        '/organizations/{organization_id}/solutions/{solution_id}', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null, callback
      );
    }

    /**
     * Callback function to receive the result of the removeAllRunTemplates operation.
     * @callback module:api/SolutionApi~removeAllRunTemplatesCallback
     * @param {String} error Error message, if any.
     * @param data This operation does not return a value.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Remove all Run Templates from the Solution specified
     * @param {String} organizationId the Organization identifier
     * @param {String} solutionId the Solution identifier
     * @param {module:api/SolutionApi~removeAllRunTemplatesCallback} callback The callback function, accepting three arguments: error, data, response
     */
    removeAllRunTemplates(organizationId, solutionId, callback) {
      let postBody = null;
      // verify the required parameter 'organizationId' is set
      if (organizationId === undefined || organizationId === null) {
        throw new Error("Missing the required parameter 'organizationId' when calling removeAllRunTemplates");
      }
      // verify the required parameter 'solutionId' is set
      if (solutionId === undefined || solutionId === null) {
        throw new Error("Missing the required parameter 'solutionId' when calling removeAllRunTemplates");
      }

      let pathParams = {
        'organization_id': organizationId,
        'solution_id': solutionId
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
        '/organizations/{organization_id}/solutions/{solution_id}/runTemplates', 'DELETE',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null, callback
      );
    }

    /**
     * Callback function to receive the result of the removeAllSolutionParameterGroups operation.
     * @callback module:api/SolutionApi~removeAllSolutionParameterGroupsCallback
     * @param {String} error Error message, if any.
     * @param data This operation does not return a value.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Remove all Parameter Groups from the Solution specified
     * @param {String} organizationId the Organization identifier
     * @param {String} solutionId the Solution identifier
     * @param {module:api/SolutionApi~removeAllSolutionParameterGroupsCallback} callback The callback function, accepting three arguments: error, data, response
     */
    removeAllSolutionParameterGroups(organizationId, solutionId, callback) {
      let postBody = null;
      // verify the required parameter 'organizationId' is set
      if (organizationId === undefined || organizationId === null) {
        throw new Error("Missing the required parameter 'organizationId' when calling removeAllSolutionParameterGroups");
      }
      // verify the required parameter 'solutionId' is set
      if (solutionId === undefined || solutionId === null) {
        throw new Error("Missing the required parameter 'solutionId' when calling removeAllSolutionParameterGroups");
      }

      let pathParams = {
        'organization_id': organizationId,
        'solution_id': solutionId
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
        '/organizations/{organization_id}/solutions/{solution_id}/parameterGroups', 'DELETE',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null, callback
      );
    }

    /**
     * Callback function to receive the result of the removeAllSolutionParameters operation.
     * @callback module:api/SolutionApi~removeAllSolutionParametersCallback
     * @param {String} error Error message, if any.
     * @param data This operation does not return a value.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Remove all Parameters from the Solution specified
     * @param {String} organizationId the Organization identifier
     * @param {String} solutionId the Solution identifier
     * @param {module:api/SolutionApi~removeAllSolutionParametersCallback} callback The callback function, accepting three arguments: error, data, response
     */
    removeAllSolutionParameters(organizationId, solutionId, callback) {
      let postBody = null;
      // verify the required parameter 'organizationId' is set
      if (organizationId === undefined || organizationId === null) {
        throw new Error("Missing the required parameter 'organizationId' when calling removeAllSolutionParameters");
      }
      // verify the required parameter 'solutionId' is set
      if (solutionId === undefined || solutionId === null) {
        throw new Error("Missing the required parameter 'solutionId' when calling removeAllSolutionParameters");
      }

      let pathParams = {
        'organization_id': organizationId,
        'solution_id': solutionId
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
        '/organizations/{organization_id}/solutions/{solution_id}/parameters', 'DELETE',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null, callback
      );
    }

    /**
     * Callback function to receive the result of the updateSolution operation.
     * @callback module:api/SolutionApi~updateSolutionCallback
     * @param {String} error Error message, if any.
     * @param {module:model/Solution} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Update a solution
     * @param {String} organizationId the Organization identifier
     * @param {String} solutionId the Solution identifier
     * @param {module:model/Solution} solution the new Solution details.
     * @param {module:api/SolutionApi~updateSolutionCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/Solution}
     */
    updateSolution(organizationId, solutionId, solution, callback) {
      let postBody = solution;
      // verify the required parameter 'organizationId' is set
      if (organizationId === undefined || organizationId === null) {
        throw new Error("Missing the required parameter 'organizationId' when calling updateSolution");
      }
      // verify the required parameter 'solutionId' is set
      if (solutionId === undefined || solutionId === null) {
        throw new Error("Missing the required parameter 'solutionId' when calling updateSolution");
      }
      // verify the required parameter 'solution' is set
      if (solution === undefined || solution === null) {
        throw new Error("Missing the required parameter 'solution' when calling updateSolution");
      }

      let pathParams = {
        'organization_id': organizationId,
        'solution_id': solutionId
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
      let returnType = Solution;
      return this.apiClient.callApi(
        '/organizations/{organization_id}/solutions/{solution_id}', 'PATCH',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null, callback
      );
    }

    /**
     * Callback function to receive the result of the updateSolutionRunTemplate operation.
     * @callback module:api/SolutionApi~updateSolutionRunTemplateCallback
     * @param {String} error Error message, if any.
     * @param {Array.<module:model/RunTemplate>} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Update the specified Solution Run Template
     * @param {String} organizationId the Organization identifier
     * @param {String} solutionId the Solution identifier
     * @param {String} runTemplateId the Run Template identifier
     * @param {module:model/RunTemplate} runTemplate the Run Templates
     * @param {module:api/SolutionApi~updateSolutionRunTemplateCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link Array.<module:model/RunTemplate>}
     */
    updateSolutionRunTemplate(organizationId, solutionId, runTemplateId, runTemplate, callback) {
      let postBody = runTemplate;
      // verify the required parameter 'organizationId' is set
      if (organizationId === undefined || organizationId === null) {
        throw new Error("Missing the required parameter 'organizationId' when calling updateSolutionRunTemplate");
      }
      // verify the required parameter 'solutionId' is set
      if (solutionId === undefined || solutionId === null) {
        throw new Error("Missing the required parameter 'solutionId' when calling updateSolutionRunTemplate");
      }
      // verify the required parameter 'runTemplateId' is set
      if (runTemplateId === undefined || runTemplateId === null) {
        throw new Error("Missing the required parameter 'runTemplateId' when calling updateSolutionRunTemplate");
      }
      // verify the required parameter 'runTemplate' is set
      if (runTemplate === undefined || runTemplate === null) {
        throw new Error("Missing the required parameter 'runTemplate' when calling updateSolutionRunTemplate");
      }

      let pathParams = {
        'organization_id': organizationId,
        'solution_id': solutionId,
        'run_template_id': runTemplateId
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
      let returnType = [RunTemplate];
      return this.apiClient.callApi(
        '/organizations/{organization_id}/solutions/{solution_id}/runTemplates/{run_template_id}', 'PATCH',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null, callback
      );
    }

    /**
     * Callback function to receive the result of the uploadRunTemplateHandler operation.
     * @callback module:api/SolutionApi~uploadRunTemplateHandlerCallback
     * @param {String} error Error message, if any.
     * @param data This operation does not return a value.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Upload a Run Template step handler zip file
     * @param {String} organizationId the Organization identifier
     * @param {String} solutionId the Solution identifier
     * @param {String} runTemplateId the Run Template identifier
     * @param {module:model/RunTemplateHandlerId} handlerId the Handler identifier
     * @param {File} body 
     * @param {Object} opts Optional parameters
     * @param {Boolean} opts.overwrite whether to overwrite any existing handler resource (default to false)
     * @param {module:api/SolutionApi~uploadRunTemplateHandlerCallback} callback The callback function, accepting three arguments: error, data, response
     */
    uploadRunTemplateHandler(organizationId, solutionId, runTemplateId, handlerId, body, opts, callback) {
      opts = opts || {};
      let postBody = body;
      // verify the required parameter 'organizationId' is set
      if (organizationId === undefined || organizationId === null) {
        throw new Error("Missing the required parameter 'organizationId' when calling uploadRunTemplateHandler");
      }
      // verify the required parameter 'solutionId' is set
      if (solutionId === undefined || solutionId === null) {
        throw new Error("Missing the required parameter 'solutionId' when calling uploadRunTemplateHandler");
      }
      // verify the required parameter 'runTemplateId' is set
      if (runTemplateId === undefined || runTemplateId === null) {
        throw new Error("Missing the required parameter 'runTemplateId' when calling uploadRunTemplateHandler");
      }
      // verify the required parameter 'handlerId' is set
      if (handlerId === undefined || handlerId === null) {
        throw new Error("Missing the required parameter 'handlerId' when calling uploadRunTemplateHandler");
      }
      // verify the required parameter 'body' is set
      if (body === undefined || body === null) {
        throw new Error("Missing the required parameter 'body' when calling uploadRunTemplateHandler");
      }

      let pathParams = {
        'organization_id': organizationId,
        'solution_id': solutionId,
        'run_template_id': runTemplateId,
        'handler_id': handlerId
      };
      let queryParams = {
        'overwrite': opts['overwrite']
      };
      let headerParams = {
      };
      let formParams = {
      };

      let authNames = ['oAuth2AuthCode'];
      let contentTypes = ['application/octet-stream'];
      let accepts = [];
      let returnType = null;
      return this.apiClient.callApi(
        '/organizations/{organization_id}/solutions/{solution_id}/runtemplates/{run_template_id}/handlers/{handler_id}/upload', 'POST',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null, callback
      );
    }


}
