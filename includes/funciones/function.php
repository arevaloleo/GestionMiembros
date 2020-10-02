
<?php
    if (!isset($_SESSION)) {
        session_start();
    }
    function obtener_miembro($id) {
        $id_lider = (int) $id;
        require_once 'conexion.php';
        $miembros = mysqli_query($connect,"SELECT * FROM miembro
        WHERE id_lider=$id_lider
        ORDER BY nombre");
        
        return $miembros;
        
    }


?>