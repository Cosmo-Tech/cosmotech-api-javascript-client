/**
 * Cosmo Tech Platform API
 * Cosmo Tech Platform API
 *
 * The version of the OpenAPI document: 3.2.1-SNAPSHOT
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
 * @version 3.2.1-SNAPSHOT
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

    /**
     * Validates the JSON data with respect to <code>ContainerResourceSizing</code>.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @return {boolean} to indicate whether the JSON data is valid with respect to <code>ContainerResourceSizing</code>.
     */
    static validateJSON(data) {
        // check to make sure all required properties are present in the JSON string
        for (const property of ContainerResourceSizing.RequiredProperties) {
            if (!data.hasOwnProperty(property)) {
                throw new Error("The required field `" + property + "` is not found in the JSON data: " + JSON.stringify(data));
            }
        }
        // validate the optional field `requests`
        if (data['requests']) { // data not null
          ContainerResourceSizeInfo.validateJSON(data['requests']);
        }
        // validate the optional field `limits`
        if (data['limits']) { // data not null
          ContainerResourceSizeInfo.validateJSON(data['limits']);
        }

        return true;
    }


}

ContainerResourceSizing.RequiredProperties = ["requests", "limits"];

/**
 * @member {module:model/ContainerResourceSizeInfo} requests
 */
ContainerResourceSizing.prototype['requests'] = undefined;

/**
 * @member {module:model/ContainerResourceSizeInfo} limits
 */
ContainerResourceSizing.prototype['limits'] = undefined;






export default ContainerResourceSizing;

