/**
 * Cosmo Tech Plaform API
 * Cosmo Tech Platform API
 *
 * The version of the OpenAPI document: 1.1.3-SNAPSHOT
 * Contact: platform@cosmotech.com
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 *
 */


import ApiClient from "../ApiClient";
import Validator from '../model/Validator';
import ValidatorRun from '../model/ValidatorRun';

/**
* Validator service.
* @module api/ValidatorApi
* @version 1.1.3-SNAPSHOT
*/
export default class ValidatorApi {

    /**
    * Constructs a new ValidatorApi. 
    * @alias module:api/ValidatorApi
    * @class
    * @param {module:ApiClient} [apiClient] Optional API client implementation to use,
    * default to {@link module:ApiClient#instance} if unspecified.
    */
    constructor(apiClient) {
        this.apiClient = apiClient || ApiClient.instance;
    }



    /**
     * Register a new validator
     * @param {String} organizationId the Organization identifier
     * @param {module:model/Validator} validator the Validator to create
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link module:model/Validator} and HTTP response
     */
    createValidatorWithHttpInfo(organizationId, validator) {
      let postBody = validator;
      // verify the required parameter 'organizationId' is set
      if (organizationId === undefined || organizationId === null) {
        throw new Error("Missing the required parameter 'organizationId' when calling createValidator");
      }
      // verify the required parameter 'validator' is set
      if (validator === undefined || validator === null) {
        throw new Error("Missing the required parameter 'validator' when calling createValidator");
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
      let returnType = Validator;
      return this.apiClient.callApi(
        '/organizations/{organization_id}/datasets/validators', 'POST',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null
      );
    }

    /**
     * Register a new validator
     * @param {String} organizationId the Organization identifier
     * @param {module:model/Validator} validator the Validator to create
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:model/Validator}
     */
    createValidator(organizationId, validator) {
      return this.createValidatorWithHttpInfo(organizationId, validator)
        .then(function(response_and_data) {
          return response_and_data.data;
        });
    }


    /**
     * Register a new validator run
     * @param {String} organizationId the Organization identifier
     * @param {String} validatorId the ValidatorRun identifier
     * @param {module:model/ValidatorRun} validatorRun the Validator Run to create
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link module:model/ValidatorRun} and HTTP response
     */
    createValidatorRunWithHttpInfo(organizationId, validatorId, validatorRun) {
      let postBody = validatorRun;
      // verify the required parameter 'organizationId' is set
      if (organizationId === undefined || organizationId === null) {
        throw new Error("Missing the required parameter 'organizationId' when calling createValidatorRun");
      }
      // verify the required parameter 'validatorId' is set
      if (validatorId === undefined || validatorId === null) {
        throw new Error("Missing the required parameter 'validatorId' when calling createValidatorRun");
      }
      // verify the required parameter 'validatorRun' is set
      if (validatorRun === undefined || validatorRun === null) {
        throw new Error("Missing the required parameter 'validatorRun' when calling createValidatorRun");
      }

      let pathParams = {
        'organization_id': organizationId,
        'validator_id': validatorId
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
      let returnType = ValidatorRun;
      return this.apiClient.callApi(
        '/organizations/{organization_id}/datasets/validators/{validator_id}/history', 'POST',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null
      );
    }

    /**
     * Register a new validator run
     * @param {String} organizationId the Organization identifier
     * @param {String} validatorId the ValidatorRun identifier
     * @param {module:model/ValidatorRun} validatorRun the Validator Run to create
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:model/ValidatorRun}
     */
    createValidatorRun(organizationId, validatorId, validatorRun) {
      return this.createValidatorRunWithHttpInfo(organizationId, validatorId, validatorRun)
        .then(function(response_and_data) {
          return response_and_data.data;
        });
    }


    /**
     * Delete a validator
     * @param {String} organizationId the Organization identifier
     * @param {String} validatorId the Validator identifier
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing HTTP response
     */
    deleteValidatorWithHttpInfo(organizationId, validatorId) {
      let postBody = null;
      // verify the required parameter 'organizationId' is set
      if (organizationId === undefined || organizationId === null) {
        throw new Error("Missing the required parameter 'organizationId' when calling deleteValidator");
      }
      // verify the required parameter 'validatorId' is set
      if (validatorId === undefined || validatorId === null) {
        throw new Error("Missing the required parameter 'validatorId' when calling deleteValidator");
      }

      let pathParams = {
        'organization_id': organizationId,
        'validator_id': validatorId
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
        '/organizations/{organization_id}/datasets/validators/{validator_id}', 'DELETE',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null
      );
    }

    /**
     * Delete a validator
     * @param {String} organizationId the Organization identifier
     * @param {String} validatorId the Validator identifier
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}
     */
    deleteValidator(organizationId, validatorId) {
      return this.deleteValidatorWithHttpInfo(organizationId, validatorId)
        .then(function(response_and_data) {
          return response_and_data.data;
        });
    }


    /**
     * Delete a validator run
     * @param {String} organizationId the Organization identifier
     * @param {String} validatorId the Validator identifier
     * @param {String} validatorrunId the Validator Run identifier
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing HTTP response
     */
    deleteValidatorRunWithHttpInfo(organizationId, validatorId, validatorrunId) {
      let postBody = null;
      // verify the required parameter 'organizationId' is set
      if (organizationId === undefined || organizationId === null) {
        throw new Error("Missing the required parameter 'organizationId' when calling deleteValidatorRun");
      }
      // verify the required parameter 'validatorId' is set
      if (validatorId === undefined || validatorId === null) {
        throw new Error("Missing the required parameter 'validatorId' when calling deleteValidatorRun");
      }
      // verify the required parameter 'validatorrunId' is set
      if (validatorrunId === undefined || validatorrunId === null) {
        throw new Error("Missing the required parameter 'validatorrunId' when calling deleteValidatorRun");
      }

      let pathParams = {
        'organization_id': organizationId,
        'validator_id': validatorId,
        'validatorrun_id': validatorrunId
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
        '/organizations/{organization_id}/datasets/validators/{validator_id}/history/{validatorrun_id}', 'DELETE',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null
      );
    }

    /**
     * Delete a validator run
     * @param {String} organizationId the Organization identifier
     * @param {String} validatorId the Validator identifier
     * @param {String} validatorrunId the Validator Run identifier
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}
     */
    deleteValidatorRun(organizationId, validatorId, validatorrunId) {
      return this.deleteValidatorRunWithHttpInfo(organizationId, validatorId, validatorrunId)
        .then(function(response_and_data) {
          return response_and_data.data;
        });
    }


    /**
     * List all Validator Runs
     * @param {String} organizationId the Organization identifier
     * @param {String} validatorId the ValidatorRun identifier
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link Array.<module:model/ValidatorRun>} and HTTP response
     */
    findAllValidatorRunsWithHttpInfo(organizationId, validatorId) {
      let postBody = null;
      // verify the required parameter 'organizationId' is set
      if (organizationId === undefined || organizationId === null) {
        throw new Error("Missing the required parameter 'organizationId' when calling findAllValidatorRuns");
      }
      // verify the required parameter 'validatorId' is set
      if (validatorId === undefined || validatorId === null) {
        throw new Error("Missing the required parameter 'validatorId' when calling findAllValidatorRuns");
      }

      let pathParams = {
        'organization_id': organizationId,
        'validator_id': validatorId
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
      let returnType = [ValidatorRun];
      return this.apiClient.callApi(
        '/organizations/{organization_id}/datasets/validators/{validator_id}/history', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null
      );
    }

    /**
     * List all Validator Runs
     * @param {String} organizationId the Organization identifier
     * @param {String} validatorId the ValidatorRun identifier
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link Array.<module:model/ValidatorRun>}
     */
    findAllValidatorRuns(organizationId, validatorId) {
      return this.findAllValidatorRunsWithHttpInfo(organizationId, validatorId)
        .then(function(response_and_data) {
          return response_and_data.data;
        });
    }


    /**
     * List all Validators
     * @param {String} organizationId the Organization identifier
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link Array.<module:model/Validator>} and HTTP response
     */
    findAllValidatorsWithHttpInfo(organizationId) {
      let postBody = null;
      // verify the required parameter 'organizationId' is set
      if (organizationId === undefined || organizationId === null) {
        throw new Error("Missing the required parameter 'organizationId' when calling findAllValidators");
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
      let returnType = [Validator];
      return this.apiClient.callApi(
        '/organizations/{organization_id}/datasets/validators', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null
      );
    }

    /**
     * List all Validators
     * @param {String} organizationId the Organization identifier
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link Array.<module:model/Validator>}
     */
    findAllValidators(organizationId) {
      return this.findAllValidatorsWithHttpInfo(organizationId)
        .then(function(response_and_data) {
          return response_and_data.data;
        });
    }


    /**
     * Get the details of a validator
     * @param {String} organizationId the Organization identifier
     * @param {String} validatorId the Validator identifier
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link module:model/Validator} and HTTP response
     */
    findValidatorByIdWithHttpInfo(organizationId, validatorId) {
      let postBody = null;
      // verify the required parameter 'organizationId' is set
      if (organizationId === undefined || organizationId === null) {
        throw new Error("Missing the required parameter 'organizationId' when calling findValidatorById");
      }
      // verify the required parameter 'validatorId' is set
      if (validatorId === undefined || validatorId === null) {
        throw new Error("Missing the required parameter 'validatorId' when calling findValidatorById");
      }

      let pathParams = {
        'organization_id': organizationId,
        'validator_id': validatorId
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
      let returnType = Validator;
      return this.apiClient.callApi(
        '/organizations/{organization_id}/datasets/validators/{validator_id}', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null
      );
    }

    /**
     * Get the details of a validator
     * @param {String} organizationId the Organization identifier
     * @param {String} validatorId the Validator identifier
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:model/Validator}
     */
    findValidatorById(organizationId, validatorId) {
      return this.findValidatorByIdWithHttpInfo(organizationId, validatorId)
        .then(function(response_and_data) {
          return response_and_data.data;
        });
    }


    /**
     * Get the details of a validator run
     * @param {String} organizationId the Organization identifier
     * @param {String} validatorId the Validator identifier
     * @param {String} validatorrunId the Validator Run identifier
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link module:model/ValidatorRun} and HTTP response
     */
    findValidatorRunByIdWithHttpInfo(organizationId, validatorId, validatorrunId) {
      let postBody = null;
      // verify the required parameter 'organizationId' is set
      if (organizationId === undefined || organizationId === null) {
        throw new Error("Missing the required parameter 'organizationId' when calling findValidatorRunById");
      }
      // verify the required parameter 'validatorId' is set
      if (validatorId === undefined || validatorId === null) {
        throw new Error("Missing the required parameter 'validatorId' when calling findValidatorRunById");
      }
      // verify the required parameter 'validatorrunId' is set
      if (validatorrunId === undefined || validatorrunId === null) {
        throw new Error("Missing the required parameter 'validatorrunId' when calling findValidatorRunById");
      }

      let pathParams = {
        'organization_id': organizationId,
        'validator_id': validatorId,
        'validatorrun_id': validatorrunId
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
      let returnType = ValidatorRun;
      return this.apiClient.callApi(
        '/organizations/{organization_id}/datasets/validators/{validator_id}/history/{validatorrun_id}', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null
      );
    }

    /**
     * Get the details of a validator run
     * @param {String} organizationId the Organization identifier
     * @param {String} validatorId the Validator identifier
     * @param {String} validatorrunId the Validator Run identifier
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:model/ValidatorRun}
     */
    findValidatorRunById(organizationId, validatorId, validatorrunId) {
      return this.findValidatorRunByIdWithHttpInfo(organizationId, validatorId, validatorrunId)
        .then(function(response_and_data) {
          return response_and_data.data;
        });
    }


    /**
     * Run a Validator
     * @param {String} organizationId the Organization identifier
     * @param {String} validatorId the ValidatorRun identifier
     * @param {module:model/ValidatorRun} validatorRun the Validator to run
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link module:model/ValidatorRun} and HTTP response
     */
    runValidatorWithHttpInfo(organizationId, validatorId, validatorRun) {
      let postBody = validatorRun;
      // verify the required parameter 'organizationId' is set
      if (organizationId === undefined || organizationId === null) {
        throw new Error("Missing the required parameter 'organizationId' when calling runValidator");
      }
      // verify the required parameter 'validatorId' is set
      if (validatorId === undefined || validatorId === null) {
        throw new Error("Missing the required parameter 'validatorId' when calling runValidator");
      }
      // verify the required parameter 'validatorRun' is set
      if (validatorRun === undefined || validatorRun === null) {
        throw new Error("Missing the required parameter 'validatorRun' when calling runValidator");
      }

      let pathParams = {
        'organization_id': organizationId,
        'validator_id': validatorId
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
      let returnType = ValidatorRun;
      return this.apiClient.callApi(
        '/organizations/{organization_id}/datasets/validators/{validator_id}/run', 'POST',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null
      );
    }

    /**
     * Run a Validator
     * @param {String} organizationId the Organization identifier
     * @param {String} validatorId the ValidatorRun identifier
     * @param {module:model/ValidatorRun} validatorRun the Validator to run
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:model/ValidatorRun}
     */
    runValidator(organizationId, validatorId, validatorRun) {
      return this.runValidatorWithHttpInfo(organizationId, validatorId, validatorRun)
        .then(function(response_and_data) {
          return response_and_data.data;
        });
    }


}
