# 2. variable(변수)

- 데이터가 컴퓨터 메모리에 저장되는 주소

## 2.1 변수 선언

- var, let, const 키워드
- const를 주로 사용하고 안 되면 let으로 바꾸자.
  - var 사용 지양하기

```js
let keyword = "키워드 let으로 변수 name을 선언";
console.log(keyword);

//   필요에 따라 값을 재할당 할 수 있다.
keyword = "변수 name에 홍길동 저장 name은 홍길동 값을 가짐";
console.log(keyword);
```

## 2.2 변수 이름 짓기

- 변수 이름에는 영어, 숫자, 밑줄, 특수문자 사용가능
- **숫자로 시작하면 안 됨!**
- 대소문자 반드시 구분
- 일반적으로 카멜케이스 사용

```js
const a = 5;
const font1 = "돋움";
const _price = 3000;
const maxWith = 600;
const max_width = 800;
```
