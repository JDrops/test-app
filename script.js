$(document).ready(function() {
  // Function to display items from CSV
  function displayItems() {
    $.ajax({
      url: 'data.csv',
      method: 'GET',
      dataType: 'text',
      success: function(data) {
        var rows = data.split(/\r?\n|\r/);
        var itemList = $('#itemList');
        itemList.empty(); // Clear the list before updating

        rows.forEach(function(row) {
          var li = $('<li>').text(row);
          itemList.append(li);
        });
      },
      error: function(error) {
        console.error('Error fetching data:', error);
      }
    });
  }

  // Initial display of items when the page loads
  displayItems();

  // Event handling for adding items
  $('#addBtn').click(function() {
    var newItem = $('#newItem').val();

    if (newItem !== '') {
      $.ajax({
        url: 'data.csv',
        type: 'POST',
        contentType: 'text/csv',
        data: newItem + '\n',
        success: function() {
          displayItems(); // Update the displayed list
          $('#newItem').val(''); // Clear the input field
        },
        error: function(error) {
          console.error('Error updating data:', error);
        }
      });
    }
  });
});
