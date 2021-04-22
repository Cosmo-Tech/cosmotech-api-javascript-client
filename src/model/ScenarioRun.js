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
import RunTemplateParameterValue from './RunTemplateParameterValue';
import ScenarioRunContainer from './ScenarioRunContainer';

/**
 * The ScenarioRun model module.
 * @module model/ScenarioRun
 * @version 0.0.1-SNAPSHOT
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
            if (data.hasOwnProperty('jobId')) {
                obj['jobId'] = ApiClient.convertToType(data['jobId'], 'String');
            }
            if (data.hasOwnProperty('ownerId')) {
                obj['ownerId'] = ApiClient.convertToType(data['ownerId'], 'String');
            }
            if (data.hasOwnProperty('workspaceId')) {
                obj['workspaceId'] = ApiClient.convertToType(data['workspaceId'], 'String');
            }
            if (data.hasOwnProperty('workspaceName')) {
                obj['workspaceName'] = ApiClient.convertToType(data['workspaceName'], 'String');
            }
            if (data.hasOwnProperty('scenarioId')) {
                obj['scenarioId'] = ApiClient.convertToType(data['scenarioId'], 'String');
            }
            if (data.hasOwnProperty('scenarioName')) {
                obj['scenarioName'] = ApiClient.convertToType(data['scenarioName'], 'String');
            }
            if (data.hasOwnProperty('solutionId')) {
                obj['solutionId'] = ApiClient.convertToType(data['solutionId'], 'String');
            }
            if (data.hasOwnProperty('solutionName')) {
                obj['solutionName'] = ApiClient.convertToType(data['solutionName'], 'String');
            }
            if (data.hasOwnProperty('solutionVersion')) {
                obj['solutionVersion'] = ApiClient.convertToType(data['solutionVersion'], 'String');
            }
            if (data.hasOwnProperty('runTemplateId')) {
                obj['runTemplateId'] = ApiClient.convertToType(data['runTemplateId'], 'String');
            }
            if (data.hasOwnProperty('runTemplateName')) {
                obj['runTemplateName'] = ApiClient.convertToType(data['runTemplateName'], 'String');
            }
            if (data.hasOwnProperty('computeSize')) {
                obj['computeSize'] = ApiClient.convertToType(data['computeSize'], 'String');
            }
            if (data.hasOwnProperty('state')) {
                obj['state'] = ApiClient.convertToType(data['state'], 'String');
            }
            if (data.hasOwnProperty('failedStep')) {
                obj['failedStep'] = ApiClient.convertToType(data['failedStep'], 'String');
            }
            if (data.hasOwnProperty('failedContainerId')) {
                obj['failedContainerId'] = ApiClient.convertToType(data['failedContainerId'], 'String');
            }
            if (data.hasOwnProperty('startTime')) {
                obj['startTime'] = ApiClient.convertToType(data['startTime'], 'String');
            }
            if (data.hasOwnProperty('endTime')) {
                obj['endTime'] = ApiClient.convertToType(data['endTime'], 'String');
            }
            if (data.hasOwnProperty('datasetList')) {
                obj['datasetList'] = ApiClient.convertToType(data['datasetList'], ['String']);
            }
            if (data.hasOwnProperty('parametersValues')) {
                obj['parametersValues'] = ApiClient.convertToType(data['parametersValues'], [RunTemplateParameterValue]);
            }
            if (data.hasOwnProperty('sendInputToDataWarehouse')) {
                obj['sendInputToDataWarehouse'] = ApiClient.convertToType(data['sendInputToDataWarehouse'], 'Boolean');
            }
            if (data.hasOwnProperty('dataWarehouseDB')) {
                obj['dataWarehouseDB'] = ApiClient.convertToType(data['dataWarehouseDB'], 'String');
            }
            if (data.hasOwnProperty('resultsEventBusResourceUri')) {
                obj['resultsEventBusResourceUri'] = ApiClient.convertToType(data['resultsEventBusResourceUri'], 'String');
            }
            if (data.hasOwnProperty('scenariorunEventBusResourceUri')) {
                obj['scenariorunEventBusResourceUri'] = ApiClient.convertToType(data['scenariorunEventBusResourceUri'], 'String');
            }
            if (data.hasOwnProperty('nodeLabel')) {
                obj['nodeLabel'] = ApiClient.convertToType(data['nodeLabel'], 'String');
            }
            if (data.hasOwnProperty('fetchDatasetContainers')) {
                obj['fetchDatasetContainers'] = ApiClient.convertToType(data['fetchDatasetContainers'], [ScenarioRunContainer]);
            }
            if (data.hasOwnProperty('fetchScenarioParametersContainer')) {
                obj['fetchScenarioParametersContainer'] = ScenarioRunContainer.constructFromObject(data['fetchScenarioParametersContainer']);
            }
            if (data.hasOwnProperty('applyParametersContainer')) {
                obj['applyParametersContainer'] = ScenarioRunContainer.constructFromObject(data['applyParametersContainer']);
            }
            if (data.hasOwnProperty('validateDataContainer')) {
                obj['validateDataContainer'] = ScenarioRunContainer.constructFromObject(data['validateDataContainer']);
            }
            if (data.hasOwnProperty('sendDataWarehouseContainer')) {
                obj['sendDataWarehouseContainer'] = ScenarioRunContainer.constructFromObject(data['sendDataWarehouseContainer']);
            }
            if (data.hasOwnProperty('preRunContainer')) {
                obj['preRunContainer'] = ScenarioRunContainer.constructFromObject(data['preRunContainer']);
            }
            if (data.hasOwnProperty('runContainer')) {
                obj['runContainer'] = ScenarioRunContainer.constructFromObject(data['runContainer']);
            }
            if (data.hasOwnProperty('postRunContainer')) {
                obj['postRunContainer'] = ScenarioRunContainer.constructFromObject(data['postRunContainer']);
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
 * the Platform compute cluster Job Id
 * @member {String} jobId
 */
