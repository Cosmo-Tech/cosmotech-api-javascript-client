/**
 * Cosmo Tech Platform API
 * Cosmo Tech Platform API
 *
 * The version of the OpenAPI document: 2.4.6-private
 * Contact: platform@cosmotech.com
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 *
 */

import ApiClient from '../ApiClient';
/**
* Enum class ScenarioRunState.
* @enum {}
* @readonly
*/
export default class ScenarioRunState {
    
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
         * value: "DataIngestionInProgress"
         * @const
         */
        "DataIngestionInProgress" = "DataIngestionInProgress";

    
        /**
         * value: "DataIngestionFailure"
         * @const
         */
        "DataIngestionFailure" = "DataIngestionFailure";

    

    /**
    * Returns a <code>ScenarioRunState</code> enum value from a Javascript object name.
    * @param {Object} data The plain JavaScript object containing the name of the enum value.
    * @return {module:model/ScenarioRunState} The enum <code>ScenarioRunState</code> value.
    */
    static constructFromObject(object) {
        return object;
    }
}

