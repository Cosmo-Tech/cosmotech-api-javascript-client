/**
 * Cosmo Tech Plaform API
 * Cosmo Tech Platform API
 *
 * The version of the OpenAPI document: 1.1.0-rc
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
    instance = new CosmotechApi.UserApi();
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

  describe('UserApi', function() {
    describe('authorizeUser', function() {
      it('should call authorizeUser successfully', function(done) {
        //uncomment below and update the code to test authorizeUser
        //instance.authorizeUser(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('findAllUsers', function() {
      it('should call findAllUsers successfully', function(done) {
        //uncomment below and update the code to test findAllUsers
        //instance.findAllUsers(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('findUserById', function() {
      it('should call findUserById successfully', function(done) {
        //uncomment below and update the code to test findUserById
        //instance.findUserById(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('getCurrentUser', function() {
      it('should call getCurrentUser successfully', function(done) {
        //uncomment below and update the code to test getCurrentUser
        //instance.getCurrentUser(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('getOrganizationCurrentUser', function() {
      it('should call getOrganizationCurrentUser successfully', function(done) {
        //uncomment below and update the code to test getOrganizationCurrentUser
        //instance.getOrganizationCurrentUser(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('getWorkspaceCurrentUser', function() {
      it('should call getWorkspaceCurrentUser successfully', function(done) {
        //uncomment below and update the code to test getWorkspaceCurrentUser
        //instance.getWorkspaceCurrentUser(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('registerUser', function() {
      it('should call registerUser successfully', function(done) {
        //uncomment below and update the code to test registerUser
        //instance.registerUser(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('testPlatform', function() {
      it('should call testPlatform successfully', function(done) {
        //uncomment below and update the code to test testPlatform
        //instance.testPlatform(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('unregisterUser', function() {
      it('should call unregisterUser successfully', function(done) {
        //uncomment below and update the code to test unregisterUser
        //instance.unregisterUser(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('updateUser', function() {
      it('should call updateUser successfully', function(done) {
        //uncomment below and update the code to test updateUser
        //instance.updateUser(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
  });

}));
