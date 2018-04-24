
function check(){
	
    let city = $("#city").val();
    
	if(city) {
		$("#result").html("");
		$("#city").removeClass("is-invalid");
	} else {
		$("#result").html("<h3>Laukelis yra tuscias</h3>");
		$("#city").addClass("is-invalid");
	}
}
