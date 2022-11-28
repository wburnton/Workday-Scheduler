// GIVEN I am using a daily planner to create a schedule
// WHEN I open the planner
// THEN the current day is displayed at the top of the calendar 
var currentDay = dayjs().format('MMM D, YYYY, h:mm:ss a'); 
$('#currentDay').text(currentDay); 
var currentHour = dayjs().hour();
//timeId = ["hour8", "hour9", "hour10", "hour11", "hour12", "hour1", "hour2", "hour3", "hour4", "hour5"];
// WHEN I scroll down
// THEN I am presented with timeblocks for standard business hours 

// WHEN I view the timeblocks for that day
// THEN each timeblock is color coded to indicate whether it is in the past, present, or future 
function timeBlock () { 
    $(".time-block").each(function() {
        var timeId = parseInt($(this).attr("id")); 

        if (currentHour > timeId) { 
        timeId.addClass("future");
        } else if (currentHour === timeId) { 
        timeId.addClass("present");
        } else { 
        timeId.addClass("past");
        }; })

}; 
// WHEN I click into a timeblock
// THEN I can enter an event
// WHEN I click the save button for that timeblock
// THEN the text for that event is saved in local storage 
$('.saveBtn').on('click', function () {
    // get nearby values of the description in jQuery
    var textValue = $(this).siblings('.description').val();
    // get the id attribute of the parent div element
    var timeKey = $(this).parent().attr('id');
  
    // save in local storage
    localStorage.setItem(timeKey, textValue);
  });
  
  // Get item from local storage if any
  $('#hour8 .description').val(localStorage.getItem('hour8'));
  $('#hour9 .description').val(localStorage.getItem('hour9'));
  $('#hour10 .description').val(localStorage.getItem('hour10'));
  $('#hour11 .description').val(localStorage.getItem('hour11'));
  $('#hour12 .description').val(localStorage.getItem('hour12'));
  $('#hour13 .description').val(localStorage.getItem('hour1'));
  $('#hour14 .description').val(localStorage.getItem('hour2'));
  $('#hour15 .description').val(localStorage.getItem('hour3'));
  $('#hour16 .description').val(localStorage.getItem('hour4'));
  $('#hour17 .description').val(localStorage.getItem('hour5'));
// WHEN I refresh the page
// THEN the saved events persist
timeBlock();