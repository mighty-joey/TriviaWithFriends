import React, { useState, useEffect, useRef } from 'react';
import { Pagination } from 'react-bootstrap';
import Round from './Round';
import Details from './Details';
import FinalQuestion from '../questions/FinalQuestion';
import { NEW_GAME, QUESTIONS_PER_PAGE } from '../constants';

const Game = props => {
    const state = Object.keys(props.location.state.game).length === 0 ? NEW_GAME : props.location.state.game;

    const [game, setGame] = useState(state);
    const [currentPage, setCurrentPage] = useState(1);
    const indexOfLastQuestion = useRef(currentPage * QUESTIONS_PER_PAGE);
    const indexOfFirstQuestion = useRef(indexOfLastQuestion.current - QUESTIONS_PER_PAGE);
    const [currentQuestions, setCurrentQuestions] = useState(game.questions.slice(indexOfFirstQuestion.current, indexOfLastQuestion.current));

    useEffect(() => {
        indexOfLastQuestion.current = currentPage * QUESTIONS_PER_PAGE;
        indexOfFirstQuestion.current = indexOfLastQuestion.current - QUESTIONS_PER_PAGE;
        setCurrentQuestions(game.questions.slice(indexOfFirstQuestion.current, indexOfLastQuestion.current));
    }, [currentPage, game.questions]);

    const getTitle = () => {
        return checkIsObjectEmpty(game) ? 'Create Game' : 'Edit Game';
    }

    const checkIsObjectEmpty = object => {
        return Object.keys(object).length === 0 && object.constructor === Object
    }

    const getPagination = () => {
        const numberOfPages = game.numberRounds + (game.shouldShowFinalQuestion ? 1 : 0);
        const items = [];

        for (let number = 1; number <= numberOfPages; number++) {
            if (number <= game.numberRounds) {
                items.push(
                    <Pagination.Item key={number} active={number === currentPage}>
                        {number}
                    </Pagination.Item>,
                );
            } else {
                items.push(
                    <Pagination.Item key={number} active={number === currentPage}>
                        {number}
                    </Pagination.Item>,
                );
            }
        }

        return <Pagination size="md" onClick={handleOnChangePage}>{items} </Pagination>
    }

    const handleOnChangePage = event => {
        setCurrentPage(parseInt(event.target.innerText));
    }

    const handleOnChangeQuestion = (event, index, isBonusQuestion) => {
        const target = event.target;
        const property = target.name;
        const newValue = target.value;
        const newGame = Object.assign({}, game);

        if (isBonusQuestion) {
            const bonusQuestion = newGame.bonusQuestions[index];
            bonusQuestion[property] = newValue;
        } else {
            const question = newGame.questions[index];
            question[property] = newValue;
        }

        setGame(newGame);
    }

    const handleOnChangeDetails = event => {
        const target = event.target;
        const property = target.name;
        let newValue = target.value;

        if (Number.isInteger(parseInt(newValue))) {
            newValue = parseInt(newValue);
        } else {
            newValue = newValue === "true" ? true : false;
        }

        const newGame = Object.assign({}, game);
        newGame[property] = newValue;
        setGame(newGame);
    }

    return (
        <>
            <div className="row pt-5">
                <div className="col-12 h4">
                    {getTitle()}
                </div>
            </div>
            <div className="row">
                <div className="col-12">
                    <Details game={game} handleOnChangeDetails={handleOnChangeDetails} />
                </div>
            </div>
            <div className="row">
                {(currentPage <= game.numberRounds) && <div className="col-12">
                    <Round currentQuestions={currentQuestions} startingIndex={indexOfFirstQuestion.current}
                        roundNumber={currentPage} handleOnChangeQuestion={handleOnChangeQuestion}
                        shouldShowBonusQuestions={game.shouldShowBonusQuestions} bonusQuestion={game.bonusQuestions[currentPage - 1]} />
                </div>}
                {(currentPage > game.numberRounds) && <div className="col-12">
                    <FinalQuestion finalQuestion={game.finalQuestion} />
                </div>}
            </div>
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

export default Game
