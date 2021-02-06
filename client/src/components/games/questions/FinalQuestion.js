import React from 'react'

const FinalQuestion = ({ finalQuestion }) => {
    return (
        <div className="border rounded p-4 mt-4">
            <div className="h5">
                Final Question
            </div>
            <div className="mt-3">
                <label><span className="fw-light">Prompt</span></label>
                <textarea name="prompt" value={finalQuestion.prompt} className="form-control" rows="4" placeholder="Enter prompt here"></textarea>
            </div>
            <div className="mt-2 mb-4">
                <label><span className="fw-light">Answer</span></label>
                <textarea name="answer" value={finalQuestion.answer} className="form-control" rows="4" placeholder="Enter answer here"></textarea>
            </div>
        </div>
    )
}

export default FinalQuestion
