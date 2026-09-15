// 문제 설명
// 문자열 myString이 주어집니다. myString에서 알파벳 "a"가 등장하면 전부 "A"로 변환하고, "A"가 아닌 모든 대문자 알파벳은 소문자 알파벳으로 변환하여 return 하는 solution 함수를 완성하세요.

// 입출력 예
// myString	           result
// "abstract algebra"	"AbstrAct AlgebrA"
// "PrOgRaMmErS"	      "progrAmmers"

// 입출력 예 설명
// 입출력 예 #1
// 0번, 5번, 9번, 15번 인덱스의 "a"는 소문자이므로 전부 대문자로 고쳐줍니다.
// 다른 문자들은 전부 "a"가 아닌 소문자이므로 바꾸지 않습니다.
// 따라서 "AbstrAct AlgebrA"를 return 합니다.

// 입출력 예 #2
// 0번, 2번, 4번, 6번, 8번, 10번 인덱스의 문자들은 "A"가 아닌 대문자이므로 전부 소문자로 고쳐줍니다.
// 5번 인덱스의 "a"는 소문자이므로 대문자로 고쳐줍니다.
// 다른 문자들은 전부 "a"가 아닌 소문자이므로 바꾸지 않습니다.
// 따라서 "progrAmmers"를 return 합니다.


function solution(myString) {
  // 전체 단어를 소문자로 변경
  const lower = myString.toLowerCase()
  // 단어 하나씩 확인 후 대문자로 변경하기위해 분리
  const word = lower.split('')
  // map을 사용하여 단어 하나하나 a가 맞는지 확인 후 a면 A로 변경
  const change = word.map(function(item) {
    if (item === "a") {
      return item.toUpperCase()
    } else {
      return item
    }
  })
  // 분리된 단어들을 다시 합쳐 문장으로 변환
  const answer = change.join('');
  // 결과
  return answer;
}
