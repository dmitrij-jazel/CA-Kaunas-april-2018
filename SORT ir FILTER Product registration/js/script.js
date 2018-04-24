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

$("#SortByName").click(function () {
	let sortedProducts = sortByName(produktai);
	printProduktai(sortedProducts);
});

$("#SortByPrice").click(function () {
	let sortedProducts = sortByPrice(produktai);
	printProduktai(sortedProducts);
});

$("#FilterByCity").click(function () {
	let filteredProducts = produktai.filter(function (prod) {
		return prod.miestas == "Vilnius"; // Filtruojam pagal miesta
	});
   printProduktai(filteredProducts);
});

$("#FilterByPrice").click(function () {
	let filteredProducts = produktai.filter(function (prod) {
		return prod.kaina >= 2; // kaina turi buti didesne uz 2
	});
	printProduktai(filteredProducts);
});

$("#SearchByName").click(function () {
	let search_phrase = $("#search").val();
	let filteredProducts = produktai.filter(function (prod) {
		// return prod.pavadinimas.toLowerCase() == search_phrase.toLowerCase(); // Filtruojam pagal pavadinima
		return prod.pavadinimas.toLowerCase().indexOf(search_phrase) > -1;
	});
   printProduktai(filteredProducts);
});

$("#ShowTopProduct_withSort").click(function () {
	let sortedProducts = sortByPrice(produktai);
	let pigiausia_preke = sortedProducts[0];
	let brangiausia_preke = sortedProducts[sortedProducts.length-1];

	let topProd = brangiausia_preke;

	printProduct(topProd);
});

$("#ShowTopProduct").click(function () {
	
	let brangiausia_preke = produktai[0];
	for(let i = 0; i< produktai.length; i++){
		if(produktai[i].kaina > brangiausia_preke.kaina){
			brangiausia_preke = produktai[i];
		}
	}
	printProduct(brangiausia_preke);
});


function sortByName(array){
	array.sort(
		function(a, b) {
			return a.pavadinimas > b.pavadinimas; // Rusiavimas pagal Abecele
		}
	);
	return array;
}

function sortByPrice(array){
	array.sort(
		function(a, b) {
			return a.kaina > b.kaina; // Rusiavimas pagal kaina didejancia tvarka
		}
	);
	return array;
}

function printProduct(prod){
	var h = "";
	h = h + "<table class='table table-striped' id=myTable>";
	h = h + "<tr><thead class='thead-dark'><th> Pavadinimas </th> <th>Kiekis</th> <th>Kaina</th> <th>Miestas</th> <th>Veiksmas</th></thead></tr>"
	
		
		h = h + "<tr><td>" + prod.pavadinimas + "</td>"
		 + "<td>" + prod.kiekis + "</td>"
		 + "<td>" + prod.kaina + "&euro;" + "</td>"
		 + "<td>" + prod.miestas + "</td>"
		 + "<td>" +"<button class='btn btn-link'></button>" + "</td></tr>";
		
	
	h = h + "</table>";
	document.getElementById("spausdinti").innerHTML = h;
}