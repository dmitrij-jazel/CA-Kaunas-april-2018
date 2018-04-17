let product_array = [];

function sub(){
    //nuskaityti reiksme nuo laukelio
    let newProduct = document.getElementById("prod").value;

    // issaugoti reiksme i masyva
    product_array.push(newProduct);  
   
    // atvaizduoti masyva
    printProducts(product_array);

}

function printProducts(product_array){
    let h = "";//console.log("l:16");
    h = h + "<ul>";//console.log("l:17");
    for(let i = 0; i < product_array.length; i++) {
        //console.log(product[i]);
        h = h + "<li>"+product_array[i] + "</li>";
    }
    h = h + " </ul>";//console.log("l:22");   
    document.getElementById("result").innerHTML = h;//console.log("l:23");
}
