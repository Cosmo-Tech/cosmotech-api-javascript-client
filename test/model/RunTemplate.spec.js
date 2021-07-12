/**
 * Cosmo Tech Plaform API
 * Cosmo Tech Platform API
 *
 * The version of the OpenAPI document: 0.0.8-SNAPSHOT
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
    instance = new CosmotechApi.RunTemplate();
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

  describe('RunTemplate', function() {
    it('should create an instance of RunTemplate', function() {
      // uncomment below and update the code to test RunTemplate
      //var instane = new CosmotechApi.RunTemplate();
      //expect(instance).to.be.a(CosmotechApi.RunTemplate);
    });

    it('should have the property id (base name: "id")', function() {
      // uncomment below and update the code to test the property id
      //var instance = new CosmotechApi.RunTemplate();
      //expect(instance).to.be();
    });

    it('should have the property name (base name: "name")', function() {
      // uncomment below and update the code to test the property name
      //var instance = new CosmotechApi.RunTemplate();
      //expect(instance).to.be();
    });

    it('should have the property description (base name: "description")', function() {
      // uncomment below and update the code to test the property description
      //var instance = new CosmotechApi.RunTemplate();
      //expect(instance).to.be();
    });

    it('should have the property csmSimulation (base name: "csmSimulation")', function() {
      // uncomment below and update the code to test the property csmSimulation
      //var instance = new CosmotechApi.RunTemplate();
      //expect(instance).to.be();
    });

    it('should have the property tags (base name: "tags")', function() {
      // uncomment below and update the code to test the property tags
      //var instance = new CosmotechApi.RunTemplate();
      //expect(instance).to.be();
    });

    it('should have the property computeSize (base name: "computeSize")', function() {
      // uncomment below and update the code to test the property computeSize
      //var instance = new CosmotechApi.RunTemplate();
      //expect(instance).to.be();
    });

    it('should have the property fetchDatasets (base name: "fetchDatasets")', function() {
      // uncomment below and update the code to test the property fetchDatasets
      //var instance = new CosmotechApi.RunTemplate();
      //expect(instance).to.be();
    });

    it('should have the property fetchScenarioParameters (base name: "fetchScenarioParameters")', function() {
      // uncomment below and update the code to test the property fetchScenarioParameters
      //var instance = new CosmotechApi.RunTemplate();
      //expect(instance).to.be();
    });

    it('should have the property applyParameters (base name: "applyParameters")', function() {
      // uncomment below and update the code to test the property applyParameters
      //var instance = new CosmotechApi.RunTemplate();
      //expect(instance).to.be();
    });

    it('should have the property validateData (base name: "validateData")', function() {
      // uncomment below and update the code to test the property validateData
      //var instance = new CosmotechApi.RunTemplate();
      //expect(instance).to.be();
    });

    it('should have the property sendDatasetsToDataWarehouse (base name: "sendDatasetsToDataWarehouse")', function() {
      // uncomment below and update the code to test the property sendDatasetsToDataWarehouse
      //var instance = new CosmotechApi.RunTemplate();
      //expect(instance).to.be();
    });

    it('should have the property sendInputParametersToDataWarehouse (base name: "sendInputParametersToDataWarehouse")', function() {
      // uncomment below and update the code to test the property sendInputParametersToDataWarehouse
      //var instance = new CosmotechApi.RunTemplate();
      //expect(instance).to.be();
    });

    it('should have the property preRun (base name: "preRun")', function() {
      // uncomment below and update the code to test the property preRun
      //var instance = new CosmotechApi.RunTemplate();
      //expect(instance).to.be();
    });

    it('should have the property run (base name: "run")', function() {
      // uncomment below and update the code to test the property run
      //var instance = new CosmotechApi.RunTemplate();
      //expect(instance).to.be();
    });

    it('should have the property postRun (base name: "postRun")', function() {
      // uncomment below and update the code to test the property postRun
      //var instance = new CosmotechApi.RunTemplate();
      //expect(instance).to.be();
    });

    it('should have the property parametersJson (base name: "parametersJson")', function() {
      // uncomment below and update the code to test the property parametersJson
      //var instance = new CosmotechApi.RunTemplate();
      //expect(instance).to.be();
    });

    it('should have the property parametersHandlerSource (base name: "parametersHandlerSource")', function() {
      // uncomment below and update the code to test the property parametersHandlerSource
      //var instance = new CosmotechApi.RunTemplate();
      //expect(instance).to.be();
    });

    it('should have the property datasetValidatorSource (base name: "datasetValidatorSource")', function() {
      // uncomment below and update the code to test the property datasetValidatorSource
      //var instance = new CosmotechApi.RunTemplate();
      //expect(instance).to.be();
    });

    it('should have the property preRunSource (base name: "preRunSource")', function() {
      // uncomment below and update the code to test the property preRunSource
      //var instance = new CosmotechApi.RunTemplate();
      //expect(instance).to.be();
    });

    it('should have the property runSource (base name: "runSource")', function() {
      // uncomment below and update the code to test the property runSource
      //var instance = new CosmotechApi.RunTemplate();
      //expect(instance).to.be();
    });

    it('should have the property postRunSource (base name: "postRunSource")', function() {
      // uncomment below and update the code to test the property postRunSource
      //var instance = new CosmotechApi.RunTemplate();
      //expect(instance).to.be();
    });

    it('should have the property parameterGroups (base name: "parameterGroups")', function() {
      // uncomment below and update the code to test the property parameterGroups
      //var instance = new CosmotechApi.RunTemplate();
      //expect(instance).to.be();
    });

  });

}));
