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

    $selector = 'key1'; // Your DKIM selector
    $domain = 'wttraining.nl'; // Your DKIM domain
    $privateKey = '-----BEGIN ENCRYPTED PRIVATE KEY-----MIIFLTBXBgkqhkiG9w0BBQ0wSjApBgkqhkiG9w0BBQwwHAQI3Fs5a10qFdcCAggAMAwGCCqGSIb3DQIJBQAwHQYJYIZIAWUDBAEqBBAVUj0grCN4o0N2xXgHVMGgBIIE0F0cWUMUZlrgNA7b9BXBqIyqVfPAOWl/dqCvoFGvHJngGOIReLPMRQPvYHREIxbZzXvNNSHlzrIuLwR7NEpREAjgNrZfGRloBlXqtQLxORm4J0Jz3hhsbjnLfXf/xPfmXIHHXh5IgojUexUEOUj8SHEVYxEadMiq2k4f15IQ7kpEizkPuC4Nch0wojcZ2l3CWirMZi3pijjGmpOpYFgInAMX2ol+YXigDnJh1U800UkVIqrwHki6fL8f4fL0Ren8E07AQ12a+TNHcOangHPqx+ibIyu/3FUIerkexfklwGYPc6NXQwchigoUgbUwOCupk0o1sRYfi2ARknNHNkPrbt5PNTSrquPusVa1ayYCMxMp4vosaEXtR0BDuDnudYNLI5pVjHoXxMWLRheEkNdKu1BHrsWwt0oG7IW7kJw4q2faDa2KMOMhHHi6C4hZqLaVc3v8G/WsnU1a5lgZg2NCrOu0znOzKcU2NnoORSFHZDohSUfugIMThy+5kVq8uRXup7v0cOxWVS1qHG1Iu5Ly+Gxj4Faj6hUE3gMVTOafGEF6dkoVpmezFoRY7mn2Q0dMbvC+SNQ7Dil90+SulwZCPMhNJfHdNzl+MbjbfkGgtyyTWOK71Iww/+8u3aYOc9TowR5mWQ4YiTVaW7gNSci1o5INdTiSPCXqNrppJecWU8uZzko08QWErZEn9xkLeVhmJj0NX6lW30p7rPKyC8QSQ3ov5B8cH8Ykd7mXVF6e8kIU8jV16jl9Ms645J+jy2exbXqzMpoepvcnveGtC57ghBxIbc+eg7Ocih20azBQ2Gv05Cvxa1hX05qxYoICbM2VsD4DEcNGsPcuo4oasDUGAvicPYmm+Sxr0L9skeSwkXFX8b0G7MDMmWyoCydagC+t2JIH06WxcDyKHjukrhpc4Gz84ocENJbOLdlSLGH8ZcVE+ureFT1lZheY5x2u0A02ojneETQNODZFbULXYDgJbjAOV+reJFIjjhDiYB1FQiJstwYP7RGEnURork4Yqe7ZZ0jos/hyZJVhEe2CpYVeIfCWNz5Vet8fXcbTCFb7xwhCJp83Je/MF8qRTsWD7Cxup+uCsCVVx9WYdCCP8L9tfFNg7Fc+mlPuJSsHTakRR+6eViLirOw2yULMFCZdDDzdMOFJNJSxhvtivNRY7R3HcBSXLPJysbaevsCGqqi0i7KiCBrU+PEpkJ1tdMuw3R0/HqUCoSRA0XYskQSy5TMwupQggxGRgo5lt/j6E6lcH4TbL9f5IkbfXiGtkihpIln3JrvS1R1ZL4fWfJrFah1dN1ebAqTM2jvKkO/J1CIpqNcWWNJ0HKjFu4RaLBudchCdIUpmKmxNZ+94FGuE4gBkaCUCEn9T5WFiv2NgPtWlurQc8RRQcV/Lg8cMDXmGGUUhM1yI7CSRUyxD+Oj4nsD3a04m1h+sMq/dO6/fgxWmOeeio/hizjFLbsQI/PhtPN7oRaYTw4kyi3ic5B5nIfsWywW/QYyocfbM9OUzRQP6mw60D9rA6R6pDTSYARV160eENwtQvOGaVTW7cmzcSJ/3RIKcNtQkBNs380lUyfHdqRZSekzXmC8Lpvt7CB41S58waLFjYtNAc/DW+zFeHBUiByfa+4TR/56YDlK9/GgjS8tn-----END ENCRYPTED PRIVATE KEY-----';
    
    // Get the email headers (you can customize this based on your email)
    $headers = "From: leon@wtmedia-events.nl\r\n";
    $headers .= "To: leon.kuijf@gmail.com\r\n";
    $headers .= "Subject: Your Email Subject\r\n";
    
    // Create a unique timestamp for the DKIM signature
    $timestamp = time();
    

    // Construct the DKIM signature header
    $header = "DKIM-Signature: v=1; a=rsa-sha256; d=$domain; s=$selector; t=$timestamp; c=relaxed/relaxed;\r\n";
    $header .= " h=from:to:subject; bh=" . base64_encode(hash('sha256', $headers)) . ";\r\n";

    // Calculate the hash of the specified headers (excluding the DKIM-Signature header)
    $hash = hash('sha256', $header, true);
    // Sign the hash with the DKIM private key

    $thePrivateKey = openssl_pkey_get_private($privateKey, 'wttraining');

    openssl_sign($hash, $signature, $thePrivateKey);

    // Add the DKIM signature header to your email headers
    $header .= " b=" . base64_encode($signature) . ";\r\n";



    // Construct the DKIM signature header
    // $header = "DKIM-Signature: v=1; a=rsa-sha256; d=$domain; s=$selector; t=$timestamp; c=relaxed/relaxed;\r\n";
    // $header .= " h=from:to:subject; bh=" . base64_encode(hash('sha256', $headers)) . ";\r\n";
    // $header .= " b=" . base64_encode(
    //     openssl_sign(
    //         hash('sha256', $header, true),
    //         $signature,
    //         $privateKey
    //     )
    // ) . ";\r\n";
    
    // Add the DKIM signature header to your email headers
    $headers .= $header;
    
    // Your email content
    $message = "This is the content of your email.";
    
    // Send the email with DKIM signature
    mail('leon.kuijf@gmail.com', 'Your Email Subject', $message, $headers);
    
    
?>