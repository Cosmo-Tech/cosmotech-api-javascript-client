/**
 * Cosmo Tech Platform API
 * Cosmo Tech Platform API
 *
 * The version of the OpenAPI document: 3.2.5
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
    instance = new CosmotechApi.DatasetCopyParameters();
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

  describe('DatasetCopyParameters', function() {
    it('should create an instance of DatasetCopyParameters', function() {
      // uncomment below and update the code to test DatasetCopyParameters
      //var instance = new CosmotechApi.DatasetCopyParameters();
      //expect(instance).to.be.a(CosmotechApi.DatasetCopyParameters);
    });

    it('should have the property sourceId (base name: "sourceId")', function() {
      // uncomment below and update the code to test the property sourceId
      //var instance = new CosmotechApi.DatasetCopyParameters();
      //expect(instance).to.be();
    });

    it('should have the property targetId (base name: "targetId")', function() {
      // uncomment below and update the code to test the property targetId
      //var instance = new CosmotechApi.DatasetCopyParameters();
      //expect(instance).to.be();
    });

    it('should have the property options (base name: "options")', function() {
      // uncomment below and update the code to test the property options
      //var instance = new CosmotechApi.DatasetCopyParameters();
      //expect(instance).to.be();
    });

  });

}));
