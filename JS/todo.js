//Building Array and creating loops for function
let invitation = {};
let recipientNames = [];
function disableForm(n){
document.getElementById("form").style.display = "none";
var html = "";
for(var i=0; i < n; i++) {
html += "<lable>Recipient Name "+ (i + 1) +" <br> <\label><input type = 'text' class = 'name' > <br>";
}
html += "<input type = 'submit' id = 'recipientNamesSubmit' >"
var special = document.getElementById("RecipientNamesForm");
special.innerHTML = html;
}

function fillInvitations(){
console.log("Start here");
n = parseInt(invitation["NumberOfRecipient"]);
for (var i =0; i < n; i++) {
var name = document.getElementsByClassName("name")[i].value;
if(name == "") {
alert("All fields are required!.");
return false;
}
recipientNames.push(name);
}
console.log(recipientNames)
var html = "";
for(var i = 0; i< n; i++) {
html += "Hello Recipient "+recipientNames[i]+"<br><br> You have been invited to volunteer for an event held by organization "+ invitation["OrganizationName"] + " on " + invitation["EventDate"] + " Please come on the following website: " + invitation["WebsiteURL"] + " to sign up as a volunteer. <br><br> Thanks! <br>" + invitation["HostName"] + "<br><br>";
}
document.getElementById("placeholderContent").style.display = "none";
var special = document.getElementById("Content");
special.innerHTML = html;
return false;
}

//Function to replace placeholders in the invitation
function create_invitation() 
{
// Storing Number of Recipient
invitation["NumberOfRecipient"] = document.getElementById("recipientName_form").value;

// Storing Organization Name
invitation["OrganizationName"] = document.getElementById("organizationName_form").value;

// Storing Event Date
invitation["EventDate"] = document.getElementById("eventDate_form").value;

// Storing Website URL
invitation["WebsiteURL"] = document.getElementById("websiteURL_form").value;

// Storing Host Name
invitation["HostName"] = document.getElementById("hostName_form").value;

// Validation
if(invitation["NumberOfRecipient"] == "" ||
invitation["OrganizationName"] == "" ||
invitation["EventDate"] == "" ||
invitation["WebsiteURL"] == "" ||
invitation["HostName"] == "") {
alert("All fields are required!.");
return false
}

// Validating Number of Recipient input is a number
if(isNaN(invitation["NumberOfRecipient"])) {
alert("Enter a Numeric for the Number Of Recipient Field.");
return false;
}
disableForm(invitation["NumberOfRecipient"]);
return false;
}