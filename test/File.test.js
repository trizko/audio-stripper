var File = require('../server/models/File.js');
var assert = require('chai').assert;
var expect = require('chai').expect;

describe('File model', function(){

  var file;
  beforeEach(function(){
    file = new File();
  });

  describe('properties', function(){

    it('should include all filenames and paths', function(){
        expect(file).to.have.property('filename');
        expect(file).to.have.property('filename_terminal');
        expect(file).to.have.property('filepath');
        expect(file).to.have.property('musicFilepath');
        expect(file).to.have.property('musicFilename');
        expect(file).to.have.property('musicFilename_terminal');
    });

  });

  describe('method', function(){

    describe('construct()', function(){

      it('should fill in all properties with valid values', function(){
        
      });

    });

  });

});
