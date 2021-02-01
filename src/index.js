// const obj = { name: "Go", age: 28, tall: 160 };

// const { age, name, tall } = obj;

// console.log(name);
// console.log(age);
// console.log(tall);

// const { age: a, name: n, tall: t } = obj;
// console.log(a);
// console.log(n);
// console.log(t);

// let a = 10, b = 20;
// [a, b] = [b, a];
// console.log(a);
// console.log(b);

// const fn = (x, y, z) => {
//   console.log(x);
//   console.log(y);
//   console.log(z);
// };

// const arr = [1, 2, 3];
// fn(...arr);

/**
 * map
 */
const nameArr = ["Yamada", "Tanaka", "Iwamoto"];
const nameArr2 = nameArr.map((name) => `name: ${name}`);
nameArr2.map((name) => console.log(name));
