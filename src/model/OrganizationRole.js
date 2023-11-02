/**
 * Cosmo Tech Platform API
 * Cosmo Tech Platform API
 *
 * The version of the OpenAPI document: 3.0.10-dev
 * Contact: platform@cosmotech.com
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 *
 */

import ApiClient from '../ApiClient';

/**
 * The OrganizationRole model module.
 * @module model/OrganizationRole
 * @version 3.0.10-dev
 */
class OrganizationRole {
    /**
     * Constructs a new <code>OrganizationRole</code>.
     * the Organization Role
     * @alias module:model/OrganizationRole
     * @param role {String} the Organization Role
     */
    constructor(role) { 
        
        OrganizationRole.initialize(this, role);
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
     * Constructs a <code>OrganizationRole</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/OrganizationRole} obj Optional instance to populate.
     * @return {module:model/OrganizationRole} The populated <code>OrganizationRole</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new OrganizationRole();

            if (data.hasOwnProperty('role')) {
                obj['role'] = ApiClient.convertToType(data['role'], 'String');
            }
        }
        return obj;
    }


}

/**
 * the Organization Role
 * @member {String} role
 */
OrganizationRole.prototype['role'] = undefined;






export default OrganizationRole;

