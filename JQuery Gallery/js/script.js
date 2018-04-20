// function btn_click(btn){    
//     let btnID = btn.id;

//     alert(btnID+" was clicked");
//     //document.getElementById("").innerHTML = "<h3>"+btnID+" was clicked</h3>";
// }

//"CLICK" Event listener
$(".btn").click(function () {
    $(this).text("I was clicked!");
    $(this).fadeOut('fast').fadeIn(5000);
});

//"Hover" event listener
$(".btn").hover(function () {
    $(this).text("Stop hovering me!");
}, function() { // this is "Call-back" jquery funkcija
    $(this).text("I was hovered");
});


// Ivikis
$(".result").click(function () {
    // ivikio veiksmas
    $(this).fadeToggle(3000);
});