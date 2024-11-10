const person = {
  name: "Alice",
  age: 21,
  hello: function () {
    console.log(`hello! My name is ${this.name}`);
  },
  location: "seoul",
};

// 1. console로 name 출력
const myname = person.name;
console.log(myname);

// 2. hello 함수 출력
person.hello();

// 3. person 객체에 gender라는 속성 넣고 gender를 온점표기법으로 출력
person.gender = "female";
console.log(person.gender);

// 4. person 객체에 bye라는 함수를 넣고 bye 온점표기법으로 출력
person.bye = function () {
  console.log(`bye ${this.name}`);
};
person.bye();
// 5. person의 location 삭제 후 객체 콘솔로 출력
delete person.location;
console.log(person);
