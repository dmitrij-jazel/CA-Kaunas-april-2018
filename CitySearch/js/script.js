let miestai = ["New york", "Berlin","Oslo","Riga","Moscow","Rome"];


function check(){
    //Step1: turim nuskaityti teksta is laukelio (Input)
    let city = document.getElementById("city").value;
    console.log(city); // Doublecheck ar tikrai nuskaitom taisinga reiksme



    //Step2: patikrinti ar tekstas yra masyve (Logic)
    let cityFound = ""; // bus naudojamas rezultatui atvaizduoti
    if(miestai.indexOf(city) > -1){
        // toks miestas yra
        cityFound = "Toks miestas yra";
    }else{
        // tokio miesto nera
        cityFound = "Tokio miesto nera";
    }
    
    //Step3: atvaizduoti rezultata (Output)
    document.getElementById("result").innerHTML = "<h3>"+cityFound+"</h3>";
}
