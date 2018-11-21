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
  let result = 0;
  for(let element of array){
    result = reducer(initialValue,element)
    initialValue = result;
  }
  return result;
}

exports.map = map;
exports.filter = filter;
exports.reduce = reduce;
