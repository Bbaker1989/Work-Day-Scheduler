//Display Current Date  
let todayDate = moment().format('dddd, MMM Do YYYY');
$("#currentDay").html(todayDate);

//Time Loops
 function timeUpdate() {
      let currentTime = moment().hours();
      $(".time-block").each(function() {
        let blockTime = parseInt($(this).attr("id").split("-")[1]);
  // Past/Current/Future Time

        //Past time
        if (blockTime < currentTime) {
          $(this).addClass("past");
        } 
        //current time
        else if (blockTime === currentTime) {
          $(this).removeClass("past");
          $(this).addClass("present");
        } 
        //Future time
        else {
          $(this).removeClass("past");
          $(this).removeClass("present");
          $(this).addClass("future");
        }
      });
    }
  
    timeUpdate();

    //Save Schedule with click
$(document).ready(function() {
    $(".saveBtn").on("click", function() {
      let schedule = $(this).siblings(".description").val();
      let time = $(this).parent().attr("id");
    
      localStorage.setItem(time,schedule);
    })
})