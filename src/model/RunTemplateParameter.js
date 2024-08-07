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

/**
 * The RunTemplateParameter model module.
 * @module model/RunTemplateParameter
 * @version 4.0.3-SNAPSHOT
 */
class RunTemplateParameter {
    /**
     * Constructs a new <code>RunTemplateParameter</code>.
     * a Run Template Parameter
     * @alias module:model/RunTemplateParameter
     * @param id {String} the Parameter id
     */
    constructor(id) { 
        
        RunTemplateParameter.initialize(this, id);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj, id) { 
        obj['id'] = id;
    }

    /**
     * Constructs a <code>RunTemplateParameter</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/RunTemplateParameter} obj Optional instance to populate.
     * @return {module:model/RunTemplateParameter} The populated <code>RunTemplateParameter</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new RunTemplateParameter();

            if (data.hasOwnProperty('id')) {
                obj['id'] = ApiClient.convertToType(data['id'], 'String');
            }
            if (data.hasOwnProperty('labels')) {
                obj['labels'] = ApiClient.convertToType(data['labels'], {'String': 'String'});
            }
            if (data.hasOwnProperty('varType')) {
                obj['varType'] = ApiClient.convertToType(data['varType'], 'String');
            }
            if (data.hasOwnProperty('defaultValue')) {
                obj['defaultValue'] = ApiClient.convertToType(data['defaultValue'], 'String');
            }
            if (data.hasOwnProperty('minValue')) {
                obj['minValue'] = ApiClient.convertToType(data['minValue'], 'String');
            }
            if (data.hasOwnProperty('maxValue')) {
                obj['maxValue'] = ApiClient.convertToType(data['maxValue'], 'String');
            }
            if (data.hasOwnProperty('regexValidation')) {
                obj['regexValidation'] = ApiClient.convertToType(data['regexValidation'], 'String');
            }
            if (data.hasOwnProperty('options')) {
                obj['options'] = ApiClient.convertToType(data['options'], {'String': Object});
            }
        }
        return obj;
    }

    /**
     * Validates the JSON data with respect to <code>RunTemplateParameter</code>.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @return {boolean} to indicate whether the JSON data is valid with respect to <code>RunTemplateParameter</code>.
     */
    static validateJSON(data) {
        // check to make sure all required properties are present in the JSON string
        for (const property of RunTemplateParameter.RequiredProperties) {
            if (!data.hasOwnProperty(property)) {
                throw new Error("The required field `" + property + "` is not found in the JSON data: " + JSON.stringify(data));
            }
        }
        // ensure the json data is a string
        if (data['id'] && !(typeof data['id'] === 'string' || data['id'] instanceof String)) {
            throw new Error("Expected the field `id` to be a primitive type in the JSON string but got " + data['id']);
        }
        // ensure the json data is a string
        if (data['varType'] && !(typeof data['varType'] === 'string' || data['varType'] instanceof String)) {
            throw new Error("Expected the field `varType` to be a primitive type in the JSON string but got " + data['varType']);
        }
        // ensure the json data is a string
        if (data['defaultValue'] && !(typeof data['defaultValue'] === 'string' || data['defaultValue'] instanceof String)) {
            throw new Error("Expected the field `defaultValue` to be a primitive type in the JSON string but got " + data['defaultValue']);
        }
        // ensure the json data is a string
        if (data['minValue'] && !(typeof data['minValue'] === 'string' || data['minValue'] instanceof String)) {
            throw new Error("Expected the field `minValue` to be a primitive type in the JSON string but got " + data['minValue']);
        }
        // ensure the json data is a string
        if (data['maxValue'] && !(typeof data['maxValue'] === 'string' || data['maxValue'] instanceof String)) {
            throw new Error("Expected the field `maxValue` to be a primitive type in the JSON string but got " + data['maxValue']);
        }
        // ensure the json data is a string
        if (data['regexValidation'] && !(typeof data['regexValidation'] === 'string' || data['regexValidation'] instanceof String)) {
            throw new Error("Expected the field `regexValidation` to be a primitive type in the JSON string but got " + data['regexValidation']);
        }

        return true;
    }


}

RunTemplateParameter.RequiredProperties = ["id"];

/**
 * the Parameter id
 * @member {String} id
 */
RunTemplateParameter.prototype['id'] = undefined;

/**
 * a translated label with key as ISO 639-1 code
 * @member {Object.<String, String>} labels
 */
RunTemplateParameter.prototype['labels'] = undefined;

/**
 * the variable type for the parameter. Basic types or special type %DATASETID%
 * @member {String} varType
 */
RunTemplateParameter.prototype['varType'] = undefined;

/**
 * the default value for this parameter
 * @member {String} defaultValue
 */
RunTemplateParameter.prototype['defaultValue'] = undefined;

/**
 * the minimum value for this parameter
 * @member {String} minValue
 */
RunTemplateParameter.prototype['minValue'] = undefined;

/**
 * the maximum value for this parameter
 * @member {String} maxValue
 */
RunTemplateParameter.prototype['maxValue'] = undefined;

/**
 * a regex to validate the value
 * @member {String} regexValidation
 */
RunTemplateParameter.prototype['regexValidation'] = undefined;

/**
 * freeform options
 * @member {Object.<String, Object>} options
 */
RunTemplateParameter.prototype['options'] = undefined;






export default RunTemplateParameter;

