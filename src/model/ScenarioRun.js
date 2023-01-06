/**
 * Cosmo Tech Plaform API
 * Cosmo Tech Platform API
 *
 * The version of the OpenAPI document: 2.1.9-SNAPSHOT
 * Contact: platform@cosmotech.com
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 *
 */

import ApiClient from '../ApiClient';
import RunTemplateParameterValue from './RunTemplateParameterValue';
import ScenarioRunContainer from './ScenarioRunContainer';
import ScenarioRunState from './ScenarioRunState';

/**
 * The ScenarioRun model module.
 * @module model/ScenarioRun
 * @version 2.1.9-SNAPSHOT
 */
class ScenarioRun {
    /**
     * Constructs a new <code>ScenarioRun</code>.
     * a ScenarioRun with only base properties
     * @alias module:model/ScenarioRun
     */
    constructor() { 
        
        ScenarioRun.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>ScenarioRun</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/ScenarioRun} obj Optional instance to populate.
     * @return {module:model/ScenarioRun} The populated <code>ScenarioRun</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new ScenarioRun();

            if (data.hasOwnProperty('id')) {
                obj['id'] = ApiClient.convertToType(data['id'], 'String');
            }
            if (data.hasOwnProperty('state')) {
                obj['state'] = ScenarioRunState.constructFromObject(data['state']);
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
            if (data.hasOwnProperty('scenarioId')) {
                obj['scenarioId'] = ApiClient.convertToType(data['scenarioId'], 'String');
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
            if (data.hasOwnProperty('sdkVersion')) {
                obj['sdkVersion'] = ApiClient.convertToType(data['sdkVersion'], 'String');
            }
            if (data.hasOwnProperty('noDataIngestionState')) {
                obj['noDataIngestionState'] = ApiClient.convertToType(data['noDataIngestionState'], 'Boolean');
            }
            if (data.hasOwnProperty('datasetList')) {
                obj['datasetList'] = ApiClient.convertToType(data['datasetList'], ['String']);
            }
            if (data.hasOwnProperty('parametersValues')) {
                obj['parametersValues'] = ApiClient.convertToType(data['parametersValues'], [RunTemplateParameterValue]);
            }
            if (data.hasOwnProperty('sendDatasetsToDataWarehouse')) {
                obj['sendDatasetsToDataWarehouse'] = ApiClient.convertToType(data['sendDatasetsToDataWarehouse'], 'Boolean');
            }
            if (data.hasOwnProperty('sendInputParametersToDataWarehouse')) {
                obj['sendInputParametersToDataWarehouse'] = ApiClient.convertToType(data['sendInputParametersToDataWarehouse'], 'Boolean');
            }
            if (data.hasOwnProperty('nodeLabel')) {
                obj['nodeLabel'] = ApiClient.convertToType(data['nodeLabel'], 'String');
            }
            if (data.hasOwnProperty('containers')) {
                obj['containers'] = ApiClient.convertToType(data['containers'], [ScenarioRunContainer]);
            }
        }
        return obj;
    }


}

/**
 * the ScenarioRun
 * @member {String} id
 */
ScenarioRun.prototype['id'] = undefined;

/**
 * @member {module:model/ScenarioRunState} state
 */
ScenarioRun.prototype['state'] = undefined;

/**
 * the Organization id
 * @member {String} organizationId
 */
ScenarioRun.prototype['organizationId'] = undefined;

/**
 * the Cosmo Tech compute cluster Argo Workflow Id to search
 * @member {String} workflowId
 */
ScenarioRun.prototype['workflowId'] = undefined;

/**
 * the Cosmo Tech Simulation Run Id
 * @member {String} csmSimulationRun
 */
ScenarioRun.prototype['csmSimulationRun'] = undefined;

/**
 * the base name for workflow name generation
 * @member {String} generateName
 */
ScenarioRun.prototype['generateName'] = undefined;

/**
 * the Cosmo Tech compute cluster Argo Workflow Name
 * @member {String} workflowName
 */
ScenarioRun.prototype['workflowName'] = undefined;

/**
 * the user id which own this scenariorun
 * @member {String} ownerId
 */
ScenarioRun.prototype['ownerId'] = undefined;

/**
 * the Workspace Id
 * @member {String} workspaceId
 */
ScenarioRun.prototype['workspaceId'] = undefined;

/**
 * technical key for resource name convention and version grouping. Must be unique
 * @member {String} workspaceKey
 */
ScenarioRun.prototype['workspaceKey'] = undefined;

/**
 * the Scenario Id
 * @member {String} scenarioId
 */
ScenarioRun.prototype['scenarioId'] = undefined;

/**
 * the Solution Id
 * @member {String} solutionId
 */
ScenarioRun.prototype['solutionId'] = undefined;

/**
 * the Solution Run Template id
 * @member {String} runTemplateId
 */
ScenarioRun.prototype['runTemplateId'] = undefined;

/**
 * the compute size needed for this Analysis. Standard sizes are basic and highcpu. Default is basic
 * @member {String} computeSize
 */
ScenarioRun.prototype['computeSize'] = undefined;

/**
 * the MAJOR.MINOR version used to build the solution solution
 * @member {String} sdkVersion
 */
ScenarioRun.prototype['sdkVersion'] = undefined;

/**
 * set to true if the run template does not use any Datawarehouse consumers (AMQP consumers for Azure)
 * @member {Boolean} noDataIngestionState
 */
ScenarioRun.prototype['noDataIngestionState'] = undefined;

/**
 * the list of Dataset Id associated to this Analysis
 * @member {Array.<String>} datasetList
 */
ScenarioRun.prototype['datasetList'] = undefined;

/**
 * the list of Run Template parameters values
 * @member {Array.<module:model/RunTemplateParameterValue>} parametersValues
 */
ScenarioRun.prototype['parametersValues'] = undefined;

/**
 * whether or not the Datasets values are send to the DataWarehouse prior to Simulation Run. If not set follow the Workspace setting
 * @member {Boolean} sendDatasetsToDataWarehouse
 */
ScenarioRun.prototype['sendDatasetsToDataWarehouse'] = undefined;

/**
 * whether or not the input parameters values are send to the DataWarehouse prior to Simulation Run. If not set follow the Workspace setting
 * @member {Boolean} sendInputParametersToDataWarehouse
 */
ScenarioRun.prototype['sendInputParametersToDataWarehouse'] = undefined;

/**
 * the node label request
 * @member {String} nodeLabel
 */
ScenarioRun.prototype['nodeLabel'] = undefined;

/**
 * the containers list. This information is not returned by the API.
 * @member {Array.<module:model/ScenarioRunContainer>} containers
 */
ScenarioRun.prototype['containers'] = undefined;






export default ScenarioRun;

