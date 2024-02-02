/**
 * Cosmo Tech Platform API
 * Cosmo Tech Platform API
 *
 * The version of the OpenAPI document: 3.0.2
 * Contact: platform@cosmotech.com
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 *
 */

import ApiClient from '../ApiClient';

/**
 * The OrganizationService model module.
 * @module model/OrganizationService
 * @version 3.0.2
 */
class OrganizationService {
    /**
     * Constructs a new <code>OrganizationService</code>.
     * a cloud service resource
     * @alias module:model/OrganizationService
     */
    constructor() { 
        
        OrganizationService.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>OrganizationService</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/OrganizationService} obj Optional instance to populate.
     * @return {module:model/OrganizationService} The populated <code>OrganizationService</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new OrganizationService();

            if (data.hasOwnProperty('cloudService')) {
                obj['cloudService'] = ApiClient.convertToType(data['cloudService'], 'String');
            }
            if (data.hasOwnProperty('baseUri')) {
                obj['baseUri'] = ApiClient.convertToType(data['baseUri'], 'String');
            }
            if (data.hasOwnProperty('platformService')) {
                obj['platformService'] = ApiClient.convertToType(data['platformService'], 'String');
            }
            if (data.hasOwnProperty('resourceUri')) {
                obj['resourceUri'] = ApiClient.convertToType(data['resourceUri'], 'String');
            }
            if (data.hasOwnProperty('credentials')) {
                obj['credentials'] = ApiClient.convertToType(data['credentials'], {'String': Object});
            }
        }
        return obj;
    }


}

/**
 * the cloud service name
 * @member {String} cloudService
 */
OrganizationService.prototype['cloudService'] = undefined;

/**
 * the platform base uri for this service
 * @member {String} baseUri
 */
OrganizationService.prototype['baseUri'] = undefined;

/**
 * the Platform service associated to the resource
 * @member {String} platformService
 */
OrganizationService.prototype['platformService'] = undefined;

/**
 * the Organization specific uri for this service resource
 * @member {String} resourceUri
 */
OrganizationService.prototype['resourceUri'] = undefined;

/**
 * a freeform credentials object. Structure depends on service
 * @member {Object.<String, Object>} credentials
 */
OrganizationService.prototype['credentials'] = undefined;






export default OrganizationService;

