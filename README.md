D-Day 계산기

1. 목적
-여러 개의 D-Day를 저장하고 기록하기 위한 목록 형태로 관리하는 웹 형태의 D-Day 계산기.

2. 상세 기능
-제목 + 해당 날짜를 저장 할 수 있는 기능
-입력한 D-day일정을 목록으로 표시 / 화면을 초과시켜도 스크롤 가능.
-D-Day 자동 계산 기능 -> D-N(D-Day까지 N일 남음) / D-Day(D-Day는 오늘) / D+N (D-Day가 지난지 N일)
-저장된 목록은 브라우저에 유지 (localStorage를 사용하여 사용자 개인 브라우저에 저장됨 / 단, 같은 PC라도 브라우저가 다르면 빈 상태로 시작됨 ex) Google Chorme에서 저장 후 Microsoft Edge로 열면 빈상태로 시작됨.)
-저장한 항목은 목록의 해당 D-day 우측 삭제버튼을 클릭하면 삭제 가능.
-먼저 저장한 항목이 위에 표시됨.

3. 입출력 형태
#입력
-사용자가 제목 입력(글자 수 제한 없음, 문자열, 띄워쓰기, 특수문자, 숫자 등등 입력가능 / 단, 맨앞 맨뒤 공백은 제거됨)
ex)기말고사, @생일@, 제 23대 대통령 선거
-사용자가 해당 날짜 선택 (연도,월,일의 글자 클릭후 키보드 입력 OR 입력칸 우측 달력표시 누른 후 캘린더의 해당 날짜 클릭)
ex)2025-06-16
-제목 입력과 날짜 선택을 마쳤다면 우측 초록색 추가하기 버튼 클릭

#출력
-제목 + 날짜 추가하기 하단의 D-Day 목록
ex)
   기말고사 | D-7 (2025-06-16)                        
   제 23대 대통령 선거 | D+3 (2025-06-16)            
   @@@ | D-44347254 (123444-02-03)                
   0.9 | D+828 (2023-03-02)                     
입력한 D-Day박스 우측에 해당 D-Day를 삭제할 수 있는 삭제버튼 있음.
ex) 제 23대 대통령 선거 | D+3 (2025-06-16)       [삭제]
 
4. 실행 방법
(선택사항)
-git을 설치하지 않은 경우
1. https://github.com/scm0809/oss.git에 접속 후, 초록색 <> code ▼ 클릭 후 하단에 Download ZIP 클릭해서 다운하고 압축풀기.
2. 압축을 푼 후, 설치받은 폴더 안의 `index.html` 파일 클릭 (연결프로그램이 브라우저로 설정되어 있지 않다면, 오른쪽 마우스 클릭후 연결프로그램에서 브라우저로 열기
연결프로그램 브라우저 ex) Google Chorme, Microsoft Edge)

-git을 설치한 경우
1. 터미널(CMD, Git Bash 등)에서 원하는 폴더로 이동
   하는 방법 -> 터미널에서 cd 원하는 폴더 경로 입력
2. 레포지터리 클론(다운로드)
   하는방법 -> 터미널에서 git clone https://github.com/scm0809/oss.git 입력
3. 원하는 폴더로 입력한 폴더에 다운로드가 완료 -> 설치받은 폴더 안의 `index.html` 파일을 오른쪽 마우스 클릭후 연결프로그램에서 브라우저로 열기
   연결프로그램 브라우저 ex) Google Chorme, Microsoft Edge

(공통) 
HTML + CSS + JS로 구성되어 있기 때문에 따로 추가 설치없이 실행 가능.
index.html이 열렸다면 상세기능과 입출력형태의 기능들을 실행 가능.
