/**
 * Cosmo Tech Platform API
 * Cosmo Tech Platform API
 *
 * The version of the OpenAPI document: 3.0.0-test
 * Contact: platform@cosmotech.com
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 *
 */

import ApiClient from '../ApiClient';
import SourceInfo from './SourceInfo';

/**
 * The TwinGraphImport model module.
 * @module model/TwinGraphImport
 * @version 3.0.0-test
 */
class TwinGraphImport {
    /**
     * Constructs a new <code>TwinGraphImport</code>.
     * a twin graph import info
     * @alias module:model/TwinGraphImport
     * @param source {module:model/SourceInfo} 
     * @param graphId {String} the graph id to import to
     */
    constructor(source, graphId) { 
        
        TwinGraphImport.initialize(this, source, graphId);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj, source, graphId) { 
        obj['source'] = source;
        obj['graphId'] = graphId;
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

            if (data.hasOwnProperty('source')) {
                obj['source'] = SourceInfo.constructFromObject(data['source']);
            }
            if (data.hasOwnProperty('graphId')) {
                obj['graphId'] = ApiClient.convertToType(data['graphId'], 'String');
            }
            if (data.hasOwnProperty('version')) {
                obj['version'] = ApiClient.convertToType(data['version'], 'String');
            }
        }
        return obj;
    }


}

/**
 * @member {module:model/SourceInfo} source
 */
TwinGraphImport.prototype['source'] = undefined;

/**
 * the graph id to import to
 * @member {String} graphId
 */
TwinGraphImport.prototype['graphId'] = undefined;

/**
 * The version of the graph to import to.  When not set, the last version before import is upgraded by 1. When set, the targeted graph is replaced 
 * @member {String} version
 */
TwinGraphImport.prototype['version'] = undefined;






export default TwinGraphImport;

