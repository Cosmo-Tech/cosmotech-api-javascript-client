/**
 * Cosmo Tech Platform API
 * Cosmo Tech Platform API
 *
 * The version of the OpenAPI document: 3.1.2-dev
 * Contact: platform@cosmotech.com
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 *
 */

import ApiClient from '../ApiClient';

/**
 * The TwinGraphHash model module.
 * @module model/TwinGraphHash
 * @version 3.1.2-dev
 */
class TwinGraphHash {
    /**
     * Constructs a new <code>TwinGraphHash</code>.
     * a twin graph hash
     * @alias module:model/TwinGraphHash
     */
    constructor() { 
        
        TwinGraphHash.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>TwinGraphHash</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/TwinGraphHash} obj Optional instance to populate.
     * @return {module:model/TwinGraphHash} The populated <code>TwinGraphHash</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new TwinGraphHash();

            if (data.hasOwnProperty('hash')) {
                obj['hash'] = ApiClient.convertToType(data['hash'], 'String');
            }
        }
        return obj;
    }


}

/**
 * the hash of the graph
 * @member {String} hash
 */
TwinGraphHash.prototype['hash'] = undefined;






export default TwinGraphHash;

