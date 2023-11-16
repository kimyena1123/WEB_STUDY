//(임시) DB로부터 댓글 목록을 받아옴
//배열 : 전체 댓글
//각 객체: 댓글 하나
exports.commentsInfos = () => {
    return [{ //DB에서 가져온 값은 있어선 안된다.
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
}