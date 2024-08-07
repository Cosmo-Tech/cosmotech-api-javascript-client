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
 * The ScenarioAccessControl model module.
 * @module model/ScenarioAccessControl
 * @version 3.2.8
 */
class ScenarioAccessControl {
    /**
     * Constructs a new <code>ScenarioAccessControl</code>.
     * a Scenario access control item
     * @alias module:model/ScenarioAccessControl
     * @param id {String} the identity id
     * @param role {String} a role
     */
    constructor(id, role) { 
        
        ScenarioAccessControl.initialize(this, id, role);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj, id, role) { 
        obj['id'] = id;
        obj['role'] = role;
    }

    /**
     * Constructs a <code>ScenarioAccessControl</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/ScenarioAccessControl} obj Optional instance to populate.
     * @return {module:model/ScenarioAccessControl} The populated <code>ScenarioAccessControl</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new ScenarioAccessControl();

            if (data.hasOwnProperty('id')) {
                obj['id'] = ApiClient.convertToType(data['id'], 'String');
            }
            if (data.hasOwnProperty('role')) {
                obj['role'] = ApiClient.convertToType(data['role'], 'String');
            }
        }
        return obj;
    }

    /**
     * Validates the JSON data with respect to <code>ScenarioAccessControl</code>.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @return {boolean} to indicate whether the JSON data is valid with respect to <code>ScenarioAccessControl</code>.
     */
    static validateJSON(data) {
        // check to make sure all required properties are present in the JSON string
        for (const property of ScenarioAccessControl.RequiredProperties) {
            if (!data.hasOwnProperty(property)) {
                throw new Error("The required field `" + property + "` is not found in the JSON data: " + JSON.stringify(data));
            }
        }
        // ensure the json data is a string
        if (data['id'] && !(typeof data['id'] === 'string' || data['id'] instanceof String)) {
            throw new Error("Expected the field `id` to be a primitive type in the JSON string but got " + data['id']);
        }
        // ensure the json data is a string
        if (data['role'] && !(typeof data['role'] === 'string' || data['role'] instanceof String)) {
            throw new Error("Expected the field `role` to be a primitive type in the JSON string but got " + data['role']);
        }

        return true;
    }


}

ScenarioAccessControl.RequiredProperties = ["id", "role"];

/**
 * the identity id
 * @member {String} id
 */
ScenarioAccessControl.prototype['id'] = undefined;

/**
 * a role
 * @member {String} role
 */
ScenarioAccessControl.prototype['role'] = undefined;






export default ScenarioAccessControl;

