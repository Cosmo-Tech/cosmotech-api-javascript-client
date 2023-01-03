/**
 * Cosmo Tech Plaform API
 * Cosmo Tech Platform API
 *
 * The version of the OpenAPI document: 1.1.0
 * Contact: platform@cosmotech.com
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 *
 */

import ApiClient from '../ApiClient';
import DatasetCompatibility from './DatasetCompatibility';
import DatasetConnector from './DatasetConnector';

/**
 * The Dataset model module.
 * @module model/Dataset
 * @version 1.1.0
 */
class Dataset {
    /**
     * Constructs a new <code>Dataset</code>.
     * a Dataset
     * @alias module:model/Dataset
     */
    constructor() { 
        
        Dataset.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>Dataset</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/Dataset} obj Optional instance to populate.
     * @return {module:model/Dataset} The populated <code>Dataset</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new Dataset();

            if (data.hasOwnProperty('id')) {
                obj['id'] = ApiClient.convertToType(data['id'], 'String');
            }
            if (data.hasOwnProperty('name')) {
                obj['name'] = ApiClient.convertToType(data['name'], 'String');
            }
            if (data.hasOwnProperty('description')) {
                obj['description'] = ApiClient.convertToType(data['description'], 'String');
            }
            if (data.hasOwnProperty('ownerId')) {
                obj['ownerId'] = ApiClient.convertToType(data['ownerId'], 'String');
            }
            if (data.hasOwnProperty('tags')) {
                obj['tags'] = ApiClient.convertToType(data['tags'], ['String']);
            }
            if (data.hasOwnProperty('connector')) {
                obj['connector'] = DatasetConnector.constructFromObject(data['connector']);
            }
            if (data.hasOwnProperty('fragmentsIds')) {
                obj['fragmentsIds'] = ApiClient.convertToType(data['fragmentsIds'], ['String']);
            }
            if (data.hasOwnProperty('validatorId')) {
                obj['validatorId'] = ApiClient.convertToType(data['validatorId'], 'String');
            }
            if (data.hasOwnProperty('compatibility')) {
                obj['compatibility'] = ApiClient.convertToType(data['compatibility'], [DatasetCompatibility]);
            }
        }
        return obj;
    }


}

/**
 * the Dataset unique identifier
 * @member {String} id
 */
Dataset.prototype['id'] = undefined;

/**
 * the Dataset name
 * @member {String} name
 */
Dataset.prototype['name'] = undefined;

/**
 * the Dataset description
 * @member {String} description
 */
Dataset.prototype['description'] = undefined;

/**
 * the User id which own this Dataset
 * @member {String} ownerId
 */
Dataset.prototype['ownerId'] = undefined;

/**
 * the list of tags
 * @member {Array.<String>} tags
 */
Dataset.prototype['tags'] = undefined;

/**
 * @member {module:model/DatasetConnector} connector
 */
Dataset.prototype['connector'] = undefined;

/**
 * the list of other Datasets ids to compose as fragments
 * @member {Array.<String>} fragmentsIds
 */
Dataset.prototype['fragmentsIds'] = undefined;

/**
 * the validator id
 * @member {String} validatorId
 */
Dataset.prototype['validatorId'] = undefined;

/**
 * the list of compatible Solutions versions
 * @member {Array.<module:model/DatasetCompatibility>} compatibility
 */
Dataset.prototype['compatibility'] = undefined;






export default Dataset;

