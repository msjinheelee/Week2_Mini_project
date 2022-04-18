

let name = prompt("Hello, What is your name?");
alert("Hello, " + name + "!");

const info = require('info');

// TODO: Add comments to explain each of the three arguments of appendFile() \n means new line
info.appendFile('log.txt', `${process.argv[2]}\n`, (err) =>
  // TODO: Describe how this ternary operator works
  err ? console.error(err) : console.log('Commit logged!')
);

// variables
name="mike"; string
age="30";
alert(name)

let name ="mike";
let name ="google"
// let something that can be changed
const 
//  somethign that can never be changed, delare everything with const and later change with let
const my_home ="...";
let _ = 1;
let $ = 3;

name="mike"; string
age="30";

const name1 = "mike";
const name2 = 'mike';
const name3 = `mike`;

const message = "I'm a boy.";
const message2 = 'I\'m a boy.';
const message3 = `my name is ${name}`;

console.log(message3)
==> "my name is mike"

const message4 = 'I\'m ${30+1} years old';
console.log(message4)
==> "I'm 31 years old"


const age = 30;

const a = true; 
const be = false; 
const name = "mike";
const age =30;

console.log(name == "mike")
==> true
console.log(age>40)
==> false

const name ="mike";
console.log(typeof 3); Number
console.log(typeof name); string
console.log(typeof true); Boolean
console.log(typeof "xxx"); string 
console.log(typeof null); Object
console.log(typeof undefined); undefined

const name ="mike";
const a = `i'm`;
const b = "years old";
console.log(a+name+b);
const age = 30;
console.log(a+age+b+name)


const name = prompt("이름을 입력하세요");
alert("환영합니다, "+name+"님");

const name = prompt("이름을 입력하세요");
alert(`환영합니다, ${name}님`);

const name = prompt("예약일을 입력해주세요.", "2022-04-"); 첫번째값은 안내말 두번째 값은 디폴트값 필드에 들어가는말

const isAdult = confirm("당신은 성인 입니까?");
console.log(isAdult) 얼러트는 확인 버튼만 있지만 컨펌은 확인과 취소가 같이 있음, 확인을 눌렸을경우 true 라고 입력되고 취소를 누르면 false 라고 뜸

const mathScore = promt("수학 몇점?");
const engScore = promt("영어 몇점?");
const result = (mathScore + engScore) /2;
console.log(result)

prompt로 입력받은 값은 무조건 문자형, 숫자형으로 계산되지 않음

console.log(
  String(3),
  String(true),
  String(false),
  String(null),
  String(undefined)
)
==> "3" "true" "false" "null" "undefined"

console.log(
  Number(true),
  Number(false),
)
==> 1, 0 

let num = 10;

num = num +5; 
num += 5; same as above
num *= 5; 
num -= 5; 
num %= 5; 

증가연산자, 감소연산자
let num =10; 
num++;
let result = num++; 숫자는 그대로, 증가하기 전값을 줌
let result = ++num; 숫자는 1 증가됨, 증가하고 난 값을 줌


console.log(num)
==> 10
==> 15

console.log(10>5); 10이 5보다 크다 
console.log(10==5); 10과 5는 같다 
console.log(10 !=5); 10과 5는 같지 않다

==> true, false, true

const a = 1; 
const b = "1"; 

console.log(a == b); 
==> true, == 값이 같은지만 비교함

console.log(a === b);
==> false, === 타입까지 같은지 비교함


if(age > 19){
console.log(`환영합니다.`); 
}
if(age <= 19){
  console.log(`안녕히가세요`); 
  }


if else else if 
추가요구 
19살이면 수능잘치세요 라는 문구를 보여주세요
비교연산자 조건문


const age = 30; 
age === 19; 

if(age > 19){
  console.log("환영합니다");
} else if(age === 19){
  console.log("수능잘치세요");
} else {
  console.log("환영합니다");
}


논리연산자

|| or 
&& AND 
! NOT 

const name ="mike";
const age =30;
if(name === "tom"|| age >19){
  console.log("pass");
}  
if(name === "mike"|| age >19){
  console.log("pass");
} else{
  console.log("fail");
}

나이를 입력받아 성인이 아니면 돌아가
const age = prompt("나이가?");
const isAdult = age > 19;
if(!isAdult){
  console.log("fail")
}


우선순위 
남자이고, 이름이 마이크이거나 성인이면 통과

const gender = "F";
const name ="Jane";
const isAdult ="true"; 

if (gender === "m" && (name === "mike" || isAdult)){
  console.log("pass")
}else {
  console.log("fail")
}

반복문 for - false 가 되면 멈춤
for(let i = 0; i<10; i++){
  반복할 코드 
}
(초기값, 조건, 코드 실행후 작업 )
i=0 i 가 10보다 작으므로 코드실행, i값 1씩 증가  i=1

코드를 빠져나오는 break 

while(true){
  let answer = confirm("계속 할까요?");
  if(!answer){
    break;
  }
}

for(let i=0; i<10; i++){
  if(i%2){
    continue;
  }
  console.log(i);
}

함수 
함수 함수명 매개변수 (함수명은 자유롭게 변환가능, 매개변수는 지금처럼 한개, 두개일수도 있고 두개보다 많을 수도 있음, 매개변수가 많으면, 쉼표로 구분할수 있음 console.log(name1, name2, name3))
function sayhello(name){
  console.log(`hello ${name}`); 
}

sayhello("mike")

매개변수가 없는 함수
function showError(){
  alert(`에러가 발생했습니다. 다시 시도해주세요`);
}

showError();

매개변수가 있는 함수 
function sayHello(name){
  const msg = `hello, ${name}`;
  console.log(msg);
}

sayHello("Mike");























































































































