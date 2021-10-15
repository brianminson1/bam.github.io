function validateForm() {

  //Validation for Username to be filled out
  let username = document.forms["Confirmation"]["userName"].value;
  if (username == "") {
    alert("Name must be filled out");
    return false;
  }

  //Validation for Password character length
  let password = document.forms["Confirmation"]["password"].value;
  if (password.length < 8) {
    alert("Password must be 8 characters in length");
    return false;
  }

  //Validation for Password Matching
  let passwordverify = document.forms["Confirmation"]["passwordVerify"].value;
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
  let firstname = document.forms["Confirmation"]["firstName"].value;
  var text= /^[a-zA-Z]+$/;
  if (!firstname.match(text)) {
    alert("Please use only letters for your First Name");
    return false;
  }

  //Validation for Last Name only using alpabet characters
  let lastname = document.forms["Confirmation"]["lastName"].value;
  var text= /^[a-zA-Z]+$/;
  if (!lastname.match(text)) {
    alert("Please use only letters for your Last Name");
    return false;
  }

  //Validation for Email in proper format
  let Email = document.forms["Confirmation"]["email"].value;
  var emailvalidate= /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
  if (!Email.match(emailvalidate)) {
    alert("Please use proper format for email");
    return false;
  }

  //Validation for Phone Number in proper format
  let phone = document.forms["Confirmation"]["phoneNumber"].value;
  var phonevalidate= /^\(?([0-9]{3})\)?[-. ]?([0-9]{3})[-. ]?([0-9]{4})$/;
  if (!phone.match(phonevalidate)) {
    alert("Please use XXX-XXX-XXXX format for phone number");
    return false;
  }

}