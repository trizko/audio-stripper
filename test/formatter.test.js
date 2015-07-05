var Formatter = require('../server/helpers/formatter.js');
var assert = require('chai').assert;
var expect = require('chai').expect;

describe('Formatter helper', function(){

  describe('method', function(){

    describe('terminalFriendly()', function(){

      it('should exist', function(){
        assert.doesNotThrow(function(){
          Formatter.terminalFriendly('');
        });
      });

      it('should remove newlines (\\n) from string', function(){
        expect(Formatter.terminalFriendly('\n')).to.equal('');
      });

      it('should escape spaces: " "', function(){
        expect(Formatter.terminalFriendly(' ')).to.equal('\\ ');
      });

      it('should escape apostrophes: "\'"', function(){
        expect(Formatter.terminalFriendly('\'')).to.equal('\\\'');
      });

      it('should escape parentheses: "()"', function(){
        expect(Formatter.terminalFriendly('(')).to.equal('\\\(');
        expect(Formatter.terminalFriendly(')')).to.equal('\\\)');
      });

      it('should escape ampersands: "&"', function(){
        expect(Formatter.terminalFriendly('&')).to.equal('\\\&');
      });

    });

  });

});
