/**
 * Cosmo Tech Platform API
 * Cosmo Tech Platform API
 *
 * The version of the OpenAPI document: 3.2.6
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
    instance = new CosmotechApi.RunnerRunTemplateParameterValue();
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

  describe('RunnerRunTemplateParameterValue', function() {
    it('should create an instance of RunnerRunTemplateParameterValue', function() {
      // uncomment below and update the code to test RunnerRunTemplateParameterValue
      //var instance = new CosmotechApi.RunnerRunTemplateParameterValue();
      //expect(instance).to.be.a(CosmotechApi.RunnerRunTemplateParameterValue);
    });

    it('should have the property parameterId (base name: "parameterId")', function() {
      // uncomment below and update the code to test the property parameterId
      //var instance = new CosmotechApi.RunnerRunTemplateParameterValue();
      //expect(instance).to.be();
    });

    it('should have the property varType (base name: "varType")', function() {
      // uncomment below and update the code to test the property varType
      //var instance = new CosmotechApi.RunnerRunTemplateParameterValue();
      //expect(instance).to.be();
    });

    it('should have the property value (base name: "value")', function() {
      // uncomment below and update the code to test the property value
      //var instance = new CosmotechApi.RunnerRunTemplateParameterValue();
      //expect(instance).to.be();
    });

    it('should have the property isInherited (base name: "isInherited")', function() {
      // uncomment below and update the code to test the property isInherited
      //var instance = new CosmotechApi.RunnerRunTemplateParameterValue();
      //expect(instance).to.be();
    });

  });

}));
