# 클라우드메이트 사내 교육 자료

## Introduction

이 자료는 개발을 접해본 적이 없는 사람들에게(영업, 마케팅, 운영까지 전부)  
기초적인 개발 지식을 전달하기 위해 만들어졌습니다.

## Usage

### frontend

> html 파일들은 전부 더블클릭 해서 실행하시면 됩니다.  
> 그리고 F12를 눌러서 개발자 도구를 연 뒤 `console` 탭을 확인하시면 됩니다.

- `frontend-1.html`: 더블클릭 해서 실행해보면 됩니다.(이후 html 파일 전부) 간단한 프론트엔드 예시입니다.
- `frontend-2.html`: 웹브라우저에서 F12를 눌러서 에러가 나는걸 확인해보면 됩니다.(이 다음에 나오는 html 파일 전부)
- `frontend-3.html`: `backend-1`을 실행한 뒤 F12를 눌러서 에러를 확인하세요. 그 뒤 `backend-2`를 실행하여 에러 없이 어떻게 응답이 오는지 확인하세요
- `frontend-4.html`: `backend-3`을 실행한 뒤 F12를 눌러서 메시지를 확인하세요. `backend-3`의 `data.txt` 파일의 내용을 변경할 때 마다 메시지가 달라지는걸 확인하실 수 있습니다.

### backend

> backend는 node.js를 사용합니다.  
> https://nodejs.org/ko/download/prebuilt-installer 여기서 다운로드 받아 설치하세요.

각각의 backend 폴더에서 아래 명령어를 실행하시면 됩니다.

```bash
npm ci # 만약 이 명령어가 안되면 `npm install` 을 하세요
node app.js
```

### combined

프론트와 백엔드를 합쳐놓은 예제입니다.  
마찬가지로 node.js를 사용합니다.
