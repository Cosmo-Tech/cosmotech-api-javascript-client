/**
 * Cosmo Tech Platform API
 * Cosmo Tech Platform API
 *
 * The version of the OpenAPI document: 2.3.9
 * Contact: platform@cosmotech.com
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 *
 */

import ApiClient from '../ApiClient';
import WorkspaceAccessControl from './WorkspaceAccessControl';

/**
 * The WorkspaceSecurity model module.
 * @module model/WorkspaceSecurity
 * @version 2.3.9
 */
class WorkspaceSecurity {
    /**
     * Constructs a new <code>WorkspaceSecurity</code>.
     * the workspace security information
     * @alias module:model/WorkspaceSecurity
     * @param _default {String} the role by default
     * @param accessControlList {Array.<module:model/WorkspaceAccessControl>} the list which can access this Workspace with detailed access control information
     */
    constructor(_default, accessControlList) { 
        
        WorkspaceSecurity.initialize(this, _default, accessControlList);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj, _default, accessControlList) { 
        obj['default'] = _default;
        obj['accessControlList'] = accessControlList;
    }

    /**
     * Constructs a <code>WorkspaceSecurity</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/WorkspaceSecurity} obj Optional instance to populate.
     * @return {module:model/WorkspaceSecurity} The populated <code>WorkspaceSecurity</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new WorkspaceSecurity();

            if (data.hasOwnProperty('default')) {
                obj['default'] = ApiClient.convertToType(data['default'], 'String');
            }
            if (data.hasOwnProperty('accessControlList')) {
                obj['accessControlList'] = ApiClient.convertToType(data['accessControlList'], [WorkspaceAccessControl]);
            }
        }
        return obj;
    }


}

/**
 * the role by default
 * @member {String} default
 */
WorkspaceSecurity.prototype['default'] = undefined;

/**
 * the list which can access this Workspace with detailed access control information
 * @member {Array.<module:model/WorkspaceAccessControl>} accessControlList
 */
WorkspaceSecurity.prototype['accessControlList'] = undefined;






export default WorkspaceSecurity;

