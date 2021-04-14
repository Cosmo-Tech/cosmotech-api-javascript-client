/**
 * Cosmo Tech Plaform API
 * Cosmo Tech Platform API
 *
 * The version of the OpenAPI document: 0.0.1-SNAPSHOT
 * 
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 *
 */

import ApiClient from '../ApiClient';
import WorkspaceServices from './WorkspaceServices';
import WorkspaceSimulator from './WorkspaceSimulator';
import WorkspaceUser from './WorkspaceUser';
import WorkspaceWebApp from './WorkspaceWebApp';

/**
 * The Workspace model module.
 * @module model/Workspace
 * @version 0.0.1-SNAPSHOT
 */
class Workspace {
    /**
     * Constructs a new <code>Workspace</code>.
     * a Workspace
     * @alias module:model/Workspace
     * @param name {String} the Workspace name
     * @param simulator {module:model/WorkspaceSimulator} 
     */
    constructor(name, simulator) { 
        
        Workspace.initialize(this, name, simulator);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj, name, simulator) { 
        obj['name'] = name;
        obj['simulator'] = simulator;
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
            if (data.hasOwnProperty('simulator')) {
                obj['simulator'] = WorkspaceSimulator.constructFromObject(data['simulator']);
            }
            if (data.hasOwnProperty('userList')) {
                obj['userList'] = ApiClient.convertToType(data['userList'], [WorkspaceUser]);
            }
            if (data.hasOwnProperty('webApp')) {
                obj['webApp'] = WorkspaceWebApp.constructFromObject(data['webApp']);
            }
            if (data.hasOwnProperty('services')) {
                obj['services'] = WorkspaceServices.constructFromObject(data['services']);
            }
            if (data.hasOwnProperty('sendInputToDataWarehouse')) {
                obj['sendInputToDataWarehouse'] = ApiClient.convertToType(data['sendInputToDataWarehouse'], 'Boolean');
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
 * @member {module:model/WorkspaceSimulator} simulator
 */
Workspace.prototype['simulator'] = undefined;

/**
 * the list of users Id with their role
 * @member {Array.<module:model/WorkspaceUser>} userList
 */
Workspace.prototype['userList'] = undefined;

/**
 * @member {module:model/WorkspaceWebApp} webApp
 */
Workspace.prototype['webApp'] = undefined;

/**
 * @member {module:model/WorkspaceServices} services
 */
Workspace.prototype['services'] = undefined;

/**
 * default setting for all Scenarios and Analysis to set whether or not the Dataset values and the input parameters values are send to the DataWarehouse prior to Simulation Run
 * @member {Boolean} sendInputToDataWarehouse
 * @default true
 */
Workspace.prototype['sendInputToDataWarehouse'] = true;






export default Workspace;

