function checkEmail(){
	var email = document.getElementById("txtEmail");
	var filter = /^(([^<>()\[\]\.,;:\s@\"]+(\.[^<>()\[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i;
	
	if(!filter.test(email.value)){
		alert("Please provide valid email address");
	} else {
		alert=false;
		}
}

	

