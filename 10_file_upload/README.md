mkdir 10_file_upload
cd 10_file_upload

npm init -y
#package.json에서 "main"값을 index.js에서 app.js로 변경(진입점 파일명)

npm install express ejs #express와 ejs 패키지 설치

.gitignore 파일 생성
    # git 버전 관리에서 제외할 피일 목록을 지정하는 파일
    # git 관리에서 특정 파일을 제외하기 위해서는 github에 올리기 전에 .gitignore에 파일 목록을 미리 추가해야 한다. 

    /node-modules
    package-lock.json

npm install multer