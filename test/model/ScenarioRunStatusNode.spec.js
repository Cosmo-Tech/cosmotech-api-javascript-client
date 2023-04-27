/**
 * Cosmo Tech Platform API
 * Cosmo Tech Platform API
 *
 * The version of the OpenAPI document: 2.3.8-SNAPSHOT
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
    instance = new CosmotechApi.ScenarioRunStatusNode();
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

  describe('ScenarioRunStatusNode', function() {
    it('should create an instance of ScenarioRunStatusNode', function() {
      // uncomment below and update the code to test ScenarioRunStatusNode
      //var instance = new CosmotechApi.ScenarioRunStatusNode();
      //expect(instance).to.be.a(CosmotechApi.ScenarioRunStatusNode);
    });

    it('should have the property id (base name: "id")', function() {
      // uncomment below and update the code to test the property id
      //var instance = new CosmotechApi.ScenarioRunStatusNode();
      //expect(instance).to.be();
    });

    it('should have the property name (base name: "name")', function() {
      // uncomment below and update the code to test the property name
      //var instance = new CosmotechApi.ScenarioRunStatusNode();
      //expect(instance).to.be();
    });

    it('should have the property containerName (base name: "containerName")', function() {
      // uncomment below and update the code to test the property containerName
      //var instance = new CosmotechApi.ScenarioRunStatusNode();
      //expect(instance).to.be();
    });

    it('should have the property estimatedDuration (base name: "estimatedDuration")', function() {
      // uncomment below and update the code to test the property estimatedDuration
      //var instance = new CosmotechApi.ScenarioRunStatusNode();
      //expect(instance).to.be();
    });

    it('should have the property hostNodeName (base name: "hostNodeName")', function() {
      // uncomment below and update the code to test the property hostNodeName
      //var instance = new CosmotechApi.ScenarioRunStatusNode();
      //expect(instance).to.be();
    });

    it('should have the property message (base name: "message")', function() {
      // uncomment below and update the code to test the property message
      //var instance = new CosmotechApi.ScenarioRunStatusNode();
      //expect(instance).to.be();
    });

    it('should have the property phase (base name: "phase")', function() {
      // uncomment below and update the code to test the property phase
      //var instance = new CosmotechApi.ScenarioRunStatusNode();
      //expect(instance).to.be();
    });

    it('should have the property progress (base name: "progress")', function() {
      // uncomment below and update the code to test the property progress
      //var instance = new CosmotechApi.ScenarioRunStatusNode();
      //expect(instance).to.be();
    });

    it('should have the property startTime (base name: "startTime")', function() {
      // uncomment below and update the code to test the property startTime
      //var instance = new CosmotechApi.ScenarioRunStatusNode();
      //expect(instance).to.be();
    });

    it('should have the property endTime (base name: "endTime")', function() {
      // uncomment below and update the code to test the property endTime
      //var instance = new CosmotechApi.ScenarioRunStatusNode();
      //expect(instance).to.be();
    });

  });

}));
