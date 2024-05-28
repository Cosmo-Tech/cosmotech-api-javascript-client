/**
 * Cosmo Tech Platform API
 * Cosmo Tech Platform API
 *
 * The version of the OpenAPI document: 3.1.6
 * Contact: platform@cosmotech.com
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 *
 */

import ApiClient from '../ApiClient';
import RunContainer from './RunContainer';

/**
 * The RunStartContainers model module.
 * @module model/RunStartContainers
 * @version 3.1.6
 */
class RunStartContainers {
    /**
     * Constructs a new <code>RunStartContainers</code>.
     * the parameters to run directly containers
     * @alias module:model/RunStartContainers
     * @param csmSimulationId {String} Cosmo Tech Simulation Run Id
     * @param containers {Array.<module:model/RunContainer>} the containerslist
     */
    constructor(csmSimulationId, containers) { 
        
        RunStartContainers.initialize(this, csmSimulationId, containers);
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
     * Constructs a <code>RunStartContainers</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/RunStartContainers} obj Optional instance to populate.
     * @return {module:model/RunStartContainers} The populated <code>RunStartContainers</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new RunStartContainers();

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
                obj['containers'] = ApiClient.convertToType(data['containers'], [RunContainer]);
            }
        }
        return obj;
    }


}

/**
 * the base name for workflow name generation
 * @member {String} generateName
 */
RunStartContainers.prototype['generateName'] = undefined;

/**
 * Cosmo Tech Simulation Run Id
 * @member {String} csmSimulationId
 */
RunStartContainers.prototype['csmSimulationId'] = undefined;

/**
 * the node label request
 * @member {String} nodeLabel
 */
RunStartContainers.prototype['nodeLabel'] = undefined;

/**
 * the workflow labels
 * @member {Object.<String, String>} labels
 */
RunStartContainers.prototype['labels'] = undefined;

/**
 * the containerslist
 * @member {Array.<module:model/RunContainer>} containers
 */
RunStartContainers.prototype['containers'] = undefined;






export default RunStartContainers;

