1 < 2; // true
1 > 2; // true
3 === 3; // true
3 !== 3; // false
Number.isFinite(Infinity); // false, 주어진 값이 유한한 숫자인지 확인합니다. & Infinity는 무한대로 유한하지 않습니다.
Number.isNaN(NaN); // false 주어진 값이 숫자가 아닌지 확인합니다. & NaN은 숫자가 아님을 나타내는 값입니다.
'hello'.includes('ll'); //true


// 논리연산자

// 논리부정 (Logical NOT)
!true; // false
!false; // true

//논리 합 (Logical OR)
true || true; // true
true || false; // true
false || true; // true
false || false; // false


// 논리곱 (Logical AND)
true && true; //true
true && false; // false
false && true; // false
false && false; // false


// 할당연산 (assignment operators)

// ||= 는 변수의 값이 true이면 아무 변화가 일어나지 않고, false이면 우항의 값이 변수에 할당됩니다.
// "값이 없으면 이걸로 채워넣어"
let x = false;
x ||= true; //true
// 기본값 설정이나 빈 문자열, null , undefined 등을 대체할 때 사용합니다.
let name = "";
name ||= "Anonymous"; // name은 "Anonymous"가 됩니다

let username = "Alice";
username ||= "Guest"; // username은 여전히 "Alice"입니다


// &&= 는 변수의 값이 false이면 아무 변화가 일어나지 않고 true이면 우항의 값이 변수에 할당됩니다.
// "값이 있으면 이걸로 바꿔"
let y = true;
y &&= false; // false

// 조건부 업데이트 때, 특정 조건이 충족될 때만 값을 변경하고 싶을 때
let isLoggedIn = true;
isLoggedIn &&= false; // isLoggedIn은 false가 됩니다

let count = 0;
count &&= 5; // count는 여전히 0입니다


// ||=와 &&=는 각각 아래 연산과 같은 동작을 합니다.
x = x || true
y = y && false


// 연산자 우선순위
// 한 구문에 여러개의 연산자를 이어쓸 경우 어떤 연산자는 먼저 계산되고, 어떤 연산자는 나중에 계산됩니다.
// 1. &&가 || 보다 우선순위가 높습니다.
// 2. ()는 가장 높은 우선순위를 가집니다.

true || true && false; // true
(true || true) && false; // false
true|| false && false; // true
(true || false) && false; // false


// 논리 연산 법칙
// a, b, c가 **모두 boolean 타입**이라고 할 때, 다음 식의 결과값은 a, b, c의 값과 관계 없이 모두 true 입니다.

// 이중부정
!!a == a;

// 교환법칙
a || b === b || a;
a && b === b && a;

// 결합법칙
(a || b) || c === a || (b || c);
(a && b ) && c === a && (b && c);

// 분배 법칙
a || (b && c) === (a || b) && (a || c);
a && (b || c) === (a && b) || (a && c);

// 흡수 법칙
// 중복되는 항을 제거하여 식을 단순화 하는 규칙
a && (a || b) === a;
a || (a && b) === a;

// 드 모르간의 법칙
!(a || b) === !a && !b;
!(a && b) === !a || !b;


// truthy & falsy
// boolean 타입이 와야하는 자리에 다른 타입의 값이 와도 에러가 나지 않고 실행됩니다.
// truthy : true로 취급되는 값 ( falsy로 취급되는 값 외에 전부 truthy )
// falsy : false로 취급되는 값 ( false, null, undefined, 0, NaN, '' )
if (1) {
  console.log('이코드는 실행됩니다.')
}

if (0) {
  console.log('이코드는 실행되지 않습니다.')
}


// 다른 타입의 값을 진리값으로 변환하기 
// 어떤 값을 명시적으로 boolean 타입으로 변환하기
!!'hello'; // true
Boolean('hello'); //true
