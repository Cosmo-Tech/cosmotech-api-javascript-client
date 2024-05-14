/**
 * Cosmo Tech Platform API
 * Cosmo Tech Platform API
 *
 * The version of the OpenAPI document: 3.2.0
 * Contact: platform@cosmotech.com
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 *
 */

import ApiClient from '../ApiClient';

/**
 * The RunnerRunTemplateParameterValue model module.
 * @module model/RunnerRunTemplateParameterValue
 * @version 3.2.0
 */
class RunnerRunTemplateParameterValue {
    /**
     * Constructs a new <code>RunnerRunTemplateParameterValue</code>.
     * the value of a Solution Run Template parameter for a Runner
     * @alias module:model/RunnerRunTemplateParameterValue
     * @param parameterId {String} the parameter Id
     * @param value {String} the parameter value
     */
    constructor(parameterId, value) { 
        
        RunnerRunTemplateParameterValue.initialize(this, parameterId, value);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj, parameterId, value) { 
        obj['parameterId'] = parameterId;
        obj['value'] = value;
    }

    /**
     * Constructs a <code>RunnerRunTemplateParameterValue</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/RunnerRunTemplateParameterValue} obj Optional instance to populate.
     * @return {module:model/RunnerRunTemplateParameterValue} The populated <code>RunnerRunTemplateParameterValue</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new RunnerRunTemplateParameterValue();

            if (data.hasOwnProperty('parameterId')) {
                obj['parameterId'] = ApiClient.convertToType(data['parameterId'], 'String');
            }
            if (data.hasOwnProperty('varType')) {
                obj['varType'] = ApiClient.convertToType(data['varType'], 'String');
            }
            if (data.hasOwnProperty('value')) {
                obj['value'] = ApiClient.convertToType(data['value'], 'String');
            }
            if (data.hasOwnProperty('isInherited')) {
                obj['isInherited'] = ApiClient.convertToType(data['isInherited'], 'Boolean');
            }
        }
        return obj;
    }

    /**
     * Validates the JSON data with respect to <code>RunnerRunTemplateParameterValue</code>.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @return {boolean} to indicate whether the JSON data is valid with respect to <code>RunnerRunTemplateParameterValue</code>.
     */
    static validateJSON(data) {
        // check to make sure all required properties are present in the JSON string
        for (const property of RunnerRunTemplateParameterValue.RequiredProperties) {
            if (!data.hasOwnProperty(property)) {
                throw new Error("The required field `" + property + "` is not found in the JSON data: " + JSON.stringify(data));
            }
        }
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

        return true;
    }


}

RunnerRunTemplateParameterValue.RequiredProperties = ["parameterId", "value"];

/**
 * the parameter Id
 * @member {String} parameterId
 */
RunnerRunTemplateParameterValue.prototype['parameterId'] = undefined;

/**
 * the parameter value type
 * @member {String} varType
 */
RunnerRunTemplateParameterValue.prototype['varType'] = undefined;

/**
 * the parameter value
 * @member {String} value
 */
RunnerRunTemplateParameterValue.prototype['value'] = undefined;

/**
 * whether or not the value is inherited from parent or has been changed
 * @member {Boolean} isInherited
 */
RunnerRunTemplateParameterValue.prototype['isInherited'] = undefined;






export default RunnerRunTemplateParameterValue;

