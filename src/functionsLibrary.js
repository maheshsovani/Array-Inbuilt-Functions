const mapper = function (functionToApplied,array){
  let outputArray = [];
  for(let index in array){
    outputArray.push(functionToApplied (array[index]));
  }
  return outputArray;
}

const filterer = function (functionToApplied,array){
  let outputArray = [];
  for(let index in array){
    if(functionToApplied (array[index])){
      outputArray.push(array[index])
    }
  }
  return outputArray;
}

exports.mapper = mapper;
exports.filterer = filterer;
