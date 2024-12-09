//number type literal
7; // 정수 리터럴
2.5; // 부동 소수점 리터럴
0b111; // 2진수 리터럴 (binary literal)
0o777; // 8진수 리터럴 (octal literal)
0xf5; // 16진수 리터럴 (hex literal)
10_000 // 숫자 구분 기호 (Numeric Separators)

console.log(typeof 7);
console.log(typeof 0b111);

// 정수와 실수를 별도의 타입으로 다루지는 않음
// 정수인지 실수인지 판별하기 위해 Number.isInteger 메소드 사용

console.log(Number.isInteger(1)); //true
console.log(Number.isInteger(0.1)); //false
console.log(10_000); // , 대신 사용


// 숫자 연산자
2 ** 3; // 거듭제곱

// 증감 연산
let a = 1; 
console.log(++a); // 연산결과 2, a는 2


// 후위 증가 연산자
// 변수의 현재 값을 반환한 후에 값이 1 증가
// 먼저 원래 값을 사용하고 그 다음에 변수를 증가 시키는 방식
let b = 1; 
console.log(b++) // 연산결과는 1, b는2
console.log(b)   // 이제 연산결과가 2


// 할당 연산
// x에 1을 더한후 다시 x에 할당하기
let x = 0;
x += 1;
x -= 1;
x *= 2;
x /= 3;
x %= 4;
x **= 5;


// js는 정수와 실수 모두 부동소수점으로 처리하기 때문에 큰 정수에 대해서도 표현 및 연산의 오차를 보임
// 실수 연산을 하는 프로그램을 만들 때에는, 어떤 유형의 실수 연산을 필요로 하는지 파악한 후 선택해야 함
console.log(10000000000000001 + 10000000000000002);
console.log(12345678901234567890);
console.log(0.1+0.2);


// 특이한 number 값들

// Not a Number 계산 불가능한 연산의 결과값
// 유일하게 자기 자신과 같지 않은 값
Nan
1 * hello 

// Nan 판별
const thisIsNan = NaN;

thisIsNan == NaN; // false

// 이렇게 해야 합니다
Number.isNaN(thisIsNan);
Object.is(thisIsNan, NaN);



// -0
// JavaScript에서 0과 -0은 별개의 값이지만, 비교 연산을 해보면 결과값이 true로 나옵니다. 즉 거의 모든 경우에 0과 같은 값으로 간주됩니다.
0 == -0; // true
1 * -0; // -0
1 * 0; // 0

// 단, Object.is 함수는 0과 -0을 다른 값으로 취급합니다.
// Object.is()는 두 개의 인자를 받아 비교합니다.
// 반환값은 두 인자가 같은 값인지를 나타내는 불리언(true 또는 false)입니다.
Object.is(0, -0); //false


// 무한대
1 / Infinity; // 0
1 / -Infinity; // -0

// 무한대 판별
// Number.isFinite() 값이 유한한지 확인하는 메서드. 오직 숫자 타입에 대해서만 treu를 반환
Number.isFinite(1); //true
Number.isFinite(Infinity); //false
Number.isFinite('1'); // false
isFinite('1'); // true , isFinite 함수는 문자열을 숫자로 반환합니다.


// 문자열을 number type으로 바꾸기
parseInd('123');
parseInt('110', 2); // 6 (문자열을 2진수로 간주한다.)
parseInt('12.345');
parseInt('hello');  // NaN


// number type과 다른 타입간의 연산또한 허용
// 그러나 피연산자로 어떤 타입이 오는지, 어떤 연산자를 사용하느냐에 따라 결과값의 타입이 달라지기 때문에 => 연산을 피하는 것이 좋음
1 + null; //null
1 * '1'; //NaN
1 + '1'; //'11'
1 - '1'; //0


// Math 객체
// 상수
Math.E // 자연상수 (2.71...)
Math.PI // 원주율 (3.14...)

// 삼각함수, 로그함수, 지수함수
Math.sin // 사인
Math.cos // 코사인
Math.tan // 탄젠트
Math.log // 밑을 자연상수로 하는 로그함수
Math.exp // 밑을 자연상수로 하는 지수함수
Math.sqrt // 제곱근

// 절대값, 올림, 내림, 반올림, 소수점 아래 잘라내기
Math.abs // 절댓값
Math.ceil // 올림
Math.floor // 내림
Math.round // 반올림
Math.trunc // 소수점 아래 잘라내기

// 최대값, 최소값
Math.max
Math.min

// 랜덤
Math.random

// 예시
Math.cos(Math.PI); // -1
Math.log(Math.E); // 1
Math.round(0.5); // 1
Math.random(); // 0과 1 사이의 값이 임의로 반환됩니다.
Math.max(1, 2, 3, 4, 5); // 5


//number 타입의 메소드
// wrapper object : numbertype은 객체가 아니지만 마치 객체처럼 메소드를 사용할 수 있습니다. 
(12345).toString(); //'12345'
(12345).toLocaleString(); //'12,345'
(1.2345).toFixed(2); // '1.23'