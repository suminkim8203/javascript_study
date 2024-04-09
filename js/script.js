const scores = [88, 75, 95, 62, 18];

for (let score of scores) {
  console.log(score);
}

const member = { id: "kdhong", username: "홍길동", age: 30 };

// 객체의 요소 수 만큼 (해당 예제는 세 번) 반복 루프 진행
for (let x in member) {
  console.log(member[x]);
}
