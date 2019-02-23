/* ----------------------Business Logic - Functionality------------------------------*/
var CorAns = ["script","funB","callFunB"];
var CorAnsPoints = 10;

function percentage(grade){
  return "You have scored " + parseInt(grade / 30) *100) + "%";
}

/* ---------------User Logic - Front-end part ----------------*/
/* ---------------------- Form------------------------------*/

$(document).ready(function() {
  $("#answers").submit(function(event) {

    $(#results).text("");
    var CorAnsPoints = 0;
    var queOneInput = $("input:radio[name=queOne]:checked").val();
    var queTwoInput = $("input:radio[name=fun]:checked").val();
    var queThreeInput = $("input:radio[name=callFun]:checked").val();

    if(queOneInput){

    }






$(".a").radio(queOneInput);
$(".queTwo").radio(queTwoInput);
$(".funOne").radio(funOneInput);
$(".funTwo").radio(funTwoInput);
$(".funthree").radio(funthreeInput);

$("#results").show();

event.preventDefault();
});
});
