// 이상한 문자 만들기 입출력 예
// s	                return
// "try hello world"	"TrY HeLlO WoRlD"

function solution(s) {
  let answer = "";
  let idx = 0;

  for (let i = 0; i < s.length; i++) {
    if (s[i] === " ") {
      answer += " ";
      idx = 0;
      //s의 i인덱스 값이 빈문자열일 경우 answer에도 빈문자열 추가 후 idx값 초기화.
    } else {
      answer += idx % 2 === 0 ? s[i].toUpperCase() : s[i].toLowerCase();
      idx++;
    }
  }
  return answer;
}
