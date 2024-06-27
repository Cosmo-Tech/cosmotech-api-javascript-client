/**
 * Cosmo Tech Platform API
 * Cosmo Tech Platform API
 *
 * The version of the OpenAPI document: 4.0.0-onprem
 * Contact: platform@cosmotech.com
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 *
 */

import ApiClient from '../ApiClient';
import RunnerAccessControl from './RunnerAccessControl';

/**
 * The RunnerSecurity model module.
 * @module model/RunnerSecurity
 * @version 4.0.0-onprem
 */
class RunnerSecurity {
    /**
     * Constructs a new <code>RunnerSecurity</code>.
     * the Runner security information
     * @alias module:model/RunnerSecurity
     * @param _default {String} the role by default
     * @param accessControlList {Array.<module:model/RunnerAccessControl>} the list which can access this Runner with detailed access control information
     */
    constructor(_default, accessControlList) { 
        
        RunnerSecurity.initialize(this, _default, accessControlList);
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
     * Constructs a <code>RunnerSecurity</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/RunnerSecurity} obj Optional instance to populate.
     * @return {module:model/RunnerSecurity} The populated <code>RunnerSecurity</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new RunnerSecurity();

            if (data.hasOwnProperty('default')) {
                obj['default'] = ApiClient.convertToType(data['default'], 'String');
            }
            if (data.hasOwnProperty('accessControlList')) {
                obj['accessControlList'] = ApiClient.convertToType(data['accessControlList'], [RunnerAccessControl]);
            }
        }
        return obj;
    }

    /**
     * Validates the JSON data with respect to <code>RunnerSecurity</code>.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @return {boolean} to indicate whether the JSON data is valid with respect to <code>RunnerSecurity</code>.
     */
    static validateJSON(data) {
        // check to make sure all required properties are present in the JSON string
        for (const property of RunnerSecurity.RequiredProperties) {
            if (!data.hasOwnProperty(property)) {
                throw new Error("The required field `" + property + "` is not found in the JSON data: " + JSON.stringify(data));
            }
        }
        // ensure the json data is a string
        if (data['default'] && !(typeof data['default'] === 'string' || data['default'] instanceof String)) {
            throw new Error("Expected the field `default` to be a primitive type in the JSON string but got " + data['default']);
        }
        if (data['accessControlList']) { // data not null
            // ensure the json data is an array
            if (!Array.isArray(data['accessControlList'])) {
                throw new Error("Expected the field `accessControlList` to be an array in the JSON data but got " + data['accessControlList']);
            }
            // validate the optional field `accessControlList` (array)
            for (const item of data['accessControlList']) {
                RunnerAccessControl.validateJSON(item);
            };
        }

        return true;
    }


}

RunnerSecurity.RequiredProperties = ["default", "accessControlList"];

/**
 * the role by default
 * @member {String} default
 */
RunnerSecurity.prototype['default'] = undefined;

/**
 * the list which can access this Runner with detailed access control information
 * @member {Array.<module:model/RunnerAccessControl>} accessControlList
 */
RunnerSecurity.prototype['accessControlList'] = undefined;






export default RunnerSecurity;

