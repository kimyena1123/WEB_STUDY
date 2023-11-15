// const {response} = require('express');
const {application} = require('express');
const express = require('express');
const app = express();
const PORT = 8000;

//db에서 가져왔다고 가정
const realId = 'banana';
const realPw = '1234';

app.set('view engine', 'ejs');
app.use('/views', express.static(__dirname + '/views'));
app.use(express.urlencoded({extended: true}));
app.use(express.json());

//Routing(경로설정)
app.get('/', function(req,res){
    res.render('dynamic', {title: '동적 폼을 배워보자!'});
});

app.get('/prac29', function (req, res) {
    res.render('prac29', { title: '실습 29' });
});

app.get('/prac30', function(req, res){
    res.render('prac30', {title: '실습 30'});
});


//1. ajax get
//GET/ajax
app.get('/ajax', function(req, res){
    console.log("여기는 app.js: ", req.query);
    res.send(req.query);
});

//2. ajax post
//post/ajax
app.post('/ajax', function(req, res){
    console.log('여기는 app.js', req.body);
    res.send(req.body);
})

//3. axios get
//GET /axios
app.get('/axios', function(req, res){
    console.log("여기는 axioa get: ", req.query);
    res.send(req.query);
})


//4. axios post
//POST /axios
app.post('/axios', function(req, res){
    console.log("여기는 axios post: ", req.body); //요청을 받으니까 req. // 사용자가 입력한 input 값이 남어오는 것이다
    //그리고 이걸 res.send로 보내는 것이다.

    res.send(req.body);
})

//5. fetch get
//GET/ fetch
app.get('/fetch', function(req, res){
    console.log('여기는 app.js fetch >>', req.query);
    res.send(req.query);
})

//6. fetch post
//POST /fetch
app.post('/fetch', (req, res) => {
    console.log(req.body);
    res.send(req.body);
})


//###################################################################
// prace29.ejs axios
app.get('/axios2', function(req, res){
    res.send(req.query);
})

//###################################################################
// prace30.ejs axios
app.post('/axios3', function(req, res){
    console.log(req.body);

    console.log(req.body.id); // 사용자가 입력한 아이디 값
    console.log(req.body.pw); // 사용자가 입력한 비밀번호 값

    if(realId == req.body.id && realPw == req.body.pw){
        res.send({userInfo: req.body, msg: '로그인에 성공했습니다.', isLogin: true}); //ejs 파일에서 response로 받는다.
    }else{
        res.send({msg: '로그인과 비밀번호 다시 입력해주세요', isLogin: false}); //실패했을 때는 id랑 pw를 받을 필요가 없가에 userInfo애 req.body를 안보낸다.
    }
})

app.listen(PORT, function(){
    console.log(`http://localhost:${PORT}`);
})