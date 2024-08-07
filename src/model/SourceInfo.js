/**
 * Cosmo Tech Platform API
 * Cosmo Tech Platform API
 *
 * The version of the OpenAPI document: 4.0.3-SNAPSHOT
 * Contact: platform@cosmotech.com
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 *
 */

import ApiClient from '../ApiClient';

/**
 * The SourceInfo model module.
 * @module model/SourceInfo
 * @version 4.0.3-SNAPSHOT
 */
class SourceInfo {
    /**
     * Constructs a new <code>SourceInfo</code>.
     * Source job import information
     * @alias module:model/SourceInfo
     * @param location {String} the source location containing the files to import
     */
    constructor(location) { 
        
        SourceInfo.initialize(this, location);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj, location) { 
        obj['location'] = location;
    }

    /**
     * Constructs a <code>SourceInfo</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/SourceInfo} obj Optional instance to populate.
     * @return {module:model/SourceInfo} The populated <code>SourceInfo</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new SourceInfo();

            if (data.hasOwnProperty('name')) {
                obj['name'] = ApiClient.convertToType(data['name'], 'String');
            }
            if (data.hasOwnProperty('location')) {
                obj['location'] = ApiClient.convertToType(data['location'], 'String');
            }
            if (data.hasOwnProperty('path')) {
                obj['path'] = ApiClient.convertToType(data['path'], 'String');
            }
            if (data.hasOwnProperty('jobId')) {
                obj['jobId'] = ApiClient.convertToType(data['jobId'], 'String');
            }
        }
        return obj;
    }

    /**
     * Validates the JSON data with respect to <code>SourceInfo</code>.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @return {boolean} to indicate whether the JSON data is valid with respect to <code>SourceInfo</code>.
     */
    static validateJSON(data) {
        // check to make sure all required properties are present in the JSON string
        for (const property of SourceInfo.RequiredProperties) {
            if (!data.hasOwnProperty(property)) {
                throw new Error("The required field `" + property + "` is not found in the JSON data: " + JSON.stringify(data));
            }
        }
        // ensure the json data is a string
        if (data['name'] && !(typeof data['name'] === 'string' || data['name'] instanceof String)) {
            throw new Error("Expected the field `name` to be a primitive type in the JSON string but got " + data['name']);
        }
        // ensure the json data is a string
        if (data['location'] && !(typeof data['location'] === 'string' || data['location'] instanceof String)) {
            throw new Error("Expected the field `location` to be a primitive type in the JSON string but got " + data['location']);
        }
        // ensure the json data is a string
        if (data['path'] && !(typeof data['path'] === 'string' || data['path'] instanceof String)) {
            throw new Error("Expected the field `path` to be a primitive type in the JSON string but got " + data['path']);
        }
        // ensure the json data is a string
        if (data['jobId'] && !(typeof data['jobId'] === 'string' || data['jobId'] instanceof String)) {
            throw new Error("Expected the field `jobId` to be a primitive type in the JSON string but got " + data['jobId']);
        }

        return true;
    }


}

SourceInfo.RequiredProperties = ["location"];

/**
 * the source name containing the files to import
 * @member {String} name
 */
SourceInfo.prototype['name'] = undefined;

/**
 * the source location containing the files to import
 * @member {String} location
 */
SourceInfo.prototype['location'] = undefined;

/**
 * the source location containing the files to import
 * @member {String} path
 */
SourceInfo.prototype['path'] = undefined;

/**
 * indicate the last import jobId
 * @member {String} jobId
 */
SourceInfo.prototype['jobId'] = undefined;






export default SourceInfo;

