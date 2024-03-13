/**
 * Cosmo Tech Platform API
 * Cosmo Tech Platform API
 *
 * The version of the OpenAPI document: 3.1.1-SNAPSHOT
 * Contact: platform@cosmotech.com
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 *
 */

import ApiClient from '../ApiClient';

/**
 * The WorkspaceSecret model module.
 * @module model/WorkspaceSecret
 * @version 3.1.1-SNAPSHOT
 */
class WorkspaceSecret {
    /**
     * Constructs a new <code>WorkspaceSecret</code>.
     * the secret definition
     * @alias module:model/WorkspaceSecret
     */
    constructor() { 
        
        WorkspaceSecret.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>WorkspaceSecret</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/WorkspaceSecret} obj Optional instance to populate.
     * @return {module:model/WorkspaceSecret} The populated <code>WorkspaceSecret</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new WorkspaceSecret();

            if (data.hasOwnProperty('dedicatedEventHubKey')) {
                obj['dedicatedEventHubKey'] = ApiClient.convertToType(data['dedicatedEventHubKey'], 'String');
            }
        }
        return obj;
    }

    /**
     * Validates the JSON data with respect to <code>WorkspaceSecret</code>.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @return {boolean} to indicate whether the JSON data is valid with respect to <code>WorkspaceSecret</code>.
     */
    static validateJSON(data) {
        // ensure the json data is a string
        if (data['dedicatedEventHubKey'] && !(typeof data['dedicatedEventHubKey'] === 'string' || data['dedicatedEventHubKey'] instanceof String)) {
            throw new Error("Expected the field `dedicatedEventHubKey` to be a primitive type in the JSON string but got " + data['dedicatedEventHubKey']);
        }

        return true;
    }


}



/**
 * the dedicated event hub shared access key
 * @member {String} dedicatedEventHubKey
 */
WorkspaceSecret.prototype['dedicatedEventHubKey'] = undefined;






export default WorkspaceSecret;

