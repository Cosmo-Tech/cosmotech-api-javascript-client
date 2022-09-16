/**
 * Cosmo Tech Plaform API
 * Cosmo Tech Platform API
 *
 * The version of the OpenAPI document: 1.0.8-SNAPSHOT
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
    instance = new CosmotechApi.DatasetApi();
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

  describe('DatasetApi', function() {
    describe('addOrReplaceDatasetCompatibilityElements', function() {
      it('should call addOrReplaceDatasetCompatibilityElements successfully', function(done) {
        //uncomment below and update the code to test addOrReplaceDatasetCompatibilityElements
        //instance.addOrReplaceDatasetCompatibilityElements(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('copyDataset', function() {
      it('should call copyDataset successfully', function(done) {
        //uncomment below and update the code to test copyDataset
        //instance.copyDataset(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('createDataset', function() {
      it('should call createDataset successfully', function(done) {
        //uncomment below and update the code to test createDataset
        //instance.createDataset(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('deleteDataset', function() {
      it('should call deleteDataset successfully', function(done) {
        //uncomment below and update the code to test deleteDataset
        //instance.deleteDataset(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('findAllDatasets', function() {
      it('should call findAllDatasets successfully', function(done) {
        //uncomment below and update the code to test findAllDatasets
        //instance.findAllDatasets(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('findDatasetById', function() {
      it('should call findDatasetById successfully', function(done) {
        //uncomment below and update the code to test findDatasetById
        //instance.findDatasetById(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('removeAllDatasetCompatibilityElements', function() {
      it('should call removeAllDatasetCompatibilityElements successfully', function(done) {
        //uncomment below and update the code to test removeAllDatasetCompatibilityElements
        //instance.removeAllDatasetCompatibilityElements(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('searchDatasets', function() {
      it('should call searchDatasets successfully', function(done) {
        //uncomment below and update the code to test searchDatasets
        //instance.searchDatasets(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('updateDataset', function() {
      it('should call updateDataset successfully', function(done) {
        //uncomment below and update the code to test updateDataset
        //instance.updateDataset(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
  });

}));
