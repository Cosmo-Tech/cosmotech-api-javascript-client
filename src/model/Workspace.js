/**
 * Cosmo Tech Plaform API
 * Cosmo Tech Platform API
 *
 * The version of the OpenAPI document: 2.2.0
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
 * @version 2.2.0
 */
class Workspace {
    /**
     * Constructs a new <code>Workspace</code>.
     * a Workspace
     * @alias module:model/Workspace
     * @param key {String} technical key for resource name convention and version grouping. Must be unique
     * @param name {String} the Workspace name
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
            if (data.hasOwnProperty('key')) {
                obj['key'] = ApiClient.convertToType(data['key'], 'String');
            }
            if (data.hasOwnProperty('name')) {
                obj['name'] = ApiClient.convertToType(data['name'], 'String');
            }
            if (data.hasOwnProperty('description')) {
                obj['description'] = ApiClient.convertToType(data['description'], 'String');
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
            if (data.hasOwnProperty('security')) {
                obj['security'] = ApiClient.convertToType(data['security'], WorkspaceSecurity);
            }
        }
        return obj;
    }


}

/**
 * the Workspace version unique identifier
 * @member {String} id
 */
Workspace.prototype['id'] = undefined;

/**
 * technical key for resource name convention and version grouping. Must be unique
 * @member {String} key
 */
Workspace.prototype['key'] = undefined;

/**
 * the Workspace name
 * @member {String} name
 */
Workspace.prototype['name'] = undefined;

/**
 * the Workspace description
 * @member {String} description
 */
Workspace.prototype['description'] = undefined;

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
 * the user id which own this workspace
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
 * @member {module:model/WorkspaceSecurity} security
 */
Workspace.prototype['security'] = undefined;






export default Workspace;

