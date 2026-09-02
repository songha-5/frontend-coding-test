// 문제
// 문자열 str과 정수 n이 주어집니다.
// str이 n번 반복된 문자열을 만들어 출력하는 코드를 작성해 보세요.

// 제한사항
// 1 ≤ str의 길이 ≤ 10
// 1 ≤ n ≤ 5

// 입력 #1
// - string 5
// 출력 #1
// - stringstringstringstringstring


const str = 'string'
const n = 5

function fn(str, n) {
  // 답을담을 빈 박스 생성
  let answer = ''

  // 횟수를 받아(n) 출력을 'string'을 반복한다.
  for (let i = 0; i < n; i++) {
    answer = answer + str 
  }   
  return answer // 결과: stringstringstringstringstring
}

console.log(fn(str, n))