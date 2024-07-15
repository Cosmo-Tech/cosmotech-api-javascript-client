/**
 * Cosmo Tech Platform API
 * Cosmo Tech Platform API
 *
 * The version of the OpenAPI document: 4.0.2-onprem
 * Contact: platform@cosmotech.com
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 *
 */

import ApiClient from '../ApiClient';
import ConnectorParameter from './ConnectorParameter';

/**
 * The ConnectorParameterGroup model module.
 * @module model/ConnectorParameterGroup
 * @version 4.0.2-onprem
 */
class ConnectorParameterGroup {
    /**
     * Constructs a new <code>ConnectorParameterGroup</code>.
     * a connector parameters group
     * @alias module:model/ConnectorParameterGroup
     * @param id {String} the connector parameter group id
     * @param label {String} the list of translated parameter group labels
     * @param parameters {Array.<module:model/ConnectorParameter>} the list of parameters
     */
    constructor(id, label, parameters) { 
        
        ConnectorParameterGroup.initialize(this, id, label, parameters);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj, id, label, parameters) { 
        obj['id'] = id;
        obj['label'] = label;
        obj['parameters'] = parameters;
    }

    /**
     * Constructs a <code>ConnectorParameterGroup</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/ConnectorParameterGroup} obj Optional instance to populate.
     * @return {module:model/ConnectorParameterGroup} The populated <code>ConnectorParameterGroup</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new ConnectorParameterGroup();

            if (data.hasOwnProperty('id')) {
                obj['id'] = ApiClient.convertToType(data['id'], 'String');
            }
            if (data.hasOwnProperty('label')) {
                obj['label'] = ApiClient.convertToType(data['label'], 'String');
            }
            if (data.hasOwnProperty('parameters')) {
                obj['parameters'] = ApiClient.convertToType(data['parameters'], [ConnectorParameter]);
            }
        }
        return obj;
    }

    /**
     * Validates the JSON data with respect to <code>ConnectorParameterGroup</code>.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @return {boolean} to indicate whether the JSON data is valid with respect to <code>ConnectorParameterGroup</code>.
     */
    static validateJSON(data) {
        // check to make sure all required properties are present in the JSON string
        for (const property of ConnectorParameterGroup.RequiredProperties) {
            if (!data.hasOwnProperty(property)) {
                throw new Error("The required field `" + property + "` is not found in the JSON data: " + JSON.stringify(data));
            }
        }
        // ensure the json data is a string
        if (data['id'] && !(typeof data['id'] === 'string' || data['id'] instanceof String)) {
            throw new Error("Expected the field `id` to be a primitive type in the JSON string but got " + data['id']);
        }
        // ensure the json data is a string
        if (data['label'] && !(typeof data['label'] === 'string' || data['label'] instanceof String)) {
            throw new Error("Expected the field `label` to be a primitive type in the JSON string but got " + data['label']);
        }
        if (data['parameters']) { // data not null
            // ensure the json data is an array
            if (!Array.isArray(data['parameters'])) {
                throw new Error("Expected the field `parameters` to be an array in the JSON data but got " + data['parameters']);
            }
            // validate the optional field `parameters` (array)
            for (const item of data['parameters']) {
                ConnectorParameter.validateJSON(item);
            };
        }

        return true;
    }


}

ConnectorParameterGroup.RequiredProperties = ["id", "label", "parameters"];

/**
 * the connector parameter group id
 * @member {String} id
 */
ConnectorParameterGroup.prototype['id'] = undefined;

/**
 * the list of translated parameter group labels
 * @member {String} label
 */
ConnectorParameterGroup.prototype['label'] = undefined;

/**
 * the list of parameters
 * @member {Array.<module:model/ConnectorParameter>} parameters
 */
ConnectorParameterGroup.prototype['parameters'] = undefined;






export default ConnectorParameterGroup;

