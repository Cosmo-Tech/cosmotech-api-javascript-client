/**
 * Cosmo Tech Platform API
 * Cosmo Tech Platform API
 *
 * The version of the OpenAPI document: 2.4.8
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
 * @version 2.4.8
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

