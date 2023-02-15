/**
 * Cosmo Tech Platform API
 * Cosmo Tech Platform API
 *
 * The version of the OpenAPI document: 2.3.1-dev
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
    instance = new CosmotechApi.Workspace();
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

  describe('Workspace', function() {
    it('should create an instance of Workspace', function() {
      // uncomment below and update the code to test Workspace
      //var instance = new CosmotechApi.Workspace();
      //expect(instance).to.be.a(CosmotechApi.Workspace);
    });

    it('should have the property id (base name: "id")', function() {
      // uncomment below and update the code to test the property id
      //var instance = new CosmotechApi.Workspace();
      //expect(instance).to.be();
    });

    it('should have the property key (base name: "key")', function() {
      // uncomment below and update the code to test the property key
      //var instance = new CosmotechApi.Workspace();
      //expect(instance).to.be();
    });

    it('should have the property name (base name: "name")', function() {
      // uncomment below and update the code to test the property name
      //var instance = new CosmotechApi.Workspace();
      //expect(instance).to.be();
    });

    it('should have the property description (base name: "description")', function() {
      // uncomment below and update the code to test the property description
      //var instance = new CosmotechApi.Workspace();
      //expect(instance).to.be();
    });

    it('should have the property version (base name: "version")', function() {
      // uncomment below and update the code to test the property version
      //var instance = new CosmotechApi.Workspace();
      //expect(instance).to.be();
    });

    it('should have the property tags (base name: "tags")', function() {
      // uncomment below and update the code to test the property tags
      //var instance = new CosmotechApi.Workspace();
      //expect(instance).to.be();
    });

    it('should have the property ownerId (base name: "ownerId")', function() {
      // uncomment below and update the code to test the property ownerId
      //var instance = new CosmotechApi.Workspace();
      //expect(instance).to.be();
    });

    it('should have the property solution (base name: "solution")', function() {
      // uncomment below and update the code to test the property solution
      //var instance = new CosmotechApi.Workspace();
      //expect(instance).to.be();
    });

    it('should have the property webApp (base name: "webApp")', function() {
      // uncomment below and update the code to test the property webApp
      //var instance = new CosmotechApi.Workspace();
      //expect(instance).to.be();
    });

    it('should have the property sendInputToDataWarehouse (base name: "sendInputToDataWarehouse")', function() {
      // uncomment below and update the code to test the property sendInputToDataWarehouse
      //var instance = new CosmotechApi.Workspace();
      //expect(instance).to.be();
    });

    it('should have the property useDedicatedEventHubNamespace (base name: "useDedicatedEventHubNamespace")', function() {
      // uncomment below and update the code to test the property useDedicatedEventHubNamespace
      //var instance = new CosmotechApi.Workspace();
      //expect(instance).to.be();
    });

    it('should have the property dedicatedEventHubSasKeyName (base name: "dedicatedEventHubSasKeyName")', function() {
      // uncomment below and update the code to test the property dedicatedEventHubSasKeyName
      //var instance = new CosmotechApi.Workspace();
      //expect(instance).to.be();
    });

    it('should have the property dedicatedEventHubAuthenticationStrategy (base name: "dedicatedEventHubAuthenticationStrategy")', function() {
      // uncomment below and update the code to test the property dedicatedEventHubAuthenticationStrategy
      //var instance = new CosmotechApi.Workspace();
      //expect(instance).to.be();
    });

    it('should have the property sendScenarioRunToEventHub (base name: "sendScenarioRunToEventHub")', function() {
      // uncomment below and update the code to test the property sendScenarioRunToEventHub
      //var instance = new CosmotechApi.Workspace();
      //expect(instance).to.be();
    });

    it('should have the property sendScenarioMetadataToEventHub (base name: "sendScenarioMetadataToEventHub")', function() {
      // uncomment below and update the code to test the property sendScenarioMetadataToEventHub
      //var instance = new CosmotechApi.Workspace();
      //expect(instance).to.be();
    });

    it('should have the property security (base name: "security")', function() {
      // uncomment below and update the code to test the property security
      //var instance = new CosmotechApi.Workspace();
      //expect(instance).to.be();
    });

  });

}));
