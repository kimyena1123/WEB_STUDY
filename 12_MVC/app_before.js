const express = require('express');
const app = express();
const PORT = 8000;

app.set('view engine', 'ejs'); //view 폴더에 있는 파일들의 형식이 ejs이다.
app.use('/views', express.static(__dirname + '/views')); // 절대경로
app.use('/static', express.static(__dirname + '/static')); // 절대경로
app.use(express.urlencoded({extended: true})); //body-parser -> req.body를  쓸 수 있게 해주는 것
app.use(express.json());

//(임시) DB로부터 앳글 목록을 받아옴
//배열 : 전체 댓글
//각 객체: 댓글 하나
const comments = [{
    id: 1,
    userid: 'helloworld',
    date: '2022-10-31',
    comment: '안녕하세요 ^~^'
}, 
{
    id:2,
    userid: 'id2',
    date: '2002-11-01',
    comment: '안녕'
}, 
{
    id: 3,
    userid: 'id3',
    date: '2022-11-02',
    comment: '개빡쳐 ^~^'
}, 
{
    id: 4,
    userid: 'id4',
    date: '2022-11-02',
    comment: '아오 ^~^'
}]

// app.get('/', function(req, res){
//     res.render('index', {title: 'MVC'});
// })

//함수 선언
//1) 명시적 함수 선언
// Function func_name(){...}

//2) 함수 표현식
// const var_name = function(){...}

//2. 함수 표현식 변형 -> 화살표 함수
//: 함수 표현식을 더 단순하게 적성해보자.
//const f = () => {...}

//GET / :[댓글 목록 보기] 이동 링크 걸려있음
app.get('/', (req, res) => {
    res.render('index');
})

//GET /comments
app.get('/comments', (req, res) => {
    console.log("app.js에서의 comments의 길이 보기>> ", comments.length);
    res.render('comments', {commentsInfo: comments})
})

//GET /comment/ :id - 각 댓글을 자세히 볼 수 있음
app.get('/comment/:id', (req, res) => {
    console.log('Param은: '+ req.params); // 매개변수의 축약형인 Params에 이 정보가 저장되어 있다. 
    //라우트(경로) 매개변수에 대한 정보가 담겨있다(여기서 말하는 매개변수란 id를 의미한다.)
    console.log("id는 : " + req.params.id); // id값 추출

    const commentId = req.params.id; // 댓글 id : url로 들어온 매개변수
    //comments = [{}, [}, {}, ...]]

    //comments는 객체 4개
    //Req.params.id는 객체의 id를 의미
    //commetnsp[commentid - 1] : 객체 4개 중
    console.log("commentpcommentId-1] : " + comments[commentId - 1]); // 댓글 목록에서 특정 갯글 정보만 추출

    //1. :id가 존재하지 않는 댓글 id 안된다(음수, 0, 댓글 배열 길이보다 큰 값이 들어오면 안된다)
    if(commentId < 1 || commentId > comments.length){
        return res.render('404');
    }

    //2. :id - 숫자가 아닌 것이 들어오면 안된다
    if(isNaN(commentId)){
        return res.render('404');
    }

    res.render('comment', {commentInfo: comments[commentId -1]});
})

app.get('*', (req, res) => {
    res.render('404');
})


app.listen(PORT, () => {
    console.log(`http://localhost:${PORT}`);
})