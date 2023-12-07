/* events
event propagation
event bubbling 
event Capturing
*/

/* events: Event propagation refers to the way events are handled as they travel through the DOM hierarchy.
   There are two phases: capturing phase and bubbling phase.

   Event Capturing:
   During capturing, the event starts from the root of the DOM and moves towards the target element.
   It triggers event handlers attached at each level.

  If the button is clicked, the output will be:
   Capturing phase: Parent element clicked
   Capturing phase: Child element clicked
   Capturing phase: Button clicked
 */

// Capturing Phase
document.getElementById("parent").addEventListener(
  "click",
  () => {
    console.log("Capturing phase: Parent element clicked");
  },
  true
);

document.getElementById("child").addEventListener(
  "click",
  () => {
    console.log("Capturing phase: Child element clicked");
  },
  true
);

document.getElementById("btn").addEventListener(
  "click",
  () => {
    console.log("Capturing phase: Button clicked");
  },
  true
);

/* Event Bubbling:
   Once the event reaches the target element, it starts the bubbling phase.
   The event travels back up from the target element to the root of the DOM, triggering event handlers at each level.
*/
// Bubbling Phase
document.getElementById("parent").addEventListener("click", () => {
  console.log("Bubbling phase: Parent element clicked");
});

document.getElementById("child").addEventListener("click", () => {
  console.log("Bubbling phase: Child element clicked");
});

document.getElementById("btn").addEventListener("click", () => {
  console.log("Bubbling phase: Button clicked");
});

/*
   If the button is clicked in this example, the output will be:
   Bubbling phase: Button clicked
   Bubbling phase: Child element clicked
   Bubbling phase: Parent element clicked
*/
