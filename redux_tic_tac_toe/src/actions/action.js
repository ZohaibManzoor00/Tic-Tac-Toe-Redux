export const turns = pos => {
    return {
        type: 'CLICK',
        payload: pos
    }
}

export const resetBoard = () => {
    return {
        type: 'RESTART',
    }
}

export const sendWinner = player => {
    return {
        type: 'CHECK',
        payload: player
    }
}