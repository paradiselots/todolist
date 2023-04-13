/*/*TO DO LIST*/

/* 
1. This is how to respond to a user event, in this case the user event is a mouse click on a button. 
button.addEventListener("click", function() { Code to execute when the button is clicked })
This code accesses the button oject wrtten in a variable for the HTML in order to listen for an event, 
addEventListener, followed by ("event type", and then function).

2. The function creates a new list element in the HTML DOM. but to do so properly it needs to be done step by step.
	NOTE-The DOCUMENT OBJECT gives us something called "document.appendChild" 

3. We want a click to add a li element, we need to create a variable that access the document object and creates an element, specifically an li element
var li = document.createElement("li"); (which all that did was add list tags <li></li> to the HTML)
	NOTE-Now we need to add text in those tags using a text node, each HTML element has a text node.

4. To add a text node to the li tags we need to access the li element we created and append a child
li.appendChild(document.createTextNode("your text or value here")); which is the equivelent to this: <li>your text or value here</li> 
	NOTE-In the example below, it's taking the input from the User input variable above (Which is what is written in by the user).

5. Now you need to append this list as a child to the UL (unordered list)
to do so, above this function, you'll need to create a variable like this: var ul = document.querySelector("ul"); 
This opens the door in the document object to the UL and lets your append a li child to it.
At this point you can add ul.appendChild(li);
This is after the ul is opened, which allows you to add the li element in it.

6. All of the should be within an if statement: if (input.value.length > 0 ){}; (what the user inputs character length has to be greater than 0)
	NOTE-The if statement secures that if the button is clicked and there is no number nothing will occur, only after
	a value is input can the function work.
7. At the end you need to add input.value = ""
	NOTE- What this does is empties the input box for the user so they can restart with a blank input box.
*/

// This opens access to the button element in the HTML for manipulation
// var button = document.getElementById("enter");
// // This opens access to the user input on the HTML, This allows the user to write in a input
// var input = document.getElementById("userinput");
// // This opens access to the UL in the HTML
// var ul = document.querySelector("ul");


// button.addEventListener("click", function() {
// 	if (input.value.length > 0){
// 		var li = document.createElement("li");
// 		li.appendChild(document.createTextNode(input.value));
// 		ul.appendChild(li);
// 		input.value = "";
// 		}
// });

// // How to make the button accept a key press from the enter button? and how to add a Delete button to each new element added.
// /*
// 1.It is very similar, but now it is an input object
// 	NOTE- Every time an Eventlistener is added we have a keypress and this function receives an event parameter
// if you consol.log that event after pressing the enter key this is the response on the console:
// KeyboardEvent {isTrusted: true, key: 'Enter', charCode: 13}
// 2. so add an && logical operator which state that the input.value needs to be greater than 0 AND needs to be event.keycode === 13 
// (enter button is charCode 13)
// */


// // // Get the input field and unordered list
// // var input = document.querySelector("input");
// // var ul = document.querySelector("ul");

// input.addEventListener("keypress", function(event) {
//   if (input.value.length > 0 && event.keyCode === 13) {
//     // Create a new <li> element
//     var li = document.createElement("li");

//     // Set the text content of the new <li> element
//     li.textContent = input.value;

//     // Create a new <button> element
//     var deleteButton = document.createElement("button");

//     // Set the text content of the delete button
//     deleteButton.textContent = "Delete";

//     // Add a click event listener to the delete button
//     deleteButton.addEventListener("click", function() {
//       // Remove the <li> element when the button is clicked
//       li.parentNode.removeChild(li);
//     });

//     // Add the delete button to the <li> element
//     li.appendChild(deleteButton);

//     // Add the new <li> element to the end of the <ul> element
//     ul.appendChild(li);

//     // Clear the input field
//     input.value = "";

// 	// Add a class to the new <li> element, this is for css styling purposes
// 	li.className = "list-item";
//   }
// });


// -----------

var button = document.getElementById("enter");
var input = document.getElementById("userinput");
var ul = document.querySelector("ul");

button.addEventListener("click", function() {
  if (input.value.length > 0) {
    var li = document.createElement("li");
    var checkbox = document.createElement("input");
    checkbox.type = "checkbox";
    checkbox.addEventListener("click", function() {
      li.classList.toggle("completed");
    });
    li.appendChild(checkbox);
    li.appendChild(document.createTextNode(input.value));
    ul.appendChild(li);
    input.value = "";
  }
});

input.addEventListener("keypress", function(event) {
  if (input.value.length > 0 && event.keyCode === 13) {
    var li = document.createElement("li");
    var checkbox = document.createElement("input");
    checkbox.type = "checkbox";
    checkbox.addEventListener("click", function() {
      li.classList.toggle("completed");
    });
    li.appendChild(checkbox);
    li.appendChild(document.createTextNode(input.value));
    ul.appendChild(li);
    input.value = "";
  }
});

var clearButton = document.getElementById("clear");

clearButton.addEventListener("click", function() {
  while (ul.firstChild) {
    ul.removeChild(ul.firstChild);
  }
});


