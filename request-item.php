<?php 

    if (isset($_POST['send'])) {

        $to = 'droy@hctpl.info';
        $subject = '[REQUEST] ' . $_POST["title"];
        $headers = "From: dhenderson@huntingtonpub.lib.in.us";

        $message = '[NAME] ' . $_POST["name"] . "\r\n";
        $message .= '[CONTACT] ' . $_POST["phone-email"] . "\r\n";
        $message .= '[CARD #] ' . $_POST["barcode"] . "\r\n";
        $message .= '[HOLD] ' . $_POST["hold-yes"] . $_POST["hold-no"] . 
            $_POST['hold-htgn'] . $_POST["hold-mkl"];
        $message .= "\r\n" . "---" . "\r\n";
        $message .= '[TITLE] ' . $_POST["title"] . "\r\n";
        $message .= '[AUTHOR] ' . $_POST["author"] . "\r\n";
        $message .= '[TYPE] ' . $_POST["book"] . ' ' . 
            $_POST["movie"] . '   ' . 
            $_POST["tv"] . '   ' . 
            $_POST["music"] . '   ' . 
            $_POST["audiobook"] . '   ' . 
            $_POST["lp-book"] . '   ' . 
            $_POST["magazine"] . '   ' . 
            $_POST["videogame"] . '   ' . 
            "\r\n";
        $message .= '[SERIES] ' . $_POST["series"] . "\r\n";
        $message .= '[AGE] ' . $_POST["age-range"] . "\r\n";
        $message .= '[ISBN] ' . $_POST["isbn"] . "\r\n";
        $message .= '[SUBJECT] ' . $_POST["subject"] . "\r\n";
        
        $success = mail($to, $subject, $message, $headers);

    }

    if (isset($_POST['send'])) {

        $to = 'deborahroy+jpebvgnleyudrernfhda@boards.trello.com';
        $subject = $_POST["title"] . ' (' . $_POST["book"] . ')' . ' ' . 
            '(' . $_POST["movie"] . ')' . ' ' . 
            '(' . $_POST["tv"] . ')' . ' ' . 
            '(' . $_POST["music"] . ')' . ' ' . 
            '(' . $_POST["audiobook"] . ')' . ' ' . 
            '(' . $_POST["lp-book"] . ')' . ' ' . 
            '(' . $_POST["magazine"] . ')' . ' ' . 
            '(' . $_POST["videogame"] .')';
        $headers = "From: dhenderson@huntingtonpub.lib.in.us";

        $message = '[NAME] ' . $_POST["name"] . "\r\n";
        $message .= '[CONTACT] ' . $_POST["phone-email"] . "\r\n";
        $message .= '[CARD #] ' . $_POST["barcode"] . "\r\n";
        $message .= '[HOLD] ' . $_POST["hold-yes"] . $_POST["hold-no"] . 
            $_POST['hold-htgn'] . $_POST["hold-mkl"];
        $message .= "\r\n" . "\r\n" . "---" . "\r\n";
        $message .= '[TITLE] ' . $_POST["title"] . "\r\n";
        $message .= '[AUTHOR] ' . $_POST["author"] . "\r\n";
        $message .= '[TYPE] ' . 
            '(' . $_POST["book"] . ')' . ' ' . 
            '(' . $_POST["movie"] . ')' . ' ' . 
            '(' . $_POST["tv"] . ')' . ' ' . 
            '(' . $_POST["music"] . ')' . ' ' . 
            '(' . $_POST["audiobook"] . ')' . ' ' . 
            '(' . $_POST["lp-book"] . ')' . ' ' . 
            '(' . $_POST["magazine"] . ')' . ' ' . 
            '(' . $_POST["videogame"] .')' . 
            "\r\n";
        $message .= '[SERIES] ' . $_POST["series"] . "\r\n";
        $message .= '[AGE] ' . $_POST["age-range"] . "\r\n";
        $message .= '[ISBN] ' . $_POST["isbn"] . "\r\n";
        $message .= '[SUBJECT] ' . $_POST["subject"] . "\r\n";
        
        $success = mail($to, $subject, $message, $headers);

    }


?>