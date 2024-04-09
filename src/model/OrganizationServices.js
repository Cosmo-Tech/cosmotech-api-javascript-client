/**
 * Cosmo Tech Platform API
 * Cosmo Tech Platform API
 *
 * The version of the OpenAPI document: 3.1.3
 * Contact: platform@cosmotech.com
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 *
 */

import ApiClient from '../ApiClient';
import OrganizationService from './OrganizationService';

/**
 * The OrganizationServices model module.
 * @module model/OrganizationServices
 * @version 3.1.3
 */
class OrganizationServices {
    /**
     * Constructs a new <code>OrganizationServices</code>.
     * the cloud service resources of the Organization
     * @alias module:model/OrganizationServices
     */
    constructor() { 
        
        OrganizationServices.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>OrganizationServices</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/OrganizationServices} obj Optional instance to populate.
     * @return {module:model/OrganizationServices} The populated <code>OrganizationServices</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new OrganizationServices();

            if (data.hasOwnProperty('tenantCredentials')) {
                obj['tenantCredentials'] = ApiClient.convertToType(data['tenantCredentials'], {'String': Object});
            }
            if (data.hasOwnProperty('storage')) {
                obj['storage'] = OrganizationService.constructFromObject(data['storage']);
            }
            if (data.hasOwnProperty('solutionsContainerRegistry')) {
                obj['solutionsContainerRegistry'] = OrganizationService.constructFromObject(data['solutionsContainerRegistry']);
            }
        }
        return obj;
    }

    /**
     * Validates the JSON data with respect to <code>OrganizationServices</code>.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @return {boolean} to indicate whether the JSON data is valid with respect to <code>OrganizationServices</code>.
     */
    static validateJSON(data) {
        // validate the optional field `storage`
        if (data['storage']) { // data not null
          OrganizationService.validateJSON(data['storage']);
        }
        // validate the optional field `solutionsContainerRegistry`
        if (data['solutionsContainerRegistry']) { // data not null
          OrganizationService.validateJSON(data['solutionsContainerRegistry']);
        }

        return true;
    }


}



/**
 * a freeform credentials object for the Organization tenant. Structure depends on cloud provider
 * @member {Object.<String, Object>} tenantCredentials
 */
OrganizationServices.prototype['tenantCredentials'] = undefined;

/**
 * @member {module:model/OrganizationService} storage
 */
OrganizationServices.prototype['storage'] = undefined;

/**
 * @member {module:model/OrganizationService} solutionsContainerRegistry
 */
OrganizationServices.prototype['solutionsContainerRegistry'] = undefined;






export default OrganizationServices;

