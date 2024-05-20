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

/**
 * The ScenarioLastRun model module.
 * @module model/ScenarioLastRun
 * @version 3.2.1
 */
class ScenarioLastRun {
    /**
     * Constructs a new <code>ScenarioLastRun</code>.
     * @alias module:model/ScenarioLastRun
     */
    constructor() { 
        
        ScenarioLastRun.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>ScenarioLastRun</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/ScenarioLastRun} obj Optional instance to populate.
     * @return {module:model/ScenarioLastRun} The populated <code>ScenarioLastRun</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new ScenarioLastRun();

            if (data.hasOwnProperty('scenarioRunId')) {
                obj['scenarioRunId'] = ApiClient.convertToType(data['scenarioRunId'], 'String');
            }
            if (data.hasOwnProperty('csmSimulationRun')) {
                obj['csmSimulationRun'] = ApiClient.convertToType(data['csmSimulationRun'], 'String');
            }
            if (data.hasOwnProperty('workflowId')) {
                obj['workflowId'] = ApiClient.convertToType(data['workflowId'], 'String');
            }
            if (data.hasOwnProperty('workflowName')) {
                obj['workflowName'] = ApiClient.convertToType(data['workflowName'], 'String');
            }
        }
        return obj;
    }

    /**
     * Validates the JSON data with respect to <code>ScenarioLastRun</code>.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @return {boolean} to indicate whether the JSON data is valid with respect to <code>ScenarioLastRun</code>.
     */
    static validateJSON(data) {
        // ensure the json data is a string
        if (data['scenarioRunId'] && !(typeof data['scenarioRunId'] === 'string' || data['scenarioRunId'] instanceof String)) {
            throw new Error("Expected the field `scenarioRunId` to be a primitive type in the JSON string but got " + data['scenarioRunId']);
        }
        // ensure the json data is a string
        if (data['csmSimulationRun'] && !(typeof data['csmSimulationRun'] === 'string' || data['csmSimulationRun'] instanceof String)) {
            throw new Error("Expected the field `csmSimulationRun` to be a primitive type in the JSON string but got " + data['csmSimulationRun']);
        }
        // ensure the json data is a string
        if (data['workflowId'] && !(typeof data['workflowId'] === 'string' || data['workflowId'] instanceof String)) {
            throw new Error("Expected the field `workflowId` to be a primitive type in the JSON string but got " + data['workflowId']);
        }
        // ensure the json data is a string
        if (data['workflowName'] && !(typeof data['workflowName'] === 'string' || data['workflowName'] instanceof String)) {
            throw new Error("Expected the field `workflowName` to be a primitive type in the JSON string but got " + data['workflowName']);
        }

        return true;
    }


}



/**
 * the last Scenario Run id
 * @member {String} scenarioRunId
 */
ScenarioLastRun.prototype['scenarioRunId'] = undefined;

/**
 * the last Cosmo Tech Simulation Run id
 * @member {String} csmSimulationRun
 */
ScenarioLastRun.prototype['csmSimulationRun'] = undefined;

/**
 * the last Workflow Id
 * @member {String} workflowId
 */
ScenarioLastRun.prototype['workflowId'] = undefined;

/**
 * the last Workflow name
 * @member {String} workflowName
 */
ScenarioLastRun.prototype['workflowName'] = undefined;






export default ScenarioLastRun;

