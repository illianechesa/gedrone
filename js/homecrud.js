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
    document.getElementById("persona").innerHTML = '<tr> <th>Instancia</th> <th>Horas vuelo</th> <th>Fecha revisión</th> <th>Mantenimiento</th> </tr> <tr> <th>132</th> <td>12 horas</td> <td><input type="date"></td> <td><img src="../img/mantenimiento_icon.png" alt="mantenimiento" height="15px" width="15px" onclick="loadHistory()"> <img src="../img/edit_icon.png" style="margin-left: 20px;" alt="editar" height="15px" width="15px"onclick="openCalendar()">  </td> </tr> <tr> <th>132</th> <td>12 horas</td> <td><input type="date"></td> <td><img src="../img/mantenimiento_icon.png" alt="mantenimiento" height="15px" width="15px" onclick="loadHistory()"> <img src="../img/edit_icon.png" style="margin-left: 20px;" alt="editar" height="15px" width="15px"onclick="openCalendar()"></td> </tr> <tr> <th>132</th> <td>12 horas</td> <td><input type="date"></td> <td><img src="../img/mantenimiento_icon.png" alt="mantenimiento" height="15px" width="15px" onclick="loadHistory()"> <img src="../img/edit_icon.png" style="margin-left: 20px;" alt="editar" height="15px" width="15px"onclick="openCalendar()"> </td> </tr> <tr> <th>132</th> <td>12 horas</td> <td><input type="date"></td> <td><img src="../img/mantenimiento_icon.png" alt="mantenimiento" height="15px" width="15px" onclick="loadHistory()"> <img src="../img/edit_icon.png" style="margin-left: 20px;" alt="editar" height="15px" width="15px"onclick="openCalendar()"></td> </tr> <tr> <th>132</th> <td>12 horas</td> <td><input type="date"></td> <td><img src="../img/mantenimiento_icon.png" alt="mantenimiento" height="15px" width="15px" onclick="loadHistory()"><img src="../img/edit_icon.png" style="margin-left: 20px;" alt="editar" height="15px" width="15px"onclick="openCalendar()"> </td> </tr> <tr> <th><button onclick="hidemto()">Ocultar</button></th> </tr>';
    document.getElementById("persona").style.visibility = "visible"
}

function hidemto() {
    document.getElementById("persona").innerHTML = "";
    document.getElementById("persona").style.visibility = "hidden";
}

function registrarvuelo() {
    window.open("registrarvuelo.html", "_self");
}

function loadHistory() {
    document.getElementById("piloto").innerHTML = '<tr> <th>Fecha</th><th>Tipo</th> <th>Comentario</th> <td></td> </tr> <tr> <td>22/07/20</td><td>Revision</td> <td>Se ha arreglado el ala</td> <td></td> </tr> <tr> <td>24/07/20</td> <td>Sustitucion</td><td>Se ha revisado este componente</td> <td></td> </tr> <tr> <td><input type="date"></td><td><select><option>Revision</option><option>Sustitucion</option><option>Otro</option></select></td> <td><input type="text"></td> <td><button onclick="">Guardar</button></td> </tr> <tr> <td colspan="3"><button onclick="hideHistory()">Ocultar</button></td> </tr>';
    document.getElementById("piloto").style.visibility = "visible";
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
    document.getElementById("vuelos").innerHTML = '<tr> <th>Modelo: </th> <td> <select name="modelo" id=""> <option>M1</option> <option>M2</option> <option>M3</option> <option>M4</option> <option>M5</option> </select> </td> </tr> <tr> <th>NºSerie: </th> <th><input type="text" name="modelo"></th> </tr> <tr> <th>PIN: </th> <th><input type="text" name="modelo"></th> </tr> <tr> <th>CE: </th> <th><input type="text" name="modelo"></th> </tr> <tr> <th>Matricula: </th> <th><input type="text" name="modelo"></th> </tr> <tr> <th>Estado: </th> <th> <select> <option name="operativo" value="operativo">Operativa</option> <option name="baja" value="baja">Baja</option> </select> </th> </tr> <tr> <th> <input type="submit" value="Guardar"> </th> <th> <input type="reset" value="Restaurar campos"> </th>';
    document.getElementById("vuelos").style.visibility = "visible"
}

