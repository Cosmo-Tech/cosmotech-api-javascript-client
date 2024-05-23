/**
 * Cosmo Tech Platform API
 * Cosmo Tech Platform API
 *
 * The version of the OpenAPI document: 3.2.2
 * Contact: platform@cosmotech.com
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 *
 */

import ApiClient from '../ApiClient';
import RunContainer from './RunContainer';
import RunState from './RunState';
import RunTemplateParameterValue from './RunTemplateParameterValue';

/**
 * The Run model module.
 * @module model/Run
 * @version 3.2.2
 */
class Run {
    /**
     * Constructs a new <code>Run</code>.
     * a Run with only base properties
     * @alias module:model/Run
     */
    constructor() { 
        
        Run.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>Run</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/Run} obj Optional instance to populate.
     * @return {module:model/Run} The populated <code>Run</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new Run();

            if (data.hasOwnProperty('id')) {
                obj['id'] = ApiClient.convertToType(data['id'], 'String');
            }
            if (data.hasOwnProperty('state')) {
                obj['state'] = ApiClient.convertToType(data['state'], RunState);
            }
            if (data.hasOwnProperty('organizationId')) {
                obj['organizationId'] = ApiClient.convertToType(data['organizationId'], 'String');
            }
            if (data.hasOwnProperty('workflowId')) {
                obj['workflowId'] = ApiClient.convertToType(data['workflowId'], 'String');
            }
            if (data.hasOwnProperty('csmSimulationRun')) {
                obj['csmSimulationRun'] = ApiClient.convertToType(data['csmSimulationRun'], 'String');
            }
            if (data.hasOwnProperty('generateName')) {
                obj['generateName'] = ApiClient.convertToType(data['generateName'], 'String');
            }
            if (data.hasOwnProperty('workflowName')) {
                obj['workflowName'] = ApiClient.convertToType(data['workflowName'], 'String');
            }
            if (data.hasOwnProperty('ownerId')) {
                obj['ownerId'] = ApiClient.convertToType(data['ownerId'], 'String');
            }
            if (data.hasOwnProperty('workspaceId')) {
                obj['workspaceId'] = ApiClient.convertToType(data['workspaceId'], 'String');
            }
            if (data.hasOwnProperty('workspaceKey')) {
                obj['workspaceKey'] = ApiClient.convertToType(data['workspaceKey'], 'String');
            }
            if (data.hasOwnProperty('runnerId')) {
                obj['runnerId'] = ApiClient.convertToType(data['runnerId'], 'String');
            }
            if (data.hasOwnProperty('solutionId')) {
                obj['solutionId'] = ApiClient.convertToType(data['solutionId'], 'String');
            }
            if (data.hasOwnProperty('runTemplateId')) {
                obj['runTemplateId'] = ApiClient.convertToType(data['runTemplateId'], 'String');
            }
            if (data.hasOwnProperty('computeSize')) {
                obj['computeSize'] = ApiClient.convertToType(data['computeSize'], 'String');
            }
            if (data.hasOwnProperty('createdAt')) {
                obj['createdAt'] = ApiClient.convertToType(data['createdAt'], 'String');
            }
            if (data.hasOwnProperty('datasetList')) {
                obj['datasetList'] = ApiClient.convertToType(data['datasetList'], ['String']);
            }
            if (data.hasOwnProperty('parametersValues')) {
                obj['parametersValues'] = ApiClient.convertToType(data['parametersValues'], [RunTemplateParameterValue]);
            }
            if (data.hasOwnProperty('nodeLabel')) {
                obj['nodeLabel'] = ApiClient.convertToType(data['nodeLabel'], 'String');
            }
            if (data.hasOwnProperty('containers')) {
                obj['containers'] = ApiClient.convertToType(data['containers'], [RunContainer]);
            }
        }
        return obj;
    }

    /**
     * Validates the JSON data with respect to <code>Run</code>.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @return {boolean} to indicate whether the JSON data is valid with respect to <code>Run</code>.
     */
    static validateJSON(data) {
        // ensure the json data is a string
        if (data['id'] && !(typeof data['id'] === 'string' || data['id'] instanceof String)) {
            throw new Error("Expected the field `id` to be a primitive type in the JSON string but got " + data['id']);
        }
        // ensure the json data is a string
        if (data['organizationId'] && !(typeof data['organizationId'] === 'string' || data['organizationId'] instanceof String)) {
            throw new Error("Expected the field `organizationId` to be a primitive type in the JSON string but got " + data['organizationId']);
        }
        // ensure the json data is a string
        if (data['workflowId'] && !(typeof data['workflowId'] === 'string' || data['workflowId'] instanceof String)) {
            throw new Error("Expected the field `workflowId` to be a primitive type in the JSON string but got " + data['workflowId']);
        }
        // ensure the json data is a string
        if (data['csmSimulationRun'] && !(typeof data['csmSimulationRun'] === 'string' || data['csmSimulationRun'] instanceof String)) {
            throw new Error("Expected the field `csmSimulationRun` to be a primitive type in the JSON string but got " + data['csmSimulationRun']);
        }
        // ensure the json data is a string
        if (data['generateName'] && !(typeof data['generateName'] === 'string' || data['generateName'] instanceof String)) {
            throw new Error("Expected the field `generateName` to be a primitive type in the JSON string but got " + data['generateName']);
        }
        // ensure the json data is a string
        if (data['workflowName'] && !(typeof data['workflowName'] === 'string' || data['workflowName'] instanceof String)) {
            throw new Error("Expected the field `workflowName` to be a primitive type in the JSON string but got " + data['workflowName']);
        }
        // ensure the json data is a string
        if (data['ownerId'] && !(typeof data['ownerId'] === 'string' || data['ownerId'] instanceof String)) {
            throw new Error("Expected the field `ownerId` to be a primitive type in the JSON string but got " + data['ownerId']);
        }
        // ensure the json data is a string
        if (data['workspaceId'] && !(typeof data['workspaceId'] === 'string' || data['workspaceId'] instanceof String)) {
            throw new Error("Expected the field `workspaceId` to be a primitive type in the JSON string but got " + data['workspaceId']);
        }
        // ensure the json data is a string
        if (data['workspaceKey'] && !(typeof data['workspaceKey'] === 'string' || data['workspaceKey'] instanceof String)) {
            throw new Error("Expected the field `workspaceKey` to be a primitive type in the JSON string but got " + data['workspaceKey']);
        }
        // ensure the json data is a string
        if (data['runnerId'] && !(typeof data['runnerId'] === 'string' || data['runnerId'] instanceof String)) {
            throw new Error("Expected the field `runnerId` to be a primitive type in the JSON string but got " + data['runnerId']);
        }
        // ensure the json data is a string
        if (data['solutionId'] && !(typeof data['solutionId'] === 'string' || data['solutionId'] instanceof String)) {
            throw new Error("Expected the field `solutionId` to be a primitive type in the JSON string but got " + data['solutionId']);
        }
        // ensure the json data is a string
        if (data['runTemplateId'] && !(typeof data['runTemplateId'] === 'string' || data['runTemplateId'] instanceof String)) {
            throw new Error("Expected the field `runTemplateId` to be a primitive type in the JSON string but got " + data['runTemplateId']);
        }
        // ensure the json data is a string
        if (data['computeSize'] && !(typeof data['computeSize'] === 'string' || data['computeSize'] instanceof String)) {
            throw new Error("Expected the field `computeSize` to be a primitive type in the JSON string but got " + data['computeSize']);
        }
        // ensure the json data is a string
        if (data['createdAt'] && !(typeof data['createdAt'] === 'string' || data['createdAt'] instanceof String)) {
            throw new Error("Expected the field `createdAt` to be a primitive type in the JSON string but got " + data['createdAt']);
        }
        // ensure the json data is an array
        if (!Array.isArray(data['datasetList'])) {
            throw new Error("Expected the field `datasetList` to be an array in the JSON data but got " + data['datasetList']);
        }
        if (data['parametersValues']) { // data not null
            // ensure the json data is an array
            if (!Array.isArray(data['parametersValues'])) {
                throw new Error("Expected the field `parametersValues` to be an array in the JSON data but got " + data['parametersValues']);
            }
            // validate the optional field `parametersValues` (array)
            for (const item of data['parametersValues']) {
                RunTemplateParameterValue.validateJSON(item);
            };
        }
        // ensure the json data is a string
        if (data['nodeLabel'] && !(typeof data['nodeLabel'] === 'string' || data['nodeLabel'] instanceof String)) {
            throw new Error("Expected the field `nodeLabel` to be a primitive type in the JSON string but got " + data['nodeLabel']);
        }
        if (data['containers']) { // data not null
            // ensure the json data is an array
            if (!Array.isArray(data['containers'])) {
                throw new Error("Expected the field `containers` to be an array in the JSON data but got " + data['containers']);
            }
            // validate the optional field `containers` (array)
            for (const item of data['containers']) {
                RunContainer.validateJSON(item);
            };
        }

        return true;
    }


}



