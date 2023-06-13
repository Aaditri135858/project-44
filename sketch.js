var seeta_scared, seeta_excited
var geeta_scared , geeta_excited, geeta_surprised
var rabbit, lion, rabbitImage, lionImage
var backgroundImage
var questions, quiz
var keyboardClickSound, clapSound, youLoseSound
var happyBunnyGIF, sadBunnyGIF
var code,system, security

function preload(){
  
  keyboardClickSound = loadSound("./assets/Keyboard-Button-Click-02-m-FesliyanStudios.com.mp3")
  clapSound = loadSound("./assets/claps-44774.mp3")
  youLoseSound = loadSound("./assets/89099721.mp3")

  happyBunnyGIF = loadImage("./assets/happy bunny.gif")
  sadBunnyGIF = loadImage("./assets/sad bunny.gif")

  rabbitImage = loadImage("./assets/rabbit.jpg")
  lionImage = loadImage("./assets/lion.webp")

  backgroundImage = loadImage("./assets/jungle.avif")

  seeta_scared = loadImage("./assets/seeta scared img.png")
  seeta_excited = loadImage("./assets/seeta excited image.png")

  geeta_scared = loadImage("./assets/geeta scared img.png")
  geeta_scared = loadImage("./assets/geeta excited img.png")
  geeta_scared = loadImage("./assets/geeta surprised img.png")


}

function setup() {
  createCanvas(800,400);
  system = newSystem();
  security = newSecurity();
}

function draw() {
  background(backgroundImage);
  clues();
  security.display();
}