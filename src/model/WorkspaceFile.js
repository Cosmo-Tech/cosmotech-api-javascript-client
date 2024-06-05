/**
 * Cosmo Tech Platform API
 * Cosmo Tech Platform API
 *
 * The version of the OpenAPI document: 3.2.2-SNAPSHOT
 * Contact: platform@cosmotech.com
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 *
 */

import ApiClient from '../ApiClient';

/**
 * The WorkspaceFile model module.
 * @module model/WorkspaceFile
 * @version 3.2.2-SNAPSHOT
 */
class WorkspaceFile {
    /**
     * Constructs a new <code>WorkspaceFile</code>.
     * a Workspace File resource
     * @alias module:model/WorkspaceFile
     */
    constructor() { 
        
        WorkspaceFile.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>WorkspaceFile</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/WorkspaceFile} obj Optional instance to populate.
     * @return {module:model/WorkspaceFile} The populated <code>WorkspaceFile</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new WorkspaceFile();

            if (data.hasOwnProperty('fileName')) {
                obj['fileName'] = ApiClient.convertToType(data['fileName'], 'String');
            }
        }
        return obj;
    }

    /**
     * Validates the JSON data with respect to <code>WorkspaceFile</code>.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @return {boolean} to indicate whether the JSON data is valid with respect to <code>WorkspaceFile</code>.
     */
    static validateJSON(data) {
        // ensure the json data is a string
        if (data['fileName'] && !(typeof data['fileName'] === 'string' || data['fileName'] instanceof String)) {
            throw new Error("Expected the field `fileName` to be a primitive type in the JSON string but got " + data['fileName']);
        }

        return true;
    }


}



/**
 * the Workspace File name
 * @member {String} fileName
 */
WorkspaceFile.prototype['fileName'] = undefined;






export default WorkspaceFile;

