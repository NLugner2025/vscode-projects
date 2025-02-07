var cardArray = [

  {name: "burger",img: "images\\burger.png",},
  {name: "burger",img: "images\\burger.png",},

  {name: "browser",img: "images\\browser.png",},
  {name: "browser",img: "images\\browser.png",},

  {name: "icecream",img: "images\\icecream.png",},
  {name: "icecream",img: "images\\icecream.png",},
  
  {name: "football", img: "images\\football.png",},
  {name: "football",img: "images\\football.png",},

  {name: "slice",img: "images\\slice.png",},
  {name: "slice",img: "images\\slice.png",},

  { name: "wifi", img: "images\\wifi.png" },
  { name: "wifi", img: "images\\wifi.png" },

];

var attempts = 0

cardArray.sort(()=>0.5-Math.random())
var grid = document.querySelector(".grid");
var chosenCards = [];
var cardsChosenId=[]
function flipCard() {
  var cardId = this.getAttribute("id");
  chosenCards.push(cardArray[cardId].name)
  cardsChosenId.push(cardId)
  this.setAttribute("src",cardArray[cardId].img)
if (chosenCards.length===2){
  setTimeout(match,500)
}
this.removeEventListener("click",flipCard)
}
function match(){
  var id1 = cardsChosenId[0]
  var id2 = cardsChosenId[1]
  var cards = document.getElementsByTagName("img")
   if(chosenCards[0]===chosenCards[1]){
    alert("You Found a Match!")
    cards[id1].setAttribute("src","images\\empty.png")    
    cards[id2].setAttribute("src","images\\empty.png");
    score+=1;
    document.getElementById("scoreFont").textContent = " Score : " + score.toString();
  }
  else{
    cards[id1].setAttribute("src","images\\card.png");
    cards[id2].setAttribute("src","images\\card.png");
    attempts += 1
    alert("Better Luck next time");
    document.getElementById("clickCountfont").textContent = "ClickCount = " + attempts.toString();
    cards[id1].addEventListener("click",flipCard);
    cards[id2].addEventListener("click",flipCard);
  }
cardsChosenId = [];
chosenCards = [];
}

function createBoard() {
  for (var i = 0; i < cardArray.length; i++) {
    var card = document.createElement("img");
    card.setAttribute("src","images\\card.png");
    card.setAttribute("id",i);
    card.addEventListener("click",flipCard);
    grid.appendChild(card);
    
  }
}

function playerFunc(evt){
  evt.preventDefault();
  var name = document.getElementById("nameId");
  var playerName = document.getElementById("PlayerId");
  name.innerHTML=playerName.value;
  var grid = document.querySelector(".grid");
  grid.style.display="block";
}

createBoard();
var score =   0
document.getElementById("Score").textContent = score.toString()