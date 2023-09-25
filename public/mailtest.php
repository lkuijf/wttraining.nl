<?php 
    ini_set( 'display_errors', 1 );
    error_reporting( E_ALL );
    $from = "test-mailer@wttraining.nl";
    $to = "leon@wtmedia-events.nl";
    $subject = "mail TEST";
    $message = "even kijken of hij aankomt";
    $headers = "From:" . $from;
    mail($to,$subject,$message, $headers);
    
    echo "Test email sent";
?>