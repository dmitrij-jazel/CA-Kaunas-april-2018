let product_array = [];

function sub(){
    //nuskaityti reiksme nuo laukelio
    let newProduct = document.getElementById("prod").value;

    //patikrinti ar elementas egzistuoja
    let egzistuoja = false; // boolean

    egzistuoja = checkForDuplicates(newProduct, product_array);

    // issaugoti reiksme i masyva
    if(egzistuoja){
        // show alert - product exists
        alert("DUPLIKATAS");
    }else{
        // add product that does not exist
        product_array.push(newProduct); 
    }     
   
    // atvaizduoti masyva
    printProducts(product_array);
}

function printProducts(product_array){
    let h = "";
    h = h + "<ul>";
    for(let i = 0; i < product_array.length; i++) {        
        h = h + "<li>"+product_array[i] + "</li>";
    }
    h = h + " </ul>";   
    document.getElementById("result").innerHTML = h;
}



function checkForDuplicates(newProduct, product_array){
    let found = false;
    for(let i = 0; i < product_array.length; i++){
        if(product_array[i] == newProduct){
            found = true;
        }
    }
    return found;
}
