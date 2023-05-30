/**
 * Cosmo Tech Platform API
 * Cosmo Tech Platform API
 *
 * The version of the OpenAPI document: 2.4.4-SNAPSHOT
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
    instance = new CosmotechApi.ValidatorApi();
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

  describe('ValidatorApi', function() {
    describe('createValidator', function() {
      it('should call createValidator successfully', function(done) {
        //uncomment below and update the code to test createValidator
        //instance.createValidator(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('createValidatorRun', function() {
      it('should call createValidatorRun successfully', function(done) {
        //uncomment below and update the code to test createValidatorRun
        //instance.createValidatorRun(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('deleteValidator', function() {
      it('should call deleteValidator successfully', function(done) {
        //uncomment below and update the code to test deleteValidator
        //instance.deleteValidator(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('deleteValidatorRun', function() {
      it('should call deleteValidatorRun successfully', function(done) {
        //uncomment below and update the code to test deleteValidatorRun
        //instance.deleteValidatorRun(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('findAllValidatorRuns', function() {
      it('should call findAllValidatorRuns successfully', function(done) {
        //uncomment below and update the code to test findAllValidatorRuns
        //instance.findAllValidatorRuns(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('findAllValidators', function() {
      it('should call findAllValidators successfully', function(done) {
        //uncomment below and update the code to test findAllValidators
        //instance.findAllValidators(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('findValidatorById', function() {
      it('should call findValidatorById successfully', function(done) {
        //uncomment below and update the code to test findValidatorById
        //instance.findValidatorById(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('findValidatorRunById', function() {
      it('should call findValidatorRunById successfully', function(done) {
        //uncomment below and update the code to test findValidatorRunById
        //instance.findValidatorRunById(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('runValidator', function() {
      it('should call runValidator successfully', function(done) {
        //uncomment below and update the code to test runValidator
        //instance.runValidator(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
  });

}));
