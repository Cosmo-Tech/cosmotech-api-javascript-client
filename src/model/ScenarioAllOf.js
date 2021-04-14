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
import ScenarioAnalysis from './ScenarioAnalysis';
import ScenarioFailedAnalysis from './ScenarioFailedAnalysis';
import ScenarioRunningAnalysis from './ScenarioRunningAnalysis';
import ScenarioSuccessfulAnalysis from './ScenarioSuccessfulAnalysis';

/**
 * The ScenarioAllOf model module.
 * @module model/ScenarioAllOf
 * @version 0.0.1-SNAPSHOT
 */
class ScenarioAllOf {
    /**
     * Constructs a new <code>ScenarioAllOf</code>.
     * a Scenario with detailed information
     * @alias module:model/ScenarioAllOf
     */
    constructor() { 
        
        ScenarioAllOf.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>ScenarioAllOf</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/ScenarioAllOf} obj Optional instance to populate.
     * @return {module:model/ScenarioAllOf} The populated <code>ScenarioAllOf</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new ScenarioAllOf();

            if (data.hasOwnProperty('simulatorName')) {
                obj['simulatorName'] = ApiClient.convertToType(data['simulatorName'], 'String');
            }
            if (data.hasOwnProperty('simulatorAnalysisName')) {
                obj['simulatorAnalysisName'] = ApiClient.convertToType(data['simulatorAnalysisName'], 'String');
            }
            if (data.hasOwnProperty('analysis')) {
                obj['analysis'] = ScenarioAnalysis.constructFromObject(data['analysis']);
            }
            if (data.hasOwnProperty('successfulAnalysis')) {
                obj['successfulAnalysis'] = ScenarioSuccessfulAnalysis.constructFromObject(data['successfulAnalysis']);
            }
            if (data.hasOwnProperty('failedAnalysis')) {
                obj['failedAnalysis'] = ScenarioFailedAnalysis.constructFromObject(data['failedAnalysis']);
            }
            if (data.hasOwnProperty('runningAnalysis')) {
                obj['runningAnalysis'] = ScenarioRunningAnalysis.constructFromObject(data['runningAnalysis']);
            }
            if (data.hasOwnProperty('sendInputToDataWarehouse')) {
                obj['sendInputToDataWarehouse'] = ApiClient.convertToType(data['sendInputToDataWarehouse'], 'Boolean');
            }
        }
        return obj;
    }


}

/**
 * @member {String} simulatorName
 */
ScenarioAllOf.prototype['simulatorName'] = undefined;

/**
 * @member {String} simulatorAnalysisName
 */
ScenarioAllOf.prototype['simulatorAnalysisName'] = undefined;

/**
 * @member {module:model/ScenarioAnalysis} analysis
 */
ScenarioAllOf.prototype['analysis'] = undefined;

/**
 * @member {module:model/ScenarioSuccessfulAnalysis} successfulAnalysis
 */
ScenarioAllOf.prototype['successfulAnalysis'] = undefined;

/**
 * @member {module:model/ScenarioFailedAnalysis} failedAnalysis
 */
ScenarioAllOf.prototype['failedAnalysis'] = undefined;

/**
 * @member {module:model/ScenarioRunningAnalysis} runningAnalysis
 */
ScenarioAllOf.prototype['runningAnalysis'] = undefined;

/**
 * default setting for all Analysis to set whether or not the Dataset values and the input parameters values are send to the DataWarehouse prior to Simulation Run
 * @member {Boolean} sendInputToDataWarehouse
 */
ScenarioAllOf.prototype['sendInputToDataWarehouse'] = undefined;






export default ScenarioAllOf;

