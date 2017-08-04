export function sortObj(obj, order) {
  var arr = [];
  var i;
  var ret = {};

  for (var key in obj) {
    arr.push(key);
  }

  arr.sort(function(a, b) {
    return a.toLowerCase().localeCompare(b.toLowerCase());
  });

  if (order === 'desc') {
    for (i = arr.length - 1; i >= 0; i--) {
      ret[ arr[i] ] = obj[ arr[i] ];
    }
  } else {
    for (i = 0; i < arr.length; i++) {
      ret[ arr[i] ] = obj[ arr[i] ];
    }
  }

  return ret;
};
