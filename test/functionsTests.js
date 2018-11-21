const library = require("../src/functionsLibrary.js")
const {map,filter,reduce} = library;
const assert = require("assert");

const square = function(number){return number*number}

const identity = function(element){return element}

const truthy = function(element){return 1}

const falsy = function(element){return 0}

const decrement = function(number){return number - 1}

const isOdd = function(number){return number%2 != 0}

const isEven = function(number){return number%2 == 0}

const sum = function(number1,number2){return number1+number2}

const greater = function(number1,number2){return Math.max(number1,number2)}

describe("Array Functions",function(){
  describe("Map",function(){
    it("should return an empty array for an empty array input",function(){
      assert.deepStrictEqual(map(identity,[]),[]);
    });

    it("should return a single element array for a single element array",function() {
      assert.deepStrictEqual(map(square,[4]),[16]);
    });

    it("should return the same length array as that of input array",function() {
      assert.deepStrictEqual(map(identity,[1,2,3]),[1,2,3]);
    });

    it("should return a single element for a zero input",function(){
      assert.deepStrictEqual(map(decrement,[0]),[-1]);
    });
  });

  describe("Filter", function(){
    it("should return an empty array for a empty array input",function(){
      assert.deepStrictEqual(filter(isOdd,[]),[]);
    });

    it("should return array as it is ",function(){
      assert.deepStrictEqual(filter(isEven,[2]),[2]);
    });

    it("should return array of even elements",function(){
      assert.deepStrictEqual(filter(isEven,[1,2,3,4,5,6]),[2,4,6]);
    });

    it("should return empty array for an array containing zero",function(){
      assert.deepStrictEqual(filter(isOdd,[0]),[]);
    });

    it("should return empty array for an element array of which returns false for filter",function(){
      assert.deepStrictEqual(filter(falsy,[1,2,3,4,5,6]),[]);
    });

    it("should return the same element array for an input of multiple element which returns true for each element",function() {
      assert.deepStrictEqual(filter(truthy,[1,2,3,4,5,6]),[1,2,3,4,5,6]);
    });
  });

  describe("reduce", function(){
    it("should return an empty array for a empty array input",function(){
      assert.equal(reduce(greater,[]));
      assert.equal(reduce(sum,[]));
    });

    it("should return the array element when single element array is given",function(){
      assert.equal(reduce(greater,[3]),3);
      assert.equal(reduce(sum,[3]),3);
    });

    it("should return reduced value when arrray with multiple elements is given",function(){
      assert.equal(reduce(sum,[1,2,3]),6);
      assert.equal(reduce(greater,[1,2,3]),3);
      assert.equal(reduce(sum,[6,5]),11);
    });

    it("should return the initial value as it is when given array containing zero",function(){
      assert.equal(reduce(sum,[0],7),7);
      assert.equal(reduce(greater,[0],7),7);
      assert.equal(reduce(greater,[0],0),0);
    });
  });
});
