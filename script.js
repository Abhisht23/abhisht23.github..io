window.onload = function() {
	document.getElementById('about').onclick = function() {
    document.getElementById('container').innerHTML = "";
    document.getElementById('control').innerHTML = "";
    document.getElementById('menu').className = 'hiddenmenu';
    var container = document.getElementById('container');
    var p = document.createElement('p');
    p.id = 'aboutus';
    container.appendChild(p);
    var text = document.createTextNode("memories bring back ..memories bring back  you");
    p.appendChild(text);
}
    document.getElementById('menulink').onclick = function() {
        var menu = document.getElementById('menu');
        if(menu.className != 'shownmenu') {
            menu.className = 'shownmenu';
        }
        else {
            menu.className = 'hiddenmenu';
        }
    }
}
function check_web_storage_support() {
    if(typeof(Storage) !== "undefined") {
        return(true);
    }
    else {
        alert("Web storage unsupported!");
        return(false);
    }
}
function display_saved_note() {
    if(check_web_storage_support() == true) {
        result = localStorage.getItem('note');
    }
    if(result === null) {
        result = "No note saved";
    }
    document.getElementById('area').value = result;
}
function save() {
    if(check_web_storage_support() == true) {
        var area = document.getElementById("area");
        if(area.value != '') {
            localStorage.setItem("note", area.value);
        }
        else {
            alert("Nothing to save");
        }
    }
}
function clear() {
    document.getElementById('area').value = "";
}

	