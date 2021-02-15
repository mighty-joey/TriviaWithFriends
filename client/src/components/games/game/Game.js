import React, { useState, useEffect, useRef } from 'react';
import { Pagination } from 'react-bootstrap';
import Round from './Round';
import Details from './Details';
import { NEW_GAME, QUESTIONS_PER_PAGE } from '../constants';
import GamesService from '../games.service';
import { useHistory } from 'react-router-dom';
import Question from '../questions/Question';

const Game = props => {
    const { game: gameProp, userId } = props.location.state;
    const state = gameProp ? Object.assign({ userId }, gameProp) : NEW_GAME;

    const [game, setGame] = useState({ ...state, userId });
    const [currentPage, setCurrentPage] = useState(1);
    const isCurrentPageHalftimeQuestion = useRef(false);
    const isCurrentPageFinalQuestion = useRef(false);
    const indexOfLastQuestion = useRef(currentPage * QUESTIONS_PER_PAGE);
    const indexOfFirstQuestion = useRef(indexOfLastQuestion.current - QUESTIONS_PER_PAGE);
    const [currentQuestions, setCurrentQuestions] = useState(game.questions.slice(indexOfFirstQuestion.current, indexOfLastQuestion.current));

    const history = useHistory();

    useEffect(() => {
        indexOfLastQuestion.current = currentPage * QUESTIONS_PER_PAGE;
        indexOfFirstQuestion.current = indexOfLastQuestion.current - QUESTIONS_PER_PAGE;
        setCurrentQuestions(game.questions.slice(indexOfFirstQuestion.current, indexOfLastQuestion.current));
    }, [currentPage, game.questions]);

    const getTitle = () => {
        return props.location.state.game ? 'Create Game' : 'Edit Game';
    };

    const getPagination = () => {
        const numberOfPages = game.numberRounds;
        const items = [];

        for (let number = 1; number <= numberOfPages; number++) {
            if (number <= game.numberRounds) {
                items.push(
                    <Pagination.Item key={number} active={number === currentPage}>
                        {number}
                    </Pagination.Item>,
                );
            }
        }

        return <Pagination size="md" onClick={handleOnChangePage}>{items} </Pagination>
    };

    const handleOnChangePage = event => {
        setCurrentPage(parseInt(event.target.innerText));
    };

    const handleOnChangeName = ({ target }) => {
        const { name, value } = target;
        const newGame = Object.assign({}, game);

        newGame[name] = value;
        setGame(newGame);
    };

    const handleOnChangeQuestion = ({ target }, index, isBonusQuestion) => {
        const { name, value } = target;
        const newGame = Object.assign({}, game);

        if (isBonusQuestion) {
            const bonusQuestion = newGame.bonusQuestions[index];
            bonusQuestion[name] = value;
        } else {
            const question = newGame.questions[index];
            question[name] = value;
        }

        setGame(newGame);
    };

    const handleOnChangeFinalQuestion = ({ target }) => {
        const { name, value } = target;
        const newGame = Object.assign({}, game);

        const finalQuestion = newGame.finalQuestion;
        finalQuestion[name] = value;

        setGame(newGame);
    };

    const handleOnChangeHalftimeQuestion = ({ target }) => {
        const { name, value } = target;
        const newGame = Object.assign({}, game);

        const halftimeQuestion = newGame.halftimeQuestion;
        halftimeQuestion[name] = value;

        setGame(newGame);
    }

    const handleOnChangeDetails = ({ target }) => {
        const { name } = target;
        let { value } = target;

        if (Number.isInteger(parseInt(value))) {
            value = parseInt(value);
        } else {
            value = value === "true" ? true : false;
        }

        const newGame = Object.assign({}, game);
        newGame[name] = value;

        setGame(newGame);
    };

    const handleOnClickSave = (event) => {
        event.preventDefault();

        GamesService.postGame(game).then(() => {
            history.push('/games');
        }, () => {
            console.log('game not saved');
        });
    };

    return (
        <>
            <div className="row pt-5">
                <div className="col-6 h4">
                    {getTitle()}
                </div>
                <div className="col-6 d-flex justify-content-end">
                    <button onClick={handleOnClickSave} type="button" className="btn btn-primary">Save Game</button>
                </div>
            </div>
            <div className="row">
                <div className="col-12">
                    <Details game={game} handleOnChangeDetails={handleOnChangeDetails} handleOnChangeName={handleOnChangeName} />
                </div>
            </div>
            <div className="row">
                {!isCurrentPageFinalQuestion.current && !isCurrentPageHalftimeQuestion.current && <div className="col-12">
                    <Round currentQuestions={currentQuestions} startingIndex={indexOfFirstQuestion.current}
                        roundNumber={currentPage} handleOnChangeQuestion={handleOnChangeQuestion}
                        shouldShowBonusQuestions={game.shouldShowBonusQuestions} bonusQuestion={game.bonusQuestions[currentPage - 1]} />
                </div>}
            </div>
            {game.shouldShowHalftimeQuestion && currentPage === (game.numberRounds / 2) &&
                <div className="border rounded p-4 mt-4">
                    <div className="row">
                        <span className="h5">Halftime Question</span>
                    </div>
                    <div className="col-12 pt-1">
                        <Question question={game.halftimeQuestion} handleOnChangeQuestion={handleOnChangeHalftimeQuestion} />
                    </div>
                </div>
            }
            {game.shouldShowFinalQuestion && currentPage === game.numberRounds &&
                <div className="border rounded p-4 mt-4">
                    <div className="row">
                        <span className="h5">Final Question</span>
                    </div>
                    <div className="col-12 pt-1">
                        <Question question={game.finalQuestion} handleOnChangeQuestion={handleOnChangeFinalQuestion} />
                    </div>
                </div>
            }
            <div className="row pt-3">
                <div className="col-12">
                    <div className="d-flex flex-row pb-1 justify-content-center">
                        {getPagination()}
                    </div>
                </div>
            </div>
        </>
    )
}

export default Game;
