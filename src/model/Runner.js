/**
 * Cosmo Tech Platform API
 * Cosmo Tech Platform API
 *
 * The version of the OpenAPI document: 3.1.3
 * Contact: platform@cosmotech.com
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 *
 */

import ApiClient from '../ApiClient';
import RunnerJobState from './RunnerJobState';
import RunnerLastRun from './RunnerLastRun';
import RunnerResourceSizing from './RunnerResourceSizing';
import RunnerRunTemplateParameterValue from './RunnerRunTemplateParameterValue';
import RunnerSecurity from './RunnerSecurity';
import RunnerValidationStatus from './RunnerValidationStatus';

/**
 * The Runner model module.
 * @module model/Runner
 * @version 3.1.3
 */
class Runner {
    /**
     * Constructs a new <code>Runner</code>.
     * a Runner with base information
     * @alias module:model/Runner
     */
    constructor() { 
        
        Runner.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>Runner</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/Runner} obj Optional instance to populate.
     * @return {module:model/Runner} The populated <code>Runner</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new Runner();

            if (data.hasOwnProperty('id')) {
                obj['id'] = ApiClient.convertToType(data['id'], 'String');
            }
            if (data.hasOwnProperty('name')) {
                obj['name'] = ApiClient.convertToType(data['name'], 'String');
            }
            if (data.hasOwnProperty('description')) {
                obj['description'] = ApiClient.convertToType(data['description'], 'String');
            }
            if (data.hasOwnProperty('tags')) {
                obj['tags'] = ApiClient.convertToType(data['tags'], ['String']);
            }
            if (data.hasOwnProperty('parentId')) {
                obj['parentId'] = ApiClient.convertToType(data['parentId'], 'String');
            }
            if (data.hasOwnProperty('ownerId')) {
                obj['ownerId'] = ApiClient.convertToType(data['ownerId'], 'String');
            }
            if (data.hasOwnProperty('rootId')) {
                obj['rootId'] = ApiClient.convertToType(data['rootId'], 'String');
            }
            if (data.hasOwnProperty('solutionId')) {
                obj['solutionId'] = ApiClient.convertToType(data['solutionId'], 'String');
            }
            if (data.hasOwnProperty('runTemplateId')) {
                obj['runTemplateId'] = ApiClient.convertToType(data['runTemplateId'], 'String');
            }
            if (data.hasOwnProperty('organizationId')) {
                obj['organizationId'] = ApiClient.convertToType(data['organizationId'], 'String');
            }
            if (data.hasOwnProperty('workspaceId')) {
                obj['workspaceId'] = ApiClient.convertToType(data['workspaceId'], 'String');
            }
            if (data.hasOwnProperty('state')) {
                obj['state'] = RunnerJobState.constructFromObject(data['state']);
            }
            if (data.hasOwnProperty('creationDate')) {
                obj['creationDate'] = ApiClient.convertToType(data['creationDate'], 'Number');
            }
            if (data.hasOwnProperty('lastUpdate')) {
                obj['lastUpdate'] = ApiClient.convertToType(data['lastUpdate'], 'Number');
            }
            if (data.hasOwnProperty('ownerName')) {
                obj['ownerName'] = ApiClient.convertToType(data['ownerName'], 'String');
            }
            if (data.hasOwnProperty('solutionName')) {
                obj['solutionName'] = ApiClient.convertToType(data['solutionName'], 'String');
            }
            if (data.hasOwnProperty('runTemplateName')) {
                obj['runTemplateName'] = ApiClient.convertToType(data['runTemplateName'], 'String');
            }
            if (data.hasOwnProperty('datasetList')) {
                obj['datasetList'] = ApiClient.convertToType(data['datasetList'], ['String']);
            }
            if (data.hasOwnProperty('runSizing')) {
                obj['runSizing'] = RunnerResourceSizing.constructFromObject(data['runSizing']);
            }
            if (data.hasOwnProperty('parametersValues')) {
                obj['parametersValues'] = ApiClient.convertToType(data['parametersValues'], [RunnerRunTemplateParameterValue]);
            }
            if (data.hasOwnProperty('lastRun')) {
                obj['lastRun'] = ApiClient.convertToType(data['lastRun'], RunnerLastRun);
            }
            if (data.hasOwnProperty('parentLastRun')) {
                obj['parentLastRun'] = ApiClient.convertToType(data['parentLastRun'], RunnerLastRun);
            }
            if (data.hasOwnProperty('rootLastRun')) {
                obj['rootLastRun'] = ApiClient.convertToType(data['rootLastRun'], RunnerLastRun);
            }
            if (data.hasOwnProperty('validationStatus')) {
                obj['validationStatus'] = ApiClient.convertToType(data['validationStatus'], RunnerValidationStatus);
            }
            if (data.hasOwnProperty('security')) {
                obj['security'] = ApiClient.convertToType(data['security'], RunnerSecurity);
            }
        }
        return obj;
    }


}

