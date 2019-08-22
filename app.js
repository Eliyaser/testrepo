<script src="https://ajax.googleapis.com/ajax/libs/jquery/3.4.1/jquery.min.js"></script>
// $('form').submit(printObj);

$("#formData").submit(function(e){
  e.preventDefault();
  // var formData = $(this);
  // var formData = $("#formData");
  // console.log(formData.serialize())
  colour = []
  $.each($("input[name='color']:checked"), function(){            
    colour.push($(this).val());
  });
  // console.log("RAJ"); return false;
  var obj = {
    name: $('#name').val(),
    email: $('#email').val(),
    gender: $('#radio').val(),
    Education: $('#edu').val(),
    Address: $('#address').val(),
    DOB: $('#tbDate').val(),
    colour:colour
  };
  var urls = 'http://localhost/sample_php/form.php'; 
  $.ajax({
    type: "POST",
    url: urls,
    data: {'data':obj}, 
    // crossDomain: true,
    success: function(data)
    {
      console.log(data)  
    }
  });
})



// function printObj(e) {
//   e.preventDefault();
//   console.log("obj"); 
//   colour = []
//   $.each($("input[name='color']:checked"), function(){            
//     colour.push($(this).val());
//   });
//   var formData = $("#formData");
//   console.log(formData.serialize())
//     //debugger;
//   // var obj = {
//   //   name: $('#name').val(),
//   //   email: $('#email').val(),
//   //   gender: $('#radio').val(),
//   //   Education: $('#edu').val(),
//   //   Address: $('#address').val(),
//   //   DOB: $('#tbDate').val(),
//   //   colour:colour
//   // }
//   // console.log(obj);
// }

