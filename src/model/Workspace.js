/**
 * Cosmo Tech Platform API
 * Cosmo Tech Platform API
 *
 * The version of the OpenAPI document: 3.2.1
 * Contact: platform@cosmotech.com
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 *
 */

import ApiClient from '../ApiClient';
import WorkspaceSecurity from './WorkspaceSecurity';
import WorkspaceSolution from './WorkspaceSolution';
import WorkspaceWebApp from './WorkspaceWebApp';

/**
 * The Workspace model module.
 * @module model/Workspace
 * @version 3.2.1
 */
class Workspace {
    /**
     * Constructs a new <code>Workspace</code>.
     * a Workspace
     * @alias module:model/Workspace
     * @param key {String} technical key for resource name convention and version grouping. Must be unique
     * @param name {String} Workspace name. This name is display in the sample webApp
     * @param solution {module:model/WorkspaceSolution} 
     */
    constructor(key, name, solution) { 
        
        Workspace.initialize(this, key, name, solution);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj, key, name, solution) { 
        obj['key'] = key;
        obj['name'] = name;
        obj['solution'] = solution;
    }

    /**
     * Constructs a <code>Workspace</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/Workspace} obj Optional instance to populate.
     * @return {module:model/Workspace} The populated <code>Workspace</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new Workspace();

            if (data.hasOwnProperty('id')) {
                obj['id'] = ApiClient.convertToType(data['id'], 'String');
            }
            if (data.hasOwnProperty('organizationId')) {
                obj['organizationId'] = ApiClient.convertToType(data['organizationId'], 'String');
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
            if (data.hasOwnProperty('linkedDatasetIdList')) {
                obj['linkedDatasetIdList'] = ApiClient.convertToType(data['linkedDatasetIdList'], ['String']);
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
            if (data.hasOwnProperty('solution')) {
                obj['solution'] = WorkspaceSolution.constructFromObject(data['solution']);
            }
            if (data.hasOwnProperty('webApp')) {
                obj['webApp'] = WorkspaceWebApp.constructFromObject(data['webApp']);
            }
            if (data.hasOwnProperty('sendInputToDataWarehouse')) {
                obj['sendInputToDataWarehouse'] = ApiClient.convertToType(data['sendInputToDataWarehouse'], 'Boolean');
            }
            if (data.hasOwnProperty('useDedicatedEventHubNamespace')) {
                obj['useDedicatedEventHubNamespace'] = ApiClient.convertToType(data['useDedicatedEventHubNamespace'], 'Boolean');
            }
            if (data.hasOwnProperty('dedicatedEventHubSasKeyName')) {
                obj['dedicatedEventHubSasKeyName'] = ApiClient.convertToType(data['dedicatedEventHubSasKeyName'], 'String');
            }
            if (data.hasOwnProperty('dedicatedEventHubAuthenticationStrategy')) {
                obj['dedicatedEventHubAuthenticationStrategy'] = ApiClient.convertToType(data['dedicatedEventHubAuthenticationStrategy'], 'String');
            }
            if (data.hasOwnProperty('sendScenarioRunToEventHub')) {
                obj['sendScenarioRunToEventHub'] = ApiClient.convertToType(data['sendScenarioRunToEventHub'], 'Boolean');
            }
            if (data.hasOwnProperty('sendScenarioMetadataToEventHub')) {
                obj['sendScenarioMetadataToEventHub'] = ApiClient.convertToType(data['sendScenarioMetadataToEventHub'], 'Boolean');
            }
            if (data.hasOwnProperty('datasetCopy')) {
                obj['datasetCopy'] = ApiClient.convertToType(data['datasetCopy'], 'Boolean');
            }
            if (data.hasOwnProperty('security')) {
                obj['security'] = ApiClient.convertToType(data['security'], WorkspaceSecurity);
            }
        }
        return obj;
    }

    /**
     * Validates the JSON data with respect to <code>Workspace</code>.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @return {boolean} to indicate whether the JSON data is valid with respect to <code>Workspace</code>.
     */
    static validateJSON(data) {
        // check to make sure all required properties are present in the JSON string
        for (const property of Workspace.RequiredProperties) {
            if (!data.hasOwnProperty(property)) {
                throw new Error("The required field `" + property + "` is not found in the JSON data: " + JSON.stringify(data));
            }
        }
        // ensure the json data is a string
        if (data['id'] && !(typeof data['id'] === 'string' || data['id'] instanceof String)) {
            throw new Error("Expected the field `id` to be a primitive type in the JSON string but got " + data['id']);
        }
        // ensure the json data is a string
        if (data['organizationId'] && !(typeof data['organizationId'] === 'string' || data['organizationId'] instanceof String)) {
            throw new Error("Expected the field `organizationId` to be a primitive type in the JSON string but got " + data['organizationId']);
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
        // ensure the json data is an array
        if (!Array.isArray(data['linkedDatasetIdList'])) {
            throw new Error("Expected the field `linkedDatasetIdList` to be an array in the JSON data but got " + data['linkedDatasetIdList']);
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
        // validate the optional field `solution`
        if (data['solution']) { // data not null
          WorkspaceSolution.validateJSON(data['solution']);
        }
        // validate the optional field `webApp`
        if (data['webApp']) { // data not null
          WorkspaceWebApp.validateJSON(data['webApp']);
        }
        // ensure the json data is a string
        if (data['dedicatedEventHubSasKeyName'] && !(typeof data['dedicatedEventHubSasKeyName'] === 'string' || data['dedicatedEventHubSasKeyName'] instanceof String)) {
            throw new Error("Expected the field `dedicatedEventHubSasKeyName` to be a primitive type in the JSON string but got " + data['dedicatedEventHubSasKeyName']);
        }
        // ensure the json data is a string
        if (data['dedicatedEventHubAuthenticationStrategy'] && !(typeof data['dedicatedEventHubAuthenticationStrategy'] === 'string' || data['dedicatedEventHubAuthenticationStrategy'] instanceof String)) {
            throw new Error("Expected the field `dedicatedEventHubAuthenticationStrategy` to be a primitive type in the JSON string but got " + data['dedicatedEventHubAuthenticationStrategy']);
        }
        // validate the optional field `security`
        if (data['security']) { // data not null
          WorkspaceSecurity.validateJSON(data['security']);
        }

        return true;
    }


}

Workspace.RequiredProperties = ["key", "name", "solution"];

/**
 * Workspace unique identifier generated by the API
 * @member {String} id
 */
Workspace.prototype['id'] = undefined;

/**
 * Organization unique identifier under which the workspace resides
 * @member {String} organizationId
 */
Workspace.prototype['organizationId'] = undefined;

/**
 * technical key for resource name convention and version grouping. Must be unique
 * @member {String} key
 */
Workspace.prototype['key'] = undefined;

/**
 * Workspace name. This name is display in the sample webApp
 * @member {String} name
 */
Workspace.prototype['name'] = undefined;

/**
 * the Workspace description
 * @member {String} description
 */
Workspace.prototype['description'] = undefined;

/**
 * list of dataset linked to this dataset
 * @member {Array.<String>} linkedDatasetIdList
 */
Workspace.prototype['linkedDatasetIdList'] = undefined;

/**
 * the Workspace version MAJOR.MINOR.PATCH.
 * @member {String} version
 */
Workspace.prototype['version'] = undefined;

/**
 * the list of tags
 * @member {Array.<String>} tags
 */
Workspace.prototype['tags'] = undefined;

/**
 * the user id which own this workspace. set by the API from Authentification service receved id
 * @member {String} ownerId
 */
Workspace.prototype['ownerId'] = undefined;

/**
 * @member {module:model/WorkspaceSolution} solution
 */
Workspace.prototype['solution'] = undefined;

/**
 * @member {module:model/WorkspaceWebApp} webApp
 */
Workspace.prototype['webApp'] = undefined;

/**
 * default setting for all Scenarios and Run Templates to set whether or not the Dataset values and the input parameters values are send to the DataWarehouse prior to the ScenarioRun
 * @member {Boolean} sendInputToDataWarehouse
 */
Workspace.prototype['sendInputToDataWarehouse'] = undefined;

/**
 * Set this property to true to use a dedicated Azure Event Hub Namespace for this Workspace. The Event Hub Namespace must be named \\'<organization_id\\>-<workspace_id\\>\\' (in lower case). This Namespace must also contain two Event Hubs named \\'probesmeasures\\' and \\'scenariorun\\'.
 * @member {Boolean} useDedicatedEventHubNamespace
 * @default false
 */
Workspace.prototype['useDedicatedEventHubNamespace'] = false;

/**
 * the Dedicated Event Hub SAS key name, default to RootManageSharedAccessKey. Use the /secret endpoint to set the key value
 * @member {String} dedicatedEventHubSasKeyName
 */
Workspace.prototype['dedicatedEventHubSasKeyName'] = undefined;

/**
 * the Event Hub authentication strategy, SHARED_ACCESS_POLICY or TENANT_CLIENT_CREDENTIALS. Default to the one defined for the tenant.
 * @member {String} dedicatedEventHubAuthenticationStrategy
 */
Workspace.prototype['dedicatedEventHubAuthenticationStrategy'] = undefined;

/**
 * default setting for all Scenarios and Run Templates to set whether or not the ScenarioRun is send to the Event Hub
 * @member {Boolean} sendScenarioRunToEventHub
 * @default true
 */
Workspace.prototype['sendScenarioRunToEventHub'] = true;

/**
 * Set this property to false to not send scenario metada to Azure Event Hub Namespace for this Workspace. The Event Hub Namespace must be named \\'<organization_id\\>-<workspace_id\\>\\' (in lower case). This Namespace must also contain two Event Hubs named \\'scenariometadata\\' and \\'scenariorunmetadata\\'.
 * @member {Boolean} sendScenarioMetadataToEventHub
 * @default false
 */
Workspace.prototype['sendScenarioMetadataToEventHub'] = false;

/**
 * Activate the copy of dataset on scenario creation, meaning that each scenario created in this workspace will make this copy. when false, scenario use directly the dataset specified.
 * @member {Boolean} datasetCopy
 * @default true
 */
Workspace.prototype['datasetCopy'] = true;

/**
 * @member {module:model/WorkspaceSecurity} security
 */
Workspace.prototype['security'] = undefined;






export default Workspace;

