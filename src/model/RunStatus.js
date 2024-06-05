/**
 * Cosmo Tech Platform API
 * Cosmo Tech Platform API
 *
 * The version of the OpenAPI document: 3.1.9
 * Contact: platform@cosmotech.com
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 *
 */

import ApiClient from '../ApiClient';
import RunState from './RunState';
import RunStatusNode from './RunStatusNode';

/**
 * The RunStatus model module.
 * @module model/RunStatus
 * @version 3.1.9
 */
class RunStatus {
    /**
     * Constructs a new <code>RunStatus</code>.
     * a Run status
     * @alias module:model/RunStatus
     */
    constructor() { 
        
        RunStatus.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>RunStatus</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/RunStatus} obj Optional instance to populate.
     * @return {module:model/RunStatus} The populated <code>RunStatus</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new RunStatus();

            if (data.hasOwnProperty('id')) {
                obj['id'] = ApiClient.convertToType(data['id'], 'String');
            }
            if (data.hasOwnProperty('organizationId')) {
                obj['organizationId'] = ApiClient.convertToType(data['organizationId'], 'String');
            }
            if (data.hasOwnProperty('workspaceId')) {
                obj['workspaceId'] = ApiClient.convertToType(data['workspaceId'], 'String');
            }
            if (data.hasOwnProperty('runnerId')) {
                obj['runnerId'] = ApiClient.convertToType(data['runnerId'], 'String');
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
                obj['nodes'] = ApiClient.convertToType(data['nodes'], [RunStatusNode]);
            }
            if (data.hasOwnProperty('state')) {
                obj['state'] = RunState.constructFromObject(data['state']);
            }
        }
        return obj;
    }


}

/**
 * the Run id
 * @member {String} id
 */
RunStatus.prototype['id'] = undefined;

/**
 * the Organization id
 * @member {String} organizationId
 */
RunStatus.prototype['organizationId'] = undefined;

/**
 * the Workspace id
 * @member {String} workspaceId
 */
RunStatus.prototype['workspaceId'] = undefined;

/**
 * the Runner id
 * @member {String} runnerId
 */
RunStatus.prototype['runnerId'] = undefined;

/**
 * the Cosmo Tech compute cluster Argo Workflow Id to search
 * @member {String} workflowId
 */
RunStatus.prototype['workflowId'] = undefined;

/**
 * the Cosmo Tech compute cluster Argo Workflow Name
 * @member {String} workflowName
 */
RunStatus.prototype['workflowName'] = undefined;

/**
 * the Run start Date Time
 * @member {String} startTime
 */
RunStatus.prototype['startTime'] = undefined;

/**
 * the Run end Date Time
 * @member {String} endTime
 */
RunStatus.prototype['endTime'] = undefined;

/**
 * high-level summary of where the workflow is in its lifecycle
 * @member {String} phase
 */
RunStatus.prototype['phase'] = undefined;

/**
 * progress to completion
 * @member {String} progress
 */
RunStatus.prototype['progress'] = undefined;

/**
 * a  human readable message indicating details about why the workflow is in this condition
 * @member {String} message
 */
RunStatus.prototype['message'] = undefined;

/**
 * estimatedDuration in seconds
 * @member {Number} estimatedDuration
 */
RunStatus.prototype['estimatedDuration'] = undefined;

/**
 * status of Run nodes
 * @member {Array.<module:model/RunStatusNode>} nodes
 */
RunStatus.prototype['nodes'] = undefined;

/**
 * @member {module:model/RunState} state
 */
RunStatus.prototype['state'] = undefined;






export default RunStatus;

