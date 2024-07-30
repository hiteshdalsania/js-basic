/*
The Document Object Model (DOM) is a programming interface for web documents. 
It represents the page so that programs can change the document structure, style, 
and content. The DOM represents the document as nodes and objects, making it possible 
for programming languages like JavaScript to interact with the page.

Here's an overview of key concepts and functionalities of the DOM in JavaScript:

1. Nodes and Elements
Node: Everything in the DOM is a node. There are different types of nodes, including 
element nodes, text nodes, and attribute nodes.

Element: The most common type of node, representing an HTML element.

2. Accessing the DOM
Document Object: The document object is the entry point to the DOM. You can use it to 
access and manipulate the content of the web page.

3. Selecting Elements
getElementById: Selects an element by its ID.
getElementsByClassName: Selects elements by their class name.
getElementsByTagName: Selects elements by their tag name.
querySelector: Selects the first element that matches a CSS selector.
querySelectorAll: Selects all elements that match a CSS selector.

*/

var element = document.getElementById("myId");
var elements = document.getElementsByClassName("myClass");
var elements = document.getElementsByTagName("div");
var element = document.querySelector(".myClass");
var elements = document.querySelectorAll("div.myClass");

/*
4. Modifying the DOM
*/

/*
Changing Content

innerHTML: Sets or gets the HTML content of an element.
textContent: Sets or gets the text content of an element.

*/

element.innerHTML = "<p>New Content</p>";
element.textContent = "New Text";

/*
Changing Attributes

setAttribute: Sets the value of an attribute.
getAttribute: Gets the value of an attribute.

*/

element.setAttribute("src", "image.jpg");
var src = element.getAttribute("src");

/*
Changing Styles

style: Sets inline CSS styles.

*/

element.style.color = "red";

/*
5. Creating and Removing Elements
*/

/*
Creating Elements

createElement: Creates a new element.
createTextNode: Creates a new text node.

*/

var newDiv = document.createElement("div");
var newText = document.createTextNode("Hello, World!");

/*
Appending Elements

appendChild: Appends a node as the last child of an element.

*/

element.appendChild(newDiv);

/*
Removing Elements

removeChild: Removes a child node from an element.

*/

element.removeChild(childElement);

/*
6. Event Handling

Adding Event Listeners
Removing Event Listeners
*/

element.addEventListener("click", function () {
    alert("Element clicked!");
});

element.removeEventListener("click", functionName);

/*
7. Traversing the DOM

Parent Node
Child Nodes
First and Last Child
Sibling Nodes
*/

var parent1 = element.parentNode;
var children = element.childNodes;
var firstChild = element.firstChild;
var lastChild = element.lastChild;
var nextSibling = element.nextSibling;
var previousSibling = element.previousSibling;

/*

Here's a simple example demonstrating some of these concepts:

<!DOCTYPE html>
<html>
<head>
  <title>DOM Example</title>
</head>
<body>
  <div id="content">Original Content</div>
  <button id="changeContent">Change Content</button>

  <script>
    document.getElementById("changeContent").addEventListener("click", function() {
      var contentDiv = document.getElementById("content");
      contentDiv.textContent = "New Content";
    });
  </script>
</body>
</html>

*/

/* 
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Dynamic Todo List</title>
    <style>
        .completed {
            text-decoration: line-through;
            color: gray;
        }
    </style>
</head>
<body>
    <h1>Todo List</h1>
    <input type="text" id="new-task" placeholder="New task...">
    <button id="add-task">Add Task</button>
    <ul id="task-list"></ul>

    <script src="app.js"></script>
</body>
</html>


/*
app.js

// Select elements
const newTaskInput = document.getElementById('new-task');
const addTaskButton = document.getElementById('add-task');
const taskList = document.getElementById('task-list');

// Function to create a new task element
function createTaskElement(taskText) {
    const li = document.createElement('li');
    
    // Task text
    const span = document.createElement('span');
    span.textContent = taskText;
    span.addEventListener('click', () => {
        span.classList.toggle('completed');
    });
    
    // Delete button
    const deleteButton = document.createElement('button');
    deleteButton.textContent = 'Delete';
    deleteButton.addEventListener('click', () => {
        taskList.removeChild(li);
    });

    // Append elements to the list item
    li.appendChild(span);
    li.appendChild(deleteButton);

    return li;
}

// Add task event listener
addTaskButton.addEventListener('click', () => {
    const taskText = newTaskInput.value.trim();
    if (taskText !== '') {
        const taskElement = createTaskElement(taskText);
        taskList.appendChild(taskElement);
        newTaskInput.value = '';
        newTaskInput.focus();
    }
});

// Add task on Enter key press
newTaskInput.addEventListener('keypress', (e) => {
    if (e.key === 'Enter') {
        addTaskButton.click();
    }
});

*/
