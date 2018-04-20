// function btn_click(btn){    
//     let btnID = btn.id;

//     alert(btnID+" was clicked");
//     //document.getElementById("").innerHTML = "<h3>"+btnID+" was clicked</h3>";
// }

//"CLICK" Event listener
$(".specialBtn").click(function () {
    $(this).text("I was clicked!");
    $(this).fadeOut('fast').fadeIn(5000);
});

//"Hover" event listener
$(".specialBtn").hover(function () {
    $(this).text("Stop hovering me!");
}, function() { // this is "Call-back" jquery funkcija
    $(this).text("I was hovered");
});


// Ivikis
$(".result").click(function () {
    // ivikio veiksmas
    //$(this).fadeToggle(3000);
});

$("#btn_getValue_1").click(function () {
    //let v = $(".txt_field").val(); //istraukiam value is tekstinio laukelio
    
    // gaunam value is select boxo
    let carBrand = $("#car_select").val();

    alert(carBrand);
});


$(".slideEffect").click(function () {
    $(this).slideToggle(5000);
});

$(".fadeEffect").click(function () {
    $(this).fadeToggle(5000);
});

$("#getVal").click(function () {
    let country = $("#country").val(); // istraukiam value is select boxo
    
    let gender = $("input.gender_select:checked").val(); // istraukiam value is radio inputo

    alert(country);

});


$("#txt_1").keyup(function () {
    alert($(this).val());// on text box key up, alert tai kas parasyta
});



