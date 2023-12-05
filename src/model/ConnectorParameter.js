/**
 * Cosmo Tech Platform API
 * Cosmo Tech Platform API
 *
 * The version of the OpenAPI document: 3.0.18-dev
 * Contact: platform@cosmotech.com
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 *
 */

import ApiClient from '../ApiClient';

/**
 * The ConnectorParameter model module.
 * @module model/ConnectorParameter
 * @version 3.0.18-dev
 */
class ConnectorParameter {
    /**
     * Constructs a new <code>ConnectorParameter</code>.
     * a connector parameter
     * @alias module:model/ConnectorParameter
     * @param id {String} the connector parameter id
     * @param label {String} the list of translated parameter group labels
     */
    constructor(id, label) { 
        
        ConnectorParameter.initialize(this, id, label);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj, id, label) { 
        obj['id'] = id;
        obj['label'] = label;
    }

    /**
     * Constructs a <code>ConnectorParameter</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/ConnectorParameter} obj Optional instance to populate.
     * @return {module:model/ConnectorParameter} The populated <code>ConnectorParameter</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new ConnectorParameter();

            if (data.hasOwnProperty('id')) {
                obj['id'] = ApiClient.convertToType(data['id'], 'String');
            }
            if (data.hasOwnProperty('label')) {
                obj['label'] = ApiClient.convertToType(data['label'], 'String');
            }
            if (data.hasOwnProperty('valueType')) {
                obj['valueType'] = ApiClient.convertToType(data['valueType'], 'String');
            }
            if (data.hasOwnProperty('options')) {
                obj['options'] = ApiClient.convertToType(data['options'], ['String']);
            }
            if (data.hasOwnProperty('default')) {
                obj['default'] = ApiClient.convertToType(data['default'], 'String');
            }
            if (data.hasOwnProperty('envVar')) {
                obj['envVar'] = ApiClient.convertToType(data['envVar'], 'String');
            }
        }
        return obj;
    }


}

/**
 * the connector parameter id
 * @member {String} id
 */
ConnectorParameter.prototype['id'] = undefined;

/**
 * the list of translated parameter group labels
 * @member {String} label
 */
ConnectorParameter.prototype['label'] = undefined;

/**
 * the parameter value type
 * @member {String} valueType
 */
ConnectorParameter.prototype['valueType'] = undefined;

/**
 * the list of available and valid values for the parameter
 * @member {Array.<String>} options
 */
ConnectorParameter.prototype['options'] = undefined;

/**
 * the default value
 * @member {String} default
 */
ConnectorParameter.prototype['default'] = undefined;

/**
 * associated environment variable in connector image
 * @member {String} envVar
 */
ConnectorParameter.prototype['envVar'] = undefined;






export default ConnectorParameter;

