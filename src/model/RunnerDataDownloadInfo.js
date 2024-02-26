/**
 * Cosmo Tech Platform API
 * Cosmo Tech Platform API
 *
 * The version of the OpenAPI document: 3.1.0-dev
 * Contact: platform@cosmotech.com
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 *
 */

import ApiClient from '../ApiClient';
import RunnerJobState from './RunnerJobState';

/**
 * The RunnerDataDownloadInfo model module.
 * @module model/RunnerDataDownloadInfo
 * @version 3.1.0-dev
 */
class RunnerDataDownloadInfo {
    /**
     * Constructs a new <code>RunnerDataDownloadInfo</code>.
     * Runner data download job info
     * @alias module:model/RunnerDataDownloadInfo
     */
    constructor() { 
        
        RunnerDataDownloadInfo.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>RunnerDataDownloadInfo</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/RunnerDataDownloadInfo} obj Optional instance to populate.
     * @return {module:model/RunnerDataDownloadInfo} The populated <code>RunnerDataDownloadInfo</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new RunnerDataDownloadInfo();

            if (data.hasOwnProperty('url')) {
                obj['url'] = ApiClient.convertToType(data['url'], 'String');
            }
            if (data.hasOwnProperty('state')) {
                obj['state'] = RunnerJobState.constructFromObject(data['state']);
            }
        }
        return obj;
    }


}

/**
 * the Runner Data Download URL
 * @member {String} url
 */
RunnerDataDownloadInfo.prototype['url'] = undefined;

/**
 * @member {module:model/RunnerJobState} state
 */
RunnerDataDownloadInfo.prototype['state'] = undefined;






export default RunnerDataDownloadInfo;

