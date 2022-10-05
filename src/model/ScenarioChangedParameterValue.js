/**
 * Cosmo Tech Plaform API
 * Cosmo Tech Platform API
 *
 * The version of the OpenAPI document: 2.0.2-dev
 * Contact: platform@cosmotech.com
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 *
 */

import ApiClient from '../ApiClient';

/**
 * The ScenarioChangedParameterValue model module.
 * @module model/ScenarioChangedParameterValue
 * @version 2.0.2-dev
 */
class ScenarioChangedParameterValue {
    /**
     * Constructs a new <code>ScenarioChangedParameterValue</code>.
     * the difference between the values of a parameter
     * @alias module:model/ScenarioChangedParameterValue
     */
    constructor() { 
        
        ScenarioChangedParameterValue.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>ScenarioChangedParameterValue</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/ScenarioChangedParameterValue} obj Optional instance to populate.
     * @return {module:model/ScenarioChangedParameterValue} The populated <code>ScenarioChangedParameterValue</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new ScenarioChangedParameterValue();

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
ScenarioChangedParameterValue.prototype['parameterId'] = undefined;

/**
 * the parameter value type
 * @member {String} varType
 */
ScenarioChangedParameterValue.prototype['varType'] = undefined;

/**
 * the parameter value for the reference Scenario
 * @member {String} value
 */
ScenarioChangedParameterValue.prototype['value'] = undefined;

/**
 * the parameter value for the compared Scenario
 * @member {String} comparedValue
 */
ScenarioChangedParameterValue.prototype['comparedValue'] = undefined;






export default ScenarioChangedParameterValue;

