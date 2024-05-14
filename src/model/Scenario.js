/**
 * Cosmo Tech Platform API
 * Cosmo Tech Platform API
 *
 * The version of the OpenAPI document: 3.2.0
 * Contact: platform@cosmotech.com
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 *
 */

import ApiClient from '../ApiClient';
import ScenarioJobState from './ScenarioJobState';
import ScenarioLastRun from './ScenarioLastRun';
import ScenarioResourceSizing from './ScenarioResourceSizing';
import ScenarioRunTemplateParameterValue from './ScenarioRunTemplateParameterValue';
import ScenarioSecurity from './ScenarioSecurity';
import ScenarioValidationStatus from './ScenarioValidationStatus';

/**
 * The Scenario model module.
 * @module model/Scenario
 * @version 3.2.0
 */
class Scenario {
    /**
     * Constructs a new <code>Scenario</code>.
     * a Scenario with base information
     * @alias module:model/Scenario
     */
    constructor() { 
        
        Scenario.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>Scenario</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/Scenario} obj Optional instance to populate.
     * @return {module:model/Scenario} The populated <code>Scenario</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new Scenario();

            if (data.hasOwnProperty('id')) {
                obj['id'] = ApiClient.convertToType(data['id'], 'String');
            }
            if (data.hasOwnProperty('name')) {
                obj['name'] = ApiClient.convertToType(data['name'], 'String');
            }
            if (data.hasOwnProperty('description')) {
                obj['description'] = ApiClient.convertToType(data['description'], 'String');
            }
            if (data.hasOwnProperty('tags')) {
                obj['tags'] = ApiClient.convertToType(data['tags'], ['String']);
            }
            if (data.hasOwnProperty('parentId')) {
                obj['parentId'] = ApiClient.convertToType(data['parentId'], 'String');
            }
            if (data.hasOwnProperty('ownerId')) {
                obj['ownerId'] = ApiClient.convertToType(data['ownerId'], 'String');
            }
            if (data.hasOwnProperty('rootId')) {
                obj['rootId'] = ApiClient.convertToType(data['rootId'], 'String');
            }
            if (data.hasOwnProperty('solutionId')) {
                obj['solutionId'] = ApiClient.convertToType(data['solutionId'], 'String');
            }
            if (data.hasOwnProperty('runTemplateId')) {
                obj['runTemplateId'] = ApiClient.convertToType(data['runTemplateId'], 'String');
            }
            if (data.hasOwnProperty('organizationId')) {
                obj['organizationId'] = ApiClient.convertToType(data['organizationId'], 'String');
            }
            if (data.hasOwnProperty('workspaceId')) {
                obj['workspaceId'] = ApiClient.convertToType(data['workspaceId'], 'String');
            }
            if (data.hasOwnProperty('state')) {
                obj['state'] = ScenarioJobState.constructFromObject(data['state']);
            }
            if (data.hasOwnProperty('creationDate')) {
                obj['creationDate'] = ApiClient.convertToType(data['creationDate'], 'Number');
            }
            if (data.hasOwnProperty('lastUpdate')) {
                obj['lastUpdate'] = ApiClient.convertToType(data['lastUpdate'], 'Number');
            }
            if (data.hasOwnProperty('ownerName')) {
                obj['ownerName'] = ApiClient.convertToType(data['ownerName'], 'String');
            }
            if (data.hasOwnProperty('solutionName')) {
                obj['solutionName'] = ApiClient.convertToType(data['solutionName'], 'String');
            }
            if (data.hasOwnProperty('runTemplateName')) {
                obj['runTemplateName'] = ApiClient.convertToType(data['runTemplateName'], 'String');
            }
            if (data.hasOwnProperty('datasetList')) {
                obj['datasetList'] = ApiClient.convertToType(data['datasetList'], ['String']);
            }
            if (data.hasOwnProperty('runSizing')) {
                obj['runSizing'] = ScenarioResourceSizing.constructFromObject(data['runSizing']);
            }
            if (data.hasOwnProperty('parametersValues')) {
                obj['parametersValues'] = ApiClient.convertToType(data['parametersValues'], [ScenarioRunTemplateParameterValue]);
            }
            if (data.hasOwnProperty('lastRun')) {
                obj['lastRun'] = ScenarioLastRun.constructFromObject(data['lastRun']);
            }
            if (data.hasOwnProperty('parentLastRun')) {
                obj['parentLastRun'] = ScenarioLastRun.constructFromObject(data['parentLastRun']);
            }
            if (data.hasOwnProperty('rootLastRun')) {
                obj['rootLastRun'] = ScenarioLastRun.constructFromObject(data['rootLastRun']);
            }
            if (data.hasOwnProperty('validationStatus')) {
                obj['validationStatus'] = ScenarioValidationStatus.constructFromObject(data['validationStatus']);
            }
            if (data.hasOwnProperty('security')) {
                obj['security'] = ScenarioSecurity.constructFromObject(data['security']);
            }
        }
        return obj;
    }

    /**
     * Validates the JSON data with respect to <code>Scenario</code>.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @return {boolean} to indicate whether the JSON data is valid with respect to <code>Scenario</code>.
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
        // ensure the json data is an array
        if (!Array.isArray(data['tags'])) {
            throw new Error("Expected the field `tags` to be an array in the JSON data but got " + data['tags']);
        }
        // ensure the json data is a string
        if (data['parentId'] && !(typeof data['parentId'] === 'string' || data['parentId'] instanceof String)) {
            throw new Error("Expected the field `parentId` to be a primitive type in the JSON string but got " + data['parentId']);
        }
        // ensure the json data is a string
        if (data['ownerId'] && !(typeof data['ownerId'] === 'string' || data['ownerId'] instanceof String)) {
            throw new Error("Expected the field `ownerId` to be a primitive type in the JSON string but got " + data['ownerId']);
        }
        // ensure the json data is a string
        if (data['rootId'] && !(typeof data['rootId'] === 'string' || data['rootId'] instanceof String)) {
            throw new Error("Expected the field `rootId` to be a primitive type in the JSON string but got " + data['rootId']);
        }
        // ensure the json data is a string
        if (data['solutionId'] && !(typeof data['solutionId'] === 'string' || data['solutionId'] instanceof String)) {
            throw new Error("Expected the field `solutionId` to be a primitive type in the JSON string but got " + data['solutionId']);
        }
        // ensure the json data is a string
        if (data['runTemplateId'] && !(typeof data['runTemplateId'] === 'string' || data['runTemplateId'] instanceof String)) {
            throw new Error("Expected the field `runTemplateId` to be a primitive type in the JSON string but got " + data['runTemplateId']);
        }
        // ensure the json data is a string
        if (data['organizationId'] && !(typeof data['organizationId'] === 'string' || data['organizationId'] instanceof String)) {
            throw new Error("Expected the field `organizationId` to be a primitive type in the JSON string but got " + data['organizationId']);
        }
        // ensure the json data is a string
        if (data['workspaceId'] && !(typeof data['workspaceId'] === 'string' || data['workspaceId'] instanceof String)) {
            throw new Error("Expected the field `workspaceId` to be a primitive type in the JSON string but got " + data['workspaceId']);
        }
        // ensure the json data is a string
        if (data['ownerName'] && !(typeof data['ownerName'] === 'string' || data['ownerName'] instanceof String)) {
            throw new Error("Expected the field `ownerName` to be a primitive type in the JSON string but got " + data['ownerName']);
        }
        // ensure the json data is a string
        if (data['solutionName'] && !(typeof data['solutionName'] === 'string' || data['solutionName'] instanceof String)) {
            throw new Error("Expected the field `solutionName` to be a primitive type in the JSON string but got " + data['solutionName']);
        }
        // ensure the json data is a string
        if (data['runTemplateName'] && !(typeof data['runTemplateName'] === 'string' || data['runTemplateName'] instanceof String)) {
            throw new Error("Expected the field `runTemplateName` to be a primitive type in the JSON string but got " + data['runTemplateName']);
        }
        // ensure the json data is an array
        if (!Array.isArray(data['datasetList'])) {
            throw new Error("Expected the field `datasetList` to be an array in the JSON data but got " + data['datasetList']);
        }
        // validate the optional field `runSizing`
        if (data['runSizing']) { // data not null
          ScenarioResourceSizing.validateJSON(data['runSizing']);
        }
        if (data['parametersValues']) { // data not null
            // ensure the json data is an array
            if (!Array.isArray(data['parametersValues'])) {
                throw new Error("Expected the field `parametersValues` to be an array in the JSON data but got " + data['parametersValues']);
            }
            // validate the optional field `parametersValues` (array)
            for (const item of data['parametersValues']) {
                ScenarioRunTemplateParameterValue.validateJSON(item);
            };
        }
        // validate the optional field `lastRun`
        if (data['lastRun']) { // data not null
          ScenarioLastRun.validateJSON(data['lastRun']);
        }
        // validate the optional field `parentLastRun`
        if (data['parentLastRun']) { // data not null
          ScenarioLastRun.validateJSON(data['parentLastRun']);
        }
        // validate the optional field `rootLastRun`
        if (data['rootLastRun']) { // data not null
          ScenarioLastRun.validateJSON(data['rootLastRun']);
        }
        // validate the optional field `security`
        if (data['security']) { // data not null
          ScenarioSecurity.validateJSON(data['security']);
        }

        return true;
    }


}



/**
 * the Scenario unique identifier
 * @member {String} id
 */
