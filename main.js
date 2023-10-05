function init() {
  for (let i = 0; i < toRightArrayWhite.length; i++) {
    for (let j = 0; j < toRightArrayWhite[i].length; j++) {
      let element = toRightArrayWhite[i][j];
      toRightArrayWhite[i][j].addEventListener("click", function () {
        if (currentWhitePlayer === true) {
          if (element.src === urlwhite && Selected === true) {
            ClearOpacity();
            elementBorder.parentElement.style.borderColor = "";
          } else if (element.src === urlwhiteKing && Selected === true) {
            ClearOpacity();
            elementBorder.parentElement.style.borderColor = "";
          }
          if (element.src === urlwhite && Selected === false) {
            Selected = true;
            elementBorder = element;
            elementBorder.parentElement.style.borderColor = "lightgreen";
            prevElementId = element.id;
            firstClickWhiteRight(element.id);
            firstClickWhiteLeft(element.id);
            //////////////////////////////////// To Right White Eeating ///////////////////////////////////////////////////
          } else if (element.src === urlwhiteKing && Selected === false) {
            elementBorder = element;
            Selected = true;
            elementBorder.parentElement.style.borderColor = "lightgreen";
            prevElementKing = document.getElementById(element.id);
            firstClickWhiteKing(element.id);
          } if (element.src === urlEmptyCoin) {
            if ((prevElementKing != undefined) && (prevElementKing.src === urlwhiteKing)) {
              let rivalCoin;
              if((Number(prevElementKing.id[1]) + 2) === Number(element.id[1])){
                rivalCoin = nextCharacter(prevElementKing.id[0]) + (Number(prevElementKing.id[1]) + 1);
                const ifRivalCoin = document.getElementById(rivalCoin);
                if((ifRivalCoin !== null) && (ifRivalCoin.src === urlblack || ifRivalCoin.src === urlblackKing)){
                  whiteKingEating(prevElementKing.id, element.id, rivalCoin)
                } else {
                  rivalCoin = prevCharacter(prevElementKing.id[0]) + (Number(prevElementKing.id[1]) + 1)
                  whiteKingEating(prevElementKing.id, element.id, rivalCoin)
                }
              } else if((Number(prevElementKing.id[1]) - 2) === Number(element.id[1])) {
                rivalCoin = nextCharacter(prevElementKing.id[0]) + (Number(prevElementKing.id[1]) - 1);
                const ifRivalCoin = document.getElementById(rivalCoin);
                if((ifRivalCoin !== null) && (ifRivalCoin.src === urlblack || ifRivalCoin.src === urlblackKing)){
                  whiteKingEating(prevElementKing.id, element.id, rivalCoin)
                } else {
                  rivalCoin = prevCharacter(prevElementKing.id[0]) + (Number(prevElementKing.id[1]) - 1)
                  whiteKingEating(prevElementKing.id, element.id, rivalCoin)
                }
              }
            }
            if ((prevElementId != undefined) && (element.id[1] > prevElementId[1])) {
              let prevElement = document.getElementById(prevElementId);
              let CurrAndPrev = [prevElement, element];
              for (let i = 0; i < toRightArrayWhite.length; i++) {
                let tempArray = [];
                let nextID;
                for (let j = 0; j < toRightArrayWhite[i].length; j++) {
                  tempArray.push(toRightArrayWhite[i][j]);
                }
                if (multipleInArray(tempArray, CurrAndPrev)) {
                  for (let i = 0; i < tempArray.length; i++) {
                    if (tempArray[i] === CurrAndPrev[0]) {
                      nextID = tempArray[i + 1].id;
                    }
                  }
                  whiteEating(prevElementId, element.id, nextID);
                }
              }
              //////////////////////////////////// To Left White Eeating ///////////////////////////////////////////////////
              for (let i = 0; i < toLeftArrayWhite.length; i++) {
                let tempArray = [];
                let indexOfNext;
                let nextID;
                for (let j = 0; j < toLeftArrayWhite[i].length; j++) {
                  tempArray.push(toLeftArrayWhite[i][j]);
                }
                if (multipleInArray(tempArray, CurrAndPrev)) {
                  for (let i = 0; i < tempArray.length; i++) {
                    if (tempArray[i] === CurrAndPrev[0]) {
                      indexOfNext = i + 1;
                      nextID = tempArray[indexOfNext].id;
                    }
                  }
                  whiteEating(prevElementId, element.id, nextID);
                }
              }
            }
          } else if (element.src === urlwhiteOpacity) {
            elementBorder.parentElement.style.borderColor = "";
            changeWhitePosition(element.id, prevElementId);
          } else if (element.src === urlwhiteKingOpacity) {
            elementBorder.parentElement.style.borderColor = "";
            changeWhiteKingPosition(element.id, prevElementKing.id);
          }
             //////////////////////////////////////////////////////////////////////////////////////////////////
             //////////////////////////Black Turn//////////////////////////////////////////////////////////////    
             //////////////////////////////////////////////////////////////////////////////////////////////////
        } else {
          if (element.src === urlblack && Selected === true) {
            ClearOpacity();
            elementBorder.parentElement.style.borderColor = "";
          } else if (element.src === urlblackKing && Selected === true) {
            ClearOpacity();
            elementBorder.parentElement.style.borderColor = "";
          }
          if (element.src === urlblack && Selected === false) {
            elementBorder = element;
            Selected = true;
            elementBorder.parentElement.style.borderColor = "lightgreen";
            prevElementId = element.id;
            firstClickBlackRight(element.id);
            firstClickBlackLeft(element.id);
            //////////////////////////////////// To Right Black Eeating ///////////////////////////////////////////////////
          } else if (element.src === urlblackKing && Selected === false) {
            elementBorder = element;
            Selected = true;
            elementBorder.parentElement.style.borderColor = "lightgreen";
            prevElementKing = document.getElementById(element.id);
            firstClickBlackKing(element.id);
          } if (element.src === urlEmptyCoin) {
            if ((prevElementKing != undefined) && (prevElementKing.src === urlblackKing)) {
              let rivalCoin;
              if((Number(prevElementKing.id[1]) + 2) === Number(element.id[1])){
                rivalCoin = nextCharacter(prevElementKing.id[0]) + (Number(prevElementKing.id[1]) + 1);
                const ifRivalCoin = document.getElementById(rivalCoin);
                if((ifRivalCoin !== null) && (ifRivalCoin.src === urlwhite || ifRivalCoin.src === urlwhiteKing)){
                  BlackKingEating(prevElementKing.id, element.id, rivalCoin)
                } else {
                  rivalCoin = prevCharacter(prevElementKing.id[0]) + (Number(prevElementKing.id[1]) + 1)
                  BlackKingEating(prevElementKing.id, element.id, rivalCoin)
                }
              } else if((Number(prevElementKing.id[1]) - 2) === Number(element.id[1])) {
                rivalCoin = nextCharacter(prevElementKing.id[0]) + (Number(prevElementKing.id[1]) - 1);
                const ifRivalCoin = document.getElementById(rivalCoin);
                if((ifRivalCoin !== null) && (ifRivalCoin.src === urlwhite || ifRivalCoin.src === urlwhiteKing)){
                  BlackKingEating(prevElementKing.id, element.id, rivalCoin)
                } else {
                  rivalCoin = prevCharacter(prevElementKing.id[0]) + (Number(prevElementKing.id[1]) - 1)
                  BlackKingEating(prevElementKing.id, element.id, rivalCoin)
                }
              }
            }
            if (prevElementId !== undefined && element.id[1] < prevElementId[1]) {
              let prevElement = document.getElementById(prevElementId);
              let CurrAndPrev = [prevElement, element];
              for (let i = 0; i < toRightArrayBlack.length; i++) {
                let tempArray = [];
                let indexOfNext;
                let nextID;
                for (let j = 0; j < toRightArrayBlack[i].length; j++) {
                  tempArray.push(toRightArrayBlack[i][j]);
                }
                if (multipleInArray(tempArray, CurrAndPrev)) {
                  for (let i = 0; i < tempArray.length; i++) {
                    if (tempArray[i] === CurrAndPrev[0]) {
                      indexOfNext = i + 1;
                      nextID = tempArray[indexOfNext].id;
                    }
                  }
                  BlackEating(prevElementId, element.id, nextID);
                }
              }
              //////////////////////////////////// To Left Black Eeating ///////////////////////////////////////////////////
              for (let i = 0; i < toLeftArrayBlack.length; i++) {
                let tempArray = [];
                let indexOfNext;
                let nextID;
                for (let j = 0; j < toLeftArrayBlack[i].length; j++) {
                  tempArray.push(toLeftArrayBlack[i][j]);
                }
                if (multipleInArray(tempArray, CurrAndPrev)) {
                  for (let i = 0; i < tempArray.length; i++) {
                    if (tempArray[i] === CurrAndPrev[0]) {
                      indexOfNext = i + 1;
                      nextID = tempArray[indexOfNext].id;
                    }
                  }
                  elementBorder.parentElement.style.borderColor = "";
                  BlackEating(prevElementId, element.id, nextID);
                }
              }
            }
          } else if (element.src === urlblackOpacity) {
            elementBorder.parentElement.style.borderColor = "";
            changeBlackPosition(element.id, prevElementId);
          } else if (element.src === urlblackKingOpacity) {
            elementBorder.parentElement.style.borderColor = "";
            changeBlackKingPosition(element.id, prevElementKing.id);
          }
        }
      });
    }
  }
}