function addFlightToList() {
    window.open("addflight.html", "_self");
}

function showOperationList() {
    document.getElementById("operacionesp").innerHTML = '<ul id="myUL" style="max-height: 150px; padding-left: 0px;"> <li><a href="#" onclick="showFlightList()">Operación 1</a></li> <li><a href="#" onclick="showFlightList()">Operación 2</a></li> <li><a href="#" onclick="showFlightList()">Operación 3</a></li> <li><a href="#" onclick="showFlightList()">Operación 4</a></li> <li><a href="#" onclick="showFlightList()">Operación 5</a></li> <li><a href="#" onclick="showFlightList()">Operación 6</a></li> <li><a href="#" onclick="showFlightList()">Operación 7</a></li> <li><a href="#" onclick="showFlightList()">Operación 8</a></li> <li><a href="#" onclick="showFlightList()">Operación 9</a></li> <li><a href="#" onclick="showFlightList()">Operación 10</a></li> </ul>';
    document.getElementById("operacionesp").style.visibility = "visible"
}

function showFlightList() {
    document.getElementById("vuelosp").innerHTML = '<ul id="myUL" style="max-height: 150px; padding-left: 0px;"> <li><a href="#"  onclick="addFlightToList()">Vuelo 1</a></li> <li><a href="#"  onclick="addFlightToList()">Vuelo 2</a></li> <li><a href="#"  onclick="addFlightToList()">Vuelo 3</a></li> <li><a href="#"  onclick="addFlightToList()">Vuelo 4</a></li> <li><a href="#"  onclick="addFlightToList()">Vuelo 5</a></li> <li><a href="#"  onclick="addFlightToList()">Vuelo 6</a></li> <li><a href="#"  onclick="addFlightToList()">Vuelo 7</a></li> <li><a href="#"  onclick="addFlightToList()">Vuelo 8</a></li> <li><a href="#"  onclick="addFlightToList()">Vuelo 9</a></li> <li><a href="#"  onclick="addFlightToList()">Vuelo 10</a></li> </ul>';
    document.getElementById("vuelosp").style.visibility = "visible"
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
    document.getElementById("menu1").innerHTML = '<h5>Persona</h5> <div class="row"> <table id="persona"> <tr> <th>Rol: </th> <td>Piloto </td> </tr> <tr> <th>Nombre: </th> <td>Illia</td> </tr> </table> </div> <h5>Piloto</h5> <div class="row"> <table id="piloto"> <tr> <th>Carnet: </th> <td>21312</td> </tr> <tr> <th>Certificados: </th> <td><a href="">EIS-123</a></td> </tr> <tr> <th>Persisos: </th> <td><a href="">GR11</a></td> </tr> <tr> <th>Formación: </th> <td>Prácticas</td> </tr> <tr> <th>Aeronaves: </th> <td>Marvin5, DJI Phantom</td> </tr> <tr> <th>Horas pilotadas: </th> <td>40 horas</td> </tr> </table> <img src="../img/flight_hours.png" alt="graph" style="width: 30%; height: 30%; margin-left: 2%;"> </div> <h5>Documentación</h5> <div class="row"> <table id="piloto"> <tr> <th>Seguro: </th> <td><input style="width: 100%;" type="file" name="adjunto" accept=".*" /></td> </tr> <tr> <th>Certificados: </th> <td><input style="width: 100%;" type="file" name="adjunto" accept=".*" /></td> </tr> </table> </div>';
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
    document.getElementById("menu2").innerHTML = '<h5>Persona</h5> <div class="row"> <table id="persona"> <tr> <th>Rol: </th> <td>Alumno </td> </tr> <tr> <th>Nombre: </th> <td>Jesús</td> </tr> </table> </div> <h5>Alumno</h5> <div class="row"> <table id="piloto"> <tr> <th>Carnet: </th> <td>21312</td> </tr> <tr> <th>Certificados: </th> <td><a href="">EIS-123</a></td> </tr> <tr> <th>Persisos: </th> <td><a href="">GR11</a></td> </tr> <tr> <th>Formación: </th> <td>Prácticas</td> </tr> <tr> <th>Aeronaves: </th> <td>Marvin5, DJI Phantom</td> </tr> <tr> <th>Maniobra: </th> <td>Aterrizajes</td> </tr> <tr> <th>Referencia: </th> <td>23123</td> </tr> </table> <img src="../img/alumno_graph.jpg" alt="graph" style="width: 25%; height: 25%; margin-left: 2%;"> </div> ';
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
    document.getElementById("menu3").innerHTML = '<h5>Persona</h5> <div class="row"> <table id="persona"> <tr> <th>Rol: </th> <td>Instructor </td> </tr> <tr> <th>Nombre: </th> <td>Illia</td> </tr> </table> </div> <h5>Instructor</h5> <div class="row"> <table id="piloto"> <tr> <th>Carnet: </th> <td>21312</td> </tr> <tr> <th>Certificados: </th> <td><a href="">EIS-123</a></td> </tr> <tr> <th>Persisos: </th> <td><a href="">GR11</a></td> </tr> <tr> <th>Formación: </th> <td>Prácticas</td> </tr> <tr> <th>Aeronaves: </th> <td>Marvin5, DJI Phantom</td> </tr> <tr> <th>Horas pilotadas: </th> <td>40 horas</td> </tr> </table> <img src="../img/flight_hours.png" alt="graph" style="width: 30%; height: 30%; margin-left: 2%;"> </div> <h5>Documentación</h5> <div class="row"> <table id="piloto"> <tr> <th>Seguro: </th> <td><input style="width: 100%;" type="file" name="adjunto" accept=".*" /></td> </tr> <tr> <th>Certificados: </th> <td><input style="width: 100%;" type="file" name="adjunto" accept=".*" /></td> </tr> </table> </div>';
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
    document.getElementById("menu4").innerHTML = '<h5>Persona</h5> <div class="row"> <table id="persona"> <tr> <th>Rol: </th> <td>Mecánico </td> </tr> <tr> <th>Nombre: </th> <td>Javier</td> </tr> </table> </div> <h5>Mecánico</h5> <div class="row"> <table id="piloto"> <tr> <th>Carnet: </th> <td>21312</td> </tr> <tr> <th>Certificados: </th> <td><a href="">EIS-123</a></td> </tr> <tr> <th>Persisos: </th> <td><a href="">GR11</a></td> </tr> <tr> <th>Formación: </th> <td>Prácticas</td> </tr> <tr> <th>Aeronaves: </th> <td>Marvin5, DJI Phantom</td> </tr> <tr> <th>Maniobra: </th> <td>Aterrizajes</td> </tr> <tr> <th>Referencia: </th> <td>23123</td> </tr> </table> <img src="../img/alumno_graph.jpg" alt="graph" style="width: 25%; height: 25%; margin-left: 2%;"> </div>';
    document.getElementById("menu4").style.visibility = "visible";
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
    document.getElementById("menu5").innerHTML = '<h5>Persona</h5> <div class="row"> <table id="persona"> <tr> <th>Rol: </th> <td> <select name="" id=""> <option value="">Piloto</option> <option value="">Alumno</option> <option value="">Instructor</option> <option value="">Mecánico</option> </select> </td> </tr> <tr> <th>Nombre: </th> <td><input type="text"></td> </tr> </table> </div> <h5>Datos</h5> <div class="row"> <table id="piloto"> <tr> <th>Carnet: </th> <td><input type="text"></td> </tr> <tr> <th>Certificados: </th> <td><input style="width: 100%;" type="file" name="adjunto" accept=".*" /></td> </tr> <tr> <th>Persisos: </th> <td><input style="width: 100%;" type="file" name="adjunto" accept=".*" /></td> </tr> <tr> <th>Formación: </th> <td><input type="text"></td> </tr> <tr> <th>Aeronaves: </th> <td><input type="text"></td> </tr> <tr> <th>Horas pilotadas: </th> <td><input type="text"></td> </tr> </table> </div> <h5>Documentación</h5> <div class="row"> <table id="piloto"> <tr> <th>Seguro: </th> <td><input style="width: 100%;" type="file" name="adjunto" accept=".*" /></td> </tr> <tr> <th>Certificados: </th> <td><input style="width: 100%;" type="file" name="adjunto" accept=".*" /></td> </tr> </table> </div> <div> <button type="submit" onclick="window.history.back()">Guardar</button> </div>';
    document.getElementById("menu5").style.visibility = "visible";
}