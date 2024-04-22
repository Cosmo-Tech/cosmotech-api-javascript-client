/**
 * Cosmo Tech Platform API
 * Cosmo Tech Platform API
 *
 * The version of the OpenAPI document: 3.1.4
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
    instance = new CosmotechApi.RunContainerLogs();
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

  describe('RunContainerLogs', function() {
    it('should create an instance of RunContainerLogs', function() {
      // uncomment below and update the code to test RunContainerLogs
      //var instance = new CosmotechApi.RunContainerLogs();
      //expect(instance).to.be.a(CosmotechApi.RunContainerLogs);
    });

    it('should have the property nodeId (base name: "nodeId")', function() {
      // uncomment below and update the code to test the property nodeId
      //var instance = new CosmotechApi.RunContainerLogs();
      //expect(instance).to.be();
    });

    it('should have the property containerName (base name: "containerName")', function() {
      // uncomment below and update the code to test the property containerName
      //var instance = new CosmotechApi.RunContainerLogs();
      //expect(instance).to.be();
    });

    it('should have the property children (base name: "children")', function() {
      // uncomment below and update the code to test the property children
      //var instance = new CosmotechApi.RunContainerLogs();
      //expect(instance).to.be();
    });

    it('should have the property logs (base name: "logs")', function() {
      // uncomment below and update the code to test the property logs
      //var instance = new CosmotechApi.RunContainerLogs();
      //expect(instance).to.be();
    });

  });

}));
