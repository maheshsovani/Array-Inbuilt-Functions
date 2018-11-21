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


const reduce = function (reducer,array,initialValue = 0){
  let startingIndex = 0;
  if(!initialValue){
    initialValue = array[0];
    startingIndex = 1;
  }
  for(let index = startingIndex ; index<array.length ; index++){
    initialValue = reducer(initialValue,array[index])
  }
  return initialValue;
}

exports.map = map;
exports.filter = filter;
exports.reduce = reduce;
