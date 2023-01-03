/**
 * Cosmo Tech Plaform API
 * Cosmo Tech Platform API
 *
 * The version of the OpenAPI document: 1.1.1-SNAPSHOT
 * Contact: platform@cosmotech.com
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 *
 */

import ApiClient from '../ApiClient';

/**
 * The ScenarioRunContainerLogs model module.
 * @module model/ScenarioRunContainerLogs
 * @version 1.1.1-SNAPSHOT
 */
class ScenarioRunContainerLogs {
    /**
     * Constructs a new <code>ScenarioRunContainerLogs</code>.
     * logs for a given container
     * @alias module:model/ScenarioRunContainerLogs
     */
    constructor() { 
        
        ScenarioRunContainerLogs.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>ScenarioRunContainerLogs</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/ScenarioRunContainerLogs} obj Optional instance to populate.
     * @return {module:model/ScenarioRunContainerLogs} The populated <code>ScenarioRunContainerLogs</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new ScenarioRunContainerLogs();

            if (data.hasOwnProperty('nodeId')) {
                obj['nodeId'] = ApiClient.convertToType(data['nodeId'], 'String');
            }
            if (data.hasOwnProperty('containerName')) {
                obj['containerName'] = ApiClient.convertToType(data['containerName'], 'String');
            }
            if (data.hasOwnProperty('children')) {
                obj['children'] = ApiClient.convertToType(data['children'], ['String']);
            }
            if (data.hasOwnProperty('logs')) {
                obj['logs'] = ApiClient.convertToType(data['logs'], 'String');
            }
        }
        return obj;
    }


}

/**
 * the node Id which has executed this log
 * @member {String} nodeId
 */
ScenarioRunContainerLogs.prototype['nodeId'] = undefined;

/**
 * the container name
 * @member {String} containerName
 */
ScenarioRunContainerLogs.prototype['containerName'] = undefined;

/**
 * the list of children node id
 * @member {Array.<String>} children
 */
ScenarioRunContainerLogs.prototype['children'] = undefined;

/**
 * the node logs in plain text
 * @member {String} logs
 */
ScenarioRunContainerLogs.prototype['logs'] = undefined;






export default ScenarioRunContainerLogs;

