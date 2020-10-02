<?php

require 'includes/funciones/conexion.php';
$nombre = $_POST['nombre'];
$apellido = $_POST['apellido'];
$celular = $_POST['celular'];
$dni = $_POST['dni'];
$correo = $_POST['correo'];
$sexo = $_POST['sexo'];
$fecha_nacimiento = $_POST['fecha_nacimiento'];
$id_lider = $_POST['id_lider'];
$calle = $_POST['calle'];
$numero = $_POST['numero'];
$barrio = $_POST['barrio'];

if ($connect) {
if ($nombre != "" || $apellido != "" || $dni != "" || $correo != "" || $fecha_nacimiento != ""
|| $id_lider != "" || $calle != "" || $numero !="" || $barrio != "" ) {
    mysqli_query($connect,"INSERT INTO domicilio_miembro VALUES(default,'$calle',$numero,'$barrio')");
    $datos_miembro = mysqli_query($connect,"SELECT * FROM domicilio_miembro WHERE calle='$calle' AND numero=$numero AND barrio='$barrio'");

while ($fila = mysqli_fetch_assoc($datos_miembro)) {
    $id_domicilio_miembro = $fila['id_domicilio'];
}
mysqli_query($connect,"INSERT INTO miembro VALUES(default,'$nombre','$apellido',$celular,$dni,'$correo','$sexo','$fecha_nacimiento',$id_lider,$id_domicilio_miembro)");

$datos_agregados = array (
    "nombre" => $nombre,
    "apellido" => $apellido,
    "celular" => $celular,
    "dni" => $dni,
    "correo" =>$correo,
    "sexo" => $sexo,
    "fecha_nac" => $fecha_nacimiento,
    "id_domicilio" => $id_domicilio_miembro,
    "calle" => $calle,
    "numero" => $numero,
    "barrio" => $barrio

    
);

echo json_encode($datos_agregados);


}

else {
    echo "no se han agregado datos";
}
}
else {
    echo "la base de datos no funciona";
}




?>