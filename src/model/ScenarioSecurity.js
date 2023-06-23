/**
 * Cosmo Tech Platform API
 * Cosmo Tech Platform API
 *
 * The version of the OpenAPI document: 2.3.12-private
 * Contact: platform@cosmotech.com
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 *
 */

import ApiClient from '../ApiClient';
import ScenarioAccessControl from './ScenarioAccessControl';

/**
 * The ScenarioSecurity model module.
 * @module model/ScenarioSecurity
 * @version 2.3.12-private
 */
class ScenarioSecurity {
    /**
     * Constructs a new <code>ScenarioSecurity</code>.
     * the Scenario security information
     * @alias module:model/ScenarioSecurity
     * @param _default {String} the role by default
     * @param accessControlList {Array.<module:model/ScenarioAccessControl>} the list which can access this Scenario with detailed access control information
     */
    constructor(_default, accessControlList) { 
        
        ScenarioSecurity.initialize(this, _default, accessControlList);
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
     * Constructs a <code>ScenarioSecurity</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/ScenarioSecurity} obj Optional instance to populate.
     * @return {module:model/ScenarioSecurity} The populated <code>ScenarioSecurity</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new ScenarioSecurity();

            if (data.hasOwnProperty('default')) {
                obj['default'] = ApiClient.convertToType(data['default'], 'String');
            }
            if (data.hasOwnProperty('accessControlList')) {
                obj['accessControlList'] = ApiClient.convertToType(data['accessControlList'], [ScenarioAccessControl]);
            }
        }
        return obj;
    }


}

/**
 * the role by default
 * @member {String} default
 */
ScenarioSecurity.prototype['default'] = undefined;

/**
 * the list which can access this Scenario with detailed access control information
 * @member {Array.<module:model/ScenarioAccessControl>} accessControlList
 */
ScenarioSecurity.prototype['accessControlList'] = undefined;






export default ScenarioSecurity;

