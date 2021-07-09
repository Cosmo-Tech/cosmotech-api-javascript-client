/**
 * Cosmo Tech Plaform API
 * Cosmo Tech Platform API
 *
 * The version of the OpenAPI document: 0.0.4-SNAPSHOT
 * 
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 *
 */

import ApiClient from '../ApiClient';
import ScenarioRunStatusNode from './ScenarioRunStatusNode';

/**
 * The ScenarioRunStatus model module.
 * @module model/ScenarioRunStatus
 * @version 0.0.4-SNAPSHOT
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
        }
        return obj;
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






export default ScenarioRunStatus;
