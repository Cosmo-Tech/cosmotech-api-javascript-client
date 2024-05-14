/**
 * Cosmo Tech Platform API
 * Cosmo Tech Platform API
 *
 * The version of the OpenAPI document: 3.2.0
 * Contact: platform@cosmotech.com
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 *
 */

import ApiClient from '../ApiClient';

/**
 * The SolutionRole model module.
 * @module model/SolutionRole
 * @version 3.2.0
 */
class SolutionRole {
    /**
     * Constructs a new <code>SolutionRole</code>.
     * the Solution Role
     * @alias module:model/SolutionRole
     * @param role {String} the Solution Role
     */
    constructor(role) { 
        
        SolutionRole.initialize(this, role);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj, role) { 
        obj['role'] = role;
    }

    /**
     * Constructs a <code>SolutionRole</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/SolutionRole} obj Optional instance to populate.
     * @return {module:model/SolutionRole} The populated <code>SolutionRole</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new SolutionRole();

            if (data.hasOwnProperty('role')) {
                obj['role'] = ApiClient.convertToType(data['role'], 'String');
            }
        }
        return obj;
    }

    /**
     * Validates the JSON data with respect to <code>SolutionRole</code>.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @return {boolean} to indicate whether the JSON data is valid with respect to <code>SolutionRole</code>.
     */
    static validateJSON(data) {
        // check to make sure all required properties are present in the JSON string
        for (const property of SolutionRole.RequiredProperties) {
            if (!data.hasOwnProperty(property)) {
                throw new Error("The required field `" + property + "` is not found in the JSON data: " + JSON.stringify(data));
            }
        }
        // ensure the json data is a string
        if (data['role'] && !(typeof data['role'] === 'string' || data['role'] instanceof String)) {
            throw new Error("Expected the field `role` to be a primitive type in the JSON string but got " + data['role']);
        }

        return true;
    }


}

SolutionRole.RequiredProperties = ["role"];

/**
 * the Solution Role
 * @member {String} role
 */
SolutionRole.prototype['role'] = undefined;






export default SolutionRole;

