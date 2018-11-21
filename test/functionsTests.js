const library = require("../src/functionsLibrary.js")
const {map,filter,reduce} = library;
const assert = require("assert");

const square = function(number){return number*number}

const identity = function(element){return element}

const returnOne = function(element){return 1}

const returnZero = function(element){return 0}

const decrement = function(number){return number - 1}

const isOdd = function(number){return number%2 != 0}

const sum = function(number1,number2){return number1+number2}

const greater = function(number1,number2){return Math.max(number1,number2)}

describe("Map function",function(){
  it("empty array should return empty array",function(){
    assert.deepStrictEqual(map(identity,[]),[]);
  });

  it("array with one element should return mapped same element",function(){
    assert.deepStrictEqual(map(square,[4]),[16]);
  });

  it("array with multiple element should return mapped elements array",function(){
    assert.deepStrictEqual(map(identity,[1,2,3]),[1,2,3]);
  });

  it("array containing zero should return array with with zero mapped to mapper",function(){
    assert.deepStrictEqual(map(decrement,[0]),[-1]);
  });
});

describe("Filter function", function(){
  it("given empty array should return empty array",function(){
    assert.deepStrictEqual(filter(isOdd,[]),[]);
  });

  it("given array with one element should return empty array",function(){
    assert.deepStrictEqual(filter(isOdd,[2]),[]);
  });

  it("given array with multiple element should return array with multiple element",function(){
    assert.deepStrictEqual(filter(isOdd,[1,2,3,4,5,6]),[1,3,5]);
  });

  it("given array with zero should return empty array",function(){
    assert.deepStrictEqual(filter(isOdd,[0]),[]);
  });

  it("given array with multiple elements should return empty array",function(){
    assert.deepStrictEqual(filter(returnZero,[1,2,3,4,5,6]),[]);
  });

  it("given array with multiple elements should return given array as it is",function(){
    assert.deepStrictEqual(filter(returnOne,[1,2,3,4,5,6]),[1,2,3,4,5,6]);
  });
});

describe("reduce function", function(){
  it("empty array should return nothing",function(){
  assert.equal(reduce(greater,[]));
  });

  it("array with single element should return the containing element",function(){
  assert.equal(reduce(greater,[3]),3);
  });

  it("array with multiple elements should return reduced value ",function(){
  assert.equal(reduce(sum,[1,2,3]),6);
  assert.equal(reduce(sum,[6]),6);
  });

  it("array with zero as an input",function(){
  assert.equal(reduce(sum,[0],7),7);
  assert.equal(reduce(sum,[0],0),0);
  assert.equal(reduce(sum,[0,4],0),4);
  assert.equal(reduce(sum,[0,4],4),8);
  });
});
