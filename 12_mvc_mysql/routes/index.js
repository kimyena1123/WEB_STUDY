const express = require('express');
const controller = require('../controller/Cvisitor');
const router = express.Router();


//기본주소 : localhost:PORT

//GET / -> localhost: PORT/
router.get('/', controller.main);

//GET / visitor -> localhost: PORT/visitor
router.get('/visitor', controller.getVisitors);

//GET/ visitor/get => localhost:PORT/visitor/get
router.get('/visitor/get', controller.getVisitor);



//POST/ visitor/write => localhost:PORT/visitor/write
//여기서 /visitor/write는 따로 ejs 파일이 있어서 render 하는 것이 아닌
//post로 send 한다.
//visitor/write는 axios의 url이다. 
router.post('/visitor/write', controller.addVisitor);

//PATCH /visitor/edit => localhost: PORT/visitor/edit
router.patch('/visitor/edit', controller.patchVisitor);

//DELETE /visitor/delete
router.delete('/visitor/delete', controller.deleteVisitor);

module.exports = router;