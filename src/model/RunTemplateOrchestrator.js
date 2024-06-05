/**
 * Cosmo Tech Platform API
 * Cosmo Tech Platform API
 *
 * The version of the OpenAPI document: 3.1.9
 * Contact: platform@cosmotech.com
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 *
 */

import ApiClient from '../ApiClient';
/**
* Enum class RunTemplateOrchestrator.
* @enum {}
* @readonly
*/
export default class RunTemplateOrchestrator {
    
        /**
         * value: "argoWorkflow"
         * @const
         */
        "argoWorkflow" = "argoWorkflow";

    
        /**
         * value: "csmOrc"
         * @const
         */
        "csmOrc" = "csmOrc";

    

    /**
    * Returns a <code>RunTemplateOrchestrator</code> enum value from a Javascript object name.
    * @param {Object} data The plain JavaScript object containing the name of the enum value.
    * @return {module:model/RunTemplateOrchestrator} The enum <code>RunTemplateOrchestrator</code> value.
    */
    static constructFromObject(object) {
        return object;
    }
}

