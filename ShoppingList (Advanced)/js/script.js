let product_array = [];


let stored_products_string = localStorage.getItem("PRODUCTS");
let stored_products = JSON.parse(stored_products_string);
console.log(stored_products);

if(stored_products != null){    
    product_array = stored_products;
}

printProducts(product_array);

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

    // issaugot shopping lista
    let product_array_as_string = JSON.stringify(product_array);
    localStorage.setItem("PRODUCTS", product_array_as_string);
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
