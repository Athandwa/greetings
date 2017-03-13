var textBox = document.querySelector(".user");
var text = document.querySelector(".para");
var language = document.getElementsByName("language");
var count = document.getElementById("counter");
var button2 = document.getElementById("resetBtn");
var namesGreeted = {};


// Global Variable
var countClicks = 0;

// retrieve variables in the browser
var storageCounts = localStorage.getItem("countClicks");
if (storageCounts) {
    countClicks = Number(storageCounts);
    document.getElementById("counter").innerHTML = countClicks;
}

//created a reset button for the counter
function reset() {
    window.localStorage.removeItem("countClicks");
    let countClicks = 0;
    window.localStorage.setItem("countClicks", countClicks);
    document.getElementById("counter").innerHTML = countClicks;
};
console.log(countClicks);

var button = document.querySelector(".btn");
button.addEventListener("click", function() {
    var name = document.querySelector(".user").value;

    if (language[0].checked && name.length > 0 && namesGreeted[name] === undefined) {
        text.innerHTML = "Molo " + name + "!";
        namesGreeted[name] = name;
        countClicks += 1;
    } else if (language[0].checked && namesGreeted[name] !== undefined) {
        text.innerHTML = "Molo Kwakhona " + name + "!";
    }
    else if (language[1].checked && name.length > 0 && namesGreeted[name] === undefined) {
        text.innerHTML = "Hello " + name + "!";
        namesGreeted[name] = name;
        countClicks += 1;
    } else if (language[1].checked && namesGreeted[name] !== undefined) {
        text.innerHTML = "Hello again " + name + "!";
    }
    else if (language[2].checked && name.length > 0 && namesGreeted[name] === undefined) {
        text.innerHTML = "Halo " + name + "!";
        namesGreeted[name] = name;
        countClicks += 1;
    } else if (language[2].checked && name.length > 0 && namesGreeted[name] !== undefined) {
        text.innerHTML = "Halo weer " + name + "!";
    }

    document.getElementById("counter").innerHTML = countClicks;
    // store
    localStorage.setItem("countClicks", countClicks);

});
alert("Welcome to the greeting webpage");
