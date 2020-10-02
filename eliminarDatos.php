<?php
require_once 'includes/funciones/conexion.php';

$id = filter_var($_GET['id'], FILTER_SANITIZE_NUMBER_INT);
if ($id) {
    mysqli_query($connect,"DELETE FROM asistencia WHERE id_miembro=$id");
    mysqli_query($connect,"DELETE FROM miembro WHERE id_miembro=$id");
    $respuesta = array (
        'respuesta' => 'correcto'
    );
}
else {
    $respuesta = array (
        'respuesta' => 'error'
    );
}

echo json_encode($respuesta);

?>