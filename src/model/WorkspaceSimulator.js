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

/**
 * The WorkspaceSimulator model module.
 * @module model/WorkspaceSimulator
 * @version 0.0.1-SNAPSHOT
 */
class WorkspaceSimulator {
    /**
     * Constructs a new <code>WorkspaceSimulator</code>.
     * the Workspace Simulator configuration
     * @alias module:model/WorkspaceSimulator
     * @param simulatorId {String} the Simulator Id attached to this workspace
     */
    constructor(simulatorId) { 
        
        WorkspaceSimulator.initialize(this, simulatorId);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj, simulatorId) { 
        obj['simulatorId'] = simulatorId;
    }

    /**
     * Constructs a <code>WorkspaceSimulator</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/WorkspaceSimulator} obj Optional instance to populate.
     * @return {module:model/WorkspaceSimulator} The populated <code>WorkspaceSimulator</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new WorkspaceSimulator();

            if (data.hasOwnProperty('simulatorId')) {
                obj['simulatorId'] = ApiClient.convertToType(data['simulatorId'], 'String');
            }
            if (data.hasOwnProperty('simulatorAnalysisFilter')) {
                obj['simulatorAnalysisFilter'] = ApiClient.convertToType(data['simulatorAnalysisFilter'], ['String']);
            }
            if (data.hasOwnProperty('defaultAnalysisDataset')) {
                obj['defaultAnalysisDataset'] = ApiClient.convertToType(data['defaultAnalysisDataset'], {'String': Object});
            }
        }
        return obj;
    }


}

/**
 * the Simulator Id attached to this workspace
 * @member {String} simulatorId
 */
WorkspaceSimulator.prototype['simulatorId'] = undefined;

/**
 * the list of Simulator Analysis Id to filter
 * @member {Array.<String>} simulatorAnalysisFilter
 */
WorkspaceSimulator.prototype['simulatorAnalysisFilter'] = undefined;

/**
 * a map of AnalysisId/DatasetId to set a default dataset for an analysis
 * @member {Object.<String, Object>} defaultAnalysisDataset
 */
WorkspaceSimulator.prototype['defaultAnalysisDataset'] = undefined;






export default WorkspaceSimulator;

