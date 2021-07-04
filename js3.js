// каждый корабль - это объект который хранит в себе:
    // корабль:
            // палуба 1: координаты\нет координат если сбит
            // палуба 2: координаты\нет координат если сбит
            // палуба 3: координаты\нет координат если сбит
            // живой: тру\фолс
            
// Рандумное выставление первого корабля
// Второй корабль через функцию while: на основе первого корабля создаётся масив в который добавляются все координаты вокруг каждой палубы (9 клеток), и тут вторая 
// проверка - координаты добавляются, если их еще нет в масиве. В итоге из 9-ти палуб должно получится 18 координат. Координаты рандумно создаются до тех пор, пока не будет совпадений
// с масивом первого корабля.
// ==========================================

// Внесенные изменения:

// - убрал ключ кораблей "кол-во НР" и вынес его отдельной переменной,
//     так как будет мешать при проверке совпадения координат с выстрелом;
// - убрал ключ кораблей 'status = true\folse', потому как не имеет смысла
//     расчитывать жив\мёртв каждого корабля отдельно, потому как есть
//     общее кол-во НР;
    
// Версия 1.4:
    //- добавил окно палуб "жив\убит";
    //- добавил возможность ввода данных через ENter;
    //- добавил начальное сообщение в поле MessageChannel;
        // - изменил все сообщения;
        //  - изменил цветовую гамму всех элементов;

// Версия 1.5:
//     - Релизовал возможность клика по полю мышкой;
        // - добавил поле визуализации потопленных кораблей;
        // - практически полностью поменял дизайн;

// ==========================================

// ---------------
// debugger;
// ---------------
// Блок модель кораблей:

//    Объект корабль 1: {
//         Координаты палуба 1: ?;
//         Координаты палуба 2: ?;
//         Координаты палуба 3: ?;
//         Координаты палуба 4: ?;
//         Статус живой или мертвый: true or false;
//     };

//     Объект корабль 2: {
//         Координаты палуба 1: ?;
//         Координаты палуба 2: ?;
//         Координаты палуба 3: ?;
//         Статус живой или мертвый: true or false;
//     };

//     Объект корабль 3: {
//         Координаты палуба 1: ?;
//         Координаты палуба 2: ?;
//         Статус живой или мертвый: true or false;
//     };

//     Общее кол-во НР: НР корабль 1 + НР корабль 2 + Нр корабль 3 + НР корабль 4;
//     Массив координат в которые уже заняты:.....;
// -------------------------------------
// Блок начальных параметров:

let ship1 = {
    pal11: 0,
    pal12: 0,
    pal13: 0,
    pal14: 0,
    shipHP: 4
};

let ship2 = {
    pal21: 0,
    pal22: 0,
    pal23: 0,
    shipHP: 3
};

let ship3 = {
    pal31: 0,
    pal32: 0,
    shipHP: 2
};

let ship4 = {
    pal41: 0,
    shipHP: 1
};

allHP = 10;
const massXY = [];
let mass = [];

// ------------------------------------------

// Блок рандумное раставления кораблей:

// Функция 1 (радумное выставление первого корабля 1) {
//     - рандумное выставление корабля
//     - запись координат в общек корабля;    
//     - запись в массив координат координаты корабля + все координаты вокруг корабля;
// };

// Функция 2 (рандумное выставление второго корабля 2) {
//     - функция (рандумное выставление) {
//         1) рандумные координаты;
//         2) проверка есть ли координаты в массиве; если есть - возврат к пункту №1;
//      };
//     - запись координат в объект корабля;
//     - запись в массив координат координаты корабля + все координаты вокруг корабля;
// };

// Функция 3 (рандумное выставления корабля 3) {
//     - функция (рандумное выставление) {
//         1) рандумные координаты;
//         2) проверка есть ли координаты в массиве; если есть - возврат к пункту №1;
//      };
//     - запись координат в объект корабля;
// };


// =================================================ship1

function xORy () {
    let z = Math.round(Math.random() * 1);
    let x;

    if (z === 0) {
        x = 1;
    } else {
        x = 10;
    };

    return x;
};

// =========================================Ship1

let vector = xORy();

