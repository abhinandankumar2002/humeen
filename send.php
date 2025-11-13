<?php
use PHPMailer\PHPMailer\PHPMailer;
use PHPMailer\PHPMailer\Exception;

require __DIR__ . '/vendor/Exception.php';
require __DIR__ . '/vendor/PHPMailer.php';
require __DIR__ . '/vendor/SMTP.php';

require_once __DIR__ . '/.private/config.php';

// SMTP Configuration
$smtpHost = 'smtp.hostinger.com';
$smtpPort = 465;
$smtpUser = $config['SMTP_USER'];
$smtpPass = $config['SMTP_PASS'];
$toEmail  = 'hey@humeen.com';
$fromName = 'Humeen';

// Get form fields safely
$first_name = isset($_POST['first_name']) ? strip_tags(trim($_POST['first_name'])) : '';
$last_name  = isset($_POST['last_name']) ? strip_tags(trim($_POST['last_name'])) : '';
$email      = isset($_POST['email']) ? filter_var(trim($_POST['email']), FILTER_SANITIZE_EMAIL) : '';
$phone      = isset($_POST['phone']) ? strip_tags(trim($_POST['phone'])) : '';
$message    = isset($_POST['message']) ? htmlspecialchars(trim($_POST['message'])) : '';

// Validate fields
if (empty($first_name) || empty($email) || !filter_var($email, FILTER_VALIDATE_EMAIL)) {
    header('Content-Type: application/json');
    echo json_encode(['success' => false, 'message' => 'Please provide a valid name and email.']);
    exit;
}

$mail = new PHPMailer(true);

try {
    // Server settings
    $mail->isSMTP();
    $mail->Host       = $smtpHost;
    $mail->SMTPAuth   = true;
    $mail->Username   = $smtpUser; // must be your full email address
    $mail->Password   = $smtpPass;
    $mail->SMTPSecure = PHPMailer::ENCRYPTION_SMTPS; // For port 465 (SSL)
    $mail->Port       = $smtpPort;

    // Recipients
    $mail->setFrom($smtpUser, $fromName); // must match the authenticated account
    $mail->addAddress($toEmail);
    $mail->addReplyTo($email, $first_name);

    // Content
    $mail->isHTML(true);
    $mail->Subject = '[Website Contact] ' . $first_name . ' ' . $last_name;
    $mail->Body    = "
        <h2>New contact message</h2>
        <p><strong>Name:</strong> {$first_name} {$last_name}</p>
        <p><strong>Email:</strong> {$email}</p>
        <p><strong>Phone:</strong> {$phone}</p>
        <p><strong>Message:</strong><br>" . nl2br($message) . "</p>
    ";
    $mail->AltBody = "Name: {$first_name} {$last_name}\nEmail: {$email}\nPhone: {$phone}\nMessage:\n{$message}";

    // Send email
    $mail->send();

    header('Content-Type: application/json');
    echo json_encode(['success' => true, 'message' => 'Message sent successfully.']);

} catch (Exception $e) {
    header('Content-Type: application/json');
    echo json_encode([
        'success' => false,
        'message' => "Message could not be sent. Mailer Error: {$mail->ErrorInfo}"
    ]);
}
