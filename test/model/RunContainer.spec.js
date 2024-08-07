/**
 * Cosmo Tech Platform API
 * Cosmo Tech Platform API
 *
 * The version of the OpenAPI document: 4.0.3-SNAPSHOT
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
    instance = new CosmotechApi.RunContainer();
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

  describe('RunContainer', function() {
    it('should create an instance of RunContainer', function() {
      // uncomment below and update the code to test RunContainer
      //var instance = new CosmotechApi.RunContainer();
      //expect(instance).to.be.a(CosmotechApi.RunContainer);
    });

    it('should have the property id (base name: "id")', function() {
      // uncomment below and update the code to test the property id
      //var instance = new CosmotechApi.RunContainer();
      //expect(instance).to.be();
    });

    it('should have the property name (base name: "name")', function() {
      // uncomment below and update the code to test the property name
      //var instance = new CosmotechApi.RunContainer();
      //expect(instance).to.be();
    });

    it('should have the property labels (base name: "labels")', function() {
      // uncomment below and update the code to test the property labels
      //var instance = new CosmotechApi.RunContainer();
      //expect(instance).to.be();
    });

    it('should have the property envVars (base name: "envVars")', function() {
      // uncomment below and update the code to test the property envVars
      //var instance = new CosmotechApi.RunContainer();
      //expect(instance).to.be();
    });

    it('should have the property image (base name: "image")', function() {
      // uncomment below and update the code to test the property image
      //var instance = new CosmotechApi.RunContainer();
      //expect(instance).to.be();
    });

    it('should have the property entrypoint (base name: "entrypoint")', function() {
      // uncomment below and update the code to test the property entrypoint
      //var instance = new CosmotechApi.RunContainer();
      //expect(instance).to.be();
    });

    it('should have the property runArgs (base name: "runArgs")', function() {
      // uncomment below and update the code to test the property runArgs
      //var instance = new CosmotechApi.RunContainer();
      //expect(instance).to.be();
    });

    it('should have the property dependencies (base name: "dependencies")', function() {
      // uncomment below and update the code to test the property dependencies
      //var instance = new CosmotechApi.RunContainer();
      //expect(instance).to.be();
    });

    it('should have the property solutionContainer (base name: "solutionContainer")', function() {
      // uncomment below and update the code to test the property solutionContainer
      //var instance = new CosmotechApi.RunContainer();
      //expect(instance).to.be();
    });

    it('should have the property nodeLabel (base name: "nodeLabel")', function() {
      // uncomment below and update the code to test the property nodeLabel
      //var instance = new CosmotechApi.RunContainer();
      //expect(instance).to.be();
    });

    it('should have the property runSizing (base name: "runSizing")', function() {
      // uncomment below and update the code to test the property runSizing
      //var instance = new CosmotechApi.RunContainer();
      //expect(instance).to.be();
    });

  });

}));
