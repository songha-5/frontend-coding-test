// 문제 설명
// 영소문자로 이루어진 문자열 my_string과 영소문자 1글자로 이루어진 문자열 alp가 매개변수로 주어질 때, my_string에서 alp에 해당하는 모든 글자를 대문자로 바꾼 문자열을 return 하는 solution 함수를 작성해 주세요.

// 입출력 예
// my_string	    alp	  result
// "programmers"	"p"	  "Programmers"
// "lowercase"	  "x"	  "lowercase"

function solution(my_string, alp) {
  // 하나씩 비교하기위해 단어 분리
  const split = my_string.split('')
  // 분리한 단어 하나하나씩 비교하여 조건에 맞는 단어는 대문자로 변환
  const word = split.map(function(item) {
    if ( item === alp ) {
      return item.toUpperCase()
    } else {
      return item
    }
  });
  // 분리된 단어들을 다시 합침
  var answer = word.join('');
  
  return answer;
}