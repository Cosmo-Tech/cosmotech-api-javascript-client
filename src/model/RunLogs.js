/**
 * Cosmo Tech Platform API
 * Cosmo Tech Platform API
 *
 * The version of the OpenAPI document: 3.1.2
 * Contact: platform@cosmotech.com
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 *
 */

import ApiClient from '../ApiClient';
import RunContainerLogs from './RunContainerLogs';

/**
 * The RunLogs model module.
 * @module model/RunLogs
 * @version 3.1.2
 */
class RunLogs {
    /**
     * Constructs a new <code>RunLogs</code>.
     * the run logs returned by all containers
     * @alias module:model/RunLogs
     */
    constructor() { 
        
        RunLogs.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>RunLogs</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/RunLogs} obj Optional instance to populate.
     * @return {module:model/RunLogs} The populated <code>RunLogs</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new RunLogs();

            if (data.hasOwnProperty('runId')) {
                obj['runId'] = ApiClient.convertToType(data['runId'], 'String');
            }
            if (data.hasOwnProperty('containers')) {
                obj['containers'] = ApiClient.convertToType(data['containers'], {'String': RunContainerLogs});
            }
        }
        return obj;
    }


}

/**
 * the Run Id
 * @member {String} runId
 */
RunLogs.prototype['runId'] = undefined;

/**
 * the container map of logs
 * @member {Object.<String, module:model/RunContainerLogs>} containers
 */
RunLogs.prototype['containers'] = undefined;






export default RunLogs;

