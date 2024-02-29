/**
 * Cosmo Tech Platform API
 * Cosmo Tech Platform API
 *
 * The version of the OpenAPI document: 3.1.1-SNAPSHOT
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
 * @version 3.1.1-SNAPSHOT
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


}

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

