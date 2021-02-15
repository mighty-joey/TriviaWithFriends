import axios from 'axios';

const GamesService = {
    fetchGames: userId => {
        return axios.get('/api', { params: { userId } });
    },

    postGame: game => {
        return axios.post('/api/save', game);
    },

    deleteGame: gameId => {
        return axios.delete('/api/delete', { params: { gameId } });
    }
}

export default GamesService