function nextCharacter(c) {
  return String.fromCharCode(c.charCodeAt(0) + 1);
}

function prevCharacter(c) {
  return String.fromCharCode(c.charCodeAt(0) - 1);
}

function multipleInArray(arr, values) {
  return values.every(value => {
    return arr.includes(value);
  });
}

function whoseTurnNow() {
  const playerTurn = document.getElementById("whoseTurnNow");
  if (currentWhitePlayer === true) {
    playerTurn.innerHTML = "Current Turn: <br> <img id='turnImg' src='./Assets/images/white.png'>";
  } else {
    playerTurn.innerHTML = "Current Turn: <br> <img id='turnImg' src='./Assets/images/Black.png'>";
  }
}

function ScoreUpdate() {
  const countWhite = document.getElementById("whiteLeft");
  const countBlackRight = document.getElementById("blackLeft");
  countWhite.innerHTML = WhiteCounter + "&nbsp;<img src='./Assets/images/white.png'> White";
  countBlackRight.innerHTML = BlackCounter + "&nbsp;<img src='./Assets/images/black.png'> Black";
}

/////////////////////////////////////Global Variables///////////////////////////////////////////////////////////
let currentWhitePlayer = true;
let prevElementId;
let prevElementKing;
let elementBorder;
let Selected = false;
let Mute = false;
let BlackCounter = 12;
let WhiteCounter = 12;


