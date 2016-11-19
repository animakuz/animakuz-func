//--TESTS--(include and use jasmine instead for better testing)

var text0 = document.getElementById("text0");
var text1 = document.getElementById("text1");
var text2 = document.getElementById("text2");
var text3 = document.getElementById("text3");
var text4 = document.getElementById("text4");

//isFunction
console.log("Check if string 'marcus' is a function: " + baseFunc.isFunction("marcus"));

//getRandomInt
console.log("Random integer from 1 to 10: " + baseFunc.getRandomInt(1,10));

//floorTrunc
console.log("1.2345 truncted to floor with 2 decimal places: " + baseFunc.floorTrunc(1.2345, 2));

//compArrs
console.log("Check if array [1,2,3] = ['a','b','c'] : " + baseFunc.compArrs([1,2,3],["a","b","c"]));

//compSubArrs
console.log("Check if array [1,2,3] is a sub array of [5,2,1,3,4]: " + baseFunc.compSubArr([1,2,3],[5,2,1,3,4]));
console.log("Check if array [1,2,9] is a sub array of [5,2,1,3,4]: " + baseFunc.compSubArr([1,2,9],[5,2,1,3,4]));
console.log("Check if array [1,3,3] is a sub array of [5,2,1,3,4]: " + baseFunc.compSubArr([1,3,3],[5,2,1,3,4]));

//empty
baseFunc.empty(text0);

//classCheck
console.log("Testing if text1 has class 'red': " + baseFunc.classCheck(text1, "red"));

//remove class
baseFunc.removeClass(text2, "red");

//addClass
baseFunc.addClass(text3, "big");

//toggleClass
baseFunc.toggleClass(text4, "red   big   hi-lite");

//modifyMultiple
baseFunc.modifyMultiple([text1, text2, text3, text4], function(element) { baseFunc.addClass(element,"border"); });

//bindMultiple
baseFunc.bindMultiple([text1, text2, text3, text4], "onclick",  function(element) { alert(element.innerHTML); });

	
