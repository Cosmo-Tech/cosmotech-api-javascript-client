/**
 * Cosmo Tech Plaform API
 * Cosmo Tech Platform API
 *
 * The version of the OpenAPI document: 1.0.5-SNAPSHOT
 * Contact: platform@cosmotech.com
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 *
 */

import ApiClient from '../ApiClient';
import ScenarioRunContainer from './ScenarioRunContainer';

/**
 * The ScenarioRunStartContainers model module.
 * @module model/ScenarioRunStartContainers
 * @version 1.0.5-SNAPSHOT
 */
class ScenarioRunStartContainers {
    /**
     * Constructs a new <code>ScenarioRunStartContainers</code>.
     * the parameters to run directly containers
     * @alias module:model/ScenarioRunStartContainers
     * @param csmSimulationId {String} Cosmo Tech Simulation Run Id
     * @param containers {Array.<module:model/ScenarioRunContainer>} the containerslist
     */
    constructor(csmSimulationId, containers) { 
        
        ScenarioRunStartContainers.initialize(this, csmSimulationId, containers);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj, csmSimulationId, containers) { 
        obj['csmSimulationId'] = csmSimulationId;
        obj['containers'] = containers;
    }

    /**
     * Constructs a <code>ScenarioRunStartContainers</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/ScenarioRunStartContainers} obj Optional instance to populate.
     * @return {module:model/ScenarioRunStartContainers} The populated <code>ScenarioRunStartContainers</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new ScenarioRunStartContainers();

            if (data.hasOwnProperty('generateName')) {
                obj['generateName'] = ApiClient.convertToType(data['generateName'], 'String');
            }
            if (data.hasOwnProperty('csmSimulationId')) {
                obj['csmSimulationId'] = ApiClient.convertToType(data['csmSimulationId'], 'String');
            }
            if (data.hasOwnProperty('nodeLabel')) {
                obj['nodeLabel'] = ApiClient.convertToType(data['nodeLabel'], 'String');
            }
            if (data.hasOwnProperty('labels')) {
                obj['labels'] = ApiClient.convertToType(data['labels'], {'String': 'String'});
            }
            if (data.hasOwnProperty('containers')) {
                obj['containers'] = ApiClient.convertToType(data['containers'], [ScenarioRunContainer]);
            }
        }
        return obj;
    }


}

/**
 * the base name for workflow name generation
 * @member {String} generateName
 */
ScenarioRunStartContainers.prototype['generateName'] = undefined;

/**
 * Cosmo Tech Simulation Run Id
 * @member {String} csmSimulationId
 */
ScenarioRunStartContainers.prototype['csmSimulationId'] = undefined;

/**
 * the node label request
 * @member {String} nodeLabel
 */
ScenarioRunStartContainers.prototype['nodeLabel'] = undefined;

/**
 * the workflow labels
 * @member {Object.<String, String>} labels
 */
ScenarioRunStartContainers.prototype['labels'] = undefined;

/**
 * the containerslist
 * @member {Array.<module:model/ScenarioRunContainer>} containers
 */
ScenarioRunStartContainers.prototype['containers'] = undefined;






export default ScenarioRunStartContainers;

