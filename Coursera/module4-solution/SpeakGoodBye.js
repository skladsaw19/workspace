//Wrap the entire contents of SpeakGoodBye.js inside of an IIFE
(function(window) {
  // Create 'byeSpeaker' object
  var byeSpeaker = new Object();

  // Speak word variable
  var speakWord = "Good Bye";

  //Rewrite the 'speak' method
  byeSpeaker.speak = function(name) {
      console.log(speakWord + " " + name);
  };

  //Expose the 'byeSpeaker' object to the global scope
  window.byeSpeaker = byeSpeaker;

})(window);





// DO NOT attach the speakWord variable to the 'byeSpeaker' object.
// var speakWord = "Good Bye";


// function speak(name) {
//   console.log(speakWord + " " + name);
// }



// NOTE! The steps in this file are basically identical to the ones you
// performed in the SpeakHello.js file.

// STEP 6: Wrap the entire contents of SpeakGoodBye.js inside of an IIFE
// See Lecture 52, part 2

// STEP 7: Create an object, called 'byeSpeaker' to which you will attach
// the "speak" method and which you will expose to the global context
// See Lecture 52, part 1
// var byeSpeaker =

// STEP 8: Rewrite the 'speak' function such that it is attached to the
// byeSpeaker object instead of being a standalone function.
// See Lecture 52, part 2

// STEP 9: Expose the 'byeSpeaker' object to the global scope. Name it
// 'byeSpeaker' on the global scope as well.
// xxxx.xxxx = byeSpeaker;