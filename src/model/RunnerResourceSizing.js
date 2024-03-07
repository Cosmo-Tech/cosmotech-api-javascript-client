/**
 * Cosmo Tech Platform API
 * Cosmo Tech Platform API
 *
 * The version of the OpenAPI document: 3.1.0
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
 * The RunnerResourceSizing model module.
 * @module model/RunnerResourceSizing
 * @version 3.1.0
 */
class RunnerResourceSizing {
    /**
     * Constructs a new <code>RunnerResourceSizing</code>.
     * a description object for resource requests and limits (default same configuration as basic sizing)
     * @alias module:model/RunnerResourceSizing
     * @param requests {module:model/ResourceSizeInfo} 
     * @param limits {module:model/ResourceSizeInfo} 
     */
    constructor(requests, limits) { 
        
        RunnerResourceSizing.initialize(this, requests, limits);
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
     * Constructs a <code>RunnerResourceSizing</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/RunnerResourceSizing} obj Optional instance to populate.
     * @return {module:model/RunnerResourceSizing} The populated <code>RunnerResourceSizing</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new RunnerResourceSizing();

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
RunnerResourceSizing.prototype['requests'] = undefined;

/**
 * @member {module:model/ResourceSizeInfo} limits
 */
RunnerResourceSizing.prototype['limits'] = undefined;






export default RunnerResourceSizing;

