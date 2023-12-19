// STEP 1: Wrap script.js in an IIFE
(function () {
    // Array of names
    var names = ["Yaakov", "John", "Jen", "Jason", "Paul", "Frank", "Larry", "Paula", "Laura", "Jim"];

    // STEP 10: Loop over the names array and use helloSpeaker or byeSpeaker
    for (var i = 0; i < names.length; i++) {
        var firstLetter = names[i].charAt(0).toLowerCase(); // Getting the first letter and converting to lowercase

        // STEP 12: Compare the first letter and use either byeSpeaker or helloSpeaker
        if (firstLetter === 'j') {
            byeSpeaker.speak(names[i]); // Goodbye if the name starts with 'j'
        } else {
            helloSpeaker.speak(names[i]); // Hello otherwise
        }
    }
})();

// STEP 2: Wrap SpeakHello.js in an IIFE
(function (window) {
    // STEP 3: Create helloSpeaker Object
    var helloSpeaker = {};

    // STEP 4: Attach speak method to helloSpeaker
    helloSpeaker.speak = function (name) {
        console.log("Hello " + name);
    };

    // STEP 5: Expose helloSpeaker to global context
    window.helloSpeaker = helloSpeaker;
})(window);

// STEP 6: Wrap SpeakGoodBye.js in an IIFE
(function (window) {
    // STEP 7: Create byeSpeaker Object
    var byeSpeaker = {};

    // STEP 8: Attach speak method to byeSpeaker
    byeSpeaker.speak = function (name) {
        console.log("Good Bye " + name);
    };

    // STEP 9: Expose byeSpeaker to global context
    window.byeSpeaker = byeSpeaker;
})(window);


/*Explanation:
Each part of the script is wrapped in an IIFE for scope isolation.

helloSpeaker and byeSpeaker objects are created and exposed to the global context via the window object.

The script.js part iterates over an array of names, deciding whether to greet with "Hello" or "Good Bye" based on the first letter of each name.

The speak methods of helloSpeaker and byeSpeaker are used to log greetings to the console.


This single-page script effectively encapsulates and organizes the functionality required for the assignment, demonstrating the use of IIFEs, objects, and loop control structures in JavaScript.*/