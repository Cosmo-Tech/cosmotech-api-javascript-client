/**
 * Cosmo Tech Platform API
 * Cosmo Tech Platform API
 *
 * The version of the OpenAPI document: 2.3.6-dev
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
    describe('addOrganizationAccessControl', function() {
      it('should call addOrganizationAccessControl successfully', function(done) {
        //uncomment below and update the code to test addOrganizationAccessControl
        //instance.addOrganizationAccessControl(function(error) {
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
    describe('getAllPermissions', function() {
      it('should call getAllPermissions successfully', function(done) {
        //uncomment below and update the code to test getAllPermissions
        //instance.getAllPermissions(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('getOrganizationAccessControl', function() {
      it('should call getOrganizationAccessControl successfully', function(done) {
        //uncomment below and update the code to test getOrganizationAccessControl
        //instance.getOrganizationAccessControl(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('getOrganizationPermissions', function() {
      it('should call getOrganizationPermissions successfully', function(done) {
        //uncomment below and update the code to test getOrganizationPermissions
        //instance.getOrganizationPermissions(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('getOrganizationSecurity', function() {
      it('should call getOrganizationSecurity successfully', function(done) {
        //uncomment below and update the code to test getOrganizationSecurity
        //instance.getOrganizationSecurity(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('getOrganizationSecurityUsers', function() {
      it('should call getOrganizationSecurityUsers successfully', function(done) {
        //uncomment below and update the code to test getOrganizationSecurityUsers
        //instance.getOrganizationSecurityUsers(function(error) {
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
    describe('removeOrganizationAccessControl', function() {
      it('should call removeOrganizationAccessControl successfully', function(done) {
        //uncomment below and update the code to test removeOrganizationAccessControl
        //instance.removeOrganizationAccessControl(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('setOrganizationDefaultSecurity', function() {
      it('should call setOrganizationDefaultSecurity successfully', function(done) {
        //uncomment below and update the code to test setOrganizationDefaultSecurity
        //instance.setOrganizationDefaultSecurity(function(error) {
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
    describe('updateOrganizationAccessControl', function() {
      it('should call updateOrganizationAccessControl successfully', function(done) {
        //uncomment below and update the code to test updateOrganizationAccessControl
        //instance.updateOrganizationAccessControl(function(error) {
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
