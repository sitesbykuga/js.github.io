let menuItem = document.querySelectorAll('.menu-item');
let menu = document.querySelector('.menu');

menu.insertBefore(menuItem[2], menuItem[1]);

let menuItemFive = document.createElement('li');
menuItemFive.classList.add('menu-item');
menuItemFive.textContent = "Пятый пункт";
menu.appendChild(menuItemFive);

document.body.style.backgroundImage = 'url(../img/apple_true.jpg)';

let title = document.getElementById('title');
title.textContent = 'Мы продаем только подлинную технику Apple';

let adv = document.querySelector('.adv');
adv.style.backgroundImage = 'url(../img/apple_true.jpg)';

let promp = document.getElementById('prompt');
//promp.textContent = prompt('Ваше отношение к технике Apple','');