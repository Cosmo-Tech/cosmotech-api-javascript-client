/**
 * Cosmo Tech Platform API
 * Cosmo Tech Platform API
 *
 * The version of the OpenAPI document: 3.2.8
 * Contact: platform@cosmotech.com
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 *
 */

import ApiClient from '../ApiClient';

/**
 * The RunTemplateParameterValue model module.
 * @module model/RunTemplateParameterValue
 * @version 3.2.8
 */
class RunTemplateParameterValue {
    /**
     * Constructs a new <code>RunTemplateParameterValue</code>.
     * the value of Analysis parameter for a Runner for this Run
     * @alias module:model/RunTemplateParameterValue
     * @param parameterId {String} the parameter Id
     * @param value {String} the parameter value
     */
    constructor(parameterId, value) { 
        
        RunTemplateParameterValue.initialize(this, parameterId, value);
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
     * Constructs a <code>RunTemplateParameterValue</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/RunTemplateParameterValue} obj Optional instance to populate.
     * @return {module:model/RunTemplateParameterValue} The populated <code>RunTemplateParameterValue</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new RunTemplateParameterValue();

            if (data.hasOwnProperty('parameterId')) {
                obj['parameterId'] = ApiClient.convertToType(data['parameterId'], 'String');
            }
            if (data.hasOwnProperty('varType')) {
                obj['varType'] = ApiClient.convertToType(data['varType'], 'String');
            }
            if (data.hasOwnProperty('value')) {
                obj['value'] = ApiClient.convertToType(data['value'], 'String');
            }
        }
        return obj;
    }

    /**
     * Validates the JSON data with respect to <code>RunTemplateParameterValue</code>.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @return {boolean} to indicate whether the JSON data is valid with respect to <code>RunTemplateParameterValue</code>.
     */
    static validateJSON(data) {
        // check to make sure all required properties are present in the JSON string
        for (const property of RunTemplateParameterValue.RequiredProperties) {
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

RunTemplateParameterValue.RequiredProperties = ["parameterId", "value"];

/**
 * the parameter Id
 * @member {String} parameterId
 */
RunTemplateParameterValue.prototype['parameterId'] = undefined;

/**
 * the parameter value type
 * @member {String} varType
 */
RunTemplateParameterValue.prototype['varType'] = undefined;

/**
 * the parameter value
 * @member {String} value
 */
RunTemplateParameterValue.prototype['value'] = undefined;






export default RunTemplateParameterValue;

