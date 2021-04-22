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
    instance = new CosmotechApi.ScenarioRunContainerLog();
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

  describe('ScenarioRunContainerLog', function() {
    it('should create an instance of ScenarioRunContainerLog', function() {
      // uncomment below and update the code to test ScenarioRunContainerLog
      //var instane = new CosmotechApi.ScenarioRunContainerLog();
      //expect(instance).to.be.a(CosmotechApi.ScenarioRunContainerLog);
    });

    it('should have the property timeGenerated (base name: "timeGenerated")', function() {
      // uncomment below and update the code to test the property timeGenerated
      //var instance = new CosmotechApi.ScenarioRunContainerLog();
      //expect(instance).to.be();
    });

    it('should have the property entrySource (base name: "entrySource")', function() {
      // uncomment below and update the code to test the property entrySource
      //var instance = new CosmotechApi.ScenarioRunContainerLog();
      //expect(instance).to.be();
    });

    it('should have the property logEntry (base name: "logEntry")', function() {
      // uncomment below and update the code to test the property logEntry
      //var instance = new CosmotechApi.ScenarioRunContainerLog();
      //expect(instance).to.be();
    });

  });

}));