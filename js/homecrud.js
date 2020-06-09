function editDrone() {
    window.open("editdrone.html", "_self");
}

function editFlight() {
    window.open("editflight.html", "_self");
}

function deleteDrone() {
    var txt;
    var r = confirm("¿Estás seguro que deseas eliminar esta aeronave?");
    if (r == true) {
        txt = "Se ha eliminado la aeronave";
        window.open("index.html", "_self");
    } else {
        txt = "Cancelado";
    }
}

function deleteFlight() {
    var txt;
    var r = confirm("¿Estás seguro que deseas eliminar este vuelo?");
    if (r == true) {
        txt = "Se ha eliminado el vuelo";
    } else {
        txt = "Cancelado";
    }
}