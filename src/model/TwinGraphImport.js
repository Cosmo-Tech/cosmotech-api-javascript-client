/**
 * Cosmo Tech Plaform API
 * Cosmo Tech Platform API
 *
 * The version of the OpenAPI document: 2.1.0-dev
 * Contact: platform@cosmotech.com
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 *
 */

import ApiClient from '../ApiClient';

/**
 * The TwinGraphImport model module.
 * @module model/TwinGraphImport
 * @version 2.1.0-dev
 */
class TwinGraphImport {
    /**
     * Constructs a new <code>TwinGraphImport</code>.
     * a twin graph import info
     * @alias module:model/TwinGraphImport
     * @param storagePath {String} the storage path containing the files to import
     * @param graphName {String} the graph name to import to
     */
    constructor(storagePath, graphName) { 
        
        TwinGraphImport.initialize(this, storagePath, graphName);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj, storagePath, graphName) { 
        obj['storagePath'] = storagePath;
        obj['graphName'] = graphName;
    }

    /**
     * Constructs a <code>TwinGraphImport</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/TwinGraphImport} obj Optional instance to populate.
     * @return {module:model/TwinGraphImport} The populated <code>TwinGraphImport</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new TwinGraphImport();

            if (data.hasOwnProperty('storagePath')) {
                obj['storagePath'] = ApiClient.convertToType(data['storagePath'], 'String');
            }
            if (data.hasOwnProperty('graphName')) {
                obj['graphName'] = ApiClient.convertToType(data['graphName'], 'String');
            }
            if (data.hasOwnProperty('version')) {
                obj['version'] = ApiClient.convertToType(data['version'], 'String');
            }
        }
        return obj;
    }


}

/**
 * the storage path containing the files to import
 * @member {String} storagePath
 */
TwinGraphImport.prototype['storagePath'] = undefined;

/**
 * the graph name to import to
 * @member {String} graphName
 */
TwinGraphImport.prototype['graphName'] = undefined;

/**
 * The version of the graph to import to.  When not set, the last version before import is upgraded by 1. When set, the targeted graph is replaced 
 * @member {String} version
 */
TwinGraphImport.prototype['version'] = undefined;






export default TwinGraphImport;

