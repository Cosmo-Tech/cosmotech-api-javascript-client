/**
 * Cosmo Tech Plaform API
 * Cosmo Tech Platform API
 *
 * The version of the OpenAPI document: 3.0.1-SNAPSHOT
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
    instance = new CosmotechApi.ConnectorParameter();
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

  describe('ConnectorParameter', function() {
    it('should create an instance of ConnectorParameter', function() {
      // uncomment below and update the code to test ConnectorParameter
      //var instance = new CosmotechApi.ConnectorParameter();
      //expect(instance).to.be.a(CosmotechApi.ConnectorParameter);
    });

    it('should have the property id (base name: "id")', function() {
      // uncomment below and update the code to test the property id
      //var instance = new CosmotechApi.ConnectorParameter();
      //expect(instance).to.be();
    });

    it('should have the property label (base name: "label")', function() {
      // uncomment below and update the code to test the property label
      //var instance = new CosmotechApi.ConnectorParameter();
      //expect(instance).to.be();
    });

    it('should have the property valueType (base name: "valueType")', function() {
      // uncomment below and update the code to test the property valueType
      //var instance = new CosmotechApi.ConnectorParameter();
      //expect(instance).to.be();
    });

    it('should have the property options (base name: "options")', function() {
      // uncomment below and update the code to test the property options
      //var instance = new CosmotechApi.ConnectorParameter();
      //expect(instance).to.be();
    });

    it('should have the property _default (base name: "default")', function() {
      // uncomment below and update the code to test the property _default
      //var instance = new CosmotechApi.ConnectorParameter();
      //expect(instance).to.be();
    });

    it('should have the property envVar (base name: "envVar")', function() {
      // uncomment below and update the code to test the property envVar
      //var instance = new CosmotechApi.ConnectorParameter();
      //expect(instance).to.be();
    });

  });

}));
