/**
 * Cosmo Tech Plaform API
 * Cosmo Tech Platform API
 *
 * The version of the OpenAPI document: 2.1.9-dev
 * Contact: platform@cosmotech.com
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 *
 */

import ApiClient from '../ApiClient';

/**
 * The UserWorkspace model module.
 * @module model/UserWorkspace
 * @version 2.1.9-dev
 */
class UserWorkspace {
    /**
     * Constructs a new <code>UserWorkspace</code>.
     * the list of User roles for a Workspace
     * @alias module:model/UserWorkspace
     */
    constructor() { 
        
        UserWorkspace.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>UserWorkspace</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/UserWorkspace} obj Optional instance to populate.
     * @return {module:model/UserWorkspace} The populated <code>UserWorkspace</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new UserWorkspace();

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
 * the Workspace Id
 * @member {String} id
 */
UserWorkspace.prototype['id'] = undefined;

/**
 * the Workspace name
 * @member {String} name
 */
UserWorkspace.prototype['name'] = undefined;

/**
 * the roles of the User in the Workspace
 * @member {Array.<String>} roles
 */
UserWorkspace.prototype['roles'] = undefined;






export default UserWorkspace;

