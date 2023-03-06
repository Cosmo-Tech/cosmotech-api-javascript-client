/**
 * Cosmo Tech Plaform API
 * Cosmo Tech Platform API
 *
 * The version of the OpenAPI document: 2.3.4-SNAPSHOT
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
    instance = new CosmotechApi.ScenariorunApi();
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

  describe('ScenariorunApi', function() {
    describe('deleteHistoricalDataOrganization', function() {
      it('should call deleteHistoricalDataOrganization successfully', function(done) {
        //uncomment below and update the code to test deleteHistoricalDataOrganization
        //instance.deleteHistoricalDataOrganization(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('deleteHistoricalDataScenario', function() {
      it('should call deleteHistoricalDataScenario successfully', function(done) {
        //uncomment below and update the code to test deleteHistoricalDataScenario
        //instance.deleteHistoricalDataScenario(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('deleteHistoricalDataWorkspace', function() {
      it('should call deleteHistoricalDataWorkspace successfully', function(done) {
        //uncomment below and update the code to test deleteHistoricalDataWorkspace
        //instance.deleteHistoricalDataWorkspace(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('deleteScenarioRun', function() {
      it('should call deleteScenarioRun successfully', function(done) {
        //uncomment below and update the code to test deleteScenarioRun
        //instance.deleteScenarioRun(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('findScenarioRunById', function() {
      it('should call findScenarioRunById successfully', function(done) {
        //uncomment below and update the code to test findScenarioRunById
        //instance.findScenarioRunById(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('getScenarioRunCumulatedLogs', function() {
      it('should call getScenarioRunCumulatedLogs successfully', function(done) {
        //uncomment below and update the code to test getScenarioRunCumulatedLogs
        //instance.getScenarioRunCumulatedLogs(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('getScenarioRunLogs', function() {
      it('should call getScenarioRunLogs successfully', function(done) {
        //uncomment below and update the code to test getScenarioRunLogs
        //instance.getScenarioRunLogs(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('getScenarioRunStatus', function() {
      it('should call getScenarioRunStatus successfully', function(done) {
        //uncomment below and update the code to test getScenarioRunStatus
        //instance.getScenarioRunStatus(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('getScenarioRuns', function() {
      it('should call getScenarioRuns successfully', function(done) {
        //uncomment below and update the code to test getScenarioRuns
        //instance.getScenarioRuns(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('getWorkspaceScenarioRuns', function() {
      it('should call getWorkspaceScenarioRuns successfully', function(done) {
        //uncomment below and update the code to test getWorkspaceScenarioRuns
        //instance.getWorkspaceScenarioRuns(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('runScenario', function() {
      it('should call runScenario successfully', function(done) {
        //uncomment below and update the code to test runScenario
        //instance.runScenario(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('searchScenarioRuns', function() {
      it('should call searchScenarioRuns successfully', function(done) {
        //uncomment below and update the code to test searchScenarioRuns
        //instance.searchScenarioRuns(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('startScenarioRunContainers', function() {
      it('should call startScenarioRunContainers successfully', function(done) {
        //uncomment below and update the code to test startScenarioRunContainers
        //instance.startScenarioRunContainers(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('stopScenarioRun', function() {
      it('should call stopScenarioRun successfully', function(done) {
        //uncomment below and update the code to test stopScenarioRun
        //instance.stopScenarioRun(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
  });

}));
