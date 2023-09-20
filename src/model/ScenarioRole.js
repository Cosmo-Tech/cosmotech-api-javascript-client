/**
 * Cosmo Tech Platform API
 * Cosmo Tech Platform API
 *
 * The version of the OpenAPI document: 2.3.16
 * Contact: platform@cosmotech.com
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 *
 */

import ApiClient from '../ApiClient';

/**
 * The ScenarioRole model module.
 * @module model/ScenarioRole
 * @version 2.3.16
 */
class ScenarioRole {
    /**
     * Constructs a new <code>ScenarioRole</code>.
     * the Scenario Role
     * @alias module:model/ScenarioRole
     * @param role {String} the Scenario Role
     */
    constructor(role) { 
        
        ScenarioRole.initialize(this, role);
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
     * Constructs a <code>ScenarioRole</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/ScenarioRole} obj Optional instance to populate.
     * @return {module:model/ScenarioRole} The populated <code>ScenarioRole</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new ScenarioRole();

            if (data.hasOwnProperty('role')) {
                obj['role'] = ApiClient.convertToType(data['role'], 'String');
            }
        }
        return obj;
    }


}

/**
 * the Scenario Role
 * @member {String} role
 */
ScenarioRole.prototype['role'] = undefined;






export default ScenarioRole;

