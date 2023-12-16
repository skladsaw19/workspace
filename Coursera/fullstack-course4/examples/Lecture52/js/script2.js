(function (window) {
  var johnGreeter = {};
  johnGreeter.name = "John";
  var greeting = "Hi ";
  johnGreeter.sayHi = function () {
    console.log(greeting + johnGreeter.name);
  }

  window.johnGreeter = johnGreeter;

})(window);



(function () {
  var gapGreeter = {};
  gapGreeter.name = "GAP";
  var greeting = "Sawadee Kah! ";
  gapGreeter.saySawadee = function () {
    console.log(greeting + gapGreeter.name);
  }  

window.gapGreeter = gapGreeter;

})(window);