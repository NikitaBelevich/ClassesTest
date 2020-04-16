"use strict";



/* 
Препишите класс
Класс Clock написан в функциональном стиле. Перепишите его, используя современный синтаксис классов.

function Clock({ template }) {
  
    let timer;
  
    function render() {
      let date = new Date();
  
      let hours = date.getHours();
      if (hours < 10) hours = '0' + hours;
  
      let mins = date.getMinutes();
      if (mins < 10) mins = '0' + mins;
  
      let secs = date.getSeconds();
      if (secs < 10) secs = '0' + secs;
  
      let output = template
        .replace('h', hours)
        .replace('m', mins)
        .replace('s', secs);
  
      console.log(output);
    }
  
    this.stop = function() {
      clearInterval(timer);
    };
  
    this.start = function() {
      render();
      timer = setInterval(render, 1000);
    };
  
  }
  
  let clock = new Clock({template: 'h:m:s'});
  clock.start();
*/


// class Clock {
//     constructor(template) {
//         this.template = template;
//     }
    
//     render() {
//         let date = new Date();


//         let hours = date.getHours();
//         if (hours < 10) hours = '0' + hours;

//         let mins = date.getMinutes();
//         if (mins < 10) mins = '0' + mins;

//         let secs = date.getSeconds();
//         if (secs < 10) secs = '0' + secs;

//         let output = this.template
//             .replace('h', hours)
//             .replace('m', mins)
//             .replace('s', secs);
//         console.log(output, this.timer);
//     }

//     start() {
//         this.timer = setInterval(() => {this.render()}, 1000);
//     }
//     stop() {
//         clearInterval(this.timer);
//     }
    
// }

// let clock1 = new Clock('h:m:s');
// clock1.start();

// console.log(clock1);


// В этом ката ваша задача - создать словарь класса, в который вы можете добавлять слова и их записи. 
class Dictionary {
    constructor() {

    }
    newEntry(key, value) {
        this[key] = value;
    }
    look(key) {
        let propertyValue = this[key];
        if (propertyValue === undefined) return `Can\'t find entry for ${key}`;
        console.log(key);
    }
}

let dictionary1 = new Dictionary();
dictionary1.newEntry('Apple', 'A fruit that grows on trees');
console.log(dictionary1);
dictionary1.look('Apple');



class Animal {
    constructor(name) {
        this.name = name;
    }
}

class Rabbit extends Animal {
    constructor(name) {
        super(name);
        this.created = Date.now();
    }
    eat() {
        console.warn('Хрум-хрум');
    }
}

let rabbit = new Rabbit("Белый кролик"); // Error: this is not defined

console.log(rabbit);


//Улучшенные часы
class Clock {
    constructor(...args) {
        this.template = args[0];
    }

    render() {
        let date = new Date();

        let hours = date.getHours();
        if (hours < 10) hours = '0' + hours;

        let mins = date.getMinutes();
        if (mins < 10) mins = '0' + mins;

        let secs = date.getSeconds();
        if (secs < 10) secs = '0' + secs;

        let output = this.template
            .replace('h', hours)
            .replace('m', mins)
            .replace('s', secs);
        console.log(output);
    }
    start() {
        this.timer = setInterval(() => {
            this.render();
        }, 1000);
    }
    stop() {
        clearInterval(this.timer);
    }

}
    
class ExtendedClock extends Clock { // расширили поведение часов, сделав тик реже
    constructor(...args) {
        super(...args);
        let [,precision = 1000] = args;
        this.precision = precision;
    }
    start() {
        this.timer = setInterval(() => {
            this.render();
        }, this.precision);
        
    }
}

let clock1 = new Clock('h:m:s');
// clock1.start();
console.log(clock1);


let slowTime = new ExtendedClock('h:m:s', 3000);
// slowTime.start();


// статические свойства и методы
class User{
    constructor(name) {
        this.name = name;
    }
    static sayHi() {
        alert(this === User);
    }
    static age = 25;

}

