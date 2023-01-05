/**
 * Cosmo Tech Plaform API
 * Cosmo Tech Platform API
 *
 * The version of the OpenAPI document: 2.1.11-dev
 * Contact: platform@cosmotech.com
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 *
 */

import ApiClient from '../ApiClient';

/**
 * The TwinGraphQuery model module.
 * @module model/TwinGraphQuery
 * @version 2.1.11-dev
 */
class TwinGraphQuery {
    /**
     * Constructs a new <code>TwinGraphQuery</code>.
     * a twin graph query in cypher language
     * @alias module:model/TwinGraphQuery
     * @param query {String} the query in cypher language
     */
    constructor(query) { 
        
        TwinGraphQuery.initialize(this, query);
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
     * Constructs a <code>TwinGraphQuery</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/TwinGraphQuery} obj Optional instance to populate.
     * @return {module:model/TwinGraphQuery} The populated <code>TwinGraphQuery</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new TwinGraphQuery();

            if (data.hasOwnProperty('version')) {
                obj['version'] = ApiClient.convertToType(data['version'], 'String');
            }
            if (data.hasOwnProperty('query')) {
                obj['query'] = ApiClient.convertToType(data['query'], 'String');
            }
        }
        return obj;
    }


}

/**
 * Twin graph version
 * @member {String} version
 */
TwinGraphQuery.prototype['version'] = undefined;

/**
 * the query in cypher language
 * @member {String} query
 */
TwinGraphQuery.prototype['query'] = undefined;






export default TwinGraphQuery;

