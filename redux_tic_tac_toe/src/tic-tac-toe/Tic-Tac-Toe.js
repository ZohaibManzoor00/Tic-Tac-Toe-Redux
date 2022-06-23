import React from 'react'
import './tic-tac-toe.css'
import { useSelector, useDispatch } from 'react-redux'
import { turns, checkWinner, nameWinner } from '../actions/action'

function TicTacToe() {
    const dispatch = useDispatch()
    // ------------Local states------------
    const turn = useSelector(state => state.turn)
    const board = useSelector(state => state.board)
    const winner = useSelector(state => state.winner)
    // ------------Local states------------

    const checkForWin = tiles => {
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
        }

        for (let combo in combos) {
            combos[combo].forEach(pattern => {
                if (!tiles.includes('')) {
                    dispatch(nameWinner('Tie'))
                }
                if (
                    tiles[pattern[0]] === '' ||
                    tiles[pattern[1]] === '' ||
                    tiles[pattern[2]] === ''
                ) {
                } else if (
                    tiles[pattern[0]] === tiles[pattern[1]] &&
                    tiles[pattern[0]] === tiles[pattern[2]]
                ) {
                    dispatch(nameWinner(tiles[pattern[0]]))
                }
            })
        }
    }

    // const handleClick = num => {
    //     if (winner) {
    //         alert('Game is won')
    //         return
    //     }
    //     if (cells[num] !== '') {
    //         alert('Already Clicked')
    //         return
    //     }
    //     if (turn === 'X') {
    //         tiles[num] = 'X'
    //         // setTurn('O')
    //     } else {
    //         tiles[num] = 'O'
    //         // setTurn('X')
    //     }
    //     checkForWin(tiles)
    //     setCells(tiles)
    // }

    // const resetBoard = () => {
    //     setWinner(null)
    //     setCells(Array(9).fill(''))
    // }

    // const Cell = ({ num }) => {
    //     return <td style={{ color: '#00d8ff' }} onClick={() => 
    //         handleClick(num)}>{cells[num]}</td>
    // }
    const Cell = ({ num }) => {
        return <td onClick={() => {
            dispatch(turns(num))
            checkForWin(board)}
        } >{board[num]}</td>
    }

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
                    {/* <button onClick={() => resetBoard()}>Play Again</button> */}
                </>
            )}
            {winner !== 'Tie' && winner && (
                <>
                    <p style={{ color: '#00d8ff' }}>{winner} is the Winner!</p>
                    {/* <button onClick={() => resetBoard()}>Play Again</button> */}
                </>
            )}
        </div>
    )
}

export default TicTacToe