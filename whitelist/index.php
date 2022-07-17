<!DOCTYPE HTML>

<html>

	<head>

		<title>Whitelist Application - Lost Haven Roleplay</title>

		<link rel="stylesheet" type="text/css" href="../style/style.css"/>
		<link rel="shortcut icon" type="image/x-icon" href="../img/favicon.png"/>

		<meta name="description" content="Lost Haven Roleplay is a growing community that suits everyone. Participate in discussions, showcase your artwork, participate in giveaways and find a place to call home. Join today, we won't disappoint you."/>
		<meta name="keywords" content="Lost Haven, RolePlay, best fivem servers, Roleplay, LostHavenRoleplay, Lost Haven Roleplay, Fivem, FiveM, Roleplay, RP, GTARP, GTA RP, FiveM Roleplay, Best Fivem Servers 2021, FiveM RP"/>
		<meta charset="UTF-8">
		
		<script type="text/javascript" src="../scripts/js/jquery.js"></script>
		<script type="text/javascript" src="../scripts/js/header.js"></script>
		
	</head>
	
	<body>
	
		<div class="up">
			<img src="../img/up.png"/>
		</div>
	
		<?php
		
		include_once('../header.php');
		
		?>
		
		<div class="partners">
			<div class="partners-cover">
				<div class="company-pform-left">
					<form name="form" action="../scripts/php/discord.php" method="POST" enctype="multipart/form-data">
						<?php 
							if (isset($_REQUEST['name'])) {
								echo '<input autocomplete="off" maxlength="100" style="padding-left: 10px; background: rgba(220,220,220,0.2); border: 0px solid; border-bottom: 1px solid #634D4F; letter-spacing: 1px; height: 50px; width: 640px; float: left; font-family: Dedifire; font-size: 20px; color: #cfcfcf;" class="input" name="name" placeholder="Discord Name..." type="text" value="'. urldecode($_REQUEST['name']) .'"></input>';
							} else {
								echo '<input autocomplete="off" maxlength="100" style="padding-left: 10px; background: rgba(220,220,220,0.2); border: 0px solid; border-bottom: 1px solid #634D4F; letter-spacing: 1px; height: 50px; width: 640px; float: left; font-family: Dedifire; font-size: 20px; color: #cfcfcf;" class="input" name="name" placeholder="Discord Name..." type="text"></input>';
							}
						?>
						<?php
							if (isset($_REQUEST['email'])) {
								echo '<input autocomplete="off" maxlength="100" style="padding-left: 10px; background: rgba(220,220,220,0.2); border: 0px solid; border-bottom: 1px solid #634D4F; letter-spacing: 1px; height: 50px; width: 640px; float: left; font-family: Dedifire; font-size: 20px; color: #cfcfcf;" class="input" name="email" placeholder="Discord ID..." type="text" value="'. urldecode($_REQUEST['email']) .'"></input>';
							} else {
								echo '<input autocomplete="off" maxlength="100" style="padding-left: 10px; background: rgba(220,220,220,0.2); border: 0px solid; border-bottom: 1px solid #634D4F; letter-spacing: 1px; height: 50px; width: 640px; float: left; font-family: Dedifire; font-size: 20px; color: #cfcfcf;" class="input" name="email" placeholder="Discord ID..." type="text"></input>';
							}
						?>
						<?php
							if (isset($_REQUEST['text'])) {
								echo '<textarea autocomplete="off" style="background: rgba(220,220,220,0.2); border: 0px solid; letter-spacing: 1px; padding-left: 10px; padding-top: 10px; height: 190px; width: 638px; max-width: 638px; max-height: 190px; float: left; font-family: Dedifire; font-size: 20px; color: #cfcfcf;" class="input" name="text" placeholder="Describe your characters backstory..." type="text">'. urldecode($_REQUEST['text']) .'</textarea>';
							} else {
								echo '<textarea autocomplete="off" style="background: rgba(220,220,220,0.2); border: 0px solid; letter-spacing: 1px; padding-left: 10px; padding-top: 10px; height: 190px; width: 638px; max-width: 638px; max-height: 190px; float: left; font-family: Dedifire; font-size: 20px; color: #cfcfcf;" class="input" name="text" placeholder="Describe your characters backstory..." type="text"></textarea>';
							}
						?>
						<input type="submit" name="submit" value="SUBMIT" style="margin-top: 4px; background: rgba(213,54,59,0.3); border: 0px solid; height: 40px; width: 100px; color: #A33030; font-family: Dedifire; font-size: 19px; letter-spacing: 2px; -webkit-box-shadow: 0px 0px 18px 2px rgba(0,0,0,0.75); -moz-box-shadow: 0px 0px 18px 2px rgba(0,0,0,0.75); box-shadow: 0px 0px 18px 2px rgba(0,0,0,0.75);"></input>
					</form>
				</div>
				<div class="company-form-right">
					<div class="company-form-sub-title">WhiteList Application</div>
					<div class="company-form-description">Apply for whitelisting to join the server today!</div>
				</div>
			</div>
		</div>
	
		
		<?php
		
		include_once('../footer.php');
		
		?>
	
	</body>
	
</html>