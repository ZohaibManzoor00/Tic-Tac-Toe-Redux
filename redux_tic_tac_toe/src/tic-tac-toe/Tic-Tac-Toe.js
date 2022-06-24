import React, { useEffect } from 'react'
import './tic-tac-toe.css'
import { useSelector, useDispatch } from 'react-redux'
import { turns, resetBoard, sendWinner } from '../actions/action'

function TicTacToe() {
    const dispatch = useDispatch()
    // ------------Local states------------
    const turn = useSelector(state => state.turn)
    const board = useSelector(state => state.board)
    const winner = useSelector(state => state.winner)
    // ------------Local states------------

    const combos = [
        [0, 1, 2],
        [3, 4, 5],
        [6, 7, 8],
        [0, 3, 6],
        [1, 4, 7],
        [2, 5, 8],
        [0, 4, 8],
        [2, 4, 6],
    ];

    function checkForWinner(currBoard) {
        combos.forEach((pattern) => {
            if (currBoard[pattern[0]] === "" || currBoard[pattern[1]] === "" || currBoard[pattern[2]] === "") {

            } else if (currBoard[pattern[0]] === currBoard[pattern[1]] && currBoard[pattern[1]] === currBoard[pattern[2]]) {
                dispatch(sendWinner(currBoard[pattern[0]]));
            }
            else if (!currBoard.includes('') && !winner) {
                dispatch(sendWinner('Tie'));
            }
        })
    }

    function Cell({ num }) {
        return <td onClick={() => {
            if (board[num] || winner) return
            dispatch(turns(num))
        }
        } >{board[num]}</td>
    }

    useEffect(() => {
        checkForWinner(board)
    }, [board])

    return (
        <div className='container'>
            <div className='turn' style={{ color: '#00d8ff', paddingBottom: '20px' }}>
                Turn: {turn}
            </div>
            <table>
                <tbody>
                    <tr>
                        <Cell num={0} />
                        <Cell num={1} />
                        <Cell num={2} />
                    </tr>
                    <tr>
                        <Cell num={3} />
                        <Cell num={4} />
                        <Cell num={5} />
                    </tr>
                    <tr>
                        <Cell num={6} />
                        <Cell num={7} />
                        <Cell num={8} />
                    </tr>
                </tbody>
            </table>
            {winner === 'Tie' && (
                <>
                    <p style={{ color: '#00d8ff' }}>Tie</p>
                    <button onClick={() => dispatch(resetBoard())}>Play Again</button>
                </>
            )}
            {winner !== 'Tie' && winner && (
                <>
                    <p style={{ color: '#00d8ff' }}>{winner} is the Winner!</p>
                    <button onClick={() => dispatch(resetBoard())}>Play Again</button>
                </>
            )}
        </div>
    )
}

export default TicTacToe