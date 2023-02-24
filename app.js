const express = require('express');
const app = express();
const port = 3000;
const goodsRouter = require('./routes/goods.js')

app.get('/', (req, res) => {
  res.send('Hello World!');
});

// localhost:3000/api => goodsRouter
app.use('/api', goodsRouter) // 배열로도 사용가능 ex) [goodsRouter, userRouter]

app.listen(port, () => {
  console.log(port, '포트로 서버가 열렸어요!');
});