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




// -------------Clear-------------
var clear = document.getElementById("sukurti");
var form = document.getElementById("myForm");

// function clearfield() {
	
//     // EDIT: place code for clearing anything else that would be affected here
//     form.reset();

// }

// clear.addEventListener("click", clearfield, false);

// -------------Clear-------------