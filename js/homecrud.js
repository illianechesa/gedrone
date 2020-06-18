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
    document.getElementById("aeronaves").innerHTML = '<strong>Listado</strong><tr> <th>Grupo</th> <th>Componente</th> <th>ID</th> </tr> <tr> <th>GF</th> <td><a href="#" onclick="loadMto()">Ala</a></td> <td>1</td> </tr> <tr> <th>M</th> <td><a href="#" onclick="loadMto()">Motor 1</a></td> <td>2</td> </tr> <tr> <th>M</th> <td><a href="#" onclick="loadMto()">Motor 2</a></td> <td>3</td> </tr> <tr> <th>V</th> <td><a href="#" onclick="loadMto()">Hélice</a></td> <td>4</td> </tr> <tr> <th>M</th> <td><a href="#" onclick="loadMto()">Corcho</a></td> <td>5</td> </tr> <tr><td colspan="3"><button onclick="hideModel()">Ocultar listado</button></td></tr>';
    document.getElementById("aeronaves").style.visibility = "visible"
}

function hideModel() {
    document.getElementById("aeronaves").innerHTML = '';
    document.getElementById("aeronaves").style.visibility = "hidden"
}

function loadMto() {
    document.getElementById("persona").innerHTML = '<tr> <th>Instancia</th> <th>Horas vuelo</th> <th>Fecha revisión</th> <th>Mantenimiento</th> </tr> <tr> <th>132</th> <td>12 horas</td> <td>07/07/2020</td> <td><img src="../img/mantenimiento_icon.png" alt="mantenimiento" height="15px" width="15px"> </td> </tr> <tr> <th>132</th> <td>12 horas</td> <td>07/07/2020</td> <td><img src="../img/mantenimiento_icon.png" alt="mantenimiento" height="15px" width="15px"> </td> </tr> <tr> <th>132</th> <td>12 horas</td> <td>07/07/2020</td> <td><img src="../img/mantenimiento_icon.png" alt="mantenimiento" height="15px" width="15px"> </td> </tr> <tr> <th>132</th> <td>12 horas</td> <td>07/07/2020</td> <td><img src="../img/mantenimiento_icon.png" alt="mantenimiento" height="15px" width="15px"> </td> </tr> <tr> <th>132</th> <td>12 horas</td> <td>07/07/2020</td> <td><img src="../img/mantenimiento_icon.png" alt="mantenimiento" height="15px" width="15px"> </td> </tr> <tr> <th><button onclick="hidemto()">Ocultar</button></th> </tr>';
    document.getElementById("persona").style.visibility = "visible"
}

function hidemto() {
    document.getElementById("persona").innerHTML = "";
    document.getElementById("persona").style.visibility = "hidden";
}

function registrarvuelo() {
    window.open("registrarvuelo.html", "_self");
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
    document.getElementById("vuelos").innerHTML = '<tr> <th>Modelo: </th> <td> <select name="modelo" id=""> <option>M1</option> <option>M2</option> <option>M3</option> <option>M4</option> <option>M5</option> </select> </td> </tr> <tr> <th>NºSerie: </th> <th><input type="text" name="modelo"></th> </tr> <tr> <th>PIN: </th> <th><input type="text" name="modelo"></th> </tr> <tr> <th>CE: </th> <th><input type="text" name="modelo"></th> </tr> <tr> <th>Matricula: </th> <th><input type="text" name="modelo"></th> </tr> <tr> <th>Estado: </th> <th> <select> <option name="operativo" value="operativo">Operativa</option> <option name="baja" value="baja">Baja</option> </select> </th> </tr> <tr> <th> <input type="submit" value="Guardar"> </th> <th> <input type="reset" value="Restaurar campos"> </th>';
    document.getElementById("vuelos").style.visibility = "visible"
}