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
    document.getElementById("aeronaves").innerHTML = '<tr> <th>Grupo</th> <th>Componente</th> <th>ID</th> </tr> <tr> <th>GF</th> <td><a href="#" onclick="loadMto()">Refuerzo_FC</a><img src="../img/edit_icon.png" style="margin-left: 5px;" alt="editar" height="13px" width="13px" onclick=""></td> <td>P-A-01</td> </tr> <tr> <th>M</th> <td><a href="#" onclick="loadMto()">Frontal_flap</a><img src="../img/edit_icon.png" style="margin-left: 5px;" alt="editar" height="13px" width="13px" onclick=""></td> <td>P-A-02</td> </tr> <tr> <th>M</th> <td><a href="#" onclick="loadMto()">Tubo_FC</a><img src="../img/edit_icon.png" style="margin-left: 5px;" alt="editar" height="13px" width="13px" onclick=""></td> <td>P-A-03</td> </tr> <tr> <th>V</th> <td><a href="#" onclick="loadMto()">Wing_fence</a><img src="../img/edit_icon.png" style="margin-left: 5px;" alt="editar" height="13px" width="13px" onclick=""></td> <td>P-A-04</td> </tr> <tr> <th>M</th> <td><a href="#" onclick="loadMto()">Brazo_flap</a><img src="../img/edit_icon.png" style="margin-left: 5px;" alt="editar" height="13px" width="13px" onclick=""></td> <td>P-A-05</td> </tr> <tr> <th>M</th> <td><a href="#" onclick="loadMto()">Antena_DMD</a><img src="../img/edit_icon.png" style="margin-left: 5px;" alt="editar" height="13px" width="13px" onclick=""></td> <td>Paux</td> </tr> <tr> <td colspan="3"></td> </tr>';
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
    document.getElementById("aeronaves").innerHTML = '<tr> <th>Grupo</th> <th>Componente</th> <th>ID</th> </tr> <tr> <th>GF</th> <td><a href="#">Refuerzo_FC</a><img src="../img/edit_icon.png" style="margin-left: 5px;" alt="editar" height="13px" width="13px" onclick=""></td> <td>P-A-01</td> </tr> <tr> <th>M</th> <td><a href="#">Frontal_flap</a><img src="../img/edit_icon.png" style="margin-left: 5px;" alt="editar" height="13px" width="13px" onclick=""></td> <td>P-A-02</td> </tr> <tr> <th>M</th> <td><a href="#">Tubo_FC</a><img src="../img/edit_icon.png" style="margin-left: 5px;" alt="editar" height="13px" width="13px" onclick=""></td> <td>P-A-03</td> </tr> <tr> <th>V</th> <td><a href="#">Wing_fence</a><img src="../img/edit_icon.png" style="margin-left: 5px;" alt="editar" height="13px" width="13px" onclick=""></td> <td>P-A-04</td> </tr> <tr> <th>M</th> <td><a href="#">Brazo_flap</a><img src="../img/edit_icon.png" style="margin-left: 5px;" alt="editar" height="13px" width="13px" onclick=""></td> <td>P-A-05</td> </tr> <tr> <th>M</th> <td><a href="#">Antena_DMD</a><img src="../img/edit_icon.png" style="margin-left: 5px;" alt="editar" height="13px" width="13px" onclick=""></td> <td>Paux</td> </tr> <tr> <td colspan="3"></td> </tr>';
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
    document.getElementById("persona").innerHTML = '<tr> <th>Numero de serie</th> <th>Horas vuelo</th> <th>Fecha revisión</th> <th>Mantenimiento</th> </tr> <tr> <th>233423</th> <td>1 horas</td> <td><input type="date"></td> <td><img src="../img/mantenimiento_icon.png" alt="mantenimiento" height="15px" width="15px" onclick="loadHistory()"> <img src="../img/edit_icon.png" style="margin-left: 20px;" alt="editar" height="15px" width="15px" onclick="openCalendar()"> </td> </tr> <tr> <th>6757</th> <td>4 horas</td> <td><input type="date"></td> <td><img src="../img/mantenimiento_icon.png" alt="mantenimiento" height="15px" width="15px" onclick="loadHistory()"> <img src="../img/edit_icon.png" style="margin-left: 20px;" alt="editar" height="15px" width="15px" onclick="openCalendar()"></td> </tr> <tr> <th>65757</th> <td>15 horas</td> <td><input type="date"></td> <td><img src="../img/mantenimiento_icon.png" alt="mantenimiento" height="15px" width="15px" onclick="loadHistory()"> <img src="../img/edit_icon.png" style="margin-left: 20px;" alt="editar" height="15px" width="15px" onclick="openCalendar()"> </td> </tr> <tr> <th>56757</th> <td>1 horas</td> <td><input type="date"></td> <td><img src="../img/mantenimiento_icon.png" alt="mantenimiento" height="15px" width="15px" onclick="loadHistory()"> <img src="../img/edit_icon.png" style="margin-left: 20px;" alt="editar" height="15px" width="15px" onclick="openCalendar()"></td> </tr> <tr> <th>56757</th> <td>6 horas</td> <td><input type="date"></td> <td><img src="../img/mantenimiento_icon.png" alt="mantenimiento" height="15px" width="15px" onclick="loadHistory()"><img src="../img/edit_icon.png" style="margin-left: 20px;" alt="editar" height="15px" width="15px" onclick="openCalendar()"> </td> </tr> <tr> <th><button onclick="hidemto()">Ocultar</button></th> </tr>';
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
    document.getElementById("piloto").innerHTML = '<tr> <th>Fecha</th><th>Tipo</th> <th>Comentario</th> <td></td> </tr> <tr> <td>22/07/20</td><td>Revision</td> <td>Se ha arreglado el ala</td> <td></td> </tr> <tr> <td>24/07/20</td> <td>Sustitucion</td><td>Se ha revisado este componente</td> <td></td> </tr> <tr> <td><input type="date"></td><td><select><option>Revision</option><option>Sustitucion</option><option>Modificacion</option><option>Instalacion</option></select></td> <td><input type="text"></td> <td><button onclick="">Guardar</button></td> </tr> <tr> <td colspan="3"><button onclick="hideHistory()">Ocultar</button></td> </tr>';
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
    document.getElementById("adicional").innerHTML = '<tr> <th>Modelo: </th> <td> <select name="modelo" id=""> <option>M1</option> <option>M2</option> <option>M3</option> <option>M4</option> <option>M5</option> </select> </td> </tr> <tr> <th>NºSerie: </th> <th><input type="text" name="modelo"></th> </tr> <tr> <th>PIN: </th> <th><input type="text" name="modelo"></th> </tr> <tr> <th>CE: </th> <th><input type="text" name="modelo"></th> </tr> <tr> <th>Matricula: </th> <th><input type="text" name="modelo"></th> </tr> <tr> <th>Estado: </th> <th> <select> <option name="operativo" value="operativo">Operativa</option> <option name="baja" value="baja">Baja</option> </select> </th> </tr> <tr> <th> <input type="submit" value="Guardar"> </th> <th> <input type="reset" value="Restaurar campos"> </th>';
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
    document.getElementById("menu2").innerHTML = "";
    document.getElementById("menu2").style.visibility = "hidden";
    document.getElementById("menu3").innerHTML = "";
    document.getElementById("menu3").style.visibility = "hidden";
    document.getElementById("menu4").innerHTML = "";
    document.getElementById("menu4").style.visibility = "hidden";
    document.getElementById("menu5").innerHTML = "";
    document.getElementById("menu5").style.visibility = "hidden";
    document.getElementById("menu6").innerHTML = "";
    document.getElementById("menu6").style.visibility = "hidden";
    document.getElementById("menu1").innerHTML = '<h5>Persona</h5> <div class="row"> <table id="persona"> <tr> <th>Rol: </th> <td>Piloto </td> </tr> <tr> <th>Nombre: </th> <td>Illia</td> </tr> </table> </div> <h5>Piloto</h5> <div class="row"> <table id="piloto"> <tr> <th>Carnet: </th> <td>21312</td> </tr> <tr> <th>Certificados: </th> <td><a href="">EIS-123</a></td> </tr> <tr> <th>Persisos: </th> <td><a href="">GR11</a></td> </tr> <tr> <th>Formación: </th> <td>Prácticas</td> </tr> <tr> <th>Aeronaves: </th> <td>Marvin5, DJI Phantom</td> </tr> <tr> <th>Horas pilotadas: </th> <td>40 horas</td> </tr> </table> <img src="../img/flight_hours.png" alt="graph" style="width: 30%; height: 30%; margin-left: 25%; margin-top: 30px; margin-bottom: 30px;"> </div> <h5>Documentación</h5> <div class="row"> <table id="piloto"> <tr> <th>Seguro: </th> <td><input style="width: 50%;" type="file" name="adjunto" accept=".*" multiple /><strong style="margin-left: 10%;">22/07/2020</strong></td> </tr> <tr> <th>Certificados: </th> <td><input style="width: 50%;" type="file" name="adjunto" accept=".*" multiple /><strong style="margin-left: 10%;">22/07/2020</strong></td> </tr> </table> </div> <h5>Documentos adicionales</h5> <div class="row"> <table id="piloto"> <tr> <th></th> <td><input style="width: 50%;" type="file" name="adjunto" accept=".*" multiple /><strong style="margin-left: 10%;">22/07/2020</strong></td> </tr> <tr> <th></th> <td><input style="width: 50%;" type="file" name="adjunto" accept=".*" multiple /><strong style="margin-left: 10%;">22/07/2020</strong></td> </tr> </table> </div>';
    document.getElementById("menu1").style.visibility = "visible";
}

