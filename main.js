Webcam.set({
    width:360,
    height:280,
    image_format:"png",
    png_quality:90
});
camera=document.getElementById("camera");
Webcam.attach("#camera");
function snapshot(){
    Webcam.snap(function(snappicture){
        document.getElementById("result").innerHTML='<img id="photo" src="'+ snappicture + '">'
    });
}
console.log("ml5version:",ml5.version);
classifier=ml5.imageClassifier('https://teachablemachine.withgoogle.com/models/FX3A-09b3/model.json',loadmodel)
function loadmodel() {
    console.log("modeloaded");
}