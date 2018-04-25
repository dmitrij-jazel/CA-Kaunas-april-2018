$("#btn_filter").click(function () {
	// Input - Surinkti informacija is teksto laukeliu
	let brand_text = $("#brandSelect").val();
	// Logic - padaryti CARS filtracija		
	// Filtravimas!
	let filteredCars = CARS.filter(function (car) {
		return car.brand.toLowerCase() == brand_text.toLowerCase(); // Filtruojam pagal "brand"
	});
	// Get Top car
	let topCar = getTopCar(filteredCars);
	// Output - atvaizduoti resultata
	printCars(filteredCars);
	printTopCar(topCar);
});

function printCars(array){
	let h = "";
	for(let i = 0; i<array.length;i++){
		h = h + "<div class='row'>";
		h = h + "<div class='col-12'>";
		h = h + "<h5>"+array[i].brand+" "+array[i].model+"</h5>";
		h = h + "<div class='brandImg'><img src='img/" + array[i].brand.toLowerCase() + ".png' /></div>";
		h = h + "<table class='car_table'>";
		h = h + "<tr><th>Seats:</th><td>"+array[i].seats+"</td></tr>";
		h = h + "<tr><th>HP:</th><td>"+array[i].power+"</td></tr>";
		h = h + "<tr><th>Mileage:</th><td>"+array[i].mileage+"</td></tr>";
		h = h + "<tr><th>Date:</th><td>"+array[i].date+"</td></tr>";
		h = h +"</table>";

		h = h +"<hr>";
		
		h = h + "</div>"; // uzdarom col-12
		h = h + "</div>"; // uzdarom row
	}
	$("#result").html(h);
}
function printTopCar(car){
	let h = "";
	h = h + "<p>" + car.brand + " " + car.model + " " + car.mileage + "</p>"
	$("#newest").html(h);
}
function getTopCar(array){
	let topCar = array[0];
	for(let i = 0; i< array.length; i++){
		if(array[i].mileage < topCar.mileage){
			topCar = array[i];
		}
	}
	return topCar;
}