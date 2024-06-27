/**
 * Cosmo Tech Platform API
 * Cosmo Tech Platform API
 *
 * The version of the OpenAPI document: 3.2.7
 * Contact: platform@cosmotech.com
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 *
 */

import ApiClient from '../ApiClient';
/**
* Enum class IngestionStatusEnum.
* @enum {}
* @readonly
*/
export default class IngestionStatusEnum {
    
        /**
         * value: "NONE"
         * @const
         */
        "NONE" = "NONE";

    
        /**
         * value: "PENDING"
         * @const
         */
        "PENDING" = "PENDING";

    
        /**
         * value: "ERROR"
         * @const
         */
        "ERROR" = "ERROR";

    
        /**
         * value: "SUCCESS"
         * @const
         */
        "SUCCESS" = "SUCCESS";

    

    /**
    * Returns a <code>IngestionStatusEnum</code> enum value from a Javascript object name.
    * @param {Object} data The plain JavaScript object containing the name of the enum value.
    * @return {module:model/IngestionStatusEnum} The enum <code>IngestionStatusEnum</code> value.
    */
    static constructFromObject(object) {
        return object;
    }
}

