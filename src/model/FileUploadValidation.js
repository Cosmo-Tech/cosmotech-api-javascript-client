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
import FileUploadMetadata from './FileUploadMetadata';

/**
 * The FileUploadValidation model module.
 * @module model/FileUploadValidation
 * @version 3.1.3
 */
class FileUploadValidation {
    /**
     * Constructs a new <code>FileUploadValidation</code>.
     * files read on upload
     * @alias module:model/FileUploadValidation
     */
    constructor() { 
        
        FileUploadValidation.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>FileUploadValidation</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/FileUploadValidation} obj Optional instance to populate.
     * @return {module:model/FileUploadValidation} The populated <code>FileUploadValidation</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new FileUploadValidation();

            if (data.hasOwnProperty('nodes')) {
                obj['nodes'] = ApiClient.convertToType(data['nodes'], [FileUploadMetadata]);
            }
            if (data.hasOwnProperty('edges')) {
                obj['edges'] = ApiClient.convertToType(data['edges'], [FileUploadMetadata]);
            }
        }
        return obj;
    }


}

/**
 * list of filename found on nodes folder
 * @member {Array.<module:model/FileUploadMetadata>} nodes
 */
FileUploadValidation.prototype['nodes'] = undefined;

/**
 * list of filename found on edges folder
 * @member {Array.<module:model/FileUploadMetadata>} edges
 */
FileUploadValidation.prototype['edges'] = undefined;






export default FileUploadValidation;

