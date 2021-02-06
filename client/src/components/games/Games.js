import React from 'react'
import { useAuth0 } from '@auth0/auth0-react';
import { Link } from 'react-router-dom';

const Games = () => {
    const { isAuthenticated } = useAuth0();

    const games = [
        {
            name: 'Game 1',
            numberRounds: 4,
            bonusQuestions: false,
            halftimeQuestion: true,
            themeRound: 4,
            finalWager: 15,
            questions: [
                {
                    prompt: 'This is prompt 1',
                    answer: 'This is answer 1'
                },
                {
                    prompt: 'This is prompt 2',
                    answer: 'This is answer 2'
                },
                {
                    prompt: 'This is prompt 3',
                    answer: 'This is answer 3'
                },
                {
                    prompt: 'This is prompt 4',
                    answer: 'This is answer 4'
                },
                {
                    prompt: 'This is prompt 5',
                    answer: 'This is answer 5'
                },
                {
                    prompt: 'This is prompt 6',
                    answer: 'This is answer 6'
                },
            ]
        }
    ];

    return isAuthenticated && (
        <div className="pt-5">
            <div className="row">
                <div className="col-12">
                    <Link to={{ pathname: "/game", state: { game: {} } }}>
                        <button className="btn btn-primary">Create New Game</button>
                    </Link>
                </div>
            </div>
            <div className="row pt-4">
                <div className="col-12">
                    <table className="table table-hover">
                        <thead>
                            <tr>
                                <th scope="col">Play Game</th>
                                <th scope="col">Game Name</th>
                                <th scope="col">Number of Rounds</th>
                                <th scope="col">Bonus Questions?</th>
                                <th scope="col">Halftime Question?</th>
                                <th scope="col">Theme Round?</th>
                                <th scope="col">Final Question Wager</th>
                                <th scope="col">Edit</th>
                                <th scope="col">Delete</th>
                            </tr>
                        </thead>
                        <tbody>
                            {games.map((game) => (
                                <tr>
                                    <td><button className="btn btn-success">Start</button></td>
                                    <td>{game.name}</td>
                                    <td>{game.numberRounds}</td>
                                    <td>{game.bonusQuestions ? 'Yes' : 'No'}</td>
                                    <td>{game.halftimeQuestion ? 'Yes' : 'No'}</td>
                                    <td>{game.themeRound > 0 ? game.themeRound : 'None'}</td>
                                    <td>{game.finalWager}</td>
                                    <td><Link to={{ pathname: "/game", state: { game } }}><i className="far fa-pencil text-primary pe-4"></i></Link></td>
                                    <td><i className="far fa-trash text-danger"></i></td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    )
}

export default Games

