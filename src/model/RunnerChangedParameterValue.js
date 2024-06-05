/**
 * Cosmo Tech Platform API
 * Cosmo Tech Platform API
 *
 * The version of the OpenAPI document: 3.2.5
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
 * @version 3.2.5
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

    /**
     * Validates the JSON data with respect to <code>RunnerChangedParameterValue</code>.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @return {boolean} to indicate whether the JSON data is valid with respect to <code>RunnerChangedParameterValue</code>.
     */
    static validateJSON(data) {
        // ensure the json data is a string
        if (data['parameterId'] && !(typeof data['parameterId'] === 'string' || data['parameterId'] instanceof String)) {
            throw new Error("Expected the field `parameterId` to be a primitive type in the JSON string but got " + data['parameterId']);
        }
        // ensure the json data is a string
        if (data['varType'] && !(typeof data['varType'] === 'string' || data['varType'] instanceof String)) {
            throw new Error("Expected the field `varType` to be a primitive type in the JSON string but got " + data['varType']);
        }
        // ensure the json data is a string
        if (data['value'] && !(typeof data['value'] === 'string' || data['value'] instanceof String)) {
            throw new Error("Expected the field `value` to be a primitive type in the JSON string but got " + data['value']);
        }
        // ensure the json data is a string
        if (data['comparedValue'] && !(typeof data['comparedValue'] === 'string' || data['comparedValue'] instanceof String)) {
            throw new Error("Expected the field `comparedValue` to be a primitive type in the JSON string but got " + data['comparedValue']);
        }

        return true;
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

