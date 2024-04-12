// 생성자 함수의 객체 생성 예시

// 생성자 함수 Member는 세 개의 매개변수 id, name, age를 가진다.
function Member(id, name, age) {
  // 키워드 this는 생성자 함수로 생성되는 객체 자신을 의미
  // 따라서 this.id는 객체 자신의 프로퍼티 id를 의미
  this.id = id;
  this.name = name;
  this.age = age;
  this.getName = function () {
    return `이름은 ${this.name}입니다.`;
  };
}

const member1 = new Member("kdhong", "홍길동", 30);
const member2 = new Member("sumin", "김수민", 23);
const member3 = new Member("soyeon", "배소연", 24);

let text = "";
// 이름만 출력
text += `${member1.name} <br>`;
text += `${member2.name} <br>`;
text += `${member3.name} <br>`;
// 이름은 name 입니다로 출력
text += `${member1.getName()} <br>`;

document.getElementById("show").innerHTML = text;
