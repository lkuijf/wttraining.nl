<?php 
    ini_set( 'display_errors', 1 );
    error_reporting( E_ALL );
    $to = "leon.kuijf@gmail.com";
    $subject = "mail TEST";
    $message = "even kijken of hij aankomt";
    $headers = 'From: leon@wtmedia-events.nl' . "\r\n" .
    'Reply-To: leon@wtmedia-events.nl' . "\r\n" .
    'X-Mailer: PHP/' . phpversion();
    mail($to,$subject,$message, $headers);
    
    echo "Test email sent";
?>