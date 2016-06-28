<?php
	header('Content-type: application/json');
	

    $name = $_POST['name'];
    $email = $_POST['email'];
    $subject = "Mensaje desde la pagina Web";
    $message = $_POST['message'];
    $phone = $_POST['phone'];

    $email_from = $email;
    $email_to = 'contacto@inaseschile.cl';

    $body = "Mensaje enviado por".$name." Telefono: ".$phone." Mensaje: ".$message;
    //$body = $message;
    $success = @mail($email_to, $subject, $body, 'From: <'.$email_from.'>');

    echo json_encode($success);
    die;
?>