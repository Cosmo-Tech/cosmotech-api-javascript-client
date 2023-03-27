/**
 * Cosmo Tech Platform API
 * Cosmo Tech Platform API
 *
 * The version of the OpenAPI document: 2.3.6-dev
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
    instance = new CosmotechApi.TwingraphApi();
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

  describe('TwingraphApi', function() {
    describe('callDelete', function() {
      it('should call callDelete successfully', function(done) {
        //uncomment below and update the code to test callDelete
        //instance.callDelete(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('findAllTwingraphs', function() {
      it('should call findAllTwingraphs successfully', function(done) {
        //uncomment below and update the code to test findAllTwingraphs
        //instance.findAllTwingraphs(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('getGraphMetaData', function() {
      it('should call getGraphMetaData successfully', function(done) {
        //uncomment below and update the code to test getGraphMetaData
        //instance.getGraphMetaData(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('importGraph', function() {
      it('should call importGraph successfully', function(done) {
        //uncomment below and update the code to test importGraph
        //instance.importGraph(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('jobStatus', function() {
      it('should call jobStatus successfully', function(done) {
        //uncomment below and update the code to test jobStatus
        //instance.jobStatus(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('query', function() {
      it('should call query successfully', function(done) {
        //uncomment below and update the code to test query
        //instance.query(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
  });

}));
