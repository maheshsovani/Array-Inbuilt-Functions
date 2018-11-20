const mapper = function (functionToApplied,array){
  let outputArray = [];
  for(let index in array){
    outputArray.push(functionToApplied (array[index]));
  }
  return outputArray;
}

exports.mapper = mapper;
