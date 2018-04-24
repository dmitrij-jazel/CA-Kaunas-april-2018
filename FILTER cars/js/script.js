$("#btn_filter").click(function () {

	// Input - Surinkti informacija is teksto laukeliu
	let brand_text = $("#brandSelect").val();

	// Logic - padaryti CARS filtracija
		
	// Filtravimas!
	let filteredCars = CARS.filter(function (car) {
		return car.brand.toLowerCase() == brand_text.toLowerCase(); // Filtruojam pagal "brand"
	});
	

	// Output - atvaizduoti resultata
	printCars(filteredCars);
});

function printCars(array){
	let h = "";
	for(let i = 0; i<array.length;i++){
		h = h + "<p>"+array[i].brand+" "+array[i].model+"</p>";
		h = h + "<table><tr><th>hp</th><td>"+array[i].power+"</td></tr></table>"
	}

	$("#result").html(h);
}