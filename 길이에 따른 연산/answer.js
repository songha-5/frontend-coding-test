// 문제
// 정수가 담긴 리스트 num_list가 주어질 때, 리스트의 길이가 11 이상이면 리스트에 있는 모든 원소의 합을 10 이하이면 모든 원소의 곱을 return하도록 solution 함수를 완성해주세요.

// 입출력 예
// num_list	                                result
// [3, 4, 5, 2, 5, 4, 6, 7, 3, 7, 2, 2, 1]	51
// [2, 3, 4, 5]	                            120

// 입출력 예 설명
// 입출력 예 #1
// 리스트의 길이가 13이므로 모든 원소의 합인 51을 return합니다.

// 입출력 예 #2
// 리스트의 길이가 4이므로 모든 원소의 곱인 120을 return합니다.


const sum = [3, 4, 5, 2, 5, 4, 6, 7, 3, 7, 2, 2, 1];
const multiply = [2, 3, 4, 5];

function solution(num_list) {
  // 개수에 따라 분기
  if (num_list.length > 10) {
    let answer = 0;
    // reduce를 활용해 기존값에 더하기
    return num_list.reduce((accumulator, currentValue) => accumulator + currentValue, answer)
  } else {
    let answer = 1;
    // reduce를 이용해 기존 값에 곱하기
    return num_list.reduce((accumulator, currentValue) => accumulator * currentValue, answer)
  }
}

