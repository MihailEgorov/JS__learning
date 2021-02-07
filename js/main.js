"use strict";

const collections = document.querySelectorAll(".books");
const cardCollections = document.querySelectorAll(".book");
const headerElems = document.getElementsByTagName("h2");
const advertising = document.querySelector(".adv");
const collectionsLi = document.getElementsByTagName("li");


//console.log('collections: ', collections);



collections[0].prepend(  
                        cardCollections[1], 
                        cardCollections[0],
                        cardCollections[4],
                        cardCollections[3],
                        cardCollections[5]
                    );

document.body.style.backgroundImage = "url(../image/you-dont-know-js.jpg)";
headerElems[2].innerHTML = "<a>Книга 3. this и Прототипы Объектов</a>";
advertising.remove();


