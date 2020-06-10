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

function addModel() {
    window.open("addmodel.html", "_self");
}

function addDrone() {
    window.open("adddrone.html", "_self");
}

function loadModel() {
    document.getElementById("aeronaves").innerHTML = '<tr> <th>GF</th> <td>Ala</td> <td>1</td> </tr> <tr> <th>M</th> <td>Motor 1</td> <td>2</td> </tr> <tr> <th>M</th> <td>Motor 2</td> <td>3</td> </tr> <tr> <th>V</th> <td>Hélice</td> <td>4</td> </tr> <tr> <th>M</th> <td>Corcho</td> <td>5</td> </tr>';
}

