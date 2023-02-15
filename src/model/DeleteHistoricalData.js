/**
 * Cosmo Tech Platform API
 * Cosmo Tech Platform API
 *
 * The version of the OpenAPI document: 3.0.0-dev
 * Contact: platform@cosmotech.com
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 *
 */

import ApiClient from '../ApiClient';

/**
 * The DeleteHistoricalData model module.
 * @module model/DeleteHistoricalData
 * @version 3.0.0-dev
 */
class DeleteHistoricalData {
    /**
     * Constructs a new <code>DeleteHistoricalData</code>.
     * Configuration of scenario runs deletion automatic mecanism
     * @alias module:model/DeleteHistoricalData
     * @param enable {Boolean} Activate or Deactivate historical data deletion
     */
    constructor(enable) { 
        
        DeleteHistoricalData.initialize(this, enable);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj, enable) { 
        obj['enable'] = enable || true;
    }

    /**
     * Constructs a <code>DeleteHistoricalData</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/DeleteHistoricalData} obj Optional instance to populate.
     * @return {module:model/DeleteHistoricalData} The populated <code>DeleteHistoricalData</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new DeleteHistoricalData();

            if (data.hasOwnProperty('enable')) {
                obj['enable'] = ApiClient.convertToType(data['enable'], 'Boolean');
            }
            if (data.hasOwnProperty('pollFrequency')) {
                obj['pollFrequency'] = ApiClient.convertToType(data['pollFrequency'], 'Number');
            }
            if (data.hasOwnProperty('timeOut')) {
                obj['timeOut'] = ApiClient.convertToType(data['timeOut'], 'Number');
            }
        }
        return obj;
    }


}

/**
 * Activate or Deactivate historical data deletion
 * @member {Boolean} enable
 * @default true
 */
DeleteHistoricalData.prototype['enable'] = true;

/**
 * define the polling frequency of scenario run status (in millis)
 * @member {Number} pollFrequency
 * @default 10000
 */
DeleteHistoricalData.prototype['pollFrequency'] = 10000;

/**
 * define the polling timeout
 * @member {Number} timeOut
 * @default 28800
 */
DeleteHistoricalData.prototype['timeOut'] = 28800;






export default DeleteHistoricalData;

