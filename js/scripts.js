/* ----------------------Business Logic - Functionality------------------------------*/
var CorAns = ["script","funB","callFunB"];

function percentage(grade){
  return "You have scored " + parseInt((grade / 30) *100) + "%";
}

/* ---------------User Logic - Front-end part ----------------*/
/* ---------------------- Form------------------------------*/

$(document).ready(function() {
  $("#queAns").submit(function(event) {//forms div
    var grade = 0
    $("#results").show("");
    var CorAnsPoints = 10;
    var queOneInput = ($("input[type=radio][name=queOne]:checked").val());
    var queTwoInput = ($("input[type=radio][name=fun]:checked").val());
    var queThreeInput = ($("input[type=radio][name=callFun]:checked").val());
    debugger
      if(queOneInput === CorAns[0]){
        grade += CorAnsPoints;
      }
      if(queTwoInput === CorAns[1]){
        grade += CorAnsPoints;
      }
      if(queThreeInput === CorAns[2]){
        grade += CorAnsPoints;
      }

      $("#results h1").text(percentage(grade));
    event.preventDefault();
  });
});
