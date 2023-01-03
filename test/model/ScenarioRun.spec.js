/**
 * Cosmo Tech Plaform API
 * Cosmo Tech Platform API
 *
 * The version of the OpenAPI document: 1.1.0
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
    instance = new CosmotechApi.ScenarioRun();
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

  describe('ScenarioRun', function() {
    it('should create an instance of ScenarioRun', function() {
      // uncomment below and update the code to test ScenarioRun
      //var instance = new CosmotechApi.ScenarioRun();
      //expect(instance).to.be.a(CosmotechApi.ScenarioRun);
    });

    it('should have the property id (base name: "id")', function() {
      // uncomment below and update the code to test the property id
      //var instance = new CosmotechApi.ScenarioRun();
      //expect(instance).to.be();
    });

    it('should have the property state (base name: "state")', function() {
      // uncomment below and update the code to test the property state
      //var instance = new CosmotechApi.ScenarioRun();
      //expect(instance).to.be();
    });

    it('should have the property organizationId (base name: "organizationId")', function() {
      // uncomment below and update the code to test the property organizationId
      //var instance = new CosmotechApi.ScenarioRun();
      //expect(instance).to.be();
    });

    it('should have the property workflowId (base name: "workflowId")', function() {
      // uncomment below and update the code to test the property workflowId
      //var instance = new CosmotechApi.ScenarioRun();
      //expect(instance).to.be();
    });

    it('should have the property csmSimulationRun (base name: "csmSimulationRun")', function() {
      // uncomment below and update the code to test the property csmSimulationRun
      //var instance = new CosmotechApi.ScenarioRun();
      //expect(instance).to.be();
    });

    it('should have the property generateName (base name: "generateName")', function() {
      // uncomment below and update the code to test the property generateName
      //var instance = new CosmotechApi.ScenarioRun();
      //expect(instance).to.be();
    });

    it('should have the property workflowName (base name: "workflowName")', function() {
      // uncomment below and update the code to test the property workflowName
      //var instance = new CosmotechApi.ScenarioRun();
      //expect(instance).to.be();
    });

    it('should have the property ownerId (base name: "ownerId")', function() {
      // uncomment below and update the code to test the property ownerId
      //var instance = new CosmotechApi.ScenarioRun();
      //expect(instance).to.be();
    });

    it('should have the property workspaceId (base name: "workspaceId")', function() {
      // uncomment below and update the code to test the property workspaceId
      //var instance = new CosmotechApi.ScenarioRun();
      //expect(instance).to.be();
    });

    it('should have the property workspaceKey (base name: "workspaceKey")', function() {
      // uncomment below and update the code to test the property workspaceKey
      //var instance = new CosmotechApi.ScenarioRun();
      //expect(instance).to.be();
    });

    it('should have the property scenarioId (base name: "scenarioId")', function() {
      // uncomment below and update the code to test the property scenarioId
      //var instance = new CosmotechApi.ScenarioRun();
      //expect(instance).to.be();
    });

    it('should have the property solutionId (base name: "solutionId")', function() {
      // uncomment below and update the code to test the property solutionId
      //var instance = new CosmotechApi.ScenarioRun();
      //expect(instance).to.be();
    });

    it('should have the property runTemplateId (base name: "runTemplateId")', function() {
      // uncomment below and update the code to test the property runTemplateId
      //var instance = new CosmotechApi.ScenarioRun();
      //expect(instance).to.be();
    });

    it('should have the property computeSize (base name: "computeSize")', function() {
      // uncomment below and update the code to test the property computeSize
      //var instance = new CosmotechApi.ScenarioRun();
      //expect(instance).to.be();
    });

    it('should have the property sdkVersion (base name: "sdkVersion")', function() {
      // uncomment below and update the code to test the property sdkVersion
      //var instance = new CosmotechApi.ScenarioRun();
      //expect(instance).to.be();
    });

    it('should have the property noDataIngestionState (base name: "noDataIngestionState")', function() {
      // uncomment below and update the code to test the property noDataIngestionState
      //var instance = new CosmotechApi.ScenarioRun();
      //expect(instance).to.be();
    });

    it('should have the property datasetList (base name: "datasetList")', function() {
      // uncomment below and update the code to test the property datasetList
      //var instance = new CosmotechApi.ScenarioRun();
      //expect(instance).to.be();
    });

    it('should have the property parametersValues (base name: "parametersValues")', function() {
      // uncomment below and update the code to test the property parametersValues
      //var instance = new CosmotechApi.ScenarioRun();
      //expect(instance).to.be();
    });

    it('should have the property sendDatasetsToDataWarehouse (base name: "sendDatasetsToDataWarehouse")', function() {
      // uncomment below and update the code to test the property sendDatasetsToDataWarehouse
      //var instance = new CosmotechApi.ScenarioRun();
      //expect(instance).to.be();
    });

    it('should have the property sendInputParametersToDataWarehouse (base name: "sendInputParametersToDataWarehouse")', function() {
      // uncomment below and update the code to test the property sendInputParametersToDataWarehouse
      //var instance = new CosmotechApi.ScenarioRun();
      //expect(instance).to.be();
    });

    it('should have the property nodeLabel (base name: "nodeLabel")', function() {
      // uncomment below and update the code to test the property nodeLabel
      //var instance = new CosmotechApi.ScenarioRun();
      //expect(instance).to.be();
    });

    it('should have the property containers (base name: "containers")', function() {
      // uncomment below and update the code to test the property containers
      //var instance = new CosmotechApi.ScenarioRun();
      //expect(instance).to.be();
    });

  });

}));
