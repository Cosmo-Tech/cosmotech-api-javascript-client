/**
 * Cosmo Tech Plaform API
 * Cosmo Tech Platform API
 *
 * The version of the OpenAPI document: 1.0.4-dev
 * Contact: platform@cosmotech.com
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 *
 */

import ApiClient from '../ApiClient';

/**
 * The ScenarioRunTemplateParameterValue model module.
 * @module model/ScenarioRunTemplateParameterValue
 * @version 1.0.4-dev
 */
class ScenarioRunTemplateParameterValue {
    /**
     * Constructs a new <code>ScenarioRunTemplateParameterValue</code>.
     * the value of a Solution Run Template parameter for a Scenario
     * @alias module:model/ScenarioRunTemplateParameterValue
     * @param parameterId {String} the parameter Id
     * @param value {String} the parameter value
     */
    constructor(parameterId, value) { 
        
        ScenarioRunTemplateParameterValue.initialize(this, parameterId, value);
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
     * Constructs a <code>ScenarioRunTemplateParameterValue</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/ScenarioRunTemplateParameterValue} obj Optional instance to populate.
     * @return {module:model/ScenarioRunTemplateParameterValue} The populated <code>ScenarioRunTemplateParameterValue</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new ScenarioRunTemplateParameterValue();

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


}

/**
 * the parameter Id
 * @member {String} parameterId
 */
ScenarioRunTemplateParameterValue.prototype['parameterId'] = undefined;

/**
 * the parameter value type
 * @member {String} varType
 */
ScenarioRunTemplateParameterValue.prototype['varType'] = undefined;

/**
 * the parameter value
 * @member {String} value
 */
ScenarioRunTemplateParameterValue.prototype['value'] = undefined;

/**
 * whether or not the value is inherited from parent or has been changed
 * @member {Boolean} isInherited
 */
ScenarioRunTemplateParameterValue.prototype['isInherited'] = undefined;






export default ScenarioRunTemplateParameterValue;

