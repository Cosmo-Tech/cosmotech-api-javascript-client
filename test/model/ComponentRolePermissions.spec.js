/**
 * Cosmo Tech Platform API
 * Cosmo Tech Platform API
 *
 * The version of the OpenAPI document: 3.0.3-SNAPSHOT
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
    instance = new CosmotechApi.ComponentRolePermissions();
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

  describe('ComponentRolePermissions', function() {
    it('should create an instance of ComponentRolePermissions', function() {
      // uncomment below and update the code to test ComponentRolePermissions
      //var instance = new CosmotechApi.ComponentRolePermissions();
      //expect(instance).to.be.a(CosmotechApi.ComponentRolePermissions);
    });

    it('should have the property component (base name: "component")', function() {
      // uncomment below and update the code to test the property component
      //var instance = new CosmotechApi.ComponentRolePermissions();
      //expect(instance).to.be();
    });

    it('should have the property roles (base name: "roles")', function() {
      // uncomment below and update the code to test the property roles
      //var instance = new CosmotechApi.ComponentRolePermissions();
      //expect(instance).to.be();
    });

  });

}));