ScenarioRun.prototype['jobId'] = undefined;

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
 * the Workspace name
 * @member {String} workspaceName
 */
ScenarioRun.prototype['workspaceName'] = undefined;

/**
 * the Scenario Id
 * @member {String} scenarioId
 */
ScenarioRun.prototype['scenarioId'] = undefined;

/**
 * the Scenario name
 * @member {String} scenarioName
 */
ScenarioRun.prototype['scenarioName'] = undefined;

/**
 * the Solution Id
 * @member {String} solutionId
 */
ScenarioRun.prototype['solutionId'] = undefined;

/**
 * the Solution name
 * @member {String} solutionName
 */
ScenarioRun.prototype['solutionName'] = undefined;

/**
 * the Solution version
 * @member {String} solutionVersion
 */
ScenarioRun.prototype['solutionVersion'] = undefined;

/**
 * the Solution Run Template id
 * @member {String} runTemplateId
 */
ScenarioRun.prototype['runTemplateId'] = undefined;

/**
 * the Run Template name
 * @member {String} runTemplateName
 */
ScenarioRun.prototype['runTemplateName'] = undefined;

/**
 * the compute size needed for this Analysis. Standard sizes are basic and highcpu. Default is basic
 * @member {String} computeSize
 */
ScenarioRun.prototype['computeSize'] = undefined;

/**
 * the ScenarioRun state
 * @member {module:model/ScenarioRun.StateEnum} state
 */
ScenarioRun.prototype['state'] = undefined;

/**
 * the failed step if state is Failed
 * @member {String} failedStep
 */
ScenarioRun.prototype['failedStep'] = undefined;

/**
 * the failed container Id if state is Failed
 * @member {String} failedContainerId
 */
ScenarioRun.prototype['failedContainerId'] = undefined;

/**
 * the ScenarioRun start Date Time
 * @member {String} startTime
 */
ScenarioRun.prototype['startTime'] = undefined;

