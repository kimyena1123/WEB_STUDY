const express = require('express');
const app = express();
const PORT = 8000;

app.set('view engine', 'ejs');
app.use('/views', express.static(__dirname + '/views'));
app.use('/static', express.static(__dirname + '/static'));
app.use(express.urlencoded({extended: true}));
app.use(express.json());

//MVC 패턴 적용
const indexRouter = require('./routes/index'); //.routers/index : index는 생략가능
app.use('/', indexRouter); // indexRouter가 되면 localhost:post/ 경로를 기본으로 ./routes/index.js 파일에 선언한대로 동작한다.

//.routes/user.js
const userRouter = require('./routes/user');
//localhost:PORT/user 경로를 기본으로 ./routes/user.js 파일에 선언한 대로 동작
app.use('/user', userRouter);

//[404 Error]
app.get("*", (req, res) => {
    res.render('404');
})

app.listen(PORT, () => {
    console.log(`http://localhost:${PORT}`);
})