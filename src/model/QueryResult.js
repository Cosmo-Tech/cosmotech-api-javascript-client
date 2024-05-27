/**
 * Cosmo Tech Platform API
 * Cosmo Tech Platform API
 *
 * The version of the OpenAPI document: 3.2.2-SNAPSHOT
 * Contact: platform@cosmotech.com
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 *
 */

import ApiClient from '../ApiClient';

/**
 * The QueryResult model module.
 * @module model/QueryResult
 * @version 3.2.2-SNAPSHOT
 */
class QueryResult {
    /**
     * Constructs a new <code>QueryResult</code>.
     * the result of a SQL Query
     * @alias module:model/QueryResult
     */
    constructor() { 
        
        QueryResult.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>QueryResult</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/QueryResult} obj Optional instance to populate.
     * @return {module:model/QueryResult} The populated <code>QueryResult</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new QueryResult();

            if (data.hasOwnProperty('result')) {
                obj['result'] = ApiClient.convertToType(data['result'], [{'String': Object}]);
            }
        }
        return obj;
    }

    /**
     * Validates the JSON data with respect to <code>QueryResult</code>.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @return {boolean} to indicate whether the JSON data is valid with respect to <code>QueryResult</code>.
     */
    static validateJSON(data) {
        // ensure the json data is an array
        if (!Array.isArray(data['result'])) {
            throw new Error("Expected the field `result` to be an array in the JSON data but got " + data['result']);
        }

        return true;
    }


}



/**
 * the list of results
 * @member {Array.<Object.<String, Object>>} result
 */
QueryResult.prototype['result'] = undefined;






export default QueryResult;

