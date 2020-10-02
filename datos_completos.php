<?php
require_once 'includes/funciones/conexion.php';
if ($connect) {
    $id_member = $_GET['id'];
    $datos_completos = mysqli_query($connect,"SELECT * FROM miembro WHERE id_miembro=$id_member");
    if (mysqli_num_rows($datos_completos)) {
        while($fila = mysqli_fetch_assoc($datos_completos)) {
            $id_domicilio = $fila['id_domicilio'];
            $datos_dom = mysqli_query($connect,"SELECT * FROM domicilio_miembro WHERE id_domicilio=$id_domicilio");
            while($filo = mysqli_fetch_assoc($datos_dom)) {
                $respuesta = array (
                    "nombre" => $fila['nombre'],
                    "apellido" => $fila['apellido'],
                    "celular" => $fila['celular'],
                    "dni" => $fila['dni'],
                    "correo" => $fila['correo'],
                    "fecha_nacimiento" => $fila['fecha_nacimiento'],
                    "calle" => $filo['calle'],
                    "numero" => $filo['numero'],
                    "barrio" => $filo['barrio']
                );
            }

        }
    }
    else {
        $respuesta = false;
    }
}
echo json_encode($respuesta);

?>