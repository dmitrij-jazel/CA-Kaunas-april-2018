let colors = ["red","green","blue"];
colors.push("red");
colors = clearDuplicates(colors);

let colors_as_string = colors.toString();
// sukuria stringa is masyvo "red,green,blue"

document.getElementById("result").innerText = colors_as_string;
//console.log(colors);


let split_list = "black,blue,yellow";
let splitted_colors = split_list.split(',');

splitted_colors = splitted_colors.reverse(); // Apvercia masyva, padaro "yellow,blue,black" 

// tikrinam ar zodis yra Rastas
let wordFound = splitted_colors.indexOf("black") > -1;

console.log(splitted_colors);


let color_list = "black,blue,yellow".split(',');
//console.log(colors2);
if(color_list.indexOf("red") == -1){
    //console.log("red nerasta");
}else{
    //console.log("Blue gyvena "+colors2.indexOf("blue")+" vagone");
}









// FUNKCIJOS


function clearDuplicates(list_A){
    let list_B = [];

     for(let i = 0; i < list_A.length; i++) {
        if( list_B.indexOf(list_A[i]) == -1 ){
            list_B.push(list_A[i]);
        }
     }

    return list_B;
}

 function deleteWord(word, list_A){    
     let x = list_A.indexOf(word);
     list_A.splice(word, 1); 
     return list_A;
 }



//pop
//splice()
//split()
//slice()
//indexOf()
//toString()





