function create_invitation() {
    //Function to replace placeholders in invitation
    // Variable RecipientName to store value of recipientName from form
    var RecipientName = document.getElementById("recipientName_form").value;
    document.getElementById("recipientName").innerHTML = RecipientName;
  
    // Variable OrganizationName to store value of organizationName from form
    var OrganizationName = document.getElementById("organizationName_form").value;
    document.getElementById("organizationName").innerHTML = OrganizationName;
  
    // Variable EventDate to store value of eventDate from form
    var EventDate = document.getElementById("eventDate_form").value;
    document.getElementById("eventDate").innerHTML = EventDate;
  
    // Variable WebsiteURL to store value of websiteURL from form
    var WebsiteURL = document.getElementById("websiteURL_form").value;
    document.getElementById("websiteURL").innerHTML = WebsiteURL;
  
    // Variable HostName to store value of hostName from form
    var HostName = document.getElementById("hostName_form").value;
    document.getElementById("hostName").innerHTML = HostName;
  
    return false;
  }
  
  function UserInput() {
    var RecipientName = document.getElementById("RecipientName");
    alert(RecipientName);
  
    var OrganizationName = document.getElementById("OrganizationName");
    alert(OrganizationName);
  
    var EventDate = document.getElementById("EventDate");
    alert(EventDate);
  
    var WebsiteURL = document.getElementById("WebsiteURL");
    alert(WebsiteURL);
  
    var HostName = document.getElementById("HostName");
    alert(HostName);
  }