/**
 * Cosmo Tech Platform API
 * Cosmo Tech Platform API
 *
 * The version of the OpenAPI document: 3.2.1-SNAPSHOT
 * Contact: platform@cosmotech.com
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 *
 */

import ApiClient from '../ApiClient';
import OrganizationAccessControl from './OrganizationAccessControl';

/**
 * The OrganizationSecurity model module.
 * @module model/OrganizationSecurity
 * @version 3.2.1-SNAPSHOT
 */
class OrganizationSecurity {
    /**
     * Constructs a new <code>OrganizationSecurity</code>.
     * the Organization security information
     * @alias module:model/OrganizationSecurity
     * @param _default {String} the role by default
     * @param accessControlList {Array.<module:model/OrganizationAccessControl>} the list which can access this Organization with detailed access control information
     */
    constructor(_default, accessControlList) { 
        
        OrganizationSecurity.initialize(this, _default, accessControlList);
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
     * Constructs a <code>OrganizationSecurity</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/OrganizationSecurity} obj Optional instance to populate.
     * @return {module:model/OrganizationSecurity} The populated <code>OrganizationSecurity</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new OrganizationSecurity();

            if (data.hasOwnProperty('default')) {
                obj['default'] = ApiClient.convertToType(data['default'], 'String');
            }
            if (data.hasOwnProperty('accessControlList')) {
                obj['accessControlList'] = ApiClient.convertToType(data['accessControlList'], [OrganizationAccessControl]);
            }
        }
        return obj;
    }

    /**
     * Validates the JSON data with respect to <code>OrganizationSecurity</code>.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @return {boolean} to indicate whether the JSON data is valid with respect to <code>OrganizationSecurity</code>.
     */
    static validateJSON(data) {
        // check to make sure all required properties are present in the JSON string
        for (const property of OrganizationSecurity.RequiredProperties) {
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
                OrganizationAccessControl.validateJSON(item);
            };
        }

        return true;
    }


}

OrganizationSecurity.RequiredProperties = ["default", "accessControlList"];

/**
 * the role by default
 * @member {String} default
 */
OrganizationSecurity.prototype['default'] = undefined;

/**
 * the list which can access this Organization with detailed access control information
 * @member {Array.<module:model/OrganizationAccessControl>} accessControlList
 */
OrganizationSecurity.prototype['accessControlList'] = undefined;






export default OrganizationSecurity;