/////////////////Urls///////////////////////////////////////////////////////////////////////////////////////////
const UrlEmpty = document.baseURI.replace("index.html", "");
const urlblack = UrlEmpty + "Assets/images/black.png";
const urlwhite = UrlEmpty + "Assets/images/white.png";
const urlgreen = UrlEmpty + "Assets/images/green.png";
const urlEmptyCoin = UrlEmpty + "Assets/images/emptycoin.png";
const urlwhiteOpacity = UrlEmpty + "Assets/images/whiteOpacity.png";
const urlblackOpacity = UrlEmpty + "Assets/images/blackOpacity.png";
const urlwhiteKing = UrlEmpty + "Assets/images/whiteK.png";
const urlblackKing = UrlEmpty + "Assets/images/blackK.png";
const urlwhiteKingOpacity = UrlEmpty + "Assets/images/whiteKOpacity.png";
const urlblackKingOpacity = UrlEmpty + "Assets/images/blackKOpacity.png";


// G1 - H2:
const G1 = document.getElementById("G1");
const H2 = document.getElementById("H2");

// E1 - H4: 
const E1 = document.getElementById("E1");
const F2 = document.getElementById("F2");
const G3 = document.getElementById("G3");
const H4 = document.getElementById("H4");

// C1 - H6:
const C1 = document.getElementById("C1");
const D2 = document.getElementById("D2");
const E3 = document.getElementById("E3");
const F4 = document.getElementById("F4");
const G5 = document.getElementById("G5");
const H6 = document.getElementById("H6");

