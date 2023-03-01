"use strict";
//check Readme

let name = prompt('Your name');
let age = prompt('Your age');
let b = 2;
let a = 10;
let day = null;
//task1
{
    let city = prompt('Your city');
    let phone = prompt('Your phone');
    let email = prompt('Your email');
    let company = prompt('Your company');

    age = String(age);
    console.log(`Меня зовут ${name}, мне ${age}. Я проживаю в ${city}e и работаю в компании ${company}. Мои контактные данные ${phone}Б, ${email}`)
}

//task2
{
    let now = new Date();
    now = now.getUTCFullYear() - age;
     console.log(name, ', родился в ', now, ' году');
}

//task3
{
    let getSumString = function(str){
        let string = String(str);
        let firstStr = Number(string[0]) + Number(string[1]) + Number(string[2]);
        let secondStr =  Number(string[3]) + Number(string[4]) + Number(string[5]);
        if(firstStr === secondStr){
            console.log('да')
        }
        else{
            console.log('нет');
        }
    }
    getSumString('332233')
}

//task4
{
    function getA(a){
        if(a > 0){
            console.log('Верно')
        }
        else{
            console.log('Неверно')
        }
    }
    getA(1);
    getA(0);
    getA(-3);
}

//task5
{
    let sum = a+b;
    console.log('Cумма:',sum)
    console.log('Разность:',a-b)
    console.log('Произведение:',a*b)
    console.log('Частное:',a/b)
    if(sum > 1){
        sum = Math.pow(sum, 2)
        console.log('Квадрат суммы:', sum)
    }
}

//task6
{
    if(a > 2 && a < 11 || b >= 6 && b < 14){
        console.log('Верно')
    }else {
        console.log('Неверно')
    }
}

//task7
{
    let getHourDecade = () =>{
        let min = (Math.floor(Math.random() * 59 + 1));
        console.log('Минута ', min)
        if(min>0 && min<=15){
            console.log('1-ая декада часа');
        }else if(min >15 && min <=30){
            console.log('2-ая декада часа');
        }else if( min >30 && min <=45) {
            console.log('3-ая декада часа');
        }else if(min >45 && min <=59){
            console.log('4-ая декада часа');
        }
        else{
            console.log('error')
        }   
    }
    getHourDecade()
}
//task8 
{
    function getDayDecade() {
        day = (Math.floor(Math.random() * 31 + 1));
        console.log('День ', day);
        if(day > 0 && day <=11){
            console.log('1-ая декада месяца')
        }
        else if(day >11 && day <22){
            console.log('2-ая декада месяца')
        }
        else if(day >=22 && day < 32){
            console.log('3-ая декада месяца')
        }
        else{
            console.log('не впадает в календарь')
        }
  }
  getDayDecade()
}
//task9
{
    let getDataYear = () =>{
        day = (Math.floor(Math.random()* 900 + 1 ));
        let year = (day/365).toFixed(2);
        let month = (day/31).toFixed(2);
        let week = (day/7).toFixed(2);
        let hr = (day*24).toFixed();
        let min = (day * 1440).toFixed();
        let second = (day * 864000).toFixed(0);
        if(day>31 && day<365){
            console.log('Меньше года ' + ' Day:',day, ' Year:', year, ' Month:',month, 'Week:', week, ' hr:', hr, ' Min:', min, ' Second:', second)
        }
        if(day>7 && day<31){
            console.log('Меньше года, меньше месяца ' + ' Day:',day, ' Year:', year, ' Month:',month, 'Week:', week, ' hr:', hr, ' Min:', min, ' Second:', second)
        }
        if(day<7){
            console.log('Меньше года, меньше месяца, меньше недели' + ' Day:',day, ' Year:', year, ' Month:',month, 'Week:', week, ' hr:', hr, ' Min:', min, ' Second:', second)
        }
        if(day>365){
            console.log(' Day:',day, ' Year:', year, ' Month:',month, 'Week:', week, ' hr:', hr, ' Min:', min, ' Second:', second)
        }
    }
    getDataYear();
}

//task10
{
    function getTimeOfTheYear(){
        let count;
        day = (Math.floor(Math.random()* 365 + 1))
        console.log('День: ',day);
        if(day<=31){
            console.log('Январь')
            count = 'Winter'
        } else if(day>31 && day <= 59){
            console.log('Февраль')
            count = 'Winter'
        }else if(day>59 && day <= 90){
            console.log('Март')
            count = 'Spring'
        }else if(day>90 && day <= 120){
            console.log('Апрель')
            count = 'Spring'
        }else if(day>120 && day <= 151){
            console.log('Май')
            count = 'Spring'
        }else if(day>151 && day <= 182){
            console.log('Июнь')
            count = 'Summer'
        }else if(day>182 && day <= 212){
            console.log('Июль')
            count = 'Summer'
        }else if(day>212 && day <= 243){
            console.log('Август')
            count = 'Summer'
        }else if(day>243 && day <= 274){
            console.log('Сентябрь')
            count = 'Autumn'
        }else if(day>274 && day <= 304){
            console.log('Октябрь')
            count = 'Autumn'
        }else if(day>304 && day <= 334){
            console.log('Ноябрь')
            count = 'Autumn'
        }else if(day>334 && day <= 365){
            console.log('Декабрь')
            count = 'Winter'
        }
        else{
            console.log('Error')
        }
        switch(count){
            case 'Winter': console.log('Зима'); break;
            case 'Spring': console.log('Весна'); break;
            case 'Summer': console.log('Лето'); break;
            case 'Autumn': console.log('Осень'); break;
            default: console.log('error');
        }
    }
    getTimeOfTheYear();
}