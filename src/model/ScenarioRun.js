/**
 * Cosmo Tech Platform API
 * Cosmo Tech Platform API
 *
 * The version of the OpenAPI document: 3.1.3
 * Contact: platform@cosmotech.com
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 *
 */

import ApiClient from '../ApiClient';
import RunTemplateParameterValue from './RunTemplateParameterValue';
import ScenarioRunContainer from './ScenarioRunContainer';
import ScenarioRunState from './ScenarioRunState';

/**
 * The ScenarioRun model module.
 * @module model/ScenarioRun
 * @version 3.1.3
 */
class ScenarioRun {
    /**
     * Constructs a new <code>ScenarioRun</code>.
     * a ScenarioRun with only base properties
     * @alias module:model/ScenarioRun
     */
    constructor() { 
        
        ScenarioRun.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>ScenarioRun</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/ScenarioRun} obj Optional instance to populate.
     * @return {module:model/ScenarioRun} The populated <code>ScenarioRun</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new ScenarioRun();

            if (data.hasOwnProperty('id')) {
                obj['id'] = ApiClient.convertToType(data['id'], 'String');
            }
            if (data.hasOwnProperty('state')) {
                obj['state'] = ApiClient.convertToType(data['state'], ScenarioRunState);
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
            if (data.hasOwnProperty('scenarioId')) {
                obj['scenarioId'] = ApiClient.convertToType(data['scenarioId'], 'String');
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
            if (data.hasOwnProperty('sdkVersion')) {
                obj['sdkVersion'] = ApiClient.convertToType(data['sdkVersion'], 'String');
            }
            if (data.hasOwnProperty('createdAt')) {
                obj['createdAt'] = ApiClient.convertToType(data['createdAt'], 'String');
            }
            if (data.hasOwnProperty('noDataIngestionState')) {
                obj['noDataIngestionState'] = ApiClient.convertToType(data['noDataIngestionState'], 'Boolean');
            }
            if (data.hasOwnProperty('datasetList')) {
                obj['datasetList'] = ApiClient.convertToType(data['datasetList'], ['String']);
            }
            if (data.hasOwnProperty('parametersValues')) {
                obj['parametersValues'] = ApiClient.convertToType(data['parametersValues'], [RunTemplateParameterValue]);
            }
            if (data.hasOwnProperty('sendDatasetsToDataWarehouse')) {
                obj['sendDatasetsToDataWarehouse'] = ApiClient.convertToType(data['sendDatasetsToDataWarehouse'], 'Boolean');
            }
            if (data.hasOwnProperty('sendInputParametersToDataWarehouse')) {
                obj['sendInputParametersToDataWarehouse'] = ApiClient.convertToType(data['sendInputParametersToDataWarehouse'], 'Boolean');
            }
            if (data.hasOwnProperty('nodeLabel')) {
                obj['nodeLabel'] = ApiClient.convertToType(data['nodeLabel'], 'String');
            }
            if (data.hasOwnProperty('containers')) {
                obj['containers'] = ApiClient.convertToType(data['containers'], [ScenarioRunContainer]);
            }
        }
        return obj;
    }

