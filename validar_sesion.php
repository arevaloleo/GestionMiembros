<?php
session_start();
require 'includes/funciones/conexion.php';
$usuario = $_POST['nombre_usuario'];
$clave = $_POST['clave_usuario'];

$usuario_encontrado=mysqli_query($connect,"SELECT * FROM usuario WHERE nombre_usuario='$usuario' AND clave='$clave'");
if (mysqli_num_rows($usuario_encontrado) != 0) {
    echo "verdad";
}
else {
    echo "error";
    
}
?>
