/**
 * Cosmo Tech Plaform API
 * Cosmo Tech Platform API
 *
 * The version of the OpenAPI document: 2.1.9-SNAPSHOT
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
    instance = new CosmotechApi.SolutionApi();
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

  describe('SolutionApi', function() {
    describe('addOrReplaceParameterGroups', function() {
      it('should call addOrReplaceParameterGroups successfully', function(done) {
        //uncomment below and update the code to test addOrReplaceParameterGroups
        //instance.addOrReplaceParameterGroups(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('addOrReplaceParameters', function() {
      it('should call addOrReplaceParameters successfully', function(done) {
        //uncomment below and update the code to test addOrReplaceParameters
        //instance.addOrReplaceParameters(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('addOrReplaceRunTemplates', function() {
      it('should call addOrReplaceRunTemplates successfully', function(done) {
        //uncomment below and update the code to test addOrReplaceRunTemplates
        //instance.addOrReplaceRunTemplates(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('createSolution', function() {
      it('should call createSolution successfully', function(done) {
        //uncomment below and update the code to test createSolution
        //instance.createSolution(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('deleteSolution', function() {
      it('should call deleteSolution successfully', function(done) {
        //uncomment below and update the code to test deleteSolution
        //instance.deleteSolution(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('deleteSolutionRunTemplate', function() {
      it('should call deleteSolutionRunTemplate successfully', function(done) {
        //uncomment below and update the code to test deleteSolutionRunTemplate
        //instance.deleteSolutionRunTemplate(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('downloadRunTemplateHandler', function() {
      it('should call downloadRunTemplateHandler successfully', function(done) {
        //uncomment below and update the code to test downloadRunTemplateHandler
        //instance.downloadRunTemplateHandler(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('findAllSolutions', function() {
      it('should call findAllSolutions successfully', function(done) {
        //uncomment below and update the code to test findAllSolutions
        //instance.findAllSolutions(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('findSolutionById', function() {
      it('should call findSolutionById successfully', function(done) {
        //uncomment below and update the code to test findSolutionById
        //instance.findSolutionById(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('removeAllRunTemplates', function() {
      it('should call removeAllRunTemplates successfully', function(done) {
        //uncomment below and update the code to test removeAllRunTemplates
        //instance.removeAllRunTemplates(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('removeAllSolutionParameterGroups', function() {
      it('should call removeAllSolutionParameterGroups successfully', function(done) {
        //uncomment below and update the code to test removeAllSolutionParameterGroups
        //instance.removeAllSolutionParameterGroups(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('removeAllSolutionParameters', function() {
      it('should call removeAllSolutionParameters successfully', function(done) {
        //uncomment below and update the code to test removeAllSolutionParameters
        //instance.removeAllSolutionParameters(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('updateSolution', function() {
      it('should call updateSolution successfully', function(done) {
        //uncomment below and update the code to test updateSolution
        //instance.updateSolution(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('updateSolutionRunTemplate', function() {
      it('should call updateSolutionRunTemplate successfully', function(done) {
        //uncomment below and update the code to test updateSolutionRunTemplate
        //instance.updateSolutionRunTemplate(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('uploadRunTemplateHandler', function() {
      it('should call uploadRunTemplateHandler successfully', function(done) {
        //uncomment below and update the code to test uploadRunTemplateHandler
        //instance.uploadRunTemplateHandler(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
  });

}));
