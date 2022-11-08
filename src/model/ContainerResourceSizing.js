/**
 * Cosmo Tech Plaform API
 * Cosmo Tech Platform API
 *
 * The version of the OpenAPI document: 2.0.0
 * Contact: platform@cosmotech.com
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 *
 */

import ApiClient from '../ApiClient';
import ContainerResourceSizeInfo from './ContainerResourceSizeInfo';

/**
 * The ContainerResourceSizing model module.
 * @module model/ContainerResourceSizing
 * @version 2.0.0
 */
class ContainerResourceSizing {
    /**
     * Constructs a new <code>ContainerResourceSizing</code>.
     * a description object for resource requests and limits (default same configuration as basic sizing)
     * @alias module:model/ContainerResourceSizing
     * @param requests {module:model/ContainerResourceSizeInfo} 
     * @param limits {module:model/ContainerResourceSizeInfo} 
     */
    constructor(requests, limits) { 
        
        ContainerResourceSizing.initialize(this, requests, limits);
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
     * Constructs a <code>ContainerResourceSizing</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/ContainerResourceSizing} obj Optional instance to populate.
     * @return {module:model/ContainerResourceSizing} The populated <code>ContainerResourceSizing</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new ContainerResourceSizing();

            if (data.hasOwnProperty('requests')) {
                obj['requests'] = ContainerResourceSizeInfo.constructFromObject(data['requests']);
            }
            if (data.hasOwnProperty('limits')) {
                obj['limits'] = ContainerResourceSizeInfo.constructFromObject(data['limits']);
            }
        }
        return obj;
    }


}

/**
 * @member {module:model/ContainerResourceSizeInfo} requests
 */
ContainerResourceSizing.prototype['requests'] = undefined;

/**
 * @member {module:model/ContainerResourceSizeInfo} limits
 */
ContainerResourceSizing.prototype['limits'] = undefined;






export default ContainerResourceSizing;

