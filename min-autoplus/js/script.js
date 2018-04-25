$("#btn_search").click(function () {

	// input - nuskaityti reiksmes nuo laukeliu
	let brand_text = $("#txt_brand").val();
	let model_text = $("#txt_model").val();

	let hp_from_text = $("#txt_hp_from").val();
	let hp_to_text = $("#txt_hp_to").val();

	let date_from_text = $("#txt_date_from").val();
	let date_to_text = $("#txt_date_to").val();

	// logic - atfiltruoti reikiamus duomenys
	let filtered_cars = CARS.filter(function (car) {
		let full_string = car.brand.toLowerCase() + " " + car.model.toLowerCase();
		let part_of_string = brand_text.toLowerCase() + " " + model_text.toLowerCase();

		return full_string.indexOf(part_of_string) > -1; // paliginimo funkcija - Filtruojam pagal branda
	});

	let hp_min = 0;
	let hp_max = 99999;

	if(hp_from_text){
		hp_min = Number(hp_from_text);
	}

	if(hp_to_text){
		hp_max = Number(hp_to_text);
	}
	
	// papildomai atfiltruot
	let cars_filtered_by_hp = filtered_cars.filter(function (car) {	
		//console.log(hp_min + " " + hp_max);	
		return car.power >= hp_min && car.power <= hp_max; // paliginimo funkcija - Filtruojam pagal branda
	});


	let date_from = new Date(0);
	let date_until = new Date(2200,0,1);

	if(date_from_text){
		date_from = new Date(date_from_text);
		//console.log(date_from);
	}

	if(date_to_text){
		date_until = new Date(date_to_text);
		//console.log(date_until);
	}

	let cars_filtered_by_date = cars_filtered_by_hp.filter(function (car) {	
		let car_date = new Date(car.date);			
		return car_date >= date_from && car_date <= date_until;
	});

	// rasti galingiausiamasina
	let powerCar = getMostPowerfulCar(cars_filtered_by_date);
	printCar(powerCar);

	// output - atvaizduoti atrilftruotus duomenys
	printCars(cars_filtered_by_date);
});

//funkcija sarasui atvaizduoti
function printCars(filtered_cars){
	let h = "";

	for(let i = 0; i < filtered_cars.length; i++){
		
		h = h + "<div class='row'>";
		h = h + "<div class='col-12'>";
		h = h + "<h5>"+filtered_cars[i].brand+" "+filtered_cars[i].model+"</h5>";
		h = h + "<div class='brandImg'><img src='img/" + filtered_cars[i].brand.toLowerCase() + ".png' /></div>";
		h = h + "<table class='car_table'>";
		h = h + "<tr><th>Seats:</th><td>"+filtered_cars[i].seats+"</td></tr>";
		h = h + "<tr><th>HP:</th><td>"+filtered_cars[i].power+"</td></tr>";
		h = h + "<tr><th>Mileage:</th><td>"+filtered_cars[i].mileage+"</td></tr>";
		h = h + "<tr><th>Date:</th><td>"+filtered_cars[i].date+"</td></tr>";
		h = h +"</table>";

		h = h +"<hr>";
		
		h = h + "</div>"; // uzdarom col-12
		h = h + "</div>"; // uzdarom row
	}

	$("#result").html(h);
}

//next function
function getMostPowerfulCar(array){
	let powerful_car = array[0];

	for(let i = 0; i < array.length; i++){
		if(array[i].power > powerful_car.power){
			powerful_car = array[i];
		}
	}
	
	return powerful_car;
}

//next function
function printCar(car){
	let h = "";
		
		h = h + "<div class='row'>";
		h = h + "<div class='col-12'>";
		h = h + "<h5>"+car.brand+" "+car.model+"</h5>";
		h = h + "<div class='brandImg'><img src='img/" + car.brand.toLowerCase() + ".png' /></div>";
		h = h + "<table class='car_table'>";
		h = h + "<tr><th>Seats:</th><td>"+car.seats+"</td></tr>";
		h = h + "<tr><th>HP:</th><td>"+car.power+"</td></tr>";
		h = h + "<tr><th>Mileage:</th><td>"+car.mileage+"</td></tr>";
		h = h + "<tr><th>Date:</th><td>"+car.date+"</td></tr>";
		h = h +"</table>";

		h = h +"<hr>";
		
		h = h + "</div>"; // uzdarom col-12
		h = h + "</div>"; // uzdarom row	

	$("#topCar").html(h);
}

//next function...