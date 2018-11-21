const library = require("../src/functionsLibrary.js")
const {mapper,filterer,reducer} = library;
const assert = require("assert");

const addFive = function(number){return number+5}

const square = function(number){return number*number}

const identity = function(element){return element}

const decrement = function(number){return number - 1}

const isOdd = function(number){return number%2 != 0}

const perfectSquare = function(number){
  return  Math.sqrt(number)*Math.sqrt(number) == number;
}

const sum = function(number1,number2){return number1+number2}

const greater = function(number1,number2){return Math.max(number1,number2)}

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

describe("Filter function", function(){
  it("should return empty array",function(){
    assert.deepStrictEqual(filterer(isOdd,[]),[]);
  });

  it("should return array of odd numbers in given array",function(){
    assert.deepStrictEqual(filterer(isOdd,[1,2,3]),[1,3]);
  });

  it("should return empty array",function(){
    assert.deepStrictEqual(filterer(perfectSquare,[]),[]);
  });

  it("should return array of perfect square numbers in given array",function(){
    assert.deepStrictEqual(filterer(perfectSquare,[1,2,4,16]),[1,4,16]);
  });
});

describe("reducer function", function(){
  it("should return greatest number in given array",function(){
  assert.deepStrictEqual(reducer(greater,[1,2,3]),3);
  });

  it("should return greatest number in given array",function(){
  assert.deepStrictEqual(reducer(greater,[1,2,3],7),7);
  });

  it("should return sum of all array elements ",function(){
  assert.deepStrictEqual(reducer(sum,[1,2,3]),6);
  });

  it("should return sum of all array elements ",function(){
  assert.deepStrictEqual(reducer(sum,[1,2,3],7),13);
  });
});
