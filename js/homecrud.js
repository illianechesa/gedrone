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
    var x = document.getElementById("aeronaves");
    if (x.style.visibility === "hidden") {
        x.style.visibility = "visible";
        x.style.display = "block"
    }
    else {
        x.style.visibility = "hidden";
        x.style.display = "none";
    }
}

function loadCargaConf() {
    var x = document.getElementById("aeronaves");
    if (x.style.visibility === "hidden") {
        x.style.visibility = "visible";
        x.style.display = "block"
    }
    else {
        x.style.visibility = "hidden";
        x.style.display = "none";
    }
}

function loadModelNoMto() {
    var x = document.getElementById("aeronaves");
    if (x.style.visibility === "hidden") {
        x.style.visibility = "visible";
        x.style.display = "block"
    }
    else {
        x.style.visibility = "hidden";
        x.style.display = "none";
    }
}

function hideModel() {
    document.getElementById("aeronaves").innerHTML = '';
    document.getElementById("aeronaves").style.visibility = "hidden"
}

function showCheckIn() {
    var x = document.getElementById("persona");
    if (x.style.visibility === "hidden") {
        x.style.visibility = "visible";
        x.style.display = "block"
    }
    else {
        x.style.visibility = "hidden";
        x.style.display = "none";
    }
}

function loadMto() {
    var x = document.getElementById("persona");
    if (x.style.visibility === "hidden") {
        x.style.visibility = "visible";
        x.style.display = "block"
    }
    else {
        x.style.visibility = "hidden";
        x.style.display = "none";
    }
    loadHistory();
}

function hidemto() {
    document.getElementById("persona").innerHTML = "";
    document.getElementById("persona").style.visibility = "hidden";
}

function registrarvuelo() {
    window.open("registrarvuelo.html", "_self");
}

function loadHistory() {
    var x = document.getElementById("piloto");
    if (x.style.visibility === "hidden") {
        x.style.visibility = "visible";
        x.style.display = "block"
    }
    else {
        x.style.visibility = "hidden";
        x.style.display = "none";
    }
}

function hideHistory() {
    document.getElementById("piloto").innerHTML = "";
    document.getElementById("piloto").style.visibility = "hidden";
}

function addProject() {
    window.open("addproject.html", "_self");
}

function showAddDrone() {
    var x = document.getElementById("adicional");
    if (x.style.visibility === "hidden") {
        x.style.visibility = "visible";
        x.style.display = "block"
    }
    else {
        x.style.visibility = "hidden";
        x.style.display = "none";
    }
}

function showAddCarga() {
    var x = document.getElementById("adicional");
    if (x.style.visibility === "hidden") {
        x.style.visibility = "visible";
        x.style.display = "block"
    }
    else {
        x.style.visibility = "hidden";
        x.style.display = "none";
    }
}

function showAddComm() {
    var x = document.getElementById("adicional");
    if (x.style.visibility === "hidden") {
        x.style.visibility = "visible";
        x.style.display = "block"
    }
    else {
        x.style.visibility = "hidden";
        x.style.display = "none";
    }
}

function showAddSist() {
    var x = document.getElementById("adicional");
    if (x.style.visibility === "hidden") {
        x.style.visibility = "visible";
        x.style.display = "block"
    }
    else {
        x.style.visibility = "hidden";
        x.style.display = "none";
    }
}

function addFlightToList() {
    window.open("addflight.html", "_self");
}

function showAeronaveList() {
    var x = document.getElementById("operacionesp");
    if (x.style.visibility === "hidden") {
        x.style.visibility = "visible";
        x.style.display = "block"
    }
    else {
        x.style.visibility = "hidden";
        x.style.display = "none";
    }
}

function showFlightList() {
    var x = document.getElementById("vuelosp");
    if (x.style.visibility === "hidden") {
        x.style.visibility = "visible";
        x.style.display = "block"
    }
    else {
        x.style.visibility = "hidden";
        x.style.display = "none";
    }
}

function showFlightInfo() {
    var x = document.getElementById("googleMap");
    var y = document.getElementById("informacionvuelo");
    var z = document.getElementById("headerdatos");
    if (x.style.visibility === "hidden") {
        x.style.visibility = "visible";
        x.style.display = "block"
        y.style.visibility = "visible";
        y.style.display = "block";
        z.style.visibility = "visible";
        z.style.display = "block";
    }
    else {
        x.style.visibility = "hidden";
        x.style.display = "none";
        y.style.visibility = "hidden";
        y.style.display = "none";
        z.style.visibility = "hidden";
        z.style.display = "none";
    }
}

function openCalendar() {
    var dateControl = document.querySelector('input[type="date"]');
    dateControl.value = '2017-06-01';
}

function checkChecklist() {
    var x = document.getElementById("aeronaves");
    if (x.style.visibility === "hidden") {
        x.style.visibility = "visible";
        x.style.display = "block"
    }
    else {
        x.style.visibility = "hidden";
        x.style.display = "none";
    }
}

function showPiloto() {
    var x = document.getElementById("menu1");
    if (x.style.visibility === "hidden") {
        x.style.visibility = "visible";
        x.style.display = "block"
    }
    else {
        x.style.visibility = "hidden";
        x.style.display = "none";
    }
}

