/**
 * Cosmo Tech Plaform API
 * Cosmo Tech Platform API
 *
 * The version of the OpenAPI document: 1.0.6-SNAPSHOT
 * Contact: platform@cosmotech.com
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 *
 */

import ApiClient from '../ApiClient';
import ScenarioChangedParameterValue from './ScenarioChangedParameterValue';

/**
 * The ScenarioComparisonResult model module.
 * @module model/ScenarioComparisonResult
 * @version 1.0.6-SNAPSHOT
 */
class ScenarioComparisonResult {
    /**
     * Constructs a new <code>ScenarioComparisonResult</code>.
     * the result of the comparison of two scenarios
     * @alias module:model/ScenarioComparisonResult
     */
    constructor() { 
        
        ScenarioComparisonResult.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>ScenarioComparisonResult</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/ScenarioComparisonResult} obj Optional instance to populate.
     * @return {module:model/ScenarioComparisonResult} The populated <code>ScenarioComparisonResult</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new ScenarioComparisonResult();

            if (data.hasOwnProperty('scenarioId')) {
                obj['scenarioId'] = ApiClient.convertToType(data['scenarioId'], 'String');
            }
            if (data.hasOwnProperty('comparedScenarioId')) {
                obj['comparedScenarioId'] = ApiClient.convertToType(data['comparedScenarioId'], 'String');
            }
            if (data.hasOwnProperty('changedValues')) {
                obj['changedValues'] = ApiClient.convertToType(data['changedValues'], [ScenarioChangedParameterValue]);
            }
        }
        return obj;
    }


}

/**
 * the Scenario Id which is the reference for the comparison
 * @member {String} scenarioId
 */
ScenarioComparisonResult.prototype['scenarioId'] = undefined;

/**
 * the Scenario Id the reference Scenario is compared to
 * @member {String} comparedScenarioId
 */
ScenarioComparisonResult.prototype['comparedScenarioId'] = undefined;

/**
 * the list of changed values for parameters
 * @member {Array.<module:model/ScenarioChangedParameterValue>} changedValues
 */
ScenarioComparisonResult.prototype['changedValues'] = undefined;






export default ScenarioComparisonResult;

