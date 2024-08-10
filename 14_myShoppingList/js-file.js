// Get reference to HTML elements and variables
const inputElement = document.querySelector("#item");
const buttonElement = document.querySelector("#addButton");
const ulValues = document.querySelector("ul");

buttonElement.addEventListener("click", function() {
    
    const inputValue = inputElement.value;
    
    // Only proceed if input value is not empty
    if (inputValue.trim() !== "") {
    
        // Create new elements for the shopping list
        const listItem = document.createElement('li');
        const spanItem = document.createElement('span');
        const buttonItem = document.createElement('button');

        // Provide value to the new elements
        spanItem.textContent = inputValue;
        buttonItem.textContent = "Delete";

        // Append span and button to the listItem as the child
        listItem.appendChild(spanItem);
        listItem.appendChild(buttonItem);

        // Append the new listItem to the ul
        ulValues.appendChild(listItem);

        // Clear the input field
        inputElement.value = "";

        // Create an event handler to delete the list item when clicked
        buttonItem.addEventListener("click", function () {
            ulValues.removeChild(listItem);
        });
    }
});
