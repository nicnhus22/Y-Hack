<?php

	

	
	require_once "dropbox-sdk/Dropbox/autoload.php";
	use \Dropbox as dbx;
		
	session_start();	


		$action = $_GET['do'];

		if($action == 'auth'){
			login();
		}
		else{
			addFile($_GET['do']);
		}


	



		function login(){		

			$appInfo = dbx\AppInfo::loadFromJsonFile("config.json");
			$webAuth = new dbx\WebAuthNoRedirect($appInfo, "PHP-Example/1.0");
			$authorizeUrl = $webAuth->start();

			$_SESSION['webAuth'] = $webAuth;

			echo $authorizeUrl;
		}

		function addFile($code){

			// var_dump($_SESSION['webAuth']);
			list($accessToken, $dropboxUserId) = $_SESSION['webAuth']->finish($code);
			$dbxClient = new dbx\Client($accessToken, "PHP-Example/1.0");

			$f = fopen("song.wav", "rb");
			$result = $dbxClient->uploadFile("/Baux/song.wav", dbx\WriteMode::add(), $f);
			echo $dropboxUserId;
			fclose($f);

			
		}




	?>





