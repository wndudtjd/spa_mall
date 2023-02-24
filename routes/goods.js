const express = require("express");
const router = express.Router();

// localhost:3000/api/ GET
router.get('/', (req, res) => { // req : request, res : response (API를 실행할 API에 받은 데이터는 req라는 객체 안에 들어있습니다.)
  res.send("default url for goods.js GET Method");
})

// localhost:3000/api/about GET
router.get('/about', (req, res) => {
  res.send("goods.js about POST");
})

module.exports = router; // router이라는 변수를 밖으로 내보내준다.