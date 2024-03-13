/**
 * Cosmo Tech Platform API
 * Cosmo Tech Platform API
 *
 * The version of the OpenAPI document: 3.1.1
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
 * @version 3.1.1
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

