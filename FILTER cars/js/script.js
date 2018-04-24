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
		h = h + "<p>"+array[i].brand+" "+array[i].model+"</p>";
		h = h + "<table><tr><th>hp</th><td>"+array[i].power+"</td></tr></table>"
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