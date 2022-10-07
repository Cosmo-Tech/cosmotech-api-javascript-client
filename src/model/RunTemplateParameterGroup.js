/**
 * Cosmo Tech Plaform API
 * Cosmo Tech Platform API
 *
 * The version of the OpenAPI document: 2.0.3-dev
 * Contact: platform@cosmotech.com
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 *
 */

import ApiClient from '../ApiClient';

/**
 * The RunTemplateParameterGroup model module.
 * @module model/RunTemplateParameterGroup
 * @version 2.0.3-dev
 */
class RunTemplateParameterGroup {
    /**
     * Constructs a new <code>RunTemplateParameterGroup</code>.
     * a Parameter Group for a Run Template
     * @alias module:model/RunTemplateParameterGroup
     * @param id {String} the Parameter Group id
     */
    constructor(id) { 
        
        RunTemplateParameterGroup.initialize(this, id);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj, id) { 
        obj['id'] = id;
    }

    /**
     * Constructs a <code>RunTemplateParameterGroup</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/RunTemplateParameterGroup} obj Optional instance to populate.
     * @return {module:model/RunTemplateParameterGroup} The populated <code>RunTemplateParameterGroup</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new RunTemplateParameterGroup();

            if (data.hasOwnProperty('id')) {
                obj['id'] = ApiClient.convertToType(data['id'], 'String');
            }
            if (data.hasOwnProperty('labels')) {
                obj['labels'] = ApiClient.convertToType(data['labels'], {'String': 'String'});
            }
            if (data.hasOwnProperty('isTable')) {
                obj['isTable'] = ApiClient.convertToType(data['isTable'], 'Boolean');
            }
            if (data.hasOwnProperty('options')) {
                obj['options'] = ApiClient.convertToType(data['options'], {'String': Object});
            }
            if (data.hasOwnProperty('parentId')) {
                obj['parentId'] = ApiClient.convertToType(data['parentId'], 'String');
            }
            if (data.hasOwnProperty('parameters')) {
                obj['parameters'] = ApiClient.convertToType(data['parameters'], ['String']);
            }
        }
        return obj;
    }


}

/**
 * the Parameter Group id
 * @member {String} id
 */
RunTemplateParameterGroup.prototype['id'] = undefined;

/**
 * a translated label with key as ISO 639-1 code
 * @member {Object.<String, String>} labels
 */
RunTemplateParameterGroup.prototype['labels'] = undefined;

/**
 * does the group define a table
 * @member {Boolean} isTable
 */
RunTemplateParameterGroup.prototype['isTable'] = undefined;

/**
 * freeform options
 * @member {Object.<String, Object>} options
 */
RunTemplateParameterGroup.prototype['options'] = undefined;

/**
 * the Run Template Group parent Id
 * @member {String} parentId
 */
RunTemplateParameterGroup.prototype['parentId'] = undefined;

/**
 * an ordered list of Run Template Parameters
 * @member {Array.<String>} parameters
 */
RunTemplateParameterGroup.prototype['parameters'] = undefined;






export default RunTemplateParameterGroup;

