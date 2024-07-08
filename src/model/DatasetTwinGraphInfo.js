/**
 * Cosmo Tech Platform API
 * Cosmo Tech Platform API
 *
 * The version of the OpenAPI document: 4.0.2-SNAPSHOT
 * Contact: platform@cosmotech.com
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 *
 */

import ApiClient from '../ApiClient';

/**
 * The DatasetTwinGraphInfo model module.
 * @module model/DatasetTwinGraphInfo
 * @version 4.0.2-SNAPSHOT
 */
class DatasetTwinGraphInfo {
    /**
     * Constructs a new <code>DatasetTwinGraphInfo</code>.
     * a twin graph query in cypher language
     * @alias module:model/DatasetTwinGraphInfo
     */
    constructor() { 
        
        DatasetTwinGraphInfo.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>DatasetTwinGraphInfo</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/DatasetTwinGraphInfo} obj Optional instance to populate.
     * @return {module:model/DatasetTwinGraphInfo} The populated <code>DatasetTwinGraphInfo</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new DatasetTwinGraphInfo();

            if (data.hasOwnProperty('jobId')) {
                obj['jobId'] = ApiClient.convertToType(data['jobId'], 'String');
            }
            if (data.hasOwnProperty('datasetId')) {
                obj['datasetId'] = ApiClient.convertToType(data['datasetId'], 'String');
            }
            if (data.hasOwnProperty('status')) {
                obj['status'] = ApiClient.convertToType(data['status'], 'String');
            }
        }
        return obj;
    }

    /**
     * Validates the JSON data with respect to <code>DatasetTwinGraphInfo</code>.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @return {boolean} to indicate whether the JSON data is valid with respect to <code>DatasetTwinGraphInfo</code>.
     */
    static validateJSON(data) {
        // ensure the json data is a string
        if (data['jobId'] && !(typeof data['jobId'] === 'string' || data['jobId'] instanceof String)) {
            throw new Error("Expected the field `jobId` to be a primitive type in the JSON string but got " + data['jobId']);
        }
        // ensure the json data is a string
        if (data['datasetId'] && !(typeof data['datasetId'] === 'string' || data['datasetId'] instanceof String)) {
            throw new Error("Expected the field `datasetId` to be a primitive type in the JSON string but got " + data['datasetId']);
        }
        // ensure the json data is a string
        if (data['status'] && !(typeof data['status'] === 'string' || data['status'] instanceof String)) {
            throw new Error("Expected the field `status` to be a primitive type in the JSON string but got " + data['status']);
        }

        return true;
    }


}



/**
 * the import job id
 * @member {String} jobId
 */
DatasetTwinGraphInfo.prototype['jobId'] = undefined;

/**
 * the Dataset id
 * @member {String} datasetId
 */
DatasetTwinGraphInfo.prototype['datasetId'] = undefined;

/**
 * Twingraph status
 * @member {String} status
 */
DatasetTwinGraphInfo.prototype['status'] = undefined;






export default DatasetTwinGraphInfo;

