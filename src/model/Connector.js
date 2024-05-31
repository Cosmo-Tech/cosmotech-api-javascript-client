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
import ConnectorParameterGroup from './ConnectorParameterGroup';
import IoTypesEnum from './IoTypesEnum';

/**
 * The Connector model module.
 * @module model/Connector
 * @version 3.2.2-SNAPSHOT
 */
class Connector {
    /**
     * Constructs a new <code>Connector</code>.
     * a version of a Connector
     * @alias module:model/Connector
     */
    constructor() { 
        
        Connector.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>Connector</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/Connector} obj Optional instance to populate.
     * @return {module:model/Connector} The populated <code>Connector</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new Connector();

            if (data.hasOwnProperty('id')) {
                obj['id'] = ApiClient.convertToType(data['id'], 'String');
            }
            if (data.hasOwnProperty('key')) {
                obj['key'] = ApiClient.convertToType(data['key'], 'String');
            }
            if (data.hasOwnProperty('name')) {
                obj['name'] = ApiClient.convertToType(data['name'], 'String');
            }
            if (data.hasOwnProperty('description')) {
                obj['description'] = ApiClient.convertToType(data['description'], 'String');
            }
            if (data.hasOwnProperty('repository')) {
                obj['repository'] = ApiClient.convertToType(data['repository'], 'String');
            }
            if (data.hasOwnProperty('version')) {
                obj['version'] = ApiClient.convertToType(data['version'], 'String');
            }
            if (data.hasOwnProperty('tags')) {
                obj['tags'] = ApiClient.convertToType(data['tags'], ['String']);
            }
            if (data.hasOwnProperty('ownerId')) {
                obj['ownerId'] = ApiClient.convertToType(data['ownerId'], 'String');
            }
            if (data.hasOwnProperty('url')) {
                obj['url'] = ApiClient.convertToType(data['url'], 'String');
            }
            if (data.hasOwnProperty('azureManagedIdentity')) {
                obj['azureManagedIdentity'] = ApiClient.convertToType(data['azureManagedIdentity'], 'Boolean');
            }
            if (data.hasOwnProperty('azureAuthenticationWithCustomerAppRegistration')) {
                obj['azureAuthenticationWithCustomerAppRegistration'] = ApiClient.convertToType(data['azureAuthenticationWithCustomerAppRegistration'], 'Boolean');
            }
            if (data.hasOwnProperty('ioTypes')) {
                obj['ioTypes'] = ApiClient.convertToType(data['ioTypes'], [IoTypesEnum]);
            }
            if (data.hasOwnProperty('parameterGroups')) {
                obj['parameterGroups'] = ApiClient.convertToType(data['parameterGroups'], [ConnectorParameterGroup]);
            }
        }
        return obj;
    }

    /**
     * Validates the JSON data with respect to <code>Connector</code>.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @return {boolean} to indicate whether the JSON data is valid with respect to <code>Connector</code>.
     */
    static validateJSON(data) {
        // ensure the json data is a string
        if (data['id'] && !(typeof data['id'] === 'string' || data['id'] instanceof String)) {
            throw new Error("Expected the field `id` to be a primitive type in the JSON string but got " + data['id']);
        }
        // ensure the json data is a string
        if (data['key'] && !(typeof data['key'] === 'string' || data['key'] instanceof String)) {
            throw new Error("Expected the field `key` to be a primitive type in the JSON string but got " + data['key']);
        }
        // ensure the json data is a string
        if (data['name'] && !(typeof data['name'] === 'string' || data['name'] instanceof String)) {
            throw new Error("Expected the field `name` to be a primitive type in the JSON string but got " + data['name']);
        }
        // ensure the json data is a string
        if (data['description'] && !(typeof data['description'] === 'string' || data['description'] instanceof String)) {
            throw new Error("Expected the field `description` to be a primitive type in the JSON string but got " + data['description']);
        }
        // ensure the json data is a string
        if (data['repository'] && !(typeof data['repository'] === 'string' || data['repository'] instanceof String)) {
            throw new Error("Expected the field `repository` to be a primitive type in the JSON string but got " + data['repository']);
        }
        // ensure the json data is a string
        if (data['version'] && !(typeof data['version'] === 'string' || data['version'] instanceof String)) {
            throw new Error("Expected the field `version` to be a primitive type in the JSON string but got " + data['version']);
        }
        // ensure the json data is an array
        if (!Array.isArray(data['tags'])) {
            throw new Error("Expected the field `tags` to be an array in the JSON data but got " + data['tags']);
        }
        // ensure the json data is a string
        if (data['ownerId'] && !(typeof data['ownerId'] === 'string' || data['ownerId'] instanceof String)) {
            throw new Error("Expected the field `ownerId` to be a primitive type in the JSON string but got " + data['ownerId']);
        }
        // ensure the json data is a string
        if (data['url'] && !(typeof data['url'] === 'string' || data['url'] instanceof String)) {
            throw new Error("Expected the field `url` to be a primitive type in the JSON string but got " + data['url']);
        }
        // ensure the json data is an array
        if (!Array.isArray(data['ioTypes'])) {
            throw new Error("Expected the field `ioTypes` to be an array in the JSON data but got " + data['ioTypes']);
        }
        if (data['parameterGroups']) { // data not null
            // ensure the json data is an array
            if (!Array.isArray(data['parameterGroups'])) {
                throw new Error("Expected the field `parameterGroups` to be an array in the JSON data but got " + data['parameterGroups']);
            }
            // validate the optional field `parameterGroups` (array)
            for (const item of data['parameterGroups']) {
                ConnectorParameterGroup.validateJSON(item);
            };
        }

        return true;
    }


}



/**
 * the Connector version unique identifier
 * @member {String} id
 */
Connector.prototype['id'] = undefined;

/**
 * the Connector key which group Connector versions
 * @member {String} key
 */
Connector.prototype['key'] = undefined;

/**
 * the Connector name
 * @member {String} name
 */
Connector.prototype['name'] = undefined;

/**
 * the Connector description
 * @member {String} description
 */
Connector.prototype['description'] = undefined;

/**
 * the registry repository containing the image
 * @member {String} repository
 */
Connector.prototype['repository'] = undefined;

/**
 * the Connector version MAJOR.MINOR.PATCH. Must be aligned with an existing repository tag
 * @member {String} version
 */
Connector.prototype['version'] = undefined;

/**
 * the list of tags
 * @member {Array.<String>} tags
 */
Connector.prototype['tags'] = undefined;

/**
 * the user id which own this connector version
 * @member {String} ownerId
 */
Connector.prototype['ownerId'] = undefined;

/**
 * an optional URL link to connector page
 * @member {String} url
 */
Connector.prototype['url'] = undefined;

/**
 * whether or not the connector uses Azure Managed Identity
 * @member {Boolean} azureManagedIdentity
 */
Connector.prototype['azureManagedIdentity'] = undefined;

/**
 * whether to authenticate against Azure using the app registration credentials provided by the customer
 * @member {Boolean} azureAuthenticationWithCustomerAppRegistration
 */
Connector.prototype['azureAuthenticationWithCustomerAppRegistration'] = undefined;

/**
 * @member {Array.<module:model/IoTypesEnum>} ioTypes
 */
Connector.prototype['ioTypes'] = undefined;

/**
 * the list of connector parameters groups
 * @member {Array.<module:model/ConnectorParameterGroup>} parameterGroups
 */
Connector.prototype['parameterGroups'] = undefined;






export default Connector;

