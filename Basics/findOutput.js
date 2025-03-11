// const async1 = async () => {
//   console.log('async1');
//   setTimeout(() => console.log('timer1'), 2000);
//   await new Promise((resolve) => {
//     console.log('promise1');
//     console.log('async1 end');
//     resolve('async1 success');
//   });
// };

// console.log('script start');
// async1().then((res) => console.log(res));
// console.log('script end');

// Promise.resolve(1)
//   .then(() => 2)
//   .then(() => Promise.resolve(3))
//   .catch(() => 4)
//   .then((res) => console.log(res));

// setTimeout(() => {
//   console.log('timer2');
// }, 0);


function Foo() {
  print = function () { console.log(1); };
  return this;
}

Foo.print = function () { console.log(2); };
Foo.prototype.print = function () { console.log(3); };
var print = function () { console.log(4); };
function print() { console.log(5); }

new Foo.print();
print();
// Foo().print();
new Foo().print();
print();
