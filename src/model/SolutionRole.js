/**
 * Cosmo Tech Platform API
 * Cosmo Tech Platform API
 *
 * The version of the OpenAPI document: 3.0.1-SNAPSHOT
 * Contact: platform@cosmotech.com
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 *
 */

import ApiClient from '../ApiClient';

/**
 * The SolutionRole model module.
 * @module model/SolutionRole
 * @version 3.0.1-SNAPSHOT
 */
class SolutionRole {
    /**
     * Constructs a new <code>SolutionRole</code>.
     * the Solution Role
     * @alias module:model/SolutionRole
     * @param role {String} the Solution Role
     */
    constructor(role) { 
        
        SolutionRole.initialize(this, role);
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
     * Constructs a <code>SolutionRole</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/SolutionRole} obj Optional instance to populate.
     * @return {module:model/SolutionRole} The populated <code>SolutionRole</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new SolutionRole();

            if (data.hasOwnProperty('role')) {
                obj['role'] = ApiClient.convertToType(data['role'], 'String');
            }
        }
        return obj;
    }


}

/**
 * the Solution Role
 * @member {String} role
 */
SolutionRole.prototype['role'] = undefined;






export default SolutionRole;

