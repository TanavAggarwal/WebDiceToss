var randomNumber = Math.floor((Math.random()*6)+1);
var randomNumber2 = Math.floor((Math.random()*6)+1);

var randomDiceImg = "dice"+randomNumber+".png"
var randomDiceImg2 = "dice"+randomNumber2+".png"

var img1 = document.querySelectorAll("img")[0] ;
var img2 = document.querySelectorAll("img")[1] ;
img1.setAttribute("src" , randomDiceImg);
img2.setAttribute("src" , randomDiceImg2);

var message = document.querySelector("h1")
if(randomNumber>randomNumber2){
message.innerHTML = "Player 1 WINS!!!";
}else if (randomNumber===randomNumber2) {
  message.innerHTML = "It's a DRAW,ROLL AGAIN!!!";
}
else {
  message.innerHTML = "Player 2 WINS!!!";
}
