"use strict";

var card = document.querySelector('.card');
var container = document.querySelector('.container'); //item

var title = document.querySelector('.title');
var sneaker = document.querySelector('.sneaker img');
var purchase = document.querySelector('.purchase button');
var description = document.querySelector('.info h3');
var sizes = document.querySelector('.sizes');
container.addEventListener("mousemove", function (e) {
  var xAxis = (window.innerWidth / 2 - e.pageX) / 25;
  var yAxis = (window.innerHeight / 2 - e.pageY) / 25;
  card.style.transform = "rotateY(".concat(xAxis, "deg) rotateX(").concat(yAxis, "deg)");
}); //Animate IN

container.addEventListener("mouseenter", function (e) {
  card.style.transition = 'none'; //Popout

  title.style.transform = 'translateZ(150px)';
  sneaker.style.transform = 'translateZ(150px) rotateZ(-360deg)';
  description.style.transform = 'translateZ(125px)';
  sizes.style.transform = 'translateZ(125px)';
  purchase.style.transform = 'translateZ(125px)';
}); //Animete OUT

container.addEventListener("mouseleave", function (e) {
  card.style.transition = 'all .5s ease';
  card.style.transform = "rotateY(0deg) rotateX(0deg)"; //Popback

  title.style.transform = 'translateZ(0px)';
  sneaker.style.transform = 'translateZ(0px) rotateZ(0deg)';
  description.style.transform = 'translateZ(0px)';
  sizes.style.transform = 'translateZ(0px)';
  purchase.style.transform = 'translateZ(0px)';
});