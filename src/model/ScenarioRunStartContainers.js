/**
 * Cosmo Tech Platform API
 * Cosmo Tech Platform API
 *
 * The version of the OpenAPI document: 3.2.8
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
 * @version 3.2.8
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

    /**
     * Validates the JSON data with respect to <code>ScenarioRunStartContainers</code>.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @return {boolean} to indicate whether the JSON data is valid with respect to <code>ScenarioRunStartContainers</code>.
     */
    static validateJSON(data) {
        // check to make sure all required properties are present in the JSON string
        for (const property of ScenarioRunStartContainers.RequiredProperties) {
            if (!data.hasOwnProperty(property)) {
                throw new Error("The required field `" + property + "` is not found in the JSON data: " + JSON.stringify(data));
            }
        }
        // ensure the json data is a string
        if (data['generateName'] && !(typeof data['generateName'] === 'string' || data['generateName'] instanceof String)) {
            throw new Error("Expected the field `generateName` to be a primitive type in the JSON string but got " + data['generateName']);
        }
        // ensure the json data is a string
        if (data['csmSimulationId'] && !(typeof data['csmSimulationId'] === 'string' || data['csmSimulationId'] instanceof String)) {
            throw new Error("Expected the field `csmSimulationId` to be a primitive type in the JSON string but got " + data['csmSimulationId']);
        }
        // ensure the json data is a string
        if (data['nodeLabel'] && !(typeof data['nodeLabel'] === 'string' || data['nodeLabel'] instanceof String)) {
            throw new Error("Expected the field `nodeLabel` to be a primitive type in the JSON string but got " + data['nodeLabel']);
        }
        if (data['containers']) { // data not null
            // ensure the json data is an array
            if (!Array.isArray(data['containers'])) {
                throw new Error("Expected the field `containers` to be an array in the JSON data but got " + data['containers']);
            }
            // validate the optional field `containers` (array)
            for (const item of data['containers']) {
                ScenarioRunContainer.validateJSON(item);
            };
        }

        return true;
    }


}

ScenarioRunStartContainers.RequiredProperties = ["csmSimulationId", "containers"];

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

