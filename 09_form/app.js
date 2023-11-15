const {response} = require('express');
const express = require('express');
const app = express();
const PORT = 8000;

//views 설정
app.set('view engine', 'ejs'); //view engine 등록
//Middleware(미들웨어) 설정
// : 요청(req) 과 응답(res)의 중간에서 작업
app.use('/views', express.static(__dirname + 'views'));// views 파일 설정
app.use(express.urlencoded({extended : true}));
app.use(express.json()); // json 형태로 데이터를 전달받음

// Routing - 경로 설정
//-req(request) : 요청 (cliend - > sever)
//-res(response) : 응답 (server -> client)
app.get('/', function(req, res){ // GET / (http://locahost:PORT)
    //res.send('root page);
    res.render('index', {title: "폼 전송을 배워보자", desc : '여기는 설명'}); ///views/index.ejs 파일을 찾아서 clien에게 "응답"함.
});

app.get('/getForm', function(req, res){
    //GET 요청은 req.query 객체에 폼 정보가 전달
    console.log(req.query);
    // res.send('get 요청 응답 성공');
    res.render('result', {title2 : 'get 요청 성공', userInfo: req.query});
});

app.post('/postForm', function(req, res){
    //POST 요청은ㅇ req.body 객체에 폼 정보가 전달
    console.log(req.body);

    res.render('result', {title2: 'post 요청 성공', userInfo: req.body});
})



app.get('/prac24', function(req, res){
    res.render('prac24');
})

app.get('/getTable', function(req, res){
    console.log(req.query);
    res.render('prac24_result', {title: '실습 폼 전송 완료', userInfo: req.query});
})



app.get('/prac27', function(req, res){
    res.render('prac27');
})

app.post('/postTable', function(req, res){
    console.log(req.body);
    res.render('prac27_result', {title: '실습26 폼 전송 완료', userInfo: req.body});
})

app.listen(PORT, function(){
    console.log(`http://localhost:${PORT}`);
});