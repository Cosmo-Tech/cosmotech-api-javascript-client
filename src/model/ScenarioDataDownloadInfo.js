/**
 * Cosmo Tech Plaform API
 * Cosmo Tech Platform API
 *
 * The version of the OpenAPI document: 1.0.5-SNAPSHOT
 * Contact: platform@cosmotech.com
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 *
 */

import ApiClient from '../ApiClient';
import ScenarioJobState from './ScenarioJobState';

/**
 * The ScenarioDataDownloadInfo model module.
 * @module model/ScenarioDataDownloadInfo
 * @version 1.0.5-SNAPSHOT
 */
class ScenarioDataDownloadInfo {
    /**
     * Constructs a new <code>ScenarioDataDownloadInfo</code>.
     * Scenario data download job info
     * @alias module:model/ScenarioDataDownloadInfo
     */
    constructor() { 
        
        ScenarioDataDownloadInfo.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>ScenarioDataDownloadInfo</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/ScenarioDataDownloadInfo} obj Optional instance to populate.
     * @return {module:model/ScenarioDataDownloadInfo} The populated <code>ScenarioDataDownloadInfo</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new ScenarioDataDownloadInfo();

            if (data.hasOwnProperty('url')) {
                obj['url'] = ApiClient.convertToType(data['url'], 'String');
            }
            if (data.hasOwnProperty('state')) {
                obj['state'] = ScenarioJobState.constructFromObject(data['state']);
            }
        }
        return obj;
    }


}

/**
 * the Scenario Data Download URL
 * @member {String} url
 */
ScenarioDataDownloadInfo.prototype['url'] = undefined;

/**
 * @member {module:model/ScenarioJobState} state
 */
ScenarioDataDownloadInfo.prototype['state'] = undefined;






export default ScenarioDataDownloadInfo;

