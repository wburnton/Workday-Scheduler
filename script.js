// GIVEN I am using a daily planner to create a schedule
// WHEN I open the planner
// THEN the current day is displayed at the top of the calendar 
var currentDay = dayjs().format('MMM D, YYYY, h:mm:ss a'); 
$('#currentDay').text(currentDay); 
var currentHour = dayjs().hour();
//var currentHour = 10;
console.log(currentHour);
//timeId = ["hour8", "hour9", "hour10", "hour11", "hour12", "hour1", "hour2", "hour3", "hour4", "hour5"];
// WHEN I scroll down
// THEN I am presented with timeblocks for standard business hours 

// WHEN I view the timeblocks for that day
// THEN each timeblock is color coded to indicate whether it is in the past, present, or future 
function timeBlock () { 
    $(".time-block").each(function() {
      // timeId = the hour associated w/ the timeblock (number)
        var timeBlocker = $(".time-block");
        var timeId = parseInt($(this).attr("data-hour"));
        console.log(timeId);
        if (currentHour > timeId) { 
        // add a class to the time-block div
        timeBlocker.addClass("future");
        timeBlocker.removeClass("past"); 
        timeBlocker.removeClass("present");
        } else if (currentHour === timeId) { 
        timeBlocker.addClass("present");
        timeBlocker.removeClass("future");
        timeBlocker.removeClass("past");
        
        } else { 
        timeBlocker.addClass("past");
        timeBlocker.removeClass("future");
        timeBlocker.removeClass("present");
        }; })

}; 
// WHEN I click into a timeblock
// THEN I can enter an event
// WHEN I click the save button for that timeblock
// THEN the text for that event is saved in local storage 
$('.saveBtn').on('click', function () {
    var scheduleInput = $(this).siblings('.description').val();
    var timeKey = $(this).parent().attr('id');
    localStorage.setItem(timeKey, scheduleInput);
    });
    
    

  
  
  $('#hour8 .description').val(localStorage.getItem('hour8'));
  $('#hour9 .description').val(localStorage.getItem('hour9'));
  $('#hour10 .description').val(localStorage.getItem('hour10'));
  $('#hour11 .description').val(localStorage.getItem('hour11'));
  $('#hour12 .description').val(localStorage.getItem('hour12'));
  $('#hour13 .description').val(localStorage.getItem('hour13'));
  $('#hour14 .description').val(localStorage.getItem('hour14'));
  $('#hour15 .description').val(localStorage.getItem('hour15'));
  $('#hour16 .description').val(localStorage.getItem('hour16'));
  $('#hour17 .description').val(localStorage.getItem('hour17'));
// WHEN I refresh the page
// THEN the saved events persist
timeBlock();