let user1 = new User('Lena');
User.makeTable = function() {
    return 'Table';
}
console.warn(user1);


// практика танчики
class Tank { // сделали чертёж танка
    constructor(ammunition = 10) { // каждому танку по умолчанию 10 снарядов
        this.ammunition = ammunition;
    }
    moveTo(x, y) {

    }
    fireTo(x, y) {
        if (this.canFire(this.ammunition)) { // если есть, делаем выстрел
            this.ammunition = this.ammunition - 1; // каждый выстрел это -1 снаряд
        } else console.error('No ammunition!');

    }
    moveAndFire(moveX, moveY, fireX, fireY) {
        this.moveTo(moveX, moveY);
        this.fireTo(fireX, fireY);
    }
    canFire(ammunition) { // проверяем перед каждым выстрелом, остались ли снаряды
        return (ammunition > 0) ? true : false;
    }
}

let tank1 = new Tank();
tank1.moveTo(10, 10)

let tank2 = new Tank();

tank2.fireTo(10,10); // стреляем в местонахождение 1 танка
tank2.moveAndFire(15, 30, 10, 10); // переместились и выстрелили

console.table(tank2);

// come.mu

/*
Реализуйте класс Worker (Работник), который будет иметь следующие свойства: name (имя), surname (фамилия), rate (ставка за день работы), days (количество отработанных дней). Также класс должен иметь метод getSalary(), который будет выводить зарплату работника. Зарплата - это произведение (умножение) ставки rate на количество отработанных дней days.
Модифицируйте класс Worker из предыдущей задачи следующим образом: сделайте все его свойства приватными, а для их чтения сделайте методы-геттеры.
Модифицируйте класс Worker из предыдущей задачи следующим образом: для свойства rate и для свойства days сделайте еще и методы-сеттеры.
*/
class Worker {
    constructor(...properties) { // деструктурируем в свойства
        [
            this._name,
            this._surname,
            this._rate,
            this._days,
        ] = properties;
        
    }
    get getSalary() {
          return this._rate * this._days;  
    }
    get getName() {
        return this._name;
    }
    get getSurname() {
        return this._surname;
    }
    get getRate() {
        return this._rate;
    }
    get getDays() {
        return this._days;
    }

    // возможность менять ставкии дни
    set setRate(rate) {
        this._rate = rate;
    }
    set setDays(days) {
        this._days = days;
    }
}

let worker1 = new Worker('Lera', 'Andreeva', 150, 23);
console.log("worker1", worker1)


/*
Реализуйте класс MyString, который будет иметь следующие методы: метод reverse(), который параметром принимает строку, а возвращает ее в перевернутом виде, метод ucFirst(), который параметром принимает строку, а возвращает эту же строку, сделав ее первую букву заглавной и метод ucWords, который принимает строку и делает заглавной первую букву каждого слова этой строки.
*/
class MyString {
    constructor() {}

    reverse(string) {
        return string.split('').reverse().join('');
    }
    unFirst(string) {
        return string[0].toUpperCase() + string.slice(1);
    }
}
let myStr = new MyString();
// myStr.reverse('Hello, my friend');
// myStr.unFirst('hello, my friend');
console.log("myStr", myStr)

/* 
Реализуйте класс Validator, который будет проверять строки. К примеру, у него будет метод isEmail параметром принимает строку и проверяет, является ли она корректным емейлом или нет. Если является - возвращает true, если не является - то false. Кроме того, класс будет иметь следующие методы: метод isDomain для проверки домена, метод isDate для проверки даты и метод isPhone для проверки телефона
*/
class Validator {
    constructor() {}

    isEmail(email) {
        const reg = /^[-._a-z0-9]+@(?:[a-z0-9][-a-z0-9]+\.)+[a-z]{2,6}$/;
        return email.match(reg) ? true : false;
    }
}
let valid1 = new Validator();
// valid1.isEmail('belevish_1998@mail.ru');



class MyArr2 extends Array {

