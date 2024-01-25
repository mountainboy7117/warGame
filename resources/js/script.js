var secondPlayer = [];
var firstPlayer = [];
var playedCards = [];
var cards = [];
var $draw = $("#draw");
var $firstPlayer = $("#firstPlayer");
var $secondPlayer = $("#secondPlayer");
var $firstPlayerNumber = $("#firstPlayerNumber");
var $secondPlayerNumber = $("#secondPlayerNumber");
var $firstPlayerSuit = $("#firstPlayerSuit");
var $secondPlayerSuit = $("#secondPlayerSuit");
var number1;
var number2;
var suit1;
var suit2;
var numberImg1;
var numberImg2;
var $winner = $("#winner");
var $player1Count = $("#player1Count");
var $player2Count = $("#player2Count");
for (i = 1; i <14; i++) {
    // sould be 14 
    for (k = 1; k < 5; k++) {
        var j = [i, k];
        cards.push(j);
    }
}
cards.shuffle = function() {
    console.log("shuffle");
    var input = this;
    for (var i = cards.length - 1; i >= 0; i--) {
        var randomIndex = Math.floor(Math.random() * (i + 1));
        var itemAtIndex = cards[randomIndex][0];
        var itemAtSecond = cards[randomIndex][1];
        input[randomIndex][0] = input[i][0];
        input[randomIndex][1] = input[i][1];
        input[i][0] = itemAtIndex;
        input[i][1] = itemAtSecond;
    }
    return input;
}
//end of shufle function
cards.shuffle();
var half = cards.length / 2;
for (i = 0; i < half; i++) {
firstPlayer.push(cards[i])
}
cards.splice(0, half);
secondPlayer = cards;
$player1Count.html(firstPlayer.length);
$player2Count.html(secondPlayer.length);

function endGame() {
    if (firstPlayer.length == 0) {
        $winner.html("GAME OVER</br> Player Two Wins </br> Player One has no maore cards to play.");
    }
    if (secondPlayer.length == 0) {
        $winner.html("GAME OVER</br> Player One Wins </br> Player Two has no maore cards to play.");
    }
    $winner.css("color", "red");
    $winner.css("font-weight", "bold");
    $("#end").css("display", "none");
    $firstPlayerNumber.html("");
    $secondPlayerNumber.html("");
    $draw.off();
}
function assign() {
    $firstPlayerSuit.css("border-color", "black");
    $secondPlayerSuit.css("border-color", "black");
   
    console.log("assign");
    $firstPlayerSuit.empty();
    $secondPlayerSuit.empty();
    $firstPlayerSuit.css("display", "block");
    $secondPlayerSuit.css("display", "block");
    number1 = firstPlayer[0][0];
    number2 = secondPlayer[0][0];
    $firstPlayerNumber.html(number1);
    $secondPlayerNumber.html(number2);
    suit1 = firstPlayer[0][1];
    suit2 = secondPlayer[0][1];
    if (suit1 == 1) {
        suit1 = "<img src= './resources/images/hearts.jpg'/>";
    }
    if (suit1 == 2) {
        suit1 = "<img src= './resources/images/diamonds.jpg'/>";
    }
    if (suit1 == 3) {
        suit1 = "<img src= './resources/images/club.jpg'/>";
    }
    if (suit1 == 4) {
        suit1 = "<img src= './resources/images/spades.jpg'/>";
    }
    if (suit2 == 1) {
        suit2 = "<img src= './resources/images/hearts.jpg'/>";
    }
    if (suit2 == 2) {
        suit2 = "<img src= './resources/images/diamonds.jpg'/>";
    }
    if (suit2 == 3) {
        suit2 = "<img src= './resources/images/club.jpg'/>";
    }
    if (suit2 == 4) {
        suit2 = "<img src= './resources/images/spades.jpg'/>";
    }
    if (number1 < 11) {
        for (i = 0; i < number1; i++) {
            $firstPlayerSuit.append(suit1);
        }
    } else {
        if (number1 == 11) {
            numberImg1 = "<img src='./resources/images/jack.jpg'/>";
            $firstPlayerSuit.append(suit1);
            $firstPlayerNumber.html(numberImg1)
        }
        if (number1 == 12) {
            numberImg1 = "<img src='./resources/images/queen.jpg'/>";
            $firstPlayerSuit.append(suit1);
            $firstPlayerNumber.html(numberImg1)
        }
        if (number1 == 13) {
            numberImg1 = "<img src='./resources/images/king.jpg'/>";
            $firstPlayerSuit.append(suit1);
            $firstPlayerNumber.html(numberImg1)
        }
    }
    //end of face card code for first player
    if (number2 < 11) {
        for (i = 0; i < number2; i++) {
            $secondPlayerSuit.append(suit2);
        }
    } else {
        if (number2 == 11) {
            numberImg1 = "<img src='./resources/images/jack.jpg'/>";
            $secondPlayerSuit.append(suit2);
            $secondPlayerNumber.html(numberImg1)
        }
        if (number2 == 12) {
            numberImg1 = "<img src='./resources/images/queen.jpg'/>";
            $secondPlayerSuit.append(suit2);
            $secondPlayerNumber.html(numberImg1)
        }
        if (number2 == 13) {
            numberImg1 = "<img src='./resources/images/king.jpg'/>";
            $secondPlayerSuit.append(suit2);
            $secondPlayerNumber.html(numberImg1)
        }
    }

    playedCards.push(firstPlayer[0]);
    playedCards.push(secondPlayer[0]);
    console.log(playedCards.length, "how many played");
    firstPlayer.splice(0, 1);
    secondPlayer.splice(0, 1);
    $player1Count.html($firstPlayer.length);
    $player2Count.html($secondPlayer.length);

    console.log("call greater");
    greater();

    if (firstPlayer.length == 0 || secondPlayer.length == 0) {
        endGame();
}}
function war() {
    $winner.html("This means war!");
    console.log("war");
    for (i = 0; i < 3; i++) {
        playedCards.push(firstPlayer[0]);
        playedCards.push(secondPlayer[0]);
        console.log(playedCards.length);
        firstPlayer.splice(0, 1);
        secondPlayer.splice(0, 1);
        $player1Count.html($firstPlayer.length);
        $player2Count.html($secondPlayer.length);
    }
    $firstPlayerSuit.css("display", "none");
    $secondPlayerSuit.css("display", "none");
    numberImg1 = "<img style='height:14rem;' src='./resources/images/cards.jpg'/>{";
    $firstPlayerNumber.html(numberImg1);
    numberImg2 = "<img style='height:14rem;' src='./resources/images/cards.jpg'/>";
    $secondPlayerNumber.html(numberImg2);
    var audio = new Audio('./resources/images/card.mp3');
    audio.play();
    window.setTimeout(function() {
        audio.play();
    }, 1000);
    window.setTimeout(function() {
        audio.play();
    }, 1000);
}
function greater() {
    console.log("greater");
    console.log("in greater how many played", playedCards.length);

    if (number1 > number2) {
        $winner.html("Player one wins");
        $firstPlayer.css("border color", " red");
        for (i = 0; i < playedCards.length; i++) {
            firstPlayer.push(playedCards[i]);
        }
        $player1Count.html(firstPlayer.length);
        playedCards = [];
    } else   if (number1 < number2) {
        $winner.html("Player two wins");
        $secondPlayer.css("border color", " red");
        for (i = 0; i < playedCards.length; i++) {
            secondPlayer.push(playedCards[i]);
        }
        $player2Count.html(secondPlayer.length);
        playedCards = [];
    } else if (number1 == number2) {
        war();
    }
}
$draw.on('click', function() {
    assign();
})
