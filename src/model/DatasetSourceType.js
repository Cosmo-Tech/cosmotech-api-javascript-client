/**
 * Cosmo Tech Platform API
 * Cosmo Tech Platform API
 *
 * The version of the OpenAPI document: 4.0.3-SNAPSHOT
 * Contact: platform@cosmotech.com
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 *
 */

import ApiClient from '../ApiClient';
/**
* Enum class DatasetSourceType.
* @enum {}
* @readonly
*/
export default class DatasetSourceType {
    
        /**
         * value: "ADT"
         * @const
         */
        "ADT" = "ADT";

    
        /**
         * value: "AzureStorage"
         * @const
         */
        "AzureStorage" = "AzureStorage";

    
        /**
         * value: "File"
         * @const
         */
        "File" = "File";

    
        /**
         * value: "None"
         * @const
         */
        "None" = "None";

    
        /**
         * value: "Twincache"
         * @const
         */
        "Twincache" = "Twincache";

    
        /**
         * value: "ETL"
         * @const
         */
        "ETL" = "ETL";

    

    /**
    * Returns a <code>DatasetSourceType</code> enum value from a Javascript object name.
    * @param {Object} data The plain JavaScript object containing the name of the enum value.
    * @return {module:model/DatasetSourceType} The enum <code>DatasetSourceType</code> value.
    */
    static constructFromObject(object) {
        return object;
    }
}

