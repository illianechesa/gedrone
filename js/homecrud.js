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

function listFlights() {
    document.getElementById("aeronaves").innerHTML = '<tr> <th>Vuelo</th> <th>Aeronave</th> <th>Piloto</th> <th>Fecha</th> <th>Realizado</th> <th></th> </tr> <tr> <td>Vuelo 1</td> <td>M5-123</td> <td>Illia</td> <td>22/08/2021</td> <td><img src="img/check_icon.png" alt="info" height="15px" width="15px"></td> <td></td> </tr> <tr> <td>Vuelo 2</td> <td>M1-1</td> <td>Jesús</td> <td>22/08/2021</td> <td><img src="img/check_icon.png" alt="info" height="15px" width="15px"></td> <td></td> </tr> <tr> <td>Vuelo 3</td> <td>M1-991</td> <td>Pedro</td> <td>22/08/2021</td> <td></td> <td></td> </tr> <tr> <td><input type="text"></td> <td> <select name="modelo" id=""> <option>M1</option> <option>M2</option> <option>M3</option> <option>M4</option> <option>M5</option> </select> </td> <td><input type="text"></td> <td><input type="date"></td> <td><input type="checkbox"></td> <td><button onclick="anadirVuelo()">Añadir Vuelo</button></td> </tr> <tr> <td> <button onclick="hideFlights()">Ocultar vuelos</button> </td> </tr>';
    document.getElementById("aeronaves").style.visibility = "visible"
}

function hideFlights() {
    document.getElementById("aeronaves").innerHTML = "";
    document.getElementById("aeronaves").style.visibility = "hidden"
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
    document.getElementById("operacionesp").innerHTML = '<ul id="myUL" style="max-height: 150px; padding-left: 0px;"> <li><a href="#" onclick="showFlightList()">Aeronave 1</a></li> <li><a href="#" onclick="showFlightList()">Aeronave 2</a></li> <li><a href="#" onclick="showFlightList()">Aeronave 3</a></li> <li><a href="#" onclick="showFlightList()">Aeronave 4</a></li> <li><a href="#" onclick="showFlightList()">Aeronave 5</a></li> <li><a href="#" onclick="showFlightList()">Aeronave 6</a></li> <li><a href="#" onclick="showFlightList()">Aeronave 7</a></li> <li><a href="#" onclick="showFlightList()">Aeronave 8</a></li> <li><a href="#" onclick="showFlightList()">Aeronave 9</a></li> <li><a href="#" onclick="showFlightList()">Aeronave 10</a></li> </ul>';
    document.getElementById("operacionesp").style.visibility = "visible"
}

function showFlightList() {
    document.getElementById("vuelosp").innerHTML = '<ul id="myUL" style="max-height: 150px; padding-left: 0px;"> <li><a href="#"  onclick="showFlightInfo()">Vuelo 1</a><img src="../img/edit_icon.png" alt="" style="width: 15px; height: 15px; margin-left:20px" onclick="addFlightToList()"></img></li> <li><a href="#"  onclick="showFlightInfo()">Vuelo 2</a><img src="../img/edit_icon.png" alt="" style="width: 15px; height: 15px; margin-left:20px" onclick="addFlightToList()"></img></li> <li><a href="#"  onclick="showFlightInfo()">Vuelo 3</a><img src="../img/edit_icon.png" alt="" style="width: 15px; height: 15px; margin-left:20px" onclick="addFlightToList()"></img></li> <li><a href="#"  onclick="showFlightInfo()">Vuelo 4</a><img src="../img/edit_icon.png" alt="" style="width: 15px; height: 15px; margin-left:20px" onclick="addFlightToList()"></img></li> <li><a href="#"  onclick="showFlightInfo()">Vuelo 5</a><img src="../img/edit_icon.png" alt="" style="width: 15px; height: 15px; margin-left:20px" onclick="addFlightToList()"></img></li> <li><a href="#"  onclick="showFlightInfo()">Vuelo 6</a><img src="../img/edit_icon.png" alt="" style="width: 15px; height: 15px; margin-left:20px" onclick="addFlightToList()"></img></li> <li><a href="#"  onclick="showFlightInfo()">Vuelo 7</a><img src="../img/edit_icon.png" alt="" style="width: 15px; height: 15px; margin-left:20px" onclick="addFlightToList()"></img></li> <li><a href="#"  onclick="showFlightInfo()">Vuelo 8</a><img src="../img/edit_icon.png" alt="" style="width: 15px; height: 15px; margin-left:20px" onclick="addFlightToList()"></img></li> <li><a href="#"  onclick="showFlightInfo()">Vuelo 9</a><img src="../img/edit_icon.png" alt="" style="width: 15px; height: 15px; margin-left:20px" onclick="addFlightToList()"></img></li> <li><a href="#"  onclick="showFlightInfo()">Vuelo 10</a><img src="../img/edit_icon.png" alt="" style="width: 15px; height: 15px; margin-left:20px" onclick="addFlightToList()"></img></li> </ul>';
    document.getElementById("vuelosp").style.visibility = "visible"
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
    document.getElementById("aeronaves").innerHTML = '<tr> <th> Acciones </th> <th></th> </tr> <tr> <td>¿Has hecho x?</td> <td><input type="checkbox"></td> </tr> <tr> <td>¿Has hecho y?</td> <td><input type="checkbox"></td> </tr> <tr> <td>¿Has hecho z?</td> <td><input type="checkbox"></td> </tr> <tr> <td>¿Has hecho t?</td> <td><input type="checkbox"></td> </tr> <tr> <td colspan="2"><button onclick="history.back()">Guardar</button></td> </tr>';
    document.getElementById("aeronaves").style.visibility = "visible"
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
    x.innerHTML = '<h6 style="width: 40%; margin-top: 30px; margin-left: 150px; margin-right: 0px;">Para añadir un nuevo modelo, adjunte un excel</h6> <input style="width: 80%; margin-left: 0px; margin-top: 30px;" type="file" name="adjunto" accept=".xlsx,.xlsm" /> <button style="margin-top: 30px; margin-left: 0px; width: 80px; height: 30px;" onclick="loadModel()" style="color: black;">Cargar</button>';
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
