/**
 * Cosmo Tech Platform API
 * Cosmo Tech Platform API
 *
 * The version of the OpenAPI document: 4.0.1-onprem
 * Contact: platform@cosmotech.com
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 *
 */

import ApiClient from '../ApiClient';
import DatasetAccessControl from './DatasetAccessControl';

/**
 * The DatasetSecurity model module.
 * @module model/DatasetSecurity
 * @version 4.0.1-onprem
 */
class DatasetSecurity {
    /**
     * Constructs a new <code>DatasetSecurity</code>.
     * the dataset security information
     * @alias module:model/DatasetSecurity
     * @param _default {String} the role by default
     * @param accessControlList {Array.<module:model/DatasetAccessControl>} the list which can access this Dataset with detailed access control information
     */
    constructor(_default, accessControlList) { 
        
        DatasetSecurity.initialize(this, _default, accessControlList);
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
     * Constructs a <code>DatasetSecurity</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/DatasetSecurity} obj Optional instance to populate.
     * @return {module:model/DatasetSecurity} The populated <code>DatasetSecurity</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new DatasetSecurity();

            if (data.hasOwnProperty('default')) {
                obj['default'] = ApiClient.convertToType(data['default'], 'String');
            }
            if (data.hasOwnProperty('accessControlList')) {
                obj['accessControlList'] = ApiClient.convertToType(data['accessControlList'], [DatasetAccessControl]);
            }
        }
        return obj;
    }

    /**
     * Validates the JSON data with respect to <code>DatasetSecurity</code>.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @return {boolean} to indicate whether the JSON data is valid with respect to <code>DatasetSecurity</code>.
     */
    static validateJSON(data) {
        // check to make sure all required properties are present in the JSON string
        for (const property of DatasetSecurity.RequiredProperties) {
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
                DatasetAccessControl.validateJSON(item);
            };
        }

        return true;
    }


}

DatasetSecurity.RequiredProperties = ["default", "accessControlList"];

/**
 * the role by default
 * @member {String} default
 */
DatasetSecurity.prototype['default'] = undefined;

/**
 * the list which can access this Dataset with detailed access control information
 * @member {Array.<module:model/DatasetAccessControl>} accessControlList
 */
DatasetSecurity.prototype['accessControlList'] = undefined;






export default DatasetSecurity;

