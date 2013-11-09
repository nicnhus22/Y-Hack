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

        dropArea.addEventListener('dragleave', function(){dropImg.style.opacity = '0.7';}, false);

    }



    // survol lors du déplacement

    function handleDragOver(event) {

        event.stopPropagation();

        event.preventDefault();



        dropImg.style.opacity = '1';

    }



    // glisser déposer

    function handleDrop(event) {

        event.stopPropagation();

        event.preventDefault();

        processFiles(event.dataTransfer.files);



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
          } else {
            console.log('Something went terribly wrong...');
          }
        };


        xhr.send(formData);

        
    }

    function stateChanged() {

  if (xhr.readyState == 4  && xhr.status == 200 ){
    
      var result = xhr.responseText; // Get the reponse text

      alert(result);

        
      
      
    }


}



    // transfert du fichier suivant

    function uploadNext() {


        if (list.length) {



            var nextFile = list.shift();

            if (nextFile.size >= 262144) { // 256 kb

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