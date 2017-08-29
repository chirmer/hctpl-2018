if (isset($_POST["submit"])) {
		$contactName = $_POST['contactName'];
		$contactEmail = $_POST['contactEmail'];
    $contactSubject = $_POST['contactSubject'];
		$contactMessage = $_POST['contactMessage'];
		$contactHuman = intval($_POST['contactHuman']);
		$from = '$contactEmail';
		$to = 'dhenderson@huntingtonpub.lib.in.us';
		$subject = '$contactSubject';

		$body = "From: $contactName\n E-Mail: $contactEmail\n Message:\n $contactMessage";

		// Check if name has been entered
		if (!$_POST['contactName']) {
			$errName = 'Please enter your name';
		}

		// Check if email has been entered and is valid
		if (!$_POST['contactEmail'] || !filter_var($_POST['contactEmail'], FILTER_VALIDATE_EMAIL)) {
			$errEmail = 'Please enter a valid email address';
		}

		//Check if message has been entered
		if (!$_POST['contactMessage']) {
			$errMessage = 'Please enter your message';
		}

		//Check if simple anti-bot test is correct
		if ($human !== 'YES') {
			$errHuman = 'Please type YES in capital letters';
		}

// If there are no errors, send the email
if (!$errName && !$errEmail && !$errMessage && !$errHuman) {
	if (mail ($to, $subject, $body, $from)) {
		$result='<div class="alert alert-success">Thank You! I will be in touch</div>';
	} else {
		$result='<div class="alert alert-danger">Sorry there was an error sending your message. Please try again later</div>';
	}
}
	}
