/**
 * Cosmo Tech Platform API
 * Cosmo Tech Platform API
 *
 * The version of the OpenAPI document: 3.0.16-SNAPSHOT
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
    describe('addDatasetAccessControl', function() {
      it('should call addDatasetAccessControl successfully', function(done) {
        //uncomment below and update the code to test addDatasetAccessControl
        //instance.addDatasetAccessControl(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
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
    describe('createSubDataset', function() {
      it('should call createSubDataset successfully', function(done) {
        //uncomment below and update the code to test createSubDataset
        //instance.createSubDataset(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('createTwingraphEntities', function() {
      it('should call createTwingraphEntities successfully', function(done) {
        //uncomment below and update the code to test createTwingraphEntities
        //instance.createTwingraphEntities(function(error) {
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
    describe('deleteTwingraphEntities', function() {
      it('should call deleteTwingraphEntities successfully', function(done) {
        //uncomment below and update the code to test deleteTwingraphEntities
        //instance.deleteTwingraphEntities(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('downloadTwingraph', function() {
      it('should call downloadTwingraph successfully', function(done) {
        //uncomment below and update the code to test downloadTwingraph
        //instance.downloadTwingraph(function(error) {
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
    describe('getDatasetAccessControl', function() {
      it('should call getDatasetAccessControl successfully', function(done) {
        //uncomment below and update the code to test getDatasetAccessControl
        //instance.getDatasetAccessControl(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('getDatasetSecurity', function() {
      it('should call getDatasetSecurity successfully', function(done) {
        //uncomment below and update the code to test getDatasetSecurity
        //instance.getDatasetSecurity(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('getDatasetSecurityUsers', function() {
      it('should call getDatasetSecurityUsers successfully', function(done) {
        //uncomment below and update the code to test getDatasetSecurityUsers
        //instance.getDatasetSecurityUsers(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('getDatasetTwingraphStatus', function() {
      it('should call getDatasetTwingraphStatus successfully', function(done) {
        //uncomment below and update the code to test getDatasetTwingraphStatus
        //instance.getDatasetTwingraphStatus(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('getTwingraphEntities', function() {
      it('should call getTwingraphEntities successfully', function(done) {
        //uncomment below and update the code to test getTwingraphEntities
        //instance.getTwingraphEntities(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('refreshDataset', function() {
      it('should call refreshDataset successfully', function(done) {
        //uncomment below and update the code to test refreshDataset
        //instance.refreshDataset(function(error) {
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
    describe('removeDatasetAccessControl', function() {
      it('should call removeDatasetAccessControl successfully', function(done) {
        //uncomment below and update the code to test removeDatasetAccessControl
        //instance.removeDatasetAccessControl(function(error) {
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
    describe('setDatasetDefaultSecurity', function() {
      it('should call setDatasetDefaultSecurity successfully', function(done) {
        //uncomment below and update the code to test setDatasetDefaultSecurity
        //instance.setDatasetDefaultSecurity(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('twingraphBatchQuery', function() {
      it('should call twingraphBatchQuery successfully', function(done) {
        //uncomment below and update the code to test twingraphBatchQuery
        //instance.twingraphBatchQuery(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('twingraphBatchUpdate', function() {
      it('should call twingraphBatchUpdate successfully', function(done) {
        //uncomment below and update the code to test twingraphBatchUpdate
        //instance.twingraphBatchUpdate(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('twingraphQuery', function() {
      it('should call twingraphQuery successfully', function(done) {
        //uncomment below and update the code to test twingraphQuery
        //instance.twingraphQuery(function(error) {
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
    describe('updateDatasetAccessControl', function() {
      it('should call updateDatasetAccessControl successfully', function(done) {
        //uncomment below and update the code to test updateDatasetAccessControl
        //instance.updateDatasetAccessControl(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('updateTwingraphEntities', function() {
      it('should call updateTwingraphEntities successfully', function(done) {
        //uncomment below and update the code to test updateTwingraphEntities
        //instance.updateTwingraphEntities(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('uploadTwingraph', function() {
      it('should call uploadTwingraph successfully', function(done) {
        //uncomment below and update the code to test uploadTwingraph
        //instance.uploadTwingraph(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
  });

}));
