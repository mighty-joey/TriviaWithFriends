import React, { useEffect, useState } from 'react'
import { useAuth0 } from '@auth0/auth0-react';
import { Link } from 'react-router-dom';
import GamesService from '../games/games.service';
import ConfirmModal from '../modal/ConfirmModal';
import { useHistory } from 'react-router-dom';

const Games = () => {
    const { isAuthenticated, user } = useAuth0();
    const [games, setGames] = useState([]);
    const [isConfirmModalOpen, setIsConfirmModalOpen] = useState(false);
    const [idToDelete, setIdToDelete] = useState();

    const history = useHistory();

    useEffect(() => {
        getGames();

    }, [user.sub]);

    const getGames = () => {
        const userId = user.sub;

        GamesService.fetchGames(userId).then(response => {
            setGames(response.data);
        },
            () => {

            });
    };

    const displayGames = games => {
        return games.map((game) => (
            <tr>
                <td className="align-middle"><button className="btn btn-success">Start</button></td>
                <td className="align-middle">{game.name}</td>
                <td className="align-middle"><Link to={{ pathname: "/game", state: { game } }}><i className="far fa-pencil text-primary pe-4"></i></Link></td>
                <td className="align-middle"><button className="btn" onClick={() => handleOnClickDeleteGame(game._id)}><i className="far fa-trash text-danger"></i></button></td>
            </tr>
        ));
    };

    const handleOnClickDeleteGame = (id) => {
        setIdToDelete(id);
        setIsConfirmModalOpen(true);
    }

    const deleteGame = gameId => {
        GamesService.deleteGame(gameId).then(() => {
            history.push('/games');
            getGames();
        }, () => {

        });

        setIsConfirmModalOpen(false);
    }

    return isAuthenticated && (
        <>
            <div className="pt-5">
                <div className="row">
                    <div className="col-12">
                        <Link to={{ pathname: "/game", state: { game: undefined, userId: user.sub } }}>
                            <button className="btn btn-primary">Create New Game</button>
                        </Link>
                    </div>
                </div>
                <div className="row pt-4">
                    <div className="col-12">
                        <table className="table table-hover">
                            <thead>
                                <tr>
                                    <th style={{ width: "10%" }} scope="col">Play Game</th>
                                    <th style={{ width: "70%" }} scope="col">Game Name</th>
                                    <th style={{ width: "10%" }} scope="col">Edit</th>
                                    <th style={{ width: "10%" }} scope="col">Delete</th>
                                </tr>
                            </thead>
                            <tbody>
                                {games && displayGames(games)}
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
            <ConfirmModal showModal={isConfirmModalOpen} hideModal={() => setIsConfirmModalOpen(false)} handleOnClickConfirm={deleteGame}
                id={idToDelete} message="Are you sure you want to delete this game?" header="Confirm" />
        </>
    )
}

export default Games

