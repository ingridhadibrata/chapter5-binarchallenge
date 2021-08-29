const express = require('express');
const app = express();
const port = 8000;

const users = {"username": "ingrid", "password": "1234"};

app.set('view engine', 'ejs');
app.use(express.urlencoded({extended: false}));

function getUser(req, res){
    res.json({
        jumlahUser: users.length,
        data:users
    })
}

function getLogin(req, res){
    return res.render('login');
}

app.get('/login', (req, res) => {
    res.render('login');
});


function postLogin (req, res) {
       const inputUsername = req.body.username;
       const inputPassword = req.body.password;
       
       if (inputUsername == users.username && inputPassword == users.password) {
        res.status(201).json({status: "Berhasil"});
    } else {
        res.status(201).json({status: "Gagal"});
    };
};



app.get('/users', getUser);

app.get('/login', getLogin);

app.post('/login', postLogin);

app.get('/', (req, res) => {
    res.render('index');
});

app.get('/game', (req, res) => {
    res.render('game');
});

app.use(express.static('public'));

app.listen(port, () => {
    console.log(`App listening at http://localhost:${port}`)
})