Scenario.prototype['id'] = undefined;

/**
 * the Scenario name
 * @member {String} name
 */
Scenario.prototype['name'] = undefined;

/**
 * the Scenario description
 * @member {String} description
 */
Scenario.prototype['description'] = undefined;

/**
 * the list of tags
 * @member {Array.<String>} tags
 */
Scenario.prototype['tags'] = undefined;

/**
 * the Scenario parent id
 * @member {String} parentId
 */
Scenario.prototype['parentId'] = undefined;

/**
 * the user id which own this Scenario
 * @member {String} ownerId
 */
Scenario.prototype['ownerId'] = undefined;

/**
 * the scenario root id
 * @member {String} rootId
 */
Scenario.prototype['rootId'] = undefined;

/**
 * the Solution Id associated with this Scenario
 * @member {String} solutionId
 */
Scenario.prototype['solutionId'] = undefined;

/**
 * the Solution Run Template Id associated with this Scenario
 * @member {String} runTemplateId
 */
Scenario.prototype['runTemplateId'] = undefined;

/**
 * the associated Organization Id
 * @member {String} organizationId
 */
Scenario.prototype['organizationId'] = undefined;

/**
 * the associated Workspace Id
 * @member {String} workspaceId
 */
Scenario.prototype['workspaceId'] = undefined;

