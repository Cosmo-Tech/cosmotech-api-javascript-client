/**
 * Cosmo Tech Platform API
 * Cosmo Tech Platform API
 *
 * The version of the OpenAPI document: 3.2.2
 * Contact: platform@cosmotech.com
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 *
 */

import ApiClient from '../ApiClient';
/**
* Enum class ScenarioRunSearchState.
* @enum {}
* @readonly
*/
export default class ScenarioRunSearchState {
    
        /**
         * value: "FetchingDatasets"
         * @const
         */
        "FetchingDatasets" = "FetchingDatasets";

    
        /**
         * value: "FetchingScenarioParameters"
         * @const
         */
        "FetchingScenarioParameters" = "FetchingScenarioParameters";

    
        /**
         * value: "ApplyingScenarioParameters"
         * @const
         */
        "ApplyingScenarioParameters" = "ApplyingScenarioParameters";

    
        /**
         * value: "ValidatingScenarioData"
         * @const
         */
        "ValidatingScenarioData" = "ValidatingScenarioData";

    
        /**
         * value: "SendingScenarioDataToDataWarehouse"
         * @const
         */
        "SendingScenarioDataToDataWarehouse" = "SendingScenarioDataToDataWarehouse";

    
        /**
         * value: "PreRun"
         * @const
         */
        "PreRun" = "PreRun";

    
        /**
         * value: "Running"
         * @const
         */
        "Running" = "Running";

    
        /**
         * value: "PostRun"
         * @const
         */
        "PostRun" = "PostRun";

    
        /**
         * value: "Success"
         * @const
         */
        "Success" = "Success";

    
        /**
         * value: "Failed"
         * @const
         */
        "Failed" = "Failed";

    

    /**
    * Returns a <code>ScenarioRunSearchState</code> enum value from a Javascript object name.
    * @param {Object} data The plain JavaScript object containing the name of the enum value.
    * @return {module:model/ScenarioRunSearchState} The enum <code>ScenarioRunSearchState</code> value.
    */
    static constructFromObject(object) {
        return object;
    }
}

