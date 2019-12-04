function myFunction() {
    var x = document.getElementById("myTopnav");
    if (x.className === "topnav") {
        x.className += " responsive";
    } else {
        x.className = "topnav";
    }
}

console.log("сумма массива");
var test = [1, 1, 1, [1, 1, [1, 1], 1], 1];

function arrSum(array, i = 0) {
  if (isFinite(array))
    return Number(array);
  else if (typeof array == "object" && i < array.length) // верно только если array - массив (имеет свойство length)
    return arrSum(array[i]) + arrSum(array, i + 1);
  return 0;
}

console.log(arrSum(test));


console.log("сумма вложенностей");

var In = [
    [1, [ 2, [ 3 ] ]],
    ["Rustam", 25, 3, 4],
    ["Ruslan", 35],
    ["Aleksey", 29],
    ["Vovan", 23]
];

Array.prototype.max = function() {
    return Math.max.apply(null, this);
  };

function f1(item, level = 0){ 
    if (item instanceof Array){
        return item.map(function(value, index){
            return f1(value, level + 1)
        }).max() - (level > 0 ? 0 : 1) // Если главный массив не считаем
    }
    return level;
}

console.log(f1(In))