// 문제 : 
// 정수로 이루어진 리스트 num_list가 주어집니다. 
// num_list에서 가장 작은 5개의 수를 오름차순으로 담은 리스트를 return하도록 solution 함수를 완성해주세요.


// 제한사항 :
// 6 ≤ num_list의 길이 ≤ 30
// 1 ≤ num_list의 원소 ≤ 100

// 입출력 예 설명
// [12, 4, 15, 46, 38, 1, 14]를 정렬하면 [1, 4, 12, 14, 15, 38, 46]이 되고, 
// 앞에서 부터 5개를 고르면 [1, 4, 12, 14, 15]가 됩니다.




const num_list = [12,4,46,38,1,14]

function solution(num_list) {

  // sort로 오름차순 정렬 
  const sortNum = num_list.sort(function (a,b) {
    return a - b
  })
  // 5개만 잘라서 출력
  const answer = sortNum.slice(0, 5)
  
  console.log(sortNum)
  return answer; // 결과 : [1, 4, 12, 14, 15]
}