    testMethod() {
        console.log('test');
    }
}
let a2 = new MyArr2();

console.warn({}.toString.call((window)));



class TestMixin {
    constructor() {
        this.class = 'ClassMixin';
    }
    classMethod() {
        console.log('Test');
    }
}
let test1 = new TestMixin();

let Mixin1 = {
    sayHi() {

    },
    checkStr() {

    }
};
Object.assign(TestMixin.prototype, Mixin1); // расширяем поведение
console.warn(test1);


/*
Реализуйте класс Student (Студент), который будет наследовать от класса User, подобно тому, как это сделано в теоретической части урока. Этот класс должен иметь следующие свойства: name (имя, наследуется от User), surname (фамилия, наследуется от User), year (год поступления в вуз). Класс должен иметь метод getFullName() (наследуется от User), с помощью которого можно вывести одновременно имя и фамилию студента. Также класс должен иметь метод getCourse(), который будет выводить текущий курс студента (от 1 до 5). Курс вычисляется так: нужно от текущего года отнять год поступления в вуз. Текущий год получите самостоятельно.
*/
class User2 {
    constructor(name, surname, year) {
        this.name = name;
        this.surname = surname;
        this.year = year;
    }
    getFullName() {
        return `${this.name} ${this.surname}`;
    }
    getCurrentYear() {
        return new Date().getFullYear();
    }
}

class Student extends User2 {

    getCourse() {
        return super.getCurrentYear() - this.year;
    }
}

let student1 = new Student('Lera', 'Averina', 2016);
console.log("student1", student1)

/*
Реализуйте класс Elem, который параметром принимает селектор одного HTML элемента и затем может выполнять с ним различные операции.
elem.html('!'); //запишет в текст элемента '!'
elem.append('!'); //запишет в начало элемента '!'
elem.prepend('!'); //запишет в конец элемента '!'
elem.attr('class', 'www'); //запишет в атрибут class значение www
*/

class Elem {
    constructor(selector) {
        this.element = document.querySelector(selector);
    }
    html(text) {
        this.element.textContent = text;
        return this;
    }
    attr(attrName, value) {
        this.element.setAttribute(attrName, value);
        return this;
    }
    append(text) {
        let textContent = this.element.textContent;
        this.element.textContent = text + textContent;
        return this;
    }
    prepend(text) {
        let textContent = this.element.textContent;
        this.element.textContent = textContent + text;
        return this;
    }
}

let elementTask1 = new Elem('.task1 > samp');
console.log("elementTask1", elementTask1)

elementTask1.html('Element').attr('class', 'samp');

/*
 Реализуйте класс Rectangle, о котором я рассказываю в видео в теоретической части урока. У него должны быть следующие свойства: ширина width, высота height. Также у него должны быть следующие методы: получить ширину getWidth, установить ширину setWidth, получить высоту getHeight, установить высоту setHeight.
*/
class Rectangle {
    constructor(selector, width = 5, height = 5) {
        this.rectangl = document.querySelector(selector);

        this.rectangl.style.width = `${width}px`;
        this.rectangl.style.height = `${height}px`;
    }
    getWidth() {
        return this.rectangl.style.width;
    }
    getHeight() {
        return this.rectangl.style.height;
    }
    setWidth(value) {
        this.rectangl.style.width = value;
        return this;
    }
    setHeight(value) {
        this.rectangl.style.height = value;
        return this;
    }
}
let rect1 = new Rectangle('.task2__rectangle', 100, 50);
console.log(rect1);




const integer_list = [1, 1, 2 ,3 ,1 ,2 ,3 ,4];
const values_list = [1, 3];

Array.prototype._removeEl = function (sourseArr, removableItems) {

    let resArr = sourseArr.filter((elem2) => {
        return !removableItems.includes(elem2);
    });
    return resArr;
};

let l = new Array();


console.group('Codewars');
console.log(l._removeEl(integer_list, values_list));
console.groupEnd('Codewars');




