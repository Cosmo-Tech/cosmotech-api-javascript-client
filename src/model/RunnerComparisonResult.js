/**
 * Cosmo Tech Platform API
 * Cosmo Tech Platform API
 *
 * The version of the OpenAPI document: 4.0.3-SNAPSHOT
 * Contact: platform@cosmotech.com
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 *
 */

import ApiClient from '../ApiClient';
import RunnerChangedParameterValue from './RunnerChangedParameterValue';

/**
 * The RunnerComparisonResult model module.
 * @module model/RunnerComparisonResult
 * @version 4.0.3-SNAPSHOT
 */
class RunnerComparisonResult {
    /**
     * Constructs a new <code>RunnerComparisonResult</code>.
     * the result of the comparison of two runners
     * @alias module:model/RunnerComparisonResult
     */
    constructor() { 
        
        RunnerComparisonResult.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>RunnerComparisonResult</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/RunnerComparisonResult} obj Optional instance to populate.
     * @return {module:model/RunnerComparisonResult} The populated <code>RunnerComparisonResult</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new RunnerComparisonResult();

            if (data.hasOwnProperty('runnerId')) {
                obj['runnerId'] = ApiClient.convertToType(data['runnerId'], 'String');
            }
            if (data.hasOwnProperty('comparedRunnerId')) {
                obj['comparedRunnerId'] = ApiClient.convertToType(data['comparedRunnerId'], 'String');
            }
            if (data.hasOwnProperty('changedValues')) {
                obj['changedValues'] = ApiClient.convertToType(data['changedValues'], [RunnerChangedParameterValue]);
            }
        }
        return obj;
    }

    /**
     * Validates the JSON data with respect to <code>RunnerComparisonResult</code>.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @return {boolean} to indicate whether the JSON data is valid with respect to <code>RunnerComparisonResult</code>.
     */
    static validateJSON(data) {
        // ensure the json data is a string
        if (data['runnerId'] && !(typeof data['runnerId'] === 'string' || data['runnerId'] instanceof String)) {
            throw new Error("Expected the field `runnerId` to be a primitive type in the JSON string but got " + data['runnerId']);
        }
        // ensure the json data is a string
        if (data['comparedRunnerId'] && !(typeof data['comparedRunnerId'] === 'string' || data['comparedRunnerId'] instanceof String)) {
            throw new Error("Expected the field `comparedRunnerId` to be a primitive type in the JSON string but got " + data['comparedRunnerId']);
        }
        if (data['changedValues']) { // data not null
            // ensure the json data is an array
            if (!Array.isArray(data['changedValues'])) {
                throw new Error("Expected the field `changedValues` to be an array in the JSON data but got " + data['changedValues']);
            }
            // validate the optional field `changedValues` (array)
            for (const item of data['changedValues']) {
                RunnerChangedParameterValue.validateJSON(item);
            };
        }

        return true;
    }


}



/**
 * the Runner Id which is the reference for the comparison
 * @member {String} runnerId
 */
RunnerComparisonResult.prototype['runnerId'] = undefined;

/**
 * the Runner Id the reference Runner is compared to
 * @member {String} comparedRunnerId
 */
RunnerComparisonResult.prototype['comparedRunnerId'] = undefined;

/**
 * the list of changed values for parameters
 * @member {Array.<module:model/RunnerChangedParameterValue>} changedValues
 */
RunnerComparisonResult.prototype['changedValues'] = undefined;






export default RunnerComparisonResult;

