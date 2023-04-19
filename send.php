<?php

use PHPMailer\PHPMailer\PHPMailer;
use PHPMailer\PHPMailer\SMTP;
use PHPMailer\PHPMailer\Exception;

require 'vendor/autoload.php';

$mail = new PHPMailer(true);

$name = $_POST['name'];
$email = $_POST['email'];
$phone = $_POST['phone'];
$message = $_POST['message'];

try {
  //Server settings
  $mail->isSMTP();                                            //Send using SMTP
  $mail->Host       = 'smtp.elasticemail.com';                     //Set the SMTP server to send through
  $mail->SMTPAuth   = true;                                    //Enable SMTP authentication
  $mail->Username   = 'timon09df@gmail.com';                     //SMTP username
  $mail->Password   = '311B79FE8796B9CDD87A74D1F69A6E5FDFC9';  //SMTP password
  $mail->SMTPSecure = PHPMailer::ENCRYPTION_SMTPS;             //Enable implicit TLS encryption
  $mail->Port       = 465;                                    //TCP port to connect to; use 587 if you have set `SMTPSecure = PHPMailer::ENCRYPTION_STARTTLS`

  //Recipients
  $mail->setFrom('timon09df@gmail.com', 'Mailer');
  $mail->addAddress('kirur.smtp@gmail.com', 'Joe User');     //Add a recipient
  // $mail->addAddress('ellen@example.com');               //Name is optional
  // $mail->addReplyTo('info@example.com', 'Information');
  // $mail->addCC('cc@example.com');
  // $mail->addBCC('bcc@example.com');

  //Attachments
  // $mail->addAttachment('/var/tmp/file.tar.gz');         //Add attachments
  // $mail->addAttachment('/tmp/image.jpg', 'new.jpg');    //Optional name

  //Content
  $mail->isHTML(true);                                  //Set email format to HTML


  $mail->Subject = 'Here is the subject';
  $mail->Body    = 'Имя: ' . $name . '<br>' . 'Почта: ' . $email . '<br>' . 'Телефон: ' . $phone . '<br>' . 'Сообщение: ' . $message;
  $mail->AltBody = '';

  $mail->send();
  header('location: index.html');
  echo 'Message has been sent';
} catch (Exception $e) {
  echo "Message could not be sent. Mailer Error: {$mail->ErrorInfo}";
}