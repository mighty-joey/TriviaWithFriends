export const NEW_GAME = {
    userId: undefined,
    name: '',
    numberRounds: 6,
    shouldShowBonusQuestions: true,
    shouldShowFinalQuestion: true,
    shouldShowHalftimeQuestion: true,
    finalQuestionMaxWager: 15,
    questions: new Array(24).fill().map(() => ({ prompt: '', answer: '' })),
    bonusQuestions: new Array(8).fill().map(() => ({ prompt: '', answer: '' })),
    finalQuestion: { prompt: '', answer: '' },
    halftimeQuestion: { prompt: '', answer: '' }
}

export const QUESTIONS_PER_PAGE = 3

export const NUMBER_OF_ROUNDS_OPTIONS = [
    { '2': 2 },
    { '4': 4 },
    { '6': 6 },
    { '8': 8 }
]
