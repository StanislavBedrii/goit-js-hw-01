let input;
let total = 10;

do {
  input = prompt("Введите число");

  console.log(Number(input));

  if (Number(input)) {
    total += Number(input);
  } else if (input === null) {
    alert(`Общая сумма чисел равна ${total}`);
  } else {
    alert("Было введено не число, попробуйте еще раз");
  }
} while (input !== null);

console.log("total", total);
