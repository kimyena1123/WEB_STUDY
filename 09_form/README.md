mkdir 12_form #폴더 생성
cd 12_form # 폴더 이동

npm init -y #프로젝트 시작 명령어(-y 옵션: package 기본값으로 생성)
#package.json에서 "main"값을 index.js에서 app.js로 변경(진입점 파일명)

npm install express ejs #express와 ejs 패키지 설치

.gitignore 파일 생성
    # git 버전 관리에서 제외할 피일 목록을 지정하는 파일
    # git 관리에서 특정 파일을 제외하기 위해서는 github에 올리기 전에 .gitignore에 파일 목록을 미리 추가해야 한다. 

    /node-modules
    package-lock.json



#nodemon 패키지
    # 서버측 코드(app.js 등)가 변경될 때마다 ctrl + c 단축키로 node 명령어를 종료하고 node app.js 명령을 다시 입력하기 귀찮음
    # 파일들을 모니터링 하다가 소스코드 변경시 자동으로 node 재실행하는 패키지이다. 

    npm install -g nodemon  # 전역 설치
    nodemon -v  # 설치 확인(버전 확인)
    nodemon app.js  # 진입점 파일 실행


    # 참고: 지역설치 VS 전역설치
        지역설치: 해당 프로젝트의 node_modules/ 폴더 안에 패키지 설치
                해당 프로젝트 내에서만 사용 가능
                npm install [패키지명] 
        전역설치: -g 옵션(global)으로 전역 node_modules/ 폴더 안에 패키지 설치
                모든 프로젝트다 공통으로 사용 가능
                npm install -g [패키지명]