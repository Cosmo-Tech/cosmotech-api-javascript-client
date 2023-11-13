/**
 * Cosmo Tech Platform API
 * Cosmo Tech Platform API
 *
 * The version of the OpenAPI document: 3.0.13-SNAPSHOT
 * Contact: platform@cosmotech.com
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 *
 */

import ApiClient from '../ApiClient';
import SolutionAccessControl from './SolutionAccessControl';

/**
 * The SolutionSecurity model module.
 * @module model/SolutionSecurity
 * @version 3.0.13-SNAPSHOT
 */
class SolutionSecurity {
    /**
     * Constructs a new <code>SolutionSecurity</code>.
     * the Solution security information
     * @alias module:model/SolutionSecurity
     * @param _default {String} the role by default
     * @param accessControlList {Array.<module:model/SolutionAccessControl>} the list which can access this Solution with detailed access control information
     */
    constructor(_default, accessControlList) { 
        
        SolutionSecurity.initialize(this, _default, accessControlList);
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
     * Constructs a <code>SolutionSecurity</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/SolutionSecurity} obj Optional instance to populate.
     * @return {module:model/SolutionSecurity} The populated <code>SolutionSecurity</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new SolutionSecurity();

            if (data.hasOwnProperty('default')) {
                obj['default'] = ApiClient.convertToType(data['default'], 'String');
            }
            if (data.hasOwnProperty('accessControlList')) {
                obj['accessControlList'] = ApiClient.convertToType(data['accessControlList'], [SolutionAccessControl]);
            }
        }
        return obj;
    }


}

/**
 * the role by default
 * @member {String} default
 */
SolutionSecurity.prototype['default'] = undefined;

/**
 * the list which can access this Solution with detailed access control information
 * @member {Array.<module:model/SolutionAccessControl>} accessControlList
 */
SolutionSecurity.prototype['accessControlList'] = undefined;






export default SolutionSecurity;

