// Event handling
document.addEventListener("DOMContentLoaded",
  function (event) {
    
    function sayHello (event) {
      var name = document.getElementById("name").value;
      var message = "<h2><b>Hello " + name + "!</b></h2>";

      document.getElementById("content").innerHTML = message;

      // Make the title name and text disappear
      document.getElementById("title").innerHTML = "";
      document.querySelector("h1").innerHTML = "";
    }

    // Unobtrusive event binding
    document.querySelector("button")
      .addEventListener("click", sayHello);
  }
);



// document.querySelector("button")
//   .onclick = sayHello;




