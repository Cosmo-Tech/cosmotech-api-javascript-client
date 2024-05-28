/**
 * Cosmo Tech Platform API
 * Cosmo Tech Platform API
 *
 * The version of the OpenAPI document: 3.2.3
 * Contact: platform@cosmotech.com
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 *
 */

import ApiClient from '../ApiClient';
/**
* Enum class TwincacheStatusEnum.
* @enum {}
* @readonly
*/
export default class TwincacheStatusEnum {
    
        /**
         * value: "EMPTY"
         * @const
         */
        "EMPTY" = "EMPTY";

    
        /**
         * value: "FULL"
         * @const
         */
        "FULL" = "FULL";

    

    /**
    * Returns a <code>TwincacheStatusEnum</code> enum value from a Javascript object name.
    * @param {Object} data The plain JavaScript object containing the name of the enum value.
    * @return {module:model/TwincacheStatusEnum} The enum <code>TwincacheStatusEnum</code> value.
    */
    static constructFromObject(object) {
        return object;
    }
}

