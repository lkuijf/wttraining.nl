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
    

// Jouw e-mailadres
$from = 'leon@wtmedia-events.nl';

// Ontvanger e-mailadres
$to = 'leon.kuijf@gmail.com';

// Onderwerp van de e-mail
$subject = 'Onderwerp van de e-mail';

// Berichttekst
$message = 'Dit is de inhoud van de e-mail.';

// DKIM private key
$privateKey = <<<EOD
-----BEGIN ENCRYPTED PRIVATE KEY-----
MIIFLTBXBgkqhkiG9w0BBQ0wSjApBgkqhkiG9w0BBQwwHAQI3Fs5a10qFdcCAggA
MAwGCCqGSIb3DQIJBQAwHQYJYIZIAWUDBAEqBBAVUj0grCN4o0N2xXgHVMGgBIIE
0F0cWUMUZlrgNA7b9BXBqIyqVfPAOWl/dqCvoFGvHJngGOIReLPMRQPvYHREIxbZ
zXvNNSHlzrIuLwR7NEpREAjgNrZfGRloBlXqtQLxORm4J0Jz3hhsbjnLfXf/xPfm
XIHHXh5IgojUexUEOUj8SHEVYxEadMiq2k4f15IQ7kpEizkPuC4Nch0wojcZ2l3C
WirMZi3pijjGmpOpYFgInAMX2ol+YXigDnJh1U800UkVIqrwHki6fL8f4fL0Ren8
E07AQ12a+TNHcOangHPqx+ibIyu/3FUIerkexfklwGYPc6NXQwchigoUgbUwOCup
k0o1sRYfi2ARknNHNkPrbt5PNTSrquPusVa1ayYCMxMp4vosaEXtR0BDuDnudYNL
I5pVjHoXxMWLRheEkNdKu1BHrsWwt0oG7IW7kJw4q2faDa2KMOMhHHi6C4hZqLaV
c3v8G/WsnU1a5lgZg2NCrOu0znOzKcU2NnoORSFHZDohSUfugIMThy+5kVq8uRXu
p7v0cOxWVS1qHG1Iu5Ly+Gxj4Faj6hUE3gMVTOafGEF6dkoVpmezFoRY7mn2Q0dM
bvC+SNQ7Dil90+SulwZCPMhNJfHdNzl+MbjbfkGgtyyTWOK71Iww/+8u3aYOc9To
wR5mWQ4YiTVaW7gNSci1o5INdTiSPCXqNrppJecWU8uZzko08QWErZEn9xkLeVhm
Jj0NX6lW30p7rPKyC8QSQ3ov5B8cH8Ykd7mXVF6e8kIU8jV16jl9Ms645J+jy2ex
bXqzMpoepvcnveGtC57ghBxIbc+eg7Ocih20azBQ2Gv05Cvxa1hX05qxYoICbM2V
sD4DEcNGsPcuo4oasDUGAvicPYmm+Sxr0L9skeSwkXFX8b0G7MDMmWyoCydagC+t
2JIH06WxcDyKHjukrhpc4Gz84ocENJbOLdlSLGH8ZcVE+ureFT1lZheY5x2u0A02
ojneETQNODZFbULXYDgJbjAOV+reJFIjjhDiYB1FQiJstwYP7RGEnURork4Yqe7Z
Z0jos/hyZJVhEe2CpYVeIfCWNz5Vet8fXcbTCFb7xwhCJp83Je/MF8qRTsWD7Cxu
p+uCsCVVx9WYdCCP8L9tfFNg7Fc+mlPuJSsHTakRR+6eViLirOw2yULMFCZdDDzd
MOFJNJSxhvtivNRY7R3HcBSXLPJysbaevsCGqqi0i7KiCBrU+PEpkJ1tdMuw3R0/
HqUCoSRA0XYskQSy5TMwupQggxGRgo5lt/j6E6lcH4TbL9f5IkbfXiGtkihpIln3
JrvS1R1ZL4fWfJrFah1dN1ebAqTM2jvKkO/J1CIpqNcWWNJ0HKjFu4RaLBudchCd
IUpmKmxNZ+94FGuE4gBkaCUCEn9T5WFiv2NgPtWlurQc8RRQcV/Lg8cMDXmGGUUh
M1yI7CSRUyxD+Oj4nsD3a04m1h+sMq/dO6/fgxWmOeeio/hizjFLbsQI/PhtPN7o
RaYTw4kyi3ic5B5nIfsWywW/QYyocfbM9OUzRQP6mw60D9rA6R6pDTSYARV160eE
NwtQvOGaVTW7cmzcSJ/3RIKcNtQkBNs380lUyfHdqRZSekzXmC8Lpvt7CB41S58w
aLFjYtNAc/DW+zFeHBUiByfa+4TR/56YDlK9/GgjS8tn
-----END ENCRYPTED PRIVATE KEY-----
EOD;

// E-mail headers
$headers = "From: $from\r\n";
$headers .= "Reply-To: $from\r\n";
$headers .= "MIME-Version: 1.0\r\n";
$headers .= "Content-Type: text/plain; charset=UTF-8\r\n";

// DKIM signature
$dkimHeader = "DKIM-Signature: v=1; a=rsa-sha256; c=relaxed/relaxed; d=wttraining.nl; s=key1; t=" . time() . "; bh=" . base64_encode(hash('sha256', $message, true)) . "; h=From:Subject:To; b=" . base64_encode(openssl_sign($message, $signature, $privateKey, OPENSSL_ALGO_SHA256)) . ";\r\n";

$headers .= $dkimHeader;

// Verstuur de e-mail
if (mail($to, $subject, $message, $headers)) {
    echo "E-mail is succesvol verzonden.";
} else {
    echo "Er is een fout opgetreden bij het verzenden van de e-mail.";
}
?>