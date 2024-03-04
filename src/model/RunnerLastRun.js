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

/**
 * The RunnerLastRun model module.
 * @module model/RunnerLastRun
 * @version 3.1.2-SNAPSHOT
 */
class RunnerLastRun {
    /**
     * Constructs a new <code>RunnerLastRun</code>.
     * @alias module:model/RunnerLastRun
     */
    constructor() { 
        
        RunnerLastRun.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>RunnerLastRun</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/RunnerLastRun} obj Optional instance to populate.
     * @return {module:model/RunnerLastRun} The populated <code>RunnerLastRun</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new RunnerLastRun();

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


}

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






export default RunnerLastRun;

