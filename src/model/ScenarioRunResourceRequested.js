/**
 * Cosmo Tech Platform API
 * Cosmo Tech Platform API
 *
 * The version of the OpenAPI document: 3.0.9-SNAPSHOT
 * Contact: platform@cosmotech.com
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 *
 */

import ApiClient from '../ApiClient';

/**
 * The ScenarioRunResourceRequested model module.
 * @module model/ScenarioRunResourceRequested
 * @version 3.0.9-SNAPSHOT
 */
class ScenarioRunResourceRequested {
    /**
     * Constructs a new <code>ScenarioRunResourceRequested</code>.
     * the memory and CPU requested by the pod
     * @alias module:model/ScenarioRunResourceRequested
     */
    constructor() { 
        
        ScenarioRunResourceRequested.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>ScenarioRunResourceRequested</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/ScenarioRunResourceRequested} obj Optional instance to populate.
     * @return {module:model/ScenarioRunResourceRequested} The populated <code>ScenarioRunResourceRequested</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new ScenarioRunResourceRequested();

            if (data.hasOwnProperty('cpu')) {
                obj['cpu'] = ApiClient.convertToType(data['cpu'], 'Number');
            }
            if (data.hasOwnProperty('memory')) {
                obj['memory'] = ApiClient.convertToType(data['memory'], 'Number');
            }
        }
        return obj;
    }


}

/**
 * the cpu requested
 * @member {Number} cpu
 */
ScenarioRunResourceRequested.prototype['cpu'] = undefined;

/**
 * the memory requested
 * @member {Number} memory
 */
ScenarioRunResourceRequested.prototype['memory'] = undefined;






export default ScenarioRunResourceRequested;

