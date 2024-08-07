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
    instance = new CosmotechApi.WorkspaceApi();
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

  describe('WorkspaceApi', function() {
    describe('addWorkspaceAccessControl', function() {
      it('should call addWorkspaceAccessControl successfully', function(done) {
        //uncomment below and update the code to test addWorkspaceAccessControl
        //instance.addWorkspaceAccessControl(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('createSecret', function() {
      it('should call createSecret successfully', function(done) {
        //uncomment below and update the code to test createSecret
        //instance.createSecret(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('createWorkspace', function() {
      it('should call createWorkspace successfully', function(done) {
        //uncomment below and update the code to test createWorkspace
        //instance.createWorkspace(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('deleteAllWorkspaceFiles', function() {
      it('should call deleteAllWorkspaceFiles successfully', function(done) {
        //uncomment below and update the code to test deleteAllWorkspaceFiles
        //instance.deleteAllWorkspaceFiles(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('deleteWorkspace', function() {
      it('should call deleteWorkspace successfully', function(done) {
        //uncomment below and update the code to test deleteWorkspace
        //instance.deleteWorkspace(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('deleteWorkspaceFile', function() {
      it('should call deleteWorkspaceFile successfully', function(done) {
        //uncomment below and update the code to test deleteWorkspaceFile
        //instance.deleteWorkspaceFile(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('downloadWorkspaceFile', function() {
      it('should call downloadWorkspaceFile successfully', function(done) {
        //uncomment below and update the code to test downloadWorkspaceFile
        //instance.downloadWorkspaceFile(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('findAllWorkspaceFiles', function() {
      it('should call findAllWorkspaceFiles successfully', function(done) {
        //uncomment below and update the code to test findAllWorkspaceFiles
        //instance.findAllWorkspaceFiles(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('findAllWorkspaces', function() {
      it('should call findAllWorkspaces successfully', function(done) {
        //uncomment below and update the code to test findAllWorkspaces
        //instance.findAllWorkspaces(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('findWorkspaceById', function() {
      it('should call findWorkspaceById successfully', function(done) {
        //uncomment below and update the code to test findWorkspaceById
        //instance.findWorkspaceById(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('getWorkspaceAccessControl', function() {
      it('should call getWorkspaceAccessControl successfully', function(done) {
        //uncomment below and update the code to test getWorkspaceAccessControl
        //instance.getWorkspaceAccessControl(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('getWorkspacePermissions', function() {
      it('should call getWorkspacePermissions successfully', function(done) {
        //uncomment below and update the code to test getWorkspacePermissions
        //instance.getWorkspacePermissions(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('getWorkspaceSecurity', function() {
      it('should call getWorkspaceSecurity successfully', function(done) {
        //uncomment below and update the code to test getWorkspaceSecurity
        //instance.getWorkspaceSecurity(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('getWorkspaceSecurityUsers', function() {
      it('should call getWorkspaceSecurityUsers successfully', function(done) {
        //uncomment below and update the code to test getWorkspaceSecurityUsers
        //instance.getWorkspaceSecurityUsers(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('linkDataset', function() {
      it('should call linkDataset successfully', function(done) {
        //uncomment below and update the code to test linkDataset
        //instance.linkDataset(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('removeWorkspaceAccessControl', function() {
      it('should call removeWorkspaceAccessControl successfully', function(done) {
        //uncomment below and update the code to test removeWorkspaceAccessControl
        //instance.removeWorkspaceAccessControl(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('setWorkspaceDefaultSecurity', function() {
      it('should call setWorkspaceDefaultSecurity successfully', function(done) {
        //uncomment below and update the code to test setWorkspaceDefaultSecurity
        //instance.setWorkspaceDefaultSecurity(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('unlinkDataset', function() {
      it('should call unlinkDataset successfully', function(done) {
        //uncomment below and update the code to test unlinkDataset
        //instance.unlinkDataset(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('updateWorkspace', function() {
      it('should call updateWorkspace successfully', function(done) {
        //uncomment below and update the code to test updateWorkspace
        //instance.updateWorkspace(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('updateWorkspaceAccessControl', function() {
      it('should call updateWorkspaceAccessControl successfully', function(done) {
        //uncomment below and update the code to test updateWorkspaceAccessControl
        //instance.updateWorkspaceAccessControl(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('uploadWorkspaceFile', function() {
      it('should call uploadWorkspaceFile successfully', function(done) {
        //uncomment below and update the code to test uploadWorkspaceFile
        //instance.uploadWorkspaceFile(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
  });

}));
