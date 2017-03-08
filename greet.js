var textBox = document.querySelector(".user");
var button = document.querySelector(".btn");
var text = document.querySelector(".para");
var language = document.getElementsByName("language");
var count = document.getElementById("counter")
//var numCounts = localStorage.getItem("on_load_counter");
//var namesGreeted = {};
//var button2 = document.querySelector(".resetBtn")



var countClicks = 0;
button.addEventListener("click", function() {

    if (language[0].checked) {
        var textBox = document.querySelector(".user");
        text.innerHTML = "Molo " + textBox.value + "!";
    } else if (language[1].checked) {
        var textBox = document.querySelector(".user");
        text.innerHTML = "Hello " + textBox.value + "!";
    } else if (language[2].checked) {
        var textBox = document.querySelector(".user");
        text.innerHTML = "Halo " + textBox.value + "!";
    }
    countClicks += 1;
    document.getElementById("counter").innerHTML = countClicks;
});
// alert("Welcome to the greeting webpage");
