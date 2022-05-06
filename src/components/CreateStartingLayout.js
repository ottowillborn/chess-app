
let tile = class{
    constructor( color, pieceName, pieceColor, firstTurn){
      this.color = color;
      this.pieceName = pieceName;
      this.firstTurn = firstTurn;
      this.pieceColor = pieceColor;
    }
  };

const CreateStartingLayout = () =>{
    const boardLayout = [];

    var zeroZero = new tile( 'green', 'rook', 'light', true);
    var zeroOne = new tile( 'black', 'knight', 'light', true);
    var zeroTwo = new tile('green', 'bishop', 'light', true);
    var zeroThree = new tile( 'black', 'king', 'light', true);
    var zeroFour = new tile( 'green', 'queen', 'light', true);
    var zeroFive = new tile( 'black', 'bishop', 'light', true);
    var zeroSix = new tile( 'green', 'knight', 'light', true);
    var zeroSeven = new tile( 'black', 'rook', 'light', true);
    boardLayout[0] = zeroZero;
    boardLayout[1] = zeroOne;
    boardLayout[2] = zeroTwo;
    boardLayout[3] = zeroThree;
    boardLayout[4] = zeroFour;
    boardLayout[5] = zeroFive;
    boardLayout[6] = zeroSix;
    boardLayout[7] = zeroSeven;

    var oneZero = new tile( 'black', 'pawn', 'light', true);
    var oneOne = new tile( 'green', 'pawn', 'light', true);
    var oneTwo = new tile( 'black', 'pawn', 'light', true);
    var oneThree = new tile( 'green', 'pawn', 'light', true);
    var oneFour = new tile( 'black', 'pawn', 'light', true);
    var oneFive = new tile('green', 'pawn', 'light', true);
    var oneSix = new tile( 'black', 'pawn', 'light', true);
    var oneSeven = new tile( 'green', 'pawn', 'light', true);
    boardLayout[8] = oneZero;
    boardLayout[9] = oneOne;
    boardLayout[10] = oneTwo;
    boardLayout[11] = oneThree;
    boardLayout[12] = oneFour;
    boardLayout[13] = oneFive;
    boardLayout[14] = oneSix;
    boardLayout[15] = oneSeven;

    var twoZero = new tile( 'green', '', '', true);
    var twoOne = new tile( 'black', '', '', true);
    var twoTwo = new tile( 'green', '', '', true);
    var twoThree = new tile( 'black', '', '', true);
    var twoFour = new tile( 'green', '', '', true);
    var twoFive = new tile( 'black', '', '', true);
    var twoSix = new tile( 'green', '', '', true);
    var twoSeven = new tile( 'black', '', '', true);
    boardLayout[16] = twoZero;
    boardLayout[17] = twoOne;
    boardLayout[18] = twoTwo;
    boardLayout[19] = twoThree;
    boardLayout[20] = twoFour;
    boardLayout[21] = twoFive;
    boardLayout[22] = twoSix;
    boardLayout[23] = twoSeven;

    var threeZero = new tile( 'black', '', '', true);
    var threeOne = new tile( 'green', '', '', true);
    var threeTwo = new tile('black', '', '', true);
    var threeThree = new tile( 'green', '', '', true);
    var threeFour = new tile( 'black', '', '', true);
    var threeFive = new tile( 'green', '', '', true);
    var threeSix = new tile( 'black', '', '', true);
    var threeSeven = new tile( 'green', '', '', true);
    boardLayout[24] = threeZero;
    boardLayout[25] = threeOne;
    boardLayout[26] = threeTwo;
    boardLayout[27] = threeThree;
    boardLayout[28] = threeFour;
    boardLayout[29] = threeFive;
    boardLayout[30] = threeSix;
    boardLayout[31] = threeSeven;

    var fourZero = new tile( 'green', '', '', true);
    var fourOne = new tile( 'black', '', '', true);
    var fourTwo = new tile( 'green', '', '', true);
    var fourThree = new tile( 'black', '', '', true);
    var fourFour = new tile( 'green', '', '', true);
    var fourFive = new tile( 'black', '', '', true);
    var fourSix = new tile('green', '', '', true);
    var fourSeven = new tile( 'black', '', '', true);
    boardLayout[32] = fourZero;
    boardLayout[33] = fourOne;
    boardLayout[34] = fourTwo;
    boardLayout[35] = fourThree;
    boardLayout[36] = fourFour;
    boardLayout[37] = fourFive;
    boardLayout[38] = fourSix;
    boardLayout[39] = fourSeven;

    var fiveZero = new tile( 'black', '', '', true);
    var fiveOne = new tile( 'green', '', '', true);
    var fiveTwo = new tile( 'black', '', '', true);
    var fiveThree = new tile( 'green', '', '', true);
    var fiveFour = new tile( 'black', '', '', true);
    var fiveFive = new tile( 'green', '', '', true);
    var fiveSix = new tile('black', '', '', true);
    var fiveSeven = new tile( 'green', '', '', true);
    boardLayout[40] = fiveZero;
    boardLayout[41] = fiveOne;
    boardLayout[42] = fiveTwo;
    boardLayout[43] = fiveThree;
    boardLayout[44] = fiveFour;
    boardLayout[45] = fiveFive;
    boardLayout[46] = fiveSix;
    boardLayout[47] = fiveSeven;

    var sixZero = new tile( 'green', 'pawn','dark', true);
    var sixOne = new tile( 'black', 'pawn','dark', true);
    var sixTwo = new tile( 'green', 'pawn','dark', true);
    var sixThree = new tile( 'black', 'pawn','dark', true);
    var sixFour = new tile('green', 'pawn','dark', true);
    var sixFive = new tile( 'black', 'pawn','dark', true);
    var sixSix = new tile( 'green', 'pawn','dark', true);
    var sixSeven = new tile( 'black', 'pawn','dark', true);
    boardLayout[48] = sixZero;
    boardLayout[49] = sixOne;
    boardLayout[50] = sixTwo;
    boardLayout[51] = sixThree;
    boardLayout[52] = sixFour;
    boardLayout[53] = sixFive;
    boardLayout[54] = sixSix;
    boardLayout[55] = sixSeven;

    var sevenZero = new tile('black', 'rook', 'dark', true);
    var sevenOne = new tile('green', 'knight', 'dark', true);
    var sevenTwo = new tile( 'black', 'bishop', 'dark', true);
    var sevenThree = new tile( 'green', 'king', 'dark', true);
    var sevenFour = new tile( 'black', 'queen', 'dark', true);
    var sevenFive = new tile( 'green', 'bishop', 'dark', true);
    var sevenSix = new tile( 'black', 'knight', 'dark', true);
    var sevenSeven = new tile( 'green', 'rook', 'dark', true);
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