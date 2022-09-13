/**
 * Cosmo Tech Plaform API
 * Cosmo Tech Platform API
 *
 * The version of the OpenAPI document: 1.0.7-SNAPSHOT
 * Contact: platform@cosmotech.com
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 *
 */

import ApiClient from '../ApiClient';
import UserOrganization from './UserOrganization';

/**
 * The User model module.
 * @module model/User
 * @version 1.0.7-SNAPSHOT
 */
class User {
    /**
     * Constructs a new <code>User</code>.
     * a User
     * @alias module:model/User
     */
    constructor() { 
        
        User.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>User</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/User} obj Optional instance to populate.
     * @return {module:model/User} The populated <code>User</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new User();

            if (data.hasOwnProperty('id')) {
                obj['id'] = ApiClient.convertToType(data['id'], 'String');
            }
            if (data.hasOwnProperty('name')) {
                obj['name'] = ApiClient.convertToType(data['name'], 'String');
            }
            if (data.hasOwnProperty('platformRoles')) {
                obj['platformRoles'] = ApiClient.convertToType(data['platformRoles'], ['String']);
            }
            if (data.hasOwnProperty('organizations')) {
                obj['organizations'] = ApiClient.convertToType(data['organizations'], [UserOrganization]);
            }
        }
        return obj;
    }


}

/**
 * the User unique identifier
 * @member {String} id
 */
User.prototype['id'] = undefined;

/**
 * the User name
 * @member {String} name
 */
User.prototype['name'] = undefined;

/**
 * the list of Platform roles
 * @member {Array.<module:model/User.PlatformRolesEnum>} platformRoles
 */
User.prototype['platformRoles'] = undefined;

/**
 * @member {Array.<module:model/UserOrganization>} organizations
 */
User.prototype['organizations'] = undefined;





/**
 * Allowed values for the <code>platformRoles</code> property.
 * @enum {String}
 * @readonly
 */
User['PlatformRolesEnum'] = {

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
     * value: "ConnectorDeveloper"
     * @const
     */
    "ConnectorDeveloper": "ConnectorDeveloper"
};



export default User;

