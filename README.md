# OPIC-testing-program
OPIC 시험 준비를 위한 연습용 프로그램

<br>

### 📍 바로가기
**Service**
* <a href="#-service">Service</a>

**README**
* <a href="#-run">Run</a>
* <a href="#-tech-stack">Tech Stack</a>
* <a href="#-dependencies">Dependencies</a>
* <a href="#-developer">Developer</a>

<br>

### 🖥 Service
* [바로가기](https://idu-market.shop:10000)
<img width="389" alt="스크린샷 2021-07-05 오후 7 25 36" src="https://user-images.githubusercontent.com/56839474/124457467-cdbe5c80-ddc6-11eb-82c9-d6cb1593705f.png">

### 🍀 Run
1. 환경변수 파일 생성

* 명령어
```
# 작업 경로로 이동
$ cd /workdir

# 환경 변수 파일 생성
$ touch .env

# 환경 변수 내용 추가 -> 내용은 바로 하단에 있습니다.
$ vi .env
```

* ```.env```  파일 내용
```
PORT=10000
```

2. 도커를 이용한 ```opic-testing-program``` 이미지 실행
```
# /workdir은 본인의 작업 경로입니다.
$ docker run --env-file /workdir/.env -p 10000:10000 dnfla960/opic-testing-program
```

3. 접속
```
http://localhost:10000
```


<br>

### 📚 Tech Stack
* **Back**
   - Node.js (v4.14.4)
   - Express (v4.17.1)

* **Front**
   - HTML5 ```EJS```
   - CSS3
   - Vanila JS ```ES6+```
   - DOM

<br>

### 🛠 Dependencies
1. dotenv: ^8.2.0
2. ejs: ^3.1.5
3. express: ^4.17.1,
4. mysql2: ^2.2.5

<br>

### 👨🏻‍💻 Developer
<table>
  <tr>
    <td align="center">
      <a href="https://github.com/woorim960">
        <img src="https://avatars.githubusercontent.com/u/56839474?v=4" width="100px;" alt=""/> <br />
        <sub>
          <b>박우림</b>
        </sub>
      </a> <br />
      <a href="https://github.com/woorim960" title="Packaging/porting to new platform">
        웹 프로그래머
      </a>
    </td>
  </tr>
</table>

<br>
