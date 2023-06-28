/**
 * Cosmo Tech Platform API
 * Cosmo Tech Platform API
 *
 * The version of the OpenAPI document: 2.3.13-private
 * Contact: platform@cosmotech.com
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 *
 */

import ApiClient from '../ApiClient';

/**
 * The ScenarioRunSearch model module.
 * @module model/ScenarioRunSearch
 * @version 2.3.13-private
 */
class ScenarioRunSearch {
    /**
     * Constructs a new <code>ScenarioRunSearch</code>.
     * the search options
     * @alias module:model/ScenarioRunSearch
     */
    constructor() { 
        
        ScenarioRunSearch.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>ScenarioRunSearch</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/ScenarioRunSearch} obj Optional instance to populate.
     * @return {module:model/ScenarioRunSearch} The populated <code>ScenarioRunSearch</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new ScenarioRunSearch();

            if (data.hasOwnProperty('solutionId')) {
                obj['solutionId'] = ApiClient.convertToType(data['solutionId'], 'String');
            }
            if (data.hasOwnProperty('runTemplateId')) {
                obj['runTemplateId'] = ApiClient.convertToType(data['runTemplateId'], 'String');
            }
            if (data.hasOwnProperty('workspaceId')) {
                obj['workspaceId'] = ApiClient.convertToType(data['workspaceId'], 'String');
            }
            if (data.hasOwnProperty('scenarioId')) {
                obj['scenarioId'] = ApiClient.convertToType(data['scenarioId'], 'String');
            }
            if (data.hasOwnProperty('state')) {
                obj['state'] = ApiClient.convertToType(data['state'], 'String');
            }
            if (data.hasOwnProperty('workflowId')) {
                obj['workflowId'] = ApiClient.convertToType(data['workflowId'], 'String');
            }
            if (data.hasOwnProperty('workflowName')) {
                obj['workflowName'] = ApiClient.convertToType(data['workflowName'], 'String');
            }
            if (data.hasOwnProperty('ownerId')) {
                obj['ownerId'] = ApiClient.convertToType(data['ownerId'], 'String');
            }
        }
        return obj;
    }


}

/**
 * the Solution Id to search
 * @member {String} solutionId
 */
ScenarioRunSearch.prototype['solutionId'] = undefined;

/**
 * the Solution Analysis Id to search
 * @member {String} runTemplateId
 */
ScenarioRunSearch.prototype['runTemplateId'] = undefined;

/**
 * the Workspace Id to search
 * @member {String} workspaceId
 */
ScenarioRunSearch.prototype['workspaceId'] = undefined;

/**
 * the Scenario Id to search
 * @member {String} scenarioId
 */
ScenarioRunSearch.prototype['scenarioId'] = undefined;

/**
 * the state to search
 * @member {module:model/ScenarioRunSearch.StateEnum} state
 */
ScenarioRunSearch.prototype['state'] = undefined;

/**
 * the Cosmo Tech compute cluster Argo Workflow Id to search
 * @member {String} workflowId
 */
ScenarioRunSearch.prototype['workflowId'] = undefined;

/**
 * the Cosmo Tech compute cluster Argo Workflow Name
 * @member {String} workflowName
 */
ScenarioRunSearch.prototype['workflowName'] = undefined;

/**
 * the owner Id to search
 * @member {String} ownerId
 */
ScenarioRunSearch.prototype['ownerId'] = undefined;





/**
 * Allowed values for the <code>state</code> property.
 * @enum {String}
 * @readonly
 */
ScenarioRunSearch['StateEnum'] = {

    /**
     * value: "FetchingDatasets"
     * @const
     */
    "FetchingDatasets": "FetchingDatasets",

    /**
     * value: "FetchingScenarioParameters"
     * @const
     */
    "FetchingScenarioParameters": "FetchingScenarioParameters",

    /**
     * value: "ApplyingScenarioParameters"
     * @const
     */
    "ApplyingScenarioParameters": "ApplyingScenarioParameters",

    /**
     * value: "ValidatingScenarioData"
     * @const
     */
    "ValidatingScenarioData": "ValidatingScenarioData",

    /**
     * value: "SendingScenarioDataToDataWarehouse"
     * @const
     */
    "SendingScenarioDataToDataWarehouse": "SendingScenarioDataToDataWarehouse",

    /**
     * value: "PreRun"
     * @const
     */
    "PreRun": "PreRun",

    /**
     * value: "Running"
     * @const
     */
    "Running": "Running",

    /**
     * value: "PostRun"
     * @const
     */
    "PostRun": "PostRun",

    /**
     * value: "Success"
     * @const
     */
    "Success": "Success",

    /**
     * value: "Failed"
     * @const
     */
    "Failed": "Failed"
};



export default ScenarioRunSearch;

