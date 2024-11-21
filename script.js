"use strict";
// Вложенности Объектов

const options = { // Объект
    name: 'test', // Ключ - Значение
    width: 1024, // ..
    height: 1024, // ..
    colors: { // Вложенный объект
        border: 'black', // Вложенные свойства
        bg: 'red' // ..
    }
};

/* console.log(options ['colors']['border']);  */
// выводит из объекта options, вложенный объект [colors] [border] - black

/* console.log(options.name); */

/* delete options.name; */ // удаляет вложенный объект из options

/* console.log(options);  */

let counter = 0; 
// создаем счетчик для считания всех вложенностей
for (let key in options) {
    if (typeof(options[key]) === 'object')
        // переменная key внутри объекта options
        {
        for (let i in options[key]) { 
            // свойство for in позволяет делать вложенности внутри объекта
            console.log(`Свойство ${i}, имеет значение ${options[key][i]}`); 
            // переменная i перебирает свойства внутри объекта options и вложенной в него переменной key
            counter++; // счетчик высчитает все вложенности
        }
    } else {
        console.log(`Свойство ${key}, имеет значение ${options[key]}`);
        counter++; // счетчик высчитает все вложенности
        // переменная key перебирает свойства внутри объекта options
    }
}

console.log(counter); 
// выводим общее количество свойств 

// Функции и Методы объектов (что они умеют делать)

const options = {
    name: 'test',
    width: 1024,
    height: 1024,
    colors: { // Вложенный объект
        border: 'black', // Вложенные свойства
        bg: 'red' // ..
    },
    // Функция makeTest является методом объекта options
    makeTest: function() { 
        console.log("Test");
    }
};

options.makeTest(); 

/* console.log(Object.keys(options).length); */
// Встроенный Метод Object.keys() принимает объект в качестве аргумента и возвращает массив, содержащий все ключи этого объекта (на первом уровне вложенности). 

//.length, свойство которое возвращает количество элементов в этом массиве. // 4

// ДеСтруктуризация
const {border, bg} = options.colors; 
// вытаскием свойства border, bg как отдельную переменную
console.log(border); 
// выводим значение свойства border в консоль