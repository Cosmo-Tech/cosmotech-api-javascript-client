/**
 * Cosmo Tech Platform API
 * Cosmo Tech Platform API
 *
 * The version of the OpenAPI document: 2.3.12-SNAPSHOT
 * Contact: platform@cosmotech.com
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 *
 */

import ApiClient from '../ApiClient';

/**
 * The DatasetCopyParameters model module.
 * @module model/DatasetCopyParameters
 * @version 2.3.12-SNAPSHOT
 */
class DatasetCopyParameters {
    /**
     * Constructs a new <code>DatasetCopyParameters</code>.
     * the Dataset Copy Parameters
     * @alias module:model/DatasetCopyParameters
     */
    constructor() { 
        
        DatasetCopyParameters.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>DatasetCopyParameters</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/DatasetCopyParameters} obj Optional instance to populate.
     * @return {module:model/DatasetCopyParameters} The populated <code>DatasetCopyParameters</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new DatasetCopyParameters();

            if (data.hasOwnProperty('sourceId')) {
                obj['sourceId'] = ApiClient.convertToType(data['sourceId'], 'String');
            }
            if (data.hasOwnProperty('targetId')) {
                obj['targetId'] = ApiClient.convertToType(data['targetId'], 'String');
            }
            if (data.hasOwnProperty('options')) {
                obj['options'] = ApiClient.convertToType(data['options'], {'String': Object});
            }
        }
        return obj;
    }


}

/**
 * the source Dataset id
 * @member {String} sourceId
 */
DatasetCopyParameters.prototype['sourceId'] = undefined;

/**
 * the target Dataset id
 * @member {String} targetId
 */
DatasetCopyParameters.prototype['targetId'] = undefined;

/**
 * freeform options to path to connectors
 * @member {Object.<String, Object>} options
 */
DatasetCopyParameters.prototype['options'] = undefined;






export default DatasetCopyParameters;

