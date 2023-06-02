/**
 * Cosmo Tech Platform API
 * Cosmo Tech Platform API
 *
 * The version of the OpenAPI document: 2.4.3-preview
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
 * @version 2.4.3-preview
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


}

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

