            $data = array();
            foreach ($this->rows as $key => $value) {
                array_push($data, $value);
                //$data[$key] = $value;
            }
            return $data;// Ajax
$(function() {

    nueva = document.getElementById('nueva_celula');
    botonSiguiente = document.getElementById('botonSiguiente');
    btn_datosL = document.getElementById('datosL');
    btn_datosT = document.getElementById('datosT');
    btn_datosC = document.getElementById('datosC');
    datos_miembro = document.getElementById('datosPersonalesM');

    //direcelula
    domicilio_celula = document.getElementById('domicilio_celula');

    $(domicilio_celula).on('change', validarDomicilio);


    $(datos_miembro).hide();

    $(nueva).on('click', mostrarDatosLider);
    $(btn_datosL).on('click', mostrarDatosLider);

    $(botonSiguiente).on('click', mostrarDatosTimoteo);
    $(btn_datosT).on('click', mostrarDatosTimoteo);

    $(btn_datosC).on('click', mostrarDatosCelula);

    function mostrarDatosLider() {
        $('.formulario').show();
        $('.datosPersonalesL').show();
        $('.datosPersonalesT').hide();
        $('.datosCelula').hide();
        $('#botonAtras').hide();
        $('#botonEnviar').hide();
        $('.nuevaCelula').fadeOut(1000);
    }

    function mostrarDatosTimoteo() {
        $('.datosPersonalesL').hide();
        $('.datosPersonalesT').show();
        $('.datosCelula').hide();
        $('#botonAtras').show();
        $('#botonEnviar').hide();
    }

    function mostrarDatosCelula() {
        $('.datosPersonalesL').hide();
        $('.datosPersonalesT').hide();
        $('.datosCelula').show();
        $('#botonAtras').show();
        $('#botonSiguiente').hide();
        $('#botonEnviar').show();
    }

    function validarDomicilio() {
        if (domicilio_celula.value === 'notDefined') {
            $('.datosPersonalesM').hide();
            alert('se debe seleccionar un domicilio');
            this.focus();
        }
        if (domicilio_celula.value === 'dom_lider') {
            $('.datosPersonalesM').hide();
        }

        if (domicilio_celula.value === 'dom_timoteo') {
            $('.datosPersonalesM').hide();
        }

        if (domicilio_celula.value === 'dom_miembro') {
            $('.datosPersonalesM').show();
        }
    }




})