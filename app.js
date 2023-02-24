const express = require('express');
const { runInNewContext } = require('vm');
const app = express();
const port = 3000;
const goodsRouter = require('./routes/goods.js')

// body-parser-Middleware를 쓰기위한 문법이다.
app.use(express.json());

app.post("/", (req, res) => {
  console.log(req.body);

  res.send("기본 URI에 POST 메소드가 정상적으로 실행되었습니다.")
})

app.get("/", (req, res) => {
  console.log(req.query);

  // res.send('정상적으로 반환되었습니다.')

  // obj를 안쓰고 바로 객체를 넣어도 무방하다.
  const obj = {
    "KeyKey" : "value 입니다.",
    "이름입니다." : "이름일까요?",
  }

  res.json(obj)
})

app.get("/:id", (req, res) => {
  console.log(req.params);

  res.send(":id URI에 정상적으로 반환되었습니다.")
})


// app.get('/', (req, res) => {
//   res.send('Hello World!');
// });

// // localhost:3000/api => goodsRouter
// app.use('/api', goodsRouter) // 배열로도 사용가능 ex) [goodsRouter, userRouter]

app.listen(port, () => {
  console.log(port, '포트로 서버가 열렸어요!');
});