//#69
/*
Порівняння з оператором "більше ніж"
Трапляється, що потрібно перевіряти більше ніж одну цифру одночасно. Оператор "більше ніж" && стає true якщо вихідні об'єкти справа та зліва від нього вірні.

Такого ж результату можна досягнути шляхом закладання інформації всередині іншого:

if (num > 5) {
  if (num < 10) {
    return "Yes";
  }
}
return "No";
результат Yes, якщо num є більшим 5 та меньшим за 10. Приклад оператора наведено нище:

if (num > 5 && num < 10) {
  return "Yes";
}
return "No";
Замініть два оператора if statements одним використовуючи && оператор. Значення рядка буде Yes, якщо val меньше або рівне 50 та більше або рівне 25. В іншому випадку значення рядка стане No.
*/

function testLogicalAnd(val) {
    // Only change code below this line
  
    if (val <= 50 && val >= 25) {
        return "Yes";
    }
  
    // Only change code above this line
    return "No";
  }
  
  testLogicalAnd(10);