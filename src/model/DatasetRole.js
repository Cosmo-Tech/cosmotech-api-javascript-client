/**
 * Cosmo Tech Platform API
 * Cosmo Tech Platform API
 *
 * The version of the OpenAPI document: 3.0.5-dev
 * Contact: platform@cosmotech.com
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 *
 */

import ApiClient from '../ApiClient';

/**
 * The DatasetRole model module.
 * @module model/DatasetRole
 * @version 3.0.5-dev
 */
class DatasetRole {
    /**
     * Constructs a new <code>DatasetRole</code>.
     * the Dataset Role
     * @alias module:model/DatasetRole
     * @param role {String} the Dataset Role
     */
    constructor(role) { 
        
        DatasetRole.initialize(this, role);
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
     * Constructs a <code>DatasetRole</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/DatasetRole} obj Optional instance to populate.
     * @return {module:model/DatasetRole} The populated <code>DatasetRole</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new DatasetRole();

            if (data.hasOwnProperty('role')) {
                obj['role'] = ApiClient.convertToType(data['role'], 'String');
            }
        }
        return obj;
    }


}

/**
 * the Dataset Role
 * @member {String} role
 */
DatasetRole.prototype['role'] = undefined;






export default DatasetRole;
