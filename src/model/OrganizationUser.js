/**
 * Cosmo Tech Plaform API
 * Cosmo Tech Platform API
 *
 * The version of the OpenAPI document: 1.1.2-SNAPSHOT
 * Contact: platform@cosmotech.com
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 *
 */

import ApiClient from '../ApiClient';

/**
 * The OrganizationUser model module.
 * @module model/OrganizationUser
 * @version 1.1.2-SNAPSHOT
 */
class OrganizationUser {
    /**
     * Constructs a new <code>OrganizationUser</code>.
     * a User
     * @alias module:model/OrganizationUser
     * @param roles {Array.<module:model/OrganizationUser.RolesEnum>} the User's roles for the Organization
     */
    constructor(roles) { 
        
        OrganizationUser.initialize(this, roles);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj, roles) { 
        obj['roles'] = roles;
    }

    /**
     * Constructs a <code>OrganizationUser</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/OrganizationUser} obj Optional instance to populate.
     * @return {module:model/OrganizationUser} The populated <code>OrganizationUser</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new OrganizationUser();

            if (data.hasOwnProperty('id')) {
                obj['id'] = ApiClient.convertToType(data['id'], 'String');
            }
            if (data.hasOwnProperty('name')) {
                obj['name'] = ApiClient.convertToType(data['name'], 'String');
            }
            if (data.hasOwnProperty('roles')) {
                obj['roles'] = ApiClient.convertToType(data['roles'], ['String']);
            }
        }
        return obj;
    }


}

/**
 * the User unique identifier, in response
 * @member {String} id
 */
OrganizationUser.prototype['id'] = undefined;

/**
 * the User name
 * @member {String} name
 */
OrganizationUser.prototype['name'] = undefined;

/**
 * the User's roles for the Organization
 * @member {Array.<module:model/OrganizationUser.RolesEnum>} roles
 */
OrganizationUser.prototype['roles'] = undefined;





/**
 * Allowed values for the <code>roles</code> property.
 * @enum {String}
 * @readonly
 */
OrganizationUser['RolesEnum'] = {

    /**
     * value: "Admin"
     * @const
     */
    "Admin": "Admin",

    /**
     * value: "User"
     * @const
     */
    "User": "User",

    /**
     * value: "Viewer"
     * @const
     */
    "Viewer": "Viewer",

    /**
     * value: "Developer"
     * @const
     */
    "Developer": "Developer"
};



export default OrganizationUser;