function coorShip1 () {
    let ocbX = Math.round(Math.random() * 3) + 1;
    let ocbY = (Math.round(Math.random() * 3) + 1) * 10;
    
    let XY = ocbX + ocbY;

       
    ship1.pal11 = XY;
    ship1.pal12 = ship1.pal11 + vector;
    ship1.pal13 = ship1.pal12 + vector;
    ship1.pal14 = ship1.pal13 + vector;

    

    return ship1;
};

ship1 = coorShip1();


function zone () {
    let yy = [];
    let x = [];
    let xx = [ship1.pal11 + 1, ship1.pal11 - 1, ship1.pal11 + 10, ship1.pal11 - 10,
            ship1.pal12 + 1, ship1.pal12 - 1, ship1.pal12 + 10, ship1.pal12 - 10,
            ship1.pal13 + 1, ship1.pal13 - 1, ship1.pal13 + 10, ship1.pal13 - 10,
            ship1.pal14 + 1, ship1.pal14 - 1, ship1.pal14 + 10, ship1.pal14 - 10];
            
            if (vector === 1){
                let xxx = [(ship1.pal11 - 1) + 10, (ship1.pal11 - 1) - 10,
                        (ship1.pal14 + 1) + 10, (ship1.pal14 + 1) - 10];

               x = xx.concat(xxx);
            } else {
                let xxx = [(ship1.pal11 - 10) + 1, (ship1.pal11 - 10) - 1,
                        (ship1.pal14 + 10) + 1, (ship1.pal14 + 10) - 1];

                x = xx.concat(xxx);
            };

        for (let i of x) {
            let y = true;

            for (let z of yy) {
                if (z === i) {
                    y = false;
                };
            }
            if (y === true) {
                yy.push(i)
            };
        };
        
        return yy;
};

let qqq = zone();

const massXY2 = massXY.concat(qqq);

// =========================================Ship2

function coorShip2 () {
    let y = false;
    let xy1;
    let XY;
    let vector;
  
    while (y === false) {
      
        function xORy () {
            let z = Math.round(Math.random() * 1);
            let x;
        
            if (z === 0) {
                x = 1;
            } else {
                x = 10;
            };
        
            return x;
        };
  
        vector = xORy();
   
  
        let ocbX = Math.round(Math.random() * 4) + 1;
        let ocbY = (Math.round(Math.random() * 4) + 1) * 10;
        
        XY = ocbX + ocbY;
  
  
        function crossCoordination () {
            let x = [];
  
            let x1 = XY;
            x.push(x1);
            let x2 = x1 + vector;
            x.push(x2);
            x3 = x2 + vector;
            x.push(x3);
            
            return x;
        };
  
        xy1 = crossCoordination();
  
  
        y = true;
  
        for (let i of xy1) {
            for (let z of massXY2) {
                if (i === z) {
                    y = false;
                };
            };
        };

  
    };

    ship2.pal21 = XY;
    ship2.pal22 = ship2.pal21 + vector;
    ship2.pal23 = ship2.pal22 + vector;
    
    return ship2;
};

ship2 = coorShip2();


function zone2 () {
    let yy = [];
    let x = [];
    let xx = [ship2.pal21 + 1, ship2.pal21 - 1, ship2.pal21 + 10, ship2.pal21 - 10,
              ship2.pal22 + 1, ship2.pal22 - 1, ship2.pal22 + 10, ship2.pal22 - 10,
              ship2.pal23 + 1, ship2.pal23 - 1, ship2.pal23 + 10, ship2.pal23 - 10];
            
            if (vector === 1){
                let xxx = [(ship2.pal21 - 1) + 10, (ship2.pal21 - 1) - 10,
                        (ship2.pal23 + 1) + 10, (ship2.pal23 + 1) - 10];

               x = xx.concat(xxx);
            } else {
                let xxx = [(ship2.pal21 - 10) + 1, (ship2.pal21 - 10) - 1,
                        (ship2.pal23 + 10) + 1, (ship2.pal23 + 10) - 1];

                x = xx.concat(xxx);
            };

        for (let i of x) {
            let y = true;

            for (let z of massXY2) {
                if (z === i) {
                    y = false;
                };
            }
            if (y === true) {
                yy.push(i)
            };
        };
        
        return yy;
};

let qqq2 = zone2();
    
