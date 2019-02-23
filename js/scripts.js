/* ----------------------Business Logic - Functionality------------------------------*/
var CorAns = ["script","funB","callFunB"];
var CorAnsPoints = 10;

function percentage(grade){
  return "You have scored " + parseInt(grade / 30) *100) + "%";
}

/* ---------------User Logic - Front-end part ----------------*/
/* ---------------------- Form------------------------------*/

$(document).ready(function() {
  $("#queAns").submit(function(event) {

    $(#results).text(" ");

    var CorAnsPoints = 0;
    var queOneInput = $("input[type=radio][name=queOne]:checked").val());
    var queTwoInput = $("input[type=radio][name=fun]:checked").val());
    var queThreeInput = $("input[type=radio][name=callFun]:checked").val());

    if(queOneInput ===CorAns[0]){
      CorAnsPoints += CorAnsPoints;
    }
    if(queTwoInput ===CorAns[1]){
      CorAnsPoints += CorAnsPoints;
    }
    if(queThreeInput ===CorAns[2]){
      CorAnsPoints += CorAnsPoints;
    }

    $("#results").text(percentage(grade));
}
    event.preventDefault();
  });
});