function showAlumno() {
    document.getElementById("menu1").innerHTML = "";
    document.getElementById("menu1").style.visibility = "hidden";
    document.getElementById("menu3").innerHTML = "";
    document.getElementById("menu3").style.visibility = "hidden";
    document.getElementById("menu4").innerHTML = "";
    document.getElementById("menu4").style.visibility = "hidden";
    document.getElementById("menu5").innerHTML = "";
    document.getElementById("menu5").style.visibility = "hidden";
    document.getElementById("menu6").innerHTML = "";
    document.getElementById("menu6").style.visibility = "hidden";
    document.getElementById("menu2").innerHTML = '<h5>Persona</h5> <div class="row"> <table id="persona"> <tr> <th>Rol: </th> <td>Alumno </td> </tr> <tr> <th>Nombre: </th> <td>Jesús</td> </tr> </table> </div> <h5>Alumno</h5> <div class="row"> <table id="piloto"> <tr> <th>Carnet: </th> <td>21312</td> </tr> <tr> <th>Certificados: </th> <td><a href="">EIS-123</a></td> </tr> <tr> <th>Persisos: </th> <td><a href="">GR11</a></td> </tr> <tr> <th>Formación: </th> <td>Prácticas</td> </tr> <tr> <th>Aeronaves: </th> <td>Marvin5, DJI Phantom</td> </tr> <tr> <th>Maniobra: </th> <td>Aterrizajes</td> </tr> <tr> <th>Referencia: </th> <td>23123</td> </tr> </table> <img src="../img/alumno_graph.jpg" alt="graph" style="width: 25%; height: 25%; margin-left: 25%; margin-top: 30px; margin-bottom: 30px;"> </div> ';
    document.getElementById("menu2").style.visibility = "visible";
}

