alert('과제1');

for (let i = 2; i <= 10; i++) {
    if (i % 2 == 0) {
      alert( i );
    }
}

alert('과제2');
for (let i = 0; i < 3; i++) {
    alert( `number ${i}!` );
}

alert('과제3');
let num;

do {
    num = prompt("100을 초과하는 숫자를 입력해주세요.", 0);
} while (num <= 100 && num);

alert('과제4');
let n = 10;

nextPrime:
for (let i = 2; i <= n; i++) { // 각 i에 대하여 반복문을 돌림

  for (let j = 2; j < i; j++) { // 제수(나눗수)를 찾음
    if (i % j == 0) continue nextPrime; // 소수가 아니므로 다음 i로 넘어감
  }

  alert( i ); // 소수
}