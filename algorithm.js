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

//수박수박수박수?
//길이가 n이고, "수박수박수박수...."와 같은 패턴을 유지하는 문자열을 리턴하는 함수, solution을 완성하세요.
//예를들어 n이 4이면 "수박수박"을 리턴하고 3이라면 "수박수"를 리턴하면 됩니다.

function solution(n) {
  let answer = "";
  for (let i = 1; i <= n; i++) {
    i % 2 === 1 ? (answer += "수") : (answer += "박");
  }
  return answer;
}
