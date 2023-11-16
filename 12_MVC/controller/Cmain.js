const Comment = require('../model/Comment');
console.log(Comment);
console.log(Comment.commentsInfos());

//const comments = [{}, {}, {}, {}];
exports.main = (req, res) => {
    res.render('index');
}

exports.comments = (req, res) => {
    // console.log(comments) // [ {}, {}, {}, {} ]
    console.log(Comment.commentsInfos()); // 댓글 목록 확인용: [ {}, {}, {}, {} ]

    res.render('comments', {commentsInfo: Comment.commentsInfos()});
    //Comment.commentInfos()에서 Comment는 model에서 가져옴.
};

exports.comment = (req, res) => {
    console.log(req.params); //route 매개변수(:id)에 대한 정보가 담겨있다.
    console.log("!!!!!!!!!!!!!");
    console.log("!!!!!!!!!!!!!!!!!");
    console.log(req.params.id); //id값 추출

    const comments = Comment.commentsInfos();

    const commentId = req.params.id;
    console.log(comments[commentId - 1]);

    if(commentId < 1 || commentId > comments.length){
        return res.render('404');
    }
    if(isNaN(commentId)){
        return res.render('404');
    }

    res.render('comment', {commentInfo: comments[commentId - 1]});
}