/**
 * Cosmo Tech Platform API
 * Cosmo Tech Platform API
 *
 * The version of the OpenAPI document: 3.0.11-SNAPSHOT
 * Contact: platform@cosmotech.com
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 *
 */


import ApiClient from "../ApiClient";
import GraphProperties from '../model/GraphProperties';
import TwinGraphBatchResult from '../model/TwinGraphBatchResult';
import TwinGraphHash from '../model/TwinGraphHash';
import TwinGraphQuery from '../model/TwinGraphQuery';

/**
* Twingraph service.
* @module api/TwingraphApi
* @version 3.0.11-SNAPSHOT
*/
export default class TwingraphApi {

    /**
    * Constructs a new TwingraphApi. 
    * @alias module:api/TwingraphApi
    * @class
    * @param {module:ApiClient} [apiClient] Optional API client implementation to use,
    * default to {@link module:ApiClient#instance} if unspecified.
    */
    constructor(apiClient) {
        this.apiClient = apiClient || ApiClient.instance;
    }



    /**
     * Run a query on a graph instance and return the result as a zip file in async mode
     * Run a query on a graph instance and return the result as a zip file in async mode
     * @param {String} organizationId the Organization identifier
     * @param {String} graphId the Graph Identifier
     * @param {module:model/TwinGraphQuery} twinGraphQuery the query to run
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link module:model/TwinGraphHash} and HTTP response
     */
    batchQueryWithHttpInfo(organizationId, graphId, twinGraphQuery) {
      let postBody = twinGraphQuery;
      // verify the required parameter 'organizationId' is set
      if (organizationId === undefined || organizationId === null) {
        throw new Error("Missing the required parameter 'organizationId' when calling batchQuery");
      }
      // verify the required parameter 'graphId' is set
      if (graphId === undefined || graphId === null) {
        throw new Error("Missing the required parameter 'graphId' when calling batchQuery");
      }
      // verify the required parameter 'twinGraphQuery' is set
      if (twinGraphQuery === undefined || twinGraphQuery === null) {
        throw new Error("Missing the required parameter 'twinGraphQuery' when calling batchQuery");
      }

      let pathParams = {
        'organization_id': organizationId,
        'graph_id': graphId
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
      let returnType = TwinGraphHash;
      return this.apiClient.callApi(
        '/organizations/{organization_id}/twingraph/{graph_id}/batch-query', 'POST',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null
      );
    }

    /**
     * Run a query on a graph instance and return the result as a zip file in async mode
     * Run a query on a graph instance and return the result as a zip file in async mode
     * @param {String} organizationId the Organization identifier
     * @param {String} graphId the Graph Identifier
     * @param {module:model/TwinGraphQuery} twinGraphQuery the query to run
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:model/TwinGraphHash}
     */
    batchQuery(organizationId, graphId, twinGraphQuery) {
      return this.batchQueryWithHttpInfo(organizationId, graphId, twinGraphQuery)
        .then(function(response_and_data) {
          return response_and_data.data;
        });
    }


    /**
     * Async batch update by loading a CSV file on a graph instance 
     * Async batch update by loading a CSV file on a graph instance 
     * @param {String} organizationId the Organization identifier
     * @param {String} graphId the Graph Identifier
     * @param {module:model/TwinGraphQuery} twinGraphQuery 
     * @param {File} body 
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link module:model/TwinGraphBatchResult} and HTTP response
     */
    batchUploadUpdateWithHttpInfo(organizationId, graphId, twinGraphQuery, body) {
      let postBody = body;
      // verify the required parameter 'organizationId' is set
      if (organizationId === undefined || organizationId === null) {
        throw new Error("Missing the required parameter 'organizationId' when calling batchUploadUpdate");
      }
      // verify the required parameter 'graphId' is set
      if (graphId === undefined || graphId === null) {
        throw new Error("Missing the required parameter 'graphId' when calling batchUploadUpdate");
      }
      // verify the required parameter 'twinGraphQuery' is set
      if (twinGraphQuery === undefined || twinGraphQuery === null) {
        throw new Error("Missing the required parameter 'twinGraphQuery' when calling batchUploadUpdate");
      }
      // verify the required parameter 'body' is set
      if (body === undefined || body === null) {
        throw new Error("Missing the required parameter 'body' when calling batchUploadUpdate");
      }

      let pathParams = {
        'organization_id': organizationId,
        'graph_id': graphId
      };
      let queryParams = {
        'twinGraphQuery': twinGraphQuery
      };
      let headerParams = {
      };
      let formParams = {
      };

      let authNames = ['oAuth2AuthCode'];
      let contentTypes = ['text/csv', 'application/octet-stream'];
      let accepts = ['application/json'];
      let returnType = TwinGraphBatchResult;
      return this.apiClient.callApi(
        '/organizations/{organization_id}/twingraph/{graph_id}/batch', 'POST',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null
      );
    }

    /**
     * Async batch update by loading a CSV file on a graph instance 
     * Async batch update by loading a CSV file on a graph instance 
     * @param {String} organizationId the Organization identifier
     * @param {String} graphId the Graph Identifier
     * @param {module:model/TwinGraphQuery} twinGraphQuery 
     * @param {File} body 
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:model/TwinGraphBatchResult}
     */
    batchUploadUpdate(organizationId, graphId, twinGraphQuery, body) {
      return this.batchUploadUpdateWithHttpInfo(organizationId, graphId, twinGraphQuery, body)
        .then(function(response_and_data) {
          return response_and_data.data;
        });
    }


    /**
     * Delete all versions of a graph and his metadatas
     * Delete all versions of a graph and his metadatas
     * @param {String} organizationId the Organization identifier
     * @param {String} graphId the Graph Identifier
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing HTTP response
     */
    callDeleteWithHttpInfo(organizationId, graphId) {
      let postBody = null;
      // verify the required parameter 'organizationId' is set
      if (organizationId === undefined || organizationId === null) {
        throw new Error("Missing the required parameter 'organizationId' when calling callDelete");
      }
      // verify the required parameter 'graphId' is set
      if (graphId === undefined || graphId === null) {
        throw new Error("Missing the required parameter 'graphId' when calling callDelete");
      }

      let pathParams = {
        'organization_id': organizationId,
        'graph_id': graphId
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
        '/organizations/{organization_id}/twingraph/{graph_id}', 'DELETE',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null
      );
    }

    /**
     * Delete all versions of a graph and his metadatas
     * Delete all versions of a graph and his metadatas
     * @param {String} organizationId the Organization identifier
     * @param {String} graphId the Graph Identifier
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}
     */
    callDelete(organizationId, graphId) {
      return this.callDeleteWithHttpInfo(organizationId, graphId)
        .then(function(response_and_data) {
          return response_and_data.data;
        });
    }


    /**
     * Create new entities in a graph instance
     * create new entities in a graph instance
     * @param {String} organizationId the Organization identifier
     * @param {String} graphId the Graph Identifier
     * @param {module:model/String} type the entity model type
     * @param {Array.<module:model/GraphProperties>} graphProperties the entities to create
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link String} and HTTP response
     */
    createEntitiesWithHttpInfo(organizationId, graphId, type, graphProperties) {
      let postBody = graphProperties;
      // verify the required parameter 'organizationId' is set
      if (organizationId === undefined || organizationId === null) {
        throw new Error("Missing the required parameter 'organizationId' when calling createEntities");
      }
      // verify the required parameter 'graphId' is set
      if (graphId === undefined || graphId === null) {
        throw new Error("Missing the required parameter 'graphId' when calling createEntities");
      }
      // verify the required parameter 'type' is set
      if (type === undefined || type === null) {
        throw new Error("Missing the required parameter 'type' when calling createEntities");
      }
      // verify the required parameter 'graphProperties' is set
      if (graphProperties === undefined || graphProperties === null) {
        throw new Error("Missing the required parameter 'graphProperties' when calling createEntities");
      }

      let pathParams = {
        'organization_id': organizationId,
        'graph_id': graphId,
        'type': type
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
      let returnType = 'String';
      return this.apiClient.callApi(
        '/organizations/{organization_id}/twingraph/{graph_id}/entity/{type}', 'POST',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null
      );
    }

    /**
     * Create new entities in a graph instance
     * create new entities in a graph instance
     * @param {String} organizationId the Organization identifier
     * @param {String} graphId the Graph Identifier
     * @param {module:model/String} type the entity model type
     * @param {Array.<module:model/GraphProperties>} graphProperties the entities to create
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link String}
     */
    createEntities(organizationId, graphId, type, graphProperties) {
      return this.createEntitiesWithHttpInfo(organizationId, graphId, type, graphProperties)
        .then(function(response_and_data) {
          return response_and_data.data;
        });
    }


    /**
     * Create a new graph
     * To create a new graph from flat files,  you need to create a Zip file. This Zip file must countain two folders named Edges and Nodes.  .zip hierarchy: *main_folder/Nodes *main_folder/Edges  In each folder you can place one or multiple csv files containing your Nodes or Edges data.  Your csv files must follow the following header (column name) requirements:  The Nodes CSVs requires at least one column (the 1st).Column name = 'id'. It will represent the nodes ID Ids must be populated with string  The Edges CSVs require three columns named, in order, * source * target * id  those colomns represent * The source of the edge * The target of the edge * The id of the edge  All following columns content are up to you. 
     * @param {String} organizationId the Organization identifier
     * @param {String} graphId the Graph Identifier
     * @param {Object} opts Optional parameters
     * @param {File} opts.body 
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing HTTP response
     */
    createGraphWithHttpInfo(organizationId, graphId, opts) {
      opts = opts || {};
      let postBody = opts['body'];
      // verify the required parameter 'organizationId' is set
      if (organizationId === undefined || organizationId === null) {
        throw new Error("Missing the required parameter 'organizationId' when calling createGraph");
      }
      // verify the required parameter 'graphId' is set
      if (graphId === undefined || graphId === null) {
        throw new Error("Missing the required parameter 'graphId' when calling createGraph");
      }

      let pathParams = {
        'organization_id': organizationId,
        'graph_id': graphId
      };
      let queryParams = {
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
        '/organizations/{organization_id}/twingraph/{graph_id}', 'POST',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null
      );
    }

    /**
     * Create a new graph
     * To create a new graph from flat files,  you need to create a Zip file. This Zip file must countain two folders named Edges and Nodes.  .zip hierarchy: *main_folder/Nodes *main_folder/Edges  In each folder you can place one or multiple csv files containing your Nodes or Edges data.  Your csv files must follow the following header (column name) requirements:  The Nodes CSVs requires at least one column (the 1st).Column name = 'id'. It will represent the nodes ID Ids must be populated with string  The Edges CSVs require three columns named, in order, * source * target * id  those colomns represent * The source of the edge * The target of the edge * The id of the edge  All following columns content are up to you. 
     * @param {String} organizationId the Organization identifier
     * @param {String} graphId the Graph Identifier
     * @param {Object} opts Optional parameters
     * @param {File} opts.body 
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}
     */
    createGraph(organizationId, graphId, opts) {
      return this.createGraphWithHttpInfo(organizationId, graphId, opts)
        .then(function(response_and_data) {
          return response_and_data.data;
        });
    }


    /**
     * Delete entities in a graph instance
     * delete entities in a graph instance
     * @param {String} organizationId the Organization identifier
     * @param {String} graphId the Graph Identifier
     * @param {module:model/String} type the entity model type
     * @param {Array.<String>} ids the entities to delete
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing HTTP response
     */
    deleteEntitiesWithHttpInfo(organizationId, graphId, type, ids) {
      let postBody = null;
      // verify the required parameter 'organizationId' is set
      if (organizationId === undefined || organizationId === null) {
        throw new Error("Missing the required parameter 'organizationId' when calling deleteEntities");
      }
      // verify the required parameter 'graphId' is set
      if (graphId === undefined || graphId === null) {
        throw new Error("Missing the required parameter 'graphId' when calling deleteEntities");
      }
      // verify the required parameter 'type' is set
      if (type === undefined || type === null) {
        throw new Error("Missing the required parameter 'type' when calling deleteEntities");
      }
      // verify the required parameter 'ids' is set
      if (ids === undefined || ids === null) {
        throw new Error("Missing the required parameter 'ids' when calling deleteEntities");
      }

      let pathParams = {
        'organization_id': organizationId,
        'graph_id': graphId,
        'type': type
      };
      let queryParams = {
        'ids': this.apiClient.buildCollectionParam(ids, 'multi')
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
        '/organizations/{organization_id}/twingraph/{graph_id}/entity/{type}', 'DELETE',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null
      );
    }

    /**
     * Delete entities in a graph instance
     * delete entities in a graph instance
     * @param {String} organizationId the Organization identifier
     * @param {String} graphId the Graph Identifier
     * @param {module:model/String} type the entity model type
     * @param {Array.<String>} ids the entities to delete
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}
     */
    deleteEntities(organizationId, graphId, type, ids) {
      return this.deleteEntitiesWithHttpInfo(organizationId, graphId, type, ids)
        .then(function(response_and_data) {
          return response_and_data.data;
        });
    }


    /**
     * Download a graph compressed in a zip file
     * Download a graph compressed in a zip file
     * @param {String} organizationId the Organization identifier
     * @param {String} hash the Graph download identifier
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link File} and HTTP response
     */
    downloadGraphWithHttpInfo(organizationId, hash) {
      let postBody = null;
      // verify the required parameter 'organizationId' is set
      if (organizationId === undefined || organizationId === null) {
        throw new Error("Missing the required parameter 'organizationId' when calling downloadGraph");
      }
      // verify the required parameter 'hash' is set
      if (hash === undefined || hash === null) {
        throw new Error("Missing the required parameter 'hash' when calling downloadGraph");
      }

      let pathParams = {
        'organization_id': organizationId,
        'hash': hash
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
        '/organizations/{organization_id}/twingraph/download/{hash}', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null
      );
    }

    /**
     * Download a graph compressed in a zip file
     * Download a graph compressed in a zip file
     * @param {String} organizationId the Organization identifier
     * @param {String} hash the Graph download identifier
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link File}
     */
    downloadGraph(organizationId, hash) {
      return this.downloadGraphWithHttpInfo(organizationId, hash)
        .then(function(response_and_data) {
          return response_and_data.data;
        });
    }


    /**
     * Return the list of all graphs stored in the organization
     * Return the list of all graphs stored in the organization
     * @param {String} organizationId the Organization identifier
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link Array.<String>} and HTTP response
     */
    findAllTwingraphsWithHttpInfo(organizationId) {
      let postBody = null;
      // verify the required parameter 'organizationId' is set
      if (organizationId === undefined || organizationId === null) {
        throw new Error("Missing the required parameter 'organizationId' when calling findAllTwingraphs");
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
        '/organizations/{organization_id}/twingraphs', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null
      );
    }

    /**
     * Return the list of all graphs stored in the organization
     * Return the list of all graphs stored in the organization
     * @param {String} organizationId the Organization identifier
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link Array.<String>}
     */
    findAllTwingraphs(organizationId) {
      return this.findAllTwingraphsWithHttpInfo(organizationId)
        .then(function(response_and_data) {
          return response_and_data.data;
        });
    }


    /**
     * Get entities in a graph instance
     * get entities in a graph instance
     * @param {String} organizationId the Organization identifier
     * @param {String} graphId the Graph Identifier
     * @param {module:model/String} type the entity model type
     * @param {Array.<String>} ids the entities to get
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link String} and HTTP response
     */
    getEntitiesWithHttpInfo(organizationId, graphId, type, ids) {
      let postBody = null;
      // verify the required parameter 'organizationId' is set
      if (organizationId === undefined || organizationId === null) {
        throw new Error("Missing the required parameter 'organizationId' when calling getEntities");
      }
      // verify the required parameter 'graphId' is set
      if (graphId === undefined || graphId === null) {
        throw new Error("Missing the required parameter 'graphId' when calling getEntities");
      }
      // verify the required parameter 'type' is set
      if (type === undefined || type === null) {
        throw new Error("Missing the required parameter 'type' when calling getEntities");
      }
      // verify the required parameter 'ids' is set
      if (ids === undefined || ids === null) {
        throw new Error("Missing the required parameter 'ids' when calling getEntities");
      }

      let pathParams = {
        'organization_id': organizationId,
        'graph_id': graphId,
        'type': type
      };
      let queryParams = {
        'ids': this.apiClient.buildCollectionParam(ids, 'multi')
      };
      let headerParams = {
      };
      let formParams = {
      };

      let authNames = ['oAuth2AuthCode'];
      let contentTypes = [];
      let accepts = ['application/json'];
      let returnType = 'String';
      return this.apiClient.callApi(
        '/organizations/{organization_id}/twingraph/{graph_id}/entity/{type}', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null
      );
    }

    /**
     * Get entities in a graph instance
     * get entities in a graph instance
     * @param {String} organizationId the Organization identifier
     * @param {String} graphId the Graph Identifier
     * @param {module:model/String} type the entity model type
     * @param {Array.<String>} ids the entities to get
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link String}
     */
    getEntities(organizationId, graphId, type, ids) {
      return this.getEntitiesWithHttpInfo(organizationId, graphId, type, ids)
        .then(function(response_and_data) {
          return response_and_data.data;
        });
    }


    /**
     * Return the metaData of the specified graph
     * Return the metaData of the specified graph
     * @param {String} organizationId the Organization identifier
     * @param {String} graphId the Graph Identifier
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link Object} and HTTP response
     */
    getGraphMetaDataWithHttpInfo(organizationId, graphId) {
      let postBody = null;
      // verify the required parameter 'organizationId' is set
      if (organizationId === undefined || organizationId === null) {
        throw new Error("Missing the required parameter 'organizationId' when calling getGraphMetaData");
      }
      // verify the required parameter 'graphId' is set
      if (graphId === undefined || graphId === null) {
        throw new Error("Missing the required parameter 'graphId' when calling getGraphMetaData");
      }

      let pathParams = {
        'organization_id': organizationId,
        'graph_id': graphId
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
      let returnType = Object;
      return this.apiClient.callApi(
        '/organizations/{organization_id}/twingraph/{graph_id}/metadata', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null
      );
    }

    /**
     * Return the metaData of the specified graph
     * Return the metaData of the specified graph
     * @param {String} organizationId the Organization identifier
     * @param {String} graphId the Graph Identifier
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link Object}
     */
    getGraphMetaData(organizationId, graphId) {
      return this.getGraphMetaDataWithHttpInfo(organizationId, graphId)
        .then(function(response_and_data) {
          return response_and_data.data;
        });
    }


    /**
     * Get the status of a job
     * Get the status of a job
     * @param {String} organizationId the Organization identifier
     * @param {String} jobId the job identifier
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link String} and HTTP response
     */
    jobStatusWithHttpInfo(organizationId, jobId) {
      let postBody = null;
      // verify the required parameter 'organizationId' is set
      if (organizationId === undefined || organizationId === null) {
        throw new Error("Missing the required parameter 'organizationId' when calling jobStatus");
      }
      // verify the required parameter 'jobId' is set
      if (jobId === undefined || jobId === null) {
        throw new Error("Missing the required parameter 'jobId' when calling jobStatus");
      }

      let pathParams = {
        'organization_id': organizationId,
        'job_id': jobId
      };
      let queryParams = {
      };
      let headerParams = {
      };
      let formParams = {
      };

      let authNames = ['oAuth2AuthCode'];
      let contentTypes = [];
      let accepts = ['application/yaml', 'application/json'];
      let returnType = 'String';
      return this.apiClient.callApi(
        '/organizations/{organization_id}/job/{job_id}/status', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null
      );
    }

    /**
     * Get the status of a job
     * Get the status of a job
     * @param {String} organizationId the Organization identifier
     * @param {String} jobId the job identifier
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link String}
     */
    jobStatus(organizationId, jobId) {
      return this.jobStatusWithHttpInfo(organizationId, jobId)
        .then(function(response_and_data) {
          return response_and_data.data;
        });
    }


    /**
     * Run a query on a graph instance
     * Run a query on a graph instance
     * @param {String} organizationId the Organization identifier
     * @param {String} graphId the Graph Identifier
     * @param {module:model/TwinGraphQuery} twinGraphQuery the query to run
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link String} and HTTP response
     */
    queryWithHttpInfo(organizationId, graphId, twinGraphQuery) {
      let postBody = twinGraphQuery;
      // verify the required parameter 'organizationId' is set
      if (organizationId === undefined || organizationId === null) {
        throw new Error("Missing the required parameter 'organizationId' when calling query");
      }
      // verify the required parameter 'graphId' is set
      if (graphId === undefined || graphId === null) {
        throw new Error("Missing the required parameter 'graphId' when calling query");
      }
      // verify the required parameter 'twinGraphQuery' is set
      if (twinGraphQuery === undefined || twinGraphQuery === null) {
        throw new Error("Missing the required parameter 'twinGraphQuery' when calling query");
      }

      let pathParams = {
        'organization_id': organizationId,
        'graph_id': graphId
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
      let returnType = 'String';
      return this.apiClient.callApi(
        '/organizations/{organization_id}/twingraph/{graph_id}/query', 'POST',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null
      );
    }

    /**
     * Run a query on a graph instance
     * Run a query on a graph instance
     * @param {String} organizationId the Organization identifier
     * @param {String} graphId the Graph Identifier
     * @param {module:model/TwinGraphQuery} twinGraphQuery the query to run
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link String}
     */
    query(organizationId, graphId, twinGraphQuery) {
      return this.queryWithHttpInfo(organizationId, graphId, twinGraphQuery)
        .then(function(response_and_data) {
          return response_and_data.data;
        });
    }


    /**
     * Update entities in a graph instance
     * update entities in a graph instance
     * @param {String} organizationId the Organization identifier
     * @param {String} graphId the Graph Identifier
     * @param {module:model/String} type the entity model type
     * @param {Array.<module:model/GraphProperties>} graphProperties the entities to update
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link String} and HTTP response
     */
    updateEntitiesWithHttpInfo(organizationId, graphId, type, graphProperties) {
      let postBody = graphProperties;
      // verify the required parameter 'organizationId' is set
      if (organizationId === undefined || organizationId === null) {
        throw new Error("Missing the required parameter 'organizationId' when calling updateEntities");
      }
      // verify the required parameter 'graphId' is set
      if (graphId === undefined || graphId === null) {
        throw new Error("Missing the required parameter 'graphId' when calling updateEntities");
      }
      // verify the required parameter 'type' is set
      if (type === undefined || type === null) {
        throw new Error("Missing the required parameter 'type' when calling updateEntities");
      }
      // verify the required parameter 'graphProperties' is set
      if (graphProperties === undefined || graphProperties === null) {
        throw new Error("Missing the required parameter 'graphProperties' when calling updateEntities");
      }

      let pathParams = {
        'organization_id': organizationId,
        'graph_id': graphId,
        'type': type
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
      let returnType = 'String';
      return this.apiClient.callApi(
        '/organizations/{organization_id}/twingraph/{graph_id}/entity/{type}', 'PATCH',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null
      );
    }

    /**
     * Update entities in a graph instance
     * update entities in a graph instance
     * @param {String} organizationId the Organization identifier
     * @param {String} graphId the Graph Identifier
     * @param {module:model/String} type the entity model type
     * @param {Array.<module:model/GraphProperties>} graphProperties the entities to update
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link String}
     */
    updateEntities(organizationId, graphId, type, graphProperties) {
      return this.updateEntitiesWithHttpInfo(organizationId, graphId, type, graphProperties)
        .then(function(response_and_data) {
          return response_and_data.data;
        });
    }


    /**
     * Update the metaData of the specified graph
     * Update the metaData of the specified graph
     * @param {String} organizationId the Organization identifier
     * @param {String} graphId the Graph Identifier
     * @param {Object.<String, {String: String}>} requestBody the metaData to update
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link Object} and HTTP response
     */
    updateGraphMetaDataWithHttpInfo(organizationId, graphId, requestBody) {
      let postBody = requestBody;
      // verify the required parameter 'organizationId' is set
      if (organizationId === undefined || organizationId === null) {
        throw new Error("Missing the required parameter 'organizationId' when calling updateGraphMetaData");
      }
      // verify the required parameter 'graphId' is set
      if (graphId === undefined || graphId === null) {
        throw new Error("Missing the required parameter 'graphId' when calling updateGraphMetaData");
      }
      // verify the required parameter 'requestBody' is set
      if (requestBody === undefined || requestBody === null) {
        throw new Error("Missing the required parameter 'requestBody' when calling updateGraphMetaData");
      }

      let pathParams = {
        'organization_id': organizationId,
        'graph_id': graphId
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
      let returnType = Object;
      return this.apiClient.callApi(
        '/organizations/{organization_id}/twingraph/{graph_id}/metadata', 'PATCH',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null
      );
    }

    /**
     * Update the metaData of the specified graph
     * Update the metaData of the specified graph
     * @param {String} organizationId the Organization identifier
     * @param {String} graphId the Graph Identifier
     * @param {Object.<String, {String: String}>} requestBody the metaData to update
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link Object}
     */
    updateGraphMetaData(organizationId, graphId, requestBody) {
      return this.updateGraphMetaDataWithHttpInfo(organizationId, graphId, requestBody)
        .then(function(response_and_data) {
          return response_and_data.data;
        });
    }


}
