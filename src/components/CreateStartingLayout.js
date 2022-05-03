
let tile = class{
    constructor(coordinate, color, pieceName, pieceColor, firstTurn){
      this.coordinate = coordinate;
      this.color = color;
      this.pieceName = pieceName;
      this.pieceColor = pieceColor;
      this.firstTurn = firstTurn;
    }
  };

const CreateStartingLayout = () =>{
    const boardLayout = [];

    var zeroZero = new tile('0,0', 'green', 'rook', 'dark', true);
    var zeroOne = new tile('0,1', 'black', 'knight', 'dark', true);
    var zeroTwo = new tile('0,2', 'green', 'bishop', 'dark', true);
    var zeroThree = new tile('0,3', 'black', 'king', 'dark', true);
    var zeroFour = new tile('0,4', 'green', 'queen', 'dark', true);
    var zeroFive = new tile('0,5', 'black', 'bishop', 'dark', true);
    var zeroSix = new tile('0,6', 'green', 'knight', 'dark', true);
    var zeroSeven = new tile('0,7', 'black', 'rook', 'dark', true);
    boardLayout[0] = zeroZero;
    boardLayout[1] = zeroOne;
    boardLayout[2] = zeroTwo;
    boardLayout[3] = zeroThree;
    boardLayout[4] = zeroFour;
    boardLayout[5] = zeroFive;
    boardLayout[6] = zeroSix;
    boardLayout[7] = zeroSeven;

    var oneZero = new tile('1,0', 'black', 'pawn', 'dark', true);
    var oneOne = new tile('1,1', 'green', 'pawn', 'dark', true);
    var oneTwo = new tile('1,2', 'black', 'pawn', 'dark', true);
    var oneThree = new tile('1,3', 'green', 'pawn', 'dark', true);
    var oneFour = new tile('1,4', 'black', 'pawn', 'dark', true);
    var oneFive = new tile('1,5', 'green', 'pawn', 'dark', true);
    var oneSix = new tile('1,6', 'black', 'pawn', 'dark', true);
    var oneSeven = new tile('1,7', 'green', 'pawn', 'dark', true);
    boardLayout[8] = oneZero;
    boardLayout[9] = oneOne;
    boardLayout[10] = oneTwo;
    boardLayout[11] = oneThree;
    boardLayout[12] = oneFour;
    boardLayout[13] = oneFive;
    boardLayout[14] = oneSix;
    boardLayout[15] = oneSeven;

    var twoZero = new tile('2,0', 'green', '', '', true);
    var twoOne = new tile('2,1', 'black', '', '', true);
    var twoTwo = new tile('2,2', 'green', '', '', true);
    var twoThree = new tile('2,3', 'black', '', '', true);
    var twoFour = new tile('2,4', 'green', '', '', true);
    var twoFive = new tile('2,5', 'black', '', '', true);
    var twoSix = new tile('2,6', 'green', '', '', true);
    var twoSeven = new tile('2,7', 'black', '', '', true);
    boardLayout[16] = twoZero;
    boardLayout[17] = twoOne;
    boardLayout[18] = twoTwo;
    boardLayout[19] = twoThree;
    boardLayout[20] = twoFour;
    boardLayout[21] = twoFive;
    boardLayout[22] = twoSix;
    boardLayout[23] = twoSeven;

    var threeZero = new tile('3,0', 'black', '', '', true);
    var threeOne = new tile('3,1', 'green', '', '', true);
    var threeTwo = new tile('3,2', 'black', '', '', true);
    var threeThree = new tile('3,3', 'green', '', '', true);
    var threeFour = new tile('3,4', 'black', '', '', true);
    var threeFive = new tile('3,5', 'green', '', '', true);
    var threeSix = new tile('3,6', 'black', '', '', true);
    var threeSeven = new tile('3,7', 'green', '', '', true);
    boardLayout[24] = threeZero;
    boardLayout[25] = threeOne;
    boardLayout[26] = threeTwo;
    boardLayout[27] = threeThree;
    boardLayout[28] = threeFour;
    boardLayout[29] = threeFive;
    boardLayout[30] = threeSix;
    boardLayout[31] = threeSeven;

    var fourZero = new tile('4,0', 'green', '', '', true);
    var fourOne = new tile('4,1', 'black', '', '', true);
    var fourTwo = new tile('4,2', 'green', '', '', true);
    var fourThree = new tile('4,3', 'black', '', '', true);
    var fourFour = new tile('4,4', 'green', '', '', true);
    var fourFive = new tile('4,5', 'black', '', '', true);
    var fourSix = new tile('4,6', 'green', '', '', true);
    var fourSeven = new tile('4,7', 'black', '', '', true);
    boardLayout[32] = fourZero;
    boardLayout[33] = fourOne;
    boardLayout[34] = fourTwo;
    boardLayout[35] = fourThree;
    boardLayout[36] = fourFour;
    boardLayout[37] = fourFive;
    boardLayout[38] = fourSix;
    boardLayout[39] = fourSeven;

    var fiveZero = new tile('5,0', 'black', '', '', true);
    var fiveOne = new tile('5,1', 'green', '', '', true);
    var fiveTwo = new tile('5,2', 'black', '', '', true);
    var fiveThree = new tile('5,3', 'green', '', '', true);
    var fiveFour = new tile('5,4', 'black', '', '', true);
    var fiveFive = new tile('5,5', 'green', '', '', true);
    var fiveSix = new tile('5,6', 'black', '', '', true);
    var fiveSeven = new tile('5,7', 'green', '', '', true);
    boardLayout[40] = fiveZero;
    boardLayout[41] = fiveOne;
    boardLayout[42] = fiveTwo;
    boardLayout[43] = fiveThree;
    boardLayout[44] = fiveFour;
    boardLayout[45] = fiveFive;
    boardLayout[46] = fiveSix;
    boardLayout[47] = fiveSeven;

    var sixZero = new tile('6,0', 'green', 'pawn', 'light', true);
    var sixOne = new tile('6,1', 'black', 'pawn', 'light', true);
    var sixTwo = new tile('6,2', 'green', 'pawn', 'light', true);
    var sixThree = new tile('6,3', 'black', 'pawn', 'light', true);
    var sixFour = new tile('6,4', 'green', 'pawn', 'light', true);
    var sixFive = new tile('6,5', 'black', 'pawn', 'light', true);
    var sixSix = new tile('6,6', 'green', 'pawn', 'light', true);
    var sixSeven = new tile('6,7', 'black', 'pawn', 'light', true);
    boardLayout[48] = sixZero;
    boardLayout[49] = sixOne;
    boardLayout[50] = sixTwo;
    boardLayout[51] = sixThree;
    boardLayout[52] = sixFour;
    boardLayout[53] = sixFive;
    boardLayout[54] = sixSix;
    boardLayout[55] = sixSeven;

    var sevenZero = new tile('7,0', 'black', 'rook', 'light', true);
    var sevenOne = new tile('7,1', 'green', 'knight', 'light', true);
    var sevenTwo = new tile('7,2', 'black', 'bishop', 'light', true);
    var sevenThree = new tile('7,3', 'green', 'king', 'light', true);
    var sevenFour = new tile('7,4', 'black', 'queen', 'light', true);
    var sevenFive = new tile('7,5', 'green', 'bishop', 'light', true);
    var sevenSix = new tile('7,6', 'black', 'knight', 'light', true);
    var sevenSeven = new tile('7,7', 'green', 'rook', 'light', true);
    boardLayout[56] = sevenZero;
    boardLayout[57] = sevenOne;
    boardLayout[58] = sevenTwo;
    boardLayout[59] = sevenThree;
    boardLayout[60] = sevenFour;
    boardLayout[61] = sevenFive;
    boardLayout[62] = sevenSix;
    boardLayout[63] = sevenSeven;
    return boardLayout;
}
export default CreateStartingLayout;