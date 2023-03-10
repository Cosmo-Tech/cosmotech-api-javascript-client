/**
 * Cosmo Tech Plaform API
 * Cosmo Tech Platform API
 *
 * The version of the OpenAPI document: 2.2.1
 * Contact: platform@cosmotech.com
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 *
 */

import ApiClient from '../ApiClient';
import ResourceSizeInfo from './ResourceSizeInfo';

/**
 * The RunTemplateResourceSizing model module.
 * @module model/RunTemplateResourceSizing
 * @version 2.2.1
 */
class RunTemplateResourceSizing {
    /**
     * Constructs a new <code>RunTemplateResourceSizing</code>.
     * a description object for resource requests and limits (default same configuration as basic sizing)
     * @alias module:model/RunTemplateResourceSizing
     * @param requests {module:model/ResourceSizeInfo} 
     * @param limits {module:model/ResourceSizeInfo} 
     */
    constructor(requests, limits) { 
        
        RunTemplateResourceSizing.initialize(this, requests, limits);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj, requests, limits) { 
        obj['requests'] = requests;
        obj['limits'] = limits;
    }

    /**
     * Constructs a <code>RunTemplateResourceSizing</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/RunTemplateResourceSizing} obj Optional instance to populate.
     * @return {module:model/RunTemplateResourceSizing} The populated <code>RunTemplateResourceSizing</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new RunTemplateResourceSizing();

            if (data.hasOwnProperty('requests')) {
                obj['requests'] = ResourceSizeInfo.constructFromObject(data['requests']);
            }
            if (data.hasOwnProperty('limits')) {
                obj['limits'] = ResourceSizeInfo.constructFromObject(data['limits']);
            }
        }
        return obj;
    }


}

/**
 * @member {module:model/ResourceSizeInfo} requests
 */
RunTemplateResourceSizing.prototype['requests'] = undefined;

/**
 * @member {module:model/ResourceSizeInfo} limits
 */
RunTemplateResourceSizing.prototype['limits'] = undefined;






export default RunTemplateResourceSizing;

