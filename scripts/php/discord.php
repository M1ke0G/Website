<?php

	$email_to = "webmaster@losthaven.net";
	$email_subject_2 = "Lost Haven - Job Submission (Copy)";
	
	if(!isset($_REQUEST['name']) || !isset($_REQUEST['email']) || !isset($_REQUEST['text'])) {
		die("<SCRIPT>
		alert('Missing required information, please try again.');
		location.href = '/';
		</SCRIPT>");
	}
	$name = $_REQUEST['name'];
	$email_from = $_REQUEST['email'];
	$position = $_REQUEST['position'];
	$text = $_REQUEST['text'];
	
	$returnurl='https://losthaven.net/meet-the-team/?name='.urlencode($name).'&email='.urlencode($email_from).'&position='.urlencode($position).'&text='.urlencode($text);
	
	$email_subject = "$name ($email_from) - Lost Haven Job Submission";
	
	$email_exp = '/^[A-Za-z0-9._%-]+@[A-Za-z0-9.-]+\.[A-Za-z]{2,4}$/';
    $email_message = "Lost Haven Job Submission:\n\n";
 
    function clean_string($string) {
      $bad = array("content-type","bcc:","to:","cc:","href");
      return str_replace($bad,"",$string);
    }
 
    $email_message .= "Name: ".clean_string($name)."\n";
    $email_message .= "Email: ".clean_string($email_from)."\n";
    $email_message .= "Position: ".clean_string($position)."\n";
    $email_message .= "Message: ".clean_string($text)."\n";
	
	$headers = 'From: '.$email_from."\r\nReply-To: ".$email_from."\r\nX-Mailer: PHP/" . phpversion();
	$headers2 = 'From: '.$email_to."\r\nReply-To: ".$email_to."\r\nX-Mailer: PHP/" . phpversion();
	

	
	$postData = array(
    'content' => $email_message
    );
$context = stream_context_create(array(
    'http' => array(
        // http://www.php.net/manual/en/context.http.php
        'method' => 'POST',
        'header' => "Authorization: {$authToken}\r\n".
            "Content-Type: application/json\r\n",
        'content' => json_encode($postData)
    )
));
	
	if(!preg_match("/^[A-Za-z .'-]+$/",$name)) {
		die("<SCRIPT>
		alert('Invalid name.');
		location.href = '".$returnurl."';
		</SCRIPT>");
	} elseif(!preg_match($email_exp,$email_from)) {
		die("<SCRIPT>
		alert('Invalid email address.');
		location.href = '".$returnurl."';
		</SCRIPT>");
	} elseif(strlen($text) < 1) {
		die("<SCRIPT>
		alert('Your message isn't long enough.');
		location.href = '".$returnurl."';
		</SCRIPT>");
	} else {
		@mail($email_to, $email_subject, $email_message, $headers);
		@mail($email_from, $email_subject_2, $email_message, $headers2);
		$responseAPI = file_get_contents('https://discordapp.com/api/webhooks/533032558808793089/IJqxT7zWG1QTMtWgOTWOIiG3pD-MorErlmDtPr5pnrUIEp4odLMp3Vg978wfKDte43eI', FALSE, $context);
		header('Location: /success',302);
		die("<a href='/success'><h1>Success! Click here if you're not redirected.</h1></a>");

}
	
?>