let product_array = [];

function add(){
    //nuskaityti reiksme nuo laukelio
    let newProduct = document.getElementById("prod").value;

    //patikrinti ar elementas egzistuoja
    let rasta_dublikatu = false; // boolean
    
    rasta_dublikatu = checkForDuplicates(newProduct, product_array);

    if (rasta_dublikatu  ==  false) {
        product_array.push(newProduct);
    } else {
        alert("Reiksme jau egzistuoja!");
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
