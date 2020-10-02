(function() {
    "use strict";
    document.addEventListener('DOMContentLoaded', function() {



        var formularioMiembro = document.getElementById('datosPersonalesM'),
            nuevoMiembro = document.getElementById('nuevo_miembro'),
            btnEnviar = document.getElementById('enviar');
        var sectorDatos = document.getElementById('datos');
        var identificador = document.getElementById('idLider');
        var identiti = identificador.textContent;
        var id_lider = parseInt(identiti, 10);

        //iniciar la pagina -- 
        var sector_list_miembro = document.querySelector('table tbody');




        formularioMiembro.style.display = 'none';

        //evento 1
        nuevoMiembro.addEventListener('click', function() {
            formularioMiembro.style.display = 'block';
            return false;
        });

        //evento 2
        btnEnviar.addEventListener('click', function() {

            var nombre = document.getElementById('nombre').value,
                apellido = document.getElementById('apellido').value,
                celular = document.getElementById('celular').value,
                dni = document.getElementById('dni').value,
                correo = document.getElementById('correo_miembro').value,
                sexo = document.getElementById('sexo_miembro').value,
                fecha_nacimiento = document.getElementById('nacimiento').value,
                calle_dom = document.getElementById('calle_miembro').value,
                numeroCalle_dom = document.getElementById('numeroCalle_miembro').value,
                barrio_miembro = document.getElementById('barrio_miembro').value;

            var datos_miembro = "nombre=" + nombre + "&apellido=" + apellido + "&celular=" + celular + "&dni=" + dni + "&correo=" + correo + "&sexo=" + sexo +
                "&fecha_nacimiento=" + fecha_nacimiento + "&id_lider=" + id_lider + "&calle=" + calle_dom + "&numero=" + numeroCalle_dom + "&barrio=" + barrio_miembro;
            console.log(datos_miembro);
            var xhr = new XMLHttpRequest();
            xhr.open("POST", "cargarDatos.php", true);
            xhr.onreadystatechange = function() {
                if (xhr.readyState === 4 && xhr.status === 200) {

                    var datos = JSON.parse(xhr.responseText);
                    var contenedor = document.createElement('tr');
                    contenedor.innerHTML = `
                        <td>${datos.nombre} ${datos.apellido}</td>
                        <td>${datos.correo}</td>
                        `;
                    var fila = document.createElement('td');





                    //boton whatsapp
                    var enlace_celular = document.createElement('a');
                    var icono_whatsapp = document.createElement('i');
                    icono_whatsapp.classList.add('fab', 'fa-whatsapp');
                    enlace_celular.appendChild(icono_whatsapp);
                    var url = "https://api.whatsapp.com/send?phone=549" + `${datos.celular}` + "&text=Hola+" + `${datos.nombre}` + " " + `${datos.apellido}`;

                    enlace_celular.setAttribute('class', 'celular')
                    enlace_celular.setAttribute('target', "_blank")
                    enlace_celular.setAttribute('href', url);


                    //boton borrar
                    var boton_borrar = document.createElement('button');
                    var icono_borrar = document.createElement('i');
                    icono_borrar.classList.add('fas', 'fa-trash-alt');
                    boton_borrar.appendChild(icono_borrar);
                    boton_borrar.setAttribute('class', 'btn_borrar');
                    boton_borrar.setAttribute('id', 'borrar');

                    //boton datos
                    var boton_datos = document.createElement('button');
                    var icono_datos = document.createElement('i');
                    icono_datos.classList.add('fas', 'fa-house-user');
                    boton_datos.appendChild(icono_datos);
                    boton_datos.setAttribute('class', 'btn_asist');
                    boton_datos.setAttribute('id', 'datos');


                    fila.appendChild(enlace_celular);
                    fila.appendChild(boton_borrar);
                    fila.appendChild(boton_datos);
                    contenedor.appendChild(fila);

                    sector_list_miembro.appendChild(contenedor);

                    if (datos) {

                        formularioMiembro.style.display = 'none';
                        //resetear formulario
                        document.querySelector('form').reset();
                    }
                }
            }
            xhr.setRequestHeader("Content-type", "application/x-www-form-urlencoded")
            xhr.send(datos_miembro);
            return false;

        });


        //evento 3 
        sector_list_miembro.addEventListener('click', function(e) {
            if (e.target.classList.contains('btn_borrar')) {
                var id = parseInt(e.target.getAttribute('data-id'));


                var confirmacion = confirm('Quieres eliminar este miembro?');
                if (confirmacion) {
                    //llamado a ajax
                    var nth = new XMLHttpRequest();
                    nth.open('GET', "eliminarDatos.php?id=" + id, true);
                    nth.onreadystatechange = function() {
                        if (nth.readyState === 4 && nth.status === 200) {
                            var resultado = JSON.parse(nth.responseText);
                            console.log(resultado);
                            if (resultado.respuesta === 'correcto') {
                                console.log(e.target.parentElement.parentElement);
                                console.log('se elimino');
                                e.target.parentElement.parentElement.remove();
                            } else {
                                //hubo un error
                            }

                        }
                    }
                } else {
                    console.log("no eliminar");
                }
                nth.send();
            }
            if (!e.target.classList.contains('btn_borrar') && e.target.classList.contains('datos_completose')) {
                var id_completo = parseInt(e.target.getAttribute('data-id'));
                var xhtmll = new XMLHttpRequest();
                xhtmll.open("GET", "datos_completos.php?id=" + id_completo, true);
                xhtmll.onreadystatechange = function() {
                    if (xhtmll.readyState === 4 && xhtmll.status === 200) {
                        var datosMiembro = JSON.parse(xhtmll.responseText);
                        Swal.fire({
                            title: '<strong>Datos del miembro</strong>',
                            icon: 'info',
                            html: `<b>Nombre:</b> ${datosMiembro.nombre} ${datosMiembro.apellido} <br>` +
                                `<b>Celular:</b> ${datosMiembro.celular} <br>` +
                                `<b>DNI:</b> ${datosMiembro.dni} <br>` +
                                `<b>Correo:</b> ${datosMiembro.correo} <br>`,
                            showCloseButton: true,
                            showCancelButton: true,
                            focusConfirm: false,
                            confirmButtonText: '<i class="fa fa-thumbs-up"></i> Great!',
                            confirmButtonAriaLabel: 'Thumbs up, great!',
                            cancelButtonText: '<i class="fa fa-thumbs-down"></i>',
                            cancelButtonAriaLabel: 'Thumbs down'
                        })
                    }
                }
                xhtmll.send();

            }






        });




    });


})();