/**
 * the ScenarioRun end Date Time
 * @member {String} endTime
 */
ScenarioRun.prototype['endTime'] = undefined;

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
 * whether or not the Dataset values and the input parameters values are send to the DataWarehouse prior to ScenarioRun Run
 * @member {Boolean} sendInputToDataWarehouse
 */
ScenarioRun.prototype['sendInputToDataWarehouse'] = undefined;

/**
 * the DataWarehouse database name to send data if sendInputToDataWarehouse is set
 * @member {String} dataWarehouseDB
 */
ScenarioRun.prototype['dataWarehouseDB'] = undefined;

/**
 * the event bus which receive Workspace ScenarioRun results messages. Message won't be send if this is not set
 * @member {String} resultsEventBusResourceUri
 */
ScenarioRun.prototype['resultsEventBusResourceUri'] = undefined;

/**
 * the event bus which receive Workspace ScenarioRun events messages. Message won't be send if this is not set
 * @member {String} scenariorunEventBusResourceUri
 */
ScenarioRun.prototype['scenariorunEventBusResourceUri'] = undefined;

/**
 * the node label request
 * @member {String} nodeLabel
 */
ScenarioRun.prototype['nodeLabel'] = undefined;

/**
 * the containers which fetch the Scenario Datasets
 * @member {Array.<module:model/ScenarioRunContainer>} fetchDatasetContainers
 */
ScenarioRun.prototype['fetchDatasetContainers'] = undefined;

/**
 * @member {module:model/ScenarioRunContainer} fetchScenarioParametersContainer
 */
ScenarioRun.prototype['fetchScenarioParametersContainer'] = undefined;

/**
 * @member {module:model/ScenarioRunContainer} applyParametersContainer
 */
ScenarioRun.prototype['applyParametersContainer'] = undefined;

/**
 * @member {module:model/ScenarioRunContainer} validateDataContainer
 */
ScenarioRun.prototype['validateDataContainer'] = undefined;

/**
 * @member {module:model/ScenarioRunContainer} sendDataWarehouseContainer
 */
ScenarioRun.prototype['sendDataWarehouseContainer'] = undefined;

/**
 * @member {module:model/ScenarioRunContainer} preRunContainer
 */
ScenarioRun.prototype['preRunContainer'] = undefined;

/**
 * @member {module:model/ScenarioRunContainer} runContainer
 */
ScenarioRun.prototype['runContainer'] = undefined;

/**
 * @member {module:model/ScenarioRunContainer} postRunContainer
 */
ScenarioRun.prototype['postRunContainer'] = undefined;





/**
 * Allowed values for the <code>state</code> property.
 * @enum {String}
 * @readonly
 */
ScenarioRun['StateEnum'] = {

    /**
     * value: "FetchingDatasets"
     * @const
     */
    "FetchingDatasets": "FetchingDatasets",

    /**
     * value: "FetchingScenarioParameters"
     * @const
     */
    "FetchingScenarioParameters": "FetchingScenarioParameters",

    /**
     * value: "ApplyingScenarioParameters"
     * @const
     */
    "ApplyingScenarioParameters": "ApplyingScenarioParameters",

    /**
     * value: "ValidatingScenarioData"
     * @const
     */
    "ValidatingScenarioData": "ValidatingScenarioData",

    /**
     * value: "SendingScenarioDataToDataWarehouse"
     * @const
     */
    "SendingScenarioDataToDataWarehouse": "SendingScenarioDataToDataWarehouse",

    /**
     * value: "PreRun"
     * @const
     */
    "PreRun": "PreRun",

    /**
     * value: "Running"
     * @const
     */
    "Running": "Running",

    /**
     * value: "PostRun"
     * @const
     */
    "PostRun": "PostRun",

    /**
     * value: "Success"
     * @const
     */
    "Success": "Success",

    /**
     * value: "Failed"
     * @const
     */
    "Failed": "Failed"
};



export default ScenarioRun;
