/**
 * Cosmo Tech Platform API
 * Cosmo Tech Platform API
 *
 * The version of the OpenAPI document: 2.3.16
 * Contact: platform@cosmotech.com
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 *
 */

(function(root, factory) {
  if (typeof define === 'function' && define.amd) {
    // AMD.
    define(['expect.js', process.cwd()+'/src/index'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    factory(require('expect.js'), require(process.cwd()+'/src/index'));
  } else {
    // Browser globals (root is window)
    factory(root.expect, root.CosmotechApi);
  }
}(this, function(expect, CosmotechApi) {
  'use strict';

  var instance;

  beforeEach(function() {
    instance = new CosmotechApi.RunTemplateParameter();
  });

  var getProperty = function(object, getter, property) {
    // Use getter method if present; otherwise, get the property directly.
    if (typeof object[getter] === 'function')
      return object[getter]();
    else
      return object[property];
  }

  var setProperty = function(object, setter, property, value) {
    // Use setter method if present; otherwise, set the property directly.
    if (typeof object[setter] === 'function')
      object[setter](value);
    else
      object[property] = value;
  }

  describe('RunTemplateParameter', function() {
    it('should create an instance of RunTemplateParameter', function() {
      // uncomment below and update the code to test RunTemplateParameter
      //var instance = new CosmotechApi.RunTemplateParameter();
      //expect(instance).to.be.a(CosmotechApi.RunTemplateParameter);
    });

    it('should have the property id (base name: "id")', function() {
      // uncomment below and update the code to test the property id
      //var instance = new CosmotechApi.RunTemplateParameter();
      //expect(instance).to.be();
    });

    it('should have the property labels (base name: "labels")', function() {
      // uncomment below and update the code to test the property labels
      //var instance = new CosmotechApi.RunTemplateParameter();
      //expect(instance).to.be();
    });

    it('should have the property varType (base name: "varType")', function() {
      // uncomment below and update the code to test the property varType
      //var instance = new CosmotechApi.RunTemplateParameter();
      //expect(instance).to.be();
    });

    it('should have the property defaultValue (base name: "defaultValue")', function() {
      // uncomment below and update the code to test the property defaultValue
      //var instance = new CosmotechApi.RunTemplateParameter();
      //expect(instance).to.be();
    });

    it('should have the property minValue (base name: "minValue")', function() {
      // uncomment below and update the code to test the property minValue
      //var instance = new CosmotechApi.RunTemplateParameter();
      //expect(instance).to.be();
    });

    it('should have the property maxValue (base name: "maxValue")', function() {
      // uncomment below and update the code to test the property maxValue
      //var instance = new CosmotechApi.RunTemplateParameter();
      //expect(instance).to.be();
    });

    it('should have the property regexValidation (base name: "regexValidation")', function() {
      // uncomment below and update the code to test the property regexValidation
      //var instance = new CosmotechApi.RunTemplateParameter();
      //expect(instance).to.be();
    });

    it('should have the property options (base name: "options")', function() {
      // uncomment below and update the code to test the property options
      //var instance = new CosmotechApi.RunTemplateParameter();
      //expect(instance).to.be();
    });

  });

}));
