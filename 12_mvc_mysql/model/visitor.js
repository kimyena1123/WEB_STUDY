const mysql = require('mysql');

//DB 연결 정보
const conn = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: 'kimyena1123',
    database: 'kdt'
});

//테이블 전체 목록 조회
//select * from visitor
exports.getVisitors = (callback) => {
    //after - mysql 연결
    //query(SQL, callback)
    conn.query('SELECT * FROM visitor', (err, rows) =>{
        if(err){
            throw err; //그 에러를 출력;
        }
        
        console.log("Visitor.js " , rows);
        callback(rows);
    })
};

//사용자가 input창에 입력한 사용자 이름과 방명록 추가
exports.addVisitor = (data, callback) => {

    console.log("@@@@@@@@@@@@@@@@@@@@@@@@@@");
    console.log("model visitor.js >> ", data);
    conn.query(
        `INSERT INTO visitor (name, comment) VALUES ('${data.name}','${data.comment}')`,
    
        (err, rows) => {
            if(err){
              throw err;
            }
            console.log("Visitor.js에서 insert문 rows: ", rows);
            callback(rows.insertId);
    })
}