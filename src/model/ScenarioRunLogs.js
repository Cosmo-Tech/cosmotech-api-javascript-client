/**
 * Cosmo Tech Platform API
 * Cosmo Tech Platform API
 *
 * The version of the OpenAPI document: 3.0.0-dev
 * Contact: platform@cosmotech.com
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 *
 */

import ApiClient from '../ApiClient';
import ScenarioRunContainerLogs from './ScenarioRunContainerLogs';

/**
 * The ScenarioRunLogs model module.
 * @module model/ScenarioRunLogs
 * @version 3.0.0-dev
 */
class ScenarioRunLogs {
    /**
     * Constructs a new <code>ScenarioRunLogs</code>.
     * the scenariorun logs returned by all containers
     * @alias module:model/ScenarioRunLogs
     */
    constructor() { 
        
        ScenarioRunLogs.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>ScenarioRunLogs</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/ScenarioRunLogs} obj Optional instance to populate.
     * @return {module:model/ScenarioRunLogs} The populated <code>ScenarioRunLogs</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new ScenarioRunLogs();

            if (data.hasOwnProperty('scenariorunId')) {
                obj['scenariorunId'] = ApiClient.convertToType(data['scenariorunId'], 'String');
            }
            if (data.hasOwnProperty('containers')) {
                obj['containers'] = ApiClient.convertToType(data['containers'], {'String': ScenarioRunContainerLogs});
            }
        }
        return obj;
    }


}

/**
 * the ScenarioRun Id
 * @member {String} scenariorunId
 */
ScenarioRunLogs.prototype['scenariorunId'] = undefined;

/**
 * the container map of logs
 * @member {Object.<String, module:model/ScenarioRunContainerLogs>} containers
 */
ScenarioRunLogs.prototype['containers'] = undefined;






export default ScenarioRunLogs;