/**
 * the Run
 * @member {String} id
 */
Run.prototype['id'] = undefined;

/**
 * @member {module:model/RunState} state
 */
Run.prototype['state'] = undefined;

/**
 * the Organization id
 * @member {String} organizationId
 */
Run.prototype['organizationId'] = undefined;

/**
 * the Cosmo Tech compute cluster Argo Workflow Id to search
 * @member {String} workflowId
 */
Run.prototype['workflowId'] = undefined;

/**
 * the Cosmo Tech Simulation Run Id
 * @member {String} csmSimulationRun
 */
Run.prototype['csmSimulationRun'] = undefined;

/**
 * the base name for workflow name generation
 * @member {String} generateName
 */
Run.prototype['generateName'] = undefined;

/**
 * the Cosmo Tech compute cluster Argo Workflow Name
 * @member {String} workflowName
 */
Run.prototype['workflowName'] = undefined;

/**
 * the user id which own this run
 * @member {String} ownerId
 */
Run.prototype['ownerId'] = undefined;

/**
 * the Workspace Id
 * @member {String} workspaceId
 */
Run.prototype['workspaceId'] = undefined;

/**
 * technical key for resource name convention and version grouping. Must be unique
 * @member {String} workspaceKey
 */
Run.prototype['workspaceKey'] = undefined;

