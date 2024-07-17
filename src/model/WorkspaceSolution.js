/**
 * Cosmo Tech Platform API
 * Cosmo Tech Platform API
 *
 * The version of the OpenAPI document: 4.0.3-SNAPSHOT
 * Contact: platform@cosmotech.com
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 *
 */

import ApiClient from '../ApiClient';

/**
 * The WorkspaceSolution model module.
 * @module model/WorkspaceSolution
 * @version 4.0.3-SNAPSHOT
 */
class WorkspaceSolution {
    /**
     * Constructs a new <code>WorkspaceSolution</code>.
     * the Workspace Solution configuration
     * @alias module:model/WorkspaceSolution
     */
    constructor() { 
        
        WorkspaceSolution.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>WorkspaceSolution</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/WorkspaceSolution} obj Optional instance to populate.
     * @return {module:model/WorkspaceSolution} The populated <code>WorkspaceSolution</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new WorkspaceSolution();

            if (data.hasOwnProperty('solutionId')) {
                obj['solutionId'] = ApiClient.convertToType(data['solutionId'], 'String');
            }
            if (data.hasOwnProperty('runTemplateFilter')) {
                obj['runTemplateFilter'] = ApiClient.convertToType(data['runTemplateFilter'], ['String']);
            }
            if (data.hasOwnProperty('defaultRunTemplateDataset')) {
                obj['defaultRunTemplateDataset'] = ApiClient.convertToType(data['defaultRunTemplateDataset'], {'String': Object});
            }
        }
        return obj;
    }

    /**
     * Validates the JSON data with respect to <code>WorkspaceSolution</code>.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @return {boolean} to indicate whether the JSON data is valid with respect to <code>WorkspaceSolution</code>.
     */
    static validateJSON(data) {
        // ensure the json data is a string
        if (data['solutionId'] && !(typeof data['solutionId'] === 'string' || data['solutionId'] instanceof String)) {
            throw new Error("Expected the field `solutionId` to be a primitive type in the JSON string but got " + data['solutionId']);
        }
        // ensure the json data is an array
        if (!Array.isArray(data['runTemplateFilter'])) {
            throw new Error("Expected the field `runTemplateFilter` to be an array in the JSON data but got " + data['runTemplateFilter']);
        }

        return true;
    }


}



/**
 * the Solution Id attached to this workspace
 * @member {String} solutionId
 */
WorkspaceSolution.prototype['solutionId'] = undefined;

/**
 * the list of Solution Run Template Id to filter
 * @member {Array.<String>} runTemplateFilter
 */
WorkspaceSolution.prototype['runTemplateFilter'] = undefined;

/**
 * a map of RunTemplateId/DatasetId to set a default dataset for a Run Template
 * @member {Object.<String, Object>} defaultRunTemplateDataset
 */
WorkspaceSolution.prototype['defaultRunTemplateDataset'] = undefined;






export default WorkspaceSolution;

