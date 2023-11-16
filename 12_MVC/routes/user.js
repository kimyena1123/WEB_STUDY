const express = require('express');
const controller = require('../controller/Cuser');
const router = express.Router();

//"경로 설정"(Routing)
//기본경로: localhos: PORT/user

//GET / => localhost:PORT/user/
router.get('/', controller.user);

module.exports = router;