function showInstructor() {
    document.getElementById("menu1").innerHTML = "";
    document.getElementById("menu1").style.visibility = "hidden";
    document.getElementById("menu2").innerHTML = "";
    document.getElementById("menu2").style.visibility = "hidden";
    document.getElementById("menu4").innerHTML = "";
    document.getElementById("menu4").style.visibility = "hidden";
    document.getElementById("menu5").innerHTML = "";
    document.getElementById("menu5").style.visibility = "hidden";
    document.getElementById("menu6").innerHTML = "";
    document.getElementById("menu6").style.visibility = "hidden";
    document.getElementById("menu3").innerHTML = '<h5>Persona</h5> <div class="row"> <table id="persona"> <tr> <th>Rol: </th> <td>Instructor </td> </tr> <tr> <th>Nombre: </th> <td>Pedro</td> </tr> </table> </div> <h5>Instructor</h5> <div class="row"> <table id="piloto"> <tr> <th>Carnet: </th> <td>21312</td> </tr> <tr> <th>Certificados: </th> <td><a href="">EIS-123</a></td> </tr> <tr> <th>Persisos: </th> <td><a href="">GR11</a></td> </tr> <tr> <th>Formación: </th> <td>Prácticas</td> </tr> <tr> <th>Aeronaves: </th> <td>Marvin5, DJI Phantom</td> </tr> <tr> <th>Horas pilotadas: </th> <td>40 horas</td> </tr> </table> <img src="../img/flight_hours.png" alt="graph" style="width: 30%; height: 30%; margin-left: 25%; margin-top: 30px; margin-bottom: 30px;"> </div> <h5>Documentación</h5> <div class="row"> <table id="piloto"> <tr> <th>Seguro: </th> <td><input style="width: 100%;" type="file" name="adjunto" accept=".*" /></td> </tr> <tr> <th>Certificados: </th> <td><input style="width: 100%;" type="file" name="adjunto" accept=".*" /></td> </tr> </table> </div> <h5>Documentos adicionales</h5> <div class="row"> <table id="piloto"> <tr> <th></th> <td><input style="width: 50%;" type="file" name="adjunto" accept=".*" multiple /><strong style="margin-left: 10%;">22/07/2020</strong></td> </tr> <tr> <th></th> <td><input style="width: 50%;" type="file" name="adjunto" accept=".*" multiple /><strong style="margin-left: 10%;">22/07/2020</strong></td> </tr> </table> </div>';
    document.getElementById("menu3").style.visibility = "visible";
}

