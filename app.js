$(document).ready(function() {
  $('#addItem').on('click', addItem);
  $('#todos').on('change', '.completeItem', completeItem);
  $('#todos').on('click', '.deleteItem', deleteItem);
  $('#todos').on('click', '.todoText', startEditing);
    $('#todos').on('click', '.saveItem', stopEditing);
  $('#newTodo').on('keypress', function(event) {
    console.log(event);
    if(event.which === 13) {
      addItem();
      event.preventDefault();
    }
  });

  function startEditing(event) {
    var taskLi = $(this).parent();
      // Get the current todoText
    var currentText = taskLi.find('.todoText').text();  // Place it inside the textbox
    taskLi.find('.editText').val(currentText);
    // We need to show the textbox
    taskLi.find('.editText').show();
    taskLi.find('.saveItem').show();
    // We need to hide the current/original text
    taskLi.find('.todoText').hide();
  }

  function stopEditing(event) {

    $(this).hide();
    var taskLi = $(this).parent();
    var newValue = taskLi.find('.editText').val();
    taskLi.find('.editText').hide();
    taskLi.find('.todoText').text(newValue);
    taskLi.find('.todoText').show();

  }

    function addItem(event) {
      var newTodoText = $('#newTodo').val();
    $('#todos').append('<li><input class="completeItem" type="checkbox"><span class ="todoText">' + newTodoText + '</span><input type="text" class="editText"><button class ="btn btn-success saveItem">save</button><span class = "glyphicon glyphicon-trash deleteItem"></span></li>');
    $('#newTodo').val("");
  }

  function deleteItem(event) {
    $(this).parent().remove();
  }

  function completeItem(event) {
    $(this).parent().toggleClass('done');
  }

});
