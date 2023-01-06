/**
 * Cosmo Tech Plaform API
 * Cosmo Tech Platform API
 *
 * The version of the OpenAPI document: 2.1.12-dev
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
    instance = new CosmotechApi.ScenarioComparisonResult();
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

  describe('ScenarioComparisonResult', function() {
    it('should create an instance of ScenarioComparisonResult', function() {
      // uncomment below and update the code to test ScenarioComparisonResult
      //var instance = new CosmotechApi.ScenarioComparisonResult();
      //expect(instance).to.be.a(CosmotechApi.ScenarioComparisonResult);
    });

    it('should have the property scenarioId (base name: "scenarioId")', function() {
      // uncomment below and update the code to test the property scenarioId
      //var instance = new CosmotechApi.ScenarioComparisonResult();
      //expect(instance).to.be();
    });

    it('should have the property comparedScenarioId (base name: "comparedScenarioId")', function() {
      // uncomment below and update the code to test the property comparedScenarioId
      //var instance = new CosmotechApi.ScenarioComparisonResult();
      //expect(instance).to.be();
    });

    it('should have the property changedValues (base name: "changedValues")', function() {
      // uncomment below and update the code to test the property changedValues
      //var instance = new CosmotechApi.ScenarioComparisonResult();
      //expect(instance).to.be();
    });

  });

}));
