/**
 * Cosmo Tech Platform API
 * Cosmo Tech Platform API
 *
 * The version of the OpenAPI document: 2.3.11
 * Contact: platform@cosmotech.com
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 *
 */

import ApiClient from '../ApiClient';
/**
* Enum class RunTemplateHandlerId.
* @enum {}
* @readonly
*/
export default class RunTemplateHandlerId {
    
        /**
         * value: "parameters_handler"
         * @const
         */
        "parameters_handler" = "parameters_handler";

    
        /**
         * value: "validator"
         * @const
         */
        "validator" = "validator";

    
        /**
         * value: "prerun"
         * @const
         */
        "prerun" = "prerun";

    
        /**
         * value: "engine"
         * @const
         */
        "engine" = "engine";

    
        /**
         * value: "postrun"
         * @const
         */
        "postrun" = "postrun";

    
        /**
         * value: "scenariodata_transform"
         * @const
         */
        "scenariodata_transform" = "scenariodata_transform";

    

    /**
    * Returns a <code>RunTemplateHandlerId</code> enum value from a Javascript object name.
    * @param {Object} data The plain JavaScript object containing the name of the enum value.
    * @return {module:model/RunTemplateHandlerId} The enum <code>RunTemplateHandlerId</code> value.
    */
    static constructFromObject(object) {
        return object;
    }
}

