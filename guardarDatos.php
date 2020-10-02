<?php
//lider
$nombre_lider = $_POST['nombre_lider'];
$apellido_lider = $_POST['apellido_lider'];
$celular_lider = $_POST['celular_lider'];

$dni_lider = $_POST['dni_lider'];
$correo_lider = $_POST['correo_lider'];
$sexo_lider = $_POST['sexo_lider'];
$fecha_nacimiento_lider = $_POST['fecha_nacimiento_lider'];

//domicilio Lider
$calle_lider = $_POST['calle_lider'];
$numeroCalle_lider = $_POST['numeroCalle_lider'];
$barrio_lider = $_POST['barrio_lider'];

//Timoteo 
$nombre_timoteo = $_POST['nombre_timoteo'];
$apellido_timoteo = $_POST['apellido_timoteo'];
$celular_timoteo = $_POST['celular_timoteo'];

$dni_timoteo = $_POST['dni_timoteo'];
$correo_timoteo = $_POST['correo_timoteo'];
$sexo_timoteo = $_POST['sexo_timoteo'];
$fecha_nacimiento_timoteo = $_POST['fecha_nacimiento_timoteo'];

//domicilio Timoteo
$calle_timoteo = $_POST['calle_timoteo'];
$numeroCalle_timoteo = $_POST['numeroCalle_timoteo'];
$barrio_timoteo = $_POST['barrio_timoteo'];

//datos celula
$nombre_celula = $_POST['nombre_celula'];
$dia_celula = $_POST['dia_celula'];
$hora_celula = $_POST['hora_celula'];
$domicilio_celula = $_POST['domicilio_celula'];



//datos miembro
$nombre_miembro = $_POST['nombre_miembro'];
$apellido_miembro = $_POST['apellido_miembro'];
$celular_miembro = $_POST['celular_miembro'];

$dni_miembro = $_POST['dni_miembro'];
$correo_miembro = $_POST['correo_miembro'];
$sexo_miembro = $_POST['sexo_miembro'];
$fecha_nacimiento_miembro = $_POST['fecha_nacimiento_miembro'];

//domicilio Miembro
$calle_miembro = $_POST['calle_miembro'];
$numeroCalle_miembro = $_POST['numeroCalle_miembro'];
$barrio_miembro = $_POST['barrio_miembro'];

//usuario
$id_usuario = $_POST['id_usuario'];


require ('includes/funciones/conexion.php');

if ($connect) {
    //insertar Domicilio

    mysqli_query($connect, "INSERT INTO domicilio_miembro VALUES (default,'$calle_lider',$numeroCalle_lider,'$barrio_lider')");
    $id_domicilio_lider = mysqli_query($connect,"SELECT * FROM domicilio_miembro WHERE calle='$calle_lider'");
    while ($fila = mysqli_fetch_assoc($id_domicilio_lider)) {
        $id_dom_lider = $fila['id_domicilio'];
    }
    mysqli_query($connect,"INSERT INTO miembro VALUES(default,'$nombre_lider','$apellido_lider',$celular_lider,$dni_lider,'$correo_lider','$sexo_lider', '$fecha_nacimiento_lider',NULL, $id_dom_lider)");
    $datos_lider = mysqli_query($connect,"SELECT * FROM miembro WHERE dni = '$dni_lider'");
    while ($file = mysqli_fetch_assoc($datos_lider)) {
        $id_lider = $file['id_miembro'];
    }
    //agregar id_lider en datos de usuario
    mysqli_query($connect,"UPDATE usuario SET id_miembro='$id_lider' WHERE id_us=$id_usuario");

    

    //datos Timoteo
    mysqli_query($connect, "INSERT INTO domicilio_miembro VALUES (default,'$calle_timoteo',$numeroCalle_timoteo,'$barrio_timoteo')");
    $id_domicilio_timoteo = mysqli_query($connect,"SELECT * FROM domicilio_miembro WHERE calle='$calle_timoteo'");
    while ($filo = mysqli_fetch_assoc($id_domicilio_timoteo)) {
        $id_dom_timoteo = $filo['id_domicilio'];
    }
    mysqli_query($connect,"INSERT INTO miembro VALUES(default,'$nombre_timoteo','$apellido_timoteo',$celular_timoteo,$dni_timoteo,'$correo_timoteo','$sexo_timoteo', '$fecha_nacimiento_timoteo',$id_lider, $id_dom_timoteo)");

    if ($domicilio_celula === 'dom_lider') {
        mysqli_query($connect,"INSERT INTO celula VALUES (default,$id_lider,'$nombre_celula','$dia_celula','$hora_celula', $id_dom_lider)");
        header("location:sesion_iniciada.php?id=$id_lider");
    }
    if ($domicilio_celula === 'dom_timoteo') {
        
        mysqli_query($connect,"INSERT INTO celula VALUES (default,$id_lider,'$nombre_celula','$dia_celula','$hora_celula', $id_dom_timoteo)");
        header("location:sesion_iniciada.php?id=$id_lider");
    }
    if ($domicilio_celula === 'dom_miembro') {
        
        mysqli_query($connect, "INSERT INTO domicilio_miembro VALUES (default,'$calle_miembro',$numeroCalle_miembro,'$barrio_miembro')");
        $id_domicilio_miembro = mysqli_query($connect,"SELECT * FROM domicilio_miembro WHERE calle='$calle_miembro'");
        while ($filu = mysqli_fetch_assoc($id_domicilio_miembro)) {
            $id_dom_miembro = $filu['id_domicilio'];
        }
        mysqli_query($connect,"INSERT INTO miembro VALUES(default,'$nombre_miembro','$apellido_miembro',$celular_miembro,$dni_miembro,'$correo_miembro','$sexo_miembro', $fecha_nacimiento_miembro,$id_lider, $id_dom_miembro)");
        mysqli_query($connect,"INSERT INTO celula VALUES (default,$id_lider,'$nombre_celula','$dia_celula','$dia_celula','$hora_celula', $id_dom_miembro)");
        header("location:sesion_iniciada.php?id=$id_lider");

    }
    
    





}







?>