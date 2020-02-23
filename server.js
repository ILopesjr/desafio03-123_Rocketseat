const express = require('express');
const nunjucks = require('nunjucks');

const server = express();
const datas = require("./data");

server.use(express.static('public'));
server.use(express.static('img'));

server.set('view engine', 'njk');

nunjucks.configure('views', {
    express: server,
    autoescape: false,
    noCache: true
});

server.get('/', function(req, res){
    return res.render('home');
});

server.get('/about', function(req, res){
    return res.render('about');
});

server.get('/courses', function(req, res){
    return res.render("courses", { items: datas });
});

server.get('/courses/:id', function(req, res){
    const id = req.params.id;
    const course = datas;
    return res.render("courses", { item: course[id] });
});

server.use(function(req, res) { res.status(404).render("not-found"); });

server.listen(5000, function(){
    console.log('server is running');
});