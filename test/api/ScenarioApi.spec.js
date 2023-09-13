/**
 * Cosmo Tech Platform API
 * Cosmo Tech Platform API
 *
 * The version of the OpenAPI document: 3.0.0-test
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
    instance = new CosmotechApi.ScenarioApi();
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

  describe('ScenarioApi', function() {
    describe('addOrReplaceScenarioParameterValues', function() {
      it('should call addOrReplaceScenarioParameterValues successfully', function(done) {
        //uncomment below and update the code to test addOrReplaceScenarioParameterValues
        //instance.addOrReplaceScenarioParameterValues(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('addScenarioAccessControl', function() {
      it('should call addScenarioAccessControl successfully', function(done) {
        //uncomment below and update the code to test addScenarioAccessControl
        //instance.addScenarioAccessControl(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('compareScenarios', function() {
      it('should call compareScenarios successfully', function(done) {
        //uncomment below and update the code to test compareScenarios
        //instance.compareScenarios(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('createScenario', function() {
      it('should call createScenario successfully', function(done) {
        //uncomment below and update the code to test createScenario
        //instance.createScenario(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('deleteAllScenarios', function() {
      it('should call deleteAllScenarios successfully', function(done) {
        //uncomment below and update the code to test deleteAllScenarios
        //instance.deleteAllScenarios(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('deleteScenario', function() {
      it('should call deleteScenario successfully', function(done) {
        //uncomment below and update the code to test deleteScenario
        //instance.deleteScenario(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('downloadScenarioData', function() {
      it('should call downloadScenarioData successfully', function(done) {
        //uncomment below and update the code to test downloadScenarioData
        //instance.downloadScenarioData(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('findAllScenarios', function() {
      it('should call findAllScenarios successfully', function(done) {
        //uncomment below and update the code to test findAllScenarios
        //instance.findAllScenarios(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('findAllScenariosByValidationStatus', function() {
      it('should call findAllScenariosByValidationStatus successfully', function(done) {
        //uncomment below and update the code to test findAllScenariosByValidationStatus
        //instance.findAllScenariosByValidationStatus(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('findScenarioById', function() {
      it('should call findScenarioById successfully', function(done) {
        //uncomment below and update the code to test findScenarioById
        //instance.findScenarioById(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('getScenarioAccessControl', function() {
      it('should call getScenarioAccessControl successfully', function(done) {
        //uncomment below and update the code to test getScenarioAccessControl
        //instance.getScenarioAccessControl(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('getScenarioDataDownloadJobInfo', function() {
      it('should call getScenarioDataDownloadJobInfo successfully', function(done) {
        //uncomment below and update the code to test getScenarioDataDownloadJobInfo
        //instance.getScenarioDataDownloadJobInfo(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('getScenarioPermissions', function() {
      it('should call getScenarioPermissions successfully', function(done) {
        //uncomment below and update the code to test getScenarioPermissions
        //instance.getScenarioPermissions(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('getScenarioSecurity', function() {
      it('should call getScenarioSecurity successfully', function(done) {
        //uncomment below and update the code to test getScenarioSecurity
        //instance.getScenarioSecurity(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('getScenarioSecurityUsers', function() {
      it('should call getScenarioSecurityUsers successfully', function(done) {
        //uncomment below and update the code to test getScenarioSecurityUsers
        //instance.getScenarioSecurityUsers(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('getScenarioValidationStatusById', function() {
      it('should call getScenarioValidationStatusById successfully', function(done) {
        //uncomment below and update the code to test getScenarioValidationStatusById
        //instance.getScenarioValidationStatusById(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('getScenariosTree', function() {
      it('should call getScenariosTree successfully', function(done) {
        //uncomment below and update the code to test getScenariosTree
        //instance.getScenariosTree(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('importScenario', function() {
      it('should call importScenario successfully', function(done) {
        //uncomment below and update the code to test importScenario
        //instance.importScenario(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('removeAllScenarioParameterValues', function() {
      it('should call removeAllScenarioParameterValues successfully', function(done) {
        //uncomment below and update the code to test removeAllScenarioParameterValues
        //instance.removeAllScenarioParameterValues(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('removeScenarioAccessControl', function() {
      it('should call removeScenarioAccessControl successfully', function(done) {
        //uncomment below and update the code to test removeScenarioAccessControl
        //instance.removeScenarioAccessControl(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('setScenarioDefaultSecurity', function() {
      it('should call setScenarioDefaultSecurity successfully', function(done) {
        //uncomment below and update the code to test setScenarioDefaultSecurity
        //instance.setScenarioDefaultSecurity(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('updateScenario', function() {
      it('should call updateScenario successfully', function(done) {
        //uncomment below and update the code to test updateScenario
        //instance.updateScenario(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('updateScenarioAccessControl', function() {
      it('should call updateScenarioAccessControl successfully', function(done) {
        //uncomment below and update the code to test updateScenarioAccessControl
        //instance.updateScenarioAccessControl(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
  });

}));