/**
 * the Runner Id
 * @member {String} runnerId
 */
Run.prototype['runnerId'] = undefined;

/**
 * the Solution Id
 * @member {String} solutionId
 */
Run.prototype['solutionId'] = undefined;

/**
 * the Solution Run Template id
 * @member {String} runTemplateId
 */
Run.prototype['runTemplateId'] = undefined;

/**
 * the compute size needed for this Analysis. Standard sizes are basic and highcpu. Default is basic
 * @member {String} computeSize
 */
Run.prototype['computeSize'] = undefined;

/**
 * the Run creation date
 * @member {String} createdAt
 */
Run.prototype['createdAt'] = undefined;

/**
 * the list of Dataset Id associated to this Run
 * @member {Array.<String>} datasetList
 */
Run.prototype['datasetList'] = undefined;

/**
 * the list of Run Template parameters values
 * @member {Array.<module:model/RunTemplateParameterValue>} parametersValues
 */
Run.prototype['parametersValues'] = undefined;

/**
 * the node label request
 * @member {String} nodeLabel
 */
Run.prototype['nodeLabel'] = undefined;

/**
 * the containers list. This information is not returned by the API.
 * @member {Array.<module:model/RunContainer>} containers
 */
Run.prototype['containers'] = undefined;






export default Run;

