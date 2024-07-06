/*1)დაწერეთ შემდეგი სკრიპტი:
 მოცემულია ცვლადი, რომლის მნიშვნელობაა 100.
 დაწერეთ if პირობა, თუ ცვლადის მნიშვნელობა ნაკლებია 50ზე დაუბეჭდოს - ნაკლებია 50ზე, თუ ცვლადის მნიშვნელობა მეტია 20ზე დაიბეჭდოს მეტია 20ზე, ყველა სხვა დანარჩენ შემთხვევაში დაიბეჭდოს - შეცდომა.*/
let number = 100;
if (number < 100) {
  console.log("ნაკლებია 50-ზე");
} else if (number > 20) {
  console.log("metia 20-ze");
} else {
  console.log("error");
}
/*2)მოცემულია ცვლადი, რომლის მნიშვნელობაა მარიამ. ახალი if ის სინტაქსით დაწერეთ, თუ ცვლადის მნიშვნელობა უდრის მარიამ-ს დაიბეჭდოს - true, ყველა სხვა დანარჩენ შემთხვევაში დაიბეჭდოს - false; */
let name = "mariam";
console.log(name == "mariam" ? true : false);
/*3)მოცემულია ცვლადი, რომლის მნიშვნელობაა მარიამ. switch case ის საშუალებით დაწერეთ, თუ ცვლადის მნიშვნელობა უდრის მარიამ-ს დაიბეჭდოს - true,ყველა სხვა დანარჩენ შემთხვევაში დაიბეჭდოს - false; */
let saxeli = "mariami";
switch (saxeli) {
  case "mariami":
    console.log(true);
    break;
  default:
    console.log(false);
}
// 4)ციკლის საშუალებით გამოიტანეთ რიცხვები 5დან - 100მდე
for (let i = 5; i <= 100; i++) {
  console.log(i);
}
/* 5)მოცემულია მასივი:
let array1= [1, 2, 4, 1, -3, 8, 7, 0, -5, 18, 12];
ციკლის საშუალებით გამოიტანეთ მხოლოდ ის რიცხვები რომლებიც მეტია 0 ზე და ნაკლებია 10ზე*/
let array1 = [1, 2, 4, 1, -3, 8, 7, 0, -5, 18, 12];
for (let i = 0; i < array1.length; i++) {
  if (i > 0 && i < 10) {
    console.log(i);
  }
}
// 6)
let user2 = {
  name: "anna",
  age: 20,
  stidentsstatus: "active",
};
if (user2.age < 18 && user2.stidentsstatus === "active") {
  console.log("heelo user");
} else if (user2.name === "levan") {
  console.log("hello levan");
} else if (user2.stidentsstatus === "active" || user2.age < 25) {
  console.log("hello anna");
} else {
  console.log("error");
}
// using ternary
let user3 = {
  name: "anna",
  age: 20,
  stidentsstatus: "active",
};
let message =
  user3.age < 18 && user3.stidentsstatus === "active"
    ? "hello user"
    : user3.name === "levan"
    ? "hello levani"
    : user3.stidentsstatus === "active" || user3.age < 25
    ? "hello anna;"
    : "error;";
console.log(message);

/*7)მოცემულია მასივი:
let array6 = [ 2, 3, 5, 10,25,24,11, 100 , 6,7, 10 ]
ამოიღეთ მხოლოდ ლუწი რიცხვები*/
let array6 = [2, 3, 5, 10, 25, 24, 11, 100, 6, 7, 10];
for (let i = 0; i < array6.length; i++) {
  if (array6[i] % 2 == 0) {
    console.log(array6[i]);
  }
}
// 8)
let users = [
  { username: "giorgi", status: false },
  { username: "levani", status: false },
  { username: "anna", status: true },
];
for (let i = 0; i < users.length; i++) {
  if (users[i].status) {
    console.log(users[i]);
  }
}
