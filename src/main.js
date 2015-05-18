var API_URL ="http://deckofcardsapi.com/api/shuffle/?deck_count=6"
var game;





//Game Start onclick

$('.start').on("click", function () {
  console.log('Game Started')
startGame();


function Game() {
  this.deck_id = "";
  this.dealer_cards = [];
  this.player_cards = [];
  this.playerTotal = 0;
  this.dealerTotal = 0;
  this.dealerFirstTurn = true;
}


function startGame() {
game = new Game();
}

//Initial Deal Function


$('.deal').on("click", function startGame() {
  getJSON(API_URL, function (data) {
    firstdrawCard(data);
  })
    function firstdrawCard (data) {
     var DRAW_CARDS_URL;
     var deckID = data.deck_id;
     var DRAW_CARDS_URL = "http://deckofcardsapi.com/api/draw/" + deckID + "/?count=4";
    getJSON(DRAW_CARDS_URL, function (cardData) {
    
    console.log(DRAW_CARDS_URL)

  //function appendDrawCard(cardData){
  //$('.draw').on("click", function() {
    //console.log('draw function', cardData.cards[0]);
    //console.log('heyyy')


    //Convert Face Cards to values
    
      if (cardData.value = "Ace") {
      cardData.value = 1;
      } else if (cardData.value = "Jack") {
      cardData.value = 10;
      } else if (cardData.value = "Queen") {
      cardData.value = 10; 
      } else if (cardData.value = "King") {
      cardData.value = 10;
      };

    


    //Game Logic

    var playerTotal = parseInt(cardData.cards[0].value) + parseInt(cardData.cards[1].value);
      return playerTotal;
      console.log(playerTotal);

    var dealerTotal = parseInt(cardData.cards[2].value) + parseInt(cardData.cards[3].value);
      return dealerTotal;
      console.log(dealerTotal);

    //Append to page

    var $table=$(".playerCards");
       $table.append("<tr></tr>");
    var $target=$("tr:last");
      $target.append("<td>" + "<img src=" + cardData.cards[0].image + "></img>" + "</td>");
      $target.append("<td>" + "<img src=" + cardData.cards[1].image + "></img>" + "</td>");
    
    var $table=$(".dealerCards");
      $table.append("<tr></tr>");
    var $target=$("tr:last");
      $target.append("<td>" + "<img class='cardBack' src=" + "http://www.bicyclecards.com/lib/a/about/1892.jpg" + "></img>" + "</td>");
      $target.append("<td>" + "<img class='cardBack2' src=" + "http://www.bicyclecards.com/lib/a/about/1892.jpg" + "></img>" + "</td>");

      
      /*
      
    if (dealerTotal === 21) {
      alert('Dealer Wins!')
      alert('Refresh Page to Play again')
    } else if (playerTotal === 21) {
        alert('You Win!')
    };

*/

  })
}

//Get from API

function getJSON(url, cb) {
  JSONP_PROXY = 'https://jsonp.afeld.me/?url='
    // THIS WILL ADD THE CROSS ORIGIN HEADERS

  var request = new XMLHttpRequest();
  request.open('GET', JSONP_PROXY + url);
   request.onload = function() {
    if (request.status >= 200 && request.status < 400) {
      cb(JSON.parse(request.responseText));
    }
  };
 request.send();
 };
});

})

