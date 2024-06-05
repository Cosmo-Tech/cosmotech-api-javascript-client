/**
 * Cosmo Tech Platform API
 * Cosmo Tech Platform API
 *
 * The version of the OpenAPI document: 3.2.5
 * Contact: platform@cosmotech.com
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 *
 */

import ApiClient from '../ApiClient';
import ScenarioRunSearchState from './ScenarioRunSearchState';

/**
 * The ScenarioRunSearch model module.
 * @module model/ScenarioRunSearch
 * @version 3.2.5
 */
class ScenarioRunSearch {
    /**
     * Constructs a new <code>ScenarioRunSearch</code>.
     * the search options
     * @alias module:model/ScenarioRunSearch
     */
    constructor() { 
        
        ScenarioRunSearch.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>ScenarioRunSearch</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/ScenarioRunSearch} obj Optional instance to populate.
     * @return {module:model/ScenarioRunSearch} The populated <code>ScenarioRunSearch</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new ScenarioRunSearch();

            if (data.hasOwnProperty('solutionId')) {
                obj['solutionId'] = ApiClient.convertToType(data['solutionId'], 'String');
            }
            if (data.hasOwnProperty('runTemplateId')) {
                obj['runTemplateId'] = ApiClient.convertToType(data['runTemplateId'], 'String');
            }
            if (data.hasOwnProperty('workspaceId')) {
                obj['workspaceId'] = ApiClient.convertToType(data['workspaceId'], 'String');
            }
            if (data.hasOwnProperty('scenarioId')) {
                obj['scenarioId'] = ApiClient.convertToType(data['scenarioId'], 'String');
            }
            if (data.hasOwnProperty('state')) {
                obj['state'] = ScenarioRunSearchState.constructFromObject(data['state']);
            }
            if (data.hasOwnProperty('workflowId')) {
                obj['workflowId'] = ApiClient.convertToType(data['workflowId'], 'String');
            }
            if (data.hasOwnProperty('workflowName')) {
                obj['workflowName'] = ApiClient.convertToType(data['workflowName'], 'String');
            }
            if (data.hasOwnProperty('ownerId')) {
                obj['ownerId'] = ApiClient.convertToType(data['ownerId'], 'String');
            }
        }
        return obj;
    }

    /**
     * Validates the JSON data with respect to <code>ScenarioRunSearch</code>.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @return {boolean} to indicate whether the JSON data is valid with respect to <code>ScenarioRunSearch</code>.
     */
    static validateJSON(data) {
        // ensure the json data is a string
        if (data['solutionId'] && !(typeof data['solutionId'] === 'string' || data['solutionId'] instanceof String)) {
            throw new Error("Expected the field `solutionId` to be a primitive type in the JSON string but got " + data['solutionId']);
        }
        // ensure the json data is a string
        if (data['runTemplateId'] && !(typeof data['runTemplateId'] === 'string' || data['runTemplateId'] instanceof String)) {
            throw new Error("Expected the field `runTemplateId` to be a primitive type in the JSON string but got " + data['runTemplateId']);
        }
        // ensure the json data is a string
        if (data['workspaceId'] && !(typeof data['workspaceId'] === 'string' || data['workspaceId'] instanceof String)) {
            throw new Error("Expected the field `workspaceId` to be a primitive type in the JSON string but got " + data['workspaceId']);
        }
        // ensure the json data is a string
        if (data['scenarioId'] && !(typeof data['scenarioId'] === 'string' || data['scenarioId'] instanceof String)) {
            throw new Error("Expected the field `scenarioId` to be a primitive type in the JSON string but got " + data['scenarioId']);
        }
        // ensure the json data is a string
        if (data['workflowId'] && !(typeof data['workflowId'] === 'string' || data['workflowId'] instanceof String)) {
            throw new Error("Expected the field `workflowId` to be a primitive type in the JSON string but got " + data['workflowId']);
        }
        // ensure the json data is a string
        if (data['workflowName'] && !(typeof data['workflowName'] === 'string' || data['workflowName'] instanceof String)) {
            throw new Error("Expected the field `workflowName` to be a primitive type in the JSON string but got " + data['workflowName']);
        }
        // ensure the json data is a string
        if (data['ownerId'] && !(typeof data['ownerId'] === 'string' || data['ownerId'] instanceof String)) {
            throw new Error("Expected the field `ownerId` to be a primitive type in the JSON string but got " + data['ownerId']);
        }

        return true;
    }


}



/**
 * the Solution Id to search
 * @member {String} solutionId
 */
ScenarioRunSearch.prototype['solutionId'] = undefined;

/**
 * the Solution Analysis Id to search
 * @member {String} runTemplateId
 */
ScenarioRunSearch.prototype['runTemplateId'] = undefined;

/**
 * the Workspace Id to search
 * @member {String} workspaceId
 */
ScenarioRunSearch.prototype['workspaceId'] = undefined;

/**
 * the Scenario Id to search
 * @member {String} scenarioId
 */
ScenarioRunSearch.prototype['scenarioId'] = undefined;

/**
 * @member {module:model/ScenarioRunSearchState} state
 */
ScenarioRunSearch.prototype['state'] = undefined;

/**
 * the Cosmo Tech compute cluster Argo Workflow Id to search
 * @member {String} workflowId
 */
ScenarioRunSearch.prototype['workflowId'] = undefined;

/**
 * the Cosmo Tech compute cluster Argo Workflow Name
 * @member {String} workflowName
 */
ScenarioRunSearch.prototype['workflowName'] = undefined;

/**
 * the owner Id to search
 * @member {String} ownerId
 */
ScenarioRunSearch.prototype['ownerId'] = undefined;






export default ScenarioRunSearch;

