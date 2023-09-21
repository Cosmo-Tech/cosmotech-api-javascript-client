/**
 * Cosmo Tech Platform API
 * Cosmo Tech Platform API
 *
 * The version of the OpenAPI document: 3.0.1-test
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
    instance = new CosmotechApi.ValidatorRun();
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

  describe('ValidatorRun', function() {
    it('should create an instance of ValidatorRun', function() {
      // uncomment below and update the code to test ValidatorRun
      //var instance = new CosmotechApi.ValidatorRun();
      //expect(instance).to.be.a(CosmotechApi.ValidatorRun);
    });

    it('should have the property id (base name: "id")', function() {
      // uncomment below and update the code to test the property id
      //var instance = new CosmotechApi.ValidatorRun();
      //expect(instance).to.be();
    });

    it('should have the property validatorId (base name: "validatorId")', function() {
      // uncomment below and update the code to test the property validatorId
      //var instance = new CosmotechApi.ValidatorRun();
      //expect(instance).to.be();
    });

    it('should have the property validatorName (base name: "validatorName")', function() {
      // uncomment below and update the code to test the property validatorName
      //var instance = new CosmotechApi.ValidatorRun();
      //expect(instance).to.be();
    });

    it('should have the property datasetId (base name: "datasetId")', function() {
      // uncomment below and update the code to test the property datasetId
      //var instance = new CosmotechApi.ValidatorRun();
      //expect(instance).to.be();
    });

    it('should have the property datasetName (base name: "datasetName")', function() {
      // uncomment below and update the code to test the property datasetName
      //var instance = new CosmotechApi.ValidatorRun();
      //expect(instance).to.be();
    });

    it('should have the property state (base name: "state")', function() {
      // uncomment below and update the code to test the property state
      //var instance = new CosmotechApi.ValidatorRun();
      //expect(instance).to.be();
    });

    it('should have the property containerId (base name: "containerId")', function() {
      // uncomment below and update the code to test the property containerId
      //var instance = new CosmotechApi.ValidatorRun();
      //expect(instance).to.be();
    });

    it('should have the property logs (base name: "logs")', function() {
      // uncomment below and update the code to test the property logs
      //var instance = new CosmotechApi.ValidatorRun();
      //expect(instance).to.be();
    });

  });

}));
