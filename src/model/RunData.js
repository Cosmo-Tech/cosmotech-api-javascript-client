/**
 * Cosmo Tech Platform API
 * Cosmo Tech Platform API
 *
 * The version of the OpenAPI document: 3.2.1
 * Contact: platform@cosmotech.com
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 *
 */

import ApiClient from '../ApiClient';

/**
 * The RunData model module.
 * @module model/RunData
 * @version 3.2.1
 */
class RunData {
    /**
     * Constructs a new <code>RunData</code>.
     * Run Data to send
     * @alias module:model/RunData
     */
    constructor() { 
        
        RunData.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>RunData</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/RunData} obj Optional instance to populate.
     * @return {module:model/RunData} The populated <code>RunData</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new RunData();

            if (data.hasOwnProperty('database_name')) {
                obj['database_name'] = ApiClient.convertToType(data['database_name'], 'String');
            }
            if (data.hasOwnProperty('table_name')) {
                obj['table_name'] = ApiClient.convertToType(data['table_name'], 'String');
            }
            if (data.hasOwnProperty('data')) {
                obj['data'] = ApiClient.convertToType(data['data'], [{'String': Object}]);
            }
        }
        return obj;
    }

    /**
     * Validates the JSON data with respect to <code>RunData</code>.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @return {boolean} to indicate whether the JSON data is valid with respect to <code>RunData</code>.
     */
    static validateJSON(data) {
        // ensure the json data is a string
        if (data['database_name'] && !(typeof data['database_name'] === 'string' || data['database_name'] instanceof String)) {
            throw new Error("Expected the field `database_name` to be a primitive type in the JSON string but got " + data['database_name']);
        }
        // ensure the json data is a string
        if (data['table_name'] && !(typeof data['table_name'] === 'string' || data['table_name'] instanceof String)) {
            throw new Error("Expected the field `table_name` to be a primitive type in the JSON string but got " + data['table_name']);
        }
        // ensure the json data is an array
        if (!Array.isArray(data['data'])) {
            throw new Error("Expected the field `data` to be an array in the JSON data but got " + data['data']);
        }

        return true;
    }


}



/**
 * Database name
 * @member {String} database_name
 */
RunData.prototype['database_name'] = undefined;

/**
 * Table name
 * @member {String} table_name
 */
RunData.prototype['table_name'] = undefined;

/**
 * @member {Array.<Object.<String, Object>>} data
 */
RunData.prototype['data'] = undefined;






export default RunData;

