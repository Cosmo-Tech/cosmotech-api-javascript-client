/**
 * Cosmo Tech Platform API
 * Cosmo Tech Platform API
 *
 * The version of the OpenAPI document: 3.2.2
 * Contact: platform@cosmotech.com
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 *
 */

import ApiClient from '../ApiClient';

/**
 * The SendRunDataRequest model module.
 * @module model/SendRunDataRequest
 * @version 3.2.2
 */
class SendRunDataRequest {
    /**
     * Constructs a new <code>SendRunDataRequest</code>.
     * @alias module:model/SendRunDataRequest
     */
    constructor() { 
        
        SendRunDataRequest.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>SendRunDataRequest</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/SendRunDataRequest} obj Optional instance to populate.
     * @return {module:model/SendRunDataRequest} The populated <code>SendRunDataRequest</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new SendRunDataRequest();

            if (data.hasOwnProperty('id')) {
                obj['id'] = ApiClient.convertToType(data['id'], 'String');
            }
            if (data.hasOwnProperty('data')) {
                obj['data'] = ApiClient.convertToType(data['data'], [{'String': Object}]);
            }
        }
        return obj;
    }

    /**
     * Validates the JSON data with respect to <code>SendRunDataRequest</code>.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @return {boolean} to indicate whether the JSON data is valid with respect to <code>SendRunDataRequest</code>.
     */
    static validateJSON(data) {
        // ensure the json data is a string
        if (data['id'] && !(typeof data['id'] === 'string' || data['id'] instanceof String)) {
            throw new Error("Expected the field `id` to be a primitive type in the JSON string but got " + data['id']);
        }
        // ensure the json data is an array
        if (!Array.isArray(data['data'])) {
            throw new Error("Expected the field `data` to be an array in the JSON data but got " + data['data']);
        }

        return true;
    }


}



/**
 * @member {String} id
 */
SendRunDataRequest.prototype['id'] = undefined;

/**
 * @member {Array.<Object.<String, Object>>} data
 */
SendRunDataRequest.prototype['data'] = undefined;






export default SendRunDataRequest;
