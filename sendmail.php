<?php
if ($_SERVER["REQUEST_METHOD"] === "POST") {
    ini_set('display_errors', 1);
    error_reporting(E_ALL);

    $to = "ibratechid@gmail.com";
    $subject = "Nova Mensagem do Formulário de Contato";

    $name = htmlspecialchars($_POST["name"] ?? '');
    $email = htmlspecialchars($_POST["email"] ?? '');
    $phone = htmlspecialchars($_POST["phone"] ?? '');
    $service = htmlspecialchars($_POST["service"] ?? '');
    $message = htmlspecialchars($_POST["message"] ?? '');

    $body = "Nome: $name\r\n";
    $body .= "Email: $email\r\n";
    $body .= "Telefone: $phone\r\n";
    $body .= "Serviço: $service\r\n\r\n";
    $body .= "Mensagem:\r\n$message";

    $headers  = "MIME-Version: 1.0\r\n";
    $headers .= "Content-Type: text/plain; charset=UTF-8\r\n";
    $headers .= "From: $email\r\n";
    $headers .= "Reply-To: $email\r\n";

    if (mail($to, $subject, $body, $headers)) {
        // Redirect jika berhasil
        header("Location: http://localhost/hibradenet/");
        exit;
    } else {
        echo "Erro ao enviar a mensagem.";
    }
}
?>
