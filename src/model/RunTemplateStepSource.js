/**
 * Cosmo Tech Plaform API
 * Cosmo Tech Platform API
 *
 * The version of the OpenAPI document: 0.0.8-SNAPSHOT
 * Contact: platform@cosmotech.com
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 *
 */

import ApiClient from '../ApiClient';
/**
* Enum class RunTemplateStepSource.
* @enum {}
* @readonly
*/
export default class RunTemplateStepSource {
    
        /**
         * value: "local"
         * @const
         */
        "local" = "local";

    
        /**
         * value: "cloud"
         * @const
         */
        "cloud" = "cloud";

    

    /**
    * Returns a <code>RunTemplateStepSource</code> enum value from a Javascript object name.
    * @param {Object} data The plain JavaScript object containing the name of the enum value.
    * @return {module:model/RunTemplateStepSource} The enum <code>RunTemplateStepSource</code> value.
    */
    static constructFromObject(object) {
        return object;
    }
}

