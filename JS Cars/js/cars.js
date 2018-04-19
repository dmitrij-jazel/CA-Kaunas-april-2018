let CARS = [];

// istraukiam issaugotas masinas is LocalStorage
let cars_list_string = localStorage.getItem("CARS");
console.log(cars_list_string);

//atgaunam Isaugotu masinu masiva.
let CARS_stored = JSON.parse(cars_list_string);
console.log(CARS_stored);

if(CARS_stored != null){
    CARS = CARS_stored;
}





function reg(){
    
    let brand_text = document.getElementById("brand").value;

    let model_text = document.getElementById("model").value;

    let engine_text = document.getElementById("engine").value;
    let engine_number = Number(engine_text);

    let hp_text = document.getElementById("hp").value;
    let hp_number = Number(hp_text);

    let car = {
        //Car properties
        brand: brand_text,
        model: model_text,
        engine: engine_number,
        hp: hp_number,
        
        //Car methods
        print: function() {
            console.log(this.brand + " " + this.model + " pasisveikino!");
        }
    }

    CARS.push(car);
    
    console.log(CARS);

    //Paruosiam CARS masiva saugojimui (paverciam i string)
    let CARS_string = JSON.stringify(CARS);
    //
    localStorage.setItem("CARS", CARS_string);    
}


function say_hi(c) {
    console.log(c.brand + " " + c.model + " pasisveikino!");
}

