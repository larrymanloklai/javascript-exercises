// Select the container div
const container = document.querySelector('#container');

// Create a <p> element with red text
const redParagraph = document.createElement('p');
redParagraph.textContent = "Hey I’m red!";
redParagraph.style.color = "red";

// Create an <h3> element with blue text
const blueH3 = document.createElement('h3');
blueH3.textContent = "I’m a blue h3!";
blueH3.style.color = "blue";

// Create a <div> element with a black border and pink background
const divContainer = document.createElement('div');
divContainer.style.border = "1px solid black";
divContainer.style.backgroundColor = "pink";
divContainer.style.textAlign="center"

// Create an <h1> element inside the <div>
const divH1 = document.createElement('h1');
divH1.textContent = "Moving and removing elements";

// Create a <p> element inside the <div>
const divParagraph = document.createElement('p');
divParagraph.textContent = "There may be times when you want to move nodes, or delete them from the DOM altogether. This is perfectly possible. If we wanted to move the paragraph with the link inside it to the bottom of the section, we could do this:"

// Append the <h1> and <p> to the <div>
divContainer.appendChild(divH1);
divContainer.appendChild(divParagraph);


// Append all created elements to the container
container.appendChild(divContainer);
container.appendChild(redParagraph);
container.appendChild(blueH3);


// METHODS 2 & 3
const buttons = document.querySelectorAll("button");
  
// METHOD 3

buttons.forEach((button) => {
    // and for each one we add a 'click' listener
    button.addEventListener("click", function (e) {
        if (e.target.style.background === "blue") {
          e.target.style.background = "red";
        } else {
          e.target.style.background = "blue";
        }
    });
  });


buttons.forEach((button) => {
    // and for each one we add a 'double click' listener
    button.addEventListener("keydown", function (e) {
        if (e.target.style.background === "yellow") {
          e.target.style.background = "green";
        } else {
          e.target.style.background = "yellow";
        }
    });
  });