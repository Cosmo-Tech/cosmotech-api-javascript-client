/**
 * Cosmo Tech Platform API
 * Cosmo Tech Platform API
 *
 * The version of the OpenAPI document: 4.0.2-SNAPSHOT
 * Contact: platform@cosmotech.com
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 *
 */

import ApiClient from '../ApiClient';

/**
 * The ComponentRolePermissions model module.
 * @module model/ComponentRolePermissions
 * @version 4.0.2-SNAPSHOT
 */
class ComponentRolePermissions {
    /**
     * Constructs a new <code>ComponentRolePermissions</code>.
     * a RBAC by component
     * @alias module:model/ComponentRolePermissions
     */
    constructor() { 
        
        ComponentRolePermissions.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>ComponentRolePermissions</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/ComponentRolePermissions} obj Optional instance to populate.
     * @return {module:model/ComponentRolePermissions} The populated <code>ComponentRolePermissions</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new ComponentRolePermissions();

            if (data.hasOwnProperty('component')) {
                obj['component'] = ApiClient.convertToType(data['component'], 'String');
            }
            if (data.hasOwnProperty('roles')) {
                obj['roles'] = ApiClient.convertToType(data['roles'], {'String': ['String']});
            }
        }
        return obj;
    }

    /**
     * Validates the JSON data with respect to <code>ComponentRolePermissions</code>.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @return {boolean} to indicate whether the JSON data is valid with respect to <code>ComponentRolePermissions</code>.
     */
    static validateJSON(data) {
        // ensure the json data is a string
        if (data['component'] && !(typeof data['component'] === 'string' || data['component'] instanceof String)) {
            throw new Error("Expected the field `component` to be a primitive type in the JSON string but got " + data['component']);
        }

        return true;
    }


}



/**
 * @member {String} component
 */
ComponentRolePermissions.prototype['component'] = undefined;

/**
 * @member {Object.<String, Array.<String>>} roles
 */
ComponentRolePermissions.prototype['roles'] = undefined;






export default ComponentRolePermissions;