function showMecanico() {
    document.getElementById("menu1").innerHTML = "";
    document.getElementById("menu1").style.visibility = "hidden";
    document.getElementById("menu2").innerHTML = "";
    document.getElementById("menu2").style.visibility = "hidden";
    document.getElementById("menu3").innerHTML = "";
    document.getElementById("menu3").style.visibility = "hidden";
    document.getElementById("menu5").innerHTML = "";
    document.getElementById("menu5").style.visibility = "hidden";
    document.getElementById("menu6").innerHTML = "";
    document.getElementById("menu6").style.visibility = "hidden";
    document.getElementById("menu4").innerHTML = '<h5>Persona</h5> <div class="row"> <table id="persona"> <tr> <th>Rol: </th> <td>Mecánico </td> </tr> <tr> <th>Nombre: </th> <td>Javier</td> </tr> </table> </div> <h5>Mecánico</h5> <div class="row"> <table id="piloto"> <tr> <th>Carnet: </th> <td>21312</td> </tr> <tr> <th>Certificados: </th> <td><a href="">EIS-123</a></td> </tr> <tr> <th>Persisos: </th> <td><a href="">GR11</a></td> </tr> <tr> <th>Formación: </th> <td>Prácticas</td> </tr> <tr> <th>Aeronaves: </th> <td>Marvin5, DJI Phantom</td> </tr> <tr> <th>Maniobra: </th> <td>Aterrizajes</td> </tr> <tr> <th>Referencia: </th> <td>23123</td> </tr> </table> <img src="../img/alumno_graph.jpg" alt="graph" style="width: 25%; height: 25%; margin-left: 25%; margin-top: 30px; margin-bottom: 30px;"> </div>';
    document.getElementById("menu4").style.visibility = "visible";
}

