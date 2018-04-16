let cities = []; // kuriam nauja masiva

cities.push("Jonava");
cities.push("Vilnius");
cities.push("Kaunas");
cities.push("Naujoji,Akmene");





console.log(cities);
console.log(cities.toString());


function test(){
    
    console.log(typeof cities); // tikrinam masivo tipa

    let newCity = document.getElementById("txt_city").value; // nuskaitom nauja miesta is text laukelio
    cities.push(newCity); // pridedam nauja miesta i masiva

    //document.getElementById("result").innerText = cities;
    printCities(cities); // su funkcijos kvietumu - siunciam kintamaji (masivas) "cities"    printCities(cities);
}


function printCities(cities){ // funkcijai reikalingas masivas "cities"
    let h = "";
    for(let i = 0; i < cities.length; i++){
        console.log(i);
        console.log(cities[i]);
        h = h + "<div><h3 class='prettyText'>"+cities[i]+"</h3></div>"; // string aggregate
    }
    document.getElementById("result").innerHTML = h;
}