<?php
header("Access-Control-Allow-Origin: *");
header('Content-Type: application/x-www-form-urlencoded');

use PHPMailer\PHPMailer\PHPMailer;

require 'PHPMailer/src/PHPMailer.php';

$nome = $_POST['nome'];
$telefone = $_POST['telefone'];
$email = $_POST['email'];
$horario = $_POST['horario'];
$mensagem = $_POST['mensagem'];
$htmlAula = '
<p>Olá '.$nome .',</p>

<p>Sua aula experimental foi agendada com sucesso '.$horario.' na CrossFit MK-1.</p>

<p>Por favor, chegue com aproximadamente 10 minutos de antecedência.</p>

<p>Outras informações:</p>

<p>- Essa aula é destinada a alunos iniciantes independente da idade ou condição física, e tem como objetivo ensinar movimentos básicos do CrossFit deixando o aluno apto a frequentar as aulas em grupo;</p>

<p>- Aula com duração de 1h;</p>

<p>- Após a aula, o aluno poderá frequentar a CrossFit MK-1 em qualquer um dos nossos horários todos os dias da semana.</p>

<p>- Planos apenas pessoalmente.</p>

<p>Att, CrossFit MK-1</p>';

//Create a new PHPMailer instance
$mail = new PHPMailer;
//Set who the message is to be sent from
$mail->setFrom('contato@crossfitmk1.com', 'Crossfit MK1');
//Set an alternative reply-to address
$mail->addReplyTo('contato@crossfitmk1.com', 'Crossfit Mk1');
$mail->addCC('contato@crossfitmk1.com', 'Crossfit MK1');
//Set who the message is to be sent to
$mail->addAddress($email, 'Crossfit MK1');
//Set the subject line
$mail->Subject = 'Aula Experimental';
//Read an HTML message body from an external file, convert referenced images to embedded,
//convert HTML into a basic plain-text alternative body
$mail->msgHTML($htmlAula . '<p>Suas informações foram:</p><p>Nome: '. $nome . '</p><p>Telefone: ' . $telefone . '</p><p>E-mail: ' . $email . '</p><p>Horário:' . $horario . '</p><p>Mensagem: <br>' . $mensagem);
//Replace the plain text body with one created manually
$mail->AltBody = 'This is a plain-text message body';

//send the message, check for errors
if (!$mail->send()) {
    echo 'Mailer Error: '. $mail->ErrorInfo;
} else {
    echo 'mensagem enviada';
}