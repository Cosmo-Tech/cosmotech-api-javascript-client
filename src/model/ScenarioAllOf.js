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

            if (data.hasOwnProperty('simulatorId')) {
                obj['simulatorId'] = ApiClient.convertToType(data['simulatorId'], 'String');
            }
            if (data.hasOwnProperty('analysis')) {
                obj['analysis'] = ApiClient.convertToType(data['analysis'], [ScenarioAnalysis]);
            }
        }
        return obj;
    }


}

/**
 * the Simulator Id associated with this Scenario
 * @member {String} simulatorId
 */
ScenarioAllOf.prototype['simulatorId'] = undefined;

/**
 * the configuration for Analysis
 * @member {Array.<module:model/ScenarioAnalysis>} analysis
 */
ScenarioAllOf.prototype['analysis'] = undefined;






export default ScenarioAllOf;

