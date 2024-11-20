//string type
typeof 'hello';  //string


//문자열 리터럴
'hello';
"hello";
`hello world`; // template literal
'hello' === "hello"; // true

// template literal
// 추가 기능을 지원하는 문자열 리터럴의 일종

`hello world`;

//template literal의 내삽(interpolation) 기능을 이용하면 문자열을 동적으로 생성하는 코드를 쉽게 작성할 수 있습니다.
const name1 = 'Foo';
const name2 = 'Bar';
const sentence = `${name1} meets ${name2}!`;
console.log(sentence); // Foo meets Bar!

//일반적인 문자열 리터럴로는 
name1 + ' meets ' + name2 + '!';

// 여러 줄로 이루어진 문자열을 표현
`hello
world
hello
javascript!`

'hello\nworld\nhello\njavascript!\n' // 일반 문자열 리터럴


// Escape Sequence
// 특수문자를 문자열에 넣거나, 유니코드 코드 포인트를 사용해서 문자를 넣을 수 있도록 
console.log('lorem \'ipsum\'');  // lorem 'ipsum'
console.log('line\nfeed');  // line(줄바꿈)feed
console.log('\uD55C\uAE00'); // 한글
console.log('\u{1F435}'); // 🐵

// 리터럴을 위해 사용한 따옴표와 다른 종류의 따옴표는 문자열 내에서 자유롭게 쓸 수 있기 때문에 escape sequence로 표기하지 않아도 됨
"`lorem` 'ipsum'";
'`lorem` "ipsum"';
`'lorem' "ipsum"`;


// 문자열과 연산자
// 문자열 연결하기
'hello' + 'world';  // 'helloworld'

//등호비교
'hello' === 'hello' // true
'hello' !== 'hello' // false

// 유니코드 코드포인트 비교. 앞에서부터 한 글자씩 차례대로 비교합니다.
'a' < 'b'; // true
'aaa' < 'abc'; // true
'a' < 'Z'; // false
'한글' < '한국어'; // false
'2' < '10'; // false

// 사전순 비교 : localeCompare
'b'.localeCompare('a'); // 1
'b'.localeCompare('b'); // 0
'b'.localeCompare('z'); // -1

// 문자열을 배열로 바꾸기
[...'hello']; // [ 'h', 'e', 'l', 'l', 'o' ]


// 속성과 메소드

// 문자열의 길이
'hello'.length; //5

// 여러 문자열 연결하기
'hello'.concat('fun', 'javascript'); // hellofunjavascript

// 특정 문자열을 반복하는 새 문자열 생성하기
'*'.repeat(3); //'***'

// 특정 문자열이 포함되어 있는지 확인하기
'hello javascript'.includes('hello'); // true
'hello javascript'.startsWith('he'); // true
'hello javascript'.endsWith('ript'); // true
'hello javascript'.indexOf('java'); // 6 ,  문자열 내에서 지정된 부분 문자열의 첫 번째 등장 위치(인덱스)를 반환. 대소문자를 구분하기 때문에 주의

// 문자열의 특정 부분을 바꾼 새 문자열 생성하기
'hello javascript'.replace('java', 'type'); // hello typescript

// 문자열의 일부를 잘라낸 새 문자열 생성하기
'hello'.slice(2, 4); // ll

// 좌우 공백문자를 제거한 새 문자열 생성하기
'   hello  '.trim(); // 'hello'
'   hello  '.trimLeft(); // 'hello  '
'   hello  '.trimRight(); // '   hello'

// 좌우 공백문자를 추가한 새 문자열 생성하기
'hello'.padStart(8); // '   hello'
'hello'.padEnd(8); // 'hello   


// 문자열을 특정 문자를 기준으로 잘라 새 배열 생성하기
'hello!fun!javascript'.split('!'); // [ 'hello', 'fun', 'javascript' ]
'hello'.split(''); // [ 'h', 'e', 'l', 'l', 'o' ]


// 모든 문자를 소문자, 혹은 대문자로 변환한 새 문자열 생성하기
'Hello JavaScript'.toLowerCase();
'Hello JavaScript'.toUpperCase();