let massXY3 = massXY2.concat(qqq2);

// =============================================ship3

function coorShip3 () {
    let y = false;
    let xy1;
    let XY;
    let vector;
  
    while (y === false) {
      
        function xORy () {
            let z = Math.round(Math.random() * 1);
            let x;
        
            if (z === 0) {
                x = 1;
            } else {
                x = 10;
            };
        
            return x;
        };
  
        vector = xORy();
   
  
        let ocbX = Math.round(Math.random() * 5) + 1;
        let ocbY = (Math.round(Math.random() * 5) + 1) * 10;
        
        XY = ocbX + ocbY;
  
  
        function crossCoordination () {
            let x = [];
  
            let x1 = XY;
            x.push(x1);
            let x2 = x1 + vector;
            x.push(x2);
                       
            return x;
        };
  
        xy1 = crossCoordination();
  
  
        y = true;
  
        for (let i of xy1) {
            for (let z of massXY3) {
                if (i === z) {
                    y = false;
                };
            };
        };

  
    };

    ship3.pal31 = XY;
    ship3.pal32 = ship3.pal31 + vector;
    
    
    return ship3;
};

ship3 = coorShip3();


function zone3 () {
    let yy = [];
    let x = [];
    let xx = [ship3.pal31 + 1, ship3.pal31 - 1, ship3.pal31 + 10, ship3.pal31 - 10,
              ship3.pal32 + 1, ship3.pal32 - 1, ship3.pal32 + 10, ship3.pal32 - 10];
                          
            if (vector === 1){
                let xxx = [(ship3.pal31 - 1) + 10, (ship3.pal31 - 1) - 10,
                        (ship3.pal32 + 1) + 10, (ship3.pal332 + 1) - 10];

               x = xx.concat(xxx);
            } else {
                let xxx = [(ship3.pal31 - 10) + 1, (ship3.pal31 - 10) - 1,
                        (ship3.pal32 + 10) + 1, (ship3.pal32 + 10) - 1];

                x = xx.concat(xxx);
            };

        for (let i of x) {
            let y = true;

            for (let z of massXY3) {
                if (z === i) {
                    y = false;
                };
            }
            if (y === true) {
                yy.push(i)
            };
        };
        
        return yy;
};

let qqq3 = zone3();
    
let massXY4 = massXY3.concat(qqq3);

// =====================================ship4

function coorShip4 () {
    let y = false;
    let xy1;
    let XY;
    let vector;
  
    while (y === false) {
      
        function xORy () {
            let z = Math.round(Math.random() * 1);
            let x;
        
            if (z === 0) {
                x = 1;
            } else {
                x = 10;
            };
        
            return x;
        };
  
        vector = xORy();
   
  
        let ocbX = Math.round(Math.random() * 6) + 1;
        let ocbY = (Math.round(Math.random() * 6) + 1) * 10;
        
        XY = ocbX + ocbY;
  
  
        function crossCoordination () {
            let x = [];
  
            let x1 = XY;
            x.push(x1);
                                   
            return x;
        };
  
        xy1 = crossCoordination();
  
  
        y = true;
  
        for (let i of xy1) {
            for (let z of massXY4) {
                if (i === z) {
                    y = false;
                };
            };
        };

  
    };

    ship4.pal41 = XY;
        
    return ship4;
};

ship4 = coorShip4();

// ---------------------------------------Блок инициализации данных для выстрела:

let shoot;
let hits = 10;
let shoots = 0;
let isSunk = false;
const allShipMass = [ship1, ship2, ship3, ship4];
// const allShipObj = {ship1, ship2, ship3, ship4};

// -----------------------------------------Блок цикла выстрела:

function displayMessage(msg) {
    let messege = document.getElementById('message');
    messege.innerHTML = msg;
};

function displayHit(shoot) {
    let cell = document.getElementById(shoot);
    cell.setAttribute('class', 'hit');
};

function displayMiss(shoot) {
    let cell = document.getElementById(shoot);
    cell.setAttribute('class', 'miss');
};

function displayHitShip(ii) {
    let cell = document.getElementById(ii);
    cell.setAttribute('id', 'miss');
};


console.log(ship1, ship2, ship3, ship4);

