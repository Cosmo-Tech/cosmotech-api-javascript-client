/**
 * Cosmo Tech Platform API
 * Cosmo Tech Platform API
 *
 * The version of the OpenAPI document: 3.2.1
 * Contact: platform@cosmotech.com
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 *
 */

import ApiClient from '../ApiClient';

/**
 * The WorkspaceRole model module.
 * @module model/WorkspaceRole
 * @version 3.2.1
 */
class WorkspaceRole {
    /**
     * Constructs a new <code>WorkspaceRole</code>.
     * the Workspace Role
     * @alias module:model/WorkspaceRole
     * @param role {String} the Workspace Role
     */
    constructor(role) { 
        
        WorkspaceRole.initialize(this, role);
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
     * Constructs a <code>WorkspaceRole</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/WorkspaceRole} obj Optional instance to populate.
     * @return {module:model/WorkspaceRole} The populated <code>WorkspaceRole</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new WorkspaceRole();

            if (data.hasOwnProperty('role')) {
                obj['role'] = ApiClient.convertToType(data['role'], 'String');
            }
        }
        return obj;
    }

    /**
     * Validates the JSON data with respect to <code>WorkspaceRole</code>.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @return {boolean} to indicate whether the JSON data is valid with respect to <code>WorkspaceRole</code>.
     */
    static validateJSON(data) {
        // check to make sure all required properties are present in the JSON string
        for (const property of WorkspaceRole.RequiredProperties) {
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

WorkspaceRole.RequiredProperties = ["role"];

/**
 * the Workspace Role
 * @member {String} role
 */
WorkspaceRole.prototype['role'] = undefined;






export default WorkspaceRole;

