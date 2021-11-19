/**
 * Cosmo Tech Plaform API
 * Cosmo Tech Platform API
 *
 * The version of the OpenAPI document: 0.0.11-SNAPSHOT
 * Contact: platform@cosmotech.com
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 *
 */

import ApiClient from '../ApiClient';

/**
 * The Validator model module.
 * @module model/Validator
 * @version 0.0.11-SNAPSHOT
 */
class Validator {
    /**
     * Constructs a new <code>Validator</code>.
     * a Validator to validate a Dataset
     * @alias module:model/Validator
     * @param id {String} the Validator id
     * @param name {String} the Validator name
     * @param repository {String} the registry repository containing the Validator image
     * @param version {String} the Validator version MAJOR.MINOR.PATCH. Must be aligned with an existing repository tag
     */
    constructor(id, name, repository, version) { 
        
        Validator.initialize(this, id, name, repository, version);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj, id, name, repository, version) { 
        obj['id'] = id;
        obj['name'] = name;
        obj['repository'] = repository;
        obj['version'] = version;
    }

    /**
     * Constructs a <code>Validator</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/Validator} obj Optional instance to populate.
     * @return {module:model/Validator} The populated <code>Validator</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new Validator();

            if (data.hasOwnProperty('id')) {
                obj['id'] = ApiClient.convertToType(data['id'], 'String');
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
            if (data.hasOwnProperty('ownerId')) {
                obj['ownerId'] = ApiClient.convertToType(data['ownerId'], 'String');
            }
            if (data.hasOwnProperty('url')) {
                obj['url'] = ApiClient.convertToType(data['url'], 'String');
            }
            if (data.hasOwnProperty('tags')) {
                obj['tags'] = ApiClient.convertToType(data['tags'], ['String']);
            }
        }
        return obj;
    }


}

/**
 * the Validator id
 * @member {String} id
 */
Validator.prototype['id'] = undefined;

/**
 * the Validator name
 * @member {String} name
 */
Validator.prototype['name'] = undefined;

/**
 * the Validator description
 * @member {String} description
 */
Validator.prototype['description'] = undefined;

/**
 * the registry repository containing the Validator image
 * @member {String} repository
 */
Validator.prototype['repository'] = undefined;

/**
 * the Validator version MAJOR.MINOR.PATCH. Must be aligned with an existing repository tag
 * @member {String} version
 */
Validator.prototype['version'] = undefined;

/**
 * the User id which own this Validator
 * @member {String} ownerId
 */
Validator.prototype['ownerId'] = undefined;

/**
 * an optional URL link to Validator page
 * @member {String} url
 */
Validator.prototype['url'] = undefined;

/**
 * the list of tags
 * @member {Array.<String>} tags
 */
Validator.prototype['tags'] = undefined;






export default Validator;

