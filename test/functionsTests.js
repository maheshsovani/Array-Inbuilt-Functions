const library = require("../src/functionsLibrary.js")
const {mapper,filterer,reducer} = library;
const assert = require("assert");

const addFive = function(number){return number+5}

const square = function(number){return number*number}

const identity = function(element){return element}

const decrement = function(number){return number - 1}

describe("Mapper function",function(){
  it("should return array by adding five to element",function(){
    assert.deepStrictEqual(mapper(addFive,[1,2,3]),[6,7,8]);
  });

  it("should return array by squaring element",function(){
    assert.deepStrictEqual(mapper(square,[1,2,3]),[1,4,9]);
  });

  it("should return given element",function(){
    assert.deepStrictEqual(mapper(identity,[1,2,3]),[1,2,3]);
  });

  it("should return array by reducing one from each element",function(){
    assert.deepStrictEqual(mapper(decrement,[1,2,3]),[0,1,2]);
  });
});


