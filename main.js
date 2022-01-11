Webcam.set
({
width:350,
height:300,
image_format:'png',
png_quality:90
})
camera=document.getElementById("camera");
Webcam.attach('#camera');
function take_snapshot(){
Webcam.snap(function(data_uri)
{
document.getElementById("result").innerHTML='<img id="capture_img" src="'+data_uri+'"/>';
}
);
}
classifier=ml5.imageClassifier('https://teachablemachine.withgoogle.com/models/gbxKsiYii/model.json',modelLoaded);
function modelLoaded()
{
console.log('modelLoaded');
}
console.log('ml5 version',ml5.version);
function check()
{
Capture=document.getElementById('capture_img');
classifier.classify(Capture, gotResult);
}
function gotResult(error, results)
{
if(error)
{
console.error(error);
}
else
{
console.log(results);
document.getElementById("result_emotion_name").innerHTML=results[0].label;
Gesture=results[0].label;
toSpeak="";
if(Gesture=="Thumb Up")
{
toSpeak="All the Best";
document.getElementById("update_emoji").innerHTML="&#128077;"
}
else if(Gesture=="Amazing")
{
toSpeak="The is looking amazing";
document.getElementById("update_emoji").innerHTML="&#128076;";
}
else if(Gesture=="Victory")
{
toSpeak="That was a Marvelous Victory";
document.getElementById("update_emoji").innerHTML="&#9996;";
}
Speak();
}
}
function Speak()
{
var =window.speechSynthesis;
speak_data=toSpeak;
var utterThis=new SpeechSynthesisUtterance(speak_data);
.Speak(utterThis);
}