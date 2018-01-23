var recipes = {};

var object={ prop: 1};


function updateObjectWithKeyAndValue(object, key, value){
  return Object.assign({}, object, {key: value});
}

function destructivelyUpdateObjectWithKeyAndValue(object, key, value){
  object[key]=value;
  return object;
}

function deleteFromObjectByKey(object, key){
  var obj = { prop: 1 };
  obj = Object.assign({}, object, {'prop':1});
  delete obj.prop;
  return obj;
}

function destructivelyDeleteFromObjectByKey(object, key){
   var obj = { prop: 1 };
   obj = delete object.prop;
   return obj;
}

