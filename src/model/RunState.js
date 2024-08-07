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
* Enum class RunState.
* @enum {}
* @readonly
*/
export default class RunState {
    
        /**
         * value: "Running"
         * @const
         */
        "Running" = "Running";

    
        /**
         * value: "Successful"
         * @const
         */
        "Successful" = "Successful";

    
        /**
         * value: "Failed"
         * @const
         */
        "Failed" = "Failed";

    
        /**
         * value: "Unknown"
         * @const
         */
        "Unknown" = "Unknown";

    

    /**
    * Returns a <code>RunState</code> enum value from a Javascript object name.
    * @param {Object} data The plain JavaScript object containing the name of the enum value.
    * @return {module:model/RunState} The enum <code>RunState</code> value.
    */
    static constructFromObject(object) {
        return object;
    }
}

