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
import ScenarioRunContainerLogs from './ScenarioRunContainerLogs';
import ScenarioRunLogsOptions from './ScenarioRunLogsOptions';

/**
 * The ScenarioRunLogs model module.
 * @module model/ScenarioRunLogs
 * @version 0.0.1-SNAPSHOT
 */
class ScenarioRunLogs {
    /**
     * Constructs a new <code>ScenarioRunLogs</code>.
     * the scenariorun logs returned by all containers
     * @alias module:model/ScenarioRunLogs
     */
    constructor() { 
        
        ScenarioRunLogs.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>ScenarioRunLogs</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/ScenarioRunLogs} obj Optional instance to populate.
     * @return {module:model/ScenarioRunLogs} The populated <code>ScenarioRunLogs</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new ScenarioRunLogs();

            if (data.hasOwnProperty('scenariorunId')) {
                obj['scenariorunId'] = ApiClient.convertToType(data['scenariorunId'], 'String');
            }
            if (data.hasOwnProperty('options')) {
                obj['options'] = ScenarioRunLogsOptions.constructFromObject(data['options']);
            }
            if (data.hasOwnProperty('fetchDatasetLogs')) {
                obj['fetchDatasetLogs'] = ApiClient.convertToType(data['fetchDatasetLogs'], [ScenarioRunContainerLogs]);
            }
            if (data.hasOwnProperty('fetchScenarioParametersLog')) {
                obj['fetchScenarioParametersLog'] = ScenarioRunContainerLogs.constructFromObject(data['fetchScenarioParametersLog']);
            }
            if (data.hasOwnProperty('applyParametersLogs')) {
                obj['applyParametersLogs'] = ScenarioRunContainerLogs.constructFromObject(data['applyParametersLogs']);
            }
            if (data.hasOwnProperty('validateDataLogs')) {
                obj['validateDataLogs'] = ScenarioRunContainerLogs.constructFromObject(data['validateDataLogs']);
            }
            if (data.hasOwnProperty('sendDataWarehouseLogs')) {
                obj['sendDataWarehouseLogs'] = ScenarioRunContainerLogs.constructFromObject(data['sendDataWarehouseLogs']);
            }
            if (data.hasOwnProperty('preRunLogs')) {
                obj['preRunLogs'] = ScenarioRunContainerLogs.constructFromObject(data['preRunLogs']);
            }
            if (data.hasOwnProperty('runLogs')) {
                obj['runLogs'] = ScenarioRunContainerLogs.constructFromObject(data['runLogs']);
            }
            if (data.hasOwnProperty('postRunLogs')) {
                obj['postRunLogs'] = ScenarioRunContainerLogs.constructFromObject(data['postRunLogs']);
            }
        }
        return obj;
    }


}

/**
 * the ScenarioRun Id
 * @member {String} scenariorunId
 */
ScenarioRunLogs.prototype['scenariorunId'] = undefined;

/**
 * @member {module:model/ScenarioRunLogsOptions} options
 */
ScenarioRunLogs.prototype['options'] = undefined;

/**
 * logs for the containers which fetch the Scenario Datasets
 * @member {Array.<module:model/ScenarioRunContainerLogs>} fetchDatasetLogs
 */
ScenarioRunLogs.prototype['fetchDatasetLogs'] = undefined;

/**
 * @member {module:model/ScenarioRunContainerLogs} fetchScenarioParametersLog
 */
ScenarioRunLogs.prototype['fetchScenarioParametersLog'] = undefined;

/**
 * @member {module:model/ScenarioRunContainerLogs} applyParametersLogs
 */
ScenarioRunLogs.prototype['applyParametersLogs'] = undefined;

/**
 * @member {module:model/ScenarioRunContainerLogs} validateDataLogs
 */
ScenarioRunLogs.prototype['validateDataLogs'] = undefined;

/**
 * @member {module:model/ScenarioRunContainerLogs} sendDataWarehouseLogs
 */
ScenarioRunLogs.prototype['sendDataWarehouseLogs'] = undefined;

/**
 * @member {module:model/ScenarioRunContainerLogs} preRunLogs
 */
ScenarioRunLogs.prototype['preRunLogs'] = undefined;

/**
 * @member {module:model/ScenarioRunContainerLogs} runLogs
 */
ScenarioRunLogs.prototype['runLogs'] = undefined;

/**
 * @member {module:model/ScenarioRunContainerLogs} postRunLogs
 */
ScenarioRunLogs.prototype['postRunLogs'] = undefined;






export default ScenarioRunLogs;
