/**
 * Cosmo Tech Platform API
 * Cosmo Tech Platform API
 *
 * The version of the OpenAPI document: 3.0.13-SNAPSHOT
 * Contact: platform@cosmotech.com
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 *
 */

import ApiClient from '../ApiClient';

/**
 * The DatasetConnector model module.
 * @module model/DatasetConnector
 * @version 3.0.13-SNAPSHOT
 */
class DatasetConnector {
    /**
     * Constructs a new <code>DatasetConnector</code>.
     * the Connector setup bound to a Dataset
     * @alias module:model/DatasetConnector
     */
    constructor() { 
        
        DatasetConnector.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>DatasetConnector</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/DatasetConnector} obj Optional instance to populate.
     * @return {module:model/DatasetConnector} The populated <code>DatasetConnector</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new DatasetConnector();

            if (data.hasOwnProperty('id')) {
                obj['id'] = ApiClient.convertToType(data['id'], 'String');
            }
            if (data.hasOwnProperty('name')) {
                obj['name'] = ApiClient.convertToType(data['name'], 'String');
            }
            if (data.hasOwnProperty('version')) {
                obj['version'] = ApiClient.convertToType(data['version'], 'String');
            }
            if (data.hasOwnProperty('parametersValues')) {
                obj['parametersValues'] = ApiClient.convertToType(data['parametersValues'], {'String': 'String'});
            }
        }
        return obj;
    }


}

/**
 * the Connector id
 * @member {String} id
 */
DatasetConnector.prototype['id'] = undefined;

/**
 * the Connector name
 * @member {String} name
 */
DatasetConnector.prototype['name'] = undefined;

/**
 * the Connector version
 * @member {String} version
 */
DatasetConnector.prototype['version'] = undefined;

/**
 * @member {Object.<String, String>} parametersValues
 */
DatasetConnector.prototype['parametersValues'] = undefined;






export default DatasetConnector;

