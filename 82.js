let count = 0;

function cc(card) {
// Only change code below this line
  let bet = "Bet";
  let hold = "Hold"
  let cardDeck = {
    2: 1,
    3: 1,
    4: 1,
    5: 1,
    6: 1,
    7: 0,
    8: 0,
    9: 0,
    10: -1,
    J: -1,
    Q: -1,
    K: -1,
    A: -1
  }
  count += cardDeck[card];
  if(count > 0){
    return `${count} ${bet}`;
  } else {return `${count} ${hold}`}

// Only change code above this line
}

cc(2); cc(3); cc(7); cc('K'); cc('A');