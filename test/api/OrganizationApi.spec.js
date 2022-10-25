/**
 * Cosmo Tech Plaform API
 * Cosmo Tech Platform API
 *
 * The version of the OpenAPI document: 2.0.4-SNAPSHOT
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
    instance = new CosmotechApi.OrganizationApi();
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

  describe('OrganizationApi', function() {
    describe('addOrReplaceUsersInOrganization', function() {
      it('should call addOrReplaceUsersInOrganization successfully', function(done) {
        //uncomment below and update the code to test addOrReplaceUsersInOrganization
        //instance.addOrReplaceUsersInOrganization(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('findAllOrganizations', function() {
      it('should call findAllOrganizations successfully', function(done) {
        //uncomment below and update the code to test findAllOrganizations
        //instance.findAllOrganizations(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('findOrganizationById', function() {
      it('should call findOrganizationById successfully', function(done) {
        //uncomment below and update the code to test findOrganizationById
        //instance.findOrganizationById(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('registerOrganization', function() {
      it('should call registerOrganization successfully', function(done) {
        //uncomment below and update the code to test registerOrganization
        //instance.registerOrganization(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('removeAllUsersInOrganization', function() {
      it('should call removeAllUsersInOrganization successfully', function(done) {
        //uncomment below and update the code to test removeAllUsersInOrganization
        //instance.removeAllUsersInOrganization(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('removeUserFromOrganization', function() {
      it('should call removeUserFromOrganization successfully', function(done) {
        //uncomment below and update the code to test removeUserFromOrganization
        //instance.removeUserFromOrganization(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('unregisterOrganization', function() {
      it('should call unregisterOrganization successfully', function(done) {
        //uncomment below and update the code to test unregisterOrganization
        //instance.unregisterOrganization(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('updateOrganization', function() {
      it('should call updateOrganization successfully', function(done) {
        //uncomment below and update the code to test updateOrganization
        //instance.updateOrganization(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('updateSolutionsContainerRegistryByOrganizationId', function() {
      it('should call updateSolutionsContainerRegistryByOrganizationId successfully', function(done) {
        //uncomment below and update the code to test updateSolutionsContainerRegistryByOrganizationId
        //instance.updateSolutionsContainerRegistryByOrganizationId(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('updateStorageByOrganizationId', function() {
      it('should call updateStorageByOrganizationId successfully', function(done) {
        //uncomment below and update the code to test updateStorageByOrganizationId
        //instance.updateStorageByOrganizationId(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('updateTenantCredentialsByOrganizationId', function() {
      it('should call updateTenantCredentialsByOrganizationId successfully', function(done) {
        //uncomment below and update the code to test updateTenantCredentialsByOrganizationId
        //instance.updateTenantCredentialsByOrganizationId(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
  });

}));