function showObservador() {
    document.getElementById("menu2").innerHTML = "";
    document.getElementById("menu2").style.visibility = "hidden";
    document.getElementById("menu3").innerHTML = "";
    document.getElementById("menu3").style.visibility = "hidden";
    document.getElementById("menu4").innerHTML = "";
    document.getElementById("menu4").style.visibility = "hidden";
    document.getElementById("menu5").innerHTML = "";
    document.getElementById("menu5").style.visibility = "hidden";
    document.getElementById("menu1").innerHTML = "";
    document.getElementById("menu1").style.visibility = "hidden";
    document.getElementById("menu6").innerHTML = '<h5>Persona</h5> <div class="row"> <table id="persona"> <tr> <th>Rol: </th> <td>Observador </td> </tr> <tr> <th>Nombre: </th> <td>Illia</td> </tr> </table> </div> <h5>Observador</h5> <div class="row"> <table id="piloto"> <tr> <th>Carnet: </th> <td>21312</td> </tr> <tr> <th>Certificados: </th> <td><a href="">EIS-123</a></td> </tr> <tr> <th>Persisos: </th> <td><a href="">GR11</a></td> </tr> <tr> <th>Formación: </th> <td>Prácticas</td> </tr> <tr> <th>Aeronaves: </th> <td>Marvin5, DJI Phantom</td> </tr> <tr> <th>Horas pilotadas: </th> <td>40 horas</td> </tr> </table> <img src="../img/flight_hours.png" alt="graph" style="width: 30%; height: 30%; margin-left: 25%; margin-top: 30px; margin-bottom: 30px;"> </div> <h5>Documentación</h5> <div class="row"> <table id="piloto"> <tr> <th>Seguro: </th> <td><input style="width: 50%;" type="file" name="adjunto" accept=".*" multiple /><strong style="margin-left: 10%;">22/07/2020</strong></td> </tr> <tr> <th>Certificados: </th> <td><input style="width: 50%;" type="file" name="adjunto" accept=".*" multiple /><strong style="margin-left: 10%;">22/07/2020</strong></td> </tr> </table> </div> <h5>Documentos adicionales</h5> <div class="row"> <table id="piloto"> <tr> <th></th> <td><input style="width: 50%;" type="file" name="adjunto" accept=".*" multiple /><strong style="margin-left: 10%;">22/07/2020</strong></td> </tr> <tr> <th></th> <td><input style="width: 50%;" type="file" name="adjunto" accept=".*" multiple /><strong style="margin-left: 10%;">22/07/2020</strong></td> </tr> </table> </div>';
    document.getElementById("menu6").style.visibility = "visible";
}

function showAddPersona() {
    document.getElementById("menu1").innerHTML = "";
    document.getElementById("menu1").style.visibility = "hidden";
    document.getElementById("menu2").innerHTML = "";
    document.getElementById("menu2").style.visibility = "hidden";
    document.getElementById("menu3").innerHTML = "";
    document.getElementById("menu3").style.visibility = "hidden";
    document.getElementById("menu4").innerHTML = "";
    document.getElementById("menu4").style.visibility = "hidden";
    document.getElementById("menu6").innerHTML = "";
    document.getElementById("menu6").style.visibility = "hidden";
    document.getElementById("menu5").innerHTML = '<h5>Persona</h5> <div class="row"> <table id="persona"> <tr> <th>Rol: </th> <td> <select name="" id=""> <option value="">Piloto</option> <option value="">Alumno</option> <option value="">Instructor</option> <option value="">Mecánico</option> </select> </td> </tr> <tr> <th>Nombre: </th> <td><input type="text"></td> </tr> </table> </div> <h5>Datos</h5> <div class="row"> <table id="piloto"> <tr> <th>Carnet: </th> <td><input type="text"></td> </tr> <tr> <th>Certificados: </th> <td><input style="width: 100%;" type="file" name="adjunto" accept=".*" /></td> </tr> <tr> <th>Persisos: </th> <td><input style="width: 100%;" type="file" name="adjunto" accept=".*" /></td> </tr> <tr> <th>Formación: </th> <td><input type="text"></td> </tr> <tr> <th>Aeronaves: </th> <td><input type="text"></td> </tr> <tr> <th>Horas pilotadas: </th> <td><input type="text"></td> </tr> </table> </div> <h5>Documentación</h5> <div class="row"> <table id="piloto"> <tr> <th>Seguro: </th> <td><input style="width: 100%;" type="file" name="adjunto" accept=".*" /></td> </tr> <tr> <th>Certificados: </th> <td><input style="width: 100%;" type="file" name="adjunto" accept=".*" /></td> </tr> </table> </div> <div> <button type="submit" onclick="window.location.reload();">Guardar</button> </div>';
    document.getElementById("menu5").style.visibility = "visible";
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
