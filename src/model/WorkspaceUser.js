/**
 * Cosmo Tech Plaform API
 * Cosmo Tech Platform API
 *
 * The version of the OpenAPI document: 1.0.1-dev
 * Contact: platform@cosmotech.com
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 *
 */

import ApiClient from '../ApiClient';

/**
 * The WorkspaceUser model module.
 * @module model/WorkspaceUser
 * @version 1.0.1-dev
 */
class WorkspaceUser {
    /**
     * Constructs a new <code>WorkspaceUser</code>.
     * a Workspace user with roles
     * @alias module:model/WorkspaceUser
     * @param id {String} the User id
     * @param roles {Array.<module:model/WorkspaceUser.RolesEnum>} the User roles
     */
    constructor(id, roles) { 
        
        WorkspaceUser.initialize(this, id, roles);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj, id, roles) { 
        obj['id'] = id;
        obj['roles'] = roles;
    }

    /**
     * Constructs a <code>WorkspaceUser</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/WorkspaceUser} obj Optional instance to populate.
     * @return {module:model/WorkspaceUser} The populated <code>WorkspaceUser</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new WorkspaceUser();

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
 * the User id
 * @member {String} id
 */
WorkspaceUser.prototype['id'] = undefined;

/**
 * the User name
 * @member {String} name
 */
WorkspaceUser.prototype['name'] = undefined;

/**
 * the User roles
 * @member {Array.<module:model/WorkspaceUser.RolesEnum>} roles
 */
WorkspaceUser.prototype['roles'] = undefined;





/**
 * Allowed values for the <code>roles</code> property.
 * @enum {String}
 * @readonly
 */
WorkspaceUser['RolesEnum'] = {

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
    "Viewer": "Viewer"
};



export default WorkspaceUser;

