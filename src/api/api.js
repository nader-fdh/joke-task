import axios from 'axios'
export default {
    getData: () =>
    axios({
        'method':'GET',
        'url':'https://api.chucknorris.io/jokes/search?query=all',
        'headers': {
            'content-type':'application/octet-stream',
            'x-rapidapi-host':'example.com',
            'x-rapidapi-key': process.env.RAPIDAPI_KEY
        },
        'params': {
            'search':'parameter',
        },
    })
,
    getCategories: () =>
    axios({
        'method':'GET',
        'url':'https://api.chucknorris.io/jokes/categories',
        'headers': {
            'content-type':'application/octet-stream',
            'x-rapidapi-host':'example.com',
            'x-rapidapi-key': process.env.RAPIDAPI_KEY
        },
        'params': {
            'search':'parameter',
        },
    }),
    searchForJoke: (str) =>
    axios({
        'method':'GET',
        'url':`https://api.chucknorris.io/jokes/search?query=${str}`,
        'headers': {
            'content-type':'application/octet-stream',
            'x-rapidapi-host':'example.com',
            'x-rapidapi-key': process.env.RAPIDAPI_KEY
        },
        'params': {
            'search':'parameter',
        },
    }),
    getRondomJoke: (str) =>
    axios({
        'method':'GET',
        'url':`https://api.chucknorris.io/jokes/random?category=${str}`,
        'headers': {
            'content-type':'application/octet-stream',
            'x-rapidapi-host':'example.com',
            'x-rapidapi-key': process.env.RAPIDAPI_KEY
        },
        'params': {
            'search':'parameter',
        },
    })
}


