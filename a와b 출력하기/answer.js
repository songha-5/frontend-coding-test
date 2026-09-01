// 문제: 정수 a와 b가 주어집니다. 각 수를 입력받아 입출력 예와 같은 형식으로 출력하는 코드를 작성해 보세요.

// 제한사항: -100,000 ≤ a, b ≤ 100,000

// 입력
// 4 5

// 출력
// a = 4
// b = 5


const a = 4
const b = 5

function answer(a, b) {
  const answer = 'a = ' + a + ' b = ' + b
  return answer
}

console.log(answer(a,b)) // 결과: a = 4 b = 5
