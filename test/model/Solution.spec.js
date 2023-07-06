/**
 * Cosmo Tech Platform API
 * Cosmo Tech Platform API
 *
 * The version of the OpenAPI document: 2.3.14-private
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
    instance = new CosmotechApi.Solution();
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

  describe('Solution', function() {
    it('should create an instance of Solution', function() {
      // uncomment below and update the code to test Solution
      //var instance = new CosmotechApi.Solution();
      //expect(instance).to.be.a(CosmotechApi.Solution);
    });

    it('should have the property id (base name: "id")', function() {
      // uncomment below and update the code to test the property id
      //var instance = new CosmotechApi.Solution();
      //expect(instance).to.be();
    });

    it('should have the property key (base name: "key")', function() {
      // uncomment below and update the code to test the property key
      //var instance = new CosmotechApi.Solution();
      //expect(instance).to.be();
    });

    it('should have the property name (base name: "name")', function() {
      // uncomment below and update the code to test the property name
      //var instance = new CosmotechApi.Solution();
      //expect(instance).to.be();
    });

    it('should have the property description (base name: "description")', function() {
      // uncomment below and update the code to test the property description
      //var instance = new CosmotechApi.Solution();
      //expect(instance).to.be();
    });

    it('should have the property repository (base name: "repository")', function() {
      // uncomment below and update the code to test the property repository
      //var instance = new CosmotechApi.Solution();
      //expect(instance).to.be();
    });

    it('should have the property csmSimulator (base name: "csmSimulator")', function() {
      // uncomment below and update the code to test the property csmSimulator
      //var instance = new CosmotechApi.Solution();
      //expect(instance).to.be();
    });

    it('should have the property version (base name: "version")', function() {
      // uncomment below and update the code to test the property version
      //var instance = new CosmotechApi.Solution();
      //expect(instance).to.be();
    });

    it('should have the property ownerId (base name: "ownerId")', function() {
      // uncomment below and update the code to test the property ownerId
      //var instance = new CosmotechApi.Solution();
      //expect(instance).to.be();
    });

    it('should have the property sdkVersion (base name: "sdkVersion")', function() {
      // uncomment below and update the code to test the property sdkVersion
      //var instance = new CosmotechApi.Solution();
      //expect(instance).to.be();
    });

    it('should have the property url (base name: "url")', function() {
      // uncomment below and update the code to test the property url
      //var instance = new CosmotechApi.Solution();
      //expect(instance).to.be();
    });

    it('should have the property tags (base name: "tags")', function() {
      // uncomment below and update the code to test the property tags
      //var instance = new CosmotechApi.Solution();
      //expect(instance).to.be();
    });

    it('should have the property parameters (base name: "parameters")', function() {
      // uncomment below and update the code to test the property parameters
      //var instance = new CosmotechApi.Solution();
      //expect(instance).to.be();
    });

    it('should have the property parameterGroups (base name: "parameterGroups")', function() {
      // uncomment below and update the code to test the property parameterGroups
      //var instance = new CosmotechApi.Solution();
      //expect(instance).to.be();
    });

    it('should have the property runTemplates (base name: "runTemplates")', function() {
      // uncomment below and update the code to test the property runTemplates
      //var instance = new CosmotechApi.Solution();
      //expect(instance).to.be();
    });

  });

}));
