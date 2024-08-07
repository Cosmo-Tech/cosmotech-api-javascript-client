/**
 * Cosmo Tech Platform API
 * Cosmo Tech Platform API
 *
 * The version of the OpenAPI document: 3.2.8
 * Contact: platform@cosmotech.com
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 *
 */

import ApiClient from '../ApiClient';
import ScenarioRunResourceRequested from './ScenarioRunResourceRequested';

/**
 * The ScenarioRunStatusNode model module.
 * @module model/ScenarioRunStatusNode
 * @version 3.2.8
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
            if (data.hasOwnProperty('outboundNodes')) {
                obj['outboundNodes'] = ApiClient.convertToType(data['outboundNodes'], ['String']);
            }
            if (data.hasOwnProperty('resourcesDuration')) {
                obj['resourcesDuration'] = ScenarioRunResourceRequested.constructFromObject(data['resourcesDuration']);
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

    /**
     * Validates the JSON data with respect to <code>ScenarioRunStatusNode</code>.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @return {boolean} to indicate whether the JSON data is valid with respect to <code>ScenarioRunStatusNode</code>.
     */
    static validateJSON(data) {
        // ensure the json data is a string
        if (data['id'] && !(typeof data['id'] === 'string' || data['id'] instanceof String)) {
            throw new Error("Expected the field `id` to be a primitive type in the JSON string but got " + data['id']);
        }
        // ensure the json data is a string
        if (data['name'] && !(typeof data['name'] === 'string' || data['name'] instanceof String)) {
            throw new Error("Expected the field `name` to be a primitive type in the JSON string but got " + data['name']);
        }
        // ensure the json data is a string
        if (data['containerName'] && !(typeof data['containerName'] === 'string' || data['containerName'] instanceof String)) {
            throw new Error("Expected the field `containerName` to be a primitive type in the JSON string but got " + data['containerName']);
        }
        // ensure the json data is an array
        if (!Array.isArray(data['outboundNodes'])) {
            throw new Error("Expected the field `outboundNodes` to be an array in the JSON data but got " + data['outboundNodes']);
        }
        // validate the optional field `resourcesDuration`
        if (data['resourcesDuration']) { // data not null
          ScenarioRunResourceRequested.validateJSON(data['resourcesDuration']);
        }
        // ensure the json data is a string
        if (data['hostNodeName'] && !(typeof data['hostNodeName'] === 'string' || data['hostNodeName'] instanceof String)) {
            throw new Error("Expected the field `hostNodeName` to be a primitive type in the JSON string but got " + data['hostNodeName']);
        }
        // ensure the json data is a string
        if (data['message'] && !(typeof data['message'] === 'string' || data['message'] instanceof String)) {
            throw new Error("Expected the field `message` to be a primitive type in the JSON string but got " + data['message']);
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
        if (data['startTime'] && !(typeof data['startTime'] === 'string' || data['startTime'] instanceof String)) {
            throw new Error("Expected the field `startTime` to be a primitive type in the JSON string but got " + data['startTime']);
        }
        // ensure the json data is a string
        if (data['endTime'] && !(typeof data['endTime'] === 'string' || data['endTime'] instanceof String)) {
            throw new Error("Expected the field `endTime` to be a primitive type in the JSON string but got " + data['endTime']);
        }

        return true;
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
 * the list of outbound nodes
 * @member {Array.<String>} outboundNodes
 */
ScenarioRunStatusNode.prototype['outboundNodes'] = undefined;

/**
 * @member {module:model/ScenarioRunResourceRequested} resourcesDuration
 */
ScenarioRunStatusNode.prototype['resourcesDuration'] = undefined;

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

