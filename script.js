function addItem() {
  // Get the value from the input field
  var newItem = document.getElementById('newItem').value;

  // Check if the input is not empty
  if (newItem !== '') {
    // Create a new list item element
    var li = document.createElement('li');
    li.textContent = newItem;

    // Append the new item to the list
    document.getElementById('itemList').appendChild(li);

    // Clear the input field
    document.getElementById('newItem').value = '';
  }
}
