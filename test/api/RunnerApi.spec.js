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
    instance = new CosmotechApi.RunnerApi();
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

  describe('RunnerApi', function() {
    describe('addRunnerAccessControl', function() {
      it('should call addRunnerAccessControl successfully', function(done) {
        //uncomment below and update the code to test addRunnerAccessControl
        //instance.addRunnerAccessControl(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('createRunner', function() {
      it('should call createRunner successfully', function(done) {
        //uncomment below and update the code to test createRunner
        //instance.createRunner(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('deleteRunner', function() {
      it('should call deleteRunner successfully', function(done) {
        //uncomment below and update the code to test deleteRunner
        //instance.deleteRunner(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('getRunner', function() {
      it('should call getRunner successfully', function(done) {
        //uncomment below and update the code to test getRunner
        //instance.getRunner(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('getRunnerAccessControl', function() {
      it('should call getRunnerAccessControl successfully', function(done) {
        //uncomment below and update the code to test getRunnerAccessControl
        //instance.getRunnerAccessControl(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('getRunnerPermissions', function() {
      it('should call getRunnerPermissions successfully', function(done) {
        //uncomment below and update the code to test getRunnerPermissions
        //instance.getRunnerPermissions(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('getRunnerSecurity', function() {
      it('should call getRunnerSecurity successfully', function(done) {
        //uncomment below and update the code to test getRunnerSecurity
        //instance.getRunnerSecurity(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('getRunnerSecurityUsers', function() {
      it('should call getRunnerSecurityUsers successfully', function(done) {
        //uncomment below and update the code to test getRunnerSecurityUsers
        //instance.getRunnerSecurityUsers(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('listRunners', function() {
      it('should call listRunners successfully', function(done) {
        //uncomment below and update the code to test listRunners
        //instance.listRunners(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('removeRunnerAccessControl', function() {
      it('should call removeRunnerAccessControl successfully', function(done) {
        //uncomment below and update the code to test removeRunnerAccessControl
        //instance.removeRunnerAccessControl(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('setRunnerDefaultSecurity', function() {
      it('should call setRunnerDefaultSecurity successfully', function(done) {
        //uncomment below and update the code to test setRunnerDefaultSecurity
        //instance.setRunnerDefaultSecurity(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('startRun', function() {
      it('should call startRun successfully', function(done) {
        //uncomment below and update the code to test startRun
        //instance.startRun(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('stopRun', function() {
      it('should call stopRun successfully', function(done) {
        //uncomment below and update the code to test stopRun
        //instance.stopRun(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('updateRunner', function() {
      it('should call updateRunner successfully', function(done) {
        //uncomment below and update the code to test updateRunner
        //instance.updateRunner(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('updateRunnerAccessControl', function() {
      it('should call updateRunnerAccessControl successfully', function(done) {
        //uncomment below and update the code to test updateRunnerAccessControl
        //instance.updateRunnerAccessControl(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
  });

}));
