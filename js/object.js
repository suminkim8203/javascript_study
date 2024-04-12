const cat = {
  name: "운",
  species: "스코티쉬폴드",
  color: "연회색",
  age: 5,
  intro: function () {
    return `우리집 고양이 이름은 ${this.name} 입니다.`;
  },
};

cat.getAge = function () {
  return `나이는 ${this.age}살 입니다.`;
};

document.getElementById("show").innerHTML = cat.getAge();
