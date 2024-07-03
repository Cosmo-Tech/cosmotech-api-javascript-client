/**
 * Cosmo Tech Platform API
 * Cosmo Tech Platform API
 *
 * The version of the OpenAPI document: 4.0.1-onprem
 * Contact: platform@cosmotech.com
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 *
 */

import ApiClient from '../ApiClient';

/**
 * The GraphProperties model module.
 * @module model/GraphProperties
 * @version 4.0.1-onprem
 */
class GraphProperties {
    /**
     * Constructs a new <code>GraphProperties</code>.
     * @alias module:model/GraphProperties
     */
    constructor() { 
        
        GraphProperties.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>GraphProperties</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/GraphProperties} obj Optional instance to populate.
     * @return {module:model/GraphProperties} The populated <code>GraphProperties</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new GraphProperties();

            if (data.hasOwnProperty('type')) {
                obj['type'] = ApiClient.convertToType(data['type'], 'String');
            }
            if (data.hasOwnProperty('source')) {
                obj['source'] = ApiClient.convertToType(data['source'], 'String');
            }
            if (data.hasOwnProperty('target')) {
                obj['target'] = ApiClient.convertToType(data['target'], 'String');
            }
            if (data.hasOwnProperty('name')) {
                obj['name'] = ApiClient.convertToType(data['name'], 'String');
            }
            if (data.hasOwnProperty('params')) {
                obj['params'] = ApiClient.convertToType(data['params'], 'String');
            }
        }
        return obj;
    }

    /**
     * Validates the JSON data with respect to <code>GraphProperties</code>.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @return {boolean} to indicate whether the JSON data is valid with respect to <code>GraphProperties</code>.
     */
    static validateJSON(data) {
        // ensure the json data is a string
        if (data['type'] && !(typeof data['type'] === 'string' || data['type'] instanceof String)) {
            throw new Error("Expected the field `type` to be a primitive type in the JSON string but got " + data['type']);
        }
        // ensure the json data is a string
        if (data['source'] && !(typeof data['source'] === 'string' || data['source'] instanceof String)) {
            throw new Error("Expected the field `source` to be a primitive type in the JSON string but got " + data['source']);
        }
        // ensure the json data is a string
        if (data['target'] && !(typeof data['target'] === 'string' || data['target'] instanceof String)) {
            throw new Error("Expected the field `target` to be a primitive type in the JSON string but got " + data['target']);
        }
        // ensure the json data is a string
        if (data['name'] && !(typeof data['name'] === 'string' || data['name'] instanceof String)) {
            throw new Error("Expected the field `name` to be a primitive type in the JSON string but got " + data['name']);
        }
        // ensure the json data is a string
        if (data['params'] && !(typeof data['params'] === 'string' || data['params'] instanceof String)) {
            throw new Error("Expected the field `params` to be a primitive type in the JSON string but got " + data['params']);
        }

        return true;
    }


}



/**
 * the type of the relationship
 * @member {String} type
 */
GraphProperties.prototype['type'] = undefined;

/**
 * the source node of the relationship
 * @member {String} source
 */
GraphProperties.prototype['source'] = undefined;

/**
 * the target node of the relationship
 * @member {String} target
 */
GraphProperties.prototype['target'] = undefined;

/**
 * the name of the graph data object
 * @member {String} name
 */
GraphProperties.prototype['name'] = undefined;

/**
 * the parameters of the graph data object
 * @member {String} params
 */
GraphProperties.prototype['params'] = undefined;






export default GraphProperties;

