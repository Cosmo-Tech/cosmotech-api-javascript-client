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
import ConnectorParameterGroup from './ConnectorParameterGroup';

/**
 * The Connector model module.
 * @module model/Connector
 * @version 3.1.3
 */
class Connector {
    /**
     * Constructs a new <code>Connector</code>.
     * a version of a Connector
     * @alias module:model/Connector
     * @param key {String} the Connector key which group Connector versions
     * @param name {String} the Connector name
     * @param repository {String} the registry repository containing the image
     * @param version {String} the Connector version MAJOR.MINOR.PATCH. Must be aligned with an existing repository tag
     * @param ioTypes {Array.<module:model/Connector.IoTypesEnum>} 
     */
    constructor(key, name, repository, version, ioTypes) { 
        
        Connector.initialize(this, key, name, repository, version, ioTypes);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj, key, name, repository, version, ioTypes) { 
        obj['key'] = key;
        obj['name'] = name;
        obj['repository'] = repository;
        obj['version'] = version;
        obj['ioTypes'] = ioTypes;
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
                obj['ioTypes'] = ApiClient.convertToType(data['ioTypes'], ['String']);
            }
            if (data.hasOwnProperty('parameterGroups')) {
                obj['parameterGroups'] = ApiClient.convertToType(data['parameterGroups'], [ConnectorParameterGroup]);
            }
        }
        return obj;
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
 * @member {Array.<module:model/Connector.IoTypesEnum>} ioTypes
 */
Connector.prototype['ioTypes'] = undefined;

/**
 * the list of connector parameters groups
 * @member {Array.<module:model/ConnectorParameterGroup>} parameterGroups
 */
Connector.prototype['parameterGroups'] = undefined;





/**
 * Allowed values for the <code>ioTypes</code> property.
 * @enum {String}
 * @readonly
 */
Connector['IoTypesEnum'] = {

    /**
     * value: "read"
     * @const
     */
    "read": "read",

    /**
     * value: "write"
     * @const
     */
    "write": "write"
};



export default Connector;

