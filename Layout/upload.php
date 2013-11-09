<?php

move_uploaded_file($_FILES['file']['tmp_name'], $target_path = $_SERVER['DOCUMENT_ROOT'] . "/Layout/" . "filename");

?>