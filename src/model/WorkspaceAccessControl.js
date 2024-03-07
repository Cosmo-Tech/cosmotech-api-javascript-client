/**
 * Cosmo Tech Platform API
 * Cosmo Tech Platform API
 *
 * The version of the OpenAPI document: 3.1.0
 * Contact: platform@cosmotech.com
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 *
 */

import ApiClient from '../ApiClient';

/**
 * The WorkspaceAccessControl model module.
 * @module model/WorkspaceAccessControl
 * @version 3.1.0
 */
class WorkspaceAccessControl {
    /**
     * Constructs a new <code>WorkspaceAccessControl</code>.
     * a Workspace access control item
     * @alias module:model/WorkspaceAccessControl
     * @param id {String} the identity id
     * @param role {String} a role
     */
    constructor(id, role) { 
        
        WorkspaceAccessControl.initialize(this, id, role);
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
     * Constructs a <code>WorkspaceAccessControl</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/WorkspaceAccessControl} obj Optional instance to populate.
     * @return {module:model/WorkspaceAccessControl} The populated <code>WorkspaceAccessControl</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new WorkspaceAccessControl();

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
WorkspaceAccessControl.prototype['id'] = undefined;

/**
 * a role
 * @member {String} role
 */
WorkspaceAccessControl.prototype['role'] = undefined;






export default WorkspaceAccessControl;

