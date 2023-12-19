// DOM manipulation
// console.log(document.getElementById("title"));
// console.log(document instanceof HTMLDocument);

function sayHello () {
  var name =
   document.getElementById("name").value;
   var message = "<h2>Satan sends invitation, welcometo HELL " + name + "!</h2>";

   var contentElement = document.getElementById("content");
    contentElement.innerHTML = message;
    contentElement.style.color = "red";

   var contentElement = document.getElementById("title");
    contentElement.innerHTML = title;
    contentElement.style.display = "none";

   document.querySelector("p").style.display = "none";

  // document
  //   .getElementById("content")
  //   .textContent = message;  

  document
    .getElementById("content")
    .innerHTML = message;

  if (name === "student") {
    var title = 
      document
        .querySelector("#title")
        .textContent;
    title += " & Lovin' it!";
    document
        .querySelector("h1")
        .textContent = title;
  }
}


