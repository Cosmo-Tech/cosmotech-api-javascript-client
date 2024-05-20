/**
 * Cosmo Tech Platform API
 * Cosmo Tech Platform API
 *
 * The version of the OpenAPI document: 3.2.1-SNAPSHOT
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
    instance = new CosmotechApi.Runner();
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

  describe('Runner', function() {
    it('should create an instance of Runner', function() {
      // uncomment below and update the code to test Runner
      //var instance = new CosmotechApi.Runner();
      //expect(instance).to.be.a(CosmotechApi.Runner);
    });

    it('should have the property id (base name: "id")', function() {
      // uncomment below and update the code to test the property id
      //var instance = new CosmotechApi.Runner();
      //expect(instance).to.be();
    });

    it('should have the property name (base name: "name")', function() {
      // uncomment below and update the code to test the property name
      //var instance = new CosmotechApi.Runner();
      //expect(instance).to.be();
    });

    it('should have the property description (base name: "description")', function() {
      // uncomment below and update the code to test the property description
      //var instance = new CosmotechApi.Runner();
      //expect(instance).to.be();
    });

    it('should have the property tags (base name: "tags")', function() {
      // uncomment below and update the code to test the property tags
      //var instance = new CosmotechApi.Runner();
      //expect(instance).to.be();
    });

    it('should have the property parentId (base name: "parentId")', function() {
      // uncomment below and update the code to test the property parentId
      //var instance = new CosmotechApi.Runner();
      //expect(instance).to.be();
    });

    it('should have the property ownerId (base name: "ownerId")', function() {
      // uncomment below and update the code to test the property ownerId
      //var instance = new CosmotechApi.Runner();
      //expect(instance).to.be();
    });

    it('should have the property rootId (base name: "rootId")', function() {
      // uncomment below and update the code to test the property rootId
      //var instance = new CosmotechApi.Runner();
      //expect(instance).to.be();
    });

    it('should have the property solutionId (base name: "solutionId")', function() {
      // uncomment below and update the code to test the property solutionId
      //var instance = new CosmotechApi.Runner();
      //expect(instance).to.be();
    });

    it('should have the property runTemplateId (base name: "runTemplateId")', function() {
      // uncomment below and update the code to test the property runTemplateId
      //var instance = new CosmotechApi.Runner();
      //expect(instance).to.be();
    });

    it('should have the property organizationId (base name: "organizationId")', function() {
      // uncomment below and update the code to test the property organizationId
      //var instance = new CosmotechApi.Runner();
      //expect(instance).to.be();
    });

    it('should have the property workspaceId (base name: "workspaceId")', function() {
      // uncomment below and update the code to test the property workspaceId
      //var instance = new CosmotechApi.Runner();
      //expect(instance).to.be();
    });

    it('should have the property state (base name: "state")', function() {
      // uncomment below and update the code to test the property state
      //var instance = new CosmotechApi.Runner();
      //expect(instance).to.be();
    });

    it('should have the property creationDate (base name: "creationDate")', function() {
      // uncomment below and update the code to test the property creationDate
      //var instance = new CosmotechApi.Runner();
      //expect(instance).to.be();
    });

    it('should have the property lastUpdate (base name: "lastUpdate")', function() {
      // uncomment below and update the code to test the property lastUpdate
      //var instance = new CosmotechApi.Runner();
      //expect(instance).to.be();
    });

    it('should have the property ownerName (base name: "ownerName")', function() {
      // uncomment below and update the code to test the property ownerName
      //var instance = new CosmotechApi.Runner();
      //expect(instance).to.be();
    });

    it('should have the property solutionName (base name: "solutionName")', function() {
      // uncomment below and update the code to test the property solutionName
      //var instance = new CosmotechApi.Runner();
      //expect(instance).to.be();
    });

    it('should have the property runTemplateName (base name: "runTemplateName")', function() {
      // uncomment below and update the code to test the property runTemplateName
      //var instance = new CosmotechApi.Runner();
      //expect(instance).to.be();
    });

    it('should have the property datasetList (base name: "datasetList")', function() {
      // uncomment below and update the code to test the property datasetList
      //var instance = new CosmotechApi.Runner();
      //expect(instance).to.be();
    });

    it('should have the property runSizing (base name: "runSizing")', function() {
      // uncomment below and update the code to test the property runSizing
      //var instance = new CosmotechApi.Runner();
      //expect(instance).to.be();
    });

    it('should have the property parametersValues (base name: "parametersValues")', function() {
      // uncomment below and update the code to test the property parametersValues
      //var instance = new CosmotechApi.Runner();
      //expect(instance).to.be();
    });

    it('should have the property lastRun (base name: "lastRun")', function() {
      // uncomment below and update the code to test the property lastRun
      //var instance = new CosmotechApi.Runner();
      //expect(instance).to.be();
    });

    it('should have the property parentLastRun (base name: "parentLastRun")', function() {
      // uncomment below and update the code to test the property parentLastRun
      //var instance = new CosmotechApi.Runner();
      //expect(instance).to.be();
    });

    it('should have the property rootLastRun (base name: "rootLastRun")', function() {
      // uncomment below and update the code to test the property rootLastRun
      //var instance = new CosmotechApi.Runner();
      //expect(instance).to.be();
    });

    it('should have the property validationStatus (base name: "validationStatus")', function() {
      // uncomment below and update the code to test the property validationStatus
      //var instance = new CosmotechApi.Runner();
      //expect(instance).to.be();
    });

    it('should have the property security (base name: "security")', function() {
      // uncomment below and update the code to test the property security
      //var instance = new CosmotechApi.Runner();
      //expect(instance).to.be();
    });

  });

}));
