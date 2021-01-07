function checkEmail()                                    
{ 
    var fname = document.getElementById("FirstName");               
    var lname = document.getElementById("LastName");     
    var bod = document.getElementById("BirthofDate");    
    var cnum =  document.getElementById("ContactNumber");  
    var email = document.getElementById("txtEmail");   
    var icode = document.getElementById("IntakeCode"); 
   
    if (fname.value == ())                                  
    { 
        window.alert("Please enter your first name."); 
        else {
		alert=false;
		}
 
    } 
    
    if (lname.value == ())                                  
    { 
        window.alert("Please enter your last name."); 
       else {
		alert=false;
		}
    } 

   
    if (bod.value == "")                               
    { 
        window.alert("Please enter your birth of date."); 
       else {
		alert=false;
		}
    } 
       
    if (email.value == "")                                   
    { 
        window.alert("Please enter a valid e-mail address."); 
        else {
		alert=false;
		}
    } 
   
    if (email.value.indexOf("@", 0) < 0)                 
    { 
        window.alert("Please enter a valid e-mail address."); 
        else {
		alert=false;
		}
    } 
   
    if (email.value.indexOf(".", 0) < 0)                 
    { 
        window.alert("Please enter a valid e-mail address."); 
        else {
		alert=false;
		}
    } 
   
    if (cnum.value == "")                           
    { 
        window.alert("Please enter your telephone number."); 
        else {
		alert=false;
		}
    } 
   
    if (icode.value == "")                        
    { 
        window.alert("Please enter your intake code"); 
       else {
		alert=false;
		}
    } 
   
    return true; 
}


