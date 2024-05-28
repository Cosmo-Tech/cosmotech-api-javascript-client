/**
 * Cosmo Tech Platform API
 * Cosmo Tech Platform API
 *
 * The version of the OpenAPI document: 3.2.3
 * Contact: platform@cosmotech.com
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 *
 */

import ApiClient from '../ApiClient';

/**
 * The DatasetTwinGraphHash model module.
 * @module model/DatasetTwinGraphHash
 * @version 3.2.3
 */
class DatasetTwinGraphHash {
    /**
     * Constructs a new <code>DatasetTwinGraphHash</code>.
     * a twin graph hash
     * @alias module:model/DatasetTwinGraphHash
     */
    constructor() { 
        
        DatasetTwinGraphHash.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>DatasetTwinGraphHash</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/DatasetTwinGraphHash} obj Optional instance to populate.
     * @return {module:model/DatasetTwinGraphHash} The populated <code>DatasetTwinGraphHash</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new DatasetTwinGraphHash();

            if (data.hasOwnProperty('hash')) {
                obj['hash'] = ApiClient.convertToType(data['hash'], 'String');
            }
        }
        return obj;
    }

    /**
     * Validates the JSON data with respect to <code>DatasetTwinGraphHash</code>.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @return {boolean} to indicate whether the JSON data is valid with respect to <code>DatasetTwinGraphHash</code>.
     */
    static validateJSON(data) {
        // ensure the json data is a string
        if (data['hash'] && !(typeof data['hash'] === 'string' || data['hash'] instanceof String)) {
            throw new Error("Expected the field `hash` to be a primitive type in the JSON string but got " + data['hash']);
        }

        return true;
    }


}



/**
 * the hash of the graph
 * @member {String} hash
 */
DatasetTwinGraphHash.prototype['hash'] = undefined;






export default DatasetTwinGraphHash;