/**
 * the Runner unique identifier
 * @member {String} id
 */
Runner.prototype['id'] = undefined;

/**
 * the Runner name
 * @member {String} name
 */
Runner.prototype['name'] = undefined;

/**
 * the Runner description
 * @member {String} description
 */
Runner.prototype['description'] = undefined;

/**
 * the list of tags
 * @member {Array.<String>} tags
 */
Runner.prototype['tags'] = undefined;

/**
 * the Runner parent id
 * @member {String} parentId
 */
Runner.prototype['parentId'] = undefined;

/**
 * the user id which own this Runner
 * @member {String} ownerId
 */
Runner.prototype['ownerId'] = undefined;

/**
 * the runner root id
 * @member {String} rootId
 */
Runner.prototype['rootId'] = undefined;

/**
 * the Solution Id associated with this Runner
 * @member {String} solutionId
 */
Runner.prototype['solutionId'] = undefined;

/**
 * the Solution Run Template Id associated with this Runner
 * @member {String} runTemplateId
 */
Runner.prototype['runTemplateId'] = undefined;

/**
 * the associated Organization Id
 * @member {String} organizationId
 */
Runner.prototype['organizationId'] = undefined;

/**
 * the associated Workspace Id
 * @member {String} workspaceId
 */
Runner.prototype['workspaceId'] = undefined;

/**
 * @member {module:model/RunnerJobState} state
 */
Runner.prototype['state'] = undefined;

/**
 * the Runner creation date
 * @member {Number} creationDate
 */
Runner.prototype['creationDate'] = undefined;

/**
 * the last time a Runner was updated
 * @member {Number} lastUpdate
 */
Runner.prototype['lastUpdate'] = undefined;

/**
 * the name of the owner
 * @member {String} ownerName
 */
Runner.prototype['ownerName'] = undefined;

/**
 * the Solution name
 * @member {String} solutionName
 */
Runner.prototype['solutionName'] = undefined;

/**
 * the Solution Run Template name associated with this Runner
 * @member {String} runTemplateName
 */
Runner.prototype['runTemplateName'] = undefined;

/**
 * the list of Dataset Id associated to this Runner Run Template
 * @member {Array.<String>} datasetList
 */
Runner.prototype['datasetList'] = undefined;

/**
 * @member {module:model/RunnerResourceSizing} runSizing
 */
Runner.prototype['runSizing'] = undefined;

/**
 * the list of Solution Run Template parameters values
 * @member {Array.<module:model/RunnerRunTemplateParameterValue>} parametersValues
 */
Runner.prototype['parametersValues'] = undefined;

/**
 * @member {module:model/RunnerLastRun} lastRun
 */
Runner.prototype['lastRun'] = undefined;

/**
 * @member {module:model/RunnerLastRun} parentLastRun
 */
Runner.prototype['parentLastRun'] = undefined;

/**
 * @member {module:model/RunnerLastRun} rootLastRun
 */
Runner.prototype['rootLastRun'] = undefined;

/**
 * @member {module:model/RunnerValidationStatus} validationStatus
 */
Runner.prototype['validationStatus'] = undefined;

/**
 * @member {module:model/RunnerSecurity} security
 */
Runner.prototype['security'] = undefined;






export default Runner;

