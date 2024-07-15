/**
 * Cosmo Tech Platform API
 * Cosmo Tech Platform API
 *
 * The version of the OpenAPI document: 4.0.2-onprem
 * Contact: platform@cosmotech.com
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 *
 */

import ApiClient from '../ApiClient';
/**
* Enum class RunnerValidationStatus.
* @enum {}
* @readonly
*/
export default class RunnerValidationStatus {
    
        /**
         * value: "Draft"
         * @const
         */
        "Draft" = "Draft";

    
        /**
         * value: "Rejected"
         * @const
         */
        "Rejected" = "Rejected";

    
        /**
         * value: "Unknown"
         * @const
         */
        "Unknown" = "Unknown";

    
        /**
         * value: "Validated"
         * @const
         */
        "Validated" = "Validated";

    

    /**
    * Returns a <code>RunnerValidationStatus</code> enum value from a Javascript object name.
    * @param {Object} data The plain JavaScript object containing the name of the enum value.
    * @return {module:model/RunnerValidationStatus} The enum <code>RunnerValidationStatus</code> value.
    */
    static constructFromObject(object) {
        return object;
    }
}

