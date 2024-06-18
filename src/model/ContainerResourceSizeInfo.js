/**
 * Cosmo Tech Platform API
 * Cosmo Tech Platform API
 *
 * The version of the OpenAPI document: 3.2.6
 * Contact: platform@cosmotech.com
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 *
 */

import ApiClient from '../ApiClient';

/**
 * The ContainerResourceSizeInfo model module.
 * @module model/ContainerResourceSizeInfo
 * @version 3.2.6
 */
class ContainerResourceSizeInfo {
    /**
     * Constructs a new <code>ContainerResourceSizeInfo</code>.
     * define cpus and memory needs
     * @alias module:model/ContainerResourceSizeInfo
     * @param cpu {String} define cpu needs
     * @param memory {String} define memory needs
     */
    constructor(cpu, memory) { 
        
        ContainerResourceSizeInfo.initialize(this, cpu, memory);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj, cpu, memory) { 
        obj['cpu'] = cpu;
        obj['memory'] = memory;
    }

    /**
     * Constructs a <code>ContainerResourceSizeInfo</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/ContainerResourceSizeInfo} obj Optional instance to populate.
     * @return {module:model/ContainerResourceSizeInfo} The populated <code>ContainerResourceSizeInfo</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new ContainerResourceSizeInfo();

            if (data.hasOwnProperty('cpu')) {
                obj['cpu'] = ApiClient.convertToType(data['cpu'], 'String');
            }
            if (data.hasOwnProperty('memory')) {
                obj['memory'] = ApiClient.convertToType(data['memory'], 'String');
            }
        }
        return obj;
    }

    /**
     * Validates the JSON data with respect to <code>ContainerResourceSizeInfo</code>.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @return {boolean} to indicate whether the JSON data is valid with respect to <code>ContainerResourceSizeInfo</code>.
     */
    static validateJSON(data) {
        // check to make sure all required properties are present in the JSON string
        for (const property of ContainerResourceSizeInfo.RequiredProperties) {
            if (!data.hasOwnProperty(property)) {
                throw new Error("The required field `" + property + "` is not found in the JSON data: " + JSON.stringify(data));
            }
        }
        // ensure the json data is a string
        if (data['cpu'] && !(typeof data['cpu'] === 'string' || data['cpu'] instanceof String)) {
            throw new Error("Expected the field `cpu` to be a primitive type in the JSON string but got " + data['cpu']);
        }
        // ensure the json data is a string
        if (data['memory'] && !(typeof data['memory'] === 'string' || data['memory'] instanceof String)) {
            throw new Error("Expected the field `memory` to be a primitive type in the JSON string but got " + data['memory']);
        }

        return true;
    }


}

ContainerResourceSizeInfo.RequiredProperties = ["cpu", "memory"];

/**
 * define cpu needs
 * @member {String} cpu
 */
ContainerResourceSizeInfo.prototype['cpu'] = undefined;

/**
 * define memory needs
 * @member {String} memory
 */
ContainerResourceSizeInfo.prototype['memory'] = undefined;






export default ContainerResourceSizeInfo;

