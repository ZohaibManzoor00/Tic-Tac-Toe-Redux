export const turns = pos => {
    return {
        type: 'CLICK',
        payload: pos
    }
}

export const checkWinner = board => {
    return {
        type: 'CHECK_WINNER',
        payload: board
    }
}

export const nameWinner = player => {
    return {
        type: 'NAME_WINNER',
        payload: player
    }
}