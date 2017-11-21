$(document).ready(function() {
  $("#registration form").submit(function(event) {
    var person1Input = $("input#person1").val();
    var person2Input = $("input#person2").val();
    var inputEmail3Input= $("input#inputEmail3").val();
    var inputPassword3Input = $("input#inputPassword3").val();


    $(".person1").text(person1Input);
    $(".person2").text(person2Input);
    $(".inputEmail3").email(inputEmail3);
    $(".inputPassword3").password(inputPassword3);




    event.preventDefault();
  });
});
