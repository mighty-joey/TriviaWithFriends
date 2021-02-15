import React from 'react'

const BonusQuestion = ({ question, roundNumber, handleOnChangeQuestion }) => {
    return (
        <>
            <div>
                <label><span className="fw-light">Bonus Question Prompt</span></label>
                <textarea name="prompt" value={question.prompt} onChange={event => handleOnChangeQuestion(event, roundNumber - 1, true)} className="form-control" rows="3" placeholder="Enter prompt here"></textarea>
            </div>
            <div className="mt-2 mb-4">
                <label><span className="fw-light">Bonus Question Answer</span></label>
                <input type="text" name="answer" value={question.answer} onChange={event => handleOnChangeQuestion(event, roundNumber - 1, true)} className="form-control" placeholder="Enter answer here"></input>
            </div>
        </>
    )
}

export default BonusQuestion
