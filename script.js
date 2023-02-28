"use strict";


// let name = prompt('Your name');
// let age = prompt('Your age');
let b = 2;
let a = 10; 
//task1
{
    // let city = prompt('Your city');
    // let phone = prompt('Your phone');
    // let email = prompt('Your email');
    // let company = prompt('Your company');

    // age = String(age);
    // if(age.length == 1  )

    // console.log(`Меня зовут ${name}, мне ${age}. Я проживаю в ${city}e и работаю в компании ${company}. Мои контактные данные ${phone}Б, ${email}`)
}

//task2
{
    // let now = new Date();
    // now = now.getUTCFullYear() - age;
    // console.log(name, ', родился в ', now, ' году');
}

//task3
{
    // let getSumString = function(str){
    //     let string = String(str);
    //     let firstStr = Number(string[0]) + Number(string[1]) + Number(string[2]);
    //     let secondStr =  Number(string[3]) + Number(string[4]) + Number(string[5]);
    //     if(firstStr === secondStr){
    //         console.log('да')
    //     }
    //     else{
    //         console.log('нет');
    //     }
    // }
    // getSumString('332233')
}

//task4
{
    // function getA(a){
    //     if(a > 0){
    //         console.log('Верно')
    //     }
    //     else{
    //         console.log('Неверно')
    //     }
    // }
    // getA(1);
    // getA(0);
    // getA(-3);
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
function getDayDecade() {
    let day = (Math.floor(Math.random() * 31 + 1));
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
//task9
{
    let getDataYear = () =>{
        let day = (Math.floor(Math.random()* 800 + 1 ))
        console.log('Дней: ',day)
    }
    getDataYear();
}
