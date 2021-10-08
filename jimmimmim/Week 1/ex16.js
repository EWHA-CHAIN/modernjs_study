alert('과제1');
// 마지막 값: 1
let i = 3;

while (i) {
  alert( i-- );
}

alert('과제2');
// 1부터 4까지 출력
let i = 0;
while (++i < 5) alert( i );

alert('과제3');
// 1부터 5까지 출력
let i = 0;
while (i++ < 5) alert( i );

alert('과제4');
// 0부터 4까지 출력
for (let i = 0; i < 5; i++) alert( i );

alert('과제5');
for (let i = 0; i < 5; ++i) alert( i );