function showAlumno() {
    var x = document.getElementById("menu2");
    if (x.style.visibility === "hidden") {
        x.style.visibility = "visible";
        x.style.display = "block"
    }
    else {
        x.style.visibility = "hidden";
        x.style.display = "none";
    }
}

function showInstructor() {
    var x = document.getElementById("menu3");
    if (x.style.visibility === "hidden") {
        x.style.visibility = "visible";
        x.style.display = "block"
    }
    else {
        x.style.visibility = "hidden";
        x.style.display = "none";
    }
}

function showMecanico() {
    var x = document.getElementById("menu4");
    if (x.style.visibility === "hidden") {
        x.style.visibility = "visible";
        x.style.display = "block"
    }
    else {
        x.style.visibility = "hidden";
        x.style.display = "none";
    }
}

function showObservador() {
    var x = document.getElementById("menu2");
    if (x.style.visibility === "hidden") {
        x.style.visibility = "visible";
        x.style.display = "block"
    }
    else {
        x.style.visibility = "hidden";
        x.style.display = "none";
    }
}

function showAddPersona() {
    var x = document.getElementById("menu5");
    if (x.style.visibility === "hidden") {
        x.style.visibility = "visible";
        x.style.display = "block"
    }
    else {
        x.style.visibility = "hidden";
        x.style.display = "none";
    }
}

function showhidePeople() {
    var x = document.getElementById("tablamodelos");
    if (x.style.visibility === "hidden") {
        x.style.visibility = "visible";
        x.style.display = "block"
    }
    else {
        x.style.visibility = "hidden";
        x.style.display = "none";
    }
}

function showhidemodels() {
    var x = document.getElementById("tablamodelos");
    if (x.style.visibility === "hidden") {
        x.style.visibility = "visible";
        x.style.display = "block"
    }
    else {
        x.style.visibility = "hidden";
        x.style.display = "none";
    }
}

function showhideDrones() {
    var x = document.getElementById("tablamodelos");
    if (x.style.visibility === "hidden") {
        x.style.visibility = "visible";
        x.style.display = "block"
    }
    else {
        x.style.visibility = "hidden";
        x.style.display = "none";
    }
}

function addNewModel() {
    var x = document.getElementById("newmodel");
    if (x.style.visibility === "hidden") {
        x.style.visibility = "visible";
        x.style.display = "block"
    }
    else {
        x.style.visibility = "hidden";
        x.style.display = "none";
    }
}

function migrate() {
    var person = prompt("A que modelo quieres migrar?");
    alert("Migrado correctamente");
}

function deactivateButton() {
    var txt;
    var r = confirm("¿Estás seguro que deseas desactivar esta aeronave?");
    if (r == true) {
        alert("Se ha desactivado correctamente");
    } else {
        txt = "Cancelado";
    }
}

function addIncident() {
    var x = document.getElementById("anadirIncidencia");
    if (x.style.visibility === "hidden") {
        x.style.visibility = "visible";
        x.style.display = "block"
    }
    else {
        x.style.visibility = "hidden";
        x.style.display = "none";
    }
}

function editIncident() {
    var x = document.getElementById("editarIncidencia");
    if (x.style.visibility === "hidden") {
        x.style.visibility = "visible";
        x.style.display = "block"
    }
    else {
        x.style.visibility = "hidden";
        x.style.display = "none";
    }
}

function showIncidentHistory() {
    var modal = document.getElementById('modal');
    var btn = document.getElementById("myBtn");
    var span = document.getElementsByClassName("close")[0];

    btn.onclick = function () {
        modal.style.display = "block";
    }

    span.onclick = function () {
        modal.style.display = "none";
    }

    window.onclick = function (event) {
        if (event.target == modal) {
            modal.style.display = "none";
        }
    }
}

function verEstudioSeguridad() {
    var x = document.getElementById("estudioseguridad");
    if (x.style.visibility === "hidden") {
        x.style.visibility = "visible";
        x.style.display = "block"
    }
    else {
        x.style.visibility = "hidden";
        x.style.display = "none";
    }
}

function verAeronaves() {
    var x = document.getElementById("aeronaveslista");
    if (x.style.visibility === "hidden") {
        x.style.visibility = "visible";
        x.style.display = "block"
    }
    else {
        x.style.visibility = "hidden";
        x.style.display = "none";
    }
}

function addAeronaveStats() {
    var x = document.getElementById("anadiraeronave");
    if (x.style.visibility === "hidden") {
        x.style.visibility = "visible";
        x.style.display = "block"
    }
    else {
        x.style.visibility = "hidden";
        x.style.display = "none";
    }
}

function addOperacionesStats() {
    var x = document.getElementById("anadiroperacion");
    if (x.style.visibility === "hidden") {
        x.style.visibility = "visible";
        x.style.display = "block"
    }
    else {
        x.style.visibility = "hidden";
        x.style.display = "none";
    }
}

function addRequisitosStats() {
    var x = document.getElementById("anadirrequisito");
    if (x.style.visibility === "hidden") {
        x.style.visibility = "visible";
        x.style.display = "block"
    }
    else {
        x.style.visibility = "hidden";
        x.style.display = "none";
    }
}

function addAdicionalStats() {
    var x = document.getElementById("anadiradicional");
    if (x.style.visibility === "hidden") {
        x.style.visibility = "visible";
        x.style.display = "block"
    }
    else {
        x.style.visibility = "hidden";
        x.style.display = "none";
    }
}