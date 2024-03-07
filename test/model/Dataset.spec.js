/**
 * Cosmo Tech Platform API
 * Cosmo Tech Platform API
 *
 * The version of the OpenAPI document: 3.1.3-SNAPSHOT
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
    instance = new CosmotechApi.Dataset();
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

  describe('Dataset', function() {
    it('should create an instance of Dataset', function() {
      // uncomment below and update the code to test Dataset
      //var instance = new CosmotechApi.Dataset();
      //expect(instance).to.be.a(CosmotechApi.Dataset);
    });

    it('should have the property id (base name: "id")', function() {
      // uncomment below and update the code to test the property id
      //var instance = new CosmotechApi.Dataset();
      //expect(instance).to.be();
    });

    it('should have the property name (base name: "name")', function() {
      // uncomment below and update the code to test the property name
      //var instance = new CosmotechApi.Dataset();
      //expect(instance).to.be();
    });

    it('should have the property description (base name: "description")', function() {
      // uncomment below and update the code to test the property description
      //var instance = new CosmotechApi.Dataset();
      //expect(instance).to.be();
    });

    it('should have the property ownerId (base name: "ownerId")', function() {
      // uncomment below and update the code to test the property ownerId
      //var instance = new CosmotechApi.Dataset();
      //expect(instance).to.be();
    });

    it('should have the property ownerName (base name: "ownerName")', function() {
      // uncomment below and update the code to test the property ownerName
      //var instance = new CosmotechApi.Dataset();
      //expect(instance).to.be();
    });

    it('should have the property organizationId (base name: "organizationId")', function() {
      // uncomment below and update the code to test the property organizationId
      //var instance = new CosmotechApi.Dataset();
      //expect(instance).to.be();
    });

    it('should have the property parentId (base name: "parentId")', function() {
      // uncomment below and update the code to test the property parentId
      //var instance = new CosmotechApi.Dataset();
      //expect(instance).to.be();
    });

    it('should have the property linkedWorkspaceIdList (base name: "linkedWorkspaceIdList")', function() {
      // uncomment below and update the code to test the property linkedWorkspaceIdList
      //var instance = new CosmotechApi.Dataset();
      //expect(instance).to.be();
    });

    it('should have the property twingraphId (base name: "twingraphId")', function() {
      // uncomment below and update the code to test the property twingraphId
      //var instance = new CosmotechApi.Dataset();
      //expect(instance).to.be();
    });

    it('should have the property main (base name: "main")', function() {
      // uncomment below and update the code to test the property main
      //var instance = new CosmotechApi.Dataset();
      //expect(instance).to.be();
    });

    it('should have the property creationDate (base name: "creationDate")', function() {
      // uncomment below and update the code to test the property creationDate
      //var instance = new CosmotechApi.Dataset();
      //expect(instance).to.be();
    });

    it('should have the property refreshDate (base name: "refreshDate")', function() {
      // uncomment below and update the code to test the property refreshDate
      //var instance = new CosmotechApi.Dataset();
      //expect(instance).to.be();
    });

    it('should have the property sourceType (base name: "sourceType")', function() {
      // uncomment below and update the code to test the property sourceType
      //var instance = new CosmotechApi.Dataset();
      //expect(instance).to.be();
    });

    it('should have the property source (base name: "source")', function() {
      // uncomment below and update the code to test the property source
      //var instance = new CosmotechApi.Dataset();
      //expect(instance).to.be();
    });

    it('should have the property ingestionStatus (base name: "ingestionStatus")', function() {
      // uncomment below and update the code to test the property ingestionStatus
      //var instance = new CosmotechApi.Dataset();
      //expect(instance).to.be();
    });

    it('should have the property twincacheStatus (base name: "twincacheStatus")', function() {
      // uncomment below and update the code to test the property twincacheStatus
      //var instance = new CosmotechApi.Dataset();
      //expect(instance).to.be();
    });

    it('should have the property queries (base name: "queries")', function() {
      // uncomment below and update the code to test the property queries
      //var instance = new CosmotechApi.Dataset();
      //expect(instance).to.be();
    });

    it('should have the property tags (base name: "tags")', function() {
      // uncomment below and update the code to test the property tags
      //var instance = new CosmotechApi.Dataset();
      //expect(instance).to.be();
    });

    it('should have the property connector (base name: "connector")', function() {
      // uncomment below and update the code to test the property connector
      //var instance = new CosmotechApi.Dataset();
      //expect(instance).to.be();
    });

    it('should have the property fragmentsIds (base name: "fragmentsIds")', function() {
      // uncomment below and update the code to test the property fragmentsIds
      //var instance = new CosmotechApi.Dataset();
      //expect(instance).to.be();
    });

    it('should have the property validatorId (base name: "validatorId")', function() {
      // uncomment below and update the code to test the property validatorId
      //var instance = new CosmotechApi.Dataset();
      //expect(instance).to.be();
    });

    it('should have the property compatibility (base name: "compatibility")', function() {
      // uncomment below and update the code to test the property compatibility
      //var instance = new CosmotechApi.Dataset();
      //expect(instance).to.be();
    });

    it('should have the property security (base name: "security")', function() {
      // uncomment below and update the code to test the property security
      //var instance = new CosmotechApi.Dataset();
      //expect(instance).to.be();
    });

  });

}));
