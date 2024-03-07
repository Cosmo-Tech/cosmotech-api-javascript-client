/**
 * Cosmo Tech Platform API
 * Cosmo Tech Platform API
 *
 * The version of the OpenAPI document: 3.1.3-SNAPSHOT
 * Contact: platform@cosmotech.com
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 *
 */

import ApiClient from '../ApiClient';
import ContainerResourceSizing from './ContainerResourceSizing';
import RunContainerArtifact from './RunContainerArtifact';

/**
 * The RunContainer model module.
 * @module model/RunContainer
 * @version 3.1.3-SNAPSHOT
 */
class RunContainer {
    /**
     * Constructs a new <code>RunContainer</code>.
     * a Run container description
     * @alias module:model/RunContainer
     * @param name {String} the container name
     * @param image {String} the container image URI
     */
    constructor(name, image) { 
        
        RunContainer.initialize(this, name, image);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj, name, image) { 
        obj['name'] = name;
        obj['image'] = image;
    }

    /**
     * Constructs a <code>RunContainer</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/RunContainer} obj Optional instance to populate.
     * @return {module:model/RunContainer} The populated <code>RunContainer</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new RunContainer();

            if (data.hasOwnProperty('id')) {
                obj['id'] = ApiClient.convertToType(data['id'], 'String');
            }
            if (data.hasOwnProperty('name')) {
                obj['name'] = ApiClient.convertToType(data['name'], 'String');
            }
            if (data.hasOwnProperty('labels')) {
                obj['labels'] = ApiClient.convertToType(data['labels'], {'String': 'String'});
            }
            if (data.hasOwnProperty('envVars')) {
                obj['envVars'] = ApiClient.convertToType(data['envVars'], {'String': 'String'});
            }
            if (data.hasOwnProperty('image')) {
                obj['image'] = ApiClient.convertToType(data['image'], 'String');
            }
            if (data.hasOwnProperty('entrypoint')) {
                obj['entrypoint'] = ApiClient.convertToType(data['entrypoint'], 'String');
            }
            if (data.hasOwnProperty('runArgs')) {
                obj['runArgs'] = ApiClient.convertToType(data['runArgs'], ['String']);
            }
            if (data.hasOwnProperty('dependencies')) {
                obj['dependencies'] = ApiClient.convertToType(data['dependencies'], ['String']);
            }
            if (data.hasOwnProperty('solutionContainer')) {
                obj['solutionContainer'] = ApiClient.convertToType(data['solutionContainer'], 'Boolean');
            }
            if (data.hasOwnProperty('nodeLabel')) {
                obj['nodeLabel'] = ApiClient.convertToType(data['nodeLabel'], 'String');
            }
            if (data.hasOwnProperty('runSizing')) {
                obj['runSizing'] = ContainerResourceSizing.constructFromObject(data['runSizing']);
            }
            if (data.hasOwnProperty('artifacts')) {
                obj['artifacts'] = ApiClient.convertToType(data['artifacts'], [RunContainerArtifact]);
            }
        }
        return obj;
    }


}

/**
 * the container Id
 * @member {String} id
 */
RunContainer.prototype['id'] = undefined;

/**
 * the container name
 * @member {String} name
 */
RunContainer.prototype['name'] = undefined;

/**
 * the metadata labels
 * @member {Object.<String, String>} labels
 */
RunContainer.prototype['labels'] = undefined;

/**
 * environment variable map
 * @member {Object.<String, String>} envVars
 */
RunContainer.prototype['envVars'] = undefined;

/**
 * the container image URI
 * @member {String} image
 */
RunContainer.prototype['image'] = undefined;

/**
 * the container entry point
 * @member {String} entrypoint
 */
RunContainer.prototype['entrypoint'] = undefined;

/**
 * the list of run arguments for the container
 * @member {Array.<String>} runArgs
 */
RunContainer.prototype['runArgs'] = undefined;

/**
 * the list of dependencies container name to run this container
 * @member {Array.<String>} dependencies
 */
RunContainer.prototype['dependencies'] = undefined;

/**
 * whether or not this container is a Cosmo Tech solution container
 * @member {Boolean} solutionContainer
 */
RunContainer.prototype['solutionContainer'] = undefined;

/**
 * the node label request
 * @member {String} nodeLabel
 */
RunContainer.prototype['nodeLabel'] = undefined;

/**
 * @member {module:model/ContainerResourceSizing} runSizing
 */
RunContainer.prototype['runSizing'] = undefined;

/**
 * the list of artifacts
 * @member {Array.<module:model/RunContainerArtifact>} artifacts
 */
RunContainer.prototype['artifacts'] = undefined;






export default RunContainer;

