<?php

move_uploaded_file($_FILES['file']['tmp_name'], $target_path = $_SERVER['DOCUMENT_ROOT'] . "/Layout/" . "song.wav");

echo exec("\Backend\bin\Debug\TestMathematica.vshost.exe $target_path 500 1.0"); 


?>