// A1 - H8:
const A1 = document.getElementById("A1");
const B2 = document.getElementById("B2");
const C3 = document.getElementById("C3");
const D4 = document.getElementById("D4");
const E5 = document.getElementById("E5");
const F6 = document.getElementById("F6");
const G7 = document.getElementById("G7");
const H8 = document.getElementById("H8");

// A3 - F8:
const A3 = document.getElementById("A3");
const B4 = document.getElementById("B4");
const C5 = document.getElementById("C5");
const D6 = document.getElementById("D6");
const E7 = document.getElementById("E7");
const F8 = document.getElementById("F8");

// A5 - D8:
const A5 = document.getElementById("A5");
const B6 = document.getElementById("B6");
const C7 = document.getElementById("C7");
const D8 = document.getElementById("D8");

// A7 - B8:
const A7 = document.getElementById("A7");
const B8 = document.getElementById("B8");

// Normalarrays: (White side)
// Arrays to Right:
const G1H2array = [G1, H2];
const E1H4array = [E1, F2, G3, H4];
const C1H6array = [C1, D2, E3, F4, G5, H6];
const A1H8array = [A1, B2, C3, D4, E5, F6, G7, H8];
const A3F8array = [A3, B4, C5, D6, E7, F8];
const A5D8array = [A5, B6, C7, D8];
const A7B8array = [A7, B8];

// Arrays to left:
const C1A3array = [C1, B2, A3];
const E1A5array = [E1, D2, C3, B4, A5];
const G1A7array = [G1, F2, E3, D4, C5, B6, A7];
const H2A8array = [H2, G3, F4, E5, D6, C7, B8];
const H4D8array = [H4, G5, F6, E7, D8];
const H6F8array = [H6, G7, F8];

//------------------------------------------------------------------------------------------------

// reverse arrays: (Black side)
// Arrays to Right: 
const H2G1array = [G1, H2];
const H4E1array = [E1, F2, G3, H4];
const H6C1array = [C1, D2, E3, F4, G5, H6];
const H8A1array = [A1, B2, C3, D4, E5, F6, G7, H8];
const F8A3array = [A3, B4, C5, D6, E7, F8];
const D8A5array = [A5, B6, C7, D8];
const B8A7array = [A7, B8];
H2G1array.reverse();
H4E1array.reverse();
H6C1array.reverse();
H8A1array.reverse();
F8A3array.reverse();
D8A5array.reverse();
B8A7array.reverse();

// Arrays to left:
const A3C1array = [C1, B2, A3];
const A5E1array = [E1, D2, C3, B4, A5];
const A7G1array = [G1, F2, E3, D4, C5, B6, A7];
const A8H2array = [H2, G3, F4, E5, D6, C7, B8];
const D8H4array = [H4, G5, F6, E7, D8];
const F8H6array = [H6, G7, F8];
A3C1array.reverse();
A5E1array.reverse();
A7G1array.reverse();
A8H2array.reverse();
D8H4array.reverse();
F8H6array.reverse();

const toRightArrayWhite = [G1H2array, E1H4array, C1H6array, A1H8array, A3F8array, A5D8array, A7B8array];
const toLeftArrayWhite = [C1A3array, E1A5array, G1A7array, H2A8array, H4D8array, H6F8array];
const toRightArrayBlack = [H2G1array, H4E1array, H6C1array, H8A1array, F8A3array, D8A5array, B8A7array];
const toLeftArrayBlack = [A3C1array, A5E1array, A7G1array, A8H2array, D8H4array, F8H6array];

