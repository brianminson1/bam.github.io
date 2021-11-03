function getCookie(){

    var cookieArray = document.cookie.split(";") ;
    for (var i = 0; i < cookiesArray.length; i ++)
    
    var nameValueArray = cookie.document = cookieArray[i].split("=");
    if (nameValueArray[0] == "Username")
    {
        document.getElementById("userName").value = nameValueArray[1];
    }
    
    else if (nameValueArray[0] == "Password")
    {
        document.getElementById("password").value = nameValueArray[1];
    } 
    
    else if (nameValueArray[0] == "Confirmed Password")
    {
        document.getElementById("passwordVerify").value = nameValueArray[1];
    }
    
    else if (nameValueArray[0] == "First Name")
    {
        document.getElementById("firstName").value = nameValueArray[1];
    }
    
    else if (nameValueArray[0] == "Last Name")
    {
        document.getElementById("lastName").value = nameValueArray[1];
    }
    
    else if (nameValueArray[0] == "Email Address")
    {
        document.getElementById("email").value = nameValueArray[1];
    }
    
    else if (nameValueArray[0] == "Phone Number")
    {
        document.getElementById("phoneNumber").value = nameValueArray[1];
    }
           
     document.cookie = "Username=" + document.getElementById("userName").value;
        document.cookie = "Password=" + document.getElementById("password").value;
        document.cookie = "Confirmed Password=" + document.getElementById("passwordVerify").value;
        document.cookie = "First Name=" + document.getElementById("firstName").value;
        document.cookie = "Last Name=" + document.getElementById("lastName").value;
        document.cookie = "Email Address=" + document.getElementById("email").value;
        document.cookie = "Phone Number=" + document.getElementById("phoneNumber").value;






            }


    