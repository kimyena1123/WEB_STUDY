const express = require('express');
const app = express();
const PORT = 8000;

//multer 설정
const multer = require('multer');
const path = require('path');

const upload = multer({
    dest: 'uploads/', //저장경로
});

const uploadDetail = multer({
    storage: multer.diskStorage({
        destination(req, file, done){
            //req: 요청에 대한 정보
            //file: 파일에 대한 정보
            //done(에러, 저장경로) : 함수
            done(null, 'uploads/'); //경로설정. 위에 dest와 같은 파일에
        },
        filename(req, file, done){
            //req: 요청에 대한 정보
            //file: 파일에 대한 정보
            //done: 함수

            const ext = path.extname(file.originalname); //

            //test
            console.log("test : " + file.originalname);
            console.log(ext);
            console.log("basename: " + path.basename(file.originalname, ext));
            console.log("아이디로 붙이기: " + req.body.id);

            done(null, path.basename(file.originalname, ext) + Date.now() + ext);
            //done(null, path.basename(req.body.id, ext) + Date.now() + ext);
            //[파일명 + 현재시간.확장자] 이름으로 바꿔서 파일 업로드하는 코드
            //현재시간을 붙이는 이유: 파일명을 겹치는 것을 막기 위함이다.
        }
    }),
    //limits:{fileSize: 5 * 1024 * 1024},
})

app.set('view engine', 'ejs');
app.use('/views', express.static(__dirname + '/views'));
app.use('/uploads', express.static(__dirname + '/uploads'));
app.use(express.urlencoded({ extended: true}));
app.use(express.json());

app.get('/', function(req, res){
    res.render('index', {title: 'file_upload'});
})
app.get('/prac31', function(req, res){
    res.render('prac31', {title: '실습31'});
})

//1. single(): 하나의 파일 업로드할 때
// single()의 인자로 "input 태그의 name 값"을 넣어야 하낟. 
// single()에 의해서 => req.file 객체에 파일 정보를 가지고 있다. 
//app.post('/upload', upload.single('userfile'), function(req, res{}))
app.post('/upload', uploadDetail.single('userfile'), function(req, res){
    //req.file: 파일 업로드 성공 결과(즉, 파일정보)가 나옴
    console.log(req.file);

    // {
    //     fieldname: 'userfile', //폼에 정의된 name
    //     originalname: 'ex4.jpg', // 원본 파일명
    //     encoding: '7bit', //파일 엔코딩
    //     mimetype: 'image/jpeg', //파일 타입
    //     destination: '/uploads', //파일을 저장할 경로(폴더)
    //     filename: 'e83aa5d6efdafd89c82954d2fc30e893', //destination에 저장된 파일명
    //     path: '\\uploads\\e83aa5d6efdafd89c82954d2fc30e893', //업로드된 파일 전체 경로
    //     size: 22630 //파일 크기(byte)
    // }

    //req.body: title 데이터 정보 확인 가능
    //[Object: null prototype] {title: 'asdf}
    console.log(req.body);

    res.send('Upload finish!');
});

//2. array(): 여러 파일을 하나의 input에 업로드할 때
//array() => req.files 객체에 파일 정보
app.post('/upload/array', uploadDetail.array('userfiles'), function(req, res){
    console.log(req.files); // [{}, {}, {}, {}] 형식으로 파일 정보 확인
    console.log(req.body);
    res.send('UPLOADED Multiple!');
})

//3. fields(): 여러 파일을 각각의 input에 업로드할 때
app.post('/upload/fields', uploadDetail.fields([{name: 'userfile1'}, {name: 'userfile2'}]), function(req, res){
    console.log("app.js에서의 /upload/filed에서의 req.files >> ", req.files);
    console.log(req.body); //[Object: null prototype] { title1: 'aaa', title2: 'bbb' }
    res.send('UPLOAD MULTIPLE FILES');
})

//4. 동적 파일 업로드
app.post('/dynamic_file', uploadDetail.single('dynamic_file'), function(req, res){
    console.log("app.js req.file of axios >> ", req.file);

    res.send(req.file);
})

//5. 동적 파일 업로드(Ver.2)
app.post('/dynamicFiles', uploadDetail.array('dynamicFiles'), function(req, res){
    console.log("app.js에서의 dynamic array (req.files)>> ", req.files);
    console.log("app.js에서의 dynamic array (req.body) >> ", req.body);

    res.send(req.files);
})



//############################################################################
app.post('/upload2', uploadDetail.single('userfile'), function(req, res){
    console.log(req.file);
    console.log(req.body);

    //res.send('Upload success);
    res.render('result', {title: '파일 연결 성공', userInfo: req.body, fileInfo: req.file.filename});
})

app.listen(PORT, function(){
    console.log(`http://localhost:${PORT}`);
})