/**
 * Cosmo Tech Platform API
 * Cosmo Tech Platform API
 *
 * The version of the OpenAPI document: 2.4.6-private
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
 * @version 2.4.6-private
 */
class RunTemplateParameterValue {
    /**
     * Constructs a new <code>RunTemplateParameterValue</code>.
     * the value of Analysis parameter for a Scenario for this ScenarioRun
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


}

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

