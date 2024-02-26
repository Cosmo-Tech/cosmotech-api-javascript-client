/**
 * Cosmo Tech Platform API
 * Cosmo Tech Platform API
 *
 * The version of the OpenAPI document: 3.1.0-dev
 * Contact: platform@cosmotech.com
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 *
 */

import ApiClient from '../ApiClient';

/**
 * The RunnerRole model module.
 * @module model/RunnerRole
 * @version 3.1.0-dev
 */
class RunnerRole {
    /**
     * Constructs a new <code>RunnerRole</code>.
     * the Runner Role
     * @alias module:model/RunnerRole
     * @param role {String} the Runner Role
     */
    constructor(role) { 
        
        RunnerRole.initialize(this, role);
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
     * Constructs a <code>RunnerRole</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/RunnerRole} obj Optional instance to populate.
     * @return {module:model/RunnerRole} The populated <code>RunnerRole</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new RunnerRole();

            if (data.hasOwnProperty('role')) {
                obj['role'] = ApiClient.convertToType(data['role'], 'String');
            }
        }
        return obj;
    }


}

/**
 * the Runner Role
 * @member {String} role
 */
RunnerRole.prototype['role'] = undefined;






export default RunnerRole;

