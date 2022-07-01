var Name = document.getElementById("Name");
var Url = document.getElementById("URL");

if (localStorage.getItem("WebContainer") == null) {
    var websites = [];
}
else {
    websites = JSON.parse(localStorage.getItem("WebContainer"));
    display();

}

function add() {
    var regexName = /^[a-z A-z]+[1-9]*?[a-z A-Z]*?$/;
    var regexUrl = /^https:\/\/.+$/;
    if (regexName.test(Name.value) && regexUrl.test(Url.value)) {
        var website = {
            Name: Name.value,
            Url: Url.value
        }
        websites.push(website);
        localStorage.setItem("WebContainer", JSON.stringify(websites));
        display();
        Name.value = null;
        Url.value = null;
    }
    else if (regexName.test(Name.value) == false && regexUrl.test(Url.value) == true) {
        alert("Check The Name");
    }
    else if (regexName.test(Name.value) == true && regexUrl.test(Url.value) == false) {
        alert("Check The Link")
    }
    else {
        alert("Check Your Date")
    }

}

function display() {
    var cartona = ``;
    for (var i = 0; i < websites.length; ++i) {

        cartona += `<div class="text-light bg-dark pt-3 pb-3 d-flex mb-1">
        <p class="w-25 text-start ms-5" style="font-size: 25px;">${websites[i].Name}</p>
        <a class="btn btn-outline-light Ps-3 pe-3 pt-3 me-3" href="${websites[i].Url}" target="_blank" />Visit</a>
        <input type="button" class="btn btn-outline-danger" value="Delete" onclick="Delete(${i})"/>
        </div>`

    }

    document.getElementById("my-container").innerHTML = cartona;
}
function Delete(index) {
    websites.splice(index, 1);
    localStorage.setItem("WebContainer", JSON.stringify(websites));
    display();
}