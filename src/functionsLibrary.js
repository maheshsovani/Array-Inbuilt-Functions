const mapper = function (functionToApplied,array){
  let outputArray = [];
  for(let element of array){
    outputArray.push(functionToApplied (element));
  }
  return outputArray;
}

const filterer = function (functionToApplied,array){
  let outputArray = [];
  for(let element of array){
    if(functionToApplied (element)){
      outputArray.push(element)
    }
  }
  return outputArray;
}


const reducer = function (functionToApplied,array,initialValue = 0){
  let result = 0;
  for(let element of array){
    result = functionToApplied (initialValue,element)
    initialValue = result;
  }
  return result;
}

exports.mapper = mapper;
exports.filterer = filterer;
exports.reducer = reducer;
