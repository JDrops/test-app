$(document).ready(function() {
  // Function to display tasks from CSV
  function displayTasks() {
    $.ajax({
      url: 'tasks.csv',
      dataType: 'text',
      success: function(data) {
        var rows = data.split(/\r?\n|\r/);
        var taskList = $('#taskList');
        taskList.empty(); // Clear the list before updating

        rows.forEach(function(row) {
          var li = $('<li>').text(row);
          taskList.append(li);
        });
      },
      error: function(error) {
        console.error('Error fetching data:', error);
      }
    });
  }

  // Initial display of tasks when the page loads
  displayTasks();

  // Event handling for adding tasks
  $('#addTaskBtn').click(function() {
    var newTask = $('#newTask').val();

    if (newTask !== '') {
      $.ajax({
        url: 'tasks.csv',
        type: 'POST', // Note: GitHub Pages doesn't support writing to files
        contentType: 'text/csv',
        data: newTask + '\n',
        success: function() {
          displayTasks(); // Update the displayed list
          $('#newTask').val(''); // Clear the input field
        },
        error: function(error) {
          console.error('Error updating data:', error);
        }
      });
    }
  });
});
