/**
 * Cosmo Tech Plaform API
 * Cosmo Tech Platform API
 *
 * The version of the OpenAPI document: 1.0.0-dev
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
    describe('addOrReplaceUsersInOrganizationWorkspace', function() {
      it('should call addOrReplaceUsersInOrganizationWorkspace successfully', function(done) {
        //uncomment below and update the code to test addOrReplaceUsersInOrganizationWorkspace
        //instance.addOrReplaceUsersInOrganizationWorkspace(function(error) {
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
    describe('removeAllUsersOfWorkspace', function() {
      it('should call removeAllUsersOfWorkspace successfully', function(done) {
        //uncomment below and update the code to test removeAllUsersOfWorkspace
        //instance.removeAllUsersOfWorkspace(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('removeUserFromOrganizationWorkspace', function() {
      it('should call removeUserFromOrganizationWorkspace successfully', function(done) {
        //uncomment below and update the code to test removeUserFromOrganizationWorkspace
        //instance.removeUserFromOrganizationWorkspace(function(error) {
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