///////////////////////////////////WhiteKing//////////////////////////////////////////////////////////////
function firstClickWhiteKing(id) {
  first5:
  for (let i = 0; i < toRightArrayWhite.length; i++) {
    for (let j = 0; j < toRightArrayWhite[i].length; j++) {
      if (id === toRightArrayWhite[i][j].id) {
        if (j < toRightArrayWhite[i].length - 1) {
          let nextRightID = toRightArrayWhite[i][j + 1].id;
          let nextRightElement = document.getElementById(nextRightID);
          if (nextRightElement.src === urlEmptyCoin) {
            nextRightElement.src = urlwhiteKingOpacity;
          }
          break first5;
        }
      }
    }
  }
  first6:
  for (let i = 0; i < toLeftArrayWhite.length; i++) {
    for (let j = 0; j < toLeftArrayWhite[i].length; j++) {
      if (id === toLeftArrayWhite[i][j].id) {
        if (j < toLeftArrayWhite[i].length - 1) {
          let nextleftID = toLeftArrayWhite[i][j + 1].id;
          let nextleftElement = document.getElementById(nextleftID);
          if (nextleftElement.src === urlEmptyCoin) {
            nextleftElement.src = urlwhiteKingOpacity;
          }
          break first6;
        }
      }
    }
  }
  first7:
  for (let i = 0; i < toLeftArrayBlack.length; i++) {
    for (let j = 0; j < toLeftArrayBlack[i].length; j++) {
      if (id === toLeftArrayBlack[i][j].id) {
        if (j < toLeftArrayBlack[i].length - 1) {
          let nextleftID = toLeftArrayBlack[i][j + 1].id;
          let nextleftElement = document.getElementById(nextleftID);
          if (nextleftElement.src === urlEmptyCoin) {
            nextleftElement.src = urlwhiteKingOpacity;
          }
          break first7;
        }
      }
    }
  }
  first8:
  for (let i = 0; i < toRightArrayBlack.length; i++) {
    for (let j = 0; j < toRightArrayBlack[i].length; j++) {
      if (id === toRightArrayBlack[i][j].id) {
        if (j < toRightArrayBlack[i].length - 1) {
          let nextleftID = toRightArrayBlack[i][j + 1].id;
          let nextleftElement = document.getElementById(nextleftID);
          if (nextleftElement.src === urlEmptyCoin) {
            nextleftElement.src = urlwhiteKingOpacity;
          }
          break first8;
        }
      }
    }
  }
}


/////////////////////////////////BlackKing////////////////////////////////////////////////////////////////
function firstClickBlackKing(id) {
  first9:
  for (let i = 0; i < toRightArrayBlack.length; i++) {
    for (let j = 0; j < toRightArrayBlack[i].length; j++) {
      if (id === toRightArrayBlack[i][j].id) {
        if (j < toRightArrayBlack[i].length - 1) {
          let nextRightID = toRightArrayBlack[i][j + 1].id;
          let nextRightElement = document.getElementById(nextRightID);
          if (nextRightElement.src === urlEmptyCoin) {
            nextRightElement.src = urlblackKingOpacity;
          }
          break first9;
        }
      }
    }
  }
  first10:
  for (let i = 0; i < toLeftArrayBlack.length; i++) {
    for (let j = 0; j < toLeftArrayBlack[i].length; j++) {
      if (id === toLeftArrayBlack[i][j].id) {
        if (j < toLeftArrayBlack[i].length - 1) {
          let nextleftID = toLeftArrayBlack[i][j + 1].id;
          let nextleftElement = document.getElementById(nextleftID);
          if (nextleftElement.src === urlEmptyCoin) {
            nextleftElement.src = urlblackKingOpacity;
          }
          break first10;
        }
      }
    }
  }
  first11:
  for (let i = 0; i < toRightArrayWhite.length; i++) {
    for (let j = 0; j < toRightArrayWhite[i].length; j++) {
      if (id === toRightArrayWhite[i][j].id) {
        if (j < toRightArrayWhite[i].length - 1) {
          let nextRightID = toRightArrayWhite[i][j + 1].id;
          let nextRightElement = document.getElementById(nextRightID);
          if (nextRightElement.src === urlEmptyCoin) {
            nextRightElement.src = urlblackKingOpacity;
          }
          break first11;
        }
      }
    }
  }
  first12:
  for (let i = 0; i < toLeftArrayWhite.length; i++) {
    for (let j = 0; j < toLeftArrayWhite[i].length; j++) {
      if (id === toLeftArrayWhite[i][j].id) {
        if (j < toLeftArrayWhite[i].length - 1) {
          let nextleftID = toLeftArrayWhite[i][j + 1].id;
          let nextleftElement = document.getElementById(nextleftID);
          if (nextleftElement.src === urlEmptyCoin) {
            nextleftElement.src = urlblackKingOpacity;
          }
          break first12;
        }
      }
    }
  }
}


