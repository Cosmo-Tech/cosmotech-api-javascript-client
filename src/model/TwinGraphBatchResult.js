/**
 * Cosmo Tech Platform API
 * Cosmo Tech Platform API
 *
 * The version of the OpenAPI document: 3.2.1
 * Contact: platform@cosmotech.com
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 *
 */

import ApiClient from '../ApiClient';

/**
 * The TwinGraphBatchResult model module.
 * @module model/TwinGraphBatchResult
 * @version 3.2.1
 */
class TwinGraphBatchResult {
    /**
     * Constructs a new <code>TwinGraphBatchResult</code>.
     * Processing result
     * @alias module:model/TwinGraphBatchResult
     * @param totalLines {Number} 
     * @param processedLines {Number} 
     * @param errors {Array.<String>} 
     */
    constructor(totalLines, processedLines, errors) { 
        
        TwinGraphBatchResult.initialize(this, totalLines, processedLines, errors);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj, totalLines, processedLines, errors) { 
        obj['totalLines'] = totalLines;
        obj['processedLines'] = processedLines;
        obj['errors'] = errors;
    }

    /**
     * Constructs a <code>TwinGraphBatchResult</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/TwinGraphBatchResult} obj Optional instance to populate.
     * @return {module:model/TwinGraphBatchResult} The populated <code>TwinGraphBatchResult</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new TwinGraphBatchResult();

            if (data.hasOwnProperty('totalLines')) {
                obj['totalLines'] = ApiClient.convertToType(data['totalLines'], 'Number');
            }
            if (data.hasOwnProperty('processedLines')) {
                obj['processedLines'] = ApiClient.convertToType(data['processedLines'], 'Number');
            }
            if (data.hasOwnProperty('errors')) {
                obj['errors'] = ApiClient.convertToType(data['errors'], ['String']);
            }
        }
        return obj;
    }

    /**
     * Validates the JSON data with respect to <code>TwinGraphBatchResult</code>.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @return {boolean} to indicate whether the JSON data is valid with respect to <code>TwinGraphBatchResult</code>.
     */
    static validateJSON(data) {
        // check to make sure all required properties are present in the JSON string
        for (const property of TwinGraphBatchResult.RequiredProperties) {
            if (!data.hasOwnProperty(property)) {
                throw new Error("The required field `" + property + "` is not found in the JSON data: " + JSON.stringify(data));
            }
        }
        // ensure the json data is an array
        if (!Array.isArray(data['errors'])) {
            throw new Error("Expected the field `errors` to be an array in the JSON data but got " + data['errors']);
        }

        return true;
    }


}

TwinGraphBatchResult.RequiredProperties = ["totalLines", "processedLines", "errors"];

/**
 * @member {Number} totalLines
 */
TwinGraphBatchResult.prototype['totalLines'] = undefined;

/**
 * @member {Number} processedLines
 */
TwinGraphBatchResult.prototype['processedLines'] = undefined;

/**
 * @member {Array.<String>} errors
 */
TwinGraphBatchResult.prototype['errors'] = undefined;






export default TwinGraphBatchResult;

