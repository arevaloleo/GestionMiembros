<?php
    if (!isset($_SESSION)) {
        session_start();
    }
    $connect = mysqli_connect("localhost","root","","iglesia");
?>