var express = require('express');
var router = express.Router();
var fetch = require('node-fetch');

router.get('/movies', (req, res) => {
    fetch('https://api.themoviedb.org/3/discover/movie?include_adult=false&include_video=false&language=fr&page=1&sort_by=popularity.desc', {method: 'GET', headers: {accept: 'application/json', Authorization: process.env.TMDB_API_KEY}}).then(reponse=>reponse.json()).then(data=>{
        res.json({movies: data.results})
    })
})

module.exports = router;
