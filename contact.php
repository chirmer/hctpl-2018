<?php 

    if (isset($_POST['send'])) {

        $to = 'dhenderson@hctpl.info';
        $subject = '[WEB FORM] ' . $_POST["title"];
        $headers = "From: dhenderson@huntingtonpub.lib.in.us";

        $message = '[NAME] ' . $_POST["name"] . "\r\n";
        $message .= '[CONTACT] ' . $_POST["phone-email"] . "\r\n";
        $message .= "\r\n" . "---" . "\r\n";
        $message .= $_POST["message"];
        
        $success = mail($to, $subject, $message, $headers);

    }


?>