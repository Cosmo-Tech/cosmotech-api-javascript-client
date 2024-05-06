/**
 * Cosmo Tech Platform API
 * Cosmo Tech Platform API
 *
 * The version of the OpenAPI document: 3.1.1-SNAPSHOT
 * Contact: platform@cosmotech.com
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 *
 */

import ApiClient from '../ApiClient';

/**
 * The ScenarioRunResult model module.
 * @module model/ScenarioRunResult
 * @version 3.1.1-SNAPSHOT
 */
class ScenarioRunResult {
    /**
     * Constructs a new <code>ScenarioRunResult</code>.
     * a ScenarioRunProbeResult with all ScenarioRunResult
     * @alias module:model/ScenarioRunResult
     */
    constructor() { 
        
        ScenarioRunResult.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>ScenarioRunResult</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/ScenarioRunResult} obj Optional instance to populate.
     * @return {module:model/ScenarioRunResult} The populated <code>ScenarioRunResult</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new ScenarioRunResult();

            if (data.hasOwnProperty('id')) {
                obj['id'] = ApiClient.convertToType(data['id'], 'String');
            }
            if (data.hasOwnProperty('results')) {
                obj['results'] = ApiClient.convertToType(data['results'], [{'String': 'String'}]);
            }
        }
        return obj;
    }

    /**
     * Validates the JSON data with respect to <code>ScenarioRunResult</code>.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @return {boolean} to indicate whether the JSON data is valid with respect to <code>ScenarioRunResult</code>.
     */
    static validateJSON(data) {
        // ensure the json data is a string
        if (data['id'] && !(typeof data['id'] === 'string' || data['id'] instanceof String)) {
            throw new Error("Expected the field `id` to be a primitive type in the JSON string but got " + data['id']);
        }
        // ensure the json data is an array
        if (!Array.isArray(data['results'])) {
            throw new Error("Expected the field `results` to be an array in the JSON data but got " + data['results']);
        }

        return true;
    }


}



/**
 * @member {String} id
 */
ScenarioRunResult.prototype['id'] = undefined;

/**
 * @member {Array.<Object.<String, String>>} results
 */
ScenarioRunResult.prototype['results'] = undefined;






export default ScenarioRunResult;