///////////////////////////////////// White ////////////////////////////////////////////////////////

function firstClickWhiteRight(id) {
  first1:
  for (let i = 0; i < toRightArrayWhite.length; i++) {
    for (let j = 0; j < toRightArrayWhite[i].length; j++) {
      if (id === toRightArrayWhite[i][j].id) {
        if (j < toRightArrayWhite[i].length - 1) {
          let nextRightID = toRightArrayWhite[i][j + 1].id;
          let nextRightElement = document.getElementById(nextRightID);
          if (nextRightElement.src === urlEmptyCoin) {
            nextRightElement.src = urlwhiteOpacity;
          }
          break first1;
        }
      }
    }
  }
}

function firstClickWhiteLeft(id) {
  first2:
  for (let i = 0; i < toLeftArrayWhite.length; i++) {
    for (let j = 0; j < toLeftArrayWhite[i].length; j++) {
      if (id === toLeftArrayWhite[i][j].id) {
        if (j < toLeftArrayWhite[i].length - 1) {
          let nextleftID = toLeftArrayWhite[i][j + 1].id;
          let nextleftElement = document.getElementById(nextleftID);
          if (nextleftElement.src === urlEmptyCoin) {
            nextleftElement.src = urlwhiteOpacity;
          }
          break first2;
        }
      }
    }
  }
}

///////////////////////////////////// Black ////////////////////////////////////////////////////////

function firstClickBlackRight(id) {
  first3:
  for (let i = 0; i < toRightArrayBlack.length; i++) {
    for (let j = 0; j < toRightArrayBlack[i].length; j++) {
      if (id === toRightArrayBlack[i][j].id) {
        if (j < toRightArrayBlack[i].length - 1) {
          let nextRightID = toRightArrayBlack[i][j + 1].id;
          let nextRightElement = document.getElementById(nextRightID);
          if (nextRightElement.src === urlEmptyCoin) {
            nextRightElement.src = urlblackOpacity;
          }

          break first3;
        }
      }
    }
  }
}

function firstClickBlackLeft(id) {
  first4:
  for (let i = 0; i < toLeftArrayBlack.length; i++) {
    for (let j = 0; j < toLeftArrayBlack[i].length; j++) {
      if (id === toLeftArrayBlack[i][j].id) {
        if (j < toLeftArrayBlack[i].length - 1) {
          let nextleftID = toLeftArrayBlack[i][j + 1].id;
          let nextleftElement = document.getElementById(nextleftID);
          if (nextleftElement.src === urlEmptyCoin) {
            nextleftElement.src = urlblackOpacity;
          }
          break first4;
        }
      }
    }
  }
}


/////////////////////////////////////// changePosition /////////////////////////////////////////////////////////////////

function changeWhitePosition(nextid, id) {
  if (nextid !== 'B8' && nextid !== 'D8' && nextid !== 'F8' && nextid !== 'H8') {
    document.getElementById(nextid).src = urlwhite;
    document.getElementById(id).src = urlEmptyCoin;
    currentWhitePlayer = false;
    PlaySound();
    ClearOpacity();
    whoseTurnNow();
  } else {
    document.getElementById(nextid).src = urlwhiteKing;
    document.getElementById(id).src = urlEmptyCoin;
    currentWhitePlayer = false;
    PlaySoundKing();
    ClearOpacity();
    whoseTurnNow();
  }
}

function changeWhiteKingPosition(nextid, id) {
  if (nextid !== 'B8' && nextid !== 'D8' && nextid !== 'F8' && nextid !== 'H8') {
    document.getElementById(nextid).src = urlwhiteKing;
    document.getElementById(id).src = urlEmptyCoin;
    currentWhitePlayer = false;
    PlaySound();
    ClearOpacity();
    whoseTurnNow();
  }
}

