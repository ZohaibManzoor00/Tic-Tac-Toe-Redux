const initialState = {
  turn: "X",
  board: Array(9).fill(""),
  winner: null,
};

export const ticTacToeReducer = (state = initialState, action) => {
  switch (action.type) {
    case "CLICK":
      if (state.board[action.payload] === "") {
        if (state.turn === "X" && state.board[action.payload] === "") {
          const copy = [...state.board];
          copy[action.payload] = "X";
          return {
            ...state,
            turn: "O",
            board: copy,
          };
        } else if (state.turn === "O" && state.board[action.payload] === "") {
          const copy = [...state.board];
          copy[action.payload] = "O";
          return {
            ...state,
            turn: "X",
            board: copy,
          };
        }
      }
    case "CHECK_WINNER":
      const combos = {
        across: [
          [0, 1, 2],
          [3, 4, 5],
          [6, 7, 8],
        ],
        down: [
          [0, 3, 6],
          [1, 4, 7],
          [2, 5, 8],
        ],
        diagonal: [
          [0, 4, 8],
          [2, 4, 6],
        ],
      };

      for (let combo in combos) {
        combos[combo].forEach((pattern) => {
          if (!action.payload.includes("")) {
            return {
              ...state,
              winner: "Tie",
            };
          }
          if (
            action.payload[pattern[0]] === "" ||
            action.payload[pattern[1]] === "" ||
            action.payload[pattern[2]] === ""
          ) {
          } else if (
            action.payload[pattern[0]] === action.payload[pattern[1]] &&
            action.payload[pattern[0]] === action.payload[pattern[2]]
          ) {
            return {
              ...state,
              winner: action.payload[pattern[0]],
            };
          }
        });
      }
    case "NAME_WINNER":
      return {
        ...state,
        winner: action.payload,
      };
    default:
      return state;
  }
};
