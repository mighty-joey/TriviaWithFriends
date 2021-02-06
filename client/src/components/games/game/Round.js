import React from 'react';
import Question from '../questions/Question';
import BonusQuestion from '../questions/BonusQuestion';

const Round = ({ roundNumber, currentQuestions, handleOnChangeQuestion, startingIndex, shouldShowBonusQuestions, bonusQuestion }) => {
    shouldShowBonusQuestions = shouldShowBonusQuestions === true || shouldShowBonusQuestions === "true";

    return (
        <div className="border rounded p-4 mt-4">
            <div className="row">
                <span className="h5">Round {roundNumber} Questions</span>
            </div>
            <div className="row pt-2">
                {currentQuestions.map((question, index) => (
                    <div className="col-lg-4"><Question question={question} handleOnChangeQuestion={handleOnChangeQuestion}
                        index={startingIndex + index} questionNumber={index + 1} isBonusQuestion={false} /></div>
                ))}
            </div>
            {
                (shouldShowBonusQuestions) &&
                <div className="row align-content-center">
                    <div className="col-12"><BonusQuestion question={bonusQuestion} handleOnChangeQuestion={handleOnChangeQuestion} roundNumber={roundNumber} /></div>
                </div>
            }
        </div>
    )
}

export default Round
