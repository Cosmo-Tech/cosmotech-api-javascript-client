/**
 * Cosmo Tech Platform API
 * Cosmo Tech Platform API
 *
 * The version of the OpenAPI document: 3.2.8
 * Contact: platform@cosmotech.com
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 *
 */

import ApiClient from '../ApiClient';

/**
 * The DatasetCompatibility model module.
 * @module model/DatasetCompatibility
 * @version 3.2.8
 */
class DatasetCompatibility {
    /**
     * Constructs a new <code>DatasetCompatibility</code>.
     * a Dataset compatibility constraint to a Solution version open range
     * @alias module:model/DatasetCompatibility
     * @param solutionKey {String} the Solution key which group Solution versions
     */
    constructor(solutionKey) { 
        
        DatasetCompatibility.initialize(this, solutionKey);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj, solutionKey) { 
        obj['solutionKey'] = solutionKey;
    }

    /**
     * Constructs a <code>DatasetCompatibility</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/DatasetCompatibility} obj Optional instance to populate.
     * @return {module:model/DatasetCompatibility} The populated <code>DatasetCompatibility</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new DatasetCompatibility();

            if (data.hasOwnProperty('solutionKey')) {
                obj['solutionKey'] = ApiClient.convertToType(data['solutionKey'], 'String');
            }
            if (data.hasOwnProperty('minimumVersion')) {
                obj['minimumVersion'] = ApiClient.convertToType(data['minimumVersion'], 'String');
            }
            if (data.hasOwnProperty('maximumVersion')) {
                obj['maximumVersion'] = ApiClient.convertToType(data['maximumVersion'], 'String');
            }
        }
        return obj;
    }

    /**
     * Validates the JSON data with respect to <code>DatasetCompatibility</code>.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @return {boolean} to indicate whether the JSON data is valid with respect to <code>DatasetCompatibility</code>.
     */
    static validateJSON(data) {
        // check to make sure all required properties are present in the JSON string
        for (const property of DatasetCompatibility.RequiredProperties) {
            if (!data.hasOwnProperty(property)) {
                throw new Error("The required field `" + property + "` is not found in the JSON data: " + JSON.stringify(data));
            }
        }
        // ensure the json data is a string
        if (data['solutionKey'] && !(typeof data['solutionKey'] === 'string' || data['solutionKey'] instanceof String)) {
            throw new Error("Expected the field `solutionKey` to be a primitive type in the JSON string but got " + data['solutionKey']);
        }
        // ensure the json data is a string
        if (data['minimumVersion'] && !(typeof data['minimumVersion'] === 'string' || data['minimumVersion'] instanceof String)) {
            throw new Error("Expected the field `minimumVersion` to be a primitive type in the JSON string but got " + data['minimumVersion']);
        }
        // ensure the json data is a string
        if (data['maximumVersion'] && !(typeof data['maximumVersion'] === 'string' || data['maximumVersion'] instanceof String)) {
            throw new Error("Expected the field `maximumVersion` to be a primitive type in the JSON string but got " + data['maximumVersion']);
        }

        return true;
    }


}

DatasetCompatibility.RequiredProperties = ["solutionKey"];

/**
 * the Solution key which group Solution versions
 * @member {String} solutionKey
 */
DatasetCompatibility.prototype['solutionKey'] = undefined;

/**
 * the Solution minimum version compatibility (version included)
 * @member {String} minimumVersion
 */
DatasetCompatibility.prototype['minimumVersion'] = undefined;

/**
 * the Solution maximum version compatibility (version included)
 * @member {String} maximumVersion
 */
DatasetCompatibility.prototype['maximumVersion'] = undefined;






export default DatasetCompatibility;