displayMessage('Адмирал! Пушки заряжены! Задайте координаты для выстрела в нижнем поле! Или нажмите на нужный квадрат');

function start(shoot) {
console.log(shoot);
            if (isSunk === true) {
                alert('Вы потапили все корабли. Нажми F5 для новой игры');
            };

            if (shoot < 1 || shoot > 77) {
                displayMessage('Вы ввели неверные координаты для выстрела');
            } else if (mass.includes(+shoot)) {
                displayMessage('По этим координатам выстрел уже был');
            } else {
                shoots +=1;

                let popadanie = false;

                for (let i of allShipMass) {
                    for (let ii in i){
                        if (shoot === i[ii]) {
                            allHP -=1;
                            i[ii] = 0;
                            i.shipHP -=1;
                            
                            mass.push(shoot);
                            displayHit(shoot);
                            displayHitShip(ii);

                            if(i.shipHP === 0) {
                                displayMessage(`Есть попадание! АДМИРАЛ! ВЫ ПОТАПИЛИ КОРАБЛЬ!`);
                            } else if (i.shipHP === 1) {
                                displayMessage(`Есть попадание! У этого корабля осталась ${i.shipHP} палуба`);
                            } else {
                            displayMessage(`Есть попадание! У этого корабля осталось ${i.shipHP} палубы`);
                            };
                            popadanie = true;
                        };
                    };
                };

                if (popadanie === false) {
                    mass.push(shoot);
                    displayMiss(shoot);
                    displayMessage('Вы промахнулись!');
                };

                if (allHP < 1) {
                    isSunk = true;
                };
            };

// ----------------------------------------Блок подсчёта и выдачи результатов

    let sniper;

    if (isSunk === true) {
        if (shoots < 1){
            sniper = `Адмирал! Вы победили без единого выстрела - противник здался!`;
        } else if (shoots <= 20) {
            sniper = 'Вы потрясающий стратег Адмирал!';
        } else if (shoots > 20 && shoots <= 35) {
            sniper = 'Не плохой результат Адмирал!';
        } else if (shoots > 35) {
            sniper = 'Командование будет недовольно...';
        } else {
            sniper = 'Ну хз (по идее это сообщение вообще не должно появиться';
        };

        displayMessage(`${sniper} Вы потопили все корабли за ${shoots} выстрелов.`);
    };
};


function init() {
    let shooting = document.getElementById('fire');
    shooting.onclick = shootings;
    let enterButton = document.getElementById('input');
    enterButton.onkeypress = keyPressFire;

    let clickTd = document.getElementsByTagName('td');

    for (let i = 0; i < clickTd.length; i++) {
        clickTd[i].onclick = clickCell;
    };
};


function coordinates(ocbX, ocbY) {
    let x;
    let y = ocbY;

    if (y < 1 || y > 7) {
        y = +100;
    };

    switch(ocbX) {
        case 'а':
            x = 10 + +y;
            break;
        case 'б':
            x = 20 + +y;
            break;
        case 'в':
            x = +30 + +y;
            break;
        case 'г':
            x = 40 + +y;
            break;
        case 'д':
            x = 50 + +y;
            break;
        case 'е':
            x =+60 + +y;
            break;
        case 'ё':
            x = 70 + +y;
            break;
        default:
            x = 100 + +y;
    };

    return x;
};


function shootings() {
    let input = document.getElementById('input');
    let inputNum = input.value;
    let ocbY = +inputNum[1];

    if (inputNum.length !== 2 || ocbY < 1 || ocbY > 7 || inputNum === null || !isFinite(ocbY)) {
        displayMessage('Вы ввели не верные координаты');
        input.value = '';
    } else {
        let ocbX = inputNum[0].toLowerCase();
        let xy = coordinates(ocbX, ocbY);
        start(xy);
        input.value = '';
        return inputNum;
    };
};


function keyPressFire(e) {
    let shooting = document.getElementById('fire');
    if (e.keyCode === 13) {
        shooting.click();
        return false;
    };
};


function clickCell(eventObj) {
    let td = eventObj.target;
    let shoot = td.id;
    
    if (isFinite(shoot) && shoot >= 1 && shoot <=77 && shoot.length === 2 && shoot[0] > 0) {
        start(+shoot);
    };
};


window.onload = init;
