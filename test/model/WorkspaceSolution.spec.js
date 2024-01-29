/**
 * Cosmo Tech Platform API
 * Cosmo Tech Platform API
 *
 * The version of the OpenAPI document: 3.0.1
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
    instance = new CosmotechApi.WorkspaceSolution();
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

  describe('WorkspaceSolution', function() {
    it('should create an instance of WorkspaceSolution', function() {
      // uncomment below and update the code to test WorkspaceSolution
      //var instance = new CosmotechApi.WorkspaceSolution();
      //expect(instance).to.be.a(CosmotechApi.WorkspaceSolution);
    });

    it('should have the property solutionId (base name: "solutionId")', function() {
      // uncomment below and update the code to test the property solutionId
      //var instance = new CosmotechApi.WorkspaceSolution();
      //expect(instance).to.be();
    });

    it('should have the property runTemplateFilter (base name: "runTemplateFilter")', function() {
      // uncomment below and update the code to test the property runTemplateFilter
      //var instance = new CosmotechApi.WorkspaceSolution();
      //expect(instance).to.be();
    });

    it('should have the property defaultRunTemplateDataset (base name: "defaultRunTemplateDataset")', function() {
      // uncomment below and update the code to test the property defaultRunTemplateDataset
      //var instance = new CosmotechApi.WorkspaceSolution();
      //expect(instance).to.be();
    });

  });

}));
