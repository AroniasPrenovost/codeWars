// javascript popup modal using jQuery

// attaches a click event to id and calls function  
$("#modal").click(function() {

// grabs the DOM element at the index 
    if ($(".popup")[0]) {
      
// removes DOM element - adds "click again to close" functionality
        $('.popup').remove();
      
// calls designated class that only lives in CSS and generates new button
    } else {
        $("#modal").parent().append('<div class="popup"><button id="modalButton">close</button></div>');
    }
});

// adds button functionality to 
$(document).on('click', "#modalButton", function() {

// remove Dom element
    $(".popup").remove();
});