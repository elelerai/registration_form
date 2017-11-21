$(document).ready(function() {
  $("#registration form").submit(function(event) {
    var firstNameInput = $("input#firstName").val();
    var secondNameInput = $("input#firstName").val();
    var inputEmail3Input= $("input#inputEmail3").val();
    var inputPassword3Input = $("input#inputPassword3").val();
    var beverage = $("#beverage").val();
    var flavor = $("input:radio[name=flavor]:checked").val();
    var dob = $("#born").val();


    $(".person1").text(person1Input);
    $(".person2").text(person2Input);
    $(".inputEmail3").email(inputEmail3);
    $(".inputPassword3").password(inputPassword3);




    event.preventDefault();
  });
});
