/**
 * Cosmo Tech Plaform API
 * Cosmo Tech Platform API
 *
 * The version of the OpenAPI document: 2.1.1-dev
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
* @version 2.1.1-dev
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
     * Add Parameter Groups. Any item with the same ID will be overwritten
     * @param {String} organizationId the Organization identifier
     * @param {String} solutionId the Solution identifier
     * @param {Array.<module:model/RunTemplateParameterGroup>} runTemplateParameterGroup the Parameter Groups
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link Array.<module:model/RunTemplateParameterGroup>} and HTTP response
     */
    addOrReplaceParameterGroupsWithHttpInfo(organizationId, solutionId, runTemplateParameterGroup) {
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
        authNames, contentTypes, accepts, returnType, null
      );
    }

    /**
     * Add Parameter Groups. Any item with the same ID will be overwritten
     * @param {String} organizationId the Organization identifier
     * @param {String} solutionId the Solution identifier
     * @param {Array.<module:model/RunTemplateParameterGroup>} runTemplateParameterGroup the Parameter Groups
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link Array.<module:model/RunTemplateParameterGroup>}
     */
    addOrReplaceParameterGroups(organizationId, solutionId, runTemplateParameterGroup) {
      return this.addOrReplaceParameterGroupsWithHttpInfo(organizationId, solutionId, runTemplateParameterGroup)
        .then(function(response_and_data) {
          return response_and_data.data;
        });
    }


    /**
     * Add Parameters. Any item with the same ID will be overwritten
     * @param {String} organizationId the Organization identifier
     * @param {String} solutionId the Solution identifier
     * @param {Array.<module:model/RunTemplateParameter>} runTemplateParameter the Parameters
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link Array.<module:model/RunTemplateParameter>} and HTTP response
     */
    addOrReplaceParametersWithHttpInfo(organizationId, solutionId, runTemplateParameter) {
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
        authNames, contentTypes, accepts, returnType, null
      );
    }

    /**
     * Add Parameters. Any item with the same ID will be overwritten
     * @param {String} organizationId the Organization identifier
     * @param {String} solutionId the Solution identifier
     * @param {Array.<module:model/RunTemplateParameter>} runTemplateParameter the Parameters
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link Array.<module:model/RunTemplateParameter>}
     */
    addOrReplaceParameters(organizationId, solutionId, runTemplateParameter) {
      return this.addOrReplaceParametersWithHttpInfo(organizationId, solutionId, runTemplateParameter)
        .then(function(response_and_data) {
          return response_and_data.data;
        });
    }


    /**
     * Add Run Templates. Any item with the same ID will be overwritten
     * @param {String} organizationId the Organization identifier
     * @param {String} solutionId the Solution identifier
     * @param {Array.<module:model/RunTemplate>} runTemplate the Run Templates
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link Array.<module:model/RunTemplate>} and HTTP response
     */
    addOrReplaceRunTemplatesWithHttpInfo(organizationId, solutionId, runTemplate) {
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
        authNames, contentTypes, accepts, returnType, null
      );
    }

    /**
     * Add Run Templates. Any item with the same ID will be overwritten
     * @param {String} organizationId the Organization identifier
     * @param {String} solutionId the Solution identifier
     * @param {Array.<module:model/RunTemplate>} runTemplate the Run Templates
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link Array.<module:model/RunTemplate>}
     */
    addOrReplaceRunTemplates(organizationId, solutionId, runTemplate) {
      return this.addOrReplaceRunTemplatesWithHttpInfo(organizationId, solutionId, runTemplate)
        .then(function(response_and_data) {
          return response_and_data.data;
        });
    }


    /**
     * Register a new solution
     * @param {String} organizationId the Organization identifier
     * @param {module:model/Solution} solution the Solution to create
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link module:model/Solution} and HTTP response
     */
    createSolutionWithHttpInfo(organizationId, solution) {
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
        authNames, contentTypes, accepts, returnType, null
      );
    }

    /**
     * Register a new solution
     * @param {String} organizationId the Organization identifier
     * @param {module:model/Solution} solution the Solution to create
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:model/Solution}
     */
    createSolution(organizationId, solution) {
      return this.createSolutionWithHttpInfo(organizationId, solution)
        .then(function(response_and_data) {
          return response_and_data.data;
        });
    }


    /**
     * Delete a solution
     * @param {String} organizationId the Organization identifier
     * @param {String} solutionId the Solution identifier
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing HTTP response
     */
    deleteSolutionWithHttpInfo(organizationId, solutionId) {
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
        authNames, contentTypes, accepts, returnType, null
      );
    }

    /**
     * Delete a solution
     * @param {String} organizationId the Organization identifier
     * @param {String} solutionId the Solution identifier
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}
     */
    deleteSolution(organizationId, solutionId) {
      return this.deleteSolutionWithHttpInfo(organizationId, solutionId)
        .then(function(response_and_data) {
          return response_and_data.data;
        });
    }


    /**
     * Remove the specified Solution Run Template
     * @param {String} organizationId the Organization identifier
     * @param {String} solutionId the Solution identifier
     * @param {String} runTemplateId the Run Template identifier
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing HTTP response
     */
    deleteSolutionRunTemplateWithHttpInfo(organizationId, solutionId, runTemplateId) {
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
        authNames, contentTypes, accepts, returnType, null
      );
    }

    /**
     * Remove the specified Solution Run Template
     * @param {String} organizationId the Organization identifier
     * @param {String} solutionId the Solution identifier
     * @param {String} runTemplateId the Run Template identifier
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}
     */
    deleteSolutionRunTemplate(organizationId, solutionId, runTemplateId) {
      return this.deleteSolutionRunTemplateWithHttpInfo(organizationId, solutionId, runTemplateId)
        .then(function(response_and_data) {
          return response_and_data.data;
        });
    }


    /**
     * Download a Run Template step handler zip file
     * @param {String} organizationId the Organization identifier
     * @param {String} solutionId the Solution identifier
     * @param {String} runTemplateId the Run Template identifier
     * @param {module:model/RunTemplateHandlerId} handlerId the Handler identifier
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link File} and HTTP response
     */
    downloadRunTemplateHandlerWithHttpInfo(organizationId, solutionId, runTemplateId, handlerId) {
      let postBody = null;
      // verify the required parameter 'organizationId' is set
      if (organizationId === undefined || organizationId === null) {
        throw new Error("Missing the required parameter 'organizationId' when calling downloadRunTemplateHandler");
      }
      // verify the required parameter 'solutionId' is set
      if (solutionId === undefined || solutionId === null) {
        throw new Error("Missing the required parameter 'solutionId' when calling downloadRunTemplateHandler");
      }
      // verify the required parameter 'runTemplateId' is set
      if (runTemplateId === undefined || runTemplateId === null) {
        throw new Error("Missing the required parameter 'runTemplateId' when calling downloadRunTemplateHandler");
      }
      // verify the required parameter 'handlerId' is set
      if (handlerId === undefined || handlerId === null) {
        throw new Error("Missing the required parameter 'handlerId' when calling downloadRunTemplateHandler");
      }

      let pathParams = {
        'organization_id': organizationId,
        'solution_id': solutionId,
        'run_template_id': runTemplateId,
        'handler_id': handlerId
      };
      let queryParams = {
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
        '/organizations/{organization_id}/solutions/{solution_id}/runtemplates/{run_template_id}/handlers/{handler_id}/download', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null
      );
    }

    /**
     * Download a Run Template step handler zip file
     * @param {String} organizationId the Organization identifier
     * @param {String} solutionId the Solution identifier
     * @param {String} runTemplateId the Run Template identifier
     * @param {module:model/RunTemplateHandlerId} handlerId the Handler identifier
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link File}
     */
    downloadRunTemplateHandler(organizationId, solutionId, runTemplateId, handlerId) {
      return this.downloadRunTemplateHandlerWithHttpInfo(organizationId, solutionId, runTemplateId, handlerId)
        .then(function(response_and_data) {
          return response_and_data.data;
        });
    }


    /**
     * List all Solutions
     * @param {String} organizationId the Organization identifier
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link Array.<module:model/Solution>} and HTTP response
     */
    findAllSolutionsWithHttpInfo(organizationId) {
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
        authNames, contentTypes, accepts, returnType, null
      );
    }

    /**
     * List all Solutions
     * @param {String} organizationId the Organization identifier
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link Array.<module:model/Solution>}
     */
    findAllSolutions(organizationId) {
      return this.findAllSolutionsWithHttpInfo(organizationId)
        .then(function(response_and_data) {
          return response_and_data.data;
        });
    }


    /**
     * Get the details of a solution
     * @param {String} organizationId the Organization identifier
     * @param {String} solutionId the Solution identifier
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link module:model/Solution} and HTTP response
     */
    findSolutionByIdWithHttpInfo(organizationId, solutionId) {
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
        authNames, contentTypes, accepts, returnType, null
      );
    }

    /**
     * Get the details of a solution
     * @param {String} organizationId the Organization identifier
     * @param {String} solutionId the Solution identifier
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:model/Solution}
     */
    findSolutionById(organizationId, solutionId) {
      return this.findSolutionByIdWithHttpInfo(organizationId, solutionId)
        .then(function(response_and_data) {
          return response_and_data.data;
        });
    }


    /**
     * Remove all Run Templates from the Solution specified
     * @param {String} organizationId the Organization identifier
     * @param {String} solutionId the Solution identifier
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing HTTP response
     */
    removeAllRunTemplatesWithHttpInfo(organizationId, solutionId) {
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
        authNames, contentTypes, accepts, returnType, null
      );
    }

    /**
     * Remove all Run Templates from the Solution specified
     * @param {String} organizationId the Organization identifier
     * @param {String} solutionId the Solution identifier
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}
     */
    removeAllRunTemplates(organizationId, solutionId) {
      return this.removeAllRunTemplatesWithHttpInfo(organizationId, solutionId)
        .then(function(response_and_data) {
          return response_and_data.data;
        });
    }


    /**
     * Remove all Parameter Groups from the Solution specified
     * @param {String} organizationId the Organization identifier
     * @param {String} solutionId the Solution identifier
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing HTTP response
     */
    removeAllSolutionParameterGroupsWithHttpInfo(organizationId, solutionId) {
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
        authNames, contentTypes, accepts, returnType, null
      );
    }

    /**
     * Remove all Parameter Groups from the Solution specified
     * @param {String} organizationId the Organization identifier
     * @param {String} solutionId the Solution identifier
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}
     */
    removeAllSolutionParameterGroups(organizationId, solutionId) {
      return this.removeAllSolutionParameterGroupsWithHttpInfo(organizationId, solutionId)
        .then(function(response_and_data) {
          return response_and_data.data;
        });
    }


    /**
     * Remove all Parameters from the Solution specified
     * @param {String} organizationId the Organization identifier
     * @param {String} solutionId the Solution identifier
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing HTTP response
     */
    removeAllSolutionParametersWithHttpInfo(organizationId, solutionId) {
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
        authNames, contentTypes, accepts, returnType, null
      );
    }

    /**
     * Remove all Parameters from the Solution specified
     * @param {String} organizationId the Organization identifier
     * @param {String} solutionId the Solution identifier
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}
     */
    removeAllSolutionParameters(organizationId, solutionId) {
      return this.removeAllSolutionParametersWithHttpInfo(organizationId, solutionId)
        .then(function(response_and_data) {
          return response_and_data.data;
        });
    }


    /**
     * Update a solution
     * @param {String} organizationId the Organization identifier
     * @param {String} solutionId the Solution identifier
     * @param {module:model/Solution} solution the new Solution details.
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link module:model/Solution} and HTTP response
     */
    updateSolutionWithHttpInfo(organizationId, solutionId, solution) {
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
        authNames, contentTypes, accepts, returnType, null
      );
    }

    /**
     * Update a solution
     * @param {String} organizationId the Organization identifier
     * @param {String} solutionId the Solution identifier
     * @param {module:model/Solution} solution the new Solution details.
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:model/Solution}
     */
    updateSolution(organizationId, solutionId, solution) {
      return this.updateSolutionWithHttpInfo(organizationId, solutionId, solution)
        .then(function(response_and_data) {
          return response_and_data.data;
        });
    }


    /**
     * Update the specified Solution Run Template
     * @param {String} organizationId the Organization identifier
     * @param {String} solutionId the Solution identifier
     * @param {String} runTemplateId the Run Template identifier
     * @param {module:model/RunTemplate} runTemplate the Run Templates
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link Array.<module:model/RunTemplate>} and HTTP response
     */
    updateSolutionRunTemplateWithHttpInfo(organizationId, solutionId, runTemplateId, runTemplate) {
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
        authNames, contentTypes, accepts, returnType, null
      );
    }

    /**
     * Update the specified Solution Run Template
     * @param {String} organizationId the Organization identifier
     * @param {String} solutionId the Solution identifier
     * @param {String} runTemplateId the Run Template identifier
     * @param {module:model/RunTemplate} runTemplate the Run Templates
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link Array.<module:model/RunTemplate>}
     */
    updateSolutionRunTemplate(organizationId, solutionId, runTemplateId, runTemplate) {
      return this.updateSolutionRunTemplateWithHttpInfo(organizationId, solutionId, runTemplateId, runTemplate)
        .then(function(response_and_data) {
          return response_and_data.data;
        });
    }


    /**
     * Upload a Run Template step handler zip file
     * @param {String} organizationId the Organization identifier
     * @param {String} solutionId the Solution identifier
     * @param {String} runTemplateId the Run Template identifier
     * @param {module:model/RunTemplateHandlerId} handlerId the Handler identifier
     * @param {File} body 
     * @param {Object} opts Optional parameters
     * @param {Boolean} opts.overwrite whether to overwrite any existing handler resource (default to false)
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing HTTP response
     */
    uploadRunTemplateHandlerWithHttpInfo(organizationId, solutionId, runTemplateId, handlerId, body, opts) {
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
        authNames, contentTypes, accepts, returnType, null
      );
    }

    /**
     * Upload a Run Template step handler zip file
     * @param {String} organizationId the Organization identifier
     * @param {String} solutionId the Solution identifier
     * @param {String} runTemplateId the Run Template identifier
     * @param {module:model/RunTemplateHandlerId} handlerId the Handler identifier
     * @param {File} body 
     * @param {Object} opts Optional parameters
     * @param {Boolean} opts.overwrite whether to overwrite any existing handler resource (default to false)
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}
     */
    uploadRunTemplateHandler(organizationId, solutionId, runTemplateId, handlerId, body, opts) {
      return this.uploadRunTemplateHandlerWithHttpInfo(organizationId, solutionId, runTemplateId, handlerId, body, opts)
        .then(function(response_and_data) {
          return response_and_data.data;
        });
    }


}
