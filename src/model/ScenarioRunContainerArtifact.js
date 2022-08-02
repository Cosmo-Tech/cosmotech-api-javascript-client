/**
 * Cosmo Tech Plaform API
 * Cosmo Tech Platform API
 *
 * The version of the OpenAPI document: 1.0.3-SNAPSHOT
 * Contact: platform@cosmotech.com
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 *
 */

import ApiClient from '../ApiClient';

/**
 * The ScenarioRunContainerArtifact model module.
 * @module model/ScenarioRunContainerArtifact
 * @version 1.0.3-SNAPSHOT
 */
class ScenarioRunContainerArtifact {
    /**
     * Constructs a new <code>ScenarioRunContainerArtifact</code>.
     * a scenario run container artifact
     * @alias module:model/ScenarioRunContainerArtifact
     */
    constructor() { 
        
        ScenarioRunContainerArtifact.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>ScenarioRunContainerArtifact</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/ScenarioRunContainerArtifact} obj Optional instance to populate.
     * @return {module:model/ScenarioRunContainerArtifact} The populated <code>ScenarioRunContainerArtifact</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new ScenarioRunContainerArtifact();

            if (data.hasOwnProperty('name')) {
                obj['name'] = ApiClient.convertToType(data['name'], 'String');
            }
            if (data.hasOwnProperty('path')) {
                obj['path'] = ApiClient.convertToType(data['path'], 'String');
            }
        }
        return obj;
    }


}

/**
 * the artifact name
 * @member {String} name
 */
ScenarioRunContainerArtifact.prototype['name'] = undefined;

/**
 * the artifact path (relative to /var/csmoutput)
 * @member {String} path
 */
ScenarioRunContainerArtifact.prototype['path'] = undefined;






export default ScenarioRunContainerArtifact;

