(function() {
    "use strict";
    document.addEventListener('DOMContentLoaded', function() {
        var ingresar = document.getElementById('ingresar');
        ingresar.addEventListener('click', function(e) {
            var nombre_usuario = document.getElementById('nombre_usuario').value;
            var clave_usuario = document.getElementById('clave_usuario').value;
            var info = document.getElementById('info');
            if (nombre_usuario === "" || clave_usuario === "") {
                Swal.fire({
                    icon: 'error',
                    title: 'Oops...',
                    text: 'Ingrese datos correctos',
                })

                e.preventDefault();
            } else {
                var datos = "nombre_usuario=" + nombre_usuario + "&clave_usuario=" + clave_usuario;
                var xhr = new XMLHttpRequest();
                xhr.open("POST", "validar_sesion.php", true);
                xhr.onreadystatechange = function() {
                    if (xhr.readyState === 4 && xhr.status === 200) {
                        var mensaje = xhr.responseText;
                        if (mensaje === "error") {
                            Swal.fire({
                                icon: 'error',
                                title: 'Oops...',
                                text: 'Ingrese datos correctos',
                            })
                        }
                    }
                    xhr.setRequestHeader(("Content-type", "application/x-www-form-urlencoded"));
                    xhr.send(datos);

                }
            }

        })

    });


})();