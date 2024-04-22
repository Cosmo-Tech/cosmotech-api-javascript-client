/**
 * Cosmo Tech Platform API
 * Cosmo Tech Platform API
 *
 * The version of the OpenAPI document: 3.1.4
 * Contact: platform@cosmotech.com
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 *
 */

import ApiClient from '../ApiClient';
import RunTemplate from './RunTemplate';
import RunTemplateParameter from './RunTemplateParameter';
import RunTemplateParameterGroup from './RunTemplateParameterGroup';
import SolutionSecurity from './SolutionSecurity';

/**
 * The Solution model module.
 * @module model/Solution
 * @version 3.1.4
 */
class Solution {
    /**
     * Constructs a new <code>Solution</code>.
     * a version of a Solution
     * @alias module:model/Solution
     */
    constructor() { 
        
        Solution.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>Solution</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/Solution} obj Optional instance to populate.
     * @return {module:model/Solution} The populated <code>Solution</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new Solution();

            if (data.hasOwnProperty('id')) {
                obj['id'] = ApiClient.convertToType(data['id'], 'String');
            }
            if (data.hasOwnProperty('organizationId')) {
                obj['organizationId'] = ApiClient.convertToType(data['organizationId'], 'String');
            }
            if (data.hasOwnProperty('key')) {
                obj['key'] = ApiClient.convertToType(data['key'], 'String');
            }
            if (data.hasOwnProperty('name')) {
                obj['name'] = ApiClient.convertToType(data['name'], 'String');
            }
            if (data.hasOwnProperty('description')) {
                obj['description'] = ApiClient.convertToType(data['description'], 'String');
            }
            if (data.hasOwnProperty('repository')) {
                obj['repository'] = ApiClient.convertToType(data['repository'], 'String');
            }
            if (data.hasOwnProperty('alwaysPull')) {
                obj['alwaysPull'] = ApiClient.convertToType(data['alwaysPull'], 'Boolean');
            }
            if (data.hasOwnProperty('csmSimulator')) {
                obj['csmSimulator'] = ApiClient.convertToType(data['csmSimulator'], 'String');
            }
            if (data.hasOwnProperty('version')) {
                obj['version'] = ApiClient.convertToType(data['version'], 'String');
            }
            if (data.hasOwnProperty('ownerId')) {
                obj['ownerId'] = ApiClient.convertToType(data['ownerId'], 'String');
            }
            if (data.hasOwnProperty('sdkVersion')) {
                obj['sdkVersion'] = ApiClient.convertToType(data['sdkVersion'], 'String');
            }
            if (data.hasOwnProperty('url')) {
                obj['url'] = ApiClient.convertToType(data['url'], 'String');
            }
            if (data.hasOwnProperty('tags')) {
                obj['tags'] = ApiClient.convertToType(data['tags'], ['String']);
            }
            if (data.hasOwnProperty('parameters')) {
                obj['parameters'] = ApiClient.convertToType(data['parameters'], [RunTemplateParameter]);
            }
            if (data.hasOwnProperty('parameterGroups')) {
                obj['parameterGroups'] = ApiClient.convertToType(data['parameterGroups'], [RunTemplateParameterGroup]);
            }
            if (data.hasOwnProperty('runTemplates')) {
                obj['runTemplates'] = ApiClient.convertToType(data['runTemplates'], [RunTemplate]);
            }
            if (data.hasOwnProperty('security')) {
                obj['security'] = ApiClient.convertToType(data['security'], SolutionSecurity);
            }
        }
        return obj;
    }


}

/**
 * the Solution version unique identifier
 * @member {String} id
 */
Solution.prototype['id'] = undefined;

/**
 * the Organization unique identifier
 * @member {String} organizationId
 */
Solution.prototype['organizationId'] = undefined;

/**
 * the Solution key which group Solution versions
 * @member {String} key
 */
Solution.prototype['key'] = undefined;

/**
 * the Solution name
 * @member {String} name
 */
Solution.prototype['name'] = undefined;

/**
 * the Solution description
 * @member {String} description
 */
Solution.prototype['description'] = undefined;

/**
 * the registry repository containing the image
 * @member {String} repository
 */
Solution.prototype['repository'] = undefined;

/**
 * set to true if the runtemplate wants to always pull the image
 * @member {Boolean} alwaysPull
 * @default false
 */
Solution.prototype['alwaysPull'] = false;

/**
 * the main Cosmo Tech simulator name used in standard Run Template
 * @member {String} csmSimulator
 */
Solution.prototype['csmSimulator'] = undefined;

/**
 * the Solution version MAJOR.MINOR.PATCH. Must be aligned with an existing repository tag
 * @member {String} version
 */
Solution.prototype['version'] = undefined;

/**
 * the User id which own this Solution
 * @member {String} ownerId
 */
Solution.prototype['ownerId'] = undefined;

/**
 * the MAJOR.MINOR version used to build this solution
 * @member {String} sdkVersion
 */
Solution.prototype['sdkVersion'] = undefined;

/**
 * an optional URL link to solution page
 * @member {String} url
 */
Solution.prototype['url'] = undefined;

/**
 * the list of tags
 * @member {Array.<String>} tags
 */
Solution.prototype['tags'] = undefined;

/**
 * the list of Run Template Parameters
 * @member {Array.<module:model/RunTemplateParameter>} parameters
 */
Solution.prototype['parameters'] = undefined;

/**
 * the list of parameters groups for the Run Templates
 * @member {Array.<module:model/RunTemplateParameterGroup>} parameterGroups
 */
Solution.prototype['parameterGroups'] = undefined;

/**
 * list of Run Template
 * @member {Array.<module:model/RunTemplate>} runTemplates
 */
Solution.prototype['runTemplates'] = undefined;

/**
 * @member {module:model/SolutionSecurity} security
 */
Solution.prototype['security'] = undefined;






export default Solution;

