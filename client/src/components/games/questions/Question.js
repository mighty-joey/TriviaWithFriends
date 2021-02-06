import React from 'react'

const Question = ({ question, handleOnChangeQuestion, index, questionNumber }) => {
    return (
        <>
            <div>
                <label><span className="fw-light">Prompt {questionNumber}</span></label>
                <textarea name="prompt" value={question.prompt} onChange={event => handleOnChangeQuestion(event, index, false)} className="form-control" rows="5" placeholder="Enter prompt here"></textarea>
            </div>
            <div className="mt-2 mb-4">
                <label><span className="fw-light">Answer {questionNumber}</span></label>
                <input type="text" name="answer" value={question.answer} onChange={event => handleOnChangeQuestion(event, index, false)} className="form-control" placeholder="Enter answer here"></input>
            </div>
        </>
    )
}

export default Question
