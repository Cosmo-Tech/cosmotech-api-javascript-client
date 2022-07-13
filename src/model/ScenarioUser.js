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
 * The ScenarioUser model module.
 * @module model/ScenarioUser
 * @version 1.0.1-dev
 */
class ScenarioUser {
    /**
     * Constructs a new <code>ScenarioUser</code>.
     * a Scenario user with roles
     * @alias module:model/ScenarioUser
     * @param id {String} the User id
     * @param roles {Array.<module:model/ScenarioUser.RolesEnum>} the User role
     */
    constructor(id, roles) { 
        
        ScenarioUser.initialize(this, id, roles);
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
     * Constructs a <code>ScenarioUser</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/ScenarioUser} obj Optional instance to populate.
     * @return {module:model/ScenarioUser} The populated <code>ScenarioUser</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new ScenarioUser();

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
ScenarioUser.prototype['id'] = undefined;

/**
 * the User name
 * @member {String} name
 */
ScenarioUser.prototype['name'] = undefined;

/**
 * the User role
 * @member {Array.<module:model/ScenarioUser.RolesEnum>} roles
 */
ScenarioUser.prototype['roles'] = undefined;





/**
 * Allowed values for the <code>roles</code> property.
 * @enum {String}
 * @readonly
 */
ScenarioUser['RolesEnum'] = {

    /**
     * value: "Viewer"
     * @const
     */
    "Viewer": "Viewer",

    /**
     * value: "Editor"
     * @const
     */
    "Editor": "Editor"
};



export default ScenarioUser;

