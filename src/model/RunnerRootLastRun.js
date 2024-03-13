/**
 * Cosmo Tech Platform API
 * Cosmo Tech Platform API
 *
 * The version of the OpenAPI document: 3.1.1-SNAPSHOT
 * Contact: platform@cosmotech.com
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 *
 */

import ApiClient from '../ApiClient';
import RunnerLastRun from './RunnerLastRun';

/**
 * The RunnerRootLastRun model module.
 * @module model/RunnerRootLastRun
 * @version 3.1.1-SNAPSHOT
 */
class RunnerRootLastRun {
    /**
     * Constructs a new <code>RunnerRootLastRun</code>.
     * @alias module:model/RunnerRootLastRun
     * @implements module:model/RunnerLastRun
     */
    constructor() { 
        RunnerLastRun.initialize(this);
        RunnerRootLastRun.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>RunnerRootLastRun</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/RunnerRootLastRun} obj Optional instance to populate.
     * @return {module:model/RunnerRootLastRun} The populated <code>RunnerRootLastRun</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new RunnerRootLastRun();
            RunnerLastRun.constructFromObject(data, obj);

            if (data.hasOwnProperty('runnerRunId')) {
                obj['runnerRunId'] = ApiClient.convertToType(data['runnerRunId'], 'String');
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
     * Validates the JSON data with respect to <code>RunnerRootLastRun</code>.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @return {boolean} to indicate whether the JSON data is valid with respect to <code>RunnerRootLastRun</code>.
     */
    static validateJSON(data) {
        // ensure the json data is a string
        if (data['runnerRunId'] && !(typeof data['runnerRunId'] === 'string' || data['runnerRunId'] instanceof String)) {
            throw new Error("Expected the field `runnerRunId` to be a primitive type in the JSON string but got " + data['runnerRunId']);
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
 * the last Runner Run id
 * @member {String} runnerRunId
 */
RunnerRootLastRun.prototype['runnerRunId'] = undefined;

/**
 * the last Cosmo Tech Simulation Run id
 * @member {String} csmSimulationRun
 */
RunnerRootLastRun.prototype['csmSimulationRun'] = undefined;

/**
 * the last Workflow Id
 * @member {String} workflowId
 */
RunnerRootLastRun.prototype['workflowId'] = undefined;

/**
 * the last Workflow name
 * @member {String} workflowName
 */
RunnerRootLastRun.prototype['workflowName'] = undefined;


// Implement RunnerLastRun interface:
/**
 * the last Runner Run id
 * @member {String} runnerRunId
 */
RunnerLastRun.prototype['runnerRunId'] = undefined;
/**
 * the last Cosmo Tech Simulation Run id
 * @member {String} csmSimulationRun
 */
RunnerLastRun.prototype['csmSimulationRun'] = undefined;
/**
 * the last Workflow Id
 * @member {String} workflowId
 */
RunnerLastRun.prototype['workflowId'] = undefined;
/**
 * the last Workflow name
 * @member {String} workflowName
 */
RunnerLastRun.prototype['workflowName'] = undefined;




export default RunnerRootLastRun;
