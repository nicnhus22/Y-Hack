
<?php #xml version = "1.0" encoding = "utf-8" ?>
<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Strict//EN"
  "http://www.w3.org/TR/xhtml11/DTD/xhtml1-strict.dtd">
<html>
<head> <title> Test | Concordia University </title>
  <link rel="stylesheet" type="text/css" href="Cube/css/main.css"/>
  <link rel="stylesheet" type="text/css" href="Cube/css/key_frame.css"/>
  <link rel="stylesheet" type="text/css" href="Cube/css/cube.css"/>
  <link rel="stylesheet" type="text/css" href="Drag_Drop/css/style.css"/>
  <link rel="stylesheet" href="Progress/css.css">
  <script src="http://ajax.googleapis.com/ajax/libs/jquery/1.5.1/jquery.min.js"></script>
  <script>

  </script>
</head>
<body>
    <div id="global_container">

      <div id="title"><img src="Cube/images/Baux.png" alt="BAUX" width="375px" height="100px"/></div>
      <div id="inner_container">

        <div id="cube_c">
          <section class="cube_container">
            <div id="cube">

                <figure id="front" class="explode">

                  <img height="40" width="180" id="right_arrow" src="Drag_Drop/images/arrow_drag.png"/>

                  <div id="success"></div>

                  <div id="progress_elem" style="display:none;">
                    <div class="pace" id="spinner"><div class="pace-activity"></div></div>
                    <div class="progress_bar"></div>
                  </div>

                    <div id="dropArea">
                      <img id="back_drop_image" src="Drag_Drop/images/drop_logo.png" alt="drop" width="50%" height="50%"/>
                    </div>

                </figure>

                <figure id="back" class="explode">
                  <iframe src="http://illogika.net/Layout/MusicSheet/musicsheet.php" height="400" width="400"></iframe>
                </figure>

                <figure id="up" class="explode"></figure>

                <figure id="down" class="explode"></figure>

                <figure id="left" class="explode"></figure>

                <figure id="right" class="explode">

                    <div id="dropbox_success"></div>

                    <div id="progress_elem_drop" style="display:none;">
                      <div class="pace" id="spinner_success"><div class="pace-activity"></div></div>
                      <div class="progress_bar"></div>
                    </div>

                    <div id="explanation"> Please click on the following link to get the authentification code and paste it in the field bellow.<br/><br/> <span id="link"></span> </div>
                    <input id="input_oauth" name="do" type="text" placeholder="ENTER THE AUTHENTIFICATION CODE..." required /><br/><br/><br/>
                    <input id="sub" type="button" value="Submit" onclick="submitForm()"/>

                </figure>
            </div>
        </section>
      </div>
      </div>
    </div>
<script src="Cube/javas/javas.js"></script>
<script src="Drag_Drop/js/script.js"></script>
<script src="Progress/js.js"></script>
<script src="MusicSheet/jquery-ui-1.8.20.custom.min.js"></script> 
<script src="MusicSheet/scorediv-pv0.0.3.js"></script>
</body>
</html>