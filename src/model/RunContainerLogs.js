/**
 * Cosmo Tech Platform API
 * Cosmo Tech Platform API
 *
 * The version of the OpenAPI document: 3.1.2-dev
 * Contact: platform@cosmotech.com
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 *
 */

import ApiClient from '../ApiClient';

/**
 * The RunContainerLogs model module.
 * @module model/RunContainerLogs
 * @version 3.1.2-dev
 */
class RunContainerLogs {
    /**
     * Constructs a new <code>RunContainerLogs</code>.
     * logs for a given container
     * @alias module:model/RunContainerLogs
     */
    constructor() { 
        
        RunContainerLogs.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>RunContainerLogs</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/RunContainerLogs} obj Optional instance to populate.
     * @return {module:model/RunContainerLogs} The populated <code>RunContainerLogs</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new RunContainerLogs();

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
RunContainerLogs.prototype['nodeId'] = undefined;

/**
 * the container name
 * @member {String} containerName
 */
RunContainerLogs.prototype['containerName'] = undefined;

/**
 * the list of children node id
 * @member {Array.<String>} children
 */
RunContainerLogs.prototype['children'] = undefined;

/**
 * the node logs in plain text
 * @member {String} logs
 */
RunContainerLogs.prototype['logs'] = undefined;






export default RunContainerLogs;

