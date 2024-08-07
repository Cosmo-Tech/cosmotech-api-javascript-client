/**
 * Cosmo Tech Platform API
 * Cosmo Tech Platform API
 *
 * The version of the OpenAPI document: 4.0.3-SNAPSHOT
 * Contact: platform@cosmotech.com
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 *
 */

import ApiClient from '../ApiClient';

/**
 * The DatasetTwinGraphQuery model module.
 * @module model/DatasetTwinGraphQuery
 * @version 4.0.3-SNAPSHOT
 */
class DatasetTwinGraphQuery {
    /**
     * Constructs a new <code>DatasetTwinGraphQuery</code>.
     * a twin graph query in cypher language
     * @alias module:model/DatasetTwinGraphQuery
     * @param query {String} the query in cypher language
     */
    constructor(query) { 
        
        DatasetTwinGraphQuery.initialize(this, query);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj, query) { 
        obj['query'] = query;
    }

    /**
     * Constructs a <code>DatasetTwinGraphQuery</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/DatasetTwinGraphQuery} obj Optional instance to populate.
     * @return {module:model/DatasetTwinGraphQuery} The populated <code>DatasetTwinGraphQuery</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new DatasetTwinGraphQuery();

            if (data.hasOwnProperty('query')) {
                obj['query'] = ApiClient.convertToType(data['query'], 'String');
            }
        }
        return obj;
    }

    /**
     * Validates the JSON data with respect to <code>DatasetTwinGraphQuery</code>.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @return {boolean} to indicate whether the JSON data is valid with respect to <code>DatasetTwinGraphQuery</code>.
     */
    static validateJSON(data) {
        // check to make sure all required properties are present in the JSON string
        for (const property of DatasetTwinGraphQuery.RequiredProperties) {
            if (!data.hasOwnProperty(property)) {
                throw new Error("The required field `" + property + "` is not found in the JSON data: " + JSON.stringify(data));
            }
        }
        // ensure the json data is a string
        if (data['query'] && !(typeof data['query'] === 'string' || data['query'] instanceof String)) {
            throw new Error("Expected the field `query` to be a primitive type in the JSON string but got " + data['query']);
        }

        return true;
    }


}

DatasetTwinGraphQuery.RequiredProperties = ["query"];

/**
 * the query in cypher language
 * @member {String} query
 */
DatasetTwinGraphQuery.prototype['query'] = undefined;






export default DatasetTwinGraphQuery;

