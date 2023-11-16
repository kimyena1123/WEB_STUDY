const express = require('express');
const controller = require('../controller/Cmain');
const router = express.Router();

//Routing('경로설정');
//기본경로 : localhost: PORT/

//GET / [댓글 목록 보기] 이동 링크 걸려있음 => localhost:PORT /
router.get('/', controller.main);  //Cmain의

//GET /comments => localhost:PORT/comments
router.get('/comments', controller.comments);

//GET /comment:id => 각 댓글을 자세히 볼 수 있음 => localhost:PORT/comment:id
router.get('/comment/:id', controller.comment);

module.exports = router;