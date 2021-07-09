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

/**
 * The ScenarioRunStatusNode model module.
 * @module model/ScenarioRunStatusNode
 * @version 0.0.4-SNAPSHOT
 */
class ScenarioRunStatusNode {
    /**
     * Constructs a new <code>ScenarioRunStatusNode</code>.
     * status of a ScenarioRun Node
     * @alias module:model/ScenarioRunStatusNode
     */
    constructor() { 
        
        ScenarioRunStatusNode.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>ScenarioRunStatusNode</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/ScenarioRunStatusNode} obj Optional instance to populate.
     * @return {module:model/ScenarioRunStatusNode} The populated <code>ScenarioRunStatusNode</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new ScenarioRunStatusNode();

            if (data.hasOwnProperty('id')) {
                obj['id'] = ApiClient.convertToType(data['id'], 'String');
            }
            if (data.hasOwnProperty('name')) {
                obj['name'] = ApiClient.convertToType(data['name'], 'String');
            }
            if (data.hasOwnProperty('containerName')) {
                obj['containerName'] = ApiClient.convertToType(data['containerName'], 'String');
            }
            if (data.hasOwnProperty('estimatedDuration')) {
                obj['estimatedDuration'] = ApiClient.convertToType(data['estimatedDuration'], 'Number');
            }
            if (data.hasOwnProperty('hostNodeName')) {
                obj['hostNodeName'] = ApiClient.convertToType(data['hostNodeName'], 'String');
            }
            if (data.hasOwnProperty('message')) {
                obj['message'] = ApiClient.convertToType(data['message'], 'String');
            }
            if (data.hasOwnProperty('phase')) {
                obj['phase'] = ApiClient.convertToType(data['phase'], 'String');
            }
            if (data.hasOwnProperty('progress')) {
                obj['progress'] = ApiClient.convertToType(data['progress'], 'String');
            }
            if (data.hasOwnProperty('startTime')) {
                obj['startTime'] = ApiClient.convertToType(data['startTime'], 'String');
            }
            if (data.hasOwnProperty('endTime')) {
                obj['endTime'] = ApiClient.convertToType(data['endTime'], 'String');
            }
        }
        return obj;
    }


}

/**
 * the node id
 * @member {String} id
 */
ScenarioRunStatusNode.prototype['id'] = undefined;

/**
 * the node unique name
 * @member {String} name
 */
ScenarioRunStatusNode.prototype['name'] = undefined;

/**
 * the ScenarioRun container name
 * @member {String} containerName
 */
ScenarioRunStatusNode.prototype['containerName'] = undefined;

/**
 * estimatedDuration in seconds
 * @member {Number} estimatedDuration
 */
ScenarioRunStatusNode.prototype['estimatedDuration'] = undefined;

/**
 * HostNodeName name of the Kubernetes node on which the Pod is running, if applicable
 * @member {String} hostNodeName
 */
ScenarioRunStatusNode.prototype['hostNodeName'] = undefined;

/**
 * a human readable message indicating details about why the node is in this condition
 * @member {String} message
 */
ScenarioRunStatusNode.prototype['message'] = undefined;

/**
 * high-level summary of where the node is in its lifecycle
 * @member {String} phase
 */
ScenarioRunStatusNode.prototype['phase'] = undefined;

/**
 * progress to completion
 * @member {String} progress
 */
ScenarioRunStatusNode.prototype['progress'] = undefined;

/**
 * the node start time
 * @member {String} startTime
 */
ScenarioRunStatusNode.prototype['startTime'] = undefined;

/**
 * the node end time
 * @member {String} endTime
 */
ScenarioRunStatusNode.prototype['endTime'] = undefined;






export default ScenarioRunStatusNode;
