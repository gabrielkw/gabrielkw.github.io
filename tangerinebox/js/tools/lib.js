function getById(id) {
    return document.getElementById(id);
}

function getByClass(className) {
    return document.getElementsByClassName(className);
}

function getInputs() {
    return document.getElementsByTagName("input");
}

function loadTool(name) {
    var xhttp = new XMLHttpRequest();
    xhttp.onreadystatechange = function () {
        if (xhttp.readyState == 4 && xhttp.status == 200) {
            document.getElementById("toolView").innerHTML = xhttp.responseText;
        }
    };
    xhttp.open("GET", "tools/" + name + ".html", true);
    xhttp.send();
}

function submitConsole() {
    loadTool(getById("tconsole").value);
}