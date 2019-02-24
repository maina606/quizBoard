/* ----------------------Business Logic - Functionality------------------------------*/
var CorAns = ["script","funB","callFunB"];
var CorAnsPoints = 10;

function percentage(grade){
  return "You have scored " + parseInt((grade / 30) *100) + "%";
}

/* ---------------User Logic - Front-end part ----------------*/
/* ---------------------- Form------------------------------*/

$(document).ready(function() {
  $("#queAns").submit(function(event) {//forms div

    $("#results").text("");
    var CorAnsPoints = 0;
    var queOneInput = ($("input[type=radio][name=queOne]:checked").val());
    var queTwoInput = ($("input[type=radio][name=fun]:checked").val());
    var queThreeInput = ($("input[type=radio][name=callFun]:checked").val());

    if(queOneInput === undefined || queTwoInput === undefined || queThreeInput === undefined){
      $("#Incomplete").text("Please complete the quiz");
    } else {
        if(queOneInput === CorAns[0]){
          grade += CorAnsPoints;
        }
        if(queTwoInput === CorAns[1]){
          grade += CorAnsPoints;
        }
        if(queThreeInput === CorAns[2]){
          grade += CorAnsPoints;
        }

    $("input[type=radio][name=queOne]:checked").prop("checked", false);
    $("input[type=radio][name=fun]:checked").prop("checked", false);
    $("input[type=radio][name=callFun]:checked").prop("checked", false);
    $("#Incomplete").text('');
    $("#results").text(percentage(grade));
}
    event.preventDefault();
  });
});
