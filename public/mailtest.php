<?php 
    ini_set( 'display_errors', 1 );
    error_reporting( E_ALL );
    // $to = "leon.kuijf@gmail.com";
    // $subject = "mail TEST";
    // $message = "even kijken of hij aankomt";
    // // $headers = 'From: leon@wtmedia-events.nl' . "\r\n" .
    // // 'Reply-To: leon@wtmedia-events.nl' . "\r\n" .
    // // 'X-Mailer: PHP/' . phpversion();
    // $headers = "From: leon@wtmedia-events.nl\r\n";
    // $headers .= "Reply-To: leon@wtmedia-events.nl\r\n";
    // $headers .= "MIME-Version: 1.0\r\n";
    // $headers .= "Content-type: text/plain; charset=iso-8859-1\r\n";
    // $headers .= "DKIM-Signature: v=1; a=rsa-sha256; d=wttraining.nl; s=key1; c=relaxed/simple; q=dns/txt; h=From:Subject:Date:Message-ID:To:Content-type; bh=base64-hash; b=DKIM-signature-data\r\n";
    // mail($to,$subject,$message, $headers);
    
    // echo "Test email sent";
    

    // De e-mailinhoud en headers instellen
$email_body = "Dit is de inhoud van de e-mail.";
$to = "leon.kuijf@gmail.ocm";
$subject = "Onderwerp van de e-mail";
$headers = array(
    'From: leon@wtmedia-events.nl',
    'MIME-Version: 1.0',
    'Content-type: text/plain; charset=utf-8',
);

// De privésleutel inladen
$private_key = 'MIIFLTBXBgkqhkiG9w0BBQ0wSjApBgkqhkiG9w0BBQwwHAQI3Fs5a10qFdcCAggAMAwGCCqGSIb3DQIJBQAwHQYJYIZIAWUDBAEqBBAVUj0grCN4o0N2xXgHVMGgBIIE0F0cWUMUZlrgNA7b9BXBqIyqVfPAOWl/dqCvoFGvHJngGOIReLPMRQPvYHREIxbZzXvNNSHlzrIuLwR7NEpREAjgNrZfGRloBlXqtQLxORm4J0Jz3hhsbjnLfXf/xPfmXIHHXh5IgojUexUEOUj8SHEVYxEadMiq2k4f15IQ7kpEizkPuC4Nch0wojcZ2l3CWirMZi3pijjGmpOpYFgInAMX2ol+YXigDnJh1U800UkVIqrwHki6fL8f4fL0Ren8E07AQ12a+TNHcOangHPqx+ibIyu/3FUIerkexfklwGYPc6NXQwchigoUgbUwOCupk0o1sRYfi2ARknNHNkPrbt5PNTSrquPusVa1ayYCMxMp4vosaEXtR0BDuDnudYNLI5pVjHoXxMWLRheEkNdKu1BHrsWwt0oG7IW7kJw4q2faDa2KMOMhHHi6C4hZqLaVc3v8G/WsnU1a5lgZg2NCrOu0znOzKcU2NnoORSFHZDohSUfugIMThy+5kVq8uRXup7v0cOxWVS1qHG1Iu5Ly+Gxj4Faj6hUE3gMVTOafGEF6dkoVpmezFoRY7mn2Q0dMbvC+SNQ7Dil90+SulwZCPMhNJfHdNzl+MbjbfkGgtyyTWOK71Iww/+8u3aYOc9TowR5mWQ4YiTVaW7gNSci1o5INdTiSPCXqNrppJecWU8uZzko08QWErZEn9xkLeVhmJj0NX6lW30p7rPKyC8QSQ3ov5B8cH8Ykd7mXVF6e8kIU8jV16jl9Ms645J+jy2exbXqzMpoepvcnveGtC57ghBxIbc+eg7Ocih20azBQ2Gv05Cvxa1hX05qxYoICbM2VsD4DEcNGsPcuo4oasDUGAvicPYmm+Sxr0L9skeSwkXFX8b0G7MDMmWyoCydagC+t2JIH06WxcDyKHjukrhpc4Gz84ocENJbOLdlSLGH8ZcVE+ureFT1lZheY5x2u0A02ojneETQNODZFbULXYDgJbjAOV+reJFIjjhDiYB1FQiJstwYP7RGEnURork4Yqe7ZZ0jos/hyZJVhEe2CpYVeIfCWNz5Vet8fXcbTCFb7xwhCJp83Je/MF8qRTsWD7Cxup+uCsCVVx9WYdCCP8L9tfFNg7Fc+mlPuJSsHTakRR+6eViLirOw2yULMFCZdDDzdMOFJNJSxhvtivNRY7R3HcBSXLPJysbaevsCGqqi0i7KiCBrU+PEpkJ1tdMuw3R0/HqUCoSRA0XYskQSy5TMwupQggxGRgo5lt/j6E6lcH4TbL9f5IkbfXiGtkihpIln3JrvS1R1ZL4fWfJrFah1dN1ebAqTM2jvKkO/J1CIpqNcWWNJ0HKjFu4RaLBudchCdIUpmKmxNZ+94FGuE4gBkaCUCEn9T5WFiv2NgPtWlurQc8RRQcV/Lg8cMDXmGGUUhM1yI7CSRUyxD+Oj4nsD3a04m1h+sMq/dO6/fgxWmOeeio/hizjFLbsQI/PhtPN7oRaYTw4kyi3ic5B5nIfsWywW/QYyocfbM9OUzRQP6mw60D9rA6R6pDTSYARV160eENwtQvOGaVTW7cmzcSJ/3RIKcNtQkBNs380lUyfHdqRZSekzXmC8Lpvt7CB41S58waLFjYtNAc/DW+zFeHBUiByfa+4TR/56YDlK9/GgjS8tn';

// De DKIM-handtekening genereren
$dkim_signature = dkim_sign($to, $subject, $email_body, $private_key);

// Het DKIM-veld toevoegen aan de headers
$headers[] = "DKIM-Signature: " . $dkim_signature;

// De e-mail versturen
mail($to, $subject, $email_body, implode("\r\n", $headers));

// Functie om een DKIM-handtekening te genereren
function dkim_sign($to, $subject, $body, $private_key)
{
    $header = "To: $to\r\n";
    $header .= "Subject: $subject\r\n";
    $header .= "From: leon@wtmedia-events.nl\r\n";
    $header .= "MIME-Version: 1.0\r\n";
    $header .= "Content-type: text/plain; charset=utf-8\r\n";

    $header = preg_replace('/\r\n/', "\n", $header);

    $dkim_header = "v=1; a=rsa-sha256; q=dns/txt; l=1000; t=" . time() . "; x=" . (time() + 3600) . "; c=relaxed/simple;\r\n";
    $dkim_header .= "s=key1;\r\n";
    $dkim_header .= "h=From:To:Subject;\r\n";
    $dkim_header .= "d=wttraining.nl;\r\n";

    $to_sign = $dkim_header . $header . "\r\n" . $body;
    $signature = '';
    openssl_sign($to_sign, $signature, $private_key, OPENSSL_ALGO_SHA256);

    return base64_encode($signature);
}
?>