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
    instance = new CosmotechApi.OrganizationService();
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

  describe('OrganizationService', function() {
    it('should create an instance of OrganizationService', function() {
      // uncomment below and update the code to test OrganizationService
      //var instance = new CosmotechApi.OrganizationService();
      //expect(instance).to.be.a(CosmotechApi.OrganizationService);
    });

    it('should have the property cloudService (base name: "cloudService")', function() {
      // uncomment below and update the code to test the property cloudService
      //var instance = new CosmotechApi.OrganizationService();
      //expect(instance).to.be();
    });

    it('should have the property baseUri (base name: "baseUri")', function() {
      // uncomment below and update the code to test the property baseUri
      //var instance = new CosmotechApi.OrganizationService();
      //expect(instance).to.be();
    });

    it('should have the property platformService (base name: "platformService")', function() {
      // uncomment below and update the code to test the property platformService
      //var instance = new CosmotechApi.OrganizationService();
      //expect(instance).to.be();
    });

    it('should have the property resourceUri (base name: "resourceUri")', function() {
      // uncomment below and update the code to test the property resourceUri
      //var instance = new CosmotechApi.OrganizationService();
      //expect(instance).to.be();
    });

    it('should have the property credentials (base name: "credentials")', function() {
      // uncomment below and update the code to test the property credentials
      //var instance = new CosmotechApi.OrganizationService();
      //expect(instance).to.be();
    });

  });

}));
