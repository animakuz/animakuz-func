
var baseFunc = {

  isFunction: function(objToCheck) {
    //check if variable is function
    //Source - Alex Grande - StackOverflow  - Answer 09/09/11
    var getType = {};
    return objToCheck && getType.toString.call(objToCheck) === '[object Function]';
  },

  getRandomInt: function(min, max) {
    //get random integer between a specific range
    //Source - Ionuț G. Stan - StackOverflow - Answer 06/10/09
    return Math.floor(Math.random() * (max - min + 1)) + min;
  },

  floorTrunc: function(num, numDecimals) {
    //truncate decimals to floor
    var strNum = String(num);
    var pointPos = strNum.indexOf('.');
    strNum = strNum.slice(0, pointPos + numDecimals + 1);
    return parseFloat(strNum);
  },

  compArrs: function(arrA, arrB) {
    //compare two arrays A and B - return true if they are equal in items and length
    var lenA = arrA.length;
    var lenB = arrB.length;
    var ind  = lenB;

    if (lenA !== lenB) {
      return false;
    } else {      
      arrA = arrA.sort();
      arrB = arrB.sort();

      while(ind--) {
        if (arrA[ind] !== arrB[ind]) {
          return false;
        }
      }
    }

    return true;
  },  
 
  compSubArr: function(arrSub, arrCont) {
    //check if array A is a sub array of B
    //**--this function doesn't make sense.
    //Need to introduce testing with jasmine to show that this doesn't
    //work for certain object types (like functions) Also it doesn't
    //look like it checks for a value that is checked against two
    //similar values in the sub or containing array
    //**-- PLEASE FIX **--

    var lenSub  = arrSub.length;
    var lenCont = arrCont.length;

    return true;
  },
  
  empty: function(element) {
    //delete all child nodes from element
    //Source - Gabriel McAdams - StackOverflow - Answer 17/10/10

    while (element.firstChild) {
      element.removeChild(element.firstChild);
    }
  },

  classCheck: function(element, classesToCheck) {
    //check if an element has a certain class or multiple classes
    var currentClasses = element.className.trim().replace(/\s+/g,' ') + ' ';
    var newClasses     = classesToCheck.replace(/\s+/g,'').split(",");
    var hasClass       = true;
    var ind            = newClasses.length;

    while(ind--) {
      var testTerm = new RegExp(newClasses[ind] +' ');

      if (!testTerm.test(currentClasses)) {
        hasClass = false;
        break;
      }  
    }
 
    return hasClass;
  },

  addClass: function(element, classesToAdd) {
    //add a class or multiple classes to an element
    var newClassName = element.className.trim().replace(/\s+/g,' ') + ' ';
    var newClasses   = classesToAdd.split(/\s+/);		
    var len          = newClasses.length;
    var ind          = 0;

    while(ind < len) { 
      var testTerm = new RegExp(newClasses[ind] + ' ');

      if (!testTerm.test(newClassName)) {
        //current className doesn't contain class - add it
        newClassName += newClasses[ind] + ' ';			
      }  
 
      ind++;
    }  

    element.className = newClassName.trim();
  },

  removeClass: function(element, classesToRemove) { 
    //remove a class or multiple classes from an element
    var newClass = element.className.trim().replace(/\s+/g,' ') + ' ';
    var classes  = classesToRemove.split(/\s+/);
    var ind      = classes.length;
     
    while(ind--) { 
      //remove class
      newClass = newClass.replace(classes[ind] + ' ','');
    }  

    element.className = newClass.trim();
  
  },

  toggleClass: function(element, classesToToggle) {
    //toggle class or multiple classes on and off 
    var newClassName = element.className.trim().replace(/\s+/g,' ') + ' ';
    var classes      = classesToToggle.split(/\s+/);
    var len          = classes.length;
    var ind          = 0;
  
    while (ind < len) {
      var testTerm = new RegExp(classes[ind] + ' ');
    
      if (testTerm.test(newClassName)) {
        //class exists - remove it
        newClassName = newClassName.replace(classes[ind] + ' ', '');
      } else {
        //class doesn't exist - add it
        newClassName += ' ' + classes[ind];
      }

      ind++;
    }
  
    element.className = newClassName.trim();               

  },

  modifyMultiple: function(elements, process) {
    //modify multiple elements with similar function
    var ind = elements.length;
  
    while(ind--) {
      process(elements[ind]);
    }
  },

  bindMultiple: function(elements, event, handler) {
    //bind similar event to multiple objects
    var ind = elements.length;

    while(ind--) {
      elements[ind][event] = function(event) {
        handler(this, event);
      };
    }
  }

};


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
//console.log(baseFunc.compSubArrs([1,2,3],[1,2,3,4,5]));

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

	
