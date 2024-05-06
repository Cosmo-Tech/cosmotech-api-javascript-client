/**
 * Cosmo Tech Platform API
 * Cosmo Tech Platform API
 *
 * The version of the OpenAPI document: 3.0.5
 * Contact: platform@cosmotech.com
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 *
 */

import ApiClient from '../ApiClient';

/**
 * The FileUploadMetadata model module.
 * @module model/FileUploadMetadata
 * @version 3.0.5
 */
class FileUploadMetadata {
    /**
     * Constructs a new <code>FileUploadMetadata</code>.
     * @alias module:model/FileUploadMetadata
     */
    constructor() { 
        
        FileUploadMetadata.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>FileUploadMetadata</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/FileUploadMetadata} obj Optional instance to populate.
     * @return {module:model/FileUploadMetadata} The populated <code>FileUploadMetadata</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new FileUploadMetadata();

            if (data.hasOwnProperty('name')) {
                obj['name'] = ApiClient.convertToType(data['name'], 'String');
            }
            if (data.hasOwnProperty('size')) {
                obj['size'] = ApiClient.convertToType(data['size'], 'Number');
            }
        }
        return obj;
    }


}

/**
 * @member {String} name
 */
FileUploadMetadata.prototype['name'] = undefined;

/**
 * @member {Number} size
 */
FileUploadMetadata.prototype['size'] = undefined;






export default FileUploadMetadata;

