(function() {
    "use strict";
    document.addEventListener('DOMContentLoaded', function() {

        //evento 4
        var fecha_asistencia = document.getElementById('fecha_asistencia');
        var contenedor_asistencia = document.getElementById('contenedor_asistencia');
        contenedor_asistencia.style.display = 'none';
        fecha_asistencia.addEventListener('click', function() {
            contenedor_asistencia.style.display = 'block';
        })
        var cargar = document.getElementById('cargar');
        cargar.addEventListener('click', function(e) {
            var hoy = new Date();
            var anio = hoy.getFullYear();
            var fech = fecha_asistencia.value;
            var separacion = fech.split('-');
            var asist = document.querySelectorAll('#asist');
            var array = [];
            for (var i = 0; i < asist.length; i++) {
                array[i] = asist[i].value;
                console.log(array);
            }

            var asistencia = array.indexOf("not")
            console.log(asistencia);

            if (fecha_asistencia.value === "" || separacion[0] < anio || asistencia != -1) {
                alert('Debe completar los datos de forma correcta');
                e.preventDefault();
            } else {






            }

        })





    });


})();