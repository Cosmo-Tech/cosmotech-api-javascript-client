/**
 * Cosmo Tech Platform API
 * Cosmo Tech Platform API
 *
 * The version of the OpenAPI document: 3.2.7
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
import DatasetSecurity from './DatasetSecurity';
import DatasetSourceType from './DatasetSourceType';
import IngestionStatusEnum from './IngestionStatusEnum';
import SourceInfo from './SourceInfo';
import TwincacheStatusEnum from './TwincacheStatusEnum';

/**
 * The Dataset model module.
 * @module model/Dataset
 * @version 3.2.7
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
            if (data.hasOwnProperty('ownerName')) {
                obj['ownerName'] = ApiClient.convertToType(data['ownerName'], 'String');
            }
            if (data.hasOwnProperty('organizationId')) {
                obj['organizationId'] = ApiClient.convertToType(data['organizationId'], 'String');
            }
            if (data.hasOwnProperty('parentId')) {
                obj['parentId'] = ApiClient.convertToType(data['parentId'], 'String');
            }
            if (data.hasOwnProperty('linkedWorkspaceIdList')) {
                obj['linkedWorkspaceIdList'] = ApiClient.convertToType(data['linkedWorkspaceIdList'], ['String']);
            }
            if (data.hasOwnProperty('twingraphId')) {
                obj['twingraphId'] = ApiClient.convertToType(data['twingraphId'], 'String');
            }
            if (data.hasOwnProperty('main')) {
                obj['main'] = ApiClient.convertToType(data['main'], 'Boolean');
            }
            if (data.hasOwnProperty('creationDate')) {
                obj['creationDate'] = ApiClient.convertToType(data['creationDate'], 'Number');
            }
            if (data.hasOwnProperty('refreshDate')) {
                obj['refreshDate'] = ApiClient.convertToType(data['refreshDate'], 'Number');
            }
            if (data.hasOwnProperty('sourceType')) {
                obj['sourceType'] = DatasetSourceType.constructFromObject(data['sourceType']);
            }
            if (data.hasOwnProperty('source')) {
                obj['source'] = SourceInfo.constructFromObject(data['source']);
            }
            if (data.hasOwnProperty('ingestionStatus')) {
                obj['ingestionStatus'] = IngestionStatusEnum.constructFromObject(data['ingestionStatus']);
            }
            if (data.hasOwnProperty('twincacheStatus')) {
                obj['twincacheStatus'] = TwincacheStatusEnum.constructFromObject(data['twincacheStatus']);
            }
            if (data.hasOwnProperty('queries')) {
                obj['queries'] = ApiClient.convertToType(data['queries'], ['String']);
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
            if (data.hasOwnProperty('security')) {
                obj['security'] = ApiClient.convertToType(data['security'], DatasetSecurity);
            }
        }
        return obj;
    }

    /**
     * Validates the JSON data with respect to <code>Dataset</code>.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @return {boolean} to indicate whether the JSON data is valid with respect to <code>Dataset</code>.
     */
    static validateJSON(data) {
        // ensure the json data is a string
        if (data['id'] && !(typeof data['id'] === 'string' || data['id'] instanceof String)) {
            throw new Error("Expected the field `id` to be a primitive type in the JSON string but got " + data['id']);
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
        if (data['ownerId'] && !(typeof data['ownerId'] === 'string' || data['ownerId'] instanceof String)) {
            throw new Error("Expected the field `ownerId` to be a primitive type in the JSON string but got " + data['ownerId']);
        }
        // ensure the json data is a string
        if (data['ownerName'] && !(typeof data['ownerName'] === 'string' || data['ownerName'] instanceof String)) {
            throw new Error("Expected the field `ownerName` to be a primitive type in the JSON string but got " + data['ownerName']);
        }
        // ensure the json data is a string
        if (data['organizationId'] && !(typeof data['organizationId'] === 'string' || data['organizationId'] instanceof String)) {
            throw new Error("Expected the field `organizationId` to be a primitive type in the JSON string but got " + data['organizationId']);
        }
        // ensure the json data is a string
        if (data['parentId'] && !(typeof data['parentId'] === 'string' || data['parentId'] instanceof String)) {
            throw new Error("Expected the field `parentId` to be a primitive type in the JSON string but got " + data['parentId']);
        }
        // ensure the json data is an array
        if (!Array.isArray(data['linkedWorkspaceIdList'])) {
            throw new Error("Expected the field `linkedWorkspaceIdList` to be an array in the JSON data but got " + data['linkedWorkspaceIdList']);
        }
        // ensure the json data is a string
        if (data['twingraphId'] && !(typeof data['twingraphId'] === 'string' || data['twingraphId'] instanceof String)) {
            throw new Error("Expected the field `twingraphId` to be a primitive type in the JSON string but got " + data['twingraphId']);
        }
        // validate the optional field `source`
        if (data['source']) { // data not null
          SourceInfo.validateJSON(data['source']);
        }
        // ensure the json data is an array
        if (!Array.isArray(data['queries'])) {
            throw new Error("Expected the field `queries` to be an array in the JSON data but got " + data['queries']);
        }
        // ensure the json data is an array
        if (!Array.isArray(data['tags'])) {
            throw new Error("Expected the field `tags` to be an array in the JSON data but got " + data['tags']);
        }
        // validate the optional field `connector`
        if (data['connector']) { // data not null
          DatasetConnector.validateJSON(data['connector']);
        }
        // ensure the json data is an array
        if (!Array.isArray(data['fragmentsIds'])) {
            throw new Error("Expected the field `fragmentsIds` to be an array in the JSON data but got " + data['fragmentsIds']);
        }
        // ensure the json data is a string
        if (data['validatorId'] && !(typeof data['validatorId'] === 'string' || data['validatorId'] instanceof String)) {
            throw new Error("Expected the field `validatorId` to be a primitive type in the JSON string but got " + data['validatorId']);
        }
        if (data['compatibility']) { // data not null
            // ensure the json data is an array
            if (!Array.isArray(data['compatibility'])) {
                throw new Error("Expected the field `compatibility` to be an array in the JSON data but got " + data['compatibility']);
            }
            // validate the optional field `compatibility` (array)
            for (const item of data['compatibility']) {
                DatasetCompatibility.validateJSON(item);
            };
        }
        // validate the optional field `security`
        if (data['security']) { // data not null
          DatasetSecurity.validateJSON(data['security']);
        }

        return true;
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
 * the name of the owner
 * @member {String} ownerName
 */
Dataset.prototype['ownerName'] = undefined;

/**
 * the Organization Id related to this Dataset
 * @member {String} organizationId
 */
Dataset.prototype['organizationId'] = undefined;

/**
 * the Dataset id which is the parent of this Dataset
 * @member {String} parentId
 */
Dataset.prototype['parentId'] = undefined;

/**
 * list of workspace linked to this dataset
 * @member {Array.<String>} linkedWorkspaceIdList
 */
Dataset.prototype['linkedWorkspaceIdList'] = undefined;

/**
 * the twin graph id
 * @member {String} twingraphId
 */
Dataset.prototype['twingraphId'] = undefined;

/**
 * is this the main dataset
 * @member {Boolean} main
 */
Dataset.prototype['main'] = undefined;

/**
 * the Dataset creation date
 * @member {Number} creationDate
 */
Dataset.prototype['creationDate'] = undefined;

/**
 * the last time a refresh was done
 * @member {Number} refreshDate
 */
Dataset.prototype['refreshDate'] = undefined;

/**
 * @member {module:model/DatasetSourceType} sourceType
 */
Dataset.prototype['sourceType'] = undefined;

/**
 * @member {module:model/SourceInfo} source
 */
Dataset.prototype['source'] = undefined;

/**
 * @member {module:model/IngestionStatusEnum} ingestionStatus
 */
Dataset.prototype['ingestionStatus'] = undefined;

/**
 * @member {module:model/TwincacheStatusEnum} twincacheStatus
 */
Dataset.prototype['twincacheStatus'] = undefined;

/**
 * the list of queries
 * @member {Array.<String>} queries
 */
Dataset.prototype['queries'] = undefined;

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

/**
 * @member {module:model/DatasetSecurity} security
 */
Dataset.prototype['security'] = undefined;






export default Dataset;

