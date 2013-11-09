

xAngle = 0;
yAngle = 0;

var faces = ["1","2","3","4"];
var current_face = 0;

var patt = /\w+\s\w+/;

document.addEventListener('keydown', function(e){

	switch(e.keyCode){

        case 37: // left
            leftPressed();
        break;
        case 39: // right
            rightPressed();
        break;
        // case 38 : // up
        //     upPressed();
        // break;
        // case 40 : // bottom
        //     downPressed();
        // break;
        case 13: // If Enter is pressed
            enterPresed();
        break;
    };


}, false);



function sendRequests(word_input, face){

    switch(face){

        case "1" :
            alert('not implemented yet');
        break;
        case "2" :
            $('#cube figure').css("animation","explode 2s");
            setTimeout(function(){$('#cube figure').css("animation","implode 2s")},2000);

            $('#cube figure').css("-moz-animation","explode 2s");
            setTimeout(function(){$('#cube figure').css("-moz-animation","implode 2s")},2000);

            $('#cube figure').css("-ms-animation","explode 2s");
            setTimeout(function(){$('#cube figure').css("-ms-animation","implode 2s")},2000);

            word_input = word_input.split(",");

            sendWeatherRequest(word_input[0], word_input[1]);
     
        break;
        case "3" :
            alert('not implemented yet');
        break;
        case "4" :
            $('#cube figure').css("animation","explode 2s");
            setTimeout(function(){$('#cube figure').css("animation","implode 2s")},2000);

            $('#cube figure').css("-moz-animation","explode 2s");
            setTimeout(function(){$('#cube figure').css("-moz-animation","implode 2s")},2000);

            $('#cube figure').css("-ms-animation","explode 2s");
            setTimeout(function(){$('#cube figure').css("-ms-animation","implode 2s")},2000);
            sendSoundCloudRequest(word_input);
        break;
    }

}


function enterPresed(){

    document.getElementById('cube').figure.style.animation = "explode 2s";

    setTimeout(function(){document.getElementById('cube').figure.style.animation = "implode 2s";},2000);
}

function rightPressed(){
    xAngle += 90;
    if(current_face == 3)
        current_face = 0;
    else
        current_face++;

    document.getElementById('cube').style.transform = "translateZ(-100px) rotateY("+xAngle+"deg)";
    document.getElementById('cube').style.MsTransform = "translateZ(-100px) rotateY("+xAngle+"deg)";
    document.getElementById('cube').style.WebkitTransform = "translateZ(-100px) rotateY("+xAngle+"deg)";
}

function leftPressed(){
    xAngle -= 90;
    if(current_face == 0)
        current_face = 3;
    else
        current_face--;

    document.getElementById('cube').style.transform = "translateZ(-100px) rotateY("+xAngle+"deg)";
    document.getElementById('cube').style.MsTransform = "translateZ(-100px) rotateY("+xAngle+"deg)";
    document.getElementById('cube').style.WebkitTransform = "translateZ(-100px) rotateY("+xAngle+"deg)";

}

// function upPressed(){
//     yAngle += 90;

//     document.getElementById('cube').style.transform = "translateZ(-100px) rotateX("+yAngle+"deg)";
//     document.getElementById('cube').style.MsTransform = "translateZ(-100px) rotateX("+yAngle+"deg)";
//     document.getElementById('cube').style.WebkitTransform = "translateZ(-100px) rotateX("+yAngle+"deg)";
// }

// function downPressed(){
//     yAngle -= 90;

//     document.getElementById('cube').style.transform = "translateZ(-100px) rotateX("+yAngle+"deg)";
//     document.getElementById('cube').style.MsTransform = "translateZ(-100px) rotateX("+yAngle+"deg)";
//     document.getElementById('cube').style.WebkitTransform = "translateZ(-100px) rotateX("+yAngle+"deg)";

// }