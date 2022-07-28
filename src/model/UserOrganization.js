/**
 * Cosmo Tech Plaform API
 * Cosmo Tech Platform API
 *
 * The version of the OpenAPI document: 1.0.3-SNAPSHOT
 * Contact: platform@cosmotech.com
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 *
 */

import ApiClient from '../ApiClient';
import UserWorkspace from './UserWorkspace';

/**
 * The UserOrganization model module.
 * @module model/UserOrganization
 * @version 1.0.3-SNAPSHOT
 */
class UserOrganization {
    /**
     * Constructs a new <code>UserOrganization</code>.
     * The organization of the user
     * @alias module:model/UserOrganization
     */
    constructor() { 
        
        UserOrganization.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>UserOrganization</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/UserOrganization} obj Optional instance to populate.
     * @return {module:model/UserOrganization} The populated <code>UserOrganization</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new UserOrganization();

            if (data.hasOwnProperty('id')) {
                obj['id'] = ApiClient.convertToType(data['id'], 'String');
            }
            if (data.hasOwnProperty('name')) {
                obj['name'] = ApiClient.convertToType(data['name'], 'String');
            }
            if (data.hasOwnProperty('roles')) {
                obj['roles'] = ApiClient.convertToType(data['roles'], ['String']);
            }
            if (data.hasOwnProperty('workspaces')) {
                obj['workspaces'] = ApiClient.convertToType(data['workspaces'], [UserWorkspace]);
            }
        }
        return obj;
    }


}

/**
 * the Organization id
 * @member {String} id
 */
UserOrganization.prototype['id'] = undefined;

/**
 * the Organization name
 * @member {String} name
 */
UserOrganization.prototype['name'] = undefined;

/**
 * the roles of the User in the Organization
 * @member {Array.<String>} roles
 */
UserOrganization.prototype['roles'] = undefined;

/**
 * the list of Workspaces roles
 * @member {Array.<module:model/UserWorkspace>} workspaces
 */
UserOrganization.prototype['workspaces'] = undefined;






export default UserOrganization;

