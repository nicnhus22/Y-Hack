// variables

var xhr;

var dropArea = document.getElementById('dropArea');

var dropImg = document.getElementById('back_drop_image');

var canvas = document.querySelector('canvas');

// var context = canvas.getContext('2d');

// var count = document.getElementById('count');

var destinationUrl = 'http://pandacompany.fr/YHack/Layout/upload.php';

// var result = document.getElementById('result');

var list = [];

var totalSize = 0;

// var totalProgress = 0;



// initialisation

(function(){

    // gestionnaires

    function initHandlers() {

        dropArea.addEventListener('drop', handleDrop, false);

        dropArea.addEventListener('dragover', handleDragOver, false);

        dropArea.addEventListener('dragleave', function(){  dropImg.style.opacity = '0.7';
                                                            dropImg.style.height = '50%';
                                                            dropImg.style.width = '50%'; }, false);

    }



    // survol lors du déplacement

    function handleDragOver(event) {

        event.stopPropagation();

        event.preventDefault();

        dropImg.style.opacity = '1';
        dropImg.style.height = '70%';
        dropImg.style.width = '70%';

    }



    // glisser déposer

    function handleDrop(event) {

        event.stopPropagation();

        event.preventDefault();

        processFiles(event.dataTransfer.files);

        startSpinner();

        hideDragHere();

    }



    // traitement du lot de fichiers

    function processFiles(filelist) {

        if (!filelist || !filelist.length || list.length) return;



        totalSize = 0;


        for (var i = 0; i < filelist.length && i < 5; i++) {

            list.push(filelist[i]);

            totalSize += filelist[i].size;

        }

        uploadNext();

    }



    // à la fin, traiter le fichier suivant

    function handleComplete(size) {

        uploadNext();

    }



    // mise à jour de la progression

    function handleProgress(event) {

        var progress = totalProgress + event.loaded;

    }



    // transfert du fichier

    function uploadFile(file, status) {

        // création de l'objet XMLHttpRequest

        // création de l'objet FormData

        var formData = new FormData();
        formData.append('file', file);

        // now post a new XHR request
        xhr = new XMLHttpRequest();

        xhr.onreadystatechange = stateChanged;

        xhr.open('POST', 'http://illogika.net/Layout/upload.php');
        
        xhr.onload = function () {
          if (xhr.status === 200) {
            console.log('all done: ' + xhr.status);
            stopSpinner();
            showSucess(file);
            setTimeout("leftPressed()", 3000);
            setTimeout("hideSucess()",3000);
            setTimeout("inputOAuth()",3000);
            loadDropboxLink();            
        } else {
            console.log('Something went terribly wrong...');
        }
    };


    xhr.send(formData);


        
    }

    function stateChanged() {

      if (xhr.readyState == 4  && xhr.status == 200 ){

      var result = xhr.responseText; // Get the reponse text
      
  }


}



    // transfert du fichier suivant

    function uploadNext() {


        if (list.length) {



            var nextFile = list.shift();

            if (nextFile.size >= 262144000) { // 256 kb

                // result.innerHTML += '<div class="f">Fichier trop gros (dépassement de la taille maximale)</div>';

                handleComplete(nextFile.size);


            } else {


                uploadFile(nextFile, status);


            }

        } else {

            dropArea.className = '';

        }

    }



    initHandlers();

})();


function startSpinner(){

    document.getElementById('progress_elem').style.display = "block";

}

function stopSpinner(){

    document.getElementById('progress_elem').style.display = "none";

}



function startSpinnerDrop(){

    document.getElementById('progress_elem_drop').style.display = "block";

}



function stopSpinnerDrop(){

    document.getElementById('progress_elem_drop').style.display = "none";

}

function showSucess(file_name){
    var success = document.getElementById('success');

    success.innerHTML = "FILE UPLOADED TO SERVER<br/>"+file_name.name;
    success.style.right="-220px";
    success.style.background = "rgba(140, 200, 59, 1)";
}

function hideSucess(){
    var success = document.getElementById('success');

    success.innerHTML = "";
    success.style.right="0px";
    success.style.background = "rgba(140, 200, 59, 0)";
}

function showSucessDropbox(file_name){
    var success = document.getElementById('dropbox_success');

    success.innerHTML = "FILE UPLOADED<br/>"+file_name;
    success.style.right="-220px";
    success.style.background = "rgba(140, 200, 59, 1)";
}

function hideSucessDropbox(){
    var success = document.getElementById('dropbox_success');

    success.innerHTML = "";
    success.style.right="0px";
    success.style.background = "rgba(140, 200, 59, 0)";
}


function hideDragHere() {
    document.getElementById('right_arrow').style.display = "none";
}

function inputOAuth(){

}


function loadDropboxLink(){

    $.ajax({
      type: 'GET',
      data: {do:'auth'},
      url: 'http://illogika.net/Layout/oauth.php',
      success:function(data){
        $('#link').html('<a href=\"'+data+'\" target="_blank">Click Here</a>');
      }
    });
}


function submitForm(){

    startSpinnerDrop()
    var action = $('#input_oauth').val();
    var button = document.getElementById("sub").disabled = true; 
    button.value = "Submit...";
    button.disabled = true;

    $.ajax({
      type: 'GET',
      data: {do: action },
      url: 'http://illogika.net/Layout/oauth.php',
      success:function(data){
        stopSpinnerDrop();
        showSucessDropbox('TO DROP BOX');
        setTimeout("leftPressed()", 3000);
        setTimeout("hideSucessDropbox()",3000);
      }
    });

}



















/**
    *
    * CUBE ROTATION FUNCTIONS
    *
    *
    */

    var xAngle = 0;
    var yAngle = 0;

    function rightPressed(){
        xAngle += 90;

        document.getElementById('cube').style.transform = "translateZ(-100px) rotateY("+xAngle+"deg)";
        document.getElementById('cube').style.MsTransform = "translateZ(-100px) rotateY("+xAngle+"deg)";
        document.getElementById('cube').style.WebkitTransform = "translateZ(-100px) rotateY("+xAngle+"deg)";
    }

    function leftPressed(){

        xAngle -= 90;

        document.getElementById('cube').style.transform = "translateZ(-100px) rotateY("+xAngle+"deg)";
        document.getElementById('cube').style.MsTransform = "translateZ(-100px) rotateY("+xAngle+"deg)";
        document.getElementById('cube').style.WebkitTransform = "translateZ(-100px) rotateY("+xAngle+"deg)";

    }