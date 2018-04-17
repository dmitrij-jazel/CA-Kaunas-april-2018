let colors = ["red","green","blue"];
colors.push("red");

colors = clearDuplicates(colors);

let colors_as_string = colors.toString();
console.log(typeof colors_as_string); // Object
console.log(colors_as_string);

document.getElementById("result").innerText = colors_as_string;
//console.log(colors);













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

//slice()
//indexOf()
//toString()
//reverse()

//sort()

