/**
 * Cosmo Tech Platform API
 * Cosmo Tech Platform API
 *
 * The version of the OpenAPI document: 2.4.10
 * Contact: platform@cosmotech.com
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 *
 */

import ApiClient from '../ApiClient';

/**
 * The ResourceSizeInfo model module.
 * @module model/ResourceSizeInfo
 * @version 2.4.10
 */
class ResourceSizeInfo {
    /**
     * Constructs a new <code>ResourceSizeInfo</code>.
     * define cpus and memory needs
     * @alias module:model/ResourceSizeInfo
     * @param cpu {String} define cpu needs
     * @param memory {String} define memory needs
     */
    constructor(cpu, memory) { 
        
        ResourceSizeInfo.initialize(this, cpu, memory);
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
     * Constructs a <code>ResourceSizeInfo</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/ResourceSizeInfo} obj Optional instance to populate.
     * @return {module:model/ResourceSizeInfo} The populated <code>ResourceSizeInfo</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new ResourceSizeInfo();

            if (data.hasOwnProperty('cpu')) {
                obj['cpu'] = ApiClient.convertToType(data['cpu'], 'String');
            }
            if (data.hasOwnProperty('memory')) {
                obj['memory'] = ApiClient.convertToType(data['memory'], 'String');
            }
        }
        return obj;
    }


}

/**
 * define cpu needs
 * @member {String} cpu
 */
ResourceSizeInfo.prototype['cpu'] = undefined;

/**
 * define memory needs
 * @member {String} memory
 */
ResourceSizeInfo.prototype['memory'] = undefined;






export default ResourceSizeInfo;

