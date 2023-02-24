function add(a, b) {
  return a + b;
}


// 모듈을 호출했을 때, add 키 값에는 add 변수 함수가 가지고 있는 값이 할당된다.
// const add = (a, b) => {
//   return a + b;
// }
// export.add = add;



// add를 {add : add}로 바꿔주면 객체로 보낼수 있음.
// 모듈을 호출했을 때, add키 값에는 add함수가 들어가는 방법이다. 
// module.exports = {add : add}


// add이면 모듈 그 자체를 바로 add 함수를 할당한다.
// module.exports = add 




// 함수 하나하나를 밖으로 내보내주는 방식
// 모듈을 호출했을 때, add 키 값에는 (a, b){return a + b;} 익명함수가 할당되는 방법이다.
// exports.add = function (a, b) { // 함수 자체를 내보내주는것이 아니라 객체를 내보내줌.
//   return a + b;
// }
