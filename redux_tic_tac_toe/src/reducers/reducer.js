const initialState = {
  turn: "X",
  board: Array(9).fill(""),
  winner: null,
};

export const ticTacToeReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'CLICK':
      const copy = [...state.board];
      copy[action.payload] = state.player;
      return {
        ...state,
        board: copy,
        player: state.player === 'X' ? 'O' : 'X'
      }
    case 'CHECK':
      return {
        ...state,
        winner: action.payload
      }
    case 'RESTART':
      return initialState;
    default:
      return state;
  }
};
