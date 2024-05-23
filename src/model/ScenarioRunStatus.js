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
import ScenarioRunState from './ScenarioRunState';
import ScenarioRunStatusNode from './ScenarioRunStatusNode';

/**
 * The ScenarioRunStatus model module.
 * @module model/ScenarioRunStatus
 * @version 3.2.2
 */
class ScenarioRunStatus {
    /**
     * Constructs a new <code>ScenarioRunStatus</code>.
     * a ScenarioRun status
     * @alias module:model/ScenarioRunStatus
     */
    constructor() { 
        
        ScenarioRunStatus.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>ScenarioRunStatus</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/ScenarioRunStatus} obj Optional instance to populate.
     * @return {module:model/ScenarioRunStatus} The populated <code>ScenarioRunStatus</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new ScenarioRunStatus();

            if (data.hasOwnProperty('id')) {
                obj['id'] = ApiClient.convertToType(data['id'], 'String');
            }
            if (data.hasOwnProperty('organizationId')) {
                obj['organizationId'] = ApiClient.convertToType(data['organizationId'], 'String');
            }
            if (data.hasOwnProperty('workflowId')) {
                obj['workflowId'] = ApiClient.convertToType(data['workflowId'], 'String');
            }
            if (data.hasOwnProperty('workflowName')) {
                obj['workflowName'] = ApiClient.convertToType(data['workflowName'], 'String');
            }
            if (data.hasOwnProperty('startTime')) {
                obj['startTime'] = ApiClient.convertToType(data['startTime'], 'String');
            }
            if (data.hasOwnProperty('endTime')) {
                obj['endTime'] = ApiClient.convertToType(data['endTime'], 'String');
            }
            if (data.hasOwnProperty('phase')) {
                obj['phase'] = ApiClient.convertToType(data['phase'], 'String');
            }
            if (data.hasOwnProperty('progress')) {
                obj['progress'] = ApiClient.convertToType(data['progress'], 'String');
            }
            if (data.hasOwnProperty('message')) {
                obj['message'] = ApiClient.convertToType(data['message'], 'String');
            }
            if (data.hasOwnProperty('estimatedDuration')) {
                obj['estimatedDuration'] = ApiClient.convertToType(data['estimatedDuration'], 'Number');
            }
            if (data.hasOwnProperty('nodes')) {
                obj['nodes'] = ApiClient.convertToType(data['nodes'], [ScenarioRunStatusNode]);
            }
            if (data.hasOwnProperty('state')) {
                obj['state'] = ScenarioRunState.constructFromObject(data['state']);
            }
        }
        return obj;
    }

    /**
     * Validates the JSON data with respect to <code>ScenarioRunStatus</code>.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @return {boolean} to indicate whether the JSON data is valid with respect to <code>ScenarioRunStatus</code>.
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
        if (data['workflowName'] && !(typeof data['workflowName'] === 'string' || data['workflowName'] instanceof String)) {
            throw new Error("Expected the field `workflowName` to be a primitive type in the JSON string but got " + data['workflowName']);
        }
        // ensure the json data is a string
        if (data['startTime'] && !(typeof data['startTime'] === 'string' || data['startTime'] instanceof String)) {
            throw new Error("Expected the field `startTime` to be a primitive type in the JSON string but got " + data['startTime']);
        }
        // ensure the json data is a string
        if (data['endTime'] && !(typeof data['endTime'] === 'string' || data['endTime'] instanceof String)) {
            throw new Error("Expected the field `endTime` to be a primitive type in the JSON string but got " + data['endTime']);
        }
        // ensure the json data is a string
        if (data['phase'] && !(typeof data['phase'] === 'string' || data['phase'] instanceof String)) {
            throw new Error("Expected the field `phase` to be a primitive type in the JSON string but got " + data['phase']);
        }
        // ensure the json data is a string
        if (data['progress'] && !(typeof data['progress'] === 'string' || data['progress'] instanceof String)) {
            throw new Error("Expected the field `progress` to be a primitive type in the JSON string but got " + data['progress']);
        }
        // ensure the json data is a string
        if (data['message'] && !(typeof data['message'] === 'string' || data['message'] instanceof String)) {
            throw new Error("Expected the field `message` to be a primitive type in the JSON string but got " + data['message']);
        }
        if (data['nodes']) { // data not null
            // ensure the json data is an array
            if (!Array.isArray(data['nodes'])) {
                throw new Error("Expected the field `nodes` to be an array in the JSON data but got " + data['nodes']);
            }
            // validate the optional field `nodes` (array)
            for (const item of data['nodes']) {
                ScenarioRunStatusNode.validateJSON(item);
            };
        }

        return true;
    }


}



/**
 * the ScenarioRun id
 * @member {String} id
 */
ScenarioRunStatus.prototype['id'] = undefined;

/**
 * the ScenarioRun id
 * @member {String} organizationId
 */
ScenarioRunStatus.prototype['organizationId'] = undefined;

/**
 * the Cosmo Tech compute cluster Argo Workflow Id to search
 * @member {String} workflowId
 */
ScenarioRunStatus.prototype['workflowId'] = undefined;

/**
 * the Cosmo Tech compute cluster Argo Workflow Name
 * @member {String} workflowName
 */
ScenarioRunStatus.prototype['workflowName'] = undefined;

/**
 * the ScenarioRun start Date Time
 * @member {String} startTime
 */
ScenarioRunStatus.prototype['startTime'] = undefined;

/**
 * the ScenarioRun end Date Time
 * @member {String} endTime
 */
ScenarioRunStatus.prototype['endTime'] = undefined;

/**
 * high-level summary of where the workflow is in its lifecycle
 * @member {String} phase
 */
ScenarioRunStatus.prototype['phase'] = undefined;

/**
 * progress to completion
 * @member {String} progress
 */
ScenarioRunStatus.prototype['progress'] = undefined;

/**
 * a  human readable message indicating details about why the workflow is in this condition
 * @member {String} message
 */
ScenarioRunStatus.prototype['message'] = undefined;

/**
 * estimatedDuration in seconds
 * @member {Number} estimatedDuration
 */
ScenarioRunStatus.prototype['estimatedDuration'] = undefined;

/**
 * status of ScenarioRun nodes
 * @member {Array.<module:model/ScenarioRunStatusNode>} nodes
 */
ScenarioRunStatus.prototype['nodes'] = undefined;

/**
 * @member {module:model/ScenarioRunState} state
 */
ScenarioRunStatus.prototype['state'] = undefined;






export default ScenarioRunStatus;

