let CARS = [];

function reg(){
    
    let brand_text = document.getElementById("brand").value;

    let model_text = document.getElementById("model").value;

    let engine_text = document.getElementById("engine").value;
    let engine_number = Number(engine_text);

    let hp_text = document.getElementById("hp").value;
    let hp_number = Number(hp_text);

    let car = {
        brand: brand_text,
        model: model_text,
        engine: engine_number,
        hp: hp_number
    }

    CARS.push(car);
    
    console.log(CARS);
}