function changeBlackPosition(nextid, id) {
  if (nextid !== 'A1' && nextid !== 'C1' && nextid !== 'E1' && nextid !== 'G1') {
    document.getElementById(nextid).src = urlblack;
    document.getElementById(id).src = urlEmptyCoin;
    currentWhitePlayer = true;
    PlaySound();
    ClearOpacity();
    whoseTurnNow();
  } else {
    document.getElementById(nextid).src = urlblackKing;
    document.getElementById(id).src = urlEmptyCoin;
    currentWhitePlayer = true;
    PlaySoundKing();
    ClearOpacity();
    whoseTurnNow();
  }
}

function changeBlackKingPosition(nextid, id) {
  if (nextid !== 'A1' && nextid !== 'C1' && nextid !== 'E1' && nextid !== 'G1') {
    document.getElementById(nextid).src = urlblackKing;
    document.getElementById(id).src = urlEmptyCoin;
    currentWhitePlayer = true;
    PlaySound();
    ClearOpacity();
    whoseTurnNow();
  }
}

/////////////////////////////////////// ClearOpacity /////////////////////////////////////////////////////////////////

function ClearOpacity() {
  for (let i = 0; i < toRightArrayWhite.length; i++) {
    for (let j = 0; j < toRightArrayWhite[i].length; j++) {
      if ((document.getElementById((toRightArrayWhite[i][j].id)).src === urlwhiteOpacity)) {
        document.getElementById(toRightArrayWhite[i][j].id).src = urlEmptyCoin;
      }
      if ((document.getElementById((toRightArrayWhite[i][j].id)).src === urlblackOpacity)) {
        document.getElementById(toRightArrayWhite[i][j].id).src = urlEmptyCoin;
      }
      if ((document.getElementById((toRightArrayWhite[i][j].id)).src === urlwhiteKingOpacity)) {
        document.getElementById(toRightArrayWhite[i][j].id).src = urlEmptyCoin;
      }
      if ((document.getElementById((toRightArrayWhite[i][j].id)).src === urlblackKingOpacity)) {
        document.getElementById(toRightArrayWhite[i][j].id).src = urlEmptyCoin;
      }
    }
  }
  Selected = false;
  kingMoveOptionRight = [];
  kingMoveOptionLeft = [];
  rivalCoin = [];
}


function whiteEating(id, eatingLocationID, nextRightID) {
  if ((eatingLocationID[1] - nextRightID[1] == 1) && document.getElementById(id).src === urlwhite && (document.getElementById(nextRightID).src === urlblack || document.getElementById(nextRightID).src === urlblackKing)) {
    if (eatingLocationID !== 'B8' && eatingLocationID !== 'D8' && eatingLocationID !== 'F8' && eatingLocationID !== 'H8') {
      elementBorder.parentElement.style.borderColor = "";
      document.getElementById(eatingLocationID).src = urlwhite;
      document.getElementById(id).src = urlEmptyCoin;
      document.getElementById(nextRightID).src = urlEmptyCoin;
      currentWhitePlayer = false;
      BlackCounter--;
      ScoreUpdate();
      PlaySoundEating()
      ClearOpacity();
      whoseTurnNow();
      checkWin();
    } else {
      elementBorder.parentElement.style.borderColor = "";
      document.getElementById(eatingLocationID).src = urlwhiteKing;
      document.getElementById(id).src = urlEmptyCoin;
      document.getElementById(nextRightID).src = urlEmptyCoin;
      currentWhitePlayer = false;
      BlackCounter--;
      ScoreUpdate();
      PlaySoundKing();
      ClearOpacity();
      whoseTurnNow();
      checkWin();
    }
  }
}

function whiteKingEating(id, eatingLocationID, nextRightID) {
  if (((eatingLocationID[1] - nextRightID[1] == 1) || (nextRightID[1] - eatingLocationID[1] == 1)) && document.getElementById(id).src === urlwhiteKing && (document.getElementById(nextRightID).src === urlblack || document.getElementById(nextRightID).src === urlblackKing)) {
    if (eatingLocationID !== 'B8' && eatingLocationID !== 'D8' && eatingLocationID !== 'F8' && eatingLocationID !== 'H8') {
      elementBorder.parentElement.style.borderColor = "";
      document.getElementById(eatingLocationID).src = urlwhiteKing;
      document.getElementById(id).src = urlEmptyCoin;
      document.getElementById(nextRightID).src = urlEmptyCoin;
      currentWhitePlayer = false;
      BlackCounter--;
      ScoreUpdate();
      PlaySoundEating()
      ClearOpacity();
      whoseTurnNow();
      checkWin();
    }
  }
}

