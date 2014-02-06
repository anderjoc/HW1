function timeout(){
	var response = confirm("Click OK to extend your stay on this page or Cancel to be redirected to Google");
	if (response == true){
		setTimeout(timeout,timeoutLength);
	}
	if (response == false){
		window.location.assign('http://www.google.com');
	}
}
