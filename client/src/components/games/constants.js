export const NEW_GAME = {
    numberRounds: 6,
    shouldShowBonusQuestions: true,
    shouldShowFinalQuestion: true,
    finalQuestionMaxWager: 15,
    questions: new Array(24).fill().map(() => ({ prompt: '', answer: '' })),
    bonusQuestions: new Array(8).fill().map(() => ({ prompt: '', answer: '' })),
    finalQuestion: { prompt: '', answer: '' }
}

export const QUESTIONS_PER_PAGE = 3;