function BlackKingEating(id, eatingLocationID, nextRightID) {
  if (((eatingLocationID[1] - nextRightID[1] == 1) || (nextRightID[1] - eatingLocationID[1] == 1)) && document.getElementById(id).src === urlblackKing && (document.getElementById(nextRightID).src === urlwhite || document.getElementById(nextRightID).src === urlwhiteKing)) {
    if (eatingLocationID !== 'B8' && eatingLocationID !== 'D8' && eatingLocationID !== 'F8' && eatingLocationID !== 'H8') {
      elementBorder.parentElement.style.borderColor = "";
      document.getElementById(eatingLocationID).src = urlblackKing;
      document.getElementById(id).src = urlEmptyCoin;
      document.getElementById(nextRightID).src = urlEmptyCoin;
      currentWhitePlayer = true;
      WhiteCounter--;
      ScoreUpdate();
      PlaySoundEating()
      ClearOpacity();
      whoseTurnNow();
      checkWin();
    }
  }
}

function BlackEating(id, eatingLocationID, nextRightID) {
  if (nextRightID[1] - eatingLocationID[1] == 1 && document.getElementById(id).src === urlblack && (document.getElementById(nextRightID).src === urlwhite || document.getElementById(nextRightID).src === urlwhiteKing)) {
    if (eatingLocationID !== 'A1' && eatingLocationID !== 'C1' && eatingLocationID !== 'E1' && eatingLocationID !== 'G1') {
      elementBorder.parentElement.style.borderColor = "";
      document.getElementById(eatingLocationID).src = urlblack;
      document.getElementById(id).src = urlEmptyCoin;
      document.getElementById(nextRightID).src = urlEmptyCoin;
      currentWhitePlayer = true;
      WhiteCounter--;
      ScoreUpdate();
      PlaySoundEating()
      ClearOpacity();
      whoseTurnNow();
      checkWin();
    } else {
      elementBorder.parentElement.style.borderColor = "";
      document.getElementById(eatingLocationID).src = urlblackKing;
      document.getElementById(id).src = urlEmptyCoin;
      document.getElementById(nextRightID).src = urlEmptyCoin;
      currentWhitePlayer = true;
      WhiteCounter--;
      ScoreUpdate();
      PlaySoundKing();
      ClearOpacity();
      whoseTurnNow();
      checkWin();
    }
  }
}

function changeSpeaker() {
  const currMuteSource = document.getElementById("speaker").src;
  if (currMuteSource.includes("unspeaker.png") === false) {
    document.getElementById("speaker").src = "./Assets/images/unspeaker.png";
    Mute = true;
  }
  else {
    document.getElementById("speaker").src = "./Assets/images/speaker.png";
    Mute = false;
  }
}

function PlaySound() {
  if (Mute === false) {
    const audio = new Audio("./Assets/sounds/capture.mp3");
    audio.play();
  }
}
function PlaySoundEating() {
  if (Mute === false) {
    const audio = new Audio("./Assets/sounds/646781_11830391-lq.mp3");
    audio.play();
  }
}
function PlaySoundKing() {
  if (Mute === false) {
    const audio = new Audio("./Assets/sounds/success-fanfare-trumpets-6185.mp3");
    audio.play();
  }
}
function PlaySoundWin() {
  if (Mute === false) {
    const audio = new Audio("./Assets/sounds/mixkit-fantasy-game-success-notification-270.wav");
    audio.play();
  }
}
function checkWin() {
  if (BlackCounter === 0) {
    PlaySoundWin();
    document.getElementById("showTheWinner").innerHTML = "White Winner!!!";
  }
  if (WhiteCounter === 0) {
    PlaySoundWin();
    document.getElementById("showTheWinner").innerHTML = "Black Winner!!!";
  }
}