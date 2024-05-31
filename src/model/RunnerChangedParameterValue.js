/**
 * Cosmo Tech Platform API
 * Cosmo Tech Platform API
 *
 * The version of the OpenAPI document: 3.1.8
 * Contact: platform@cosmotech.com
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 *
 */

import ApiClient from '../ApiClient';

/**
 * The RunnerChangedParameterValue model module.
 * @module model/RunnerChangedParameterValue
 * @version 3.1.8
 */
class RunnerChangedParameterValue {
    /**
     * Constructs a new <code>RunnerChangedParameterValue</code>.
     * the difference between the values of a parameter
     * @alias module:model/RunnerChangedParameterValue
     */
    constructor() { 
        
        RunnerChangedParameterValue.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>RunnerChangedParameterValue</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/RunnerChangedParameterValue} obj Optional instance to populate.
     * @return {module:model/RunnerChangedParameterValue} The populated <code>RunnerChangedParameterValue</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new RunnerChangedParameterValue();

            if (data.hasOwnProperty('parameterId')) {
                obj['parameterId'] = ApiClient.convertToType(data['parameterId'], 'String');
            }
            if (data.hasOwnProperty('varType')) {
                obj['varType'] = ApiClient.convertToType(data['varType'], 'String');
            }
            if (data.hasOwnProperty('value')) {
                obj['value'] = ApiClient.convertToType(data['value'], 'String');
            }
            if (data.hasOwnProperty('comparedValue')) {
                obj['comparedValue'] = ApiClient.convertToType(data['comparedValue'], 'String');
            }
        }
        return obj;
    }


}

/**
 * the parameter id the values refer to
 * @member {String} parameterId
 */
RunnerChangedParameterValue.prototype['parameterId'] = undefined;

/**
 * the parameter value type
 * @member {String} varType
 */
RunnerChangedParameterValue.prototype['varType'] = undefined;

/**
 * the parameter value for the reference Runner
 * @member {String} value
 */
RunnerChangedParameterValue.prototype['value'] = undefined;

/**
 * the parameter value for the compared Runner
 * @member {String} comparedValue
 */
RunnerChangedParameterValue.prototype['comparedValue'] = undefined;






export default RunnerChangedParameterValue;

