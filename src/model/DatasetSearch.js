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
 * The DatasetSearch model module.
 * @module model/DatasetSearch
 * @version 3.2.2
 */
class DatasetSearch {
    /**
     * Constructs a new <code>DatasetSearch</code>.
     * the search options
     * @alias module:model/DatasetSearch
     * @param datasetTags {Array.<String>} the dataset tag list to search
     */
    constructor(datasetTags) { 
        
        DatasetSearch.initialize(this, datasetTags);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj, datasetTags) { 
        obj['datasetTags'] = datasetTags;
    }

    /**
     * Constructs a <code>DatasetSearch</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/DatasetSearch} obj Optional instance to populate.
     * @return {module:model/DatasetSearch} The populated <code>DatasetSearch</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new DatasetSearch();

            if (data.hasOwnProperty('datasetTags')) {
                obj['datasetTags'] = ApiClient.convertToType(data['datasetTags'], ['String']);
            }
        }
        return obj;
    }

    /**
     * Validates the JSON data with respect to <code>DatasetSearch</code>.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @return {boolean} to indicate whether the JSON data is valid with respect to <code>DatasetSearch</code>.
     */
    static validateJSON(data) {
        // check to make sure all required properties are present in the JSON string
        for (const property of DatasetSearch.RequiredProperties) {
            if (!data.hasOwnProperty(property)) {
                throw new Error("The required field `" + property + "` is not found in the JSON data: " + JSON.stringify(data));
            }
        }
        // ensure the json data is an array
        if (!Array.isArray(data['datasetTags'])) {
            throw new Error("Expected the field `datasetTags` to be an array in the JSON data but got " + data['datasetTags']);
        }

        return true;
    }


}

DatasetSearch.RequiredProperties = ["datasetTags"];

/**
 * the dataset tag list to search
 * @member {Array.<String>} datasetTags
 */
DatasetSearch.prototype['datasetTags'] = undefined;






export default DatasetSearch;

