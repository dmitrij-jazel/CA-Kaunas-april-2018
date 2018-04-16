let cities = []; // kuriam nauja masiva

cities.push("Jonava");
cities.push("Vilnius");
cities.push("Kaunas");
cities.push("Palanga");
cities.push("Klaipeda");
cities.push("Utena");
cities.push("Ignalina");
cities.push("Taurage");
cities.push("Panevezys");
cities.push("Siauliai");
cities.push("Kazlu ruda");



function test(){

    console.log(typeof cities); // tikrinam masivo tipa

    let newCity = document.getElementById("txt_city").value; // nuskaitom nauja miesta is text laukelio
    cities.push(newCity); // pridedam nauja miesta i masiva

    document.getElementById("result").innerText = cities;
}