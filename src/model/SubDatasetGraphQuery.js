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
 * The SubDatasetGraphQuery model module.
 * @module model/SubDatasetGraphQuery
 * @version 4.0.3-SNAPSHOT
 */
class SubDatasetGraphQuery {
    /**
     * Constructs a new <code>SubDatasetGraphQuery</code>.
     * a twin graph query in cypher language
     * @alias module:model/SubDatasetGraphQuery
     */
    constructor() { 
        
        SubDatasetGraphQuery.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>SubDatasetGraphQuery</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/SubDatasetGraphQuery} obj Optional instance to populate.
     * @return {module:model/SubDatasetGraphQuery} The populated <code>SubDatasetGraphQuery</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new SubDatasetGraphQuery();

            if (data.hasOwnProperty('name')) {
                obj['name'] = ApiClient.convertToType(data['name'], 'String');
            }
            if (data.hasOwnProperty('description')) {
                obj['description'] = ApiClient.convertToType(data['description'], 'String');
            }
            if (data.hasOwnProperty('queries')) {
                obj['queries'] = ApiClient.convertToType(data['queries'], ['String']);
            }
            if (data.hasOwnProperty('main')) {
                obj['main'] = ApiClient.convertToType(data['main'], 'Boolean');
            }
        }
        return obj;
    }

    /**
     * Validates the JSON data with respect to <code>SubDatasetGraphQuery</code>.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @return {boolean} to indicate whether the JSON data is valid with respect to <code>SubDatasetGraphQuery</code>.
     */
    static validateJSON(data) {
        // ensure the json data is a string
        if (data['name'] && !(typeof data['name'] === 'string' || data['name'] instanceof String)) {
            throw new Error("Expected the field `name` to be a primitive type in the JSON string but got " + data['name']);
        }
        // ensure the json data is a string
        if (data['description'] && !(typeof data['description'] === 'string' || data['description'] instanceof String)) {
            throw new Error("Expected the field `description` to be a primitive type in the JSON string but got " + data['description']);
        }
        // ensure the json data is an array
        if (!Array.isArray(data['queries'])) {
            throw new Error("Expected the field `queries` to be an array in the JSON data but got " + data['queries']);
        }

        return true;
    }


}



/**
 * the name of the subdataset
 * @member {String} name
 */
SubDatasetGraphQuery.prototype['name'] = undefined;

/**
 * the description of the subdataset
 * @member {String} description
 */
SubDatasetGraphQuery.prototype['description'] = undefined;

/**
 * the query in cypher language
 * @member {Array.<String>} queries
 */
SubDatasetGraphQuery.prototype['queries'] = undefined;

/**
 * is this the main dataset
 * @member {Boolean} main
 */
SubDatasetGraphQuery.prototype['main'] = undefined;






export default SubDatasetGraphQuery;

