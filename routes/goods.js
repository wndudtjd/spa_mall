const express = require("express");
const router = express.Router();

// // localhost:3000/api/ GET
// router.get('/', (req, res) => { // req : request, res : response (API를 실행할 API에 받은 데이터는 req라는 객체 안에 들어있습니다.)
//   res.send("default url for goods.js GET Method");
// })

// // localhost:3000/api/about GET
// router.get('/about', (req, res) => {
//   res.send("goods.js about POST");
// })


// /routes/goods.js
const goods = [
  {
    goodsId: 4,
    name: "상품 4",
    thumbnailUrl:
      "https://cdn.pixabay.com/photo/2016/09/07/02/11/frogs-1650657_1280.jpg",
    category: "drink",
    price: 0.1,
  },
  {
    goodsId: 3,
    name: "상품 3",
    thumbnailUrl:
      "https://cdn.pixabay.com/photo/2016/09/07/02/12/frogs-1650658_1280.jpg",
    category: "drink",
    price: 2.2,
  },
  {
    goodsId: 2,
    name: "상품 2",
    thumbnailUrl:
      "https://cdn.pixabay.com/photo/2014/08/26/19/19/wine-428316_1280.jpg",
    category: "drink",
    price: 0.11,
  },
  {
    goodsId: 1,
    name: "상품 1",
    thumbnailUrl:
      "https://cdn.pixabay.com/photo/2016/09/07/19/54/wines-1652455_1280.jpg",
    category: "drink",
    price: 6.2,
  },
];

router.get("/goods", (req, res) => {
  res.status(200).json({"goods":goods}) // {"goods":goods}이와같이 key와 value가 똑같은 이름이라면 {goods}이렇게 써줄수 있다.
});

// router.get("/goods/:goodsId", (req, res) => {
//   const params = req.params;
//   console.log("params", params)

//   res.status(200).json({});
// })

// 객체 구조 분해 할당 문법
// router.get("/goods/:goodsId", (req, res) => {
//   const {goodsId} = req.params;
//   console.log(goodsId);

//   res.status(200).json({});
// })


let result = null;
router.get("/goods/:goodsId", (req, res) => {
  const {goodsId} = req.params;

  // for(const good of goods) {
  //   if(Number(goodsId) === good.goodsId) {
  //     result = good;
  //   }
  // }

  // 위의 코드와 동일한 코드 filter메서드를 사용해서 만든것
  const [result] = goods.filter((good) => Number(goodsId) === good.goodsId)

  res.status(200).json({detail :result});
})


module.exports = router; // router이라는 변수를 밖으로 내보내준다.