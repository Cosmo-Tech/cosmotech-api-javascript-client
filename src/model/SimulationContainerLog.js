/**
 * Cosmo Tech Plaform API
 * Cosmo Tech Platform API
 *
 * The version of the OpenAPI document: 0.0.1-SNAPSHOT
 * 
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 *
 */

import ApiClient from '../ApiClient';

/**
 * The SimulationContainerLog model module.
 * @module model/SimulationContainerLog
 * @version 0.0.1-SNAPSHOT
 */
class SimulationContainerLog {
    /**
     * Constructs a new <code>SimulationContainerLog</code>.
     * a container log line
     * @alias module:model/SimulationContainerLog
     */
    constructor() { 
        
        SimulationContainerLog.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>SimulationContainerLog</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/SimulationContainerLog} obj Optional instance to populate.
     * @return {module:model/SimulationContainerLog} The populated <code>SimulationContainerLog</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new SimulationContainerLog();

            if (data.hasOwnProperty('timeGenerated')) {
                obj['timeGenerated'] = ApiClient.convertToType(data['timeGenerated'], 'String');
            }
            if (data.hasOwnProperty('entrySource')) {
                obj['entrySource'] = ApiClient.convertToType(data['entrySource'], 'String');
            }
            if (data.hasOwnProperty('logEntry')) {
                obj['logEntry'] = ApiClient.convertToType(data['logEntry'], 'String');
            }
        }
        return obj;
    }


}

/**
 * date and time the record was created
 * @member {String} timeGenerated
 */
SimulationContainerLog.prototype['timeGenerated'] = undefined;

/**
 * source of the log line. Possible values are stdout or stderr
 * @member {String} entrySource
 */
SimulationContainerLog.prototype['entrySource'] = undefined;

/**
 * actual log line
 * @member {String} logEntry
 */
SimulationContainerLog.prototype['logEntry'] = undefined;






export default SimulationContainerLog;

