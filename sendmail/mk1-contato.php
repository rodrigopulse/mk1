<?php
header("Access-Control-Allow-Origin: *");
header('Content-Type: application/x-www-form-urlencoded');

use PHPMailer\PHPMailer\PHPMailer;

require 'PHPMailer/src/PHPMailer.php';

$nome = $_POST['nome'];
$telefone = $_POST['telefone'];
$email = $_POST['email'];
$mensagem = $_POST['mensagem'];

//Create a new PHPMailer instance
$mail = new PHPMailer;
//Set who the message is to be sent from
$mail->setFrom('contato@crossfitmk1.com', 'Crossfit MK1');
//Set an alternative reply-to address
$mail->addReplyTo('contato@crossfitmk1.com', 'Crossfit MK1');
//Set who the message is to be sent to
$mail->addAddress('contato@crossfitmk1.com', 'Crossfit MK1');
//Set the subject line
$mail->Subject = 'Contato do Site';
//Read an HTML message body from an external file, convert referenced images to embedded,
//convert HTML into a basic plain-text alternative body
$mail->msgHTML('<p>Nome: '. $nome . '</p><p>Telefone: ' . $telefone . '</p><p>E-mail: ' . $email . '</p><p>Mensagem: <br>' . $mensagem);
//Replace the plain text body with one created manually
$mail->AltBody = 'This is a plain-text message body';

//send the message, check for errors
if (!$mail->send()) {
    echo 'Mailer Error: '. $mail->ErrorInfo;
} else {
    echo 'mensagem enviada';
}