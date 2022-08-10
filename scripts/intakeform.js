var currentTab = 0; // Current tab is set to be the first tab (0)
showTab(currentTab); // Display the current tab

function showTab(n) {
  // This function will display the specified tab of the form ...
  $(".tab").addClass('hidden');
  $(".tab").removeClass('active-question')
  var x = document.getElementsByClassName("tab");
  x[n].classList.remove('hidden');
  x[n].classList.add('active-question');
  // ... and fix the Previous/Next buttons:
  if (n == 0) {
    document.getElementById("prevBtn").classList.add('hidden-button');
    document.getElementById("prevBtn").disabled = true;
  } else {
    document.getElementById("prevBtn").classList.remove('hidden-button');
    document.getElementById("prevBtn").disabled = false;
  }
  if (n == (x.length - 1)) {
    document.getElementById("nextBtn").innerHTML = "Submit!";
  } else {
    document.getElementById("nextBtn").innerHTML = "Next";
  }
  // ... and run a function that displays the correct step indicator:
  fixStepIndicator(n)
}

function nextPrev(n) {
  // This function will figure out which tab to display
  var x = document.getElementsByClassName("tab");
  // Exit the function if any field in the current tab is invalid:
  if (n == 1 && !validateForm()) return false;
  // Hide the current tab:
  x[currentTab].classList.add('hidden');
  // Increase or decrease the current tab by 1:
  currentTab = currentTab + n;
  // if you have reached the end of the form... :
  if (currentTab >= x.length) {
    //...the form gets submitted:
    $('.submit-btn').click();
    formsubmitted();
    return false;
  }
  if (currentTab < 0){
    return false;
  }
  // Otherwise, display the correct tab:
  showTab(currentTab);
}

function validateForm() {
  // This function deals with validation of the form fields
  var valid = false;
  $("#prevBtn").blur();
  $("#nextBtn").blur();

  var activeTab = $(".active-question");
  var inputs = activeTab.find("input");
  if (inputs.length == 0){
    inputs = activeTab.find("textarea");
  }

  if (inputs[0].type == "textarea"){
    if($(inputs[0]).val() != ""){
      valid = true;
    }
  }
  else {
    if (inputs[0].type == "radio"){
      $(inputs).each(function(){
        if($(this).is(':checked')){
          valid = true;
          console.log("Found checked");
        }
      });
    } else if (inputs[0].type == "text"){
      var allFilled = true;
      $(inputs).each(function(e){
        if (e == inputs.length-1){}
        else {
          if($(this).val() === '' ){
            allFilled = false;
          }
        }
      });
      valid = allFilled;
    }
  }

  if (valid) {
    document.getElementsByClassName("step")[currentTab].className += " finish";
    $(".nav-row p").addClass("hidden");
  } else {
    $(".nav-row p").removeClass("hidden");
  }
  return valid; 

}

function fixStepIndicator(n) {
  // This function removes the "active" class of all steps...
  var i, x = document.getElementsByClassName("step");
  for (i = 0; i < x.length; i++) {
    x[i].className = x[i].className.replace(" active", "");
  }
  //... and adds the "active" class to the current step:
  x[n].className += " active";
}

function formsubmitted(){
  $("#intakeForm").addClass("hidden");
  $(".progress-bar-row").addClass("hidden");
  $(".nav-row").addClass("hidden");
  $(".form-submitted").removeClass("hidden");
}

$("#fat-loss-btn-visual").click(function(){
    $(".fat-loss-radio").click();
});

$("#muscle-gain-btn-visual").click(function(){
    $(".muscle-gain-radio").click();
});

$("#body-comp-btn-visual").click(function(){
    $(".body-compt-radio").click();
});

$("#female-visual").click(function(){
    $(".female-radio").click();
});

$("#male-visual").click(function(){
    $(".male-radio").click();
});

$("#other-visual").click(function(){
    $(".other-radio").click();
});

$("#18-visual").click(function(){
    $(".18-radio").click();
});
$("#18-24-visual").click(function(){
    $(".18-24-radio").click();
});
$("#25-40-visual").click(function(){
    $(".25-40-radio").click();
});
$("#40-visual").click(function(){
    $(".40-radio").click();
});

$("#yes-visual").click(function(){
    $(".yes-radio").click();
});

$("#no-visual").click(function(){
    $(".no-radio").click();
});

$("#intakeForm").submit(function(){
  var vals = $(this).serialize();

  $.ajax({
      url: "", // "https://docs.google.com/forms/u/3/d/e/1FAIpQLSfMwu0Y7YAf-pWPO6_2yN8nOhZ3hknyHesHMsIx5BshZfPnzg/formResponse",  
      method:"",// "POST",
      data: vals,
      success: function(data) {
        formsubmitted();
      }
  });

  return false; // prevent from submit
});

function isCalendlyEvent(e) {
  return e.origin === "https://calendly.com" && e.data.event && e.data.event.indexOf("calendly.") === 0;
};
 
window.addEventListener("message", function(e) {
  if(isCalendlyEvent(e)) {
    /* Example to get the name of the event */
    if (e.data.event == "calendly.event_scheduled"){
      $('iframe').addClass('hidden');
      $(".calendly-inline-widget").addClass('hidden');
      $(".thank-you").removeClass("hidden");
    }
  }
});