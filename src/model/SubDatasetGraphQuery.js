/**
 * Cosmo Tech Platform API
 * Cosmo Tech Platform API
 *
 * The version of the OpenAPI document: 3.0.12-SNAPSHOT
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
 * @version 3.0.12-SNAPSHOT
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

