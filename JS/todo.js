function create_invitation() {
    //Function to replace placeholders in invitation
    // Variable RecipientName
    var RecipientName = document.getElementById("recipientName_form").value;
    document.getElementById("recipientName").innerHTML = RecipientName;
  
    // Variable OrganizationName
    var OrganizationName = document.getElementById("organizationName_form").value;
    document.getElementById("organizationName").innerHTML = OrganizationName;
  
    // Variable EventDate
    var EventDate = document.getElementById("eventDate_form").value;
    document.getElementById("eventDate").innerHTML = EventDate;
  
    // Variable WebsiteURL
    var WebsiteURL = document.getElementById("websiteURL_form").value;
    document.getElementById("websiteURL").innerHTML = WebsiteURL;
  
    // Variable HostName
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