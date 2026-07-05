Array.prototype.myFilter = function (callbackFn, thisArg) {
  const result = [];
  for (let i=0;i<this.length;i++) {

    if(!(i in this)) {
      continue;
    }

    if(callbackFn.call(thisArg, this[i], i, this)) {
      result.push(this[i]);
    }
  }

  return result;
};
