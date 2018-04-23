var produktai = [];

//istraukiam issaugotas produktus is LocalStorage
var prod_list_string = localStorage.getItem("Prod_sarasas");
//console.log(prod_list_string);

//atgaunam Issaugotu produktu masyva.
var Prod_sarasas = JSON.parse(prod_list_string);
//console.log(Prod_sarasas);

if(Prod_sarasas != null){
	produktai = Prod_sarasas;
}

printProduktai(produktai);

function add(){
	//Input
	var pavadinimas_input = document.getElementById("pavadinimas").value;
	var kaina_input = document.getElementById("kaina").value;
	var kiekis_input = document.getElementById("kiekis").value;
	var miestas_input = document.getElementById("miestas").value;

	let errors_found = false;

	// Tikrinam "Kaina" laukeli
	if(kaina_input){
		// Laukelis nera tuscias
		// viskas tvarkoi, tesiam toliau
		// patikrinti ar klaina turi "+" ARBA "-"
		if(kaina_input.indexOf('+') > -1 || kaina_input.indexOf('-') > -1){
			// rastas neleistinas "+" zenklas - klaida
			alert("Demesio rastas + arba -");
			errors_found = true;
		}else{
			if(Number(kaina_input) > 0 && Number(kaina_input) < 10000){
				// klaidu nerasta, viskas gerai
			}else{
				alert("Demesio, kaina privalo buti tarp 0 - 10000");
				errors_found = true;
			}
		}
	}else{
		// KLAIDA: "Kaina" laukelis yra privalomas ir negali buti tuscias
		alert("Kaina yra provaloma");
		errors_found = true;
	}

	// Tikrinam "Pavadinimas" laukeli
	if(pavadinimas_input){
		// Laukelis nera tuscias
		if(pavadinimas_input.length > 50){
			// cia yra klaida, perilgas produkto pavadinimas
			alert("Demesio, per ilgas prekes pavadinimas");			
			errors_found = true;
		}else{
			// klaidu nerasta, viskas gerai
		}
	}else{
		alert("Pavadinimas yra provalomas");
		errors_found = true;
	}

	

	// Tikrinam "Kiekis" laukeli
	if(kiekis_input){
		// Laukelis nera tuscias
		// viskas tvarkoi, tesiam toliau
		// patikrinti ar klaina turi "+" ARBA "-"
		if(kiekis_input.indexOf('+') > -1 || kiekis_input.indexOf('-') > -1){
			// rastas neleistinas "+" zenklas - klaida
			alert("Demesio rastas + arba -");
			errors_found = true;
		}else{
			if(Number(kiekis_input) > 0 && Number(kiekis_input) < 10){
				// klaidu nerasta, viskas gerai
				
			}else{
				alert("Demesio, kiekis privalo buti tarp 0 - 10");
				errors_found = true;
			}
		}

	}else{
		// KLAIDA: "Kaina" laukelis yra privalomas ir negali buti tuscias
		alert("Kaina yra provaloma");
		errors_found = true;
	}

	// Tikrinam "Miestas" laukeli
	if(miestas_input){
		// Laukelis nera tuscias
		if(miestas_input.length > 50){
			// cia yra klaida, perilgas produkto pavadinimas			
			$("#city-validation-error").text("Per ilgas miesto pavadinimas.");
			$("#city-validation-error").fadeIn('fast');		
			$("#miestas").addClass("is-invalid");
			errors_found = true;
		}else{
			$("#city-validation-error").fadeOut('fast');
			$("#miestas").removeClass("is-invalid");
		}
	}else{
		// Jeigu klaidu yra, reikia apsaugoti duomenis
		$("#city-validation-error").text("Prašome parašyti taisyklingą miestą.");
		$("#city-validation-error").fadeIn('fast');	
		$("#miestas").addClass("is-invalid");
		errors_found = true;
	}


	if(!errors_found){
		// Jeigu klaidu nera, viskas gerai - galima registruot nauja produkta.
		//Logic
		var product = {
			pavadinimas: pavadinimas_input,
			kaina: Number(kaina_input),
			kiekis: Number(kiekis_input),
			miestas: miestas_input
		}
		produktai.push(product);
		console.log(produktai);

		//Output
		printProduktai(produktai);

		//Nera privaloma, bet mes issaugom i "localStorage".
		var p_string = JSON.stringify(produktai);
		localStorage.setItem("Prod_sarasas", p_string);

		//Isvalyti forma
		resetForm();
	}else{
		
	}

	
}

function printProduktai(produktai){
	var h = "";
	h = h + "<table class='table table-striped' id=myTable>";
	h = h + "<tr><thead class='thead-dark'><th> Pavadinimas </th> <th>Kiekis</th> <th>Kaina</th> <th>Miestas</th> <th>Veiksmas</th></thead></tr>"
	for (var i = 0; i < produktai.length; i++){
		let prod = produktai[i];
		h = h + "<tr><td>" + prod.pavadinimas + "</td>"
		 + "<td>" + prod.kiekis + "</td>"
		 + "<td>" + prod.kaina + "&euro;" + "</td>"
		 + "<td>" + prod.miestas + "</td>"
		 + "<td>" +"<button onclick='remove("+i+")' class='btn btn-link'>[Šalinti]</button>" + "</td></tr>";
		// console.log(p);
	}
	h = h + "</table>";
	document.getElementById("spausdinti").innerHTML = h;
}

function remove(index){
	// reikia istrinti elementa pagal Indexa.
	//PASALINAM indexo dali
	produktai.splice(index, 1);

	//po pakeitimo, reikia is naujo atspausdint, ir is naujo issaugot

	//atspausdinam
	printProduktai(produktai);

	//issaugom i "localStorage".
	var p_string = JSON.stringify(produktai);
	localStorage.setItem("Prod_sarasas", p_string);
}

function resetForm(){
	document.getElementById("myForm").reset();
}

function clearSavedData(){
	localStorage.removeItem("Prod_sarasas");
	
	// is naujo persaugoti einama masiva
	produktai = [];
	//is naujo atvaizduot pasivo elementus
	printProduktai(produktai);
}