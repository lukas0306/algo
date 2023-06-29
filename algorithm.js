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

//시저 암호
//어떤 문장의 각 알파벳을 일정한 거리만큼 밀어서 다른 알파벳으로 바꾸는 암호화 방식을 시저 암호라고 합니다.
//예를 들어 "AB"는 1만큼 밀면 "BC"가 되고, 3만큼 밀면 "DE"가 됩니다. "z"는 1만큼 밀면 "a"가 됩니다.
//문자열 s와 거리 n을 입력받아 s를 n만큼 민 암호문을 만드는 함수, solution을 완성해 보세요.

function solution(s, n) {
  let answer = "";
  for (let i = 0; i < s.length; i++) {
    if (s[i] === " ") {
      answer += " ";
      continue;
    }
    let index = s[i].charCodeAt() + n;
    if (index > 122 || (index > 90 && index - n < 97)) {
      index = index - 26;
    }
    answer += String.fromCharCode(index);
  }
  return answer;
}

//k번째 수

function solution(array, commands) {
  let answer = commands.map((el) => {
    const result = array.slice(el[0] - 1, el[1]).sort((a, b) => {
      return a - b;
    });
    return result[el[2] - 1];
  });

  return answer;
}

//두 개 뽑아서 더하기

function solution(numbers) {
  let answer = [];

  for (let i = 0; i < numbers.length; i++) {
    for (let l = i + 1; l < numbers.length; l++) {
      const sum = numbers[i] + numbers[l];
      if (answer.includes(sum) === true) answer.push(sum);
    }
  }
  return answer.sort((a, b) => a - b);
}

//폰켓몬

function solution(nums) {
  const answer = new Set(nums).size;
  //폰켓몬 최대 개수
  const limit = nums.length / 2;
  console.log(answer, limit);

  if (limit >= answer) {
    return answer;
  }
  return limit;
}

//실패율

function solution(N, stages) {
  stages.sort((a, b) => a - b);

  const answer = new Array(N).fill(1).map((el, i) => {
    const stage = el + i;
    const stageInfo = { stage: stage, users: 0, fail: 0 };

    stages.forEach((user, i) => {
      if (user === stage) {
        stageInfo.users += 1;

        if (stages[i + 1] !== stage) {
          stageInfo.fail = stageInfo.users / stages.length;
          stages.splice(0, stageInfo.users);
        }
      }
    });
    return stageInfo;
  });
  const result = answer
    .sort((a, b) => {
      return b.fail - a.fail;
    })
    .map((el) => el.stage);

  return result;
}

//다트 게임

function solution(dartResult) {
  var answer = 0;
  let score = 0;
  let cnt = [];
  for (let i = 0; i < dartResult.length; i++) {
    //점수가 주어질때
    if (!isNaN(dartResult[i])) {
      //i-1이 1이고 i가 숫자면 10점.. //즉 10점인 경우와 그 외의 경우 처리
      score = Number(dartResult[i - 1]) === 1 ? 10 : Number(dartResult[i]); //보너스 S일때
    } else if (dartResult[i] === "S") {
      cnt.push(score); //보너스 D일때
    } else if (dartResult[i] === "D") {
      cnt.push(Math.pow(score, 2)); //보너스 T일때
    } else if (dartResult[i] === "T") {
      cnt.push(Math.pow(score, 3)); //옵션 *일떄
    } else if (dartResult[i] === "*") {
      cnt[cnt.length - 2] = cnt[cnt.length - 2] * 2;
      cnt[cnt.length - 1] = cnt[cnt.length - 1] * 2; //옵션 #일때
    } else if (dartResult[i] === "#") {
      cnt[cnt.length - 1] = -1 * cnt[cnt.length - 1];
    }
  } //3개의 점수 합산
  answer = cnt.reduce((acc, cur) => acc + cur, 0);
  return answer;
}

//
