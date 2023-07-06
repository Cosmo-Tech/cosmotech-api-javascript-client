/**
 * Cosmo Tech Platform API
 * Cosmo Tech Platform API
 *
 * The version of the OpenAPI document: 2.3.14-private
 * Contact: platform@cosmotech.com
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 *
 */

import ApiClient from '../ApiClient';

/**
 * The TwinGraphImportInfo model module.
 * @module model/TwinGraphImportInfo
 * @version 2.3.14-private
 */
class TwinGraphImportInfo {
    /**
     * Constructs a new <code>TwinGraphImportInfo</code>.
     * a twin graph query in cypher language
     * @alias module:model/TwinGraphImportInfo
     */
    constructor() { 
        
        TwinGraphImportInfo.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>TwinGraphImportInfo</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/TwinGraphImportInfo} obj Optional instance to populate.
     * @return {module:model/TwinGraphImportInfo} The populated <code>TwinGraphImportInfo</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new TwinGraphImportInfo();

            if (data.hasOwnProperty('jobId')) {
                obj['jobId'] = ApiClient.convertToType(data['jobId'], 'String');
            }
            if (data.hasOwnProperty('graphName')) {
                obj['graphName'] = ApiClient.convertToType(data['graphName'], 'String');
            }
        }
        return obj;
    }


}

/**
 * the import job id
 * @member {String} jobId
 */
TwinGraphImportInfo.prototype['jobId'] = undefined;

/**
 * the twin graph name
 * @member {String} graphName
 */
TwinGraphImportInfo.prototype['graphName'] = undefined;






export default TwinGraphImportInfo;

