
function validateForm() {

var username = document.getElementById("userName").value;
var password = document.getElementById("password").value;
var passwordverify = document.getElementById("passwordVerify").value;
var firstname = document.getElementById("firstName").value;
var lastname = document.getElementById("lastName").value;
var Email = document.getElementById("email").value;
var phone = document.getElementById("phoneNumber").value;


  //Validation for Username to be filled out
  if (username == "") {
    alert("Name must be filled out");
    return false;
  }

  
  //Validation for Password character length
  if (password.length < 8) {
    alert("Password must be 8 characters in length");
    return false;
  } 



  //Validation for Password Matching
  if (passwordverify.length < 8) {
    alert("Password must be 8 characters in length");
    return false;
  }
  


  //Validation for Password Matching character length
  if(password != passwordverify)  {   
    alert("Passwords did not match");
    return false;  
  }



  //Validation for First Name only using alphabet characters
  var text= /^[a-zA-Z]+$/;
  if (!firstname.match(text)) {
    alert("Please use only letters for your First Name");
    return false;
  }
  

  //Validation for Last Name only using alpabet characters
  var text= /^[a-zA-Z]+$/;
  if (!lastname.match(text)) {
    alert("Please use only letters for your Last Name");
    return false;
  }
  


  //Validation for Email in proper format
  var emailvalidate= /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
  if (!Email.match(emailvalidate)) {
    alert("Please use proper format for email");
    return false;
  }
    


  //Validation for Phone Number in proper format
  var phonevalidate= /^\(?([0-9]{3})\)?[-. ]?([0-9]{3})[-. ]?([0-9]{4})$/;
  if (!phone.match(phonevalidate)) {
    alert("Please use XXX-XXX-XXXX format for phone number");
    return false;
  }
 

}

