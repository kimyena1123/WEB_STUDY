const Visitor = require('../model/visitor');

//GET / => localhost:PORT/
exports.main = (req, res) => {
    res.render('index');
};

exports.getVisitors = (req, res) => {
    //before
    // console.log(Visitor.getVisitors());
    // res.render('visitor', {data: Visitor.getVisitors()});

    //after
    Visitor.getVisitors((result) => {
        console.log('Cvisitor.js', result);
        res.render('visitor', {data : result});
    })
}

exports.addVisitor = (req, res) => {
    console.log("########################");
    console.log(req.body);

    //여기서 req.body는 밑에 있는 코드를 의미함.
    //name: form.name.value
    //comment: form.comment.value

    Visitor.addVisitor(req.body, (result) =>{ //model 파일에서 data로 받음
        console.log("!!!!!!!!!!!!!!!!");
        console.log("########################");
        console.log('Civisitor.js: ', result);

        res.send({
            id: result,
            name: req.body.name,
            comment: req.body.comment,
        })
    })
}