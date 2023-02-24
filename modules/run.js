// const add = require('./math.js')
// console.log(add.add(10, 30))

// 위의 코드를 좀더 깔끔하게 사용하는 방법.
const {add} = require('./math.js')
console.log(add(10, 30))



// module.exports = add 로 보내줄떄 밑에 사용 => 함수 전체 전달.
// const add = require('./math.js')
// console.log(add(10, 30));