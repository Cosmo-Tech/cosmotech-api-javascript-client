/**
 * Cosmo Tech Plaform API
 * Cosmo Tech Platform API
 *
 * The version of the OpenAPI document: 1.0.3-pr
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
 * @version 1.0.3-pr
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


}

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

