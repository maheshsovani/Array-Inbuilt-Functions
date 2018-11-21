const map = function (mapper,array){
  let outputArray = [];
  for(let element of array){
    outputArray.push(mapper (element));
  }
  return outputArray;
}

const filter = function (predicate,array){
  let outputArray = [];
  for(let element of array){
    if(predicate (element)){
      outputArray.push(element)
    }
  }
  return outputArray;
}


const reduce = function (reducer,array,initialValue){
  let result = initialValue;
  let startingIndex = 0;
  if(initialValue == undefined){
    result = array[0];
    startingIndex = 1;
  }
  for(let index = startingIndex ; index<array.length ; index++){
    result = reducer(result,array[index])
  }
  return result;
}

exports.map = map;
exports.filter = filter;
exports.reduce = reduce;
