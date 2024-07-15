/**
 * Cosmo Tech Platform API
 * Cosmo Tech Platform API
 *
 * The version of the OpenAPI document: 4.0.2-onprem
 * Contact: platform@cosmotech.com
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 *
 */

import ApiClient from '../ApiClient';
import OrganizationSecurity from './OrganizationSecurity';

/**
 * The Organization model module.
 * @module model/Organization
 * @version 4.0.2-onprem
 */
class Organization {
    /**
     * Constructs a new <code>Organization</code>.
     * an Organization
     * @alias module:model/Organization
     */
    constructor() { 
        
        Organization.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>Organization</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/Organization} obj Optional instance to populate.
     * @return {module:model/Organization} The populated <code>Organization</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new Organization();

            if (data.hasOwnProperty('id')) {
                obj['id'] = ApiClient.convertToType(data['id'], 'String');
            }
            if (data.hasOwnProperty('name')) {
                obj['name'] = ApiClient.convertToType(data['name'], 'String');
            }
            if (data.hasOwnProperty('ownerId')) {
                obj['ownerId'] = ApiClient.convertToType(data['ownerId'], 'String');
            }
            if (data.hasOwnProperty('security')) {
                obj['security'] = ApiClient.convertToType(data['security'], OrganizationSecurity);
            }
        }
        return obj;
    }

    /**
     * Validates the JSON data with respect to <code>Organization</code>.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @return {boolean} to indicate whether the JSON data is valid with respect to <code>Organization</code>.
     */
    static validateJSON(data) {
        // ensure the json data is a string
        if (data['id'] && !(typeof data['id'] === 'string' || data['id'] instanceof String)) {
            throw new Error("Expected the field `id` to be a primitive type in the JSON string but got " + data['id']);
        }
        // ensure the json data is a string
        if (data['name'] && !(typeof data['name'] === 'string' || data['name'] instanceof String)) {
            throw new Error("Expected the field `name` to be a primitive type in the JSON string but got " + data['name']);
        }
        // ensure the json data is a string
        if (data['ownerId'] && !(typeof data['ownerId'] === 'string' || data['ownerId'] instanceof String)) {
            throw new Error("Expected the field `ownerId` to be a primitive type in the JSON string but got " + data['ownerId']);
        }
        // validate the optional field `security`
        if (data['security']) { // data not null
          OrganizationSecurity.validateJSON(data['security']);
        }

        return true;
    }


}



/**
 * the Organization unique identifier
 * @member {String} id
 */
Organization.prototype['id'] = undefined;

/**
 * the Organization name
 * @member {String} name
 */
Organization.prototype['name'] = undefined;

/**
 * the Owner User Id
 * @member {String} ownerId
 */
Organization.prototype['ownerId'] = undefined;

/**
 * @member {module:model/OrganizationSecurity} security
 */
Organization.prototype['security'] = undefined;






export default Organization;

