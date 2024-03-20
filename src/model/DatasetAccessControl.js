/**
 * Cosmo Tech Platform API
 * Cosmo Tech Platform API
 *
 * The version of the OpenAPI document: 3.0.4
 * Contact: platform@cosmotech.com
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 *
 */

import ApiClient from '../ApiClient';

/**
 * The DatasetAccessControl model module.
 * @module model/DatasetAccessControl
 * @version 3.0.4
 */
class DatasetAccessControl {
    /**
     * Constructs a new <code>DatasetAccessControl</code>.
     * a Dataset access control item
     * @alias module:model/DatasetAccessControl
     * @param id {String} the identity id
     * @param role {String} a role
     */
    constructor(id, role) { 
        
        DatasetAccessControl.initialize(this, id, role);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj, id, role) { 
        obj['id'] = id;
        obj['role'] = role;
    }

    /**
     * Constructs a <code>DatasetAccessControl</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/DatasetAccessControl} obj Optional instance to populate.
     * @return {module:model/DatasetAccessControl} The populated <code>DatasetAccessControl</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new DatasetAccessControl();

            if (data.hasOwnProperty('id')) {
                obj['id'] = ApiClient.convertToType(data['id'], 'String');
            }
            if (data.hasOwnProperty('role')) {
                obj['role'] = ApiClient.convertToType(data['role'], 'String');
            }
        }
        return obj;
    }


}

/**
 * the identity id
 * @member {String} id
 */
DatasetAccessControl.prototype['id'] = undefined;

/**
 * a role
 * @member {String} role
 */
DatasetAccessControl.prototype['role'] = undefined;






export default DatasetAccessControl;

