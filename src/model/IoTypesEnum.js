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
* Enum class IoTypesEnum.
* @enum {}
* @readonly
*/
export default class IoTypesEnum {
    
        /**
         * value: "read"
         * @const
         */
        "read" = "read";

    
        /**
         * value: "write"
         * @const
         */
        "write" = "write";

    

    /**
    * Returns a <code>IoTypesEnum</code> enum value from a Javascript object name.
    * @param {Object} data The plain JavaScript object containing the name of the enum value.
    * @return {module:model/IoTypesEnum} The enum <code>IoTypesEnum</code> value.
    */
    static constructFromObject(object) {
        return object;
    }
}

