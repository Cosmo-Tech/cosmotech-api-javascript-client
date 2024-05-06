/**
 * Cosmo Tech Platform API
 * Cosmo Tech Platform API
 *
 * The version of the OpenAPI document: 3.1.5
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
    instance = new CosmotechApi.ScenarioRunStartContainers();
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

  describe('ScenarioRunStartContainers', function() {
    it('should create an instance of ScenarioRunStartContainers', function() {
      // uncomment below and update the code to test ScenarioRunStartContainers
      //var instance = new CosmotechApi.ScenarioRunStartContainers();
      //expect(instance).to.be.a(CosmotechApi.ScenarioRunStartContainers);
    });

    it('should have the property generateName (base name: "generateName")', function() {
      // uncomment below and update the code to test the property generateName
      //var instance = new CosmotechApi.ScenarioRunStartContainers();
      //expect(instance).to.be();
    });

    it('should have the property csmSimulationId (base name: "csmSimulationId")', function() {
      // uncomment below and update the code to test the property csmSimulationId
      //var instance = new CosmotechApi.ScenarioRunStartContainers();
      //expect(instance).to.be();
    });

    it('should have the property nodeLabel (base name: "nodeLabel")', function() {
      // uncomment below and update the code to test the property nodeLabel
      //var instance = new CosmotechApi.ScenarioRunStartContainers();
      //expect(instance).to.be();
    });

    it('should have the property labels (base name: "labels")', function() {
      // uncomment below and update the code to test the property labels
      //var instance = new CosmotechApi.ScenarioRunStartContainers();
      //expect(instance).to.be();
    });

    it('should have the property containers (base name: "containers")', function() {
      // uncomment below and update the code to test the property containers
      //var instance = new CosmotechApi.ScenarioRunStartContainers();
      //expect(instance).to.be();
    });

  });

}));
