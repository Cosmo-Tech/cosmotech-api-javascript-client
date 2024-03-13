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
 * The WorkspaceWebApp model module.
 * @module model/WorkspaceWebApp
 * @version 3.1.1-SNAPSHOT
 */
class WorkspaceWebApp {
    /**
     * Constructs a new <code>WorkspaceWebApp</code>.
     * a Workspace Web Application
     * @alias module:model/WorkspaceWebApp
     * @param url {String} the Workspace Web Application URL
     */
    constructor(url) { 
        
        WorkspaceWebApp.initialize(this, url);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj, url) { 
        obj['url'] = url;
    }

    /**
     * Constructs a <code>WorkspaceWebApp</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/WorkspaceWebApp} obj Optional instance to populate.
     * @return {module:model/WorkspaceWebApp} The populated <code>WorkspaceWebApp</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new WorkspaceWebApp();

            if (data.hasOwnProperty('url')) {
                obj['url'] = ApiClient.convertToType(data['url'], 'String');
            }
            if (data.hasOwnProperty('iframes')) {
                obj['iframes'] = ApiClient.convertToType(data['iframes'], {'String': Object});
            }
            if (data.hasOwnProperty('options')) {
                obj['options'] = ApiClient.convertToType(data['options'], {'String': Object});
            }
        }
        return obj;
    }

    /**
     * Validates the JSON data with respect to <code>WorkspaceWebApp</code>.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @return {boolean} to indicate whether the JSON data is valid with respect to <code>WorkspaceWebApp</code>.
     */
    static validateJSON(data) {
        // check to make sure all required properties are present in the JSON string
        for (const property of WorkspaceWebApp.RequiredProperties) {
            if (!data.hasOwnProperty(property)) {
                throw new Error("The required field `" + property + "` is not found in the JSON data: " + JSON.stringify(data));
            }
        }
        // ensure the json data is a string
        if (data['url'] && !(typeof data['url'] === 'string' || data['url'] instanceof String)) {
            throw new Error("Expected the field `url` to be a primitive type in the JSON string but got " + data['url']);
        }

        return true;
    }


}

WorkspaceWebApp.RequiredProperties = ["url"];

/**
 * the Workspace Web Application URL
 * @member {String} url
 */
WorkspaceWebApp.prototype['url'] = undefined;

/**
 * a map of iframeKey/iframeURL
 * @member {Object.<String, Object>} iframes
 */
WorkspaceWebApp.prototype['iframes'] = undefined;

/**
 * free form options for Web Application
 * @member {Object.<String, Object>} options
 */
WorkspaceWebApp.prototype['options'] = undefined;






export default WorkspaceWebApp;

