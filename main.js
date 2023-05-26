var screen_width = window.innerWidth;
var screen_height = window.innerHeight;
x = 0;
y = 0;
var speakData;
drawApple = "";
var toNumber;
var SpeechRecognition = window.webkitSpeechRecognition;
  
var recognition = new SpeechRecognition();

function start()
{
  document.getElementById("status").innerHTML = "O sistema está ouvindo. Por favor, fale.";  
  recognition.start();
} 
 
recognition.onresult = function(event) {

 console.log(event); 

 content = event.results[0][0].transcript;

    document.getElementById("status").innerHTML = "A fala foi reconhecida: " + content; 

}

function setup() {
 canvas = createCanvas(280,280);
    canvas.center();
}

function draw() {
  if(drawApple == "set")
  {

    document.getElementById("status").innerHTML = toNumber + " maçãs desenhadas";
    drawApple == "set";
  }
  for(var i = 1; i <= to_number; i++)
  {
    x = Math.floor(Math.randow() * 700);
    y = Math.floor(Math.random() * 400);
    Image(apple, x, y, 50, 50);
  }
}

function speak(){
    var synth = window.speechSynthesis;

    var utterThis = new SpeechSynthesisUtterance(speakData);

    synth.speak(utterThis);

    speakData = "set";
}
preload()
{
  loadImage.draw("apple.png");
}
Number()
{
  to_number = Number(content);
  if(Number.isInteger(to_number)){
    document.getElementById("status").innerHTML = toNumber + "A maçã começou a ser desenhada";
    drawApple = "set";
  }
}
Canvas()
{
createCanvas("screenWidth,screenHeight-150");
canvas.position(randow(0, 150));
}