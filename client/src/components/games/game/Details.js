import React from 'react';

const Details = ({ game, handleOnChangeDetails, handleOnChangeName }) => {
    return (
        <div className="border rounded mt-2 p-4">
            <div className="row pb-2">
                <span className="fw-darker h5">Details</span>
            </div>
            <div className="row">
                <div className="col-lg-8">
                    <label><span className="fw-light">Game Name</span></label>
                    <input name="name" value={game.name} onChange={handleOnChangeName} type="text" className="form-control" placeholder="Enter Game Name"></input>
                </div>
                <div className="col-lg-4">
                    <label><span className="fw-light">Number Of Rounds</span></label>
                    <select name="numberRounds" value={game.numberRounds} onChange={handleOnChangeDetails} className="form-select">
                        <option value="2">2</option>
                        <option value="4">4</option>
                        <option defaultValue value="6">6</option>
                        <option value="8">8</option>
                    </select>
                </div>
            </div>
            <div className="row pt-4">
                <div className="col-lg-4">
                    <label><span className="fw-light">Bonus Questions</span></label>
                    <select name="shouldShowBonusQuestions" value={game.shouldShowBonusQuestions} onChange={handleOnChangeDetails} className="form-select">
                        <option value="true">Yes</option>
                        <option value="false">No</option>
                    </select>
                </div>
                <div className="col-lg-4">
                    <label><span className="fw-light">Halftime Question</span></label>
                    <select name="shouldShowHalftimeQuestion" value={game.shouldShowHalftimeQuestion} onChange={handleOnChangeDetails} className="form-select">
                        <option value="true">Yes</option>
                        <option value="false">No</option>
                    </select>
                </div>
            </div>
            <div className="row pt-4">
                <div className="col-lg-4">
                    <label><span className="fw-light">Final Question</span></label>
                    <select name="shouldShowFinalQuestion" value={game.shouldShowFinalQuestion} onChange={handleOnChangeDetails} className="form-select">
                        <option value="true">Yes</option>
                        <option value="false">No</option>
                    </select>
                </div>
                <div className="col-lg-4">
                    <label><span className="fw-light">Final Question Max Wager</span></label>
                    <select name="finalQuestionMaxWager" value={game.finalQuestionMaxWager} onChange={handleOnChangeDetails} className="form-select">
                        <option value="10">10</option>
                        <option value="15">15</option>
                        <option value="20">20</option>
                        <option value="25">25</option>
                        <option value="30">30</option>
                        <option value="999">All In</option>
                    </select>
                </div>
            </div>
        </div>
    )
}

export default Details
