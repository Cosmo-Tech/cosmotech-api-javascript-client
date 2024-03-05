/**
 * Cosmo Tech Platform API
 * Cosmo Tech Platform API
 *
 * The version of the OpenAPI document: 3.1.2-dev
 * Contact: platform@cosmotech.com
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 *
 */

import ApiClient from '../ApiClient';

/**
 * The RunContainerArtifact model module.
 * @module model/RunContainerArtifact
 * @version 3.1.2-dev
 */
class RunContainerArtifact {
    /**
     * Constructs a new <code>RunContainerArtifact</code>.
     * a runner run container artifact
     * @alias module:model/RunContainerArtifact
     */
    constructor() { 
        
        RunContainerArtifact.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>RunContainerArtifact</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/RunContainerArtifact} obj Optional instance to populate.
     * @return {module:model/RunContainerArtifact} The populated <code>RunContainerArtifact</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new RunContainerArtifact();

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
RunContainerArtifact.prototype['name'] = undefined;

/**
 * the artifact path (relative to /var/csmoutput)
 * @member {String} path
 */
RunContainerArtifact.prototype['path'] = undefined;






export default RunContainerArtifact;

