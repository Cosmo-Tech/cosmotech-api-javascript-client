/**
 * Cosmo Tech Platform API
 * Cosmo Tech Platform API
 *
 * The version of the OpenAPI document: 3.1.2-SNAPSHOT
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
 * @version 3.1.2-SNAPSHOT
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


}

/**
 * the query in cypher language
 * @member {String} query
 */
DatasetTwinGraphQuery.prototype['query'] = undefined;






export default DatasetTwinGraphQuery;

