/* ----------------------Business Logic - Functionality------------------------------*/
var correctAns = function(){
  if(){
    return ;
  }
}

/* ---------------User Logic - user interaction with the Front-end part ----------------*/
/* ---------------------- Form------------------------------*/

$(document).ready(function() {
    $("#answers form").submit(function(event) {
      var queOneInput = $("#input.queOne:checked").val();
      var queTwoInput = $("#input.queTwo:checked").val();
      var funOneInput = $("#input.funOne:checked").val();
      var funTwoInput = $("#input.funTwo:checked").val();
      var funthreeInput = $("#input.funthree:checked").val();

      $(".queOne").radio(queOneInput);
      $(".queTwo").radio(queTwoInput);
      $(".funOne").radio(funOneInput);
      $(".funTwo").radio(funTwoInput);
      $(".funthree").radio(funthreeInput);


        $("#results").show();

        event.preventDefault();
    });
});