    /**
     * Validates the JSON data with respect to <code>ScenarioRun</code>.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @return {boolean} to indicate whether the JSON data is valid with respect to <code>ScenarioRun</code>.
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
        if (data['scenarioId'] && !(typeof data['scenarioId'] === 'string' || data['scenarioId'] instanceof String)) {
            throw new Error("Expected the field `scenarioId` to be a primitive type in the JSON string but got " + data['scenarioId']);
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
        if (data['sdkVersion'] && !(typeof data['sdkVersion'] === 'string' || data['sdkVersion'] instanceof String)) {
            throw new Error("Expected the field `sdkVersion` to be a primitive type in the JSON string but got " + data['sdkVersion']);
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
                ScenarioRunContainer.validateJSON(item);
            };
        }

        return true;
    }


}



/**
 * the ScenarioRun
 * @member {String} id
 */
ScenarioRun.prototype['id'] = undefined;

/**
 * @member {module:model/ScenarioRunState} state
 */
ScenarioRun.prototype['state'] = undefined;

/**
 * the Organization id
 * @member {String} organizationId
 */
ScenarioRun.prototype['organizationId'] = undefined;

/**
 * the Cosmo Tech compute cluster Argo Workflow Id to search
 * @member {String} workflowId
 */
ScenarioRun.prototype['workflowId'] = undefined;

/**
 * the Cosmo Tech Simulation Run Id
 * @member {String} csmSimulationRun
 */
ScenarioRun.prototype['csmSimulationRun'] = undefined;

/**
 * the base name for workflow name generation
 * @member {String} generateName
 */
ScenarioRun.prototype['generateName'] = undefined;

/**
 * the Cosmo Tech compute cluster Argo Workflow Name
 * @member {String} workflowName
 */
ScenarioRun.prototype['workflowName'] = undefined;

/**
 * the user id which own this scenariorun
 * @member {String} ownerId
 */
ScenarioRun.prototype['ownerId'] = undefined;

/**
 * the Workspace Id
 * @member {String} workspaceId
 */
ScenarioRun.prototype['workspaceId'] = undefined;

/**
 * technical key for resource name convention and version grouping. Must be unique
 * @member {String} workspaceKey
 */
ScenarioRun.prototype['workspaceKey'] = undefined;

/**
 * the Scenario Id
 * @member {String} scenarioId
 */
ScenarioRun.prototype['scenarioId'] = undefined;

/**
 * the Solution Id
 * @member {String} solutionId
 */
ScenarioRun.prototype['solutionId'] = undefined;

/**
 * the Solution Run Template id
 * @member {String} runTemplateId
 */
ScenarioRun.prototype['runTemplateId'] = undefined;

/**
 * the compute size needed for this Analysis. Standard sizes are basic and highcpu. Default is basic
 * @member {String} computeSize
 */
ScenarioRun.prototype['computeSize'] = undefined;

/**
 * the MAJOR.MINOR version used to build the solution solution
 * @member {String} sdkVersion
 */
ScenarioRun.prototype['sdkVersion'] = undefined;

/**
 * the ScenarioRun creation date
 * @member {String} createdAt
 */
ScenarioRun.prototype['createdAt'] = undefined;

/**
 * set to true if the run template does not use any Datawarehouse consumers (AMQP consumers for Azure)
 * @member {Boolean} noDataIngestionState
 */
ScenarioRun.prototype['noDataIngestionState'] = undefined;

/**
 * the list of Dataset Id associated to this Analysis
 * @member {Array.<String>} datasetList
 */
ScenarioRun.prototype['datasetList'] = undefined;

/**
 * the list of Run Template parameters values
 * @member {Array.<module:model/RunTemplateParameterValue>} parametersValues
 */
ScenarioRun.prototype['parametersValues'] = undefined;

/**
 * whether or not the Datasets values are send to the DataWarehouse prior to Simulation Run. If not set follow the Workspace setting
 * @member {Boolean} sendDatasetsToDataWarehouse
 */
ScenarioRun.prototype['sendDatasetsToDataWarehouse'] = undefined;

/**
 * whether or not the input parameters values are send to the DataWarehouse prior to Simulation Run. If not set follow the Workspace setting
 * @member {Boolean} sendInputParametersToDataWarehouse
 */
ScenarioRun.prototype['sendInputParametersToDataWarehouse'] = undefined;

/**
 * the node label request
 * @member {String} nodeLabel
 */
ScenarioRun.prototype['nodeLabel'] = undefined;

/**
 * the containers list. This information is not returned by the API.
 * @member {Array.<module:model/ScenarioRunContainer>} containers
 */
ScenarioRun.prototype['containers'] = undefined;






export default ScenarioRun;