/**
 * @member {module:model/ScenarioJobState} state
 */
Scenario.prototype['state'] = undefined;

/**
 * the Scenario creation date
 * @member {Number} creationDate
 */
Scenario.prototype['creationDate'] = undefined;

/**
 * the last time a Scenario was updated
 * @member {Number} lastUpdate
 */
Scenario.prototype['lastUpdate'] = undefined;

/**
 * the name of the owner
 * @member {String} ownerName
 */
Scenario.prototype['ownerName'] = undefined;

/**
 * the Solution name
 * @member {String} solutionName
 */
Scenario.prototype['solutionName'] = undefined;

/**
 * the Solution Run Template name associated with this Scenario
 * @member {String} runTemplateName
 */
Scenario.prototype['runTemplateName'] = undefined;

/**
 * the list of Dataset Id associated to this Scenario Run Template
 * @member {Array.<String>} datasetList
 */
Scenario.prototype['datasetList'] = undefined;

/**
 * @member {module:model/ScenarioResourceSizing} runSizing
 */
Scenario.prototype['runSizing'] = undefined;

/**
 * the list of Solution Run Template parameters values
 * @member {Array.<module:model/ScenarioRunTemplateParameterValue>} parametersValues
 */
Scenario.prototype['parametersValues'] = undefined;

/**
 * @member {module:model/ScenarioLastRun} lastRun
 */
Scenario.prototype['lastRun'] = undefined;

/**
 * @member {module:model/ScenarioLastRun} parentLastRun
 */
Scenario.prototype['parentLastRun'] = undefined;

/**
 * @member {module:model/ScenarioLastRun} rootLastRun
 */
Scenario.prototype['rootLastRun'] = undefined;

/**
 * @member {module:model/ScenarioValidationStatus} validationStatus
 */
Scenario.prototype['validationStatus'] = undefined;

/**
 * @member {module:model/ScenarioSecurity} security
 */
Scenario.prototype['security'] = undefined;






export default Scenario;

