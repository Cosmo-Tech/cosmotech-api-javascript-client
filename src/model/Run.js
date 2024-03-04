/**
 * Cosmo Tech Platform API
 * Cosmo Tech Platform API
 *
 * The version of the OpenAPI document: 3.1.2-SNAPSHOT
 * Contact: platform@cosmotech.com
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 *
 */

import ApiClient from '../ApiClient';
import RunContainer from './RunContainer';
import RunState from './RunState';
import RunTemplateParameterValue from './RunTemplateParameterValue';

/**
 * The Run model module.
 * @module model/Run
 * @version 3.1.2-SNAPSHOT
 */
class Run {
    /**
     * Constructs a new <code>Run</code>.
     * a Run with only base properties
     * @alias module:model/Run
     */
    constructor() { 
        
        Run.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>Run</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/Run} obj Optional instance to populate.
     * @return {module:model/Run} The populated <code>Run</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new Run();

            if (data.hasOwnProperty('id')) {
                obj['id'] = ApiClient.convertToType(data['id'], 'String');
            }
            if (data.hasOwnProperty('state')) {
                obj['state'] = ApiClient.convertToType(data['state'], RunState);
            }
            if (data.hasOwnProperty('organizationId')) {
                obj['organizationId'] = ApiClient.convertToType(data['organizationId'], 'String');
            }
            if (data.hasOwnProperty('workflowId')) {
                obj['workflowId'] = ApiClient.convertToType(data['workflowId'], 'String');
            }
            if (data.hasOwnProperty('csmSimulationRun')) {
                obj['csmSimulationRun'] = ApiClient.convertToType(data['csmSimulationRun'], 'String');
            }
            if (data.hasOwnProperty('generateName')) {
                obj['generateName'] = ApiClient.convertToType(data['generateName'], 'String');
            }
            if (data.hasOwnProperty('workflowName')) {
                obj['workflowName'] = ApiClient.convertToType(data['workflowName'], 'String');
            }
            if (data.hasOwnProperty('ownerId')) {
                obj['ownerId'] = ApiClient.convertToType(data['ownerId'], 'String');
            }
            if (data.hasOwnProperty('workspaceId')) {
                obj['workspaceId'] = ApiClient.convertToType(data['workspaceId'], 'String');
            }
            if (data.hasOwnProperty('workspaceKey')) {
                obj['workspaceKey'] = ApiClient.convertToType(data['workspaceKey'], 'String');
            }
            if (data.hasOwnProperty('runnerId')) {
                obj['runnerId'] = ApiClient.convertToType(data['runnerId'], 'String');
            }
            if (data.hasOwnProperty('solutionId')) {
                obj['solutionId'] = ApiClient.convertToType(data['solutionId'], 'String');
            }
            if (data.hasOwnProperty('runTemplateId')) {
                obj['runTemplateId'] = ApiClient.convertToType(data['runTemplateId'], 'String');
            }
            if (data.hasOwnProperty('computeSize')) {
                obj['computeSize'] = ApiClient.convertToType(data['computeSize'], 'String');
            }
            if (data.hasOwnProperty('createdAt')) {
                obj['createdAt'] = ApiClient.convertToType(data['createdAt'], 'String');
            }
            if (data.hasOwnProperty('datasetList')) {
                obj['datasetList'] = ApiClient.convertToType(data['datasetList'], ['String']);
            }
            if (data.hasOwnProperty('parametersValues')) {
                obj['parametersValues'] = ApiClient.convertToType(data['parametersValues'], [RunTemplateParameterValue]);
            }
            if (data.hasOwnProperty('nodeLabel')) {
                obj['nodeLabel'] = ApiClient.convertToType(data['nodeLabel'], 'String');
            }
            if (data.hasOwnProperty('containers')) {
                obj['containers'] = ApiClient.convertToType(data['containers'], [RunContainer]);
            }
        }
        return obj;
    }


}

/**
 * the Run
 * @member {String} id
 */
Run.prototype['id'] = undefined;

/**
 * @member {module:model/RunState} state
 */
Run.prototype['state'] = undefined;

/**
 * the Organization id
 * @member {String} organizationId
 */
Run.prototype['organizationId'] = undefined;

/**
 * the Cosmo Tech compute cluster Argo Workflow Id to search
 * @member {String} workflowId
 */
Run.prototype['workflowId'] = undefined;

/**
 * the Cosmo Tech Simulation Run Id
 * @member {String} csmSimulationRun
 */
Run.prototype['csmSimulationRun'] = undefined;

/**
 * the base name for workflow name generation
 * @member {String} generateName
 */
Run.prototype['generateName'] = undefined;

/**
 * the Cosmo Tech compute cluster Argo Workflow Name
 * @member {String} workflowName
 */
Run.prototype['workflowName'] = undefined;

/**
 * the user id which own this run
 * @member {String} ownerId
 */
Run.prototype['ownerId'] = undefined;

/**
 * the Workspace Id
 * @member {String} workspaceId
 */
Run.prototype['workspaceId'] = undefined;

/**
 * technical key for resource name convention and version grouping. Must be unique
 * @member {String} workspaceKey
 */
Run.prototype['workspaceKey'] = undefined;

/**
 * the Runner Id
 * @member {String} runnerId
 */
Run.prototype['runnerId'] = undefined;

/**
 * the Solution Id
 * @member {String} solutionId
 */
Run.prototype['solutionId'] = undefined;

/**
 * the Solution Run Template id
 * @member {String} runTemplateId
 */
Run.prototype['runTemplateId'] = undefined;

/**
 * the compute size needed for this Analysis. Standard sizes are basic and highcpu. Default is basic
 * @member {String} computeSize
 */
Run.prototype['computeSize'] = undefined;

/**
 * the Run creation date
 * @member {String} createdAt
 */
Run.prototype['createdAt'] = undefined;

/**
 * the list of Dataset Id associated to this Run
 * @member {Array.<String>} datasetList
 */
Run.prototype['datasetList'] = undefined;

/**
 * the list of Run Template parameters values
 * @member {Array.<module:model/RunTemplateParameterValue>} parametersValues
 */
Run.prototype['parametersValues'] = undefined;

/**
 * the node label request
 * @member {String} nodeLabel
 */
Run.prototype['nodeLabel'] = undefined;

/**
 * the containers list. This information is not returned by the API.
 * @member {Array.<module:model/RunContainer>} containers
 */
Run.prototype['containers'] = undefined;






export default Run;

