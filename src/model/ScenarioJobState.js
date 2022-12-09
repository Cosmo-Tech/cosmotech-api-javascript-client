/**
 * Cosmo Tech Plaform API
 * Cosmo Tech Platform API
 *
 * The version of the OpenAPI document: 2.1.5-dev
 * Contact: platform@cosmotech.com
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 *
 */

import ApiClient from '../ApiClient';
/**
* Enum class ScenarioJobState.
* @enum {}
* @readonly
*/
export default class ScenarioJobState {
    
        /**
         * value: "Created"
         * @const
         */
        "Created" = "Created";

    
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
    * Returns a <code>ScenarioJobState</code> enum value from a Javascript object name.
    * @param {Object} data The plain JavaScript object containing the name of the enum value.
    * @return {module:model/ScenarioJobState} The enum <code>ScenarioJobState</code> value.
    */
    static constructFromObject(object) {
        return object